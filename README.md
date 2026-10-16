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

## Register a talk

Add an entry to `talks.json` with:

- `slug`: stable public path, such as `fem-comunitat`.
- `directory`: repository-relative Slidev project directory.
- `title`, `event`, `date`, `language`, `kind`, and `description`: homepage metadata.

The deck needs `slides.md`, `package.json` with a `build` script, and a committed
npm lockfile. Registry order is homepage order. Do not copy templates, dependencies,
or generated `dist/` folders. Use the most precise supported date; an empty date
is displayed as “Date not listed”.

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
