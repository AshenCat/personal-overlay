const { app, BrowserWindow } = require('electron');

require('@electron/remote/main').initialize()

function createWindow() {
    const win = new BrowserWindow({
        width:1280, minWidth:600,
        height: 768, minHeight: 768,
        frame: false,
        webPreferences: {
            enableRemoteModule: true
        }
    })
    win.setBackgroundColor('#333333')
    win.webContents.openDevTools()
    win.loadURL('http://localhost:3000')
}



app.on('ready', createWindow)

app.on('window-all-closed', function() {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    if(BrowserWindow.getAllWindows().length === 0) createWindow()
})