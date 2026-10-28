// Runs before the PADA page loads. Exposes one safe function to the page: window.padaDesktop.openFile(kind)
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("padaDesktop", {
  openFile: (kind) => ipcRenderer.invoke("pada:open-file", kind),
});
