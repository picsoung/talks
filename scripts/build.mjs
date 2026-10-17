import { readFile, writeFile, mkdir, readdir, rm, cp } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, relative, sep, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

export const root = fileURLToPath(new URL('../', import.meta.url));
const output = resolve(root, 'dist');
const talks = JSON.parse(await readFile(resolve(root, 'talks.json'), 'utf8'));
const homeOnly = process.argv.includes('--home-only');
const slugs = new Set();
for (const talk of talks) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(talk.slug) || slugs.has(talk.slug)) throw new Error(`Invalid or duplicate slug: ${talk.slug}`);
  slugs.add(talk.slug);
  const directory = resolve(root, talk.directory);
  if (!directory.startsWith(root) || !existsSync(resolve(directory, 'slides.md'))) throw new Error(`Missing deck: ${talk.directory}`);
}
function run(args, cwd) {
  const result = spawnSync('npm', args, { cwd, stdio: 'inherit', env: { ...process.env, PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD: '1', PUPPETEER_SKIP_DOWNLOAD: 'true' } });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`npm ${args.join(' ')} failed in ${cwd}`);
}
async function files(directory) {
  if (!existsSync(directory)) return [];
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) result.push(...await files(path));
    else result.push(path);
  }
  return result;
}
if (!homeOnly) await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
if (!homeOnly) for (const talk of talks) {
  const directory = resolve(root, talk.directory);
  console.log(`\nBuilding ${talk.slug}`);
  // CI always installs the locked dependencies; local builds reuse installed decks.
  if (process.env.CI || !existsSync(resolve(directory, 'node_modules/.bin/slidev'))) run(['ci', '--no-audit', '--no-fund'], directory);
  const destination = resolve(output, talk.slug);
  // The shared site does not bundle PDFs. Slidev's --download is a boolean flag
  // and can trigger a Playwright export even when followed by the word "false".
  run(['run', 'build', '--', '--base', `/${talk.slug}/`, '--out', destination], directory);
  if (!existsSync(resolve(destination, 'index.html'))) throw new Error(`No build output for ${talk.slug}`);
  // Raw HTML/Vue public URLs can survive Vite's base rewriting. Scope only
  // existing public files; never rewrite unrelated root links or external URLs.
  const assets = (await files(resolve(directory, 'public'))).map(path => '/' + relative(resolve(directory, 'public'), path).split(sep).join('/'));
  for (const path of await files(destination)) {
    if (!/\.(?:html|js|css|json|svg)$/.test(path)) continue;
    let source = await readFile(path, 'utf8');
    for (const asset of assets) {
      const escaped = asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      source = source.replace(new RegExp(`(["'\x60(=])${escaped}(?=["'\x60)?#\\s])`, 'g'), `$1/${talk.slug}${asset}`);
    }
    if (path.endsWith('/index.html')) {
      // Slidev may preload a root source image instead of its hashed Vite asset.
      const builtAssets = await files(resolve(destination, 'assets'));
      source = source.replace(/(<link[^>]*rel="preload"[^>]*href=")([^" ]+)(")/g, (match, before, url, after) => {
        if (!url.startsWith(`/${talk.slug}/`)) return match;
        const local = url.slice(talk.slug.length + 2);
        if (existsSync(resolve(destination, local))) return match;
        const extension = extname(local);
        const stem = basename(local, extension);
        const candidates = builtAssets.filter(asset => basename(asset).startsWith(stem + '-') && extname(asset) === extension);
        return candidates.length === 1 ? `${before}/${talk.slug}/${relative(destination, candidates[0]).split(sep).join('/')}${after}` : match;
      });
    }
    await writeFile(path, source);
  }
}
if (!homeOnly) {
  run(['exec', '--', 'playwright', 'install', 'chromium'], root);
  run(['run', 'previews'], root);
}
await cp(resolve(root, 'site/previews'), resolve(output, 'previews'), { recursive: true });
const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const cards = talks.map(talk => `<a class="talk" href="/${talk.slug}/" data-search="${escape([talk.title, talk.event, talk.date, talk.language, talk.kind].join(' ').toLowerCase())}"><img class="talk-preview" src="/previews/${talk.slug}.png" alt="Title slide: ${escape(talk.title)}" width="1440" height="810" loading="lazy" decoding="async"><div class="talk-details"><h2>${escape(talk.title)}</h2><p class="talk-meta"><span>${escape(talk.event)}</span><span>${escape(talk.date || "Date not listed")} · ${escape(talk.language)}</span></p></div></a>`).join('\n');
const template = await readFile(resolve(root, 'site/index.html'), 'utf8');
await writeFile(resolve(output, 'index.html'), template.replace('<!-- TALKS -->', cards).replaceAll('{{COUNT}}', String(talks.length)));
await writeFile(resolve(output, '_redirects'), talks.map(talk => `/${talk.slug} /${talk.slug}/ 301\n/${talk.slug}/* /${talk.slug}/index.html 200`).join('\n') + '\n');
await writeFile(resolve(output, '404.html'), '<!doctype html><html lang="en"><meta charset="utf-8"><title>Talk not found</title><h1>Talk not found</h1><a href="/">Browse all talks</a></html>');
console.log(`\n${homeOnly ? 'Homepage only' : 'All talks'} ready in ${output}`);
