// PADA desktop overlay: a transparent, frameless, always-on-top window that shows the PADA whiteboard.
// This folder lives inside the pada repository, so the whiteboard is one folder up: ../index.html
const { app, BrowserWindow, globalShortcut, screen, ipcMain, dialog, shell } = require("electron");
const path = require("path");
const { spawn } = require("child_process");
const fs = require("fs");
const AdmZip = require("adm-zip");
const { pathToFileURL } = require("url");

// ffmpeg bundled with the app (inside the installer, it is unpacked from app.asar)
const ffmpegPath = require("ffmpeg-static").replace("app.asar", "app.asar.unpacked");

let win = null;
let passThrough = false; // when true, mouse clicks go through the overlay to the apps underneath
let fullOverlay = true; // true: covers the whole screen; false: a smaller, movable window

// File types offered by the Tab menu's "Open File" sub-menu
const FILE_FILTERS = {
  pdf: [{ name: "PDF", extensions: ["pdf"] }],
  image: [{ name: "Images", extensions: ["png", "jpg", "jpeg", "gif", "bmp", "webp"] }],
  word: [{ name: "Word", extensions: ["doc", "docx"] }],
};

function setPassThrough(on) {
  passThrough = on;
  if (win) win.setIgnoreMouseEvents(on, { forward: true });
}

function createWindow() {
  const { x, y, width, height } = screen.getPrimaryDisplay().bounds;

  win = new BrowserWindow({
    x,
    y,
    width,
    height,
    transparent: true,
    frame: false,
    hasShadow: false,
    resizable: true,
    alwaysOnTop: true,
    backgroundColor: "#00000000",
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Stay above other windows, including full-screen apps such as Zoom
  win.setAlwaysOnTop(true, "screen-saver");
  win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });

  win.loadFile(path.join(__dirname, "www", "index.html"));
  win.on("closed", () => {
    win = null;
  });
}

// The page asks for a file: show the native dialog, then open the chosen file in its default program
ipcMain.handle("pada:open-file", async (_event, kind) => {
  const result = await dialog.showOpenDialog(win, {
    properties: ["openFile"],
    filters: FILE_FILTERS[kind] || [{ name: "All files", extensions: ["*"] }],
  });
  if (!result.canceled && result.filePaths.length) {
    await shell.openPath(result.filePaths[0]);
  }
});

// Converts a video the browser cannot play (e.g. MKV with unsupported codecs) to H.264/AAC MP4
ipcMain.handle("pada:transcode", (_event, srcPath) => {
  return new Promise((resolve, reject) => {
    const out = path.join(app.getPath("temp"), `pada-${Date.now()}.mp4`);
    const args = [
      "-y",
      "-i", srcPath,
      "-c:v", "libx264", "-preset", "veryfast", "-crf", "23", "-pix_fmt", "yuv420p",
      "-c:a", "aac", "-b:a", "160k",
      "-movflags", "+faststart",
      out,
    ];
    const proc = spawn(ffmpegPath, args);
    let log = "";
    proc.stderr.on("data", (d) => (log += d));
    proc.on("error", reject);
    proc.on("close", (code) => {
      if (code === 0) resolve(pathToFileURL(out).href);
      else reject(new Error(`ffmpeg stopped (code ${code}): ${log.slice(-300)}`));
    });
  });
});


// LibreOffice location: the saved path first, then the usual places.
// If it is not found, the user is asked to point to soffice.exe, and that choice is remembered.
const settingsFile = () => path.join(app.getPath("userData"), "pada-settings.json");

function readSettings() {
  try {
    return JSON.parse(fs.readFileSync(settingsFile(), "utf-8"));
  } catch {
    return {};
  }
}

function writeSettings(obj) {
  fs.mkdirSync(app.getPath("userData"), { recursive: true });
  fs.writeFileSync(settingsFile(), JSON.stringify(obj, null, 2));
}

function findSoffice() {
  const candidates = [
    readSettings().sofficePath,
    path.join(__dirname, "libreoffice", "program", "soffice.exe"),
    path.join(process.resourcesPath || __dirname, "libreoffice", "program", "soffice.exe"),
    "C:\\Program Files\\LibreOffice\\program\\soffice.exe",
    "C:\\Program Files (x86)\\LibreOffice\\program\\soffice.exe",
  ].filter(Boolean);
  return candidates.find((p) => fs.existsSync(p)) || null;
}

async function askSoffice() {
  const result = await dialog.showOpenDialog(win, {
    title: "Choose soffice.exe (usually in ...\\LibreOffice\\program\\soffice.exe)",
    properties: ["openFile"],
    filters: [{ name: "soffice", extensions: ["exe"] }],
  });
  if (result.canceled || !result.filePaths.length) return null;
  writeSettings({ ...readSettings(), sofficePath: result.filePaths[0] });
  return result.filePaths[0];
}


// Reads each slide's transition from the .pptx file (Fade, Push with direction, or none), in slide order
function readPptxTransitions(srcPath) {
  const zip = new AdmZip(srcPath);
  const text = (name) => {
    const e = zip.getEntry(name);
    return e ? e.getData().toString("utf8") : "";
  };
  const pres = text("ppt/presentation.xml");
  const rels = text("ppt/_rels/presentation.xml.rels");
  const slideIds = [...pres.matchAll(/<p:sldId [^>]*r:id="([^"]+)"/g)].map((m) => m[1]);
  const target = (rid) => {
    const m =
      rels.match(new RegExp(`<Relationship[^>]*Id="${rid}"[^>]*Target="([^"]+)"`)) ||
      rels.match(new RegExp(`<Relationship[^>]*Target="([^"]+)"[^>]*Id="${rid}"`));
    return m ? "ppt/" + m[1] : null;
  };
  return slideIds.map((rid) => {
    const file = target(rid);
    const xml = file ? text(file) : "";
    const t = xml.match(/<p:transition[\s\S]*?(?:<\/p:transition>|\/>)/);
    if (!t) return { kind: "none" };
    const body = t[0];
    if (/<p:fade/.test(body)) return { kind: "fade" };
    const push = body.match(/<p:push[^>]*dir="([lrud])"/);
    if (push) return { kind: "push", dir: push[1] };
    if (/<p:push/.test(body)) return { kind: "push", dir: "l" };
    return { kind: "fade" }; // other transitions are shown as Fade
  });
}


// ---- Animated objects of each slide, read from the .pptx XML ----
function attrsOf(s) {
  const o = {};
  for (const m of s.matchAll(/([\w:]+)="([^"]*)"/g)) o[m[1]] = m[2];
  return o;
}

function decodeXml(s) {
  return s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

// Each click (step) lists the animated objects that start with it, in order
function parseSteps(xml) {
  const tm = xml.match(/<p:timing>[\s\S]*<\/p:timing>/);
  if (!tm) return [];
  const t = tm[0];
  const starts = [...t.matchAll(/<p:cTn ([^>]*presetClass="[^"]*"[^>]*)>/g)];
  const steps = [];
  let cur = null;
  starts.forEach((m, i) => {
    const a = attrsOf(m[1]);
    const seg = t.slice(m.index, i + 1 < starts.length ? starts[i + 1].index : t.length);
    const spid = (seg.match(/<p:spTgt spid="(\d+)"/) || [])[1];
    if (!spid) return;
    const dur = +((seg.match(/<p:(?:animEffect|animMotion)[^>]*>[\s\S]*?<p:cTn dur="(\d+)"/) || [])[1] || 500);
    const motion = (seg.match(/<p:animMotion[^>]*\bpath="([^"]+)"/) || [])[1] || null;
    const eff = { spid, cls: a.presetClass, id: a.presetID, sub: +(a.presetSubtype || 0), dur, path: motion };
    if (!cur || a.nodeType === "clickEffect") {
      cur = [];
      steps.push(cur);
    }
    cur.push(eff);
  });
  return steps;
}

// Default text sizes of the master (titles, body text and other text boxes), in points x 100
function readStyleSizes(zip) {
  const e = zip.getEntry("ppt/slideMasters/slideMaster1.xml");
  const xml = e ? e.getData().toString("utf8") : "";
  const size = (tag, fallback) => {
    const m = xml.match(new RegExp(`<p:${tag}>[\\s\\S]*?<a:lvl1pPr[^>]*>[\\s\\S]*?<a:defRPr[^>]*\\bsz="(\\d+)"`));
    return m ? +m[1] : fallback;
  };
  return { title: size("titleStyle", 4400), body: size("bodyStyle", 2800), other: size("otherStyle", 1800) };
}

// Parses one shape or picture element into positions (EMU), geometry, fill, line and text
function parseItem(block, layoutBoxes, styles) {
  const idm = block.match(/<p:cNvPr[^>]*\bid="(\d+)"/);
  if (!idm) return null;
  const item = { id: idm[1], kind: block.startsWith("<p:pic") ? "pic" : "shape" };
  const xf = block.match(/<a:xfrm[^>]*>\s*<a:off x="(-?\d+)" y="(-?\d+)"\s*\/>\s*<a:ext cx="(\d+)" cy="(\d+)"/);
  let box = xf ? xf.slice(1).map(Number) : null;
  if (!box) {
    const ph = block.match(/<p:ph([^>]*)\/?>/);
    if (!ph) return null;
    const pa = attrsOf(ph[1]);
    box = layoutBoxes[pa.idx] || layoutBoxes[pa.type || "body"] || null;
    if (!box) return null;
  }
  [item.x, item.y, item.w, item.h] = box;
  const spPr = (block.match(/<p:spPr[\s\S]*?<\/p:spPr>/) || [""])[0];
  item.prst = (spPr.match(/<a:prstGeom prst="(\w+)"/) || [])[1] || "rect";
  const noLine = spPr.replace(/<a:ln[\s\S]*?<\/a:ln>/, "");
  const fill = noLine.match(/<a:solidFill>\s*<a:srgbClr val="(\w{6})"/);
  item.fill = fill ? "#" + fill[1] : null;
  const ln = spPr.match(/<a:ln[^>]*w="(\d+)"[\s\S]*?<a:srgbClr val="(\w{6})"/);
  item.line = ln ? { w: +ln[1], color: "#" + ln[2] } : null;
  if (item.kind === "pic") {
    const emb = block.match(/r:embed="([^"]+)"/);
    item.rid = emb ? emb[1] : null;
  } else {
    const tb = block.match(/<p:txBody>[\s\S]*?<\/p:txBody>/);
    const ph = block.match(/<p:ph([^>]*)\/?>/);
    const pt = ph ? attrsOf(ph[1]).type : null;
    const defSz = !ph ? styles.other : pt === "title" || pt === "ctrTitle" ? styles.title : styles.body;
    item.anchor = tb ? (tb[0].match(/<a:bodyPr[^>]*\banchor="(\w+)"/) || [])[1] || "t" : "t";
    item.paras = tb ? parseParas(tb[0], defSz) : [];
  }
  return item;
}

function parseParas(tb, defSz) {
  const paras = [];
  for (const pm of tb.matchAll(/<a:p>[\s\S]*?<\/a:p>/g)) {
    const p = pm[0];
    const algn = (p.match(/<a:pPr[^>]*algn="(\w+)"/) || [])[1] || "l";
    const runs = [];
    for (const rm of p.matchAll(/<a:r>([\s\S]*?)<\/a:r>/g)) {
      const r = rm[1];
      const rPr = attrsOf((r.match(/<a:rPr([^>]*)>/) || ["", ""])[1]);
      const color = (r.match(/<a:srgbClr val="(\w{6})"/) || [])[1];
      const latin = (r.match(/<a:latin typeface="([^"]+)"/) || [])[1];
      runs.push({
        t: decodeXml((r.match(/<a:t>([\s\S]*?)<\/a:t>/) || [])[1] || ""),
        sz: (rPr.sz ? +rPr.sz : defSz) / 100,
        color: color ? "#" + color : null,
        b: rPr.b === "1",
        i: rPr.i === "1",
        font: latin && !latin.startsWith("+") ? latin : null,
      });
    }
    paras.push({ algn: algn === "just" ? "l" : algn, runs });
  }
  return paras;
}

// For every slide: its animation steps and the animated objects (their text, shapes and pictures)
function readAnimatedScenes(zip, slideFiles, W, H) {
  const text = (name) => {
    const e = zip.getEntry(name);
    return e ? e.getData().toString("utf8") : "";
  };
  const styles = readStyleSizes(zip);
  const relsOf = (file) => {
    const out = {};
    for (const m of text(file.replace(/([^/]+)$/, "_rels/$1.rels")).matchAll(/<Relationship ([^>]*)\/>/g)) {
      const a = attrsOf(m[1]);
      out[a.Id] = a.Target;
    }
    return out;
  };
  const resolve = (base, target) => require("path").posix.normalize(require("path").posix.join(base, target));

  return slideFiles.map((file) => {
    const xml = text(file);
    const steps = parseSteps(xml);
    const ids = new Set(steps.flat().map((e) => e.spid));
    const rels = relsOf(file);
    const dir = file.replace(/[^/]+$/, "");
    // Placeholder positions from the slide's layout (used when a shape has no position of its own)
    const layoutFile = Object.values(rels).find((t) => t.includes("slideLayout"));
    const layoutBoxes = {};
    if (layoutFile) {
      for (const b of text(resolve(dir, layoutFile)).matchAll(/<p:sp>[\s\S]*?<\/p:sp>/g)) {
        const ph = b[0].match(/<p:ph([^>]*)\/?>/);
        const xf = b[0].match(/<a:off x="(-?\d+)" y="(-?\d+)"\s*\/>\s*<a:ext cx="(\d+)" cy="(\d+)"/);
        if (!ph || !xf) continue;
        const pa = attrsOf(ph[1]);
        const box = xf.slice(1).map(Number);
        if (pa.idx) layoutBoxes[pa.idx] = box;
        if (pa.type) layoutBoxes[pa.type] = box;
      }
    }
    const items = [];
    for (const m of xml.matchAll(/<p:(sp|pic)>[\s\S]*?<\/p:\1>/g)) {
      const idm = m[0].match(/<p:cNvPr[^>]*\bid="(\d+)"/);
      if (!idm || !ids.has(idm[1])) continue;
      const it = parseItem(m[0], layoutBoxes, styles);
      if (it && it.kind === "pic" && it.rid && rels[it.rid]) {
        const media = resolve(dir, rels[it.rid]);
        const e = zip.getEntry(media);
        if (e) {
          const ext = media.split(".").pop().toLowerCase();
          const mime = ext === "jpg" || ext === "jpeg" ? "image/jpeg" : ext === "gif" ? "image/gif" : "image/png";
          it.src = `data:${mime};base64,${e.getData().toString("base64")}`;
        }
      }
      if (it) items.push(it);
    }
    return { W, H, steps, items, removeIds: [...ids] };
  });
}

// Removes the animated objects from a slide, so the PDF shows the static parts only
function removeAnimated(xml, ids) {
  return xml.replace(/<p:(sp|pic)>[\s\S]*?<\/p:\1>/g, (block) => {
    const m = block.match(/<p:cNvPr[^>]*\bid="(\d+)"/);
    return m && ids.includes(m[1]) ? "" : block;
  });
}

// Slide size and the slide files, in presentation order
function pptxSlideFiles(zip) {
  const text = (name) => {
    const e = zip.getEntry(name);
    return e ? e.getData().toString("utf8") : "";
  };
  const pres = text("ppt/presentation.xml");
  const rels = text("ppt/_rels/presentation.xml.rels");
  const sz = pres.match(/<p:sldSz[^>]*cx="(\d+)"[^>]*cy="(\d+)"/);
  const W = sz ? +sz[1] : 9144000;
  const H = sz ? +sz[2] : 5143500;
  const files = [...pres.matchAll(/<p:sldId [^>]*r:id="([^"]+)"/g)].map((m) => {
    const r = m[1];
    const t =
      (rels.match(new RegExp(`<Relationship[^>]*Id="${r}"[^>]*Target="([^"]+)"`)) ||
        rels.match(new RegExp(`<Relationship[^>]*Target="([^"]+)"[^>]*Id="${r}"`)) ||
        [])[1];
    return t ? "ppt/" + t : null;
  });
  return { W, H, files: files.filter(Boolean) };
}

// Converts a .pptx/.ppt to PDF (one page per slide). Animated objects are taken out of the
// PDF and returned as native scenes, so the app can draw them and animate them itself.
ipcMain.handle("pada:pptx", async (_event, srcPath) => {
  let soffice = findSoffice();
  if (!soffice) soffice = await askSoffice();
  if (!soffice) throw new Error("LibreOffice was not found. Install it from libreoffice.org.");

  const zip = new AdmZip(srcPath);
  const { W, H, files } = pptxSlideFiles(zip);
  let scenes = [];
  try {
    scenes = readAnimatedScenes(zip, files, W, H);
  } catch {
    scenes = [];
  }

  // A copy of the presentation with the animated objects removed (converted to PDF below)
  const work = path.join(app.getPath("temp"), `pada-pptx-${Date.now()}`);
  fs.mkdirSync(work, { recursive: true });
  const copyPath = path.join(work, "slides.pptx");
  const copy = new AdmZip(srcPath);
  scenes.forEach((sc, i) => {
    if (!sc.removeIds.length) return;
    const e = copy.getEntry(files[i]);
    copy.updateFile(files[i], Buffer.from(removeAnimated(e.getData().toString("utf8"), sc.removeIds), "utf8"));
  });
  copy.writeZip(copyPath);

  const outDir = path.join(work, "pdf");
  fs.mkdirSync(outDir, { recursive: true });
  const { code, log } = await new Promise((resolve, reject) => {
    const proc = spawn(soffice, ["--headless", "--convert-to", "pdf", "--outdir", outDir, copyPath]);
    let log = "";
    proc.stderr.on("data", (d) => (log += d));
    proc.on("error", reject);
    proc.on("close", (code) => resolve({ code, log }));
  });
  const pdf = path.join(outDir, "slides.pdf");
  if (code !== 0 || !fs.existsSync(pdf)) throw new Error(`Conversion failed (code ${code}) ${log.slice(-200)}`);

  let transitions = [];
  try {
    transitions = readPptxTransitions(srcPath);
  } catch {
    transitions = [];
  }
  return {
    pdf: fs.readFileSync(pdf),
    transitions,
    scenes: scenes.map((sc) => ({ W: sc.W, H: sc.H, steps: sc.steps, items: sc.items })),
  };
});

// English spelling: a dictionary is loaded once, then words are checked and suggestions made
let spellPromise = null;
function spellChecker() {
  if (!spellPromise) {
    spellPromise = new Promise((resolve, reject) => {
      try {
        require("dictionary-en")((err, dict) => {
          if (err) return reject(err);
          resolve(require("nspell")(dict.aff, dict.dic));
        });
      } catch (e) {
        reject(e);
      }
    });
  }
  return spellPromise;
}

ipcMain.handle("pada:spell", async (_event, words) => {
  const sp = await spellChecker();
  return words.map((w) => {
    const ok = sp.correct(w);
    return { word: w, ok, sugg: ok ? [] : sp.suggest(w).slice(0, 5) };
  });
});

// Save board / Open board (.pada files), reading media files, and auto-save
const autosavePath = () => path.join(app.getPath("userData"), "autosave.pada");

ipcMain.handle("pada:saveBoard", async (_event, json, name) => {
  const r = await dialog.showSaveDialog(win, {
    title: "Save board",
    defaultPath: name,
    filters: [{ name: "PADA board", extensions: ["pada"] }],
  });
  if (r.canceled || !r.filePath) return null;
  fs.writeFileSync(r.filePath, json, "utf8");
  return r.filePath;
});

ipcMain.handle("pada:openBoard", async () => {
  const r = await dialog.showOpenDialog(win, {
    title: "Open board",
    properties: ["openFile"],
    filters: [{ name: "PADA board", extensions: ["pada"] }],
  });
  if (r.canceled || !r.filePaths.length) return null;
  return fs.readFileSync(r.filePaths[0], "utf8");
});

ipcMain.handle("pada:readFile", (_event, filePath) => fs.readFileSync(filePath));

ipcMain.handle("pada:autoSave", (_event, json) => {
  fs.mkdirSync(app.getPath("userData"), { recursive: true });
  fs.writeFileSync(autosavePath(), json, "utf8");
  return true;
});

ipcMain.handle("pada:loadAutosave", () => (fs.existsSync(autosavePath()) ? fs.readFileSync(autosavePath(), "utf8") : null));

// Moves the overlay window by the mouse movement on the ribbon (used when the window is not full screen)
ipcMain.on("pada:move", (_event, dx, dy) => {
  if (!win) return;
  const [x, y] = win.getPosition();
  win.setPosition(Math.round(x + dx), Math.round(y + dy));
});

// Window buttons in the ribbon: minimize, resize (full screen <-> smaller window), close
ipcMain.on("pada:window", (_event, action) => {
  if (!win) return;
  if (action === "minimize") {
    win.minimize();
  } else if (action === "close") {
    app.quit();
  } else if (action === "resize") {
    const display = screen.getDisplayMatching(win.getBounds()).bounds;
    if (fullOverlay) {
      win.setBounds({
        x: display.x + Math.round(display.width * 0.15),
        y: display.y + Math.round(display.height * 0.15),
        width: Math.round(display.width * 0.7),
        height: Math.round(display.height * 0.7),
      });
    } else {
      win.setBounds({ x: display.x, y: display.y, width: display.width, height: display.height });
    }
    fullOverlay = !fullOverlay;
  }
});

app.whenReady().then(() => {
  createWindow();

  // Ctrl+Alt+P: switch between drawing mode and click-through mode
  globalShortcut.register("CommandOrControl+Alt+P", () => setPassThrough(!passThrough));
  // Ctrl+Alt+Q: close the overlay
  globalShortcut.register("CommandOrControl+Alt+Q", () => app.quit());
  // Ctrl+Alt+1..8: choose a palette colour (works even while Zoom has focus)
  for (let i = 1; i <= 8; i++) {
    globalShortcut.register(`CommandOrControl+Alt+${i}`, () => {
      if (win) win.webContents.send("pada:color", i);
    });
  }
  // Ctrl+Alt+D: open or close the developer console (for diagnosing problems)
  globalShortcut.register("CommandOrControl+Alt+D", () => {
    if (win) win.webContents.toggleDevTools();
  });
});

app.on("will-quit", () => globalShortcut.unregisterAll());
app.on("window-all-closed", () => app.quit());
