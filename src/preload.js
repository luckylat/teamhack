const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld(
  "connect", {
    send: () => ipcRenderer.send('submit')
  }
)
