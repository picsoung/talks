# Things I built with Lovable

English talk for BuildJam Barcelona at AI Campus, 18 November 2026. Twenty slides with a 15-minute speaker track. The shared site serves this deck at `/buildjam-barcelona-2026/`.

From this deck directory:

```sh
npm ci
npm run dev -- --port 3038
```

Slides open at http://localhost:3038. Presenter view is at http://localhost:3038/presenter/ and includes the timed notes and sources.

```sh
npm run build
npm run export-pdf
```

The story covers ContractionTrack, the HackBarna attendee badge, Sweep SF, HackBarna Digest, Bnbicons and BarnaKids. It closes with Chat mode, screenshots and annotations, and AI Gateway examples.

Created from `slides-template` v1.1.1. The shared stylesheet, chrome and layouts remain identical to the template. Reuses project screenshots, Bnbicons results and the domain-name joke from the earlier talks. Newer screenshots come from the Sweep SF, BarnaKids and personal portfolio repositories.

The cover uses a custom AI-generated Barcelona maker’s workbench illustrating the six projects. The art direction and full prompt are recorded in `public/images/cover-art.json`.

## Links

`links.json` records the Dub short links and QR assets. They were created through the Dub Links MCP server on `go.nicolas.dev`, with a BuildJam campaign. QR SVGs are stored locally for projection without a network connection. Visible project domains remain readable, and their clickable links use Dub.

The attendee badge slide includes a screenshot of `https://hackbarna-badge.lovable.app/` and the Dub link `https://go.nicolas.dev/buildjam-badge`. The screenshot shows the September 19–20 HackBarna AI Summit edition.

PDF export: `npm run export-pdf` writes `dist/slides.pdf`. The shared site builds without a PDF.

## Lovable UI screenshots

Slides 15–17 include original visuals from Lovable’s official documentation and launch post: the free Chat picker, the screenshot capture menu, and an AI tutor demo. Source URLs and image provenance are in the slide notes and `public/images/lovable-ui-sources.json`. The screenshot capture menu is from the November 2025 changelog; the notes refer to the current capture and annotation instructions.

## Speaker context

- Bnbicons figures are the historical April 2026 results from the existing talk, labeled as such.
- Chat mode is free while the workspace's daily chat allowance lasts. The slides distinguish it from paid Plan/Build usage.
- The AI Gateway prompt is an example the audience can try, rather than a claim that Digest already implements that feature.
- Sources are attached to the relevant slides in speaker notes.
