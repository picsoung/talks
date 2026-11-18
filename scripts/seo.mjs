import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

export const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const json = value => JSON.stringify(value).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');
export const summaryPath = talk => `/talks/${talk.slug}/`;
const deckPath = talk => `/${talk.slug}/`;
const imagePath = talk => `/previews/${talk.slug}.png`;
export const isPreview = context => ['deploy-preview', 'branch-deploy'].includes(context);
const absolute = (site, path) => new URL(path, site.origin).href;
const ref = id => ({ '@id': id });
const authors = (site, talk) => (talk.speakers || [site.person.name]).map(name => name === site.person.name ? ref(site.person.id) : { '@type': 'Person', name });

export function validateMetadata(site, talks) {
  const origin = new URL(site.origin);
  if (origin.protocol !== 'https:' || origin.origin !== site.origin) throw new Error('site.origin must be an HTTPS origin without a trailing slash');
  for (const talk of talks) {
    if (!['en', 'es', 'fr'].includes(talk.languageCode) || !talk.summary || !talk.topics?.length) throw new Error(`${talk.slug}: missing language, summary or topics`);
    if (talk.dateISO && !/^\d{4}(?:-\d{2}(?:-\d{2})?)?$/.test(talk.dateISO)) throw new Error(`${talk.slug}: use an ISO date with only the known precision`);
  }
}

function identityGraph(site) {
  return [
    { '@type': 'Person', '@id': site.person.id, name: site.person.name, url: site.person.url, description: site.person.description, sameAs: site.person.sameAs },
    { '@type': 'WebSite', '@id': site.origin + '/#website', url: site.origin + '/', name: site.name, publisher: ref(site.person.id), inLanguage: ['en', 'es', 'fr'] },
  ];
}

export function presentation(site, talk) {
  return {
    '@type': 'PresentationDigitalDocument', '@id': absolute(site, deckPath(talk)) + '#presentation',
    url: absolute(site, deckPath(talk)), name: talk.title, description: talk.description, abstract: talk.summary,
    author: authors(site, talk), inLanguage: talk.languageCode, genre: talk.kind, keywords: talk.topics,
    isAccessibleForFree: true, image: absolute(site, imagePath(talk)),
    ...(talk.dateISO ? { temporalCoverage: talk.dateISO } : {}),
    ...(talk.durationMinutes ? { timeRequired: `PT${talk.durationMinutes}M` } : {}),
    subjectOf: ref(absolute(site, summaryPath(talk)) + '#webpage'),
  };
}

export function homeGraph(site, talks) {
  return { '@context': 'https://schema.org', '@graph': [
    ...identityGraph(site),
    { '@type': 'CollectionPage', '@id': site.origin + '/#webpage', url: site.origin + '/', name: site.title, description: site.description,
      inLanguage: 'en', isPartOf: ref(site.origin + '/#website'), about: ref(site.person.id),
      mainEntity: { '@type': 'ItemList', numberOfItems: talks.length, itemListElement: talks.map((talk, index) => ({
        '@type': 'ListItem', position: index + 1, item: { '@type': 'WebPage', '@id': absolute(site, summaryPath(talk)) + '#webpage', url: absolute(site, summaryPath(talk)), name: talk.title, description: talk.description, inLanguage: talk.languageCode },
      })) },
    },
  ] };
}

export function talkGraph(site, talk) {
  const url = absolute(site, summaryPath(talk));
  return { '@context': 'https://schema.org', '@graph': [
    ...identityGraph(site), presentation(site, talk),
    { '@type': 'WebPage', '@id': url + '#webpage', url, name: talk.title, description: talk.description, inLanguage: talk.languageCode,
      isPartOf: ref(site.origin + '/#website'), mainEntity: ref(absolute(site, deckPath(talk)) + '#presentation'), breadcrumb: ref(url + '#breadcrumbs') },
    { '@type': 'BreadcrumbList', '@id': url + '#breadcrumbs', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Talks & workshops', item: site.origin + '/' },
      { '@type': 'ListItem', position: 2, name: talk.title, item: url },
    ] },
  ] };
}

export function applySeo(html, { site, title, description, path, language = 'en', image, imageAlt, imageWidth = 1440, imageHeight = 810, graph, preview = false, alternate }) {
  // Replacing our previous block makes homepage-only rebuilds safe and repeatable.
  html = html.replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->\s*/g, '')
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>\s*/gi, '')
    .replace(/<meta\b[^>]*(?:name=["'](?:description|author|robots|theme-color|twitter:[^"']+)["']|property=["']og:[^"']+["'])[^>]*>\s*/gi, '')
    .replace(/<link\b[^>]*rel=["'](?:canonical|icon|apple-touch-icon)["'][^>]*>\s*/gi, '')
    .replace(/<html\b([^>]*?)lang=["'][^"']*["']/i, `<html$1lang="${escape(language)}"`);
  const url = absolute(site, path);
  const metadata = `<!-- seo:start -->
<title>${escape(title)}</title>
<meta name="description" content="${escape(description)}">
<meta name="author" content="${escape(site.person.name)}">
<meta name="robots" content="${preview ? 'noindex, follow' : 'index, follow, max-image-preview:large'}">
<meta name="theme-color" content="#f9f9fb">
<link rel="canonical" href="${escape(url)}">
<link rel="icon" type="image/png" href="${site.origin}/assets/nico-memoji.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${escape(site.name)}">
<meta property="og:title" content="${escape(title)}">
<meta property="og:description" content="${escape(description)}">
<meta property="og:url" content="${escape(url)}">
<meta property="og:locale" content="${{ en: 'en_US', es: 'es_ES', fr: 'fr_FR' }[language]}">
<meta property="og:image" content="${escape(absolute(site, image))}">
<meta property="og:image:width" content="${imageWidth}">
<meta property="og:image:height" content="${imageHeight}">
<meta property="og:image:alt" content="${escape(imageAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:creator" content="@picsoung">
<meta name="twitter:title" content="${escape(title)}">
<meta name="twitter:description" content="${escape(description)}">
<meta name="twitter:image" content="${escape(absolute(site, image))}">
<meta name="twitter:image:alt" content="${escape(imageAlt)}">
${alternate ? `<link rel="alternate" type="text/html" href="${escape(absolute(site, alternate))}" title="Talk summary">` : ''}
<script type="application/ld+json">${json(graph)}</script>
<!-- seo:end -->
`;
  return html.replace('</head>', metadata + '</head>');
}

const labels = {
  en: { back: 'All talks & workshops', event: 'Event', date: 'Date', language: 'Language', speakers: 'Speakers', kind: 'Format', duration: 'Duration', summary: 'About this talk', topics: 'Topics covered', open: 'Open slides', missingDate: 'Date not listed', slides: 'Presentation slides' },
  es: { back: 'Todas las charlas y talleres', event: 'Evento', date: 'Fecha', language: 'Idioma', speakers: 'Ponentes', kind: 'Formato', duration: 'Duración', summary: 'Sobre esta charla', topics: 'Temas', open: 'Ver diapositivas', missingDate: 'Fecha no indicada', slides: 'Diapositivas de la presentación' },
  fr: { back: 'Toutes les conférences et ateliers', event: 'Événement', date: 'Date', language: 'Langue', speakers: 'Intervenants', kind: 'Format', duration: 'Durée', summary: 'À propos de cette conférence', topics: 'Sujets abordés', open: 'Voir les diapositives', missingDate: 'Date non précisée', slides: 'Diapositives de la présentation' },
};

export function summaryMain(site, talk) {
  const l = labels[talk.languageCode];
  const date = talk.dateISO ? `<time datetime="${escape(talk.dateISO)}">${escape(talk.date)}</time>` : escape(talk.date || l.missingDate);
  const details = [[l.speakers, escape((talk.speakers || [site.person.name]).join(', '))], [l.event, escape(talk.event)], [l.date, date], [l.language, escape(talk.language)], [l.kind, escape(talk.kind)]];
  if (talk.durationMinutes) details.push([l.duration, `${talk.durationMinutes} min`]);
  return `<main id="main-content" class="site-container talk-main" tabindex="-1">
<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">${l.back}</a></nav>
<article>
  <header class="intro"><h1>${escape(talk.title)}</h1><p>${escape(talk.description)}</p></header>
  <div class="talk-overview">
    <div>
      <dl class="talk-facts">${details.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl>
      <a class="slides-action" href="${deckPath(talk)}">${l.open}</a>
    </div>
    <a href="${deckPath(talk)}" aria-label="${l.open}: ${escape(talk.title)}"><img class="summary-preview" src="${imagePath(talk)}" alt="${l.slides}: ${escape(talk.title)}" width="1440" height="810"></a>
  </div>
  <section class="talk-copy" aria-labelledby="talk-summary"><h2 id="talk-summary">${l.summary}</h2><p>${escape(talk.summary)}</p></section>
  <section class="talk-copy" aria-labelledby="talk-topics"><h2 id="talk-topics">${l.topics}</h2><ul>${talk.topics.map(topic => `<li>${escape(topic)}</li>`).join('')}</ul></section>
</article>
</main>`;
}

export async function previewImage(output, talk) {
  const png = await readFile(resolve(output, 'previews', `${talk.slug}.png`));
  if (!png.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) throw new Error(`Invalid preview PNG: ${talk.slug}`);
  return { image: imagePath(talk), imageWidth: png.readUInt32BE(16), imageHeight: png.readUInt32BE(20) };
}

export async function writeSearchPages({ output, site, talks, template, preview }) {
  validateMetadata(site, talks);
  for (const talk of talks) {
    const title = `${talk.title} — ${site.person.name}`;
    const common = { site, title, description: talk.description, language: talk.languageCode, ...await previewImage(output, talk), imageAlt: `Title slide: ${talk.title}`, preview };
    const summary = template.replace(/<main\b[\s\S]*?<\/main>/, summaryMain(site, talk));
    const destination = resolve(output, 'talks', talk.slug);
    await mkdir(destination, { recursive: true });
    await writeFile(resolve(destination, 'index.html'), applySeo(summary, { ...common, path: summaryPath(talk), graph: talkGraph(site, talk) }));
    const deck = resolve(output, talk.slug, 'index.html');
    if (existsSync(deck)) {
      let html = await readFile(deck, 'utf8');
      html = html.replace(/<!-- talk-fallback:start -->[\s\S]*?<!-- talk-fallback:end -->\s*/g, '');
      html = html.replace('</body>', `<!-- talk-fallback:start --><noscript><h1>${escape(talk.title)}</h1><p>${escape(talk.description)}</p><p>${escape((talk.speakers || [site.person.name]).join(', '))}</p><a href="${summaryPath(talk)}">${labels[talk.languageCode].summary}</a></noscript><!-- talk-fallback:end -->\n</body>`);
      await writeFile(deck, applySeo(html, { ...common, path: deckPath(talk), alternate: summaryPath(talk), graph: { '@context': 'https://schema.org', '@graph': [...identityGraph(site), presentation(site, talk)] } }));
    }
  }
  // Date precision is preserved in talk metadata. Sitemap lastmod is omitted
  // rather than claiming that every historical talk changed on each build.
  const paths = ['/', ...talks.flatMap(talk => [summaryPath(talk), deckPath(talk)])];
  await writeFile(resolve(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(path => `  <url><loc>${escape(absolute(site, path))}</loc></url>`).join('\n')}\n</urlset>\n`);
  await writeFile(resolve(output, 'robots.txt'), `User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`);
  await writeFile(resolve(output, 'llms.txt'), `# ${site.name}\n\n> ${site.description}\n\nSpeaker: ${site.person.name}. ${site.person.description}\nPortfolio: ${site.person.url}\n\n## Talks and workshops\n\n${talks.map(talk => `- [${talk.title}](${absolute(site, summaryPath(talk))}): ${talk.description} ${talk.event}; ${talk.language}; ${talk.date || 'date not listed'}.`).join('\n')}\n`);
  const internalRoutes = talks.flatMap(talk => ['presenter', 'notes'].flatMap(route => [`/${talk.slug}/${route}`, `/${talk.slug}/${route}/*`]));
  await writeFile(resolve(output, '_headers'), (preview ? '/*\n  X-Robots-Tag: noindex, follow\n\n' : '') + internalRoutes.map(path => `${path}\n  X-Robots-Tag: noindex, follow`).join('\n\n') + '\n');
}
