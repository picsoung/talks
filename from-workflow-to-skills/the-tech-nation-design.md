# The Tech Nation — Design System & UI/UX Reference

> **Purpose:** This document is a self-contained reference for replicating The Tech Nation's UI/UX in any project. It covers every design decision — from philosophy and color tokens to component patterns and animation specs. An AI agent reading this file should be able to produce pixel-accurate implementations without access to the original codebase.

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Tech Stack & Tooling](#2-tech-stack--tooling)
3. [Color System](#3-color-system)
4. [Typography](#4-typography)
5. [Spacing & Layout](#5-spacing--layout)
6. [Borders, Shadows & Radius](#6-borders-shadows--radius)
7. [Dark Mode](#7-dark-mode)
8. [Scrollbars](#8-scrollbars)
9. [Cursors](#9-cursors)
10. [Component Library (shadcn/ui + Radix)](#10-component-library-shadcnui--radix)
11. [Tailwind Configuration](#11-tailwind-configuration)
12. [CSS Variables (Complete)](#12-css-variables-complete)
13. [Global Base Styles](#13-global-base-styles)
14. [Component Patterns](#14-component-patterns)
15. [Animation System](#15-animation-system)
16. [Responsive Design](#16-responsive-design)
17. [Iconography](#17-iconography)
18. [Forms & Inputs](#18-forms--inputs)
19. [Cards](#19-cards)
20. [Navigation](#20-navigation)
21. [Accessibility](#21-accessibility)
22. [Brand Assets & Identity](#22-brand-assets--identity)
23. [Email / Newsletter Design](#23-email--newsletter-design)
24. [Do's and Don'ts](#24-dos-and-donts)
25. [Quick-Start Tailwind Config](#25-quick-start-tailwind-config)
26. [Quick-Start globals.css](#26-quick-start-globalscss)

---

## 1. Design Philosophy

The Tech Nation follows a **neo-brutalist** design language. Every visual decision reinforces boldness, clarity, and raw energy.

### Core Principles

| Principle                  | Description                                                                                                                                              |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hard edges**             | Zero border-radius everywhere (`rounded-none`, `--radius: 0px`). No soft corners, no pills, no rounded cards.                                            |
| **Thick borders**          | Primary borders are `4px solid` in the foreground color. Secondary/lighter borders use `2px solid`.                                                      |
| **Hard shadows**           | Drop shadows are solid-color offsets with zero blur — never soft/diffused. They look like the element is "lifted" and casting a sharp shadow down-right. |
| **High contrast**          | Black and white are the primary palette. Accent colors (lime, magenta) are used sparingly for emphasis.                                                  |
| **Monospace body**         | Body text uses a monospace font (DM Mono), giving a technical/terminal feel.                                                                             |
| **Bold headings**          | Headings use a geometric sans-serif (Space Grotesk) at `font-weight: 900` (black), uppercase, with tight negative tracking.                              |
| **Playful details**        | Custom pixel cursors, interactive game elements, sticker effects, confetti — brutalism doesn't mean boring.                                              |
| **Respect for whitespace** | Generous padding inside containers; content breathes despite the heavy visual weight of borders and shadows.                                             |

### Visual Identity Keywords

`brutalist` · `high-contrast` · `monospace` · `uppercase headings` · `hard shadows` · `thick borders` · `no rounded corners` · `lime accent` · `magenta links` · `pixel art touches`

---

## 2. Tech Stack & Tooling

| Layer                    | Technology                                                  |
| ------------------------ | ----------------------------------------------------------- |
| **Framework**            | Next.js (App Router) with React                             |
| **Language**             | TypeScript                                                  |
| **Styling**              | Tailwind CSS with CSS variables                             |
| **Component primitives** | shadcn/ui (default style, RSC-compatible) built on Radix UI |
| **Animation**            | Framer Motion                                               |
| **Icons**                | Lucide React                                                |
| **Forms**                | react-hook-form + zod + @hookform/resolvers                 |
| **Class merging**        | `cn()` utility using `clsx` + `tailwind-merge`              |
| **Carousel**             | Embla Carousel (via shadcn) + custom Framer Motion carousel |
| **Toasts**               | Sonner                                                      |
| **Drawer**               | Vaul                                                        |
| **Command palette**      | cmdk                                                        |

### The `cn()` Utility

Every component uses this for conditional/merged class names:

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 3. Color System

The palette is intentionally minimal. Five semantic tokens handle everything.

### Tokens

| Token         | Light Mode | Dark Mode | Tailwind Class                                 | Purpose                                                                  |
| ------------- | ---------- | --------- | ---------------------------------------------- | ------------------------------------------------------------------------ |
| **bg**        | `#ffffff`  | `#000000` | `bg-brutal-bg`, `text-brutal-bg`               | Page/card backgrounds                                                    |
| **fg**        | `#000000`  | `#ffffff` | `bg-brutal-fg`, `text-brutal-fg`               | Text, borders, shadows                                                   |
| **accent**    | `#AEEE00`  | `#AEEE00` | `bg-brutal-accent`, `text-brutal-accent`       | Lime green — highlights, badges, scrollbar thumbs, accent lines          |
| **secondary** | `#ff00ff`  | `#ff00ff` | `bg-brutal-secondary`, `text-brutal-secondary` | Magenta/fuchsia — links, CTAs, interactive elements, secondary scrollbar |
| **muted**     | `#e5e5e5`  | `#1a1a1a` | `bg-brutal-muted`, `text-brutal-muted`         | Muted backgrounds, disabled states, subtle fills                         |

### Additional Colors

| Color              | Hex       | Usage                             |
| ------------------ | --------- | --------------------------------- |
| **Destructive**    | `#ef4444` | Error states, delete actions      |
| **Dark gray text** | `#1a1a1a` | Newsletter body text (light mode) |

### Opacity Variants

Use Tailwind opacity modifiers on the token classes:

- `text-brutal-fg/40` — 40% opacity foreground (subtle labels)
- `text-brutal-fg/60` — 60% (secondary text)
- `text-brutal-fg/80` — 80% (slightly muted text)
- `bg-brutal-fg/5` — 5% foreground as background tint
- `bg-black/[0.02]` — near-transparent dark wash

### Color Rules

1. **Never use gray scales** beyond `brutal-muted`. No `gray-300`, `gray-500`, etc. as primary colors.
2. **Accent is for highlights only** — badges, active indicators, accent lines. Never as a large background fill.
3. **Secondary (magenta) is the interactive color** — links, buttons, hover states, CTAs.
4. **Foreground color is the border color** — borders are always `border-brutal-fg` (black in light mode, white in dark mode).
5. **Inverted sections** use `bg-brutal-fg text-brutal-bg` (black bg, white text in light mode).

---

## 4. Typography

### Font Families

| Role          | Font          | Tailwind Class | CSS Variable           | Fallback     |
| ------------- | ------------- | -------------- | ---------------------- | ------------ |
| **Headings**  | Space Grotesk | `font-sans`    | `--font-space-grotesk` | `sans-serif` |
| **Body / UI** | DM Mono       | `font-mono`    | `--font-dm-mono`       | `monospace`  |

Both fonts are loaded via `next/font/google` with `display: 'swap'`.

### Font Loading (Next.js)

```typescript
import { Space_Grotesk, DM_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-mono",
  display: "swap",
});
```

### Heading Styles

All headings (`h1`–`h6`) use `font-sans` (Space Grotesk).

| Element | Typical Size             | Weight             | Transform            | Tracking           | Example Classes                                            |
| ------- | ------------------------ | ------------------ | -------------------- | ------------------ | ---------------------------------------------------------- |
| **H1**  | `text-4xl` to `text-6xl` | `font-black` (900) | `uppercase`          | `tracking-tighter` | `font-sans font-black uppercase tracking-tighter text-5xl` |
| **H2**  | `text-3xl` to `text-4xl` | `font-black` (900) | `uppercase`          | `tracking-tighter` | `font-sans font-black uppercase tracking-tighter text-3xl` |
| **H3**  | `text-xl` to `text-2xl`  | `font-black` (900) | `uppercase`          | `tracking-tight`   | `font-sans font-black uppercase tracking-tight text-xl`    |
| **H4**  | `text-lg`                | `font-bold` (700)  | optional `uppercase` | —                  | `font-sans font-bold text-lg`                              |

### Body Text Styles

All body text uses `font-mono` (DM Mono) at `font-weight: 400`.

**Important:** The design system forces `font-weight: 400 !important` on all `.font-mono` elements. DM Mono is only loaded in weight 400. Never apply `font-bold` or `font-black` to mono text — it has no effect by design.

| Role              | Size               | Line Height | Classes                                          |
| ----------------- | ------------------ | ----------- | ------------------------------------------------ |
| **Body**          | `text-base` (16px) | 1.7         | `font-mono text-base`                            |
| **Small**         | `text-sm` (14px)   | 1.5         | `font-mono text-sm`                              |
| **Extra small**   | `text-xs` (12px)   | 1.5         | `font-mono text-xs`                              |
| **Caption/Badge** | `text-[11px]`      | 1           | `font-mono text-[11px] uppercase tracking-[2px]` |

### Text Outline Utility

A stroke-only text effect for decorative headings:

```css
.text-outline {
  -webkit-text-stroke: 1px var(--brutal-fg);
  color: transparent;
}
```

Usage: `className="text-outline text-6xl font-black uppercase"`

---

## 5. Spacing & Layout

### Spacing Scale

The project uses Tailwind's default spacing scale. Common patterns:

| Context              | Values                                     | Notes                                               |
| -------------------- | ------------------------------------------ | --------------------------------------------------- |
| **Page padding**     | `p-4 md:p-8` or `p-8 md:p-16`              | Responsive, generous on desktop                     |
| **Section padding**  | `py-8 px-6` or `py-12 px-8`                | Vertical > horizontal                               |
| **Card padding**     | `p-4` or `p-6`                             | Compact for small cards, spacious for feature cards |
| **Component gap**    | `gap-2`, `gap-4`, `gap-6`                  | Between items in flex/grid                          |
| **Stack spacing**    | `space-y-2`, `space-y-4`, `space-y-6`      | Vertical lists                                      |
| **Button padding**   | `px-4 py-2` (default), `px-6 py-3` (large) |                                                     |
| **Paragraph margin** | `mb-4` (16px)                              | Between paragraphs                                  |

### Layout Patterns

1. **Main frame:** The home page wraps content in a frame with `border-4 border-brutal-fg shadow-hard-lg`. This "framed content" pattern is signature.

2. **Two-column desktop layout:**

   ```
   <div className="flex flex-col desktop:flex-row">
     <div className="flex-1">Left content</div>
     <div className="flex-1">Right content</div>
   </div>
   ```

3. **Grid layouts:**
   - `grid grid-cols-1 md:grid-cols-2` — two-column on tablet+
   - `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` — three-column on desktop
   - `grid grid-cols-2 lg:grid-cols-4` — four-column grid

4. **Full-height sections:** `min-h-screen` or `h-screen` with `overflow-hidden`.

5. **Centered content:** `max-w-4xl mx-auto` or `max-w-6xl mx-auto`.

---

## 6. Borders, Shadows & Radius

### Border Radius

**Always `0px`.** This is non-negotiable in the brutalist style. The CSS variable `--radius: 0px` is set globally and shadcn components inherit it.

- Cards: `rounded-none` (shadcn cards override to remove default `rounded-lg`)
- Buttons: `rounded-none`
- Inputs: `rounded-none`
- Dialogs: `rounded-none`
- Badges: exception — `rounded-full` for pill badges, but only for small tag/status indicators

### Border Widths

| Weight         | Usage                                           | Example                              |
| -------------- | ----------------------------------------------- | ------------------------------------ |
| `border-4`     | Primary containers, cards, frames, main nav     | `border-4 border-brutal-fg`          |
| `border-2`     | Secondary cards, hover states, lighter emphasis | `border-2 border-brutal-fg`          |
| `border` (1px) | Subtle dividers, input fields                   | `border border-brutal-fg`            |
| `border-b-4`   | Section dividers, underline accents             | `border-b-4 border-brutal-secondary` |

### Hard Shadows

Three tiers of hard shadow — **no blur, no spread, solid foreground color:**

| Tier       | Shadow Value                         | Tailwind Class   | Usage                         |
| ---------- | ------------------------------------ | ---------------- | ----------------------------- |
| **Small**  | `4px 4px 0px 0px var(--brutal-fg)`   | `shadow-hard`    | Buttons, small cards, badges  |
| **Medium** | `8px 8px 0px 0px var(--brutal-fg)`   | `shadow-hard-lg` | Feature cards, content frames |
| **Large**  | `12px 12px 0px 0px var(--brutal-fg)` | `shadow-hard-xl` | Hero sections, modals         |

### Colored Shadows (Inline)

For special emphasis, colored hard shadows are used inline:

- Magenta CTA: `box-shadow: 4px 4px 0px 0px #FF00FF`
- Lime accent: `box-shadow: 4px 4px 0px 0px #AEEE00`
- Dark (on inverted): `box-shadow: 4px 4px 0px 0px rgba(0,0,0,1)`

### Hover Shadow Pattern

Cards often gain or increase shadow on hover:

```
hover:-translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
transition-all duration-300
```

This creates a "lift" effect — the card moves up 8px and a shadow appears beneath.

---

## 7. Dark Mode

### Implementation

- **Method:** Class-based (`darkMode: 'class'` in Tailwind config)
- **Toggle:** A custom `ThemeProvider` context with `theme` state (`'light' | 'dark'`)
- **Persistence:** `localStorage.getItem('theme')` / `setItem`
- **System default:** Falls back to `prefers-color-scheme: dark`
- **Application:** Adds/removes `'dark'` class on `document.documentElement`

### Dark Mode Strategy

- CSS variables swap automatically (see [Color System](#3-color-system))
- `brutal-accent` (#AEEE00) and `brutal-secondary` (#ff00ff) stay the same in both modes
- `brutal-bg` and `brutal-fg` are inverted (white↔black)
- `brutal-muted` shifts from light gray (#e5e5e5) to very dark gray (#1a1a1a)
- Shadows use `var(--brutal-fg)` so they automatically adapt (black in light, white in dark)

### Early Hydration Script

To prevent flash of wrong theme, an inline script runs before React hydrates:

```html
<script dangerouslySetInnerHTML={{ __html: `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  })();
`}} />
```

### Dark Mode CSS Pattern

When using Tailwind dark variants:

```
bg-brutal-bg dark:bg-brutal-bg      ← automatic via CSS vars
text-brutal-fg dark:text-brutal-fg   ← automatic via CSS vars
hover:bg-brutal-muted dark:hover:bg-brutal-muted  ← automatic
```

Most of the time you don't need explicit `dark:` prefixes because the CSS variables handle the swap. Only use `dark:` when you need a value that differs beyond the variable swap (e.g., `dark:border-white/20`).

---

## 8. Scrollbars

Scrollbars are custom-styled to match the brutalist theme. They are **wide, accent-colored, and bordered**.

### Default Scrollbar (Accent/Lime)

```css
* {
  scrollbar-width: wide;
  scrollbar-color: var(--brutal-accent) var(--brutal-bg);
}

::-webkit-scrollbar {
  width: 16px;
  background: var(--brutal-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--brutal-accent); /* Lime green */
  border: 4px solid var(--brutal-bg);
  border-radius: 0px !important;
}

::-webkit-scrollbar-track {
  background: var(--brutal-bg);
  border: 3px solid var(--brutal-fg); /* Black border on track */
  border-radius: 0px !important;
}
```

### Secondary Scrollbar (Magenta)

Applied via `.scrollbar-secondary` class:

```css
.scrollbar-secondary {
  scrollbar-color: var(--brutal-secondary) var(--brutal-bg);
}
.scrollbar-secondary::-webkit-scrollbar-thumb {
  background: var(--brutal-secondary); /* Magenta */
}
```

### Hidden Scrollbar

`.scrollbar-hide` — hides scrollbar while maintaining scroll behavior.

---

## 9. Cursors

Custom pixel-art cursors reinforce the playful brutalist identity:

| Cursor      | File          | Usage                                                                                                                |
| ----------- | ------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Default** | `/cursor.png` | Applied to `html` and `body`. 8×8 hotspot.                                                                           |
| **Pointer** | `/hand.png`   | Applied to all interactive elements: `a`, `button`, `[role="button"]`, `label[for]`, `.cursor-pointer`. 8×8 hotspot. |

```css
html {
  cursor:
    url("/cursor.png") 8 8,
    auto;
}
a,
button,
[role="button"] {
  cursor:
    url("/hand.png") 8 8,
    pointer !important;
}
```

---

## 10. Component Library (shadcn/ui + Radix)

The project uses **shadcn/ui** (default style) with components adapted to the brutalist theme.

### shadcn Configuration

```json
{
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

### Installed Radix Primitives

Accordion, AlertDialog, AspectRatio, Avatar, Checkbox, Collapsible, ContextMenu, Dialog, DropdownMenu, HoverCard, Label, Menubar, NavigationMenu, Popover, Progress, RadioGroup, ScrollArea, Select, Separator, Slider, Slot, Switch, Tabs, Toast, Toggle, ToggleGroup, Tooltip.

### How shadcn Components Are Brutalized

shadcn ships with default styles (soft shadows, rounded corners, neutral colors). The brutalist adaptation works through CSS variable overrides:

1. `--radius: 0px` → removes all rounded corners globally
2. `--border: var(--brutal-fg)` → all borders are solid black/white
3. `--ring: var(--brutal-fg)` → focus rings are solid black/white
4. `--primary: var(--brutal-fg)` → primary color is the foreground
5. `--accent: var(--brutal-accent)` → accent uses lime green

This means you can use shadcn components out-of-the-box and they'll be brutalist as long as the CSS variables are set correctly.

### Button Variants

The Button component uses class-variance-authority (CVA):

| Variant       | Description       | Visual                                                  |
| ------------- | ----------------- | ------------------------------------------------------- |
| `default`     | Primary action    | `bg-brutal-fg text-brutal-bg` (solid black, white text) |
| `destructive` | Dangerous action  | Red background                                          |
| `outline`     | Secondary action  | Border only, transparent bg                             |
| `secondary`   | Tertiary action   | Muted background                                        |
| `ghost`       | Minimal           | No border, no bg, hover reveals                         |
| `link`        | Inline link style | Underlined text only                                    |

Sizes: `default` (h-10 px-4 py-2), `sm` (h-9 px-3), `lg` (h-11 px-8), `icon` (h-10 w-10).

---

## 11. Tailwind Configuration

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', "sans-serif"],
        mono: ['"DM Mono"', "monospace"],
      },
      colors: {
        brutal: {
          bg: "var(--brutal-bg)",
          fg: "var(--brutal-fg)",
          accent: "var(--brutal-accent)",
          secondary: "var(--brutal-secondary)",
          muted: "var(--brutal-muted)",
        },
      },
      boxShadow: {
        hard: "4px 4px 0px 0px var(--brutal-fg)",
        "hard-lg": "8px 8px 0px 0px var(--brutal-fg)",
        "hard-xl": "12px 12px 0px 0px var(--brutal-fg)",
      },
      screens: {
        desktop: "1473px",
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 12. CSS Variables (Complete)

### Light Mode (`:root`)

```css
:root {
  /* Brutal palette */
  --brutal-bg: #ffffff;
  --brutal-fg: #000000;
  --brutal-accent: #aeee00;
  --brutal-secondary: #ff00ff;
  --brutal-muted: #e5e5e5;

  /* Shadcn UI semantic mappings */
  --background: var(--brutal-bg);
  --foreground: var(--brutal-fg);
  --card: var(--brutal-bg);
  --card-foreground: var(--brutal-fg);
  --popover: var(--brutal-bg);
  --popover-foreground: var(--brutal-fg);
  --primary: var(--brutal-fg);
  --primary-foreground: var(--brutal-bg);
  --secondary: var(--brutal-muted);
  --secondary-foreground: var(--brutal-fg);
  --muted: var(--brutal-muted);
  --muted-foreground: var(--brutal-fg);
  --accent: var(--brutal-accent);
  --accent-foreground: var(--brutal-fg);
  --destructive: #ef4444;
  --destructive-foreground: var(--brutal-bg);
  --border: var(--brutal-fg);
  --input: var(--brutal-fg);
  --ring: var(--brutal-fg);
  --radius: 0px;
}
```

### Dark Mode (`.dark`)

```css
.dark {
  --brutal-bg: #000000;
  --brutal-fg: #ffffff;
  --brutal-accent: #aeee00;
  --brutal-secondary: #ff00ff;
  --brutal-muted: #1a1a1a;

  /* Same shadcn mappings — they reference the brutal vars above */
  --background: var(--brutal-bg);
  --foreground: var(--brutal-fg);
  --card: var(--brutal-bg);
  --card-foreground: var(--brutal-fg);
  --popover: var(--brutal-bg);
  --popover-foreground: var(--brutal-fg);
  --primary: var(--brutal-fg);
  --primary-foreground: var(--brutal-bg);
  --secondary: var(--brutal-muted);
  --secondary-foreground: var(--brutal-fg);
  --muted: var(--brutal-muted);
  --muted-foreground: var(--brutal-fg);
  --accent: var(--brutal-accent);
  --accent-foreground: var(--brutal-fg);
  --destructive: #ef4444;
  --destructive-foreground: var(--brutal-bg);
  --border: var(--brutal-fg);
  --input: var(--brutal-fg);
  --ring: var(--brutal-fg);
}
```

---

## 13. Global Base Styles

### Applied to all elements

```css
@layer base {
  * {
    @apply border-brutal-fg; /* Default border color = foreground */
  }

  body {
    @apply bg-brutal-bg text-brutal-fg font-mono;
    font-weight: 400 !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-sans;
    font-family: var(--font-space-grotesk), "Space Grotesk", sans-serif;
  }

  p {
    @apply font-mono;
    font-weight: 400 !important;
  }
}
```

### Font-mono weight lock

All `.font-mono` elements are forced to `font-weight: 400 !important` — this prevents accidental bold/black on monospace text:

```css
@layer utilities {
  .font-mono,
  .font-mono.font-bold,
  .font-mono.font-black,
  [class*="font-mono"] {
    font-weight: 400 !important;
  }
}
```

---

## 14. Component Patterns

### 14.1 Framed Content Container

The signature "content in a box" pattern:

```html
<div className="border-4 border-brutal-fg shadow-hard-lg bg-brutal-bg">
  <div className="p-6 md:p-8">{/* content */}</div>
</div>
```

### 14.2 Section Header

```html
<h2
  className="font-sans font-black uppercase tracking-tighter text-3xl md:text-4xl text-brutal-fg mb-4"
>
  Section Title
</h2>
<p className="font-mono text-brutal-fg/60 text-sm">
  Section description in monospace.
</p>
```

### 14.3 Inverted Block (Dark Section)

```html
<div className="bg-brutal-fg text-brutal-bg p-8">
  <h3
    className="font-sans font-black uppercase tracking-tighter text-2xl text-brutal-bg"
  >
    Inverted Heading
  </h3>
  <p className="font-mono text-brutal-bg/80">Content on dark background.</p>
</div>
```

### 14.4 Badge / Tag

```html
<!-- Lime badge (informational) -->
<span
  className="bg-brutal-accent text-brutal-fg font-sans font-black text-xs uppercase tracking-[2px] px-2 py-1"
>
  New
</span>

<!-- Inverted badge (on light bg) -->
<span
  className="bg-brutal-fg text-brutal-accent font-mono text-[11px] uppercase tracking-[2px] px-2.5 py-1"
>
  Article 01
</span>
```

### 14.5 CTA Button (Prominent)

```html
<button
  className="bg-brutal-fg text-brutal-secondary border-4 border-brutal-secondary font-sans font-black uppercase tracking-wider px-8 py-3 shadow-[4px_4px_0px_0px_#ff00ff] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#ff00ff] transition-all duration-200"
>
  Let's Talk
</button>
```

### 14.6 Accent Divider Line

```html
<!-- Lime accent bar -->
<div className="h-1.5 bg-brutal-accent w-full" />

<!-- Thick section divider -->
<hr className="border-t-4 border-brutal-fg my-8" />
```

### 14.7 Expandable Card

Uses Framer Motion `layout` animation for smooth expand/collapse:

```tsx
<motion.div
  layout
  className="border-4 border-brutal-fg bg-brutal-bg overflow-hidden"
>
  <motion.div layout className="p-4 cursor-pointer" onClick={toggle}>
    <h3 className="font-sans font-black uppercase">{title}</h3>
  </motion.div>
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="px-4 pb-4"
      >
        {content}
      </motion.div>
    )}
  </AnimatePresence>
</motion.div>
```

### 14.8 Sticker Component

An SVG element with a specular lighting filter and mouse-follow light effect:

```tsx
<svg className="w-full h-full">
  <filter id="sticker-light">
    <feSpecularLighting
      surfaceScale="5"
      specularConstant="1"
      specularExponent="10"
      lightColor="#ffffff"
    >
      <fePointLight x={mouseX} y={mouseY} z="200" />
    </feSpecularLighting>
  </filter>
  <image href={svgSrc} filter="url(#sticker-light)" />
</svg>
```

### 14.9 Pricing Card

```html
<div
  className="border-4 border-brutal-fg shadow-hard-lg bg-brutal-bg p-6 flex flex-col"
>
  <div className="border-b-4 border-brutal-secondary pb-4 mb-4">
    <h3 className="font-sans font-black uppercase text-2xl">{title}</h3>
    <p className="font-mono text-brutal-fg/60">{subtitle}</p>
  </div>
  <ul className="font-mono text-sm space-y-2 flex-1">
    {features.map(f =>
    <li key="{f}">• {f}</li>
    )}
  </ul>
  <button
    className="mt-6 bg-brutal-fg text-brutal-bg font-sans font-black uppercase py-3 shadow-hard hover:-translate-y-1 transition-all"
  >
    Get Started
  </button>
</div>
```

---

## 15. Animation System

### 15.1 Framer Motion Patterns

**Scroll reveal (most common):**

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  {content}
</motion.div>
```

**Staggered children:**

```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }}
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

**Hover lift:**

```tsx
<motion.div
  whileHover={{ y: -4, scale: 1.02 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
  {card}
</motion.div>
```

**Button press:**

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
  Click Me
</motion.button>
```

### 15.2 Transition Defaults

| Type          | Values                                                    |
| ------------- | --------------------------------------------------------- |
| **Fade in**   | `duration: 0.5–0.8`, `ease: "easeOut"`                    |
| **Spring**    | `type: "spring"`, `stiffness: 400`, `damping: 10`         |
| **Stagger**   | `staggerChildren: 0.1–0.2`                                |
| **Page exit** | `exit={{ opacity: 0 }}`, `transition={{ duration: 0.3 }}` |

### 15.3 CSS Keyframe Animations

```css
/* Floating (decorative elements) */
@keyframes floatY {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
}

/* Typing cursor */
@keyframes blink {
  0%,
  100% {
    border-color: transparent;
  }
  50% {
    border-color: var(--brutal-fg);
  }
}

/* Bounce landing (game-like element appearing) */
@keyframes boxBounce {
  0% {
    transform: translateY(-20px) scale(0.5);
    opacity: 0;
  }
  50% {
    transform: translateY(5px) scale(1.1);
    opacity: 1;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

/* Infinite slide (portfolio ticker) */
@keyframes portfolio-slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
```

### 15.4 Animated Number

Uses Framer Motion `useMotionValue` and `animate` to count up numbers:

```tsx
const count = useMotionValue(0);
const rounded = useTransform(count, (v) => Math.round(v));

useEffect(() => {
  const controls = animate(count, targetValue, { duration: 2 });
  return controls.stop;
}, [targetValue]);
```

---

## 16. Responsive Design

### Breakpoints

| Name        | Width  | Tailwind Prefix     |
| ----------- | ------ | ------------------- |
| **sm**      | 640px  | `sm:`               |
| **md**      | 768px  | `md:`               |
| **lg**      | 1024px | `lg:`               |
| **xl**      | 1280px | `xl:`               |
| **2xl**     | 1536px | `2xl:`              |
| **desktop** | 1473px | `desktop:` (custom) |

### Common Responsive Patterns

```
/* Column stacking */
flex flex-col md:flex-row

/* Grid progression */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Padding scaling */
p-4 md:p-8 lg:p-12

/* Text scaling */
text-2xl md:text-3xl lg:text-5xl

/* Show/hide */
hidden lg:flex         /* Hidden on mobile, flex on desktop */
lg:hidden              /* Visible on mobile, hidden on desktop */

/* Custom desktop breakpoint for main layout */
desktop:flex-row       /* Side-by-side only on wide desktops */
desktop:overflow-hidden
```

### Mobile-First Approach

All styles are mobile-first. Base styles target mobile, then `md:` and `lg:` prefixes add desktop enhancements:

- Mobile: Single column, smaller text, compact padding
- Tablet (`md:`): Two columns, medium text
- Desktop (`lg:` / `desktop:`): Multi-column, large text, full feature display

---

## 17. Iconography

### Icon Library: Lucide React

All icons come from `lucide-react`. Common icons used:

| Icon                       | Usage                                  |
| -------------------------- | -------------------------------------- |
| `ChevronDown`              | Accordions, dropdowns                  |
| `ChevronRight`             | Breadcrumbs, navigation                |
| `ArrowLeft` / `ArrowRight` | Pagination, carousel                   |
| `Sun` / `Moon`             | Theme toggle                           |
| `Globe`                    | Language selector                      |
| `X`                        | Close buttons, dialogs                 |
| `Loader2`                  | Loading spinners (with `animate-spin`) |
| `Check`                    | Success states, checkboxes             |
| `Plus` / `Minus`           | Expand/collapse                        |

### Icon Sizing

- Inline with text: `size={16}` or `className="h-4 w-4"`
- Standalone: `size={20}` or `className="h-5 w-5"`
- Large decorative: `size={24}` or `className="h-6 w-6"`

### Icon Style Rules

- Always use `stroke-width={2}` (Lucide default)
- Color inherits from parent text color (`currentColor`)
- Never fill icons — they should remain outline-only

---

## 18. Forms & Inputs

### Form Architecture

- **Validation:** Zod schemas
- **State:** react-hook-form with `@hookform/resolvers/zod`
- **UI:** shadcn `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormMessage`

### Input Styling

All inputs follow the brutalist pattern:

```html
<input
  className="w-full border-4 border-brutal-fg bg-brutal-bg text-brutal-fg font-mono px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brutal-fg placeholder:text-brutal-fg/40"
/>
```

Key properties:

- `border-4 border-brutal-fg` — thick black border
- `bg-brutal-bg` — white/black background
- `font-mono` — monospace text
- `rounded-none` — no radius (inherited from `--radius: 0px`)
- `placeholder:text-brutal-fg/40` — 40% opacity placeholder
- Focus: `focus:ring-2 focus:ring-brutal-fg` — solid ring, no blur

### Textarea

Same as input but with `min-h-[100px] resize-none`.

### Select / Dropdown

Uses Radix Select with brutalist styling. The trigger has `border-4`, the content panel has `border-4 shadow-hard`.

### Form Label

```html
<label className="font-mono text-sm text-brutal-fg uppercase tracking-wider">
  Label Text
</label>
```

### Form Error Message

```html
<p className="font-mono text-sm text-destructive mt-1">Error message here.</p>
```

---

## 19. Cards

### Standard Card

```html
<div
  className="border-4 border-brutal-fg bg-brutal-bg shadow-hard p-6 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
>
  <h3 className="font-sans font-black uppercase tracking-tight text-xl mb-2">
    Card Title
  </h3>
  <p className="font-mono text-sm text-brutal-fg/60">
    Card description goes here.
  </p>
</div>
```

### Feature Card (Larger)

```html
<div className="border-4 border-brutal-fg bg-brutal-bg shadow-hard-lg p-8">
  <div className="border-b-4 border-brutal-accent pb-4 mb-6">
    <span
      className="bg-brutal-accent text-brutal-fg font-mono text-xs uppercase tracking-[2px] px-2 py-1"
      >Feature</span
    >
  </div>
  <h3 className="font-sans font-black uppercase tracking-tighter text-3xl mb-4">
    Feature Name
  </h3>
  <p className="font-mono text-brutal-fg/80">Detailed description.</p>
</div>
```

### Inverted Card (Dark Background)

```html
<div
  className="border-4 border-brutal-fg bg-brutal-fg text-brutal-bg shadow-hard-lg p-6"
>
  <h3 className="font-sans font-black uppercase text-brutal-bg">
    Inverted Card
  </h3>
  <p className="font-mono text-brutal-bg/80">Light text on dark.</p>
</div>
```

### Card Hover States

Cards should feel interactive. Common hover pattern:

1. `hover:-translate-y-2` — lift 8px
2. `hover:shadow-hard-lg` — increase shadow tier
3. `transition-all duration-300` — smooth transition
4. Optional: `hover:border-brutal-secondary` — border color change on hover

---

## 20. Navigation

### Navbar Pattern

- **Frame:** `border-4 border-brutal-fg shadow-hard bg-brutal-bg`
- **Layout:** Flex row with logo left, nav center, controls right
- **Nav items:** `font-mono text-sm uppercase tracking-wider`
- **Active item:** `text-brutal-secondary` or `border-b-4 border-brutal-accent`
- **Hover:** `hover:text-brutal-secondary transition-colors duration-150`

### Theme Toggle

Sun/Moon icon toggle. Positioned in the navbar. Uses the `ThemeProvider` context.

### Language Selector

Globe icon + dropdown with locale options. Flags or text labels for each language.

### Mobile Menu

Full-screen overlay or slide-in sheet with `AnimatePresence` for open/close animation.

### Scroll-Aware Header

Uses Framer Motion to hide on scroll-down and reveal on scroll-up:

```tsx
const [isVisible, setIsVisible] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
    setLastScrollY(currentScrollY);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);

<motion.header
  initial={{ y: -100 }}
  animate={{ y: isVisible ? 0 : -100 }}
  transition={{ duration: 0.3 }}
>
```

---

## 21. Accessibility

### Implemented Patterns

- `prefers-reduced-motion: reduce` — disables complex animations (car, road, skyline)
- `role="presentation"` on decorative layout tables
- Radix UI primitives provide built-in keyboard navigation and ARIA attributes
- Focus rings: solid 2px ring (`focus-visible:ring-2 focus-visible:ring-brutal-fg`)
- Semantic HTML: proper heading hierarchy, `<main>`, `<nav>`, `<footer>`

### Keyboard Navigation

- All interactive elements are focusable
- Accordions support arrow keys
- Dialogs trap focus
- Dropdowns support typeahead

---

## 22. Brand Assets & Identity

### Logo Variants

| File                 | Usage                         |
| -------------------- | ----------------------------- |
| `flag-pink.svg`      | Favicon, compact logo, navbar |
| `tech-pink.svg`      | Full logo (light mode)        |
| `tech-pink-dark.svg` | Full logo (dark mode)         |

### Taglines

- **Primary:** "People. Tech. Impact."
- **Extended:** "Monthly. Pragmatic. No fluff." (newsletter context)

### Voice & Tone

- Bold, direct, no corporate jargon
- Technical but approachable
- Uppercase headings signal confidence
- Monospace body text signals technical credibility
- Playful interactive elements balance the heavy visual style

---

## 23. Email / Newsletter Design

The newsletter follows the same brutalist principles adapted for email clients:

### Email-Specific Specs

| Property                  | Value                                         |
| ------------------------- | --------------------------------------------- |
| **Width**                 | 600px fixed, centered                         |
| **Background**            | Page: `#e5e5e5` (muted), Container: `#ffffff` |
| **Font stack (headings)** | `'Space Grotesk', Arial, sans-serif`          |
| **Font stack (body)**     | `'DM Mono', 'Courier New', monospace`         |
| **Container border**      | `4px solid #000000`                           |
| **Container shadow**      | `8px 8px 0px 0px #000000`                     |
| **Layout**                | Table-based (email client compatibility)      |

### Email Typography

| Element                | Size    | Weight | Style                                  |
| ---------------------- | ------- | ------ | -------------------------------------- |
| **H1**                 | 32px    | 900    | Uppercase, -1px letter-spacing         |
| **H2**                 | 28px    | 900    | Uppercase, -0.5px letter-spacing       |
| **H3 / Section title** | 22–24px | 900    | -0.5px letter-spacing                  |
| **Body**               | 16px    | 400    | Line-height 1.7, DM Mono               |
| **Subtitle**           | 15px    | 400    | Opacity 0.7                            |
| **Badge**              | 11px    | 700    | Uppercase, 2px letter-spacing, DM Mono |

### Email Components

- **Article badge:** Black bg, lime text, `4px 10px` padding
- **Highlight badge:** Lime bg, black text, Space Grotesk, `6px 14px` padding
- **Dividers:** `4px solid #000000`
- **Accent lines:** Lime `#AEEE00`, 4–6px height
- **CTA button:** Black bg, magenta border & text, `shadow: 4px 4px 0px 0px #FF00FF`
- **Prompt boxes:** `#f5f5f5` bg, left border (magenta for bad, lime for good)
- **Footer:** Black bg, white text, social icons

### Mobile Email (≤600px)

- Full-width container
- Title: 24px, Subtitle: 14px, Body: 15px
- Padding: 16px
- CTA: full-width button

---

## 24. Do's and Don'ts

### Do

- Use `border-4` on primary containers, `border-2` on secondary
- Use `shadow-hard` on interactive elements
- Use `font-sans font-black uppercase tracking-tighter` for headings
- Use `font-mono` for all body text and UI labels
- Keep border-radius at `0px` everywhere
- Use `bg-brutal-accent` (#AEEE00 lime) for small highlight accents
- Use `text-brutal-secondary` (#ff00ff magenta) for links and CTAs
- Use Framer Motion `whileInView` with `viewport={{ once: true }}` for scroll reveals
- Animate shadow on hover (small → large)
- Use the `cn()` utility for conditional classes
- Provide custom scrollbars with thick tracks and accent thumbs

### Don't

- Don't use `rounded-lg`, `rounded-md`, `rounded-xl` — everything is `rounded-none`
- Don't use soft/blur shadows (`shadow-md`, `shadow-lg`, `shadow-xl` from Tailwind defaults)
- Don't use gradients as backgrounds (except for very specific decorative animations)
- Don't use thin 1px borders as primary borders — minimum `border-2`
- Don't apply `font-bold` or `font-black` to `.font-mono` elements (it's forced to 400)
- Don't use gray scale colors as primary (only `brutal-muted` for subtle backgrounds)
- Don't use smooth, polished UI patterns — embrace the raw, blocky aesthetic
- Don't use default browser scrollbars — always style them
- Don't skip the custom cursor — it's part of the identity
- Don't use opacity below 0.4 for text — it becomes unreadable

---

## 25. Quick-Start Tailwind Config

Copy this into your new project:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', "sans-serif"],
        mono: ['"DM Mono"', "monospace"],
      },
      colors: {
        brutal: {
          bg: "var(--brutal-bg)",
          fg: "var(--brutal-fg)",
          accent: "var(--brutal-accent)",
          secondary: "var(--brutal-secondary)",
          muted: "var(--brutal-muted)",
        },
      },
      boxShadow: {
        hard: "4px 4px 0px 0px var(--brutal-fg)",
        "hard-lg": "8px 8px 0px 0px var(--brutal-fg)",
        "hard-xl": "12px 12px 0px 0px var(--brutal-fg)",
      },
      screens: {
        desktop: "1473px",
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 26. Quick-Start globals.css

Copy this into your new project's global stylesheet:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --brutal-bg: #ffffff;
  --brutal-fg: #000000;
  --brutal-accent: #aeee00;
  --brutal-secondary: #ff00ff;
  --brutal-muted: #e5e5e5;

  --background: var(--brutal-bg);
  --foreground: var(--brutal-fg);
  --card: var(--brutal-bg);
  --card-foreground: var(--brutal-fg);
  --popover: var(--brutal-bg);
  --popover-foreground: var(--brutal-fg);
  --primary: var(--brutal-fg);
  --primary-foreground: var(--brutal-bg);
  --secondary: var(--brutal-muted);
  --secondary-foreground: var(--brutal-fg);
  --muted: var(--brutal-muted);
  --muted-foreground: var(--brutal-fg);
  --accent: var(--brutal-accent);
  --accent-foreground: var(--brutal-fg);
  --destructive: #ef4444;
  --destructive-foreground: var(--brutal-bg);
  --border: var(--brutal-fg);
  --input: var(--brutal-fg);
  --ring: var(--brutal-fg);
  --radius: 0px;
}

.dark {
  --brutal-bg: #000000;
  --brutal-fg: #ffffff;
  --brutal-accent: #aeee00;
  --brutal-secondary: #ff00ff;
  --brutal-muted: #1a1a1a;

  --background: var(--brutal-bg);
  --foreground: var(--brutal-fg);
  --card: var(--brutal-bg);
  --card-foreground: var(--brutal-fg);
  --popover: var(--brutal-bg);
  --popover-foreground: var(--brutal-fg);
  --primary: var(--brutal-fg);
  --primary-foreground: var(--brutal-bg);
  --secondary: var(--brutal-muted);
  --secondary-foreground: var(--brutal-fg);
  --muted: var(--brutal-muted);
  --muted-foreground: var(--brutal-fg);
  --accent: var(--brutal-accent);
  --accent-foreground: var(--brutal-fg);
  --destructive: #ef4444;
  --destructive-foreground: var(--brutal-bg);
  --border: var(--brutal-fg);
  --input: var(--brutal-fg);
  --ring: var(--brutal-fg);
}

@layer base {
  * {
    scrollbar-width: wide;
    scrollbar-color: var(--brutal-accent) var(--brutal-bg);
    @apply border-brutal-fg;
  }

  ::-webkit-scrollbar {
    width: 16px;
    background: var(--brutal-bg);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--brutal-accent);
    border: 4px solid var(--brutal-bg);
    border-radius: 0px !important;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--brutal-accent);
    filter: brightness(0.9);
  }

  ::-webkit-scrollbar-track {
    background: var(--brutal-bg);
    border: 3px solid var(--brutal-fg);
    border-radius: 0px !important;
  }

  html {
    cursor:
      url("/cursor.png") 8 8,
      auto;
    scroll-behavior: smooth;
  }

  body {
    @apply bg-brutal-bg text-brutal-fg font-mono;
    font-weight: 400 !important;
    cursor:
      url("/cursor.png") 8 8,
      auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-sans;
    font-family: var(--font-space-grotesk), "Space Grotesk", sans-serif;
  }

  p {
    @apply font-mono;
    font-weight: 400 !important;
  }
}

@layer utilities {
  .text-outline {
    -webkit-text-stroke: 1px var(--brutal-fg);
    color: transparent;
  }

  .font-mono,
  .font-mono.font-bold,
  .font-mono.font-black,
  [class*="font-mono"] {
    font-weight: 400 !important;
  }

  a,
  button,
  [role="button"],
  label[for] {
    cursor:
      url("/hand.png") 8 8,
      pointer !important;
  }

  .shadow-hard {
    box-shadow: 4px 4px 0px 0px var(--brutal-fg);
  }
  .shadow-hard-lg {
    box-shadow: 8px 8px 0px 0px var(--brutal-fg);
  }
  .shadow-hard-xl {
    box-shadow: 12px 12px 0px 0px var(--brutal-fg);
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  .scrollbar-secondary {
    scrollbar-width: wide;
    scrollbar-color: var(--brutal-secondary) var(--brutal-bg);
  }
  .scrollbar-secondary::-webkit-scrollbar-thumb {
    background: var(--brutal-secondary);
    border: 4px solid var(--brutal-bg);
    border-radius: 0px !important;
  }
  .scrollbar-secondary::-webkit-scrollbar-track {
    background: var(--brutal-bg);
    border: 3px solid var(--brutal-fg);
    border-radius: 0px !important;
  }
}
```

---

## Appendix: Dependency List for UI

```json
{
  "dependencies": {
    "framer-motion": "latest",
    "lucide-react": "latest",
    "class-variance-authority": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest",
    "sonner": "latest",
    "vaul": "latest",
    "cmdk": "latest",
    "embla-carousel-react": "latest",
    "react-hook-form": "latest",
    "@hookform/resolvers": "latest",
    "zod": "latest",
    "@radix-ui/react-accordion": "latest",
    "@radix-ui/react-alert-dialog": "latest",
    "@radix-ui/react-dialog": "latest",
    "@radix-ui/react-dropdown-menu": "latest",
    "@radix-ui/react-label": "latest",
    "@radix-ui/react-popover": "latest",
    "@radix-ui/react-select": "latest",
    "@radix-ui/react-separator": "latest",
    "@radix-ui/react-slot": "latest",
    "@radix-ui/react-switch": "latest",
    "@radix-ui/react-tabs": "latest",
    "@radix-ui/react-toast": "latest",
    "@radix-ui/react-toggle": "latest",
    "@radix-ui/react-tooltip": "latest"
  }
}
```

Install only what you need — the full list above covers every Radix primitive used in the original project.
