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
    title: "LibreOffice-এর soffice.exe বেছে নিন (সাধারণত ...\\LibreOffice\\program\\soffice.exe)",
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

// Converts a .pptx/.ppt to PDF (one page per slide) and returns the PDF bytes
ipcMain.handle("pada:pptx", async (_event, srcPath) => {
  let soffice = findSoffice();
  if (!soffice) soffice = await askSoffice();
  if (!soffice) throw new Error("LibreOffice পাওয়া যায়নি। libreoffice.org থেকে ইনস্টল করুন।");

  const outDir = path.join(app.getPath("temp"), `pada-pptx-${Date.now()}`);
  fs.mkdirSync(outDir, { recursive: true });
  const { code, log } = await new Promise((resolve, reject) => {
    const proc = spawn(soffice, ["--headless", "--convert-to", "pdf", "--outdir", outDir, srcPath]);
    let log = "";
    proc.stderr.on("data", (d) => (log += d));
    proc.on("error", reject);
    proc.on("close", (code) => resolve({ code, log }));
  });
  const pdf = path.join(outDir, path.basename(srcPath, path.extname(srcPath)) + ".pdf");
  if (code !== 0 || !fs.existsSync(pdf)) throw new Error(`রূপান্তর ব্যর্থ (code ${code}) ${log.slice(-200)}`);
  let transitions = [];
  try {
    transitions = readPptxTransitions(srcPath);
  } catch {
    transitions = [];
  }
  return { pdf: fs.readFileSync(pdf), transitions };
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
