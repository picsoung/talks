import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { applySeo, talkGraph, presentation, isPreview, validateMetadata } from '../scripts/seo.mjs';
const site = JSON.parse(await readFile(new URL('../site/config.json', import.meta.url)));
const talks = JSON.parse(await readFile(new URL('../talks.json', import.meta.url)));
const options = { site, title: 'A talk', description: 'A summary', path: '/', image: '/previews/test.png', imageAlt: 'Title slide', graph: { '@context': 'https://schema.org' } };

test('metadata survives repeated builds without duplicate or stale indexing directives', () => {
  const html = '<!doctype html><html lang="en"><head><title>Old - Slidev</title><meta name="description" content="old"><link rel="icon" href="https://cdn.example/icon.png"></head><body><div id="app"></div></body></html>';
  const first = applySeo(html, { ...options, preview: true });
  assert.match(first, /noindex, follow/);
  const production = applySeo(first, options);
  assert.equal(applySeo(production, options), production);
  assert.equal((production.match(/<title>/g) || []).length, 1);
  assert.equal((production.match(/rel="canonical"/g) || []).length, 1);
  assert.equal((production.match(/name="theme-color"/g) || []).length, 1);
  assert(!production.includes('noindex'));
  assert(!production.includes('cdn.example'));
  assert(production.includes('<div id="app"></div>'));
});

test('HTML attributes and JSON-LD cannot be closed by talk content', () => {
  const text = '</script><script>alert("test")</script> & <b>content</b>';
  const html = applySeo('<html lang="en"><head></head><body></body></html>', { ...options, title: text, description: text, graph: { text } });
  assert.equal((html.match(/<script\b/g) || []).length, 1);
  const payload = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1];
  assert.equal(JSON.parse(payload).text, text);
  assert(html.includes('&lt;/script&gt;'));
});

test('only deployment previews and branch deployments opt out of indexing', () => {
  for (const context of ['deploy-preview', 'branch-deploy']) assert(isPreview(context));
  for (const context of ['production', 'dev', undefined, '']) assert(!isPreview(context));
});

test('partial and missing dates do not become invented publication dates', () => {
  validateMetadata(site, talks);
  for (const talk of talks) {
    const doc = presentation(site, talk);
    assert.equal(doc.temporalCoverage, talk.dateISO);
    assert(!('datePublished' in doc));
    assert(!('startDate' in doc));
  }
  assert.equal(presentation(site, talks.find(t => t.slug === 'confessions-genai-valencia')).temporalCoverage, '2026-04');
});

test('co-presenters and language are retained in the public structured data', () => {
  const talk = talks.find(t => t.slug === 'from-workflow-to-skills');
  const graph = talkGraph(site, talk)['@graph'];
  const doc = graph.find(item => item['@type'] === 'PresentationDigitalDocument');
  assert.deepEqual(doc.author, [{ '@type': 'Person', name: 'Manar Benkraouda' }, { '@id': site.person.id }]);
  assert.equal(doc.inLanguage, 'en');
  assert.equal(graph.find(item => item['@type'] === 'WebPage').mainEntity['@id'], doc['@id']);
});
