const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const isDev = process.argv.includes('--dev');

// Keep a global reference of the window object
let mainWindow;
let previewWindow;

function createPreviewWindow() {
  // Create a preview window with sample content
  previewWindow = new BrowserWindow({
    width: 800,
    height: 600,
    x: 50,
    y: 50,
    title: 'OrbitShare Preview',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false
    },
    show: false
  });

  // Load sample HTML content for preview
  const sampleHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>OrbitShare Preview</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          margin: 0;
          padding: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .subtitle {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 3rem;
        }
        .feature {
          background: rgba(255,255,255,0.1);
          padding: 20px;
          border-radius: 10px;
          backdrop-filter: blur(10px);
        }
        .feature h3 {
          margin: 0 0 10px 0;
          color: #ffd700;
        }
        .status {
          position: fixed;
          top: 20px;
          right: 20px;
          background: rgba(0,255,0,0.8);
          color: white;
          padding: 10px 20px;
          border-radius: 20px;
          font-size: 0.9rem;
        }
      </style>
    </head>
    <body>
      <div class="status">Electron Preview Active</div>
      <div class="container">
        <h1>🚀 OrbitShare</h1>
        <div class="subtitle">Switching Screens, has never been easier.</div>
        
        <div class="features">
          <div class="feature">
            <h3>✨ Seamless</h3>
            <p>Switch between screens effortlessly with our intuitive interface</p>
          </div>
          <div class="feature">
            <h3>⚡ Fast</h3>
            <p>Lightning-fast performance for the best user experience</p>
          </div>
          <div class="feature">
            <h3>🔒 Secure</h3>
            <p>Built with security and privacy in mind</p>
          </div>
        </div>
        
        <div style="margin-top: 3rem; opacity: 0.8;">
          <p>This is a preview window to test Electron functionality.</p>
          <p>Your main app is running in the other window.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  previewWindow.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(sampleHTML));
  
  previewWindow.once('ready-to-show', () => {
    previewWindow.show();
  });

  previewWindow.on('closed', () => {
    previewWindow = null;
  });
}

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'assets/icon.png'), // You can add an icon later
    show: false, // Don't show until ready
    titleBarStyle: 'default',
    backgroundColor: '#ffffff'
  });

  // Load the app
  if (isDev) {
    // In development, load from the frontend dev server
    mainWindow.loadURL('http://localhost:3000');
    // Open DevTools in development
    mainWindow.webContents.openDevTools();
  } else {
    // In production, load the built frontend
    mainWindow.loadFile(path.join(__dirname, 'renderer/index.html'));
  }

  // Show window when ready to prevent visual flash
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Handle window closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Create preview window for testing
  createPreviewWindow();

  // Handle external links
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    require('electron').shell.openExternal(url);
    return { action: 'deny' };
  });
}

// Create window when Electron is ready
app.whenReady().then(() => {
  createWindow();

  // On macOS, re-create window when dock icon is clicked
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Security: Prevent new window creation
app.on('web-contents-created', (event, contents) => {
  contents.on('new-window', (event, navigationUrl) => {
    event.preventDefault();
    require('electron').shell.openExternal(navigationUrl);
  });
});

// Create application menu
const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Quit',
        accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
        click: () => {
          app.quit();
        }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' }
    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' },
      { type: 'separator' },
      {
        label: 'Toggle Preview Window',
        accelerator: 'CmdOrCtrl+P',
        click: () => {
          if (previewWindow && !previewWindow.isDestroyed()) {
            if (previewWindow.isVisible()) {
              previewWindow.hide();
            } else {
              previewWindow.show();
            }
          } else {
            createPreviewWindow();
          }
        }
      }
    ]
  },
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'close' }
    ]
  }
];

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideOthers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  });
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
