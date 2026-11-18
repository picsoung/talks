# Nicolas Grenié — talks & workshops

The source for [nicotalks.netlify.app](https://nicotalks.netlify.app).
One homepage lists the registered talks; each Slidev deck has its own stable URL.
Historical PDFs and other material stay in this repository but are not published
by the shared website unless listed in `talks.json`.

## Edit a talk

Edit its directory in this repository and open a pull request against `master`.
Netlify builds a deploy preview for pull requests. Merging to `master`
automatically rebuilds and publishes the shared site, including fresh title-slide
thumbnails. There is no second checkout to sync and no manual production upload.

## Local build

Use Node.js 22 or newer:

```sh
npm ci
npm run build
npm run check
npm run preview
```

Open http://127.0.0.1:4173. The root dependency installs Playwright Chromium for
rendering covers. Each registered deck keeps its own locked dependencies and
Slidev version. CI installs those with `npm ci`; local builds reuse dependencies
when present. PDF downloads are disabled in the shared build; deck export commands
remain available separately.

`npm run build:home` updates only the directory and reuses existing previews and
built decks. `npm run previews -- TALK-SLUG` refreshes one title-slide thumbnail;
`npm run previews` refreshes all. Set `SLIDEV_BROWSER_PATH` if using a custom
Chrome/Chromium executable. The full build generates every preview automatically.

The homepage header follows the [portfolio](https://nicolasgrenie.com) header:
Memoji identity, Manrope headings, shared navigation, and a mobile menu. Its
locally served identity image and font live in `site/assets` (including the
Manrope license); both full and homepage-only builds copy these assets.

## Register a talk

Add an entry to `talks.json` with:

- `slug`: stable public path, such as `fem-comunitat`.
- `directory`: repository-relative Slidev project directory.
- `title`, `event`, `date`, `language`, `kind`, and `description`: homepage metadata.
- `languageCode` (`en`, `es`, or `fr`), `summary`, and `topics`: public summary content.
- `dateISO`: optional date at its known precision (`2026`, `2026-04`, or `2026-11-18`).
- `durationMinutes` and `speakers`: optional duration and co-presenters.

The deck needs `slides.md`, `package.json` with a `build` script, and a committed
npm lockfile. Registry order is homepage order. Do not copy templates, dependencies,
or generated `dist/` folders. Use the most precise supported date; an empty date
is displayed as “Date not listed”.

## Search and AI discoverability

`site/config.json` defines the public origin and speaker identity. Canonicals,
Open Graph/Twitter cards, JSON-LD, sitemap URLs and crawler guidance share that
origin, including on preview deployments. Change it when moving domains.

Every talk has a static `/talks/<slug>/` page with a summary, topics, language,
speakers and a link to its original `/<slug>/` Slidev deck. These pages work
without JavaScript. Speaker notes and source comments are not copied into them.
The directory keeps its direct slide links and also links to the summaries.
Use the same language and title template in each deck's frontmatter so its
rendered title and document language stay consistent.

Builds generate `robots.txt`, `sitemap.xml`, `llms.txt` and structured data for
the speaker, website, collection, presentations and breadcrumbs. Preview and
branch deployments receive `noindex` metadata and an `X-Robots-Tag` header;
production pages remain indexable. Unknown URLs return a 404, and the 404 page
is marked `noindex`. The public crawler rules allow search crawling, including
OAI-SearchBot. They do not add a separate AI-training restriction.

The summaries and internal links provide readable material for search and answer
engines. `llms.txt` is a convenience index, not a ranking mechanism or an indexing
requirement. There is no special AI schema or guaranteed placement in AI answers.
See [Google's AI search guidance](https://developers.google.com/search/docs/appearance/ai-features)
and [OpenAI's crawler documentation](https://developers.openai.com/api/docs/bots).

`npm test` checks metadata safety, repeatable builds, date precision, preview
rules and co-presenters. `npm run check` includes the generated SEO/AEO checks;
`npm run check:seo` runs those alone. To check preview behavior locally, run
`CONTEXT=deploy-preview npm run build:home` and then
`CONTEXT=deploy-preview npm run check:seo`. Run `npm run build:home` afterwards
to restore indexable local output.

After merging and deploying, verify the production URL in Google Search Console
and Bing Webmaster Tools, submit `/sitemap.xml`, and inspect a sample summary URL.
Account verification, search indexing and AI citations are external to the build;
the checks do not claim those outcomes.

## Netlify

The existing `nicotalks` project is connected to `picsoung/talks`:

- Production branch: `master`.
- Base directory: repository root (empty in the dashboard).
- Build command: `npm run build && npm run check`.
- Publish directory: `dist`.
- Deploy previews: enabled for pull requests.

`netlify.toml` is the source for build settings and Node version. Netlify installs
the root dependencies before running the build. Each deck builds into
`dist/<slug>/`; the root homepage and generated `_redirects` route direct slide
links and refreshes to the correct deck. Unknown top-level paths return a 404.

## Verification and rollback

`npm run check` verifies all homepage links, thumbnails, deck entry assets,
and per-talk routing rules. Before merging a PR, inspect its deploy preview for
slide rendering, images, mobile cards, search, and direct slide URLs.

If a production build fails, Netlify keeps the last successful deployment live.
For a published regression, use Netlify’s Deploys page to republish a previous
successful deployment, then revert/fix the source commit before the next merge.
Keep old per-talk Netlify sites until their URLs have redirects to the shared site.
