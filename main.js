'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
var mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('will-finish-launching', function () {
  console.log('will-finish-launching');
});

app.on('ready', function () {
  console.log('ready');
  createWindow();
});

app.on('window-all-closed', function () {
  console.log('window-all-closed');
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('before-quit', function () {
  console.log('before-quit');
});

app.on('will-quit', function () {
  console.log('will-quit');
});

app.on('quit', function () {
  console.log('quit');
});

app.on('browser-window-blur', function () {
  console.log('browser-window-blur');
});

app.on('browser-window-focus', function () {
  console.log('browser-window-focus');
});

app.on('browser-window-created', function () {
  console.log('browser-window-created');
});