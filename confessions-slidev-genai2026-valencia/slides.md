---
# ============================================================
# CONFESSIONS OF A VIBECODING ENGINEER
# Keynote · 35 min · mixed product + eng leadership audience
# Branding: nicolasgrenie.com (cream + dark + yellow/gold)
# Spine: garage (alone, personal projects as reps) → vibecoding at work (with a team)
# ============================================================
theme: default
aspectRatio: 16/9
canvasWidth: 1920
title: Confessions of a Vibecoding Engineer
info: |
  Nicolas Grenié · @picsoung
  A keynote about vibecoding as muscle-building, and what happens
  when you bring that muscle back into your team.
author: Nicolas Grenié
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: fade
mdc: true
fonts:
  sans: Inter
  mono: JetBrains Mono
# Venue swap: change this one variable and the chrome updates everywhere
venue: "GenAI Summit · Valencia · April 2026"
handle: "@picsoung"
class: ng-dark
hideInToc: true
---

<!--
SPEAKER NOTE — OPENING (Act 1: The confession & the shift, ~4 min)

The whole talk lives or dies on the opening 90 seconds. Don't rush.
Walk on, let the memoji hit, then land the title slowly.
-->

<img src="/memoji.png" class="title-memoji" alt="Nicolas memoji" />

<div class="title-grid">
  <div class="title-copy">
    <h1 class="title-headline">
      Confessions of a<br/>
      <span class="accent">Vibecoding Engineer</span>
    </h1>
    <div class="mt-10 mono text-sm opacity-70">
      Nicolas Grenié · {{ $slidev.configs.handle }}
    </div>
    <div class="mt-3 mono text-xs opacity-60">
      <span class="accent">GenAI Summit</span> · Valencia · April 2026
    </div>
  </div>
  <div class="title-illustration">
    <img src="/images/nicolas-vibing.png" alt="Nicolas vibing on the couch, lofi coding" />
  </div>
</div>

---
layout: center
class: ng-dark
---

<div class="flex items-center justify-center gap-16 max-w-5xl mx-auto">
  <img src="/memoji.png" class="w-72 h-72 flex-shrink-0" alt="Nicolas memoji" />
  <div>
    <h1 class="text-7xl font-extrabold mb-8">
      Hey, I'm <span class="accent">Nicolas.</span>
    </h1>
    <div class="mono text-xl opacity-80 space-y-3">
      <div>DevRel @ <span class="accent">SLNG.ai</span></div>
      <div>Based in <span class="accent">Barcelona</span></div>
      <div><span class="accent">Lovable</span> Ambassador</div>
      <div class="opacity-60 pt-3">Previously · Typeform · Red Hat</div>
      <div class="pt-4 flex items-center gap-2">
        <span class="opacity-60">fav claude verb:</span>
        <svg class="claude-mark" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 1.5 L13.8 9.2 L21.5 11 L13.8 12.8 L12 20.5 L10.2 12.8 L2.5 11 L10.2 9.2 Z" fill="#D97757"/>
        </svg>
        <span class="accent font-bold">Razzmatazzing</span>
      </div>
    </div>
  </div>
</div>

<!--
Quick intro. 20-30 seconds max. Don't linger — the keyboards are next.
-->

---
layout: center
class: ng-dark
---

<div class="kicker text-center">What a keyboard tells you</div>

<div class="grid grid-cols-2 gap-10 max-w-5xl mx-auto mt-8">
  <div class="text-center">
    <div class="keyboard-card">
      <img src="/images/keyboards/gamer.png" alt="WASD keyboard keys, worn from gaming" />
    </div>
    <div v-click class="keyboard-label">🎮 <span class="accent">Gamer</span></div>
  </div>
  <div class="text-center">
    <div class="keyboard-card">
      <img src="/images/keyboards/dev.jpg" alt="Kinesis split ergonomic mechanical keyboard — the serious dev's weapon of choice" />
    </div>
    <div v-click class="keyboard-label">👨‍💻 <span class="accent">Typical dev</span></div>
  </div>
  <div class="text-center">
    <div class="keyboard-card">
      <img src="/images/keyboards/stackoverflow.jpg" alt="Stack Overflow branded C and V copy-paste keys" />
    </div>
    <div v-click class="keyboard-label">📋 <span class="accent">Stack Overflow dev</span></div>
  </div>
  <div class="text-center">
    <div class="keyboard-card">
      <img src="/images/keyboards/vibecoder.jpg" alt="Giant oversized Enter key being punched — the vibe coder's only input device" />
    </div>
    <div v-click class="keyboard-label">✨ <span class="accent">Vibe coder</span></div>
  </div>
</div>

<!--
Reveal labels one click at a time. Let each land.
The last one (Tab + Enter) is the punchline — pause before the next slide.
-->

---
layout: center
class: ng-dark
---

<div class="vibecoding-card">
  <div class="kicker text-center">Where the term comes from</div>
  <img src="/images/karpathy-tweet.png" class="karpathy-tweet" alt="Andrej Karpathy tweet coining the term vibe coding, Feb 2025" />
  <div class="vibecoding-attr mono">
    — Andrej Karpathy · <span class="accent">@karpathy</span> · Feb 2025
  </div>
</div>

<!--
Brief beat. Credit where due. Don't lecture the definition — move on.
-->

---
layout: center
class: ng-dark
---

<h1 class="statement">
  I don't <span class="muted">write</span> code anymore.
</h1>

<h2 v-click class="statement-sm mt-12">
  I <span class="accent">edit</span> code AI wrote.
</h2>

<!--
Pause after the first line. Let the shock land.
Then the reveal. Then:
"Who else in this room has stopped writing code?
Raise your hand. Don't be shy."
Scan the room. Don't rush. This is the audience-pull moment.
-->

---
layout: center
class: ng-dark
---

<h1 class="statement-sm">
  It's not that I <span class="muted">can't.</span>
</h1>

<h1 v-click class="statement mt-12">
  It's that I <span class="accent">don't need to.</span>
</h1>

---
layout: center
class: ng-dark
---

<h1 class="statement">
  This gives me time<br/>
  to <span class="accent">think.</span>
</h1>

<h2 v-click class="statement-sm mt-12">
  And build what <span class="accent">matters.</span>
</h2>

---
layout: center
class: ng-dark
---

<h1 class="statement-sm">
  But "what matters" has a <span class="muted">shadow.</span>
</h1>

<div class="choices">
  <div v-click class="choice-row">
    <img src="/images/logos/react.svg" alt="React" />
    <span>React</span>
    <span class="choice-or">or</span>
    <img src="/images/logos/vue.svg" alt="Vue" />
    <span>Vue?</span>
  </div>
  <div v-click class="choice-row">
    <img src="/images/logos/postgresql.svg" alt="Postgres" />
    <span>Postgres</span>
    <span class="choice-or">or</span>
    <img src="/images/logos/supabase.svg" alt="Supabase" />
    <span>Supabase?</span>
  </div>
  <div v-click class="choice-row">
    <img src="/images/logos/nextdotjs.svg" alt="Next.js" />
    <span>Next.js</span>
    <span class="choice-or">or</span>
    <img src="/images/logos/remix.svg" alt="Remix" />
    <span>Remix?</span>
  </div>
  <div v-click class="choice-row">
    <img src="/images/logos/tailwindcss.svg" alt="Tailwind" />
    <span>Tailwind</span>
    <span class="choice-or">or...</span>
    <span class="opacity-40">uh...</span>
  </div>
</div>

<div v-click class="shadow-punchline mono">
  Three days later. <span class="accent">Nothing shipped.</span>
</div>

<!--
Click reveals. Let each land — the room should laugh by the 3rd row.
Final click is the punchline. Plant the tension — SoS pays off in Act I.
-->

---
layout: center
class: ng-dark
---

<div class="kicker text-center">The thesis</div>

<h1 class="statement">
  Engineers with a<br/>
  <span class="accent">product mind.</span>
</h1>

---
layout: center
class: ng-dark
---

<h1 class="statement">
  Focus is a <span class="accent">muscle.</span>
</h1>

<h2 v-click class="statement-sm mt-12">
  You don't build muscle<br/>
  in a <span class="muted">meeting.</span>
</h2>

<!--
Bridge line to Act I. After the reveal, transition:
"So where do you build this muscle?
In the garage. Alone. At night. On things that don't matter yet."
-->


---
layout: center
class: ng-dark
---

<div class="kicker">Two tribes</div>

<div class="grid grid-cols-2 gap-12 max-w-4xl mx-auto mt-8">
  <div class="text-center">
    <div class="text-7xl mb-4">🏠</div>
    <h2 class="text-5xl font-bold mb-3">In the garage</h2>
    <p class="opacity-70 text-xl">Alone, after hours, building whatever comes to mind</p>
  </div>
  <div class="text-center">
    <div class="text-7xl mb-4">🏢</div>
    <h2 class="text-5xl font-bold mb-3">At work</h2>
    <p class="opacity-70 text-xl">With a team, a design system, a roadmap, stakeholders</p>
  </div>
</div>

<div class="mt-16 text-center mono text-base opacity-60">
  I've been both. Tonight I'll tell you why you should be too.
</div>

---
layout: center
class: ng-dark
---


<div class="kicker text-center">ACT I</div>
<h1 class="statement">
  The <span class="accent">Garage.</span>
</h1>

<!--
Transition line: "First, let me take you back to my garage —
the place where this all starts. Alone. After hours. On things that don't matter yet."
-->

---
layout: center
class: ng-dark
---

<h1 class="statement">
  Vibecoding is not about<br/>
  building <span class="muted">startups.</span><br/>
  It's about building <span class="accent">reps.</span>
</h1>

---
layout: rep
class: ng-dark
section: GARAGE
rep: 1
repTitle: Home-cooked software
site: ContractionTrack
---

A tool I built for one person I love, on one specific night.

<!--
SPEAKER: Explain the context — partner in labor, need to time contractions,
every app on the store wanted a subscription. You built it in 20 minutes.
The lesson is home-cooked software (credit Maggie Appleton / Alexis Kovalenko).
-->

---
layout: image-right
image: /images/contractiontrack.png
class: ng-dark
section: GARAGE
---

<div class="flex flex-col justify-center h-full pr-8">
  <div class="kicker">The lesson</div>
  <h2 class="text-6xl font-extrabold leading-tight">
    Solve for <span class="accent">one real person.</span>
  </h2>
  <p class="mt-6 text-xl opacity-70">
    Not a market. Not a persona. A person.
  </p>
</div>

<div class="slide-qr">
  <img src="/images/qr/contractiontrack.svg" alt="ContractionTrack QR code" />
  <div class="slide-qr-label mono">scan to try</div>
</div>

---
layout: rep
class: ng-dark
section: GARAGE
rep: 2
repTitle: The iteration muscle
site: ImSoMetal
qr: /images/qr/imsometal.svg
---

<div class="rep-gallery">
  <img src="/images/imsometal-bandname.png" alt="Apistle of the Code band logo" />
  <img src="/images/imsometal-nico.png" alt="Nico as metal band frontman" />
  <img src="/images/imsometal-band-stage.png" alt="Apistle of the Code on stage, Silicon Dominion" />
</div>

---
layout: default
class: ng-dark
section: GARAGE
---

<div class="flex flex-col items-center justify-center h-full">
  <h2 class="text-6xl font-extrabold mb-3">
    <span style="text-decoration: line-through; opacity: 0.4;">One-shot prompt.</span>
  </h2>
  <h2 class="text-6xl font-extrabold accent mb-10">
    Iterative process.
  </h2>
  <div class="iterations-grid">
    <figure v-click>
      <img src="/images/imsometal-v1.png" alt="First try" />
      <figcaption>1st try</figcaption>
    </figure>
    <figure v-click>
      <img src="/images/imsometal-v2.png" alt="Second pass" />
      <figcaption>2nd</figcaption>
    </figure>
    <figure v-click>
      <img src="/images/imsometal-v3.png" alt="Final" />
      <figcaption class="accent">Final</figcaption>
    </figure>
  </div>
</div>

<div class="slide-qr">
  <img src="/images/qr/imsometal.svg" alt="ImSoMetal QR code" />
  <div class="slide-qr-label mono">scan to try</div>
</div>

<!--
Click each iteration in sequence. Let the visual progression do the talking —
basic → refined → full metal. Don't narrate every step.
-->

---
layout: rep
class: ng-dark
section: GARAGE
rep: 3
repTitle: Shipping the whole loop
site: PianoRigolo
---

Build with one hand, address a bigger market.

---
layout: image-right
image: /images/pianorigolo.png
backgroundSize: contain
class: ng-dark
section: GARAGE
---

<div class="flex flex-col justify-center h-full pr-8">
  <h2 class="text-6xl font-extrabold leading-tight">
    Building is only <br/>
    <span class="accent">one part</span> of the journey.
  </h2>
  <p class="mt-6 text-xl opacity-70">
    Idea → prototype → onboarding → support → goodbye. You own the whole loop.
  </p>
</div>

<div class="slide-qr">
  <img src="/images/qr/pianorigolo.svg" alt="PianoRigolo QR code" />
  <div class="slide-qr-label mono">scan to try</div>
</div>

---
layout: rep
class: ng-dark
section: GARAGE
rep: 4
repTitle: Ride the trend wave
site: Bnbicons
---

Airbnb dropped their design system. I shipped the generator in 48h.

---
layout: image-right
image: /images/bnbicons.png
backgroundSize: contain
class: ng-dark
section: GARAGE
---

<div class="flex flex-col justify-center h-full pr-8">
  <div class="kicker">The lesson</div>
  <h2 class="text-6xl font-extrabold leading-tight">
    Spot the wave.<br/>
    <span class="accent">Ship fast.</span><br/>
    Or miss it.
  </h2>
  <p class="mt-6 text-xl opacity-70">
    Trends have a window. Vibecoding lets you hit it.
  </p>
</div>

<div class="slide-qr">
  <img src="/images/qr/bnbicons.svg" alt="Bnbicons QR code" />
  <div class="slide-qr-label mono">scan to try</div>
</div>

---
layout: center
class: ng-dark
section: GARAGE
---

<div class="text-center">
  <div class="grid grid-cols-2 gap-16 max-w-5xl mx-auto">
    <div>
      <div class="stat-number accent">42k</div>
      <div class="mono text-xl mt-3 opacity-70">icons generated</div>
    </div>
    <div>
      <div class="stat-number accent">15k</div>
      <div class="mono text-xl mt-3 opacity-70">users</div>
    </div>
    <div>
      <div class="stat-number accent">#2</div>
      <div class="mono text-xl mt-3 opacity-70">Product Hunt</div>
    </div>
    <div>
      <div class="stat-number accent">$2k</div>
      <div class="mono text-xl mt-3 opacity-70">in revenue</div>
    </div>
  </div>
</div>

---
layout: center
class: ng-dark
section: GARAGE
---

<div class="kicker text-center">Follow the money</div>

<h1 class="statement">
  One project = one <span class="accent">domain.</span>
</h1>

<div v-click class="registrars">
  <img src="/images/logos/cloudflare.svg" alt="Cloudflare" />
  <img src="/images/logos/gandi.svg" alt="Gandi" />
  <img src="/images/logos/ionos.svg" alt="IONOS" />
</div>

<h2 v-click class="statement">
  The real <span class="accent">winners.</span>
</h2>

<!--
Point back at the $2k from previous slide. Deadpan delivery.
"Meanwhile, I've spent way more than that on domains."
Reveal logos. Punchline lands.
-->

---
layout: center
class: ng-dark
section: GARAGE
---

<h1 class="statement-sm">
  "Vibe-coded apps can't do real <span class="muted">SEO.</span>"
</h1>

<div v-click class="seo-proof mono">
  sitemap.xml · robots.txt · llms.txt · Open Graph tags
</div>

<h2 v-click class="text-5xl font-extrabold text-center mt-2">
  <span class="accent">Says who?</span>
</h2>

<img v-click src="/images/bnbicons-search-console.png" class="seo-receipts" alt="Bnbicons Google Search Console: 2.49K clicks, 20.6K impressions, 12.1% CTR over 3 months" />

<!--
Deliver the objection with air-quotes.
Click 1: proof list.
Click 2: "Says who?" — deadpan.
Click 3: drop the search console receipts. Room laughs + gasps.
-->


---
layout: center
class: ng-dark
---

<h1 class="statement">
  Every app is a <br/>
  glorified <span class="accent">Excel backend.</span>
</h1>

<!--
This is the punchline slide. Deliver it dry. The room laughs.
-->

---
layout: center
class: ng-dark
---

<h1 class="statement">
  Shiny Objects <span class="accent">Syndrome.</span>
</h1>

<img src="/images/side-projects-meme.jpg" class="sos-meme" alt="Squirtle 'Unfinished Project / Another Project Idea' meme" />

---
layout: center
class: ng-dark
---

<div class="kicker text-center">New fear unlocked</div>

<h1 class="statement">
  Letting my users <span class="accent">down.</span>
</h1>

---
layout: center
class: ng-dark
---

<h1 class="statement">
  I am <span class="accent">no designer.</span>
</h1>

<!--
Set up the design-iteration beats next: show mockup → result,
then a second design-tweak example.
-->

---
layout: center
class: ng-dark
section: GARAGE
---

<div class="kicker text-center">Design without a designer</div>

<div class="mockup-flow">
  <figure v-click>
    <img src="/images/mockup-boat.png" alt="Hand-drawn wireframe of a boat booking page" />
    <figcaption>1. Pass a mockup</figcaption>
  </figure>
  <div v-click class="mockup-arrow">→</div>
  <figure v-click>
    <img src="/images/design-result.png" alt="SuperBoatly yacht booking page — polished design" />
    <figcaption>2. Get a design</figcaption>
  </figure>
</div>

<!--
Click 1: show the wireframe. "Yes, I drew this. Don't judge."
Click 2: the arrow. Pause.
Click 3: the polished result. Room reacts.
"Same structure. Real design. No designer."
-->

---
layout: center
class: ng-dark
section: GARAGE
---

<div class="vibecoding-card">
  <div class="kicker text-center">A warning</div>
  <img src="/images/gergely-tweet.png" class="karpathy-tweet" alt="Gergely Orosz tweet warning that rebuilding Typeform with AI is not the same as Typeform, Jan 2026" />
  <div class="vibecoding-attr mono">
    — Gergely Orosz · <span class="accent">@GergelyOrosz</span> · Jan 2026
  </div>
</div>

<!--
Deliver this slide slow. Typeform is personal — callback to bio:
"I worked at Typeform for years. Gergely is right. Cloning the UI is trivial.
Cloning the enterprise SSO, SOC2, the EU data residency, the analytics,
the customer support, the team plan billing — that's the actual product."

This slide is the sober close to Act I. Don't rush ACT II after it.
-->

---
layout: center
class: ng-dark
---


<div class="kicker text-center">ACT II</div>
<h1 class="statement">
  What the reps<br/>
  <span class="accent">build.</span>
</h1>

---
layout: center
class: ng-dark
---

<div class="max-w-4xl mx-auto">
  <div class="kicker">The posture</div>
  <h1 class="statement">
    Conductor, <br/>
    not <span class="muted">tourist.</span>
  </h1>
  <p class="mt-10 text-center text-xl opacity-70">
    You don't play every instrument.<br/>
    You understand the music.
  </p>
</div>

---
layout: center
class: ng-dark
---

<h1 class="statement">
  AI is my <span class="accent">intern.</span>
</h1>

<!--
Brilliant intern, fast, enthusiastic — and needs clear direction,
review, and occasional "no, do it again."
-->

---
layout: center
class: ng-dark
---

<h1 class="statement">
  Generalists own <br/>
  the <span class="accent">AI era.</span>
</h1>

---
layout: center
class: ng-dark
---


<div class="kicker text-center">ACT III</div>
<h1 class="statement">
  Vibecoding <span class="accent">at work.</span>
</h1>

<!--
Transition line: "OK. You've put in the reps, alone, at home.
Now what happens when you walk into the office on Monday?"
-->

---
layout: center
class: ng-dark
---

<h1 class="statement">
  Shipping in a company <br/>
  <span class="accent">sucks.</span>
</h1>

---
layout: center
class: ng-dark
---

<h2 class="statement-sm">
  "Let's ship this <span class="accent">new product.</span>"
</h2>

<div class="mt-3 mb-12 mono text-lg opacity-60 text-center">
  — the CEO
</div>

<div class="figma-chaos">
  <img src="/images/figma-frames.png" alt="Endless Figma prototype frames and versions" />
  <img src="/images/figma-connections.png" alt="Tangled connection arrows between Figma frames" />
</div>

<!--
Let the visual speak. "This is what shipping in a company looks like."
Two screenshots of the same prototype — the frames, and the wiring between them.
-->

---
layout: center
class: ng-dark
section: PRIME TIME
---

<div class="kicker text-center">The cost of shipping</div>

<div class="pain-points">
  <div v-click>
    <span class="pain-dot">·</span>
    PMs struggle to <span class="accent">visually communicate</span> their ideas.
  </div>
  <div v-click>
    <span class="pain-dot">·</span>
    Figma is <span class="accent">too intimidating.</span>
  </div>
  <div v-click>
    <span class="pain-dot">·</span>
    Prototyping is <span class="accent">hacky and repetitive.</span>
  </div>
  <div v-click>
    <span class="pain-dot">·</span>
    Testing variations <span class="accent">takes forever.</span>
  </div>
</div>

<!--
Walk through each pain point. These aren't hypothetical — PMs and designers
have said all of these out loud. Ideally name one person on your team who said #1.
-->

---
layout: center
class: ng-dark
section: PRIME TIME
---

<div class="kicker text-center">What the team really wants</div>

<div class="team-wants">
  <div>
    <h3>What <span class="accent">PMs</span> want</h3>
    <ol>
      <li><strong>Speed up ideation</strong> — sketch and digitize ideas fast.</li>
      <li><strong>Accelerate exploration</strong> — more variations, faster.</li>
      <li><strong>Improve communication</strong> — realistic visuals for stakeholders.</li>
    </ol>
  </div>
  <div>
    <h3>What <span class="accent">Designers</span> want</h3>
    <ol>
      <li><strong>Enhance realism</strong> — prototypes that simulate the real thing.</li>
      <li><strong>Empower the team</strong> — non-designers shipping prototypes.</li>
      <li><strong>Reduce manual effort</strong> — less fiddling in Figma.</li>
    </ol>
  </div>
</div>

<!--
Source: Typeform research (Nicolas's prior context). Lean on the credibility.
"When we asked the teams, both sides wanted the same thing from different angles."
This sets up WHY the next slide (internal demo) matters.
-->

---
layout: center
class: ng-dark
---

<div class="kicker text-center">The friction</div>

<h1 class="statement">
  "Can we change <br/>
  the <span class="accent">button?</span>"
</h1>

<!--
The PM question that used to take a sprint.
Now the PM can answer it themselves.
-->

---
layout: center
class: ng-dark
---

<div class="kicker text-center">The fix</div>

<h1 class="statement">
  Empower PMs to <span class="accent">experiment.</span>
</h1>

---
layout: center
class: ng-dark
section: PRIME TIME
---

<div class="kicker text-center">Guardrails, not gates</div>

<h1 class="statement-sm">
  Connect with your<br/>
  <span class="accent">existing design system.</span>
</h1>

<div class="ds-flow">
  <div class="ds-flow-group">
    <img src="/images/logos/figma.svg" alt="Figma" />
    <img src="/images/logos/storybook.svg" alt="Storybook" />
    <img src="/images/logos/shadcnui.svg" alt="shadcn/ui" />
  </div>
  <div class="ds-flow-arrow">→</div>
  <img class="ds-flow-tool-logo" src="/images/logos/lovable.svg" alt="Lovable" />
  <div class="ds-flow-arrow">→</div>
  <div class="ds-flow-output">on-brand UI ✨</div>
</div>

<p class="mt-10 opacity-70 text-xl text-center">
  Vibecoding at work without the design system is just noise.
</p>

---
layout: center
class: ng-dark
section: PRIME TIME
---

<div class="kicker text-center">What's next for us</div>

<h1 class="statement-sm">
  <span class="accent">Skills.</span> Team knowledge, packaged.
</h1>

<div class="skills-grid">
  <div class="skill-card">
    <div class="skill-emoji">🎨</div>
    <div class="skill-name">design-review</div>
    <div class="skill-desc">Checks UI against brand guidelines.</div>
  </div>
  <div class="skill-card">
    <div class="skill-emoji">🔐</div>
    <div class="skill-name">auth-check</div>
    <div class="skill-desc">Scans code for auth &amp; permission issues.</div>
  </div>
  <div class="skill-card">
    <div class="skill-emoji">📊</div>
    <div class="skill-name">seo-audit</div>
    <div class="skill-desc">Validates sitemap, OG tags, llms.txt.</div>
  </div>
  <div class="skill-card">
    <div class="skill-emoji">🧪</div>
    <div class="skill-name">test-coverage</div>
    <div class="skill-desc">Reviews tests and flags weak spots.</div>
  </div>
</div>

<p class="mt-8 text-xl text-center opacity-80">
  Write a skill once. <span class="accent">Every teammate gets the reps.</span>
</p>

<!--
Skills = the 2026 evolution of shared team snippets, but smarter:
they include instructions, resources, even runnable logic. Your team's
brain, reusable. Callback to Act I: "Every teammate gets the reps" —
the muscle isn't locked in one person's garage anymore.
-->

---
layout: center
class: ng-dark
---

<div class="kicker text-center">Ask yourself</div>

<h1 class="statement">
  Who else can benefit<br/>
  from it in the <span class="accent">company?</span>
</h1>

<!--
Open question, thrown to the audience. Beat.
Then answer: Support. Sales. Ops. Marketing.
Every PM. Every teammate who used to file a ticket.
-->

---
layout: center
class: ng-dark
---


<h1 class="statement">
  AI doesn't replace jobs.<br/>
  It removes <span class="accent">friction.</span>
</h1>

---
layout: center
class: ng-dark
---

<h1 class="statement">
  Vibecoding is not about <br/>
  building <span class="muted">startups.</span><br/>
  It's about building <span class="accent">reps.</span>
</h1>

---
layout: center
class: ng-dark
---

<div class="flex flex-col items-center justify-center h-full">
  <h1 class="statement">
    It's your opportunity<br/>
    to <span class="accent">build.</span>
  </h1>
</div>

---
layout: center
class: ng-dark
---

<div class="flex flex-col items-center justify-center h-full">
  <img src="/memoji.png" class="w-28 h-28 mb-8" alt="Nicolas memoji" />
  <h1 class="text-7xl font-extrabold">Thank you.</h1>
  <div class="mt-8 text-center mono opacity-70">
    Nicolas Grenié · {{ $slidev.configs.handle }} · nicolasgrenie.com
  </div>

  <div class="workshop-cta">
    <div class="workshop-meta mono">
      <span class="accent">Tomorrow · 10:30</span> · workshop
    </div>
    <div class="workshop-title">
      Build Your First App <span class="opacity-60">with</span>
      <img src="/images/logos/lovable.svg" alt="Lovable" class="workshop-lovable" />
    </div>
  </div>
</div>

<!--
Land "Thank you" first. Then point to the workshop CTA.
"If this sparked anything — come build tomorrow. 10:30. We'll ship in an hour."
-->

