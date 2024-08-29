const { app, BrowserWindow, ipcMain, BrowserView } = require('electron');
const path = require('path');
const { createServer } = require('./utils/staticserve');
const isDev = require('./utils/isDev'); // Assuming you have the isDev module

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, 'preload.bundle.js'),
      nodeIntegration: true,
      contextIsolation: true
    }
  });

  if (isDev()) {
    mainWindow.loadURL('http://localhost:3000');
  } else {
    const port = 8080;
    const buildPath = path.join(__dirname, '../build');
    createServer(port, buildPath);
    mainWindow.loadURL(`http://localhost:${port}`);
  }
}

app.whenReady().then(createMainWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});
