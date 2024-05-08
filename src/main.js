const fs = require('fs');
const path = require('path');
const { app, BrowserWindow } = require('electron/main');
const { shell } = require('electron');

const createWindow = () => {
  // https://www.electronjs.org/ja/docs/latest/api/browser-window#new-browserwindowoptions
  // https://chromium.googlesource.com/chromium/src/+/main/docs/design/sandbox.md
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      //nodeIntegration: true,
      // sandbox: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  //サンドボックスがtrue/falseであることを判別する方法
  //ローカルファイルにアクセスできるか
  const filePath = "./src/main.js";
  const data = fs.readFileSync(filePath, {encoding: 'utf8'})
  //console.log(data);
  // アクセス可能?
  // Electronをビルドしてみる
  //win.loadURL('https://google.com')
  win.loadFile('asset/index.html')
  someFunc(handlerA);
  //shell.openExternal('https://github.com')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
  
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

const handlerA = (val) => {
  this.status = val;
}

const someFunc = (handler) => {
  console.log("triggered");
  handler.call("secret");
}


