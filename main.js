const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 200,
    height: 100,
    maxHeight: 100, minHeight: 100,
    maxWidth: 200, minWidth: 200,
    frame: false,
    autoHideMenuBar: true,
    transparent: true,
    alwaysOnTop: true,
    fullscreenable: false,
    focusable: false,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js')
    }
  })

  win.setAlwaysOnTop(true, "screen-saver");

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on("close-app", () => {
    app.quit(); //closes the application!
})