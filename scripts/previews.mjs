// Render current title slides for the shared build and local homepage previews.
import { readFile, mkdir, readdir, copyFile, mkdtemp, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-chromium';
const root = fileURLToPath(new URL('../', import.meta.url));
const talks = JSON.parse(await readFile(resolve(root, 'talks.json'), 'utf8'));
await mkdir(resolve(root, 'site/previews'), { recursive: true });
const selected = process.argv.slice(2);
for (const talk of talks.filter(talk => !selected.length || selected.includes(talk.slug))) {
  console.log(`Rendering title slide: ${talk.slug}`);
  const temp = await mkdtemp(resolve(tmpdir(), 'talk-preview-'));
  try {
    const args = ['exec', '--', 'slidev', 'export', '--range', '1', '--format', 'png', '--output', temp, '--scale', '0.75', '--wait', '1000'];
    args.push('--executable-path', process.env.SLIDEV_BROWSER_PATH || chromium.executablePath());
    const result = spawnSync('npm', args, { cwd: resolve(root, talk.directory), stdio: 'inherit' });
    if (result.status !== 0) throw new Error(`Title slide export failed: ${talk.slug}`);
    const images = (await readdir(temp)).filter(name => name.endsWith('.png'));
    if (images.length !== 1) throw new Error(`Expected one cover image for ${talk.slug}, got ${images.length}`);
    await copyFile(resolve(temp, images[0]), resolve(root, 'site/previews', `${talk.slug}.png`));
  } finally { await rm(temp, { recursive: true, force: true }); }
}
