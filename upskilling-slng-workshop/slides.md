---
# ============================================================
# TALLER — Agentes de voz con IA con slng.ai
# SLNG brand (white / grey-01 / black, #FBE566 yellow,
# rounded-square shapes, "//" motif, Saans + Geist Mono).
# Built from slides-template-slng. Deck de introducción (framing).
# ============================================================
theme: default
aspectRatio: 16/9
canvasWidth: 1920
title: "Agentes de voz con IA: construye el tuyo en 3 horas con slng.ai"
info: |
  Nicolas Grenié · @picsoung
  Taller completo: construye y despliega un agente de voz con IA en 3 horas con slng.ai.
author: Nicolas Grenié
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: fade
mdc: true
fonts:
  sans: Saans
  mono: Geist Mono
# Chrome config — change these once, they propagate everywhere.
venue: "Upskilling Week · Barcelona · 2026"
handle: "@picsoung"
tagline: "slng.ai — infraestructura de voz con IA en tiempo real."
layout: cover
date: "2026"
class: slng-dark
hideInToc: true
---

<!-- ============================================================
     SLIDE 1 — PORTADA  (layout: cover)
     Oscura. Logo SLNG// arriba-izq, título grande, tagline + fecha.
     ============================================================ -->

Agentes de voz con IA:<br/>construye el tuyo en <span class="accent">3 horas.</span>

---
layout: center
class: slng-dark
---

<!-- ============================================================
     SLIDE 2 — INTRO PERSONAL  (reutilizada del deck de Lovable)
     ============================================================ -->

<div class="flex items-center justify-center gap-16 max-w-5xl mx-auto">
  <img src="/memoji.png" class="w-72 h-72 flex-shrink-0" alt="Memoji de Nicolas" />
  <div>
    <h1 class="text-7xl font-extrabold mb-8">
      Hola, soy <span class="accent">Nicolas.</span>
    </h1>
    <div class="mono text-xl opacity-80 space-y-3">
      <div>DevRel @ <span class="accent">slng.ai</span></div>
      <div>Vivo en <span class="accent">Barcelona</span></div>
      <div><span class="accent">Lovable</span> Ambassador</div>
      <div class="opacity-60 pt-3">Antes · Typeform · Red Hat</div>
    </div>
  </div>
</div>

---
layout: center
class: slng-dark
---

<!-- ============================================================
     SLIDE 3 — SIGUE EL MATERIAL (QR)  — patrón reutilizado de la deck de Lovable
     QR → https://upskilling-workshop.lovable.app/  (public/images/qr/material.svg)
     ============================================================ -->

<div class="kicker text-center">Antes de empezar</div>

<div class="statement-sm">Sigue el <span class="accent">material</span></div>

<div class="flex justify-center mt-8">
  <img src="/images/qr/material.svg" alt="QR al material del taller"
       style="width:16rem; height:16rem; background:#fff; border-radius:0.75rem; padding:0.6rem;" />
</div>

<p class="text-center mono muted mt-6" style="font-size:1.15rem"><span class="accent">Escanéalo</span> y síguelo a tu ritmo — <span class="mono">upskilling-workshop.lovable.app</span></p>

<!--
SPEAKER: Antes de tocar nada, todos abren el material del taller con el QR. Ahí están
las guías paso a paso, los prompts completos y los enlaces (incluida la base de datos).
Que nadie se quede sin escanearlo — lo seguimos en paralelo durante las 3 horas.
-->

---
layout: default
class: slng-light
---

<!-- ============================================================
     SLIDE 4 — ¿QUÉ ES slng.ai?  (presentación del producto)
     ============================================================ -->

<div class="slide-head">
  <h1 class="slide-title">¿Qué es slng.ai?</h1>
</div>

<p class="text-3xl leading-relaxed max-w-4xl mb-12">
  La infraestructura para construir y desplegar <strong>agentes de voz con IA</strong>
  en tiempo real. Voz natural, lógica conversacional y conexión a tus herramientas,
  detrás de una sola API.
</p>

<div class="feature-cards">
  <div class="feature-card">
    <div class="num-badge">01</div>
    <div class="feature-name">Voz natural</div>
    <div class="feature-desc">STT, LLM y TTS orquestados con baja latencia para una conversación fluida.</div>
  </div>
  <div class="feature-card">
    <div class="num-badge">02</div>
    <div class="feature-name">Lógica conversacional</div>
    <div class="feature-desc">Prompts, turnos y flujos preparados para producción, no solo demos.</div>
  </div>
  <div class="feature-card">
    <div class="num-badge">03</div>
    <div class="feature-name">Herramientas externas</div>
    <div class="feature-desc">Conecta APIs, calendarios y CRMs directamente en la llamada.</div>
  </div>
</div>

---
layout: default
class: slng-dark
---

<!-- ============================================================
     SLIDE 4 — AGENDA
     ============================================================ -->

<div class="slide-head">
  <h1 class="slide-title">Agenda</h1>
  <div class="phonetic">3 horas · manos a la obra</div>
</div>

<ol class="text-2xl font-medium leading-relaxed list-decimal pl-10 space-y-2 mt-4">
  <li>Arquitectura de un agente de voz: STT, LLM, TTS, tools y lógica de turno</li>
  <li>Construir y probar tu agente en la UI de <span class="accent">slng.ai</span></li>
  <li>Darle datos y acciones reales con herramientas (APIs, calendarios, CRMs)</li>
  <li>Prompts y flujos conversacionales listos para producción</li>
  <li>Publicarlo: conéctalo a un número o embébelo en tu web <span class="muted">— lo rápido</span></li>
  <li>Coste por llamada, límites y cuándo usar un agente de voz</li>
</ol>

---
layout: default
class: slng-light
---

<!-- ============================================================
     SLIDE 5 — OBJETIVOS
     ============================================================ -->

<div class="slide-head">
  <h1 class="slide-title">Al finalizar, serás capaz de…</h1>
</div>

<div class="pain-points">
  <div><span class="pain-dot"></span>Explicar la arquitectura de un agente de voz con IA: STT, LLM, TTS, tools y lógica de turno.</div>
  <div><span class="pain-dot"></span>Construir y probar un agente funcional en la UI de slng.ai.</div>
  <div><span class="pain-dot"></span>Darle datos y acciones reales integrando herramientas externas (APIs, calendarios, CRMs).</div>
  <div><span class="pain-dot"></span>Diseñar prompts y flujos conversacionales preparados para producción.</div>
  <div><span class="pain-dot"></span>Publicarlo cuando esté listo — a un número de teléfono o embebido en tu web.</div>
  <div><span class="pain-dot"></span>Evaluar coste por llamada, límites y cuándo un agente de voz es la solución correcta.</div>
</div>

---
layout: default
class: slng-light
---

<!-- ============================================================
     SLIDE 6 — REQUISITOS
     ============================================================ -->

<div class="slide-head">
  <h1 class="slide-title">Requisitos</h1>
</div>

<div class="feature-cards">
  <div class="feature-card">
    <div class="num-badge">01</div>
    <div class="feature-name">Portátil + Wi-Fi</div>
    <div class="feature-desc">Tu propio portátil con conexión Wi-Fi.</div>
  </div>
  <div class="feature-card">
    <div class="num-badge">02</div>
    <div class="feature-name">Navegador moderno</div>
    <div class="feature-desc">Chrome, Firefox, Edge o Safari actualizado.</div>
  </div>
  <div class="feature-card">
    <div class="num-badge">03</div>
    <div class="feature-name">Cuenta de slng.ai</div>
    <div class="feature-desc">Cuenta gratuita creada antes del taller. Damos créditos para la sesión.</div>
  </div>
  <div class="feature-card">
    <div class="num-badge">04</div>
    <div class="feature-name">Móvil personal</div>
    <div class="feature-desc">Para probar en vivo el agente cuando lo publiques a un número.</div>
  </div>
</div>

<p class="demo-cue">Todo se construye en el <span class="accent">navegador</span> — nada de instalar Node ni clonar repos.</p>

---
layout: section
no: 1
class: slng-light
---

<!-- ============================================================
     SECCIÓN 01 — LOS 3 ACTORES (arquitectura)
     ============================================================ -->

Los 3 actores de<br/>un agente de voz

---
layout: default
class: slng-dark
---

<!-- ---- Pipeline: el mapa ---- -->

<div class="slide-head">
  <h1 class="slide-title">Oído → Cerebro → Boca</h1>
  <div class="phonetic">// el bucle que se repite en cada turno</div>
</div>

<div class="pipeline">
  <div class="pipe-stage">
    <div class="pipe-icon">👂</div>
    <div class="pipe-label">STT · el oído</div>
    <div class="pipe-name">Audio → Texto</div>
    <div class="pipe-desc">Transcribe lo que dices en tiempo real, mientras hablas.</div>
  </div>
  <div class="pipe-arrow">→</div>
  <div class="pipe-stage">
    <div class="pipe-icon">🧠</div>
    <div class="pipe-label">LLM · el cerebro</div>
    <div class="pipe-name">Texto → Decisión</div>
    <div class="pipe-desc">Entiende, decide qué responder — o qué herramienta usar.</div>
  </div>
  <div class="pipe-arrow">→</div>
  <div class="pipe-stage">
    <div class="pipe-icon">👄</div>
    <div class="pipe-label">TTS · la boca</div>
    <div class="pipe-name">Texto → Voz</div>
    <div class="pipe-desc">Convierte la respuesta en voz natural, con la personalidad que elijas.</div>
  </div>
</div>

<p class="demo-cue">⏱ Todo esto, en <span class="accent">menos de ~800 ms</span> — o la conversación se siente rara.</p>

<!--
SPEAKER: Este bucle corre en CADA turno de la conversación. La latencia total es la
suma de los tres + la red. Por eso importa dónde se ejecuta (región) y qué modelo se
usa en cada paso — exactamente lo que optimiza SLNG. Vamos a ver cada actor de cerca.
-->

---
layout: default
class: slng-light
---

<!-- ---- TTS ---- -->

<div class="slide-head">
  <div class="kicker kicker--accent">Actor 1 · La boca</div>
  <h1 class="slide-title">TTS — Text to Speech</h1>
</div>

<p class="text-xl leading-relaxed muted max-w-4xl">
  Un modelo + una voz + el texto y ya habla. Lo que <strong>tú controlas</strong> son estos
  parámetros — la latencia no: esa la marca el modelo que elijas.
</p>

<div class="pills">
  <span class="pill">voz (voice id)</span>
  <span class="pill">velocidad</span>
  <span class="pill">tono</span>
  <span class="pill">emoción / expresividad</span>
  <span class="pill">pronunciación</span>
  <span class="pill">idioma</span>
</div>

<div class="kicker" style="margin-top:1.75rem;margin-bottom:0">// Modelos en SLNG</div>
<div class="logo-grid">
  <div class="logo-chip"><img src="/images/logos/cartesia.jpeg" alt="Cartesia" /><span class="logo-name">Cartesia</span></div>
  <div class="logo-chip"><img src="/images/logos/deepgram.svg" alt="Deepgram" /><span class="logo-name">Deepgram</span></div>
  <div class="logo-chip"><img src="/images/logos/elevenlabs.svg" alt="ElevenLabs" /><span class="logo-name">ElevenLabs</span></div>
  <div class="logo-chip"><img src="/images/logos/inworld.jpeg" alt="Inworld" /><span class="logo-name">Inworld</span></div>
  <div class="logo-chip"><img src="/images/logos/kugelaudio.jpeg" alt="KugelAudio" /><span class="logo-name">KugelAudio</span></div>
  <div class="logo-chip"><img src="/images/logos/murf.svg" alt="Murf" /><span class="logo-name">Murf</span></div>
  <div class="logo-chip"><img src="/images/logos/rime.png" alt="Rime" /><span class="logo-name">Rime</span></div>
  <div class="logo-chip"><img src="/images/logos/sarvam.jpeg" alt="Sarvam AI" /><span class="logo-name">Sarvam AI</span></div>
  <div class="logo-chip"><img src="/images/logos/soniox.jpeg" alt="Soniox" /><span class="logo-name">Soniox</span></div>
  <div class="logo-chip"><img src="/images/logos/gradium.png" alt="Gradium" /><span class="logo-name">Gradium</span></div>
</div>

<p class="demo-cue">▶︎ <a href="https://examples-gbcy.onrender.com/" target="_blank" class="accent" style="text-decoration:none">Prueba las voces →</a></p>

<!--
SPEAKER: La boca. Con modelo + voz + texto ya habla. Los parámetros son afinación — no
hay que memorizarlos, solo saber que existen. OJO: la latencia NO es un ajuste, la fija
el modelo; por eso importa elegir bien. La voz ES una decisión de producto: es tu marca
sonora. En SLNG eliges entre 10 proveedores / 14 modelos de TTS.
-->

---
layout: default
class: slng-light
---

<!-- ---- STT ---- -->

<div class="slide-head">
  <div class="kicker kicker--accent">Actor 2 · El oído</div>
  <h1 class="slide-title">STT — Speech to Text</h1>
</div>

<p class="text-xl leading-relaxed muted max-w-4xl">
  Le das el audio y te devuelve texto. Lo que <strong>tú ajustas</strong> es cómo escucha —
  y el <strong>endpointing</strong> es el que más se nota: decide cuándo has terminado de hablar.
</p>

<div class="pills">
  <span class="pill">idioma</span>
  <span class="pill">vocabulario (keywords boost)</span>
  <span class="pill">endpointing</span>
  <span class="pill">puntuación / formato</span>
  <span class="pill">diarización</span>
  <span class="pill">streaming / partials</span>
</div>

<div class="kicker" style="margin-top:1.75rem;margin-bottom:0">// Modelos en SLNG</div>
<div class="logo-grid">
  <div class="logo-chip"><img src="/images/logos/deepgram.svg" alt="Deepgram" /><span class="logo-name">Deepgram</span></div>
  <div class="logo-chip"><img src="/images/logos/reson8.svg" alt="Reson8" /><span class="logo-name">Reson8</span></div>
  <div class="logo-chip"><img src="/images/logos/sarvam.jpeg" alt="Sarvam AI" /><span class="logo-name">Sarvam AI</span></div>
  <div class="logo-chip"><img src="/images/logos/soniox.jpeg" alt="Soniox" /><span class="logo-name">Soniox</span></div>
  <div class="logo-chip"><img src="/images/logos/gradium.png" alt="Gradium" /><span class="logo-name">Gradium</span></div>
</div>

<p class="demo-cue">▶︎ <a href="https://slng-stt-demo.onrender.com/" target="_blank" class="accent" style="text-decoration:none">Pruébalo en directo →</a></p>

<!--
SPEAKER: El oído. El detalle que más afecta a la experiencia es el ENDPOINTING: si
corta pronto, te interrumpe; si corta tarde, hay silencios incómodos. Es el "turno"
de la conversación. El vocabulario reforzado salva nombres de negocio ("TechFix",
"Razzmatazz") que un modelo genérico destrozaría.
-->

---
layout: default
class: slng-light
---

<!-- ---- LLM ---- -->

<div class="slide-head">
  <div class="kicker kicker--accent">Actor 3 · El cerebro, en medio</div>
  <h1 class="slide-title">LLM — el que decide</h1>
</div>

<div class="def-rows">
  <div class="def-row">
    <div class="def-term">Recibe</div>
    <div class="def-desc">La transcripción del STT + tu system prompt (quién es, cómo habla) + la lista de herramientas disponibles.</div>
  </div>
  <div class="def-row">
    <div class="def-term">Decide</div>
    <div class="def-desc">¿Respondo con lo que sé? ¿Llamo a una herramienta? ¿Pido un dato que falta? ¿Confirmo antes de actuar?</div>
  </div>
  <div class="def-row">
    <div class="def-term">Produce</div>
    <div class="def-desc">Texto — que el TTS convierte en voz al instante, frase a frase.</div>
  </div>
  <div class="def-row">
    <div class="def-term">Su límite</div>
    <div class="def-desc">Solo sabe lo que había en su entrenamiento + lo que le des. Todo lo demás: herramientas. (Esto va a ser el hilo de todo el taller.)</div>
  </div>
</div>

<div class="kicker" style="margin-top:1.75rem;margin-bottom:0">// Conéctalo al modelo que quieras</div>
<div class="logo-grid">
  <div class="logo-chip"><img src="/images/logos/openai.svg" alt="OpenAI" /><span class="logo-name">OpenAI</span></div>
  <div class="logo-chip"><img src="/images/logos/nvidia.svg" alt="NVIDIA" /><span class="logo-name">NVIDIA</span></div>
  <div class="logo-chip"><img src="/images/logos/gemini.svg" alt="Google Gemini" /><span class="logo-name">Gemini</span></div>
</div>

<!--
SPEAKER: El cerebro está EN MEDIO — no oye ni habla; lee y escribe texto. Dos ideas
clave: (1) el system prompt es tu único volante sobre su comportamiento; (2) su
conocimiento está congelado en el tiempo. Esa segunda limitación la vamos a ver en
carne propia en 10 minutos — y la resolveremos con tools.
-->

---
layout: section
no: 2
class: slng-light
---

<!-- ============================================================
     SECCIÓN 02 — TU PRIMER AGENTE (recomendador de restaurantes BCN)
     ============================================================ -->

Tu primer agente:<br/>recomienda dónde comer en Barcelona

---
layout: default
class: slng-dark
---

<!-- ---- Contexto del proyecto ---- -->

<div class="slide-head">
  <h1 class="slide-title">El proyecto: <span class="accent">BCN Concierge</span></h1>
  <div class="phonetic">// un conserje por teléfono — y empezamos por los restaurantes</div>
</div>

<div class="feature-cards">
  <div class="feature-card">
    <div class="num-badge">01</div>
    <div class="feature-name">Recomienda restaurantes</div>
    <div class="feature-desc">"¿Dónde ceno bien cerca del Born esta noche?" — por cocina, barrio y precio.</div>
  </div>
  <div class="feature-card">
    <div class="num-badge">02</div>
    <div class="feature-name">Responde dudas</div>
    <div class="feature-desc">Horario, rango de precio, si aceptan reserva, cómo llegar.</div>
  </div>
  <div class="feature-card">
    <div class="num-badge">03</div>
    <div class="feature-name">Reserva mesa</div>
    <div class="feature-desc">Te reserva con tus datos — y si ya te conoce, mejor todavía.</div>
  </div>
</div>

<p class="demo-cue">Un conserje puede con todo; nosotros <span class="accent">empezamos por comer</span>. Y lo construimos por capas.</p>

<!--
SPEAKER: Nuestro fil rouge. Un conserje telefónico para Barcelona que EMPIEZA por los
restaurantes — el mismo patrón sirve luego para hoteles, planes, lo que sea. Partimos de
lo mínimo (un prompt y una voz) y apilamos capas: tono → reloj → base de restaurantes →
reserva personalizada. En cada capa, llamamos y escuchamos la diferencia.
-->

---
layout: default
class: slng-light
---

<!-- ---- Prompt v0: el primer agente, sin conectar a nada ---- -->

<div class="slide-head">
  <div class="kicker kicker--accent">Capa 1 · El primer prompt</div>
  <h1 class="slide-title">Un prompt. Una voz. Nada más.</h1>
</div>

<pre class="prompt-card"><span class="c-muted"># v0 — deliberadamente simple. Sin tools, sin datos.</span>
You are a restaurant concierge for Barcelona.
Callers ask you where to eat: cuisine, neighborhood,
budget, occasion.

Answer their questions and recommend restaurants.
Speak Spanish.</pre>

<p class="demo-cue">▶︎ <span class="accent">Demo</span> — lo probamos en la UI de slng.ai: ¿dónde ceno esta noche? 👂</p>

<!--
SPEAKER / DEMO: Crear el agente con este prompt + una voz del catálogo. Llamar en vivo:
"¿dónde ceno bien por el Born?". Funciona… pero suena a asistente genérico y recomienda
sitios vagos o que quizá ya cerraron. No lo critiques todavía — deja que la sala lo note.
La siguiente slide pone nombre al problema.
-->

---
layout: default
class: slng-light
---

<!-- ---- ¿De dónde saca lo que sabe? ---- -->

<div class="slide-head">
  <h1 class="slide-title">¿De dónde saca lo que <span class="accent">sabe</span>?</h1>
</div>

<div class="pain-points">
  <div><span class="pain-dot"></span>Del <strong>entrenamiento del LLM</strong> — una foto del pasado, congelada.</div>
  <div><span class="pain-dot"></span>Sabe que Barcelona está llena de restaurantes. <span class="muted">No sabe cuáles siguen abiertos, ni si hoy tienen mesa.</span></div>
  <div><span class="pain-dot"></span>Y cuando no sabe… <strong>rellena los huecos</strong> — te manda a un sitio que cerró en 2019.</div>
</div>

<p class="demo-cue">Su conocimiento tiene <span class="accent">fecha de caducidad</span> — y no nos lo va a confesar.</p>

<!--
SPEAKER: El problema central de los agentes "solo prompt": el LLM no tiene acceso al
mundo. Todo lo que "sabe" de los restaurantes de Barcelona es del entrenamiento — puede
tener años. Y los LLM prefieren inventar antes que callar. Primera mitad de la solución:
mejor prompt. Segunda mitad (la importante): tools. Vamos con la primera.
-->

---
layout: default
class: slng-light
---

<!-- ---- Prompt v1: tono y forma de hablar ---- -->

<div class="slide-head">
  <div class="kicker kicker--accent">Capa 2 · El prompt se oye</div>
  <h1 class="slide-title">Mismo agente, otra <span class="accent">personalidad</span></h1>
</div>

<pre class="prompt-card">You are <span class="c-add">Montse, the concierge of BCN Concierge</span> — a phone
service that helps people find <span class="c-add">great places to eat</span> in Barcelona.

<span class="c-add">## How you speak
- Warm, upbeat, like a well-connected local friend
- SHORT sentences. This is a phone call, not an essay.
- Natural Spanish fillers: "a ver…", "mira", "genial"
- One recommendation at a time, then ask if they want more
- Never read lists. Never use formatting.</span>

<span class="c-add">## Rules
- If you are not sure about something, SAY SO.
- Never invent restaurants, prices or opening hours.</span>

Speak Spanish (Spain).</pre>

<p class="demo-cue">▶︎ <span class="accent">Demo A/B</span> — misma pregunta que antes. Escucha la diferencia.</p>

<!--
SPEAKER / DEMO: Verde = lo nuevo respecto a v0. Misma pregunta ("¿dónde ceno hoy?") y la
sala ESCUCHA el cambio: ahora suena a persona, con muletillas, frases cortas, una
recomendación por turno. Lección: el prompt es el volante del tono. PERO — y aquí viene
la trampa — sigue sin saber qué día es hoy. Pregúntale si un sitio abre esta noche…
-->

---
layout: default
class: slng-light
---

<!-- ============================================================
     TOOLS — MAPA: cuándo puede actuar una tool (lifecycle)
     ============================================================ -->

<div class="slide-head">
  <div class="kicker kicker--accent">Las herramientas</div>
  <h1 class="slide-title">¿Cuándo puede actuar una <span class="accent">tool</span>?</h1>
</div>

<p class="text-xl leading-relaxed muted max-w-4xl">
  Una tool es algo que el agente <strong>hace</strong>, no solo dice. Hay dos tipos, según
  <strong>quién</strong> la dispara y <strong>cuándo</strong> en la llamada.
</p>

```mermaid
flowchart LR
  S([📞 call_start]):::evt --> SYS1[/System tools<br/>lookup_caller · current_datetime/]:::sys
  SYS1 --> C{{Conversación · cada turno}}:::conv
  C -->|el LLM decide| M[/Model tools<br/>search_restaurants · end_call/]:::model
  M --> C
  C -->|termina| E([📞 call_end]):::evt
  E --> SYS2[/System tool<br/>log_transcript/]:::sys
  classDef evt fill:#111111,color:#ffffff,stroke:#111111;
  classDef sys fill:#FBE566,color:#111111,stroke:#111111;
  classDef model fill:#ffffff,color:#111111,stroke:#111111,stroke-width:2px;
  classDef conv fill:#f3f4f6,color:#111111,stroke:#9ca3af;
```

<div class="def-rows" style="margin-top:1rem">
  <div class="def-row"><div class="def-term">System</div><div class="def-desc">Las dispara un <strong>evento</strong> del runtime (call_start, call_end). El LLM ni se entera.</div></div>
  <div class="def-row"><div class="def-term">Model</div><div class="def-desc">Las decide el <strong>LLM</strong> a mitad de conversación, leyendo la descripción de cada tool.</div></div>
</div>

<!--
SPEAKER: El mapa mental de las tools antes de tocar ninguna. Dos preguntas: ¿QUIÉN la dispara
y CUÁNDO? System tools = un evento del runtime (al descolgar, al colgar); el LLM ni las ve.
Model tools = las elige el LLM mientras habla, según la descripción. Todo lo que viene ahora
encaja en este diagrama: end_call y search_restaurants son model; el lookup del llamante y el
guardado de la transcripción son system. Volveremos a este mapa.
-->

---
layout: default
class: slng-light
---

<!-- ---- Tool 0: end_call (la herramienta más simple, la primera) ---- -->

<div class="slide-head">
  <div class="kicker kicker--accent">Capa 3 · Su primera herramienta</div>
  <h1 class="slide-title">Saber cuándo <span class="accent">colgar</span></h1>
</div>

<p class="text-xl leading-relaxed muted max-w-4xl">
  La tool más simple que existe — y la primera: <strong>colgar</strong>. Una built-in de SLNG,
  cero backend. Sin ella el agente se queda al teléfono para siempre; con ella <strong>hace</strong>
  algo, no solo habla. Esa es la idea de una tool.
</p>

<div class="pills"><span class="pill">built-in · end_call</span></div>

<pre class="prompt-card"><span class="c-muted"># …añadimos al prompt:</span>
<span class="c-add">## Tools
- end_call: hang up when the conversation is over —
  the caller said goodbye, or the booking is done.</span></pre>

<p class="demo-cue">▶︎ <span class="accent">Demo</span> — te despides… y cuelga sola. 👋</p>

<!--
SPEAKER / DEMO: La forma más suave de introducir "tools": la más simple de todas — colgar.
Built-in de SLNG (cero backend, un interruptor). Establece la idea clave: una tool es algo
que el agente HACE, no solo dice. Sin ella la llamada no termina bien. Se la presentamos en
el prompt (verde) para que sepa CUÁNDO usarla. En la siguiente, una tool que le da INFO del
mundo real.
-->

---
layout: statement
class: slng-dark
---

<!-- ---- El problema de la fecha ---- -->

<div class="statement-sm">
Suena mejor.<br/>Pero le preguntas si un sitio <span class="accent">abre esta noche</span>…<br/>y no sabe ni qué día es hoy.
</div>

<!--
SPEAKER: Demo rápida si no salió sola: "¿qué día es hoy?" → duda, o suelta una fecha
inventada con total confianza. "Esta noche" o "mañana" no significan NADA para un modelo
congelado en el tiempo. Ninguna mejora de prompt arregla esto. Necesitamos darle acceso
al presente con otra herramienta.
-->

---
layout: default
class: slng-light
---

<!-- ---- Tool 1: current_datetime ---- -->

<div class="slide-head">
  <div class="kicker kicker--accent">Capa 4 · Su segunda herramienta</div>
  <h1 class="slide-title">Darle un <span class="accent">reloj</span></h1>
</div>

<p class="text-xl leading-relaxed muted max-w-4xl">
  Otra built-in de SLNG — y la primera que le trae <strong>datos del mundo real</strong>: la
  fecha y hora de hoy. Cero backend, la activas y ya. Y se lo decimos en el prompt.
</p>

<div class="pills"><span class="pill">built-in · current_datetime</span></div>

<pre class="prompt-card"><span class="c-muted"># …lo de antes, y añadimos al prompt:</span>
<span class="c-add">## Tools
- current_datetime: use it to know today's date and time,
  e.g. to interpret "esta noche", "mañana" or "este finde".</span></pre>

<p class="demo-cue">▶︎ <span class="accent">Demo</span> — "¿qué día es hoy?" → ahora sí. Y "esta noche" ya significa algo.</p>

<!--
SPEAKER / DEMO: Segunda tool — y la primera que trae DATOS del mundo real: la fecha. Aquí
el agente SALE del LLM para consultar el presente. Otra built-in de SLNG: cero backend, un
interruptor. Se la presentamos en el
prompt (verde) para que sepa CUÁNDO usarla — sin enseñar el JSON, el detalle está en el
handout. Ahora "esta noche" se calcula de verdad. Patrón que se repetirá: lo que el LLM
no sabe, una tool se lo da.
-->

---
layout: default
class: slng-light
---

<!-- ---- La base de restaurantes ---- -->

<div class="slide-head">
  <div class="kicker kicker--accent">Capa 5 · Datos de verdad</div>
  <h1 class="slide-title">Nuestra base de restaurantes</h1>
</div>

<p class="text-xl leading-relaxed muted max-w-4xl">
  Una base sencilla de restaurantes de Barcelona. Nada sofisticado, a propósito: lo que
  importa es <strong>cómo la consulta el agente</strong>, no la base en sí.
</p>

<div class="pills">
  <span class="pill">nombre</span>
  <span class="pill">cocina</span>
  <span class="pill">barrio</span>
  <span class="pill">precio</span>
  <span class="pill">horario</span>
  <span class="pill">acepta reserva</span>
</div>

<p style="margin-top:1.75rem">
  <a href="https://picsoung--0dd364ec75f611f1ab6f1607ee4eb77e.web.val.run" target="_blank"
     style="display:inline-flex;align-items:center;gap:0.5rem;font-family:'Geist Mono',monospace;font-size:1.1rem;padding:0.55rem 1.1rem;border-radius:10px;background:var(--slng-yellow);color:var(--slng-black);text-decoration:none">🔗 Explora la base de datos →</a>
</p>

<p class="demo-cue">La pregunta: ¿cómo hace el agente para <span class="accent">consultarla</span>?</p>

<!--
SPEAKER: Los restaurantes REALES viven aquí — una base mock servida por el backend del
taller (enlace en la slide: ábrela y enséñala). Deliberadamente simple: la lección no es
la base de datos, es CÓMO el agente la consulta. En producción esto sería vuestra DB,
vuestro CMS o vuestra API de reservas — el patrón es idéntico.
-->

---
layout: default
class: slng-light
---

<!-- ---- Tool 2: search_restaurants (webhook) ---- -->

<div class="slide-head">
  <div class="kicker kicker--accent">Capa 5 · Webhook tool</div>
  <h1 class="slide-title">El agente consulta la base</h1>
</div>

<p class="text-xl leading-relaxed muted max-w-4xl">
  Añadimos una <strong>herramienta webhook</strong>. El LLM decide cuándo llamarla leyendo
  su <strong>descripción</strong> — así que la descripción es, en la práctica, su prompt.
</p>

<div class="pills"><span class="pill">webhook · search_restaurants</span></div>

<pre class="prompt-card"><span class="c-muted"># endpoint — un val de Val Town (URL en el material)</span>
POST  https://picsoung--0dd364ec…​.web.val.run

<span class="c-muted"># description → cuándo y por qué llamarla:</span>
<span class="c-add">Searches the restaurant database and returns the
available restaurants with their name, cuisine,
price range, neighborhood, signature dish, and
rating. Call this once you know what the caller
is in the mood for (a cuisine, a vibe, a
neighborhood, or a budget) so you can recommend
real restaurants from the results instead of
guessing names yourself.</span></pre>

<p class="demo-cue">▶︎ <span class="accent">Demo</span> — "¿un japonés bueno por Gràcia?" → restaurantes <span class="accent">reales</span>, de la base.</p>

<!--
SPEAKER / DEMO: La cadena completa por primera vez: reloj (tool 1) + búsqueda (tool 2).
Si preguntan "¿algo abierto esta noche?", el LLM saca la fecha con el reloj, llama a
search_restaurants con los filtros correctos y responde con sitios de la base, no
inventados. Señala la magia: NADIE programó ese flujo; el LLM encadenó las dos tools
solo, guiado por las descripciones. Por eso las descripciones importan tanto.
-->

---
layout: default
class: slng-light
---

<!-- ---- Reservas: pedir datos… ¿o ya los tenemos? ---- -->

<div class="slide-head">
  <div class="kicker kicker--accent">Capa 6 · La reserva</div>
  <h1 class="slide-title">"¿Me reservas mesa?" — datos del llamante</h1>
</div>

<div class="team-wants">
  <div>
    <h3 class="strike-muted">Opción A · Preguntarlo todo</h3>
    <ol>
      <li>"¿Su nombre?" … "¿Su teléfono?"</li>
      <li>Deletrear, repetir, confirmar…</li>
      <li>Funciona — pero es lento e impersonal</li>
    </ol>
  </div>
  <div>
    <h3>Opción B · Ya lo sabemos</h3>
    <ol>
      <li>El <strong>número del llamante</strong> viene con la llamada</li>
      <li>Al descolgar, buscamos en nuestra base de clientes</li>
      <li>El agente saluda <strong>por tu nombre</strong> y reserva la mesa sin pedirte nada</li>
    </ol>
  </div>
</div>

<p class="demo-cue">La información que ya tienes <span class="accent">no se pregunta</span> — se usa.</p>

<!--
SPEAKER: El salto de UX. En una llamada real ya sabes el número del llamante — y si
es cliente, sabes su nombre y su historial. Concepto nuevo: hasta ahora todas las
tools las decidía el LLM (model tools). Esta se dispara SOLA al conectar la llamada:
una SYSTEM tool en el evento call_start. La config, en la siguiente slide.
-->

---
layout: default
class: slng-light
---

<!-- ---- Tool 3: lookup del llamante en call_start ---- -->

<div class="slide-head">
  <div class="kicker kicker--accent">Capa 6 · System tool en call_start</div>
  <h1 class="slide-title">Reconocerte <span class="accent">al descolgar</span></h1>
</div>

<p class="text-xl leading-relaxed muted max-w-4xl">
  Hasta ahora las tools las decidía el LLM. Esta es distinta: una <strong>system tool</strong>
  que el runtime dispara al conectar la llamada (call_start) y busca al llamante en la base
  de clientes. En teléfono el número viene con la llamada; en web lo pasas como argumento — la tool lo resuelve igual.
</p>

<div class="pills"><span class="pill">system tool · call_start</span></div>

<pre class="prompt-card"><span class="c-muted"># el saludo es genérico; el prompt le dice que use lo que devuelve la tool:</span>
<span class="c-add">## Caller context
- On call_start you receive the caller's profile (name, tastes).
- If you recognize them, greet them by name on your FIRST reply,
  e.g. "¡Ah, hola Carmen! ¿Otra vez japonés?"
- Offer to book using the number they're calling from.</span></pre>

<p class="demo-cue">▶︎ <span class="accent">Demo</span> — llamas desde tu número… y te saluda por tu nombre. 🤯</p>

<!--
SPEAKER / DEMO: El momento "wow" de la primera parte. Antes de que digas nada, el runtime
ya buscó tu número en la base de clientes y el saludo viene personalizado — incluso con
tu cocina favorita. Y en la reserva: "te apunto con el número desde el que llamas, ¿vale?"
— cero fricción. Cierra con la pregunta ética: ¿cuándo es útil y cuándo inquieta que un
robot te reconozca? (30 segundos de sala.)
-->

---
layout: default
class: slng-light
---

<!-- ---- Capa 7: Después de la llamada (call_end → transcripts → dashboard) ---- -->

<div class="slide-head">
  <div class="kicker kicker--accent">Capa 7 · Después de la llamada</div>
  <h1 class="slide-title">Cada llamada deja <span class="accent">rastro</span></h1>
</div>

<p class="text-xl leading-relaxed muted max-w-4xl">
  Otra system tool — esta se dispara en <strong>call_end</strong>. Manda la transcripción a un
  endpoint que la guarda, la resume y extrae qué recomendaste y si acabó en reserva.
</p>

<div class="pills"><span class="pill">system tool · call_end</span><span class="pill">log_transcript</span></div>

<div class="team-wants">
  <div>
    <h3>📝 Se guarda sola</h3>
    <ol>
      <li>Al colgar, la llamada entera va a tu endpoint.</li>
      <li>Un LLM la resume: recomendación, resultado, cliente.</li>
    </ol>
  </div>
  <div>
    <h3>📊 Dashboard</h3>
    <ol>
      <li>Todas las llamadas, con filtro por resultado.</li>
      <li>Reservas, "top picks" y transcripción completa.</li>
    </ol>
  </div>
</div>

<p class="demo-cue">▶︎ <a href="https://picsoung--a87c515675f711f19a141607ee4eb77e.web.val.run" target="_blank" class="accent" style="text-decoration:none">Abre el dashboard →</a></p>

<!--
SPEAKER: El cierre del bucle. Ya vimos una system tool en call_start (reconocer al llamante);
esta es la simétrica en call_end: al colgar, SLNG manda la transcripción a un endpoint que la
guarda y la resume con un LLM (resumen, restaurante recomendado, resultado). El pago: un
dashboard con todas las llamadas. Mismo patrón que ya conocen — otro evento, otra system tool.
-->

---
layout: default
class: slng-light
---

<!-- ---- Capa 8: Publícalo (deploy — número o embed) ---- -->

<div class="slide-head">
  <div class="kicker kicker--accent">Capa 8 · Publícalo</div>
  <h1 class="slide-title">Ya funciona. <span class="accent">Publícalo.</span></h1>
</div>

<p class="text-xl leading-relaxed muted max-w-4xl">
  Lo construiste y lo probaste en la UI de slng.ai. Sacarlo al mundo es lo <strong>rápido</strong>:
</p>

<div class="team-wants">
  <div>
    <h3>📞 Un número de teléfono</h3>
    <ol>
      <li>Le asignas un número y ya recibe y hace llamadas de voz reales.</li>
      <li>Ideal para soporte, reservas, recepción.</li>
    </ol>
  </div>
  <div>
    <h3>🌐 Embebido en tu web</h3>
    <ol>
      <li>Un widget de voz en tu página, con unos clics.</li>
      <li>Ideal para un "habla con nosotros" dentro del producto.</li>
    </ol>
  </div>
</div>

<div class="pills">
  <span class="pill">número de teléfono</span>
  <span class="pill">widget web</span>
  <span class="pill">~2 min</span>
</div>

<p class="demo-cue">▶︎ <span class="accent">Demo</span> — le ponemos número y lo llamamos de verdad. 📞</p>

<!--
SPEAKER: Cierre del build: todo lo anterior lo montaste y probaste en la UI de slng.ai.
Publicar es lo rápido — un número de teléfono o un widget web en un par de minutos. Aquí tu
agente pasa de "funciona en mi pantalla" a estar en producción, recibiendo llamadas reales.
Con esto cerramos la primera parte.
-->

---
layout: default
class: slng-dark
---

<!-- ---- Recap de la primera parte + teaser ---- -->

<div class="slide-head">
  <h1 class="slide-title">Lo que tu agente ya hace</h1>
  <div class="phonetic">// y todavía no hemos escrito un backend "de verdad"</div>
</div>

<div class="checkpoint">
  <div><span class="ck-dot">✓</span> Habla con una personalidad que <span class="accent">elegiste tú</span> (y se oye)</div>
  <div><span class="ck-dot">✓</span> Sabe qué día y hora es — <span class="accent">built-in</span> current_datetime</div>
  <div><span class="ck-dot">✓</span> Recomienda restaurantes <span class="accent">reales</span> — webhook a nuestra base</div>
  <div><span class="ck-dot">✓</span> Te <span class="accent">reconoce al descolgar</span> — system tool en call_start</div>
  <div><span class="ck-dot">✓</span> Reserva mesa sin pedirte el teléfono</div>
  <div><span class="ck-dot">✓</span> Guarda y resume cada llamada — <span class="accent">system tool</span> en call_end</div>
</div>

<p class="demo-cue">Todo esto, a mano en la UI. ¿Y si pudieras ir aún <span class="accent">más rápido</span>? 👇</p>

<!--
SPEAKER: Pausa de consolidación. Recorre la escalera: prompt → tono → reloj → base de
restaurantes → publicar → reconocimiento. Dos conceptos que ya dominan sin saberlo: model
tools (las decide el LLM) y system tools (las dispara un evento). Ya lo saben hacer TODO a
mano en la UI — ahora dos formas de acelerar: hablarle a SLNG desde Claude, y montar tools
sin backend con n8n/Zapier. Las dos siguientes slides.
-->

---
layout: default
class: slng-dark
---

<!-- ============================================================
     BONUS 1 — SUBE DE NIVEL: habla con SLNG desde Claude (skills)
     ============================================================ -->

<div class="slide-head">
  <div class="kicker kicker--accent">Sube de nivel</div>
  <h1 class="slide-title">Habla con SLNG desde <span class="accent">Claude</span></h1>
</div>

<p class="text-2xl leading-relaxed max-w-4xl mb-8">
  Las <strong>skills</strong> de SLNG conectan un LLM (Claude y otros) con slng.ai. Le pides
  en lenguaje natural — <span class="mono">"crea un agente que…"</span>, <span class="mono">"añade una tool que…"</span> — y lo monta por ti.
</p>

<div class="logo-grid">
  <div class="logo-chip"><img src="/images/logos/claude.svg" alt="Claude" /><span class="logo-name">Claude</span></div>
  <div class="logo-chip is-text"><span class="logo-name">+ tu LLM</span></div>
</div>

<p class="demo-cue">Menos clics, más conversación — <span class="accent">SLNG hace la mayor parte</span>.</p>

<!--
SPEAKER: Una vez que entienden el modelo mental (agentes, tools, eventos), no hace falta
hacerlo todo a mano. Las skills de SLNG dejan que Claude conduzca: describes lo que quieres
y te construye el agente y sus tools. La UI para aprender; las skills para ir rápido.
-->

---
layout: default
class: slng-dark
---

<!-- ============================================================
     BONUS 2 — TOOLS SIN BACKEND: n8n / Zapier
     ============================================================ -->

<div class="slide-head">
  <div class="kicker kicker--accent">Sube de nivel</div>
  <h1 class="slide-title">Tools sin escribir un <span class="accent">backend</span></h1>
</div>

<p class="text-2xl leading-relaxed max-w-4xl mb-8">
  Una tool es, por dentro, un <strong>endpoint privado</strong> — tu API. Puede ser tu propio
  servicio (las de este taller viven en <strong>Val Town</strong>), o, si no quieres mantener
  servidor, un flujo visual en <strong>n8n</strong> o <strong>Zapier</strong>. Mismo patrón, cero fricción.
</p>

<div class="logo-grid">
  <div class="logo-chip is-text"><span class="logo-name">Val Town · tu API</span></div>
  <div class="logo-chip"><img src="/images/logos/n8n.svg" alt="n8n" /><span class="logo-name">n8n</span></div>
  <div class="logo-chip"><img src="/images/logos/zapier.svg" alt="Zapier" /><span class="logo-name">Zapier</span></div>
</div>

<p class="demo-cue">Tu propia API o un flujo de arrastrar y soltar — <span class="accent">el agente la llama igual</span>.</p>

<!--
SPEAKER: El search_restaurants de antes era un webhook a una API — en este taller, un val de
Val Town (cero servidor que mantener, HTTPS al instante). En producción esa API es tuya, o la
montas sin código: n8n / Zapier exponen un webhook, tú arrastras los pasos (consultar DB, CRM,
enviar un SMS) y SLNG lo llama igual.
-->

---
layout: closing
contact: "hola@slng.ai · slng.ai · @picsoung"
---

<!-- ============================================================
     SLIDE — CIERRE  (layout: closing)
     ============================================================ -->

¡Manos a la obra!

---
layout: center
class: slng-dark
---

<!-- ============================================================
     SLIDE FINAL — FEEDBACK (QR)  — patrón reutilizado de la deck de Lovable
     QR → mismo formulario de feedback (public/images/qr/feedback.svg)
     ============================================================ -->

<div class="statement-sm">¡Gracias! <span class="accent">¿preguntas?</span></div>

<div class="flex justify-center mt-8">
  <img src="/images/qr/feedback.svg" alt="QR al formulario de feedback"
       style="width:15rem; height:15rem; background:#fff; border-radius:0.75rem; padding:0.6rem;" />
</div>

<p class="text-center mono muted mt-6" style="font-size:1.15rem">Déjame tu <span class="accent">feedback</span> en 1 minuto · {{ $slidev.configs.handle }} · slng.ai</p>

<!--
SPEAKER: Slide final. Responde preguntas con el QR en pantalla; el enlace va al formulario
de feedback (el mismo del curso). Deja el handle visible mientras la sala lo rellena.
-->

