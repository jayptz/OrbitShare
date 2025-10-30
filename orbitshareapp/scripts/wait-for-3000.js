/* eslint-disable no-console */
const net = require('net');
const { spawn } = require('child_process');

const HOST = '127.0.0.1';
const PORT = 3000;
const RETRY_MS = 300;

function waitForPort(host, port) {
  return new Promise((resolve) => {
    const tryConnect = () => {
      const socket = new net.Socket();
      socket.setTimeout(1000);
      socket.once('error', () => {
        socket.destroy();
        setTimeout(tryConnect, RETRY_MS);
      });
      socket.once('timeout', () => {
        socket.destroy();
        setTimeout(tryConnect, RETRY_MS);
      });
      socket.connect(port, host, () => {
        socket.end();
        resolve();
      });
    };
    tryConnect();
  });
}

(async () => {
  console.log(`[wait] Waiting for http://${HOST}:${PORT} ...`);
  await waitForPort(HOST, PORT);
  console.log('[wait] Next.js is ready. Launching Electron...');
  const child = spawn('electron', ['.'], { stdio: 'inherit', shell: true });
  child.on('exit', (code) => process.exit(code ?? 0));
})();


