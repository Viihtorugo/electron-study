const electron = require("electron");
const sizeOf = require('image-size');
const {app, BrowserWindow, ipcMain} = electron;

app.on("ready", () => {
   const mainWindow = new BrowserWindow({
       webPreferences: {
           nodeIntegration: true
       }
   });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('getDimImg', (event, path) => {
    sizeOf(path, function(err, dimensions) {
        console.log('largura:' + dimensions.width, 'altura:' + dimensions.height);
    })
});