# Changelog — slidev-slng-template

All notable changes to the SLNG branded template are recorded here. The current
version also lives in `VERSION`.

Bump rule (semver):
- **patch** — small tweaks (a color value, spacing, a copy fix in the showcase)
- **minor** — a new reusable pattern, CSS class, layout, or component
- **major** — a breaking change to the palette, layout API, or frontmatter contract

## 2.0.0 — Match the official SLNG corporate deck

Reworked the template to mirror the official SLNG corporate Google-Slides deck
(`Corporate Presentation_SLNG.pdf`). Breaking: palette, shape language, layout API,
and frontmatter config all changed.

- **Yellow** — now `#FBE566` everywhere (the deck's yellow), replacing `#F2DD52`.
- **Light surfaces flipped** — light slides are white `#FBFAF7`; cards/containers use
  grey-01 `#F3F2ED` (`--slng-surface`). Was the other way round in 1.x.
- **Shape** — all yellow elements are **rounded squares** (`--slng-radius: 12px`), never
  full pills. `.chrome-logo`, `.price-pill`, `.pill`, `.num-badge`, timeline markers.
- **Chrome** — bottom-left is the real **`S//` icon** (`public/logo-iso.svg`, from the
  brand kit); `@handle` stays bottom-right; top-left section label. Cover/section/
  statement/closing layouts draw their own chrome (globals auto-hide on those layouts).
- **Type** — slide titles SemiBold (600), big statements Heavy (800), stat numbers
  Regular (400). Left-aligned title system: `.slide-head` + `.kicker` + `.slide-title`.
- **New layouts** — `cover.vue`, `statement.vue` (optional full-bleed `image`),
  `closing.vue`; `section.vue` reworked to the light number+title divider.
- **New patterns** — `.feature-cards` / `.num-badge`, `.def-rows`, `.timeline`,
  `.stats-block`, `.phonetic`, `.overlay-statement`, `.tag` (support-palette chips).
- **Config** — added `tagline` (drives cover/section/closing); `venue` now the top-left
  section label; `class: slng-light` default.
- **Showcase** — `slides.md` rebuilt to mirror the 10 corporate slides (cover, contents+
  phonetic, section, stats+image, feature cards, full-bleed statement, definition rows,
  timeline, pricing+compliance, closing).
- Added `public/logo-iso.svg` and placeholder `public/images/fullbleed.svg`.

> This template and `slides-template/` (nicolasgrenie.com brand) are **independent
> brand siblings**. Branding changes to one do not auto-port to the other — they
> share layout structure but not a palette, fonts, motif, or logo.

## 1.0.0 — Initial SLNG-branded template

Derived from `slides-template` 1.1.1. Kept the layout structure, chrome model, and
generic pattern library; reskinned everything to the SLNG brand
(SLNG-Brand-Guidelines.pdf, May 2026).

- **Palette** — replaced the `--ng-*` cream/dark/gold vars with the six `--slng-*`
  primary colors: yellow `#F2DD52`, black `#15120D`, white `#FBFAF7`, grey-01
  `#F3F2ED`, grey-02 `#CAC9C4`, grey-03 `#8A8983`. Light slides use grey-01, dark
  sections use black, yellow is accent-only. Slide classes renamed
  `ng-light`/`ng-dark` → `slng-light`/`slng-dark`.
- **Fonts** — Saans (principal, via `@font-face` from `public/fonts/*.woff2`, Inter
  fallback) + Geist Mono (support, Google Fonts). Replaces Inter + JetBrains Mono.
- **Motif** — the `//` slash operator (`.slash`) replaces the curly-brace `.braces`
  motif.
- **Logo** — ships `public/logo.svg` (the `SLNG//` yellow-capsule wordmark from the
  brand kit); used on the title slide and in `global-bottom.vue` corner chrome. The
  `.chrome-logo` / `.price-pill` yellow capsules echo the SLNG logo pill.
- **Fonts** — ships Saans Regular / SemiBold / Heavy `.woff2` in `public/fonts/`
  (mapped to weights 400 / 600 / 800); Inter is the fallback.
- **New SLNG utilities** — `.price-pill` (yellow price capsule), `.pills` / `.pill`
  (glass-style compliance/feature pills), `.card` (white fill, grey-02 border,
  radius 14px).
- **Layouts** — removed the talk-specific `rep.vue`; added `layouts/section.vue`, a
  dark section divider with the `//` marker.
- **Pruned** the Confessions-talk-specific classes (`.figma-chaos`, `.mockup-flow`,
  `.ds-flow`, `.registrars`, `.seo-*`, `.choices`/`.shadow-*`, `.vibecoding-card`,
  `.karpathy-tweet`, `.keyboard-*`, `.workshop-*`, `.iterations-grid`,
  `.intro-me-*`, `.claude-mark`). Kept the generic patterns (`.title-*`,
  `.statement*`, `.pain-points`, `.team-wants`, `.stat-number`, `.skills-grid`,
  `.kicker`, `.slide-qr`, image layouts).
- **slides.md** — new 11-slide SLNG showcase (positioning title, promise statement,
  section divider, product overview, before/after two-column, image-right,
  price pill, compliance pills, endpoint-swap code, latency stat, closing).
  Copy follows the SLNG voice rules (no banned words, no em dashes).
- **public/** — dropped `memoji.png`; added `public/fonts/` (Saans) + `public/logo.svg`
  + a placeholder `public/images/diagram.svg`.
