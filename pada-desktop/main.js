// PADA desktop overlay: a transparent, frameless, always-on-top window that shows the PADA whiteboard.
// This folder lives inside the pada repository, so the whiteboard is one folder up: ../index.html
const { app, BrowserWindow, globalShortcut, screen, ipcMain, dialog, shell } = require("electron");
const path = require("path");

let win = null;
let passThrough = false; // when true, mouse clicks go through the overlay to the apps underneath

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
    resizable: false,
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

  win.loadFile(path.join(__dirname, "..", "index.html"));
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

app.whenReady().then(() => {
  createWindow();

  // Ctrl+Alt+P: switch between drawing mode and click-through mode
  globalShortcut.register("CommandOrControl+Alt+P", () => setPassThrough(!passThrough));
  // Ctrl+Alt+Q: close the overlay
  globalShortcut.register("CommandOrControl+Alt+Q", () => app.quit());
});

app.on("will-quit", () => globalShortcut.unregisterAll());
app.on("window-all-closed", () => app.quit());
