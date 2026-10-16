# SLNG — Design Specification

> Reverse-engineered from the provided website screenshot. Measurements are approximate and should be treated as implementation guidance rather than source-of-truth values.

## 1. Design direction

SLNG uses a **minimal editorial SaaS aesthetic** with a strong black/cream/yellow identity.

Core traits:

- Warm off-white page background instead of pure white.
- Near-black typography with very high contrast.
- Bright yellow used sparingly for CTAs, highlights, chips, illustrations, and key data points.
- Large amounts of whitespace between sections.
- Tight, bold display typography for headlines.
- Small uppercase eyebrow labels with letter-spacing.
- Thin borders, subtle card fills, and restrained shadows.
- Technical/diagrammatic illustrations rather than glossy product mockups.
- Layout alternates between centered editorial sections and 2-column product-story blocks.
- Rounded corners are modest, generally 4–10px rather than pill-heavy.

---

## 2. Color system

Approximate colors sampled from the screenshot:

```css
:root {
  --bg: #FBF8F7;
  --surface: #F3F1ED;
  --surface-strong: #E5E3DF;
  --ink: #15120D;
  --ink-soft: #302F2B;
  --muted: #77736C;
  --border: #E5E3DF;
  --yellow: #FBE566;
  --yellow-soft: #FFF2A8;
  --white: #FFFFFF;
}
```

### Usage

- `--bg`: global page background.
- `--ink`: main headings, footer background, primary copy.
- `--ink-soft`: body copy and supporting labels.
- `--surface`: cards, product illustrations, benchmark panels.
- `--yellow`: primary CTA, emphasis, active chips, data highlights.
- `--border`: card outlines and subtle separators.

Avoid gradients. The design is deliberately flat.

---

## 3. Typography

The site uses a **geometric/grotesk sans-serif** with heavy display weights and a neutral UI sans for smaller copy.

Recommended implementation:

```css
font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
```

For a closer visual match, use a slightly characterful grotesk such as **Söhne, Neue Montreal, General Sans, or Geist** if licensed/available.

### Type scale

```css
--text-xs: 11px;
--text-sm: 13px;
--text-base: 15px;
--text-md: 18px;
--text-lg: 22px;
--text-xl: 30px;
--text-2xl: 42px;
--text-3xl: 58px;
```

Suggested desktop styles:

| Role | Size | Weight | Line height | Notes |
|---|---:|---:|---:|---|
| Hero H1 | 56–64px | 700–800 | 0.98–1.02 | Very tight tracking |
| Section H2 | 34–44px | 700–800 | 1.05 | Centered or left-aligned |
| Card heading | 18–22px | 650–750 | 1.15 | Compact |
| Body | 15–17px | 400–500 | 1.55 | Muted black |
| Eyebrow | 10–12px | 600–700 | 1.2 | Uppercase, +0.12em tracking |
| Nav | 12–14px | 500–600 | 1 | Compact |

### Headline behavior

- Keep lines short.
- Prefer 2–3 lines over wide paragraphs.
- Use hard line breaks for intentional rhythm.
- Headings often end with a period.

---

## 4. Layout system

### Global container

```css
.page-shell {
  width: min(1180px, calc(100% - 48px));
  margin-inline: auto;
}
```

Recommended max-width: **1120–1200px**.

### Section spacing

The screenshot relies heavily on vertical breathing room.

```css
.section {
  padding-block: 104px;
}

.section--tight {
  padding-block: 72px;
}

.section--hero {
  padding-top: 96px;
  padding-bottom: 84px;
}
```

Large editorial breaks can reach **140–180px**.

### Grid

Primary story sections use a 2-column layout:

```css
.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}
```

For asymmetric sections, use roughly **45/55** or **40/60** proportions.

### Responsive behavior

At `< 800px`:

- collapse 2-column sections to 1 column;
- reduce hero heading to ~44px;
- reduce side padding to 20–24px;
- stack feature cards;
- allow tabs to scroll horizontally;
- preserve generous vertical spacing instead of compressing aggressively.

---

## 5. Header

The header is compact, with a thin yellow announcement strip above it.

### Announcement bar

- Height: ~24–28px.
- Background: `--yellow`.
- Tiny black copy, centered.
- Optional inline links separated by spacing.

### Main nav

- Height: ~64–72px.
- Transparent/off-white background.
- Left: logo.
- Center/right: Products, Resources, Pricing, Docs.
- Right edge: small icon buttons plus dark/outlined CTA.
- Nav labels are small and restrained.

Suggested CTA style:

```css
.nav-cta {
  background: var(--ink);
  color: white;
  padding: 10px 14px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 650;
}
```

---

## 6. Hero section

The hero is a **two-column layout**.

### Left column

Order:

1. yellow/black eyebrow label;
2. oversized headline: “Define. Govern. Execute.”;
3. concise product value proposition;
4. CTA row with primary yellow button + text link.

Primary CTA:

```css
.button-primary {
  background: var(--yellow);
  color: var(--ink);
  border: 1px solid color-mix(in srgb, var(--yellow), #000 8%);
  border-radius: 4px;
  padding: 12px 16px;
  font-weight: 700;
}
```

### Right column

Use an abstract **layered architecture illustration**:

- isometric stacked planes;
- thin black/gray lines;
- highlighted yellow top layer;
- small black labels floating around the stack;
- sparse geometric decorations.

The illustration should feel technical, not decorative.

---

## 7. Hero metric cards

Immediately below the hero content is a 4-card row.

Each card:

- pale neutral fill;
- subtle border;
- small centered technical icon;
- bold metric;
- tiny caption underneath;
- fixed, compact height.

```css
.metric-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;
  min-height: 112px;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 18px;
}
```

---

## 8. Customer/logo strip

A centered line of customer logos appears on the page background.

Style:

- monochrome gray;
- low visual emphasis;
- evenly spaced;
- no card container;
- small “trusted by” or equivalent caption above.

Keep opacity around 40–60%.

---

## 9. Section: “Your agent lives in someone else’s config”

Pattern:

- centered eyebrow;
- large centered heading;
- centered supporting paragraph;
- below: 2-column visual + feature text.

### Code/config visual

A pale card containing:

- black code editor panel;
- small tabs/chips around the bottom edge;
- thin technical measurement marks;
- subtle diagram framing.

### Feature list

Plain vertical list with 4 items:

- heading in bold;
- 1–2 sentence description;
- no heavy card treatment.

Spacing between items: 22–28px.

---

## 10. Section: “Every turn shouldn’t cost the same as the hardest one”

This is another centered editorial intro followed by a split comparison section.

### Left visual

- pale rounded rectangle;
- abstract waveform graphic;
- central yellow branded tile;
- light line-art circles/geometry;
- small black labels.

### Right content

- tabbed benchmark selector across the top;
- bold heading beneath;
- short explanatory copy;
- 2 numerical stat cards at the bottom.

Stat cards:

- neutral fill;
- large bold percentage;
- small uppercase label;
- tiny yellow marker above/beside value.

---

## 11. Compatibility / provider cards

A horizontal row of 4 small cards appears after a large whitespace break.

Each card:

- neutral surface;
- provider/model icon;
- small label;
- minimal border radius;
- consistent equal width.

Below the row is a small dark CTA button.

---

## 12. Governance section

Headline: “Enforced before the call. Provable after it.”

Structure:

1. centered eyebrow;
2. centered headline;
3. explanatory paragraph;
4. 3-column cards: **Before it ships / While it runs / After it’s done**.

### Governance cards

- pale neutral fill;
- yellow icon in upper-left;
- bold mini-heading;
- concise paragraph;
- no visible heavy shadow.

```css
.governance-card {
  background: var(--surface);
  border-radius: 6px;
  padding: 24px;
}
```

---

## 13. Deployment / location section

Headline: “Runs where your callers are.”

Elements:

- centered intro;
- tiny dark selector/dropdown card;
- small action control;
- large world map card beneath.

### Map card

- near-black background;
- rounded corners (~8px);
- subtle longitudinal/latitudinal grid;
- muted gray land masses;
- yellow dots for deployment regions;
- yellow/cream labels near some regions.

The map is a data visualization element, not a realistic map screenshot.

---

## 14. Final CTA band

Large yellow panel near the bottom.

Layout:

- horizontal desktop arrangement;
- left: eyebrow + large headline + supporting copy;
- right: dark primary button + white/outlined secondary button.

Approximate style:

```css
.final-cta {
  background: var(--yellow);
  border-radius: 8px;
  padding: 44px 52px;
}
```

Heading is large, black, and compact.

---

## 15. Footer

Footer uses the inverse palette.

- Background: `--ink`.
- Text: white / muted warm gray.
- Large centered closing statement: “Define. Govern. Execute.”
- Small yellow logo beneath/near statement.
- Multi-column footer links.
- Tiny legal row at the bottom.

Use generous top/bottom padding (~64–80px).

---

## 16. Borders, radius, and shadow

### Radius

Use restrained geometry:

```css
--radius-xs: 3px;
--radius-sm: 5px;
--radius-md: 8px;
```

Avoid large 20–30px SaaS card radii.

### Borders

```css
border: 1px solid #E5E3DF;
```

### Shadows

Most cards appear effectively flat. If depth is needed:

```css
box-shadow: 0 1px 2px rgb(20 18 13 / 0.04);
```

Do not use strong drop shadows.

---

## 17. Iconography

Icon language:

- technical line art;
- thin strokes;
- black, muted gray, or yellow;
- small decorative geometry;
- diagrams instead of illustrative cartoons.

Use **Lucide** or **Phosphor** icons with 1.25–1.5px strokes, then supplement with custom SVG diagrams.

---

## 18. Motion

The screenshot itself does not reveal animation, but motion should remain restrained and technical.

Recommended:

- 150–250ms button hover transitions;
- subtle translateY(-1px) on interactive cards;
- no bouncing or large entrance animations;
- architecture diagrams may use gentle line-draw, pulse, or data-flow effects;
- map points may pulse very subtly.

---

## 19. Suggested component tree

```txt
Page
├─ AnnouncementBar
├─ Header
├─ Hero
│  ├─ HeroCopy
│  ├─ ArchitectureIllustration
│  └─ MetricGrid
├─ LogoStrip
├─ ConfigSection
│  ├─ SectionIntro
│  ├─ ConfigVisual
│  └─ FeatureList
├─ RoutingSection
│  ├─ SectionIntro
│  ├─ BenchmarkVisual
│  └─ BenchmarkContent
├─ ProviderGrid
├─ GovernanceSection
│  ├─ SectionIntro
│  └─ GovernanceCards
├─ DeploymentSection
│  ├─ SectionIntro
│  └─ WorldMap
├─ FinalCTA
└─ Footer
```

---

## 20. Tailwind-style tokens

```ts
const theme = {
  colors: {
    bg: '#FBF8F7',
    surface: '#F3F1ED',
    border: '#E5E3DF',
    ink: '#15120D',
    inkSoft: '#302F2B',
    muted: '#77736C',
    yellow: '#FBE566',
  },
  radius: {
    xs: '3px',
    sm: '5px',
    md: '8px',
  },
  container: '1180px',
}
```

---

## 21. Implementation rules

1. Keep yellow to roughly **5–10% of the visible UI**. It is an accent, not the page base.
2. Preserve large vertical gaps. The sparse layout is a core part of the visual identity.
3. Avoid glassmorphism, gradients, oversized radii, and heavy shadows.
4. Use near-black rather than pure `#000` for most dark surfaces.
5. Keep paragraphs narrow: roughly **45–65 characters per line**.
6. Use diagrams and structured visuals to communicate product concepts.
7. Section intros should generally be centered; story/detail sections can switch to left alignment.
8. Cards should feel like documentation or infrastructure tooling, not consumer dashboards.
9. CTA labels should be short and practical.
10. Maintain a consistent visual tension between **editorial typography** and **technical diagrams**.

---

## 22. Visual summary

The site can be reproduced by combining:

- warm ivory background;
- black grotesk typography;
- restrained yellow highlight system;
- editorial whitespace;
- compact cards with thin borders;
- code/config panels;
- isometric infrastructure diagrams;
- monochrome customer logos;
- dark technical data visualizations;
- a strong yellow closing CTA;
- a near-black footer.

The key is restraint: the page feels premium because almost every section uses only **one dominant visual idea**, **one strong headline**, and **one accent color**.
