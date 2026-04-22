---
# ============================================================
# LE DÉVELOPPEUR FACE À L'IA
# Conférence · 25 min · Devoxx Paris (devs + tech leads)
# Branding: nicolasgrenie.com (cream + dark + yellow/gold)
# Fil narratif : garage (seul, projets perso comme reps) → vibecoding au boulot (avec une équipe)
# ============================================================
theme: default
aspectRatio: 16/9
canvasWidth: 1920
title: "Le développeur face à l'IA&nbsp;: du prototypage rapide à la fin des intermédiaires&nbsp;?"
info: |
  Nicolas Grenié · @picsoung
  Du prototype abandonné à la démo interne, ce qui change vraiment
  dans le rôle du développeur et dans le travail des équipes produit.
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
venue: "Devoxx · Paris · 2026"
handle: "@picsoung"
class: ng-dark
hideInToc: true
---

<!--
NOTE ORATEUR — OUVERTURE (Acte 1 : la confession et le basculement, ~4 min)

Tout le talk se joue sur les 90 premières secondes. Ne pas se précipiter.
Entrer en scène, laisser le memoji faire son effet, puis poser le titre lentement.
-->

<img src="/memoji.png" class="title-memoji" alt="Nicolas memoji" />

<div class="title-grid">
  <div class="title-copy">
    <h1 class="title-headline">
      Le développeur<br/>
      face à l'<span class="accent">IA</span>
      <span class="title-subhead">du prototypage rapide à la fin des intermédiaires&nbsp;?</span>
    </h1>
    <div class="mt-10 mono text-base opacity-85">
      Nicolas Grenié · {{ $slidev.configs.handle }}
    </div>
    <div class="mt-3 mono text-sm opacity-80">
      <span class="accent">Devoxx</span> · Paris · 2026
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
      Salut, moi c'est <span class="accent">Nicolas.</span>
    </h1>
    <div class="mono text-xl opacity-80 space-y-3">
      <div>DevRel @ <span class="accent">SLNG.ai</span></div>
      <div>Basé à <span class="accent">Barcelone</span></div>
      <div>Ambassadeur <span class="accent">Lovable</span></div>
      <div class="opacity-80 pt-3">Avant · Typeform · Red Hat</div>
      <div class="pt-4 flex items-center gap-2">
        <span class="opacity-80">verbe Claude favoris&nbsp;:</span>
        <svg class="claude-mark" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 1.5 L13.8 9.2 L21.5 11 L13.8 12.8 L12 20.5 L10.2 12.8 L2.5 11 L10.2 9.2 Z" fill="#D97757"/>
        </svg>
        <span class="accent font-bold">Razzmatazzing</span>
      </div>
    </div>
  </div>
</div>

<!--
Intro rapide. 20-30 secondes max. Ne pas s'attarder — les claviers arrivent.
-->

---
layout: center
class: ng-dark
---

<div class="kicker text-center">Ce que ton clavier dit de toi</div>

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
    <div v-click class="keyboard-label">👨‍💻 <span class="accent">Dev classique</span></div>
  </div>
  <div class="text-center">
    <div class="keyboard-card">
      <img src="/images/keyboards/stackoverflow.jpg" alt="Stack Overflow branded C and V copy-paste keys" />
    </div>
    <div v-click class="keyboard-label">📋 <span class="accent">Dev Stack Overflow</span></div>
  </div>
  <div class="text-center">
    <div class="keyboard-card">
      <img src="/images/keyboards/vibecoder.jpg" alt="Giant oversized Enter key being punched — the vibe coder's only input device" />
    </div>
    <div v-click class="keyboard-label">✨ <span class="accent">Vibe coder</span></div>
  </div>
</div>

<!--
Révéler les labels un clic à la fois. Laisser chacun atterrir.
Le dernier (Tab + Enter) est la punchline — faire une pause avant la slide suivante.
-->

---
layout: center
class: ng-dark
---

<div class="vibecoding-card">
  <div class="kicker text-center">D'où vient le terme</div>
  <img src="/images/karpathy-tweet.png" class="karpathy-tweet" alt="Andrej Karpathy tweet coining the term vibe coding, Feb 2025" />
  <div class="vibecoding-attr mono">
    — Andrej Karpathy · <span class="accent">@karpathy</span> · Feb 2025
  </div>
</div>

<!--
Bref. Créditer qui de droit. Ne pas faire un cours sur la définition — passer.
-->

---
layout: center
class: ng-dark
---

<h1 class="statement">
  Je n'<span class="muted">écris</span> plus de code.
</h1>

<h2 v-click class="statement-sm mt-12">
  J'<span class="accent">édite</span> du code écrit par l'IA.
</h2>

<!--
Pause après la première ligne. Laisser le choc atterrir.
Puis la révélation. Puis :
« Qui d'autre dans la salle a arrêté d'écrire du code ?
Lève la main. N'aie pas peur. »
Scanner la salle. Ne pas se précipiter. C'est le moment où on accroche le public.
-->

---
layout: center
class: ng-dark
---

<h1 class="statement-sm">
  C'est pas que je ne <span class="muted">peux pas.</span>
</h1>

<h1 v-click class="statement mt-12">
  C'est que je n'en ai plus <span class="accent">besoin.</span>
</h1>

---
layout: center
class: ng-dark
---

<h1 class="statement">
  Ça me laisse le temps<br/>
  de <span class="accent">réfléchir.</span>
</h1>

<h2 v-click class="statement-sm mt-12">
  Et de construire ce qui <span class="accent">compte.</span>
</h2>

---
layout: center
class: ng-dark
---

<h1 class="statement-sm">
  Le vrai <span class="accent">piège</span> du dev.
</h1>

<div class="choices">
  <div v-click class="choice-row">
    <img src="/images/logos/react.svg" alt="React" />
    <span>React</span>
    <span class="choice-or">ou</span>
    <img src="/images/logos/vue.svg" alt="Vue" />
    <span>Vue&nbsp;?</span>
  </div>
  <div v-click class="choice-row">
    <img src="/images/logos/postgresql.svg" alt="Postgres" />
    <span>Postgres</span>
    <span class="choice-or">ou</span>
    <img src="/images/logos/supabase.svg" alt="Supabase" />
    <span>Supabase&nbsp;?</span>
  </div>
  <div v-click class="choice-row">
    <img src="/images/logos/nextdotjs.svg" alt="Next.js" />
    <span>Next.js</span>
    <span class="choice-or">ou</span>
    <img src="/images/logos/remix.svg" alt="Remix" />
    <span>Remix&nbsp;?</span>
  </div>
  <div v-click class="choice-row">
    <img src="/images/logos/tailwindcss.svg" alt="Tailwind" />
    <span>Tailwind</span>
    <span class="choice-or">ou...</span>
    <span class="opacity-40">euh...</span>
  </div>
</div>

<div v-click class="shadow-punchline mono">
  Trois jours plus tard. <span class="accent">Rien shippé.</span>
</div>

<!--
Reveal au clic. Laisser chacun atterrir — la salle devrait rire à la 3e ligne.
Dernier clic = punchline. Planter la tension — le SoS paye dans l'Acte I.
-->

---
layout: center
class: ng-dark
---

<div class="kicker text-center">La thèse</div>

<h1 class="statement">
  Des ingénieurs avec un<br/>
  <span class="accent">esprit produit.</span>
</h1>

---
layout: center
class: ng-dark
---

<div class="kicker text-center">ACTE I · Le Garage</div>

<h1 class="statement-sm">
  Le focus, ça se <span class="accent">muscle.</span>
</h1>

<div class="grid grid-cols-2 gap-12 max-w-4xl mx-auto mt-12">
  <div class="text-center">
    <div class="text-6xl mb-3">🏢</div>
    <h2 class="text-4xl font-bold mb-2">Au boulot</h2>
    <p class="opacity-85 text-xl">Adopter une nouvelle techno&nbsp;: <span class="muted">des mois.</span></p>
  </div>
  <div class="text-center">
    <div class="text-6xl mb-3">🏠</div>
    <h2 class="text-4xl font-bold mb-2">Au garage</h2>
    <p class="opacity-85 text-xl"><span class="accent">Un soir.</span> Aucune permission.</p>
  </div>
</div>

<div class="mt-10 text-center mono text-base opacity-80">
  Les devs curieux n'attendent pas. Ils vont là où personne ne bloque.
</div>

<!--
Ouverture Acte I. Trois beats en une slide :
1. « Le focus, ça se muscle » → pose le muscle qui cadre les reps.
2. Boulot vs garage → nomme la cause (lenteur vs vitesse).
3. Ligne meta → le public se reconnaît.
Transition : « Et dans ce garage, on ne fait pas des startups. On fait des reps. »
-->

---
layout: center
class: ng-dark
---

<div class="strava-slide-grid">
  <div class="strava-copy">
    <h1 class="strava-headline">
      Le vibecoding,<br/>
      c'est le <span class="accent">Strava</span> du dev.
    </h1>
    <h2 class="strava-subhead">
      Tu shippes pas pour faire des <span class="muted">startups.</span><br/>
      Tu t'<span class="accent">entraînes.</span>
    </h2>
  </div>
  <div class="strava-card">
    <div class="strava-card-header">
      <img src="/memoji.png" class="strava-avatar" alt="Nicolas" />
      <div class="strava-identity">
        <div class="strava-name">Nicolas Grenié</div>
        <div class="strava-meta">il y a 2 jours · Barcelona</div>
      </div>
      <div class="strava-badge">🎸 Rep</div>
    </div>
    <div class="strava-card-title">ImSoMetal · Itération #3</div>
    <div class="strava-stats">
      <div>
        <div class="strava-stat-num">2h 14</div>
        <div class="strava-stat-label">Durée</div>
      </div>
      <div>
        <div class="strava-stat-num">47</div>
        <div class="strava-stat-label">Prompts</div>
      </div>
      <div>
        <div class="strava-stat-num">3</div>
        <div class="strava-stat-label">Itérations</div>
      </div>
    </div>
    <div class="strava-grid">
      <div v-for="i in 60" :key="i"></div>
    </div>
    <div class="strava-card-footer">
      ❤️ 42 kudos · 💬 3 commentaires
    </div>
  </div>
</div>

<!--
Callback direct au « reps ». Strava = tu logges ton entraînement, pas tes médailles.
Petit sondage : qui utilise Strava ? Les autres : vous allez comprendre.
Ne pas insister — reframing rapide, pas une slide qui s'étale.
-->

---
layout: rep
class: ng-dark
section: GARAGE
rep: 1
repTitle: Home-cooked software
site: ContractionTrack
---

Un outil construit pour une personne que j'aime, un soir bien précis.

<!--
ORATEUR : expliquer le contexte — compagne en travail, besoin de chronométrer
les contractions, toutes les apps du store voulaient un abonnement. Construit en 20 min.
La leçon : home-cooked software (crédit Maggie Appleton / Alexis Kovalenko).
-->

---
layout: image-right
image: /images/contractiontrack.png
class: ng-dark
section: GARAGE
---

<div class="flex flex-col justify-center h-full pr-8">
  <div class="kicker">La leçon</div>
  <h2 class="text-6xl font-extrabold leading-tight">
    Résoudre pour <span class="accent">une vraie personne.</span>
  </h2>
  <p class="mt-6 text-3xl opacity-90">
    Pas un marché. Pas un persona. Une personne.
  </p>
</div>

<div class="slide-qr">
  <img src="/images/qr/contractiontrack.svg" alt="ContractionTrack QR code" />
  <div class="slide-qr-label mono">scanne pour tester</div>
</div>

---
layout: rep
class: ng-dark
section: GARAGE
rep: 2
repTitle: Le muscle de l'itération
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
    <span class="strike-muted">Prompt one-shot.</span>
  </h2>
  <h2 class="text-6xl font-extrabold accent mb-10">
    Processus itératif.
  </h2>
  <div class="iterations-grid">
    <figure v-click>
      <img src="/images/imsometal-v1.png" alt="First try" />
      <figcaption>1er essai</figcaption>
    </figure>
    <figure v-click>
      <img src="/images/imsometal-v2.png" alt="Second pass" />
      <figcaption>2e</figcaption>
    </figure>
    <figure v-click>
      <img src="/images/imsometal-v3.png" alt="Final" />
      <figcaption class="accent">Final</figcaption>
    </figure>
  </div>
</div>

<div class="slide-qr">
  <img src="/images/qr/imsometal.svg" alt="ImSoMetal QR code" />
  <div class="slide-qr-label mono">scanne pour tester</div>
</div>

<!--
Cliquer chaque itération dans l'ordre. Laisser la progression visuelle parler —
basique → raffiné → full metal. Ne pas narrer chaque étape.
-->

---
layout: rep
class: ng-dark
section: GARAGE
rep: 3
repTitle: Shipper toute la boucle
site: PianoRigolo
---

Construire d'une main, viser un marché plus large.

---
layout: image-right
image: /images/pianorigolo.png
backgroundSize: contain
class: ng-dark
section: GARAGE
---

<div class="flex flex-col justify-center h-full pr-8">
  <h2 class="text-6xl font-extrabold leading-tight">
    Construire, c'est juste <br/>
    <span class="accent">une partie</span> du voyage.
  </h2>
  <p class="mt-6 text-3xl opacity-90">
    Idée → prototype → onboarding → support → au revoir. Tu possèdes toute la boucle.
  </p>
</div>

<div class="slide-qr">
  <img src="/images/qr/pianorigolo.svg" alt="PianoRigolo QR code" />
  <div class="slide-qr-label mono">scanne pour tester</div>
</div>

---
layout: rep
class: ng-dark
section: GARAGE
rep: 4
repTitle: Surfer la vague
site: Bnbicons
---

Airbnb sort son design system. J'ai shippé le générateur en 48h.

---
layout: image-right
image: /images/bnbicons.png
backgroundSize: contain
class: ng-dark
section: GARAGE
---

<div class="flex flex-col justify-center h-full pr-8">
  <div class="kicker">La leçon</div>
  <h2 class="text-6xl font-extrabold leading-tight">
    Repérer la vague.<br/>
    <span class="accent">Shipper vite.</span><br/>
    Ou la rater.
  </h2>
  <p class="mt-6 text-3xl opacity-90">
    Une tendance, c'est une fenêtre de tir. Le vibecoding te permet de viser juste.
  </p>
</div>

<div class="slide-qr">
  <img src="/images/qr/bnbicons.svg" alt="Bnbicons QR code" />
  <div class="slide-qr-label mono">scanne pour tester</div>
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
      <div class="mono text-xl mt-3 opacity-85">icônes générées</div>
    </div>
    <div>
      <div class="stat-number accent">15k</div>
      <div class="mono text-xl mt-3 opacity-85">utilisateurs</div>
    </div>
    <div>
      <div class="stat-number accent">#2</div>
      <div class="mono text-xl mt-3 opacity-85">Product Hunt</div>
    </div>
    <div>
      <div class="stat-number accent">2k $</div>
      <div class="mono text-xl mt-3 opacity-85">de revenus</div>
    </div>
  </div>
</div>

---
layout: center
class: ng-dark
section: GARAGE
hide: true
---

<div class="kicker text-center">Follow the money</div>

<h1 class="statement">
  Un projet = un <span class="accent">domaine.</span>
</h1>

<div v-click class="registrars">
  <img src="/images/logos/cloudflare.svg" alt="Cloudflare" />
  <img src="/images/logos/gandi.svg" alt="Gandi" />
  <img src="/images/logos/ionos.svg" alt="IONOS" />
</div>

<h2 v-click class="statement">
  Les vrais <span class="accent">gagnants.</span>
</h2>

<!--
Renvoyer aux 2 000 $ de la slide précédente. Ton pince-sans-rire.
« Entre-temps, j'ai dépensé bien plus que ça en domaines. »
Révéler les logos. La punchline atterrit.
-->

---
layout: center
class: ng-dark
section: GARAGE
hide: true
---

<h1 class="statement-sm">
  « Les apps vibe-codées ne peuvent pas faire de vrai <span class="muted">SEO.</span> »
</h1>

<div v-click class="seo-proof mono">
  sitemap.xml · robots.txt · llms.txt · Open Graph tags
</div>

<h2 v-click class="text-5xl font-extrabold text-center mt-2">
  <span class="accent">Ah bon ?</span>
</h2>

<img v-click src="/images/bnbicons-search-console.png" class="seo-receipts" alt="Bnbicons Google Search Console: 2.49K clicks, 20.6K impressions, 12.1% CTR over 3 months" />

<!--
Livrer l'objection avec des guillemets aériens.
Clic 1 : liste de preuves.
Clic 2 : « Ah bon ? » — pince-sans-rire.
Clic 3 : balancer les preuves de la search console. La salle rit + réagit.
-->


---
layout: center
class: ng-dark
hide: true
---

<h1 class="statement">
  Chaque app, c'est juste un <br/>
  <span class="accent">Excel glorifié.</span>
</h1>

<!--
Slide de la punchline. Livrer sec. La salle rit.
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

<div class="kicker text-center">Nouvelle peur débloquée</div>

<h1 class="statement">
  Abandonner mes <span class="accent">utilisateurs.</span>
</h1>

---
layout: center
class: ng-dark
---

<h1 class="statement">
  Je ne suis <span class="accent">pas designer.</span>
</h1>

<!--
Préparer les beats d'itération design : mockup → résultat,
puis un deuxième exemple de tweak design.
-->

---
layout: center
class: ng-dark
section: GARAGE
---

<div class="kicker text-center">Designer sans designer</div>

<div class="mockup-flow">
  <figure v-click>
    <img src="/images/mockup-boat.png" alt="Hand-drawn wireframe of a boat booking page" />
    <figcaption>1. Tu passes un mockup</figcaption>
  </figure>
  <div v-click class="mockup-arrow">→</div>
  <figure v-click>
    <img src="/images/design-result.png" alt="SuperBoatly yacht booking page — polished design" />
    <figcaption>2. Tu récupères un design</figcaption>
  </figure>
</div>

<!--
Clic 1 : montrer le wireframe. « Oui, c'est moi qui ai dessiné ça. Pas de jugement. »
Clic 2 : la flèche. Pause.
Clic 3 : le résultat poli. La salle réagit.
« Même structure. Vrai design. Pas de designer. »
-->

---
layout: center
class: ng-dark
section: GARAGE
---

<div class="vibecoding-card">
  <div class="kicker text-center">Un avertissement</div>
  <img src="/images/gergely-tweet.png" class="karpathy-tweet" alt="Gergely Orosz tweet warning that rebuilding Typeform with AI is not the same as Typeform, Jan 2026" />
  <div class="vibecoding-attr mono">
    — Gergely Orosz · <span class="accent">@GergelyOrosz</span> · Jan 2026
  </div>
</div>

<!--
Livrer cette slide lentement. Typeform, c'est personnel — callback à la bio :
« J'ai bossé à Typeform pendant des années. Gergely a raison. Cloner l'UI, c'est trivial.
Cloner le SSO entreprise, le SOC2, la résidence des données UE, l'analytics,
le support client, la facturation team plan — c'est ça, le vrai produit. »

Cette slide, c'est la fin sobre de l'Acte I. Ne pas précipiter l'Acte II derrière.
-->

---
layout: center
class: ng-dark
---


<div class="kicker text-center">ACTE II</div>
<h1 class="statement">
  Ce que les reps<br/>
  <span class="accent">construisent.</span>
</h1>

---
layout: center
class: ng-dark
---

<div class="kicker text-center">La posture</div>

<h1 class="statement">
  <span class="accent">Chef d'orchestre</span>,<br/>
  pas <span class="muted">touriste.</span>
</h1>

<p class="mt-16 text-center text-3xl opacity-90">
  Tu ne joues pas de tous les instruments.<br/>
  Tu comprends la musique.
</p>

---
layout: center
class: ng-dark
---

<div class="kicker text-center">Ce qui a changé — concrètement</div>

<h1 class="statement-xs nowrap">
  Avant&nbsp;: <span class="muted">spec → ticket → sprint → démo.</span>
</h1>

<h2 v-click class="statement-sm nowrap mt-12">
  Après&nbsp;: <span class="accent">prompt → prototype → décision.</span>
</h2>

<!--
Après le reveal de la ligne « Après », livrer verbalement :
« Bnbicons : 48h de l'idée au ship. ContractionTrack : 20 min.
La boucle s'est raccourcie d'un ordre de grandeur. »
-->

---
layout: center
class: ng-dark
---

<h1 class="statement">
  L'IA, c'est mon <span class="accent">stagiaire.</span>
</h1>

<div class="pain-points mt-12">
  <div><span class="pain-dot">·</span> Rapide, enthousiaste, jamais fatigué.</div>
  <div><span class="pain-dot">·</span> A besoin d'un <span class="accent">brief clair</span>, pas d'un « débrouille-toi ».</div>
  <div><span class="pain-dot">·</span> Tu <span class="accent">relis tout.</span> Toujours. Sinon ça part en prod cassé.</div>
</div>

<!--
Stagiaire brillant, rapide, enthousiaste — et qui a besoin de direction claire,
de review, et parfois d'un « non, recommence ».
-->

---
layout: center
class: ng-dark
---

<div class="kicker text-center">Le nouveau métier</div>

<h1 class="statement-sm">
  Moins de <span class="muted">syntaxe.</span><br/>
  Plus de <span class="accent">jugement.</span>
</h1>

<div class="pain-points mt-12">
  <div><span class="pain-dot">·</span> Cadrer le problème avant d'ouvrir l'éditeur.</div>
  <div><span class="pain-dot">·</span> Lire le diff comme on lisait une PR.</div>
  <div><span class="pain-dot">·</span> Dire <span class="accent">non</span> au stagiaire — trois fois par heure.</div>
  <div><span class="pain-dot">·</span> Décider ce qui <span class="accent">mérite</span> d'exister.</div>
</div>

---
layout: center
class: ng-dark
---

<h2 class="statement-sm">
  Si <span class="accent">tu</span> peux shipper seul...
</h2>

<h1 v-click class="statement mt-10">
  ton <span class="accent">PM</span> aussi.
</h1>

<p v-click class="mt-12 text-center text-2xl opacity-85 mono">
  Et là, ça se complique.
</p>

<!--
Bridge vers l'Acte III. Pause sur la dernière ligne. Le public sent la tension arriver :
le garage était confortable, l'open space va l'être moins.
-->

---
layout: center
class: ng-dark
---


<div class="kicker text-center">ACTE III</div>
<h1 class="statement">
  Le vibecoding <span class="accent">au boulot.</span>
</h1>

<!--
Transition : « OK. Tu as fait tes reps, seul, à la maison.
Maintenant, qu'est-ce qui se passe quand tu arrives au bureau lundi matin ? »
-->

---
layout: center
class: ng-dark
---

<h1 class="statement">
  Shipper en entreprise, <br/>
  <span class="accent">ça craint.</span>
</h1>

---
layout: center
class: ng-dark
---

<h2 class="statement-sm">
  «&nbsp;On va shipper ce <span class="accent">nouveau produit.</span>&nbsp;»
</h2>

<div class="mt-3 mb-12 mono text-xl opacity-80 text-center">
  — CEO
</div>

<div class="figma-chaos">
  <img src="/images/figma-frames.png" alt="Endless Figma prototype frames and versions" />
  <img src="/images/figma-connections.png" alt="Tangled connection arrows between Figma frames" />
</div>

<!--
Laisser le visuel parler. « Voilà à quoi ressemble shipper en entreprise. »
Deux captures du même prototype — les frames, et le câblage entre elles.
-->

---
layout: center
class: ng-dark
section: PRIME TIME
---

<div class="kicker text-center">Le coût du shipping</div>

<div class="pain-points">
  <div v-click>
    <span class="pain-dot">·</span>
    Les PMs galèrent à <span class="accent">montrer leurs idées.</span>
  </div>
  <div v-click>
    <span class="pain-dot">·</span>
    Figma est <span class="accent">trop intimidant.</span>
  </div>
  <div v-click>
    <span class="pain-dot">·</span>
    Le prototypage est <span class="accent">bricolé et répétitif.</span>
  </div>
  <div v-click>
    <span class="pain-dot">·</span>
    Tester des variations <span class="accent">prend une éternité.</span>
  </div>
</div>

<!--
Passer chaque pain point. Ce n'est pas hypothétique — PMs et designers
ont dit tout ça à voix haute. Idéalement, nommer une personne de ton équipe
qui a dit le n°1.
-->

---
layout: center
class: ng-dark
section: PRIME TIME
---

<div class="kicker text-center">Ce que l'équipe veut vraiment</div>

<div class="team-wants">
  <div>
    <h3>Ce que veulent les <span class="accent">PMs</span></h3>
    <ol>
      <li><strong>Accélérer l'idéation</strong> — esquisser et digitaliser des idées vite.</li>
      <li><strong>Accélérer l'exploration</strong> — plus de variations, plus vite.</li>
      <li><strong>Améliorer la communication</strong> — des visuels réalistes pour les stakeholders.</li>
    </ol>
  </div>
  <div>
    <h3>Ce que veulent les <span class="accent">Designers</span></h3>
    <ol>
      <li><strong>Plus de réalisme</strong> — des prototypes qui simulent le produit final.</li>
      <li><strong>Autonomiser l'équipe</strong> — des non-designers qui shippent des prototypes.</li>
      <li><strong>Moins d'effort manuel</strong> — moins de bidouillage dans Figma.</li>
    </ol>
  </div>
</div>

<!--
Source : recherche Typeform (contexte précédent de Nicolas). S'appuyer sur la crédibilité.
« Quand on a demandé aux équipes, les deux côtés voulaient la même chose,
sous des angles différents. »
Ça prépare POURQUOI la slide suivante (démo interne) compte.
-->

---
layout: center
class: ng-dark
---

<div class="kicker text-center">La friction</div>

<h1 class="statement">
  «&nbsp;On peut changer <br/>
  le <span class="accent">bouton&nbsp;?</span>&nbsp;»
</h1>

<!--
La question du PM qui prenait un sprint.
Maintenant, le PM peut y répondre tout seul.
-->

---
layout: center
class: ng-dark
---

<div class="kicker text-center">La solution</div>

<h1 class="statement">
  Donner aux PMs le pouvoir d'<span class="accent">expérimenter.</span>
</h1>

---
layout: center
class: ng-dark
section: PRIME TIME
---

<div class="kicker text-center">Des garde-fous, pas des barrières</div>

<h1 class="statement-sm">
  Connecte ton<br/>
  <span class="accent">design system existant.</span>
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
  <div class="ds-flow-output">UI on-brand ✨</div>
</div>

<p class="mt-10 opacity-90 text-3xl text-center">
  Le vibecoding au boulot sans design system, c'est juste du bruit.
</p>

---
layout: center
class: ng-dark
section: PRIME TIME
---

<div class="kicker text-center">La suite pour nous</div>

<h1 class="statement-sm">
  <span class="accent">Skills.</span> Le savoir d'équipe, packagé.
</h1>

<div class="skills-grid">
  <div class="skill-card">
    <div class="skill-emoji">🎨</div>
    <div class="skill-name">design-review</div>
    <div class="skill-desc">Vérifie l'UI contre les guidelines de marque.</div>
  </div>
  <div class="skill-card">
    <div class="skill-emoji">🔐</div>
    <div class="skill-name">auth-check</div>
    <div class="skill-desc">Scanne le code pour les soucis d'auth &amp; de permissions.</div>
  </div>
  <div class="skill-card">
    <div class="skill-emoji">📊</div>
    <div class="skill-name">seo-audit</div>
    <div class="skill-desc">Valide le sitemap, les tags OG, llms.txt.</div>
  </div>
  <div class="skill-card">
    <div class="skill-emoji">🧪</div>
    <div class="skill-name">test-coverage</div>
    <div class="skill-desc">Review les tests et signale les points faibles.</div>
  </div>
</div>

<p class="mt-8 text-xl text-center opacity-80">
  Écris un skill une fois. <span class="accent">Chaque collègue récupère les reps.</span>
</p>

<!--
Les Skills = l'évolution 2026 des snippets d'équipe, en plus malin :
ils embarquent instructions, ressources, et même de la logique exécutable.
Le cerveau de ton équipe, réutilisable. Callback à l'Acte I :
« chaque collègue récupère les reps » — le muscle n'est plus enfermé
dans le garage d'une seule personne.
-->

---
layout: center
class: ng-dark
---

<div class="kicker text-center">Pose-toi la question</div>

<h1 class="statement nowrap">
  Qui d'autre peut en<br/>
  profiter dans l'<span class="accent">entreprise&nbsp;?</span>
</h1>

<!--
Question ouverte, lancée à la salle. Pause.
Puis la réponse : Support. Sales. Ops. Marketing.
Chaque PM. Chaque collègue qui ouvrait un ticket avant.
-->

---
layout: center
class: ng-dark
---


<h1 class="statement">
  L'IA ne remplace pas les jobs.<br/>
  Elle enlève la <span class="accent">friction.</span>
</h1>

---
layout: center
class: ng-dark
---

<h1 class="statement">
  Le vibecoding, ce n'est pas pour <br/>
  construire des <span class="muted">startups.</span><br/>
  C'est pour faire des <span class="accent">reps.</span>
</h1>

---
layout: center
class: ng-dark
---

<div class="flex flex-col items-center justify-center h-full">
  <h1 class="statement">
    À vous de <span class="accent">jouer.</span>
  </h1>
</div>

<!--
Laisser « À vous de jouer » atterrir.
Le « vous » est volontaire — on passe de la conversation avec chaque dev
à un appel à la salle entière.
Speaker peut prolonger verbalement : « Qu'est-ce que vous allez construire ? »
Pause. Regarder la salle. Transition vers Merci.
-->

---
layout: center
class: ng-dark
---

<div class="flex flex-col items-center justify-center h-full">
  <img src="/memoji.png" class="w-28 h-28 mb-8" alt="Nicolas memoji" />
  <h1 class="text-7xl font-extrabold">Merci.</h1>
  <div class="mt-8 text-center mono text-xl opacity-85">
    Nicolas Grenié · {{ $slidev.configs.handle }} · nicolasgrenie.com
  </div>
</div>

<!--
Laisser « Merci » atterrir. Laisser le moment respirer. C'est la fin.
-->
