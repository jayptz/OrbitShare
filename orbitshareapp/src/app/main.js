const { app, BrowserWindow, shell, session } = require('electron');

function createWindow() {
  const win = new BrowserWindow({ width: 1200, height: 800 });
  win.loadURL('http://localhost:3000'); // or win.loadFile('index.html')

  // Open external URLs (like System Settings deep links) in the OS, not in-app
  win.webContents.setWindowOpenHandler(({ url }) => {
    try { shell.openExternal(url); } catch (_) {}
    return { action: 'deny' };
  });

  win.webContents.on('will-navigate', (event, url) => {
    const isLocal = url.startsWith('http://localhost:3000') || url.startsWith('https://localhost:3000');
    if (!isLocal) {
      event.preventDefault();
      try { shell.openExternal(url); } catch (_) {}
    }
  });
}

app.whenReady().then(() => {
  // Allow display-capture/media permissions from our app origin
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback, details) => {
    if (permission === 'media' || permission === 'display-capture') {
      return callback(true);
    }
    callback(false);
  });
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});