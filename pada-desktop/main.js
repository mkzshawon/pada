// PADA desktop overlay: a transparent, frameless, always-on-top window that shows the PADA whiteboard.
// This folder lives inside the pada repository, so the whiteboard is one folder up: ../index.html
const { app, BrowserWindow, globalShortcut, screen } = require("electron");
const path = require("path");

let win = null;
let passThrough = false; // when true, mouse clicks go through the overlay to the apps underneath

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
    webPreferences: { contextIsolation: true },
  });

  // Stay above other windows, including full-screen apps such as Zoom
  win.setAlwaysOnTop(true, "screen-saver");
  win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });

  win.loadFile(path.join(__dirname, "..", "index.html"));
  win.on("closed", () => {
    win = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  // Ctrl+Alt+P: switch between drawing mode and click-through mode
  globalShortcut.register("CommandOrControl+Alt+P", () => setPassThrough(!passThrough));
  // Ctrl+Alt+Q: close the overlay
  globalShortcut.register("CommandOrControl+Alt+Q", () => app.quit());
});

app.on("will-quit", () => globalShortcut.unregisterAll());
app.on("window-all-closed", () => app.quit());
