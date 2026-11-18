---
theme: default
aspectRatio: 16/9
canvasWidth: 1920
title: Things I built with Lovable
info: |
  Nicolas Grenié · @picsoung
  Six projects, one success story, and a few things to try at BuildJam.
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
venue: "BuildJam · Barcelona · 18 November 2026"
handle: "@picsoung"
class: ng-dark
hideInToc: true
---

<img src="/memoji.png" class="title-memoji" alt="Nicolas Grenié" />

<div class="title-grid">
  <div class="title-copy">
    <h1 class="title-headline">Things I built<br/>with <span class="accent">Lovable</span></h1>
    <div class="mt-10 mono text-xl opacity-70">Nicolas Grenié · @picsoung</div>
    <div class="mt-3 mono text-lg opacity-60">BuildJam Barcelona · 18 November 2026</div>
  </div>
  <div class="title-illustration">
    <img src="/images/nicolas-vibing.png" alt="Illustration of an evening spent building at a laptop" />
  </div>
</div>

<!--
00:00–00:25 · 25 seconds
Tonight you are going to build something. First, a few things I have built with
Lovable, why I built them, and what happened after I published them.
Six projects. Only one that I would call a success as a business.
Event context: https://www.aicampus.barcelona/es/program/buildjam-barcelona-build-the-app-your-business-needs-in-one-night-with-lovable-2026-11-18
Cover artwork reused from Confessions of a Vibecoding Engineer, GenAI Valencia.
-->

---
layout: center
class: ng-dark
title: Nicolas Grenié
---

<div class="flex items-center justify-center gap-24 mx-auto" style="max-width:1600px">
  <img src="/memoji.png" class="w-80 h-80 flex-shrink-0" alt="Nicolas Grenié memoji" />
  <div>
    <h1 style="font-size:5rem;margin-bottom:32px">Hey, I'm <span class="accent">Nicolas</span></h1>
    <div style="font-size:2.75rem;font-weight:600">Developer Advocate</div>
    <div class="mt-5" style="font-size:2rem;opacity:0.75">Previously · SLNG · Typeform · Red Hat</div>
    <div class="flex items-center gap-6 mt-12" style="font-size:2.25rem">
      <span>Co-organizer at</span>
      <img src="/images/logos/hackbarna-white.svg" alt="HackBarna" style="height:52px;width:auto;object-fit:contain" />
    </div>
    <div class="flex items-center gap-6 mt-8" style="font-size:2.25rem">
      <img src="/images/logos/lovable-white.svg" alt="Lovable" style="height:52px;width:auto;max-width:280px;object-fit:contain" />
      <span>Ambassador</span>
    </div>
    <div class="mono mt-12 flex items-center gap-2" style="font-size:1.75rem;opacity:0.8">
      <svg class="claude-mark" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 1.5 L13.8 9.2 L21.5 11 L13.8 12.8 L12 20.5 L10.2 12.8 L2.5 11 L10.2 9.2 Z" fill="#D97757"/>
      </svg>
      <span class="accent font-bold">Razzmatazzing</span>
    </div>
  </div>
</div>

<!--
00:25–00:50 · 25 seconds
Keep the intro short. Developer Advocate, previously at SLNG, Typeform and
Red Hat. I co-organize HackBarna and I'm a Lovable Ambassador.
Let the Razzmatazzing line be a quick personality detail, then move into the projects.
Bio and past roles updated from the user's November 18 correction.
HackBarna wordmark: existing official asset from hackbcn/public/brand/wordmark-white.svg.
Lovable wordmark: official white wordmark from https://docs.lovable.dev/.
-->

---
layout: center
class: ng-dark
title: Where the ideas come from
---

<div class="kicker text-center">Where the ideas come from</div>
<h1 class="statement" style="width:1600px;max-width:100%">“I wish<br/><span class="accent">this existed</span>”</h1>
<p class="text-center mt-12 opacity-75" style="margin-top:48px;opacity:0.75;font-size:2.4rem">Usually something very small. Usually something in my own life.</p>

<!--
00:50–01:25 · 35 seconds
I don't start with a pitch deck. I encounter something annoying or have an idea
that makes me curious. Before, I would leave it in a notes app. Now I can see
whether it works. The cost of trying an idea has changed.
These examples are deliberately different in size and ambition.
-->

---
layout: default
class: ng-dark
title: ContractionTrack
section: PROJECTS
---

<div class="grid grid-cols-2 gap-16 items-center h-full px-12">
  <div>
    <div class="kicker">01 · ContractionTrack</div>
    <h1>Built in the<br/><span class="accent">delivery room</span></h1>
    <p class="mt-10 opacity-80" style="margin-top:40px;opacity:0.8;font-size:2.5rem;line-height:1.4">We needed a contraction timer.<br/>The app wanted a login.</p>
    <p class="mt-8" style="margin-top:32px;opacity:0.9;font-size:2rem">One person. One immediate problem.</p>
    <div class="flex items-center gap-8 mt-10">
      <img src="/images/qr/contractiontrack.svg" alt="Try ContractionTrack" style="width:220px;height:220px;background:white;padding:10px;border-radius:8px" />
      <a href="https://go.nicolas.dev/buildjam-contractions" class="mono text-2xl">contractiontrack.com</a>
    </div>
  </div>
  <img src="/images/contractiontrack.png" alt="ContractionTrack contraction timer interface" style="width:100%;max-height:840px;object-fit:contain;border-radius:16px" />
</div>

<!--
01:25–02:30 · 65 seconds
Retell the delivery-room story from your previous talk. Your wife was in labour,
and the contraction timer interrupted with a login and ads. You built a focused
alternative. No login, ads or paywall. A tool for someone you love.
The older slides say 20 minutes and the portfolio says 30, so avoid an exact
duration here. This is the clearest example of personal software.
Do not frame the timer as medical advice or a clinical decision tool.
Sources: existing ContractionTrack slide and screenshot from GenAI Valencia;
https://nicolasgrenie.com/records/projects/contractiontrack.md
https://contractiontrack.com
-->

---
layout: default
class: ng-dark
title: HackBarna attendee badge
section: PROJECTS
---

<div class="grid grid-cols-2 gap-16 items-center h-full px-12">
  <div>
    <div class="kicker">02 · HackBarna attendee badge</div>
    <h1>“I'm going to<br/><span class="accent">HackBarna</span>”</h1>
    <p class="mt-10" style="margin-top:40px;opacity:0.9;font-size:2.4rem;line-height:1.4">A personalized badge attendees<br/>can download and share.</p>
    <p class="mt-8 opacity-70" style="margin-top:32px;opacity:0.7;font-size:2rem">One small job for your community.</p>
    <div class="flex items-center gap-8 mt-10">
      <img src="/images/qr/badge.svg" alt="Create a HackBarna attendee badge" style="width:220px;height:220px;background:white;padding:10px;border-radius:8px" />
      <a href="https://go.nicolas.dev/buildjam-badge" class="mono text-2xl">go.nicolas.dev/buildjam-badge</a>
    </div>
  </div>
  <img src="/images/hackbarna-badge.jpg" alt="HackBarna badge generator with role selection, avatar upload and a live badge preview" style="width:100%;max-height:840px;object-fit:contain;border-radius:12px" />
</div>

<!--
02:30–03:20 · 50 seconds
Attendees choose Hacker, Judge, Mentor or custom role text, then add an avatar
using Gravatar or their own image. They can download the badge and share it.
Show the live preview in the screenshot, or open the app briefly.
The app does a small, concrete job for an event community. No participation or
conversion figures are needed to explain why it was useful to build.
The screenshot shows the September 19–20 HackBarna AI Summit edition.
Source and screenshot captured 18 November 2026:
https://hackbarna-badge.lovable.app/
Dub link: https://go.nicolas.dev/buildjam-badge
-->

---
layout: default
class: ng-dark
title: Sweep SF
section: PROJECTS
---

<div class="px-8 pt-8">
  <div class="kicker">03 · Sweep SF</div>
  <h1>A game about <span class="accent">cleaning San Francisco</span></h1>
  <div class="flex gap-12 mt-10 items-start">
    <img src="/images/sweepsf.jpg" alt="Sweep SF gameplay showing a street-cleaning truck completing a mission in San Francisco" style="width:74%;height:650px;object-fit:contain;border-radius:12px" />
    <div class="flex-1 pt-8">
      <p style="opacity:0.9;font-size:2.5rem;line-height:1.4">Real streets.<br/>Live 311 reports.<br/>A cleaning truck.</p>
      <div class="mt-10"><img src="/images/qr/sweepsf.svg" alt="Play Sweep SF" style="width:200px;height:200px;background:white;padding:12px;border-radius:8px" /></div>
      <a href="https://go.nicolas.dev/buildjam-sweepsf" class="mono block mt-5 text-xl">sweepsf.nicolas.dev</a>
    </div>
  </div>
</div>

<!--
03:20–04:15 · 55 seconds
This one started from seeing Slop New York and wanting to try something similar
for San Francisco. You drive a DPW truck and clean reports on a real city map.
Show the gameplay capture, or open the game briefly if the connection is good.
The reports and city geometry make the idea concrete. This is also an example
of building for curiosity and fun, without needing a business case first.
The game does not close real municipal reports. Cleaning happens inside the game.
Sources: /Users/picsoung/Dev/hackathons/sf-slop/README.md and AGENTS.md.
Capture: videos/sweep-sf/clips/v2/cleanup-hud-success.jpg from that repository.
Public app: https://sf-slop.lovable.app
Inspiration: https://mrdoob.github.io/slop-newyork/
-->

---
layout: default
class: ng-dark
title: HackBarna Digest
section: PROJECTS
---

<div class="grid grid-cols-2 gap-16 items-center h-full px-12">
  <div>
    <div class="kicker">04 · HackBarna Digest</div>
    <h1>What's happening<br/>in <span class="accent">Barcelona?</span></h1>
    <p class="mt-10 opacity-80" style="margin-top:40px;opacity:0.8;font-size:2.4rem;line-height:1.45">Tech events and communities<br/>in one place.</p>
    <p class="mt-8" style="margin-top:32px;opacity:0.9;font-size:2rem">A recurring question became a useful tool.</p>
    <div class="flex items-center gap-8 mt-10">
      <img src="/images/qr/digest.svg" alt="Explore HackBarna Digest" style="width:220px;height:220px;background:white;padding:10px;border-radius:8px" />
      <a href="https://go.nicolas.dev/buildjam-digest" class="mono text-2xl">digest.hackbarna.com</a>
    </div>
  </div>
  <img src="/images/digest.png" alt="HackBarna Digest homepage with events and community discovery" style="width:100%;max-height:780px;object-fit:contain;border-radius:12px" />
</div>

<!--
04:15–05:10 · 55 seconds
People keep asking what is happening in Barcelona and which communities to join.
Digest puts events and communities together, and people can submit an event.
Connect this to the audience: a recurring question at work can be an app idea.
Show the event directory. Avoid claiming current event totals or subscriber
counts. The saved screenshot is an earlier version of the homepage.
Sources: https://digest.hackbarna.com/en
https://nicolasgrenie.com/records/projects/hackbarna-digest.md
Screenshot reused from your portfolio: public/assets/projects/hackbarna-digest.png.
-->

---
layout: center
class: ng-dark
title: The one that took off
---

<h1 class="statement" style="width:1600px;max-width:100%">And then<br/><span class="accent">one took off</span></h1>

<!--
05:10–05:30 · 20 seconds
Be honest: these are experiments. Only one has been a success in the business
sense. That is Bnbicons. Let the pause land before showing it.
The success framing is explicitly from the user's brief.
-->

---
layout: default
class: ng-dark
title: Bnbicons
section: PROJECTS
---

<div class="grid grid-cols-2 gap-16 items-center h-full px-12">
  <div>
    <div class="kicker">05 · Bnbicons</div>
    <h1>The one that<br/><span class="accent">worked</span></h1>
    <p class="mt-10" style="margin-top:40px;opacity:0.9;font-size:2.5rem;line-height:1.4">An AI icon generator<br/>inspired by Airbnb's visual style.</p>
    <p class="mt-8 opacity-70" style="margin-top:32px;opacity:0.7;font-size:2rem">I shipped the first version in 48 hours.</p>
    <div class="flex items-center gap-8 mt-10">
      <img src="/images/qr/bnbicons.svg" alt="Try Bnbicons" style="width:220px;height:220px;background:white;padding:10px;border-radius:8px" />
      <a href="https://go.nicolas.dev/buildjam-bnbicons" class="mono text-2xl">bnbicons.com</a>
    </div>
  </div>
  <img src="/images/bnbicons.png" alt="Bnbicons AI icon generator and generated icon examples" style="width:100%;max-height:840px;object-fit:contain;border-radius:12px" />
</div>

<!--
05:30–06:30 · 60 seconds
Reuse the Bnbicons story: Airbnb's new visual direction was getting attention.
You made a generator and shipped the first version in 48 hours.
The idea had a moment, and building quickly let you find out whether people
wanted it. The point is the combination of timing and distribution.
Do not imply affiliation with Airbnb or that the generated icons are official.
Source: existing Bnbicons slides and screenshot from GenAI Valencia.
https://bnbicons.com
-->

---
layout: center
class: ng-dark
title: Bnbicons results
section: PROJECTS
---

<div class="kicker text-center">Bnbicons · results shared in April 2026</div>
<div class="grid grid-cols-2 gap-x-32 gap-y-16 mx-auto mt-12" style="max-width:1350px;text-align:center">
  <div><div class="stat-number accent">42k</div><div class="mt-5" style="font-size:2rem">icons generated</div></div>
  <div><div class="stat-number accent">15k</div><div class="mt-5" style="font-size:2rem">users</div></div>
  <div><div class="stat-number accent">#2</div><div class="mt-5" style="font-size:2rem">Product Hunt</div></div>
  <div><div class="stat-number accent">$2k</div><div class="mt-5" style="font-size:2rem">revenue</div></div>
</div>

<!--
06:30–07:10 · 40 seconds
These are the results I shared in my April talk, not a live November dashboard.
Read only the numbers that help the story. This reached people and made money.
Keep the context: these are results for one project, not a promise about what
everyone can earn from an app.
Source: confessions-slidev-genai2026-valencia/slides.md, Bnbicons results slide.
Historical values retained exactly: 42k icons, 15k users, #2 Product Hunt, $2k revenue.
-->

---
layout: center
class: ng-dark
title: The domain-name business
---

<h1 class="statement-sm" style="width:1600px;max-width:100%">One project.<br/>One more <span class="accent">domain name</span>.</h1>
<div class="registrars">
  <img src="/images/logos/cloudflare.svg" alt="Cloudflare" />
  <img src="/images/logos/gandi.svg" alt="Gandi" />
  <img src="/images/logos/ionos.svg" alt="IONOS" />
</div>
<h2 class="statement-xs">The other <span class="accent">success stories</span></h2>

<!--
07:10–07:35 · 25 seconds
Reuse the domain-registrar joke from the previous talk. Deadpan delivery.
Every new idea seems to need another domain. The registrars are doing well.
Keep this as a joke. Do not invent a domain-spend figure.
Logos and narrative reused from GenAI Valencia, "Follow the money" slide.
-->

---
layout: default
class: ng-dark
title: BarnaKids
section: PROJECTS
---

<div class="grid grid-cols-2 gap-16 items-center h-full px-12">
  <div>
    <div class="kicker">06 · BarnaKids · the latest one</div>
    <h1>Which playground<br/>has a <span class="accent">slide?</span></h1>
    <p class="mt-10" style="margin-top:40px;opacity:0.9;font-size:2.5rem;line-height:1.4">A very specific question<br/>from life with kids in Barcelona.</p>
    <p class="mt-8 opacity-70" style="margin-top:32px;opacity:0.7;font-size:2rem">Find places by equipment and age.</p>
    <div class="flex items-center gap-8 mt-10">
      <img src="/images/qr/barnakids.svg" alt="Explore BarnaKids" style="width:220px;height:220px;background:white;padding:10px;border-radius:8px" />
      <a href="https://go.nicolas.dev/buildjam-barnakids" class="mono text-2xl">barnakids.com</a>
    </div>
  </div>
  <div class="flex justify-center">
    <img src="/images/barnakids-home.jpg" alt="BarnaKids mobile homepage with playground equipment and age filters" style="height:820px;max-width:100%;object-fit:contain;border-radius:18px" />
  </div>
</div>

<!--
07:35–08:35 · 60 seconds
Back to the same place as ContractionTrack: I want something for my own life.
A list of playgrounds isn't enough when your kid wants a particular activity.
The starting question was finding slides, or filtering places by age.
This is the latest experiment. Don't manufacture a success story or usage metric.
Source: /Users/picsoung/Dev/hackathons/barcelona-playground-finder/README.md.
App: https://barnakids.com
Capture: videos/parquets-bcn/assets/captures/v2-home.jpg, 12 November 2026.
-->

---
layout: default
class: ng-dark
title: BarnaKids in use
section: PROJECTS
---

<div class="px-12 pt-8">
  <h1>One useful <span class="accent">journey</span></h1>
  <div class="flex justify-center gap-24 mt-10">
    <figure class="m-0 text-center">
      <img src="/images/barnakids-filters.jpg" alt="BarnaKids filters for age and play equipment" style="height:680px;border-radius:16px" />
      <figcaption class="mt-5" style="font-size:1.8rem">Choose the activity</figcaption>
    </figure>
    <figure class="m-0 text-center">
      <img src="/images/barnakids-results.jpg" alt="BarnaKids matching playground results" style="height:680px;border-radius:16px" />
      <figcaption class="mt-5" style="font-size:1.8rem">Find a place nearby</figcaption>
    </figure>
    <figure class="m-0 text-center">
      <img src="/images/barnakids-detail.jpg" alt="BarnaKids park detail showing available play areas" style="height:680px;border-radius:16px" />
      <figcaption class="mt-5" style="font-size:1.8rem">Check the details</figcaption>
    </figure>
  </div>
</div>

<!--
08:35–09:25 · 50 seconds
Walk through the screenshots. Equipment, age, nearby results, then park details.
The data comes from municipal open data, with details per play zone where known.
Talk about making existing information easier for a parent to use.
Don't suggest all facilities, hours or age guidance are known for every place.
Sources: project README and saved captures from 12 November 2026.
Open data: https://opendata-ajuntament.barcelona.cat/data/dataset/culturailleure-espaisinfantils
Dataset attribution: Ajuntament de Barcelona, CC BY 4.0.
-->

---
layout: center
class: ng-light
title: What counts as success
---

<h1 class="statement-sm" style="width:1600px;max-width:100%">A useful app can have<br/><span style="text-decoration:underline;text-decoration-color:var(--ng-accent);text-underline-offset:18px">one user</span></h1>
<p class="text-center mt-16" style="margin-top:64px;opacity:0.9;font-size:2.75rem">You. Your team. People coming to your event.</p>

<!--
09:25–09:55 · 30 seconds
Bnbicons is the commercial success. That doesn't make the other ideas wasted.
A tool can be worth building because someone uses it to do a small job.
Bring this back to BuildJam: pick a problem you understand and a person you can
show it to tonight. You can find out much more from that than from adding features.
-->

---
layout: default
class: ng-dark
title: Chat mode
section: TONIGHT
---

<div class="flex flex-col justify-center h-full px-12" style="gap:24px">
  <div class="kicker" style="margin-bottom:0">Lovable feature · Chat mode</div>
  <h1 style="font-size:4.5rem;margin:0">You can <span class="accent">talk</span> about your project</h1>
  <p style="font-size:2rem;opacity:0.9;margin:0">Ask how it works. Explore an idea before building it.</p>
  <img src="/images/lovable-chat-free.png" alt="Official Lovable screenshot showing Chat selected, the Free badge, and the remaining daily chat allowance" style="width:100%;height:560px;object-fit:contain;border-radius:12px" />
  <p style="font-size:1.75rem;opacity:0.75;margin:0">Free while your daily chat allowance lasts. Chat mode leaves your project code unchanged.</p>
</div>

<!--
09:55–10:55 · 60 seconds
You don't need to ask for a code change in every message. Use Chat mode to ask
questions about the app, compare options, or think through your idea.
The current docs distinguish Chat, Plan and Build. Chat has a daily allowance
on Free, Pro and Business workspaces. Once it runs out, chat consumes credits.
Avoid saying unlimited free chat. Plan mode is separate and costs credits.
Optional demo: open the mode picker, choose Chat, ask the question on screen.
Suggested question: What's the smallest version of this idea someone could use tonight?
The screenshot is the dashboard Chat picker from Lovable's current Chats docs.
Project Chat mode uses the same daily chat allowance. The illustrated reset
time is an example from the docs, rather than a local-time promise.
Source checked 18 November 2026: https://docs.lovable.dev/features/chat-mode
Screenshot source: https://docs.lovable.dev/features/chats
Original image: https://mintcdn.com/lovable-f9060f1e/d7nFmH8-W9saY6mz/images/chats-mode-picker-free-badge.png
-->

---
layout: default
class: ng-dark
title: Screenshots and annotations
section: TONIGHT
---

<div class="flex flex-col justify-center h-full px-12" style="gap:24px">
  <div class="kicker" style="margin-bottom:0">Lovable feature · Screenshots</div>
  <h1 style="font-size:4.5rem;margin:0">Sometimes it's easier to <span class="accent">point</span></h1>
  <p style="font-size:2rem;opacity:0.9;margin:0">Capture a screenshot, circle the part you mean, and describe the change.</p>
  <img src="/images/lovable-screenshot-capture.png" alt="Official Lovable documentation screenshot showing the Take a screenshot option in the chat menu" style="width:100%;height:560px;object-fit:contain;border-radius:12px" />
  <p class="mono" style="font-size:1.6rem;opacity:0.7;margin:0">“Take a screenshot” in the chat menu</p>
</div>

<!--
10:55–11:50 · 55 seconds
Use Take a screenshot to capture a tab, window or screen. The screenshot is
from the official November 5, 2025 changelog, so surrounding controls can differ
from today's editor. The current project-chat docs still describe this action.
Once an image is attached, open it, choose Draw, sketch, and Save. Lovable gets
the annotated image alongside your message. The preview toolbar also supports
Draw annotation and Select elements directly on the app preview.
Example feedback: Keep equipment counts visible when this section is collapsed.
These build changes use credits. Visual reference makes the request clearer.
Source: https://docs.lovable.dev/features/preview-toolbar
Current capture and drawing instructions: https://docs.lovable.dev/features/projects/chat
Screenshot source: https://docs.lovable.dev/changelog#nov-5-2025
Original image: https://mintcdn.com/lovable-f9060f1e/tuanFug-s_mqtbi3/images/changelog-images/2025-nov-5-screenshot_capture.png
-->

---
layout: default
class: ng-dark
title: AI Gateway
section: TONIGHT
---

<div class="grid items-center h-full px-12" style="grid-template-columns:0.85fr 1.15fr;gap:64px">
  <div>
    <div class="kicker">Lovable feature · AI Gateway</div>
    <h1 style="font-size:4.5rem">AI features<br/><span class="accent">inside your app</span></h1>
    <p style="margin-top:40px;opacity:0.9;font-size:2rem;line-height:1.4">Lovable handles the provider setup and API keys.</p>
    <blockquote style="margin-top:40px;background:transparent;color:inherit;border-radius:0;font-size:1.9rem;line-height:1.4;border-left:5px solid var(--ng-accent);padding-left:28px">“Summarize this week's events using only our database.<br/>Use Lovable AI.”</blockquote>
    <p style="margin-top:32px;opacity:0.7;font-size:1.6rem">Example for a Digest-style app.<br/>AI usage in your app has a cost.</p>
  </div>
  <figure class="m-0">
    <img src="/images/lovable-ai-feature.png" alt="Lovable's official AI demo showing a math app with an AI Tutor Hint generated inside the app" style="width:100%;height:620px;object-fit:contain;border-radius:12px" />
    <figcaption class="mt-6 text-center" style="font-size:1.75rem;opacity:0.75">Lovable AI demo: a tutor that gives hints</figcaption>
  </figure>
</div>

<!--
11:50–12:55 · 65 seconds
Distinguish the AI that builds your app from AI features your users can use.
The built-in AI connector, often called the AI Gateway, lets you add things
such as summaries, chat or image generation by describing the feature.
Lovable manages the provider credentials and creates the backend model call.
The example is a proposed feature, not a claim about the current Digest app.
Use the existing events as input, with links and no invented events.
The deployed app's AI usage is charged. Don't call it free AI.
Point to the official demo on the right: the tutor generates a hint inside
the user's app. It illustrates what an embedded AI feature can look like.
The image is an unretouched still from Lovable's September 2025 launch demo.
Source checked 18 November 2026: https://docs.lovable.dev/features/ai
Demo source: https://lovable.dev/blog/lovable-cloud
Original animation: https://assets.lovable.dev/content/news/mp4-to-gif-design.gif
Adapted from the AI Gateway section of workshop-lovable-saas-airbnb/slides.md.
-->

---
layout: default
class: ng-light
title: A starting prompt
section: TONIGHT
---

<div class="flex flex-col justify-center h-full px-16">
  <h1>A starting <span style="text-decoration:underline;text-decoration-color:var(--ng-accent);text-underline-offset:14px">prompt</span></h1>
  <div class="mt-12" style="font-size:2.5rem;line-height:1.65">
    <div>I'm building this for <strong>[one specific person or team]</strong>.</div>
    <div>They need to <strong>[complete one job]</strong>.</div>
    <div>They provide <strong>[input]</strong> and get <strong>[result]</strong>.</div>
    <div>The first version only needs <strong>[one complete flow]</strong>.</div>
    <div class="mt-8">Ask me questions before building.</div>
  </div>
</div>

<!--
12:55–13:50 · 55 seconds
Give the room a prompt they can use immediately. Translate it into one of your
examples out loud: a parent, finding a playground, equipment and age, matching
places nearby, then details. Or an attendee and a shareable badge.
Specific context helps more than a very long list of features.
The brackets are fields for the audience to fill in, not unfinished talk content.
-->

---
layout: center
class: ng-dark
title: Tonight's finish line
section: TONIGHT
---

<div class="kicker text-center">Tonight's finish line</div>
<h1 class="statement-sm" style="width:1600px;max-width:100%">One person can finish<br/><span class="accent">one useful task</span></h1>
<p class="text-center mt-12" style="margin-top:48px;opacity:0.9;font-size:2.5rem">Publish it. Hand someone the link. Watch them try it.</p>

<!--
13:50–14:30 · 40 seconds
For the BuildJam, aim for one complete interaction you can put in front of
someone. Take their feedback, then ask Lovable for the next specific change.
If you are stuck, use Chat. If the UI is hard to describe, point at it.
If AI is part of the job, describe what it should do inside the app.
-->

---
layout: center
class: ng-dark
title: What do you wish existed?
---

<h1 class="statement-sm" style="width:1600px;max-width:100%">What do you wish<br/><span class="accent">existed?</span></h1>
<div class="flex items-center justify-center gap-10 mt-14">
  <img src="/images/qr/projects.svg" alt="Explore Nicolas Grenié's projects" style="width:220px;height:220px;background:white;padding:14px;border-radius:10px" />
  <div>
    <a href="https://go.nicolas.dev/buildjam-projects" class="mono" style="font-size:2rem">nicolasgrenie.com/projects</a>
    <p class="mt-5 opacity-70" style="margin-top:20px;opacity:0.7;font-size:2rem">Nicolas Grenié · @picsoung</p>
  </div>
</div>

<!--
14:30–15:00 · 30 seconds
Bring it back to the opening. A contraction timer, an attendee badge, a game,
an event digest, an icon generator, a playground finder. Very different apps.
They all started with a concrete idea I wanted to try.
Thank the room and hand back to the organizers so people can start building.
-->
