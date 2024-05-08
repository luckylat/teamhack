const { contextBridge, ipcRenderer } = require("electron");

window.abc = 123;

const SAFE_PROTOCOLS = ["http:", "https:"];

document.addEventListener('click', (e) => {
  if (e.target.nodeName === 'A') {
    let link = e.target;
    if (SAFE_PROTOCOLS.indexOf(link.protocol) !== -1){
      shell.OpenExternal(link.href);
    } else {
      alert("this link is not allowed");
    }
    e.preventDefault()
  }
}, false);
//contextBridge.exposeInMainWorld(
//  "connect", {
//    send: () => ipcRenderer.send('submit')
//  }
//)
