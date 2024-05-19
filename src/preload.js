const { contextBridge, ipcRenderer } = require("electron");

window.ipc = ipcRenderer;

const SAFE_PROTOCOLS = ["http:", "https:"];

document.addEventListener('click', (e) => {
  someFunc(handlerA);
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

const handlerA = (val) => {
  console.log("In handlerA", val);
  this.status = val;
}

const someFunc = (handler) => {
  console.log("triggered");
  handler.call(this, "secret");
}
