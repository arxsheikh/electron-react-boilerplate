const { app } = require('electron');

function isDev() {
  return !app.isPackaged || process.defaultApp || /node_modules[\\/]electron[\\/]/.test(process.execPath);
}

module.exports = isDev;
