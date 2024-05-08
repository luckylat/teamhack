const { contextBridge, ipcRenderer } = require("electron");

window.abc = 123;

//contextBridge.exposeInMainWorld(
//  "connect", {
//    send: () => ipcRenderer.send('submit')
//  }
//)
