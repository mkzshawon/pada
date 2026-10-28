// Runs before the PADA page loads. Exposes safe functions to the page as window.padaDesktop
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("padaDesktop", {
  openFile: (kind) => ipcRenderer.invoke("pada:open-file", kind),
  windowControl: (action) => ipcRenderer.send("pada:window", action),
});
