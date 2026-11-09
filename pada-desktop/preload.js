// Runs before the PADA page loads. Exposes safe functions to the page as window.padaDesktop
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("padaDesktop", {
  openFile: (kind) => ipcRenderer.invoke("pada:open-file", kind),
  windowControl: (action) => ipcRenderer.send("pada:window", action),
  moveWindow: (dx, dy) => ipcRenderer.send("pada:move", dx, dy),
  transcodeVideo: (srcPath) => ipcRenderer.invoke("pada:transcode", srcPath),
  convertPptx: (srcPath) => ipcRenderer.invoke("pada:pptx", srcPath),
  spellCheck: (words) => ipcRenderer.invoke("pada:spell", words),
  onColor: (callback) => ipcRenderer.on("pada:color", (_event, index) => callback(index)),
});
