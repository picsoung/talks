import { readFile, stat } from 'node:fs/promises';
import assert from 'node:assert/strict';
const root = new URL('../', import.meta.url);
const talks = JSON.parse(await readFile(new URL('talks.json', root), 'utf8'));
const home = await readFile(new URL('dist/index.html', root), 'utf8');
const redirects = await readFile(new URL('dist/_redirects', root), 'utf8');
for (const talk of talks) {
  assert(home.includes(`href="/${talk.slug}/"`), `Missing homepage link: ${talk.slug}`);
  assert(redirects.includes(`/${talk.slug}/* /${talk.slug}/index.html 200`), `Missing route: ${talk.slug}`);
  assert(home.includes(`src="/previews/${talk.slug}.png"`), `Missing thumbnail: ${talk.slug}`);
  const thumbnail = await readFile(new URL(`dist/previews/${talk.slug}.png`, root));
  assert(thumbnail.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10])), `Invalid PNG: ${talk.slug}`);
  const html = await readFile(new URL(`dist/${talk.slug}/index.html`, root), 'utf8');
  for (const [, url] of html.matchAll(/(?:src|href)="(\/[^"#?]+)"/g)) {
    assert(url.startsWith(`/${talk.slug}/`), `${talk.slug}: unscoped asset ${url}`);
    await stat(new URL(`dist${url}`, root));
  }
  console.log(`PASS ${talk.slug}: homepage link, slide fallback, entry assets`);
}
console.log(`Verified ${talks.length} talks.`);
