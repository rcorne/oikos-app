const { app, BrowserWindow, Menu } = require('electron');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 47821; // fixed, so localStorage (progress/XP/streak) persists across launches
const DIST_DIR = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.svg': 'image/svg+xml',
  '.map': 'application/json; charset=utf-8',
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const requestPath = decodeURIComponent(req.url.split('?')[0]);
      const safePath = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, '');
      let filePath = path.join(DIST_DIR, safePath);

      if (!filePath.startsWith(DIST_DIR)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }

      const tryServe = (candidate) => {
        fs.readFile(candidate, (err, data) => {
          if (err) return null;
          const ext = path.extname(candidate);
          res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
          res.end(data);
          return true;
        });
      };

      fs.stat(filePath, (err, stats) => {
        if (!err && stats.isFile()) {
          return tryServe(filePath);
        }
        if (!err && stats.isDirectory()) {
          const indexPath = path.join(filePath, 'index.html');
          return fs.readFile(indexPath, (err2, data) => {
            if (!err2) {
              res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
              return res.end(data);
            }
            return serveSpaFallback(res);
          });
        }
        // SPA client-side routes (e.g. /lesson/u1/u1-l1): fall back to root index.html
        serveSpaFallback(res);
      });
    });

    function serveSpaFallback(res) {
      fs.readFile(path.join(DIST_DIR, 'index.html'), (err, data) => {
        res.writeHead(err ? 404 : 200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(err ? 'Not found' : data);
      });
    }

    server.listen(PORT, '127.0.0.1', () => resolve());
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 430,
    height: 900,
    minWidth: 380,
    maxWidth: 480,
    minHeight: 700,
    title: 'Oikos',
    backgroundColor: '#13242C',
    icon: path.join(__dirname, 'build', 'icon.icns'),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadURL(`http://127.0.0.1:${PORT}/`);
}

app.whenReady().then(async () => {
  Menu.setApplicationMenu(null);
  await startServer();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
