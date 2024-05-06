const fs = require('fs')
const { app, BrowserWindow } = require('electron/main')
const { shell } = require('electron');

const createWindow = () => {
  // https://www.electronjs.org/ja/docs/latest/api/browser-window#new-browserwindowoptions
  // https://chromium.googlesource.com/chromium/src/+/main/docs/design/sandbox.md
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    WebPreferences: {
      sandbox: true,
      preload: 'src/preload.js'
    }
  })
  //サンドボックスがtrue/falseであることを判別する方法
  //ローカルファイルにアクセスできるか
  const filePath = "./src/main.js";
  const data = fs.readFileSync(filePath, {encoding: 'utf8'})
  console.log(data);
  // アクセス可能?
  // Electronをビルドしてみる
  //win.loadURL('https://google.com')
  win.loadFile('asset/index.html')
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
