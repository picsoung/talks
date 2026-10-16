# Confessions of a Vibecoding Engineer

Slidev scaffold for Nicolas Grenié's 35-min keynote.

## Run locally

```bash
npm install
npm run dev          # opens at http://localhost:3030
```

## Export

```bash
npm run export-pdf   # → dist/confessions.pdf
```

> Requires Playwright on first export: `npx playwright install chromium`

## Structure

- `slides.md` — the deck, one file (Slidev convention)
- `style.css` — the custom theme (brand palette, chrome, statement slides)
- `public/` — drop images here; they're served at `/<name>`
- `components/` — reserved for Vue components if you extend a slide

## Brand

Defined in `style.css` as CSS variables on `:root`:

- `--ng-cream` `#F5F1E8` — light content background
- `--ng-dark` `#111111` — dark section break background
- `--ng-accent` `#F5C43B` — yellow/gold accent (nicolasgrenie.com)
- Fonts: Inter (sans), JetBrains Mono (mono)

Two layout classes are the workhorses:
- `class: ng-dark` — section breaks, punchlines
- `class: ng-light` — content, metaphor diagrams, design-system slides

Every slide has optional chrome (top-left venue tag + bottom-right `@picsoung`). Swap the venue in the top frontmatter — it propagates everywhere via `{{ $slidev.configs.venue }}`.

## The arc

1. **Opening** (5 slides) — memoji, confession, the shift, two tribes
2. **Act I · The Garage** (~16 slides) — four reps: ContractionTrack, ImSoMetal, PianoRigolo, Bnbicons + side-lessons (SoS, YOLO, "I am no designer," Excel backend)
3. **Act II · What the reps build** (~6 slides) — conductor not tourist, AI as intern, generalists own the AI era
4. **Act III · Prime time** (~9 slides) — internal demo story (TODO), "can we change the button?", empower PMs, design system, MCPs
5. **Landing** (4 slides) — friction not jobs, reps not startups, "It's your opportunity to build", thank you

## Assets to drop in `public/`

The deck references these paths. Either create the files or the slide will render a broken image:

- `memoji.png` — your pixelated memoji (intro + closing)
- `images/vibecoding-desk.jpg` — the vibecoding-engineer-at-desk illustration (from old deck)
- `images/contractiontrack.png` — ContractionTrack phone mockup
- `images/imsometal-iterations.png` — 3-screenshot composite of I Am So Metal iterations
- `images/pianorigolo.png` — PianoRigolo screenshot
- `images/yolo-spongebob.png` — YOLO SpongeBob meme
- `images/squirtle-unfinished.png` — Squirtle "unfinished project" meme
- `images/take-full-space.png` — sidebar "take full space" demo
- `images/figma-chaos.png` — Figma/Miro chaos board
- `images/design-system.png` — design-system prompt demo
- `images/mcp-mock.png` — MCP mocked infra

Most are already in the old Talent Arena PDF — export those pages and crop.

## Open TODOs in the deck

- **`[INTERNAL DEMO STORY — to fill in]`** (Act III, first slide) — provide the real story: what was the prototype, who saw it, what shifted.
- Consider adding one more case study in Act I: a *discarded prototype* or *launched-too-early* project — the pitch mentioned both buckets but neither is featured yet.

## Citation / credit

One slide credits Alexis Kovalenko's *Traité de vibe coding éclairé* explicitly (the "You don't know what you don't know" slide). If you reuse *Conductor, not tourist* as-is, add a credit line under it too — the frame isn't uniquely his but he popularized it in the French scene and in the book.

## Keyboard shortcuts (dev)

- `f` — fullscreen
- `o` — overview
- `d` — toggle dark
- `e` — editor
- `?` — see all
