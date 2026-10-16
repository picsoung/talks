# slidev-slng-template

The canonical **SLNG-branded** starting point for talks. Mirrors the official SLNG
corporate deck: white / grey-01 / black, yellow `#FBE566`, rounded-square shapes,
`//` motif, Saans + Geist Mono. It shares the layout structure of `slides-template/`
but is a separate brand — see the sibling note below.

Start every new SLNG deck by copying this folder — don't re-derive the branding by
hand, and don't fork an old talk.

## Start a new deck

```bash
cp -R slides-template-slng slides-slng-<your-talk>
cd slides-slng-<your-talk>
npm install
npm run dev          # opens at http://localhost:3030
```

Then:
1. Edit the frontmatter at the top of `slides.md`:
   - `title`, `info`, `author`
   - `venue:` → the top-left section/chapter label (defaults to "Section or chapter title")
   - `handle:` → bottom-right chrome (defaults to `@slng`)
   - `tagline:` → the line shown on the cover / section / closing (defaults to
     "The speech AI infrastructure to unmute the world.")
2. Replace the 10 showcase slides with your content. Each slide is commented with the
   corporate-deck pattern it demonstrates — keep the ones you want, delete the rest.
3. Drop diagrams / product screenshots in `public/images/` (served at `/images/<name>`).

The `cover`, `section`, `statement`, and `closing` layouts draw their own chrome; the
global venue/badge/handle chrome auto-hides on them.

## Brand assets

These ship with the template (from the SLNG brand kit):

- **Saans fonts** → `public/fonts/Saans-Regular.woff2` (400), `Saans-SemiBold.woff2`
  (600), `Saans-Heavy.woff2` (800). Saans is a paid font from Displaay; the
  `@font-face` rules in `style.css` map these three weights. Inter is the fallback.
- **Logo** → `public/logo.svg` (the `SLNG//` yellow rounded-square wordmark, used on the
  cover / closing) and `public/logo-iso.svg` (the `S//` icon, shown in the corner chrome).
  `public/images/diagram.svg` and `fullbleed.svg` are **placeholders** — replace them.

## Workshop data (source of truth)

`data/restaurants.json` and `data/customers.json` are **static snapshots** for reference only —
they are not rendered by any slide. The live source the agent actually calls is on **Val Town**:

- restaurants → `https://picsoung--0dd364ec75f611f1ab6f1607ee4eb77e.web.val.run` (`picsoung/restaurant-search`)
- customers → `https://picsoung--284e89e675f611f1b3391607ee4eb77e.web.val.run` (`picsoung/caller-lookup`)
- transcripts dashboard → `https://picsoung--a87c515675f711f19a141607ee4eb77e.web.val.run` (`picsoung/call-transcripts`)

If you change the vals, refresh these snapshots (or delete them) so they don't drift.

## Export

```bash
npm run export-pdf   # → dist/slides.pdf
```

> Requires Playwright on first export: `npx playwright install chromium`

## What's in here

- `slides.md` — a 10-slide **showcase** mirroring the corporate deck (cover, contents +
  phonetic, section divider, stats + image, feature cards, full-bleed statement,
  definition rows, timeline, pricing + compliance, closing). Doubles as a reference.
- `style.css` — the SLNG theme. Palette as `:root` vars:
  - `--slng-white` `#FBFAF7` (light bg) · `--slng-surface`/`--slng-grey-01` `#F3F2ED`
    (cards) · `--slng-black` `#15120D` (dark bg) · `--slng-yellow` `#FBE566` (accent)
  - `--slng-radius` `12px` — the rounded-square shape shared by logo, pills, badges
  - Fonts: Saans (SemiBold titles / Heavy statements / Regular body), Geist Mono
  - Workhorse classes: `slng-dark` / `slng-light`, `.slide-head` + `.slide-title` +
    `.kicker`, `.statement`, `.feature-cards`/`.num-badge`, `.def-rows`, `.timeline`,
    `.stats-block`, `.price-pill`, `.pills`/`.pill`, `.tag`, `.phonetic`, `.slash`.
- `global-top.vue` / `global-bottom.vue` — always-on chrome (top-left section label,
  bottom-left `S//` badge, bottom-right handle). Auto-hide on own-chrome layouts.
- `layouts/` — `cover.vue`, `section.vue` (number + title divider), `statement.vue`
  (optional full-bleed `image`), `closing.vue`.
- `public/fonts/` — the Saans `.woff2` files.

## Versioning & keeping decks in sync

This template is versioned (`VERSION` + `CHANGELOG.md`). See the bump rule in
`CHANGELOG.md` (patch / minor / major).

**When you change the branding or structure in an individual SLNG deck** (its
`style.css`, `global-*.vue`, `layouts/**`, or the frontmatter config block —
*not* slide copy or images), Claude Code will ask whether to port that change back
here and bump the version. This convention is recorded in `../CLAUDE.md` so it
applies whenever you work anywhere under `Dev/slides/`.

**Sibling note:** this template and `slides-template/` (nicolasgrenie.com brand) are
independent brand siblings. They share layout structure but not palette, fonts,
motif, or logo — a branding change to one is not automatically ported to the other.
