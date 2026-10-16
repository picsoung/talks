import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(fileURLToPath(new URL('../dist/', import.meta.url)));
const talks = JSON.parse(await readFile(new URL('../talks.json', import.meta.url), 'utf8'));
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.woff2':'font/woff2','.mp4':'video/mp4'};
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let path = resolve(root, '.' + pathname);
    if (path !== root && !path.startsWith(root + sep)) { res.writeHead(403).end(); return; }
    let status = 200;
    try { if ((await stat(path)).isDirectory()) path = resolve(path, 'index.html'); await stat(path); }
    catch {
      const talk = talks.find(talk => pathname.startsWith(`/${talk.slug}/`));
      path = resolve(root, talk ? `${talk.slug}/index.html` : '404.html');
      if (!talk) status = 404;
    }
    res.writeHead(status, {'Content-Type':types[extname(path)] || 'application/octet-stream'});
    res.end(await readFile(path));
  } catch { res.writeHead(500).end('Build the site with npm run build first.'); }
}).listen(4173, '127.0.0.1', () => console.log('Talk directory: http://127.0.0.1:4173'));
