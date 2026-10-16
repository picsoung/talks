---
# ============================================================
# TALLER · De idea a SaaS en 5 horas
# "Clona Airbnb para lo que quieras con Lovable"
# Skeleton — rellena el contenido marcado con TODO.
# Branding: slidev-brand-template (cream + dark + yellow/gold).
# ============================================================
theme: default
aspectRatio: 16/9
canvasWidth: 1920
title: De idea a SaaS en 5 horas con Lovable
info: |
  Nicolas Grenié · @picsoung
  Taller completo: de una idea a un SaaS desplegado en producción con Lovable.
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
venue: "MWC Upskilling Week · Barcelona · 2026"
handle: "@picsoung"
class: ng-dark
hideInToc: true
hideChrome: true
---

<!-- ============================================================
     SLIDE 1 — PORTADA OFICIAL DEL EVENTO (Lovable.pdf)
     Full-bleed; sin chrome (hideChrome en el headmatter).
     ============================================================ -->

<img src="/images/event-cover.png" class="full-bleed-img" alt="Upskilling Week Barcelona — De idea a SaaS en 5 horas con Lovable" />

---
layout: default
class: ng-dark
---

<!-- ============================================================
     SLIDE 2 — TÍTULO
     ============================================================ -->

<img src="/memoji.png" class="title-memoji" alt="Memoji de Nicolas" />

<div class="title-grid">
  <div class="title-copy">
    <div class="kicker" style="font-size:1.6rem;">Taller completo · Desarrollo de software</div>
    <h1 class="title-headline" style="font-size:8rem;">
      De idea a SaaS<br/>
      en <span class="accent">5 horas</span>
    </h1>
    <div class="title-subhead" style="font-size:2.7rem;">
      Clona Airbnb para lo que quieras con
      <span class="accent inline-flex items-center gap-2" style="vertical-align:-0.15em;">
        <img src="/images/logos/lovable.svg" alt="" style="height:2.2rem; width:auto;" />Lovable</span>
    </div>
    <div class="mt-10 mono text-2xl opacity-70">
      Nicolas Grenié · {{ $slidev.configs.handle }}
    </div>
    <div class="mt-5 mono text-2xl opacity-90">
      WiFi: <span class="accent font-bold">Cortesia</span> · clave: <span class="accent font-bold">Cortesia022026</span>
    </div>
  </div>
  <div class="title-illustration">
    <!-- Ejemplo del SaaS que construiremos: un "Airbnb de barcos". -->
    <img src="/images/superboatly.png" alt="SuperBoatly — un Airbnb de barcos hecho con Lovable" />
  </div>
</div>

<!--
SPEAKER: Bienvenida. Esto es un taller práctico de 5 horas. Al final cada
asistente sale con una app funcional, conectada a BD y lista para enseñar.
-->

---
layout: center
class: ng-dark
---

<!-- ============================================================
     SLIDE 2 — INTRO PERSONAL
     ============================================================ -->

<div class="flex items-center justify-center gap-16 max-w-5xl mx-auto">
  <img src="/memoji.png" class="w-72 h-72 flex-shrink-0" alt="Memoji de Nicolas" />
  <div>
    <h1 class="text-7xl font-extrabold mb-8">
      Hola, soy <span class="accent">Nicolas.</span>
    </h1>
    <div class="mono text-xl opacity-80 space-y-3">
      <div>DevRel @ <span class="accent">SLNG.ai</span></div>
      <div>Vivo en <span class="accent">Barcelona</span></div>
      <div><span class="accent">Lovable</span> Ambassador</div>
      <div class="opacity-60 pt-3">Antes · Typeform · Red Hat</div>
    </div>
  </div>
</div>

---
layout: center
class: ng-dark
---

<!-- ============================================================
     SLIDE — ¿POR QUÉ YO PARA HABLAR DE LOVABLE?
     ============================================================ -->

<div class="kicker text-center">¿Por qué yo?</div>

<div class="statement-sm">
  No solo <span class="accent">enseño</span> Lovable.<br/>
  Construyo y <span class="accent">lanzo</span> con él.
</div>

<div class="pain-points">
  <div><span class="pain-dot">›</span> <span class="accent">Lovable Ambassador</span>: comunidad y contenido</div>
  <div><span class="pain-dot">›</span> Varios productos reales en producción</div>
  <div><span class="pain-dot">›</span> De prototipo a usuarios de pago, no solo demos</div>
</div>

<!--
SPEAKER: Credibilidad rápida. No es teoría: la siguiente slide son proyectos
reales que cualquiera puede abrir ahora mismo.
-->

<!-- ============================================================
     SLIDES 4–11 — PROYECTOS QUE HE CONSTRUIDO
     Replicados de los decks Devoxx / Valencia: por proyecto un divisor
     `rep` + una slide con captura y QR. Patrón "REP #n — título / site.com".
     ============================================================ -->

---
layout: rep
class: ng-dark
section: PROYECTOS
rep: 1
repTitle: Software casero
site: ContractionTrack
---

Una herramienta para una persona a la que quiero, en una sola noche.

<!--
SPEAKER: Contexto — pareja de parto, cronometrar contracciones, todas las apps
querían suscripción. Lo construí en 20 minutos. La lección: software casero.
-->

---
layout: image-right
image: /images/contractiontrack.png
class: ng-dark
section: PROYECTOS
---

<div class="flex flex-col justify-center h-full pr-8">
  <div class="kicker">Proyecto · ContractionTrack</div>
  <h2 class="text-6xl font-extrabold leading-tight">
    Resuelve para <span class="accent">una persona real.</span>
  </h2>
  <p class="mt-6 text-xl opacity-70">
    No un mercado. No un buyer persona. Una persona.
  </p>
</div>

<div class="slide-qr">
  <img src="/images/qr/contractiontrack.svg" alt="QR de ContractionTrack" />
  <div class="slide-qr-label mono">escanéalo</div>
</div>

---
layout: rep
class: ng-dark
section: PROYECTOS
rep: 2
repTitle: El músculo de iterar
site: ImSoMetal
---

<div class="rep-gallery">
  <img src="/images/imsometal-bandname.png" alt="Logo de la banda Apistle of the Code" />
  <img src="/images/imsometal-nico.png" alt="Nico como cantante de una banda metal" />
  <img src="/images/imsometal-band-stage.png" alt="Apistle of the Code en el escenario" />
</div>

---
layout: default
class: ng-dark
section: PROYECTOS
---

<div class="flex flex-col items-center justify-center h-full">
  <h2 class="text-6xl font-extrabold mb-3">
    <span class="strike-muted">Prompt de una vez.</span>
  </h2>
  <h2 class="text-6xl font-extrabold accent mb-10">
    Proceso iterativo.
  </h2>
  <div class="iterations-grid">
    <figure v-click>
      <img src="/images/imsometal-v1.png" alt="Primer intento" />
      <figcaption>1er intento</figcaption>
    </figure>
    <figure v-click>
      <img src="/images/imsometal-v2.png" alt="Segunda pasada" />
      <figcaption>2º</figcaption>
    </figure>
    <figure v-click>
      <img src="/images/imsometal-v3.png" alt="Final" />
      <figcaption class="accent">Final</figcaption>
    </figure>
  </div>
</div>

<div class="slide-qr">
  <img src="/images/qr/imsometal.svg" alt="QR de ImSoMetal" />
  <div class="slide-qr-label mono">escanéalo</div>
</div>

<!--
SPEAKER: Haz click en cada iteración. Deja que la progresión visual hable:
básico → refinado → full metal. No narres cada paso.
-->

---
layout: rep
class: ng-dark
section: PROYECTOS
rep: 3
repTitle: Shipear todo el bucle
site: PianoRigolo
---

Construye con una mano, apunta a un mercado más grande.

---
layout: image-right
image: /images/pianorigolo.png
backgroundSize: contain
class: ng-dark
section: PROYECTOS
---

<div class="flex flex-col justify-center h-full pr-8">
  <h2 class="text-6xl font-extrabold leading-tight">
    Construir es solo <br/>
    <span class="accent">una parte</span> del viaje.
  </h2>
  <p class="mt-6 text-xl opacity-70">
    Idea → prototipo → onboarding → soporte → adiós. Eres dueño/a de todo el bucle.
  </p>
</div>

<div class="slide-qr">
  <img src="/images/qr/pianorigolo.svg" alt="QR de PianoRigolo" />
  <div class="slide-qr-label mono">escanéalo</div>
</div>

---
layout: rep
class: ng-dark
section: PROYECTOS
rep: 4
repTitle: Surfear la ola
site: Bnbicons
---

Airbnb soltó su design system. Envié el generador en 48 h.

---
layout: image-right
image: /images/bnbicons.png
backgroundSize: contain
class: ng-dark
section: PROYECTOS
---

<div class="flex flex-col justify-center h-full pr-8">
  <div class="kicker">Proyecto · Bnbicons</div>
  <h2 class="text-6xl font-extrabold leading-tight">
    Detecta la ola.<br/>
    <span class="accent">Envía rápido.</span><br/>
    O la pierdes.
  </h2>
  <p class="mt-6 text-xl opacity-70">
    Las tendencias tienen una ventana. Vibecoding te deja alcanzarla. Y hoy… clonamos Airbnb.
  </p>
</div>

<div class="slide-qr">
  <img src="/images/qr/bnbicons.svg" alt="QR de Bnbicons" />
  <div class="slide-qr-label mono">escanéalo</div>
</div>

---
layout: center
class: ng-dark
---

<!-- ============================================================
     SLIDE — PUENTE: COMPARTIR LA EXPERIENCIA
     "Quiero compartir esto para que tú también construyas y empieces."
     ============================================================ -->

<div class="statement">
  Lo comparto para <span class="accent">inspirarte</span>.
</div>

<p class="statement-sm mt-8">
  Confía: <span class="accent">sí se puede</span>.
</p>

<!--
SPEAKER: Cambio de tono — de "esto es lo que YO he hecho" a "tú también puedes".
Es el puente a la parte práctica. Corto y directo.
-->

---
layout: center
class: ng-light
---

<!-- ============================================================
     SLIDE — AGENDA DE LA SESIÓN (dos partes)
     ============================================================ -->

<div class="kicker text-center">Agenda</div>

<h2 class="text-center">5 horas, <span class="braces accent">en dos partes</span></h2>

<div class="team-wants">
  <div>
    <h3 class="accent">1 · Juntos <span class="opacity-60 font-normal">· ~3 h</span></h3>
    <ol>
      <li>Un clon de Airbnb</li>
      <li>Idea → prototipo desplegado</li>
      <li>Datos, auth y formularios</li>
      <li>IA en el flujo</li>
    </ol>
  </div>
  <div>
    <h3 class="accent">2 · Tu turno <span class="opacity-60 font-normal">· ~2 h</span></h3>
    <ol>
      <li>Adáptalo a tu nicho</li>
      <li>O empieza el tuyo</li>
      <li>¿Cuándo usar Lovable?</li>
    </ol>
  </div>
</div>

<p class="shadow-punchline">Con un <span class="accent">descanso ☕</span> de ~10 min entre las dos partes.</p>

---
layout: center
class: ng-dark
section: EL PROYECTO
---

<!-- ============================================================
     SLIDE — EL PROYECTO (merge: Airbnb es un ejemplo + tiene todas
     las piezas de un SaaS). El test de nicho se movió al Paso 1.
     ============================================================ -->

<div class="kicker text-center">El proyecto</div>

<div class="statement-sm">
  Airbnb es solo un <span class="accent">ejemplo</span>.<br/>
  Pero tiene <span class="accent">todas las piezas</span> de un SaaS.
</div>

<div class="team-wants">
  <div>
    <h3 class="accent">El marketplace</h3>
    <ol>
      <li>Perfiles (anfitrión / huésped)</li>
      <li>Anuncios</li>
      <li>Búsqueda y filtros</li>
      <li>Reservas</li>
    </ol>
  </div>
  <div>
    <h3 class="accent">= cualquier SaaS</h3>
    <ol>
      <li><strong>Autenticación</strong> y roles</li>
      <li><strong>CRUD</strong> + relaciones entre tablas</li>
      <li><strong>Búsqueda</strong> sobre datos</li>
      <li>Una <strong>transacción</strong> real</li>
    </ol>
  </div>
</div>

<p class="seo-proof">
  Elige tu nicho: coworkings, mascotas, lo que sea. Si sabes construir esto, sabes construir
  <span class="accent">casi cualquier SaaS</span>. Y con Lovable, en horas.
</p>

<!--
SPEAKER: El gancho — Airbnb no es el objetivo, es el vehículo. Un marketplace de
dos lados condensa TODOS los patrones de un SaaS. El nicho es la piel; el
esqueleto, idéntico para todos.
-->

---
layout: center
class: ng-dark
section: MANOS A LA OBRA
---

<!-- ============================================================
     SLIDE 8 — TRANSICIÓN A LA PARTE PRÁCTICA
     ============================================================ -->

<div class="statement-sm">
  Suficiente teoría.<br/>
  <span class="accent">Vamos a construir.</span>
</div>

---
layout: center
class: ng-light
section: ANTES DE EMPEZAR
---

<!-- ============================================================
     SLIDE — ANTES DE EMPEZAR: abre la app del taller
     La app te guía por el setup (cuenta, Pro con código, nicho) y
     registra tu progreso. URL: upskilling-workshop.lovable.app
     ============================================================ -->

<div class="kicker text-center">Antes de empezar</div>

<div class="statement-sm">Abre la <span class="accent">app del taller</span></div>

<div class="flex justify-center mt-8">
  <img src="/images/qr/companion-app.svg" alt="QR a la app del taller"
       style="width:16rem; height:16rem; background:#fff; border-radius:0.75rem; padding:0.6rem;" />
</div>

<p class="shadow-punchline">Te guía paso a paso: crea tu cuenta, activa Pro y sigue tu progreso. <span class="mono">upskilling-workshop.lovable.app</span></p>

<!--
SPEAKER: Todos abren la app del taller (QR). Allí, el primer módulo les lleva por
el setup: crear cuenta, activar Pro con el código COMM-UPSK-R53T y elegir nicho.
La app registra el progreso de cada uno. Levanta la mano quien tenga problemas.
-->

<!-- ============================================================
     PASO A PASO (divisores de sección) — mapean 1:1 con los
     Módulos 1–6 del temario y con los objetivos del taller.
     Añade después las slides de detalle/demo bajo cada paso.
     ============================================================ -->

<!-- ---- Paso 1 · MLP en 4 beats (concepto → lluvia → triaje → núcleo) ---- -->

<!-- Beat 1 · El concepto: MVP → MLP -->

---
layout: center
class: ng-light
section: PASO 1
---

<div class="kicker text-center">Paso 1 · El MLP</div>

<h2 class="text-center">No un <span class="strike-muted">MVP</span>. Un <span class="accent">MLP</span>.</h2>

<p class="seo-proof">Minimum <strong>Lovable</strong> Product: que funcione y que <span class="accent">guste</span>.</p>

<div class="team-wants">
  <div>
    <h3 class="strike-muted">Minimum Viable</h3>
    <ol>
      <li>Funciona… a duras penas</li>
      <li>Feo, pero "válido"</li>
      <li>Nadie quiere volver</li>
    </ol>
  </div>
  <div>
    <h3 class="accent">Minimum Lovable</h3>
    <ol>
      <li>Hace UNA cosa, y bien</li>
      <li>Da gusto usarlo</li>
      <li>Con Lovable, lo "bonito" sale gratis</li>
    </ol>
  </div>
</div>

<p class="shadow-punchline">La pregunta no es "¿qué es lo mínimo?". Es "¿qué es lo mínimo que <strong>encanta</strong>?".</p>

<!--
SPEAKER: El principio fundacional. MVP busca "válido"; MLP busca "querible". El
giro: antes, "lovable" costaba semanas de diseño; con Lovable lo tienes desde el
primer prompt. Así que no hay excusa para enviar algo feo. Aún NO hablamos de datos.
-->

<!-- Beat 2 · Lluvia de ideas: todo lo que podríamos construir -->

---
layout: center
class: ng-dark
section: PASO 1
---

<div class="kicker text-center">Paso 1 · Lluvia de ideas</div>

<div class="statement-sm" style="font-size:3.2rem;">Todo lo que <span class="accent">podríamos</span> construir</div>

<div class="feature-cloud">
  <span class="feat s4">buscar barcos</span>
  <span class="feat s3">publicar un barco</span>
  <span class="feat s4">reservar</span>
  <span class="feat s2">filtros</span>
  <span class="feat s3">galería de fotos</span>
  <span class="feat s2">mapa de puertos</span>
  <span class="feat s1">favoritos</span>
  <span class="feat s3">pagos</span>
  <span class="feat s2">reseñas</span>
  <span class="feat s2">mensajería</span>
  <span class="feat s1">calendario de disponibilidad</span>
  <span class="feat s1">precios dinámicos</span>
  <span class="feat s2">perfiles verificados</span>
  <span class="feat s1">cupones</span>
  <span class="feat s1">multi-idioma</span>
  <span class="feat s1">comparar barcos</span>
  <span class="feat s2">panel de anfitrión</span>
  <span class="feat s1">notificaciones</span>
  <span class="feat s1">seguro incluido</span>
  <span class="feat s1">patrón con licencia</span>
</div>

<p class="shadow-punchline">Genial. Y <strong>nada</strong> de esto cabe en la primera versión. 😅</p>

<!--
SPEAKER: Deja que la nube abrume un segundo — es el punto. Todas son ideas
válidas. El error de novato es intentarlas todas a la vez. En la próxima slide
las ordenamos. Pide 2-3 ideas a la sala y añádelas mentalmente al montón.
-->

<!-- Beat 3 · Triaje: organiza por colores (revelar uno a uno) -->

---
layout: center
class: ng-dark
section: PASO 1
---

<div class="kicker text-center">Paso 1 · Organízalas</div>

<h2 class="text-center">Tres montones. <span class="braces accent">por color</span></h2>

<div class="triage">
  <div class="triage-col tri-core" v-click>
    <h3>🟢 Núcleo · el MLP</h3>
    <ul>
      <li>Publicar un barco</li>
      <li>Buscar y filtrar</li>
      <li>Ver la ficha</li>
      <li>Reservar</li>
    </ul>
  </div>
  <div class="triage-col tri-later" v-click>
    <h3>🟡 Después</h3>
    <ul>
      <li>Mapa de puertos</li>
      <li>Galería de fotos</li>
      <li>Favoritos</li>
      <li>Reseñas</li>
    </ul>
  </div>
  <div class="triage-col tri-out" v-click>
    <h3>🔴 Fuera (hoy)</h3>
    <ul>
      <li>Pagos reales</li>
      <li>Mensajería</li>
      <li>Precios dinámicos</li>
      <li>Multi-idioma</li>
    </ul>
  </div>
</div>

<p class="shadow-punchline" v-click>El corte es la decisión más importante del día. <span class="accent">Verde</span> = hoy · <span style="color:var(--ng-accent-warm)">amarillo</span> = quizá · <span style="color:#F0623E">rojo</span> = aún no.</p>

<!--
SPEAKER: Revela un montón a la vez (click). Las mismas ideas de la nube, ahora
ordenadas. Verde = lo mínimo para que los flujos funcionen. Amarillo = mejora pero
no bloquea. Rojo = importante algún día, hoy no. Invita a la sala a discrepar:
"¿qué moverías?". No hay respuesta única — pero el verde debe quedarse pequeño.
-->

<!-- Beat 4 · El núcleo destilado = los flujos -->

---
layout: center
class: ng-dark
section: PASO 1
---

<div class="kicker text-center">Paso 1 · Tu MLP</div>

<div class="statement-sm">Esto, y <span class="accent">solo esto</span>, primero</div>

<div class="pain-points">
  <div><span class="pain-dot">1</span> El anfitrión <span class="accent">publica</span> un barco</div>
  <div><span class="pain-dot">2</span> El huésped <span class="accent">busca</span> y compara</div>
  <div><span class="pain-dot">3</span> El huésped <span class="accent">reserva</span></div>
</div>

<p class="shadow-punchline">El montón verde se destila en <strong>3 flujos</strong>. Si funcionan, tienes un marketplace.</p>

<!--
SPEAKER: El núcleo verde no son features sueltas: son 3 flujos de usuario. De
aquí saldrán las pantallas (Paso 2) y las tablas (Paso 3). Hoy solo nombramos QUÉ
pasa, no CÓMO se guarda. Esto es lo que construiremos juntos en los próximos pasos.
-->

<!-- Cierre Paso 1 · el plan de ataque: 5 jalones (cada uno testeable) -->

---
layout: center
class: ng-dark
section: PASO 1
---

<div class="kicker text-center">Paso 1 · El plan de ataque</div>

<h2 class="text-center">5 jalones. <span class="braces accent">cada uno funciona</span></h2>

<div class="roadmap">
  <div class="roadmap-step">
    <div class="rm-num">1</div>
    <div class="rm-t">Concepto</div>
    <div class="rm-d">UI con datos ficticios</div>
    <div class="rm-paso">Paso 2</div>
  </div>
  <div class="roadmap-step">
    <div class="rm-num">2</div>
    <div class="rm-t">Interfaz</div>
    <div class="rm-d">Diseño + iteración</div>
    <div class="rm-paso">Paso 2</div>
  </div>
  <div class="roadmap-step">
    <div class="rm-num">3</div>
    <div class="rm-t">Datos reales</div>
    <div class="rm-d">Backend + auth</div>
    <div class="rm-paso">Paso 3–4</div>
  </div>
  <div class="roadmap-step">
    <div class="rm-num">4</div>
    <div class="rm-t">Al mundo</div>
    <div class="rm-d">IA + servicios externos</div>
    <div class="rm-paso">Paso 5</div>
  </div>
  <div class="roadmap-step">
    <div class="rm-num">5</div>
    <div class="rm-t">En línea</div>
    <div class="rm-d">Desplegar y compartir</div>
    <div class="rm-paso">Paso 6</div>
  </div>
</div>

<p class="shadow-punchline">Cada jalón = una versión testeable. La complejidad sube poco a poco, no de golpe.</p>

<!--
SPEAKER: Este es el mapa del resto del taller. La clave: no construimos todo de
una vez. Cada jalón deja una app que funciona y se puede enseñar. Si te atascas en
el 3, todavía tienes el 1 y el 2 funcionando. Esto baja la presión y permite feedback temprano.
-->

---
layout: center
class: ng-dark
section: PASO 2
---

<div class="kicker text-center">Paso 2</div>
<div class="statement-sm">Primer prototipo<br/>con <span class="accent">Lovable</span></div>
<p class="opacity-60 mt-6 text-xl text-center">Objetivo: de idea a prototipo funcional desplegado en &lt; 3 horas.</p>

<!-- ---- Paso 2 · puente: dos formas de arrancar (prompt vs modo planificación) ---- -->

---
layout: center
class: ng-light
section: PASO 2
---

<div class="kicker text-center">Paso 2 · Cómo arrancar</div>

<h2 class="text-center">Dos formas de <span class="accent">empezar</span></h2>

<div class="team-wants">
  <div>
    <h3 class="accent">A · Prompt detallado</h3>
    <ol>
      <li>Escribes un prompt completo de una vez</li>
      <li>Más control, más rápido</li>
      <li>Ideal cuando ya tienes claro el MLP (Paso 1)</li>
    </ol>
  </div>
  <div>
    <h3 class="accent">B · Modo planificación</h3>
    <ol>
      <li>Describes la idea; Lovable te hace preguntas</li>
      <li>Validas un plan antes de generar código</li>
      <li>Ideal cuando aún dudas del alcance</li>
    </ol>
  </div>
</div>

<p class="shadow-punchline">Hoy arrancamos con <strong>A</strong>. Pero antes, te enseño <strong>B</strong> en 1 minuto.</p>

<!--
SPEAKER: Como ya definimos el alcance en el Paso 1, vamos directos con un prompt
detallado (A). Pero el modo planificación (B) es clave cuando NO tienes claro el
alcance — y resuelve el problema de "frase vaga → resultado decepcionante".
-->

---
layout: center
class: ng-light
section: PASO 2
---

<div class="kicker text-center">Paso 2 · Opción B · Modo planificación</div>

<h2 class="text-center">Piensa <span class="accent">antes</span> de generar</h2>

<div class="pain-points">
  <div><span class="pain-dot">1</span> Describes la idea en una frase</div>
  <div><span class="pain-dot">2</span> Lovable te hace <span class="accent">preguntas de encuadre</span></div>
  <div><span class="pain-dot">3</span> Revisas y ajustas el <span class="accent">plan</span></div>
  <div><span class="pain-dot">4</span> <span class="accent">Approve</span> → genera la primera versión</div>
</div>

<p class="demo-cue">▶︎ <span class="accent">Demo</span>: 1 min en modo planificación. No genera código hasta aprobar.</p>

<!--
SPEAKER / DEMO: Activa el modo planificación, escribe "un marketplace para alquilar
barcos entre particulares" y deja que Lovable pregunte (¿cuentas?, ¿pagos?, ¿roles?).
Muestra que NO genera nada hasta "Approve" — barato y seguro para pensar. Coste casi
nulo por interacción. Luego volvemos a la Opción A por velocidad.
-->

<!-- ---- Paso 2 · detalle: primer prompt (Opción A) → demo → iteración → checkpoint ---- -->

---
layout: center
class: ng-light
section: PASO 2
---

<div class="kicker text-center">Paso 2 · Opción A · El primer prompt</div>

<h2 class="text-center">Copia esto en <span class="accent">Lovable</span></h2>

<pre class="prompt-card"><span class="c-muted"># Paste as-is. [brackets] = your niche.</span>
Build a web app "SuperBoatly", an Airbnb-style marketplace
for renting boats between private owners.

<span class="accent">Home page:</span>
- Grid of boats (photo, name, port, price/day)
- Search bar + filters (port, type, price)
- Clicking a boat → its detail page (gallery,
  description, capacity, price, "Book" button)

<span class="accent">Design:</span>
- Modern and clean, mobile-first, in Spanish
- Warm tones, lots of white space

For now use mock data: 8 boats in Spanish ports,
with attractive placeholder photos.</pre>

<p class="demo-cue">▶︎ <span class="accent">Demo en vivo</span>: generamos juntos. Mira la pantalla.</p>

<!--
SPEAKER / DEMO EN VIVO:
1. Pega el prompt, pulsa enviar, deja que genere (acelera el silencio hablando
   de por qué describimos UI + diseño + datos ficticios).
2. Recorre el resultado: cuadrícula, detalle, búsqueda.
3. Comenta: NO hemos hablado de backend ni de login — es deliberado, va luego.
Regla de oro recordada: una petición a la vez.
-->

---
layout: center
class: ng-light
section: PASO 2
---

<div class="kicker text-center">Paso 2 · Itera la interfaz</div>

<h2 class="text-center"><span class="strike-muted">Prompt perfecto.</span> <span class="accent">Una petición a la vez.</span></h2>

<div class="pain-points">
  <div><span class="pain-dot">→</span> "Add an <span class="accent">'Available' / 'Booked'</span> badge on each card"</div>
  <div><span class="pain-dot">→</span> "On the detail page, add a <span class="accent">map</span> of the port"</div>
  <div><span class="pain-dot">→</span> "Add a header with the logo and an <span class="accent">always-visible search</span>"</div>
  <div><span class="pain-dot">→</span> Modo visual: ajusta un color o un espaciado</div>
</div>

<p class="demo-cue">▶︎ <span class="accent">Demo</span>: 3-4 iteraciones rápidas, una a una.</p>

<!--
SPEAKER: Enseña el músculo de iterar (como ImSoMetal). Cada prompt corto y
concreto. Si algo se rompe: revertir, no arreglar a martillazos.
-->

<!-- Formas de dialogar con Lovable (texto · imagen · voz · Visual Edit) -->

---
layout: center
class: ng-light
section: PASO 2
---

<div class="kicker text-center">Paso 2 · Formas de dialogar</div>

<h2 class="text-center">No solo <span class="accent">texto</span></h2>

<div class="pain-points">
  <div><span class="pain-dot">›</span> <span class="accent">Texto</span>: para pedidos precisos</div>
  <div><span class="pain-dot">›</span> <span class="accent">Imagen / captura</span> (botón "+"): enséñale el diseño, incluso un boceto</div>
  <div><span class="pain-dot">›</span> <span class="accent">Voz</span>: dicta tu idea sin escribir</div>
  <div><span class="pain-dot">›</span> <span class="accent">Visual Edit</span>: ajustes directos, gratis (pulsa "Send")</div>
</div>

<p class="shadow-punchline">Una imagen vale más que mil prompts: sube una <strong>captura anotada</strong> cuando el texto no basta.</p>

<p class="demo-cue">▶︎ <span class="accent">Demo</span>: dibuja un mockup en <span class="mono">tldraw.com</span>, captura y pégalo en el "+".</p>

<!--
SPEAKER: Cuatro formas de hablarle a Lovable. La imagen es la más infravalorada:
una captura anotada (Preview en Mac, Canva, Tldraw) comunica el diseño mejor que un
párrafo. Visual Edit = retoques en el lienzo, NO gasta créditos, pero hay que pulsar
"Send" para aplicar. La voz va bien para soltar ideas rápido.
-->

---
layout: center
class: ng-dark
section: PASO 2
---

<div class="kicker text-center">Checkpoint · Paso 2</div>

<div class="statement-sm">¿Lo tienes? <span class="braces accent nowrap">levanta la mano</span></div>

<div class="checkpoint">
  <div><span class="ck-dot">✓</span> Un marketplace <span class="accent">navegable</span> con barcos ficticios</div>
  <div><span class="ck-dot">✓</span> La búsqueda y la página de detalle funcionan</div>
  <div><span class="ck-dot">✓</span> <span class="accent">(Opcional)</span> Pulsa <strong>Publish</strong> ya, así tienes URL desde el principio</div>
</div>

<!--
SPEAKER: Punto de sincronización. Espera a que la mayoría tenga el checkpoint
antes de seguir. Quien vaya rápido: que publique ya (deploy temprano) o añada un
filtro extra. El "Publish" temprano cumple la promesa de "en producción pronto".
-->

---
layout: center
class: ng-dark
section: PASO 3
---

<div class="kicker text-center">Paso 3</div>
<div class="statement-sm">Modelo de datos<br/>y <span class="accent">base de datos</span></div>
<p class="opacity-60 mt-6 text-xl text-center">Objetivo: persistencia real con <span class="accent">Lovable Cloud</span>, sin escribir todo el código a mano.</p>

<!-- ---- Paso 3 · detalle: por qué backend → esquema → activar backend → checkpoint ---- -->

<!-- Por qué un backend + qué es Lovable Cloud (concepto, va en slide) -->

---
layout: center
class: ng-light
section: PASO 3
---

<div class="kicker text-center">Paso 3 · Por qué un backend</div>

<h2 class="text-center">De tu navegador a <span class="accent">la nube</span></h2>

<div class="team-wants">
  <div>
    <h3 class="strike-muted">Sin backend</h3>
    <ol>
      <li>Los datos viven solo en tu navegador</li>
      <li>Se pierden al cambiar de dispositivo</li>
      <li>No se pueden compartir por enlace</li>
    </ol>
  </div>
  <div>
    <h3 class="accent">Con Lovable Cloud</h3>
    <ol>
      <li>Datos en una base de datos remota</li>
      <li>Accesibles desde cualquier dispositivo</li>
      <li>Listos para compartir y autenticar</li>
    </ol>
  </div>
</div>

<p class="shadow-punchline">Lovable Cloud reúne <strong>base de datos, auth, archivos e IA</strong>, todo nativo y sin servicios de terceros.</p>

<!--
SPEAKER: El "aha" del backend: hasta ahora los datos vivían solo en el navegador.
Lovable Cloud los lleva a una base de datos real e integrada — no montas Supabase,
Xano o S3 por separado. (Mención, no demo: por debajo ES Supabase, pero gestionado
desde Lovable, y la IA de la plataforma lo entiende mejor que un servicio externo.)
-->

---
layout: center
class: ng-light
section: PASO 3
---

<div class="kicker text-center">Paso 3 · El esquema</div>

<h2 class="text-center">De los flujos a los <span class="accent">datos</span></h2>

<div class="flex justify-center mt-6">

```mermaid {scale: 1.0}
%%{init: {'theme':'base','themeVariables':{'fontFamily':'Inter, sans-serif','fontSize':'18px','lineColor':'#F5C43B','edgeLabelBackground':'#F5F1E8','tertiaryColor':'#F5F1E8'},'flowchart':{'htmlLabels':true,'padding':20,'nodeSpacing':90,'rankSpacing':170}}}%%
flowchart LR
  P["<b>Perfiles</b><br/>nombre<br/>email<br/>rol: anfitrión / huésped"]
  A["<b>Anuncios</b><br/>título<br/>descripción<br/>precio<br/>ubicación<br/>fotos"]
  R["<b>Reservas</b><br/>fechas<br/>estado"]
  P -->|publica| A
  A -->|se reserva| R
  P -->|hace| R
  classDef entity fill:#FBF8F1,stroke:#F5C43B,stroke-width:2.5px,color:#111111,rx:10,ry:10;
  class P,A,R entity;
```

</div>

<p class="shadow-punchline">Lo que el usuario <strong>hace</strong> se vuelve <strong>estructura</strong>: un solo prompt crea estas tablas y sus relaciones.</p>

<!--
SPEAKER: Las flechas SON los flujos de usuario hechos datos: el anfitrión publica
un anuncio, el huésped reserva. Aquí el modelo conceptual se convierte en esquema:
campos + relaciones. Un solo prompt lo crea en la base de datos — no escribimos SQL a mano.
-->

---
layout: center
class: ng-light
section: PASO 3
---

<div class="kicker text-center">Paso 3 · Activa el backend</div>

<h2 class="text-center">Que los datos <span class="accent">persistan</span></h2>

<pre class="prompt-card">Connect the app to Lovable Cloud so the data persists.

<span class="accent">Create these tables:</span>
- profiles  → user (can be owner and/or renter)
- boats     → name, description, port, price_per_day,
              capacity, photos, owner_id
- bookings  → boat_id, guest_id, start_date, end_date, status

Migrate the 8 mock boats into the boats table, and wire
the grid and detail page to read from the database.</pre>

<p class="demo-cue">▶︎ <span class="accent">Demo</span>: activamos Lovable Cloud y revisamos el Table Editor.</p>

<!--
SPEAKER / DEMO (esto se MUESTRA en vivo, no necesita slides):
1. Al activar Cloud, Lovable pide REGIÓN (Europa) y AUTORIZACIÓN de coste — muéstralo.
2. Tras generar, abre Cloud → Table Editor: enseña las 3 tablas con datos. Tour
   rápido: filtrar, "Add row", editar un valor → refresca y se ve en la app.
3. Menciona las otras piezas de Cloud (no demo): auth, file storage, SQL editor, logs.
Mención: por debajo ES Supabase, pero todo se gestiona desde Lovable y la IA lo
entiende mejor que un servicio externo. El esquema anterior se vuelve real aquí.
-->

---
layout: center
class: ng-dark
section: PASO 3
---

<div class="kicker text-center">Checkpoint · Paso 3</div>

<div class="statement-sm">Recarga. <span class="braces accent nowrap">¿siguen ahí?</span></div>

<div class="checkpoint">
  <div><span class="ck-dot">✓</span> Recargas la página y los barcos <span class="accent">siguen ahí</span></div>
  <div><span class="ck-dot">✓</span> Ves las 3 tablas con datos en el <strong>Table Editor</strong></div>
</div>

<!--
SPEAKER: Si a alguien no le persiste, casi siempre es que no activó Cloud o no
migró los datos. Revierte y vuelve a lanzar el prompt en pasos pequeños.
-->

---
layout: center
class: ng-dark
section: PASO 4
---

<div class="kicker text-center">Paso 4</div>
<div class="statement-sm">Autenticación<br/>y <span class="accent">formularios</span></div>
<p class="opacity-60 mt-6 text-xl text-center">Objetivo: integrar auth y formularios conectados a la BD.</p>

<!-- ---- Paso 4 · detalle: accesos + formularios → demo → checkpoint ---- -->

---
layout: center
class: ng-light
section: PASO 4
---

<div class="kicker text-center">Paso 4 · Accesos y formularios</div>

<h2 class="text-center">Quién entra, quién <span class="accent">publica</span>, quién reserva</h2>

<pre class="prompt-card">Add access control and forms:

- <span class="accent">Owners</span> sign up (email + password) to publish boats.
- "List your boat" form → authenticated owners only.
- Anyone can browse and search <span class="accent">without an account</span>.
- To book, the renter picks dates and enters name + email.
- Owners can only <span class="accent">edit or delete their own</span> boats.
- Dashboards: "My boats" (owner) and "My bookings" (renter).</pre>

<p class="demo-cue">▶︎ <span class="accent">Demo</span>: registro, publicar un barco, y reservar.</p>

<!--
SPEAKER / DEMO: Mismo patrón que Spin the Wheel del curso: admin autenticado /
invitados libres. Enseña los dos lados. Pruébalo en una pestaña de incógnito
para simular a un huésped sin cuenta.
-->

---
layout: center
class: ng-dark
section: PASO 4
---

<div class="kicker text-center">Checkpoint · Paso 4</div>

<div class="statement-sm">Pruébalo en <span class="braces accent">incógnito</span></div>

<div class="checkpoint">
  <div><span class="ck-dot">✓</span> Te registras y <span class="accent">publicas</span> un barco</div>
  <div><span class="ck-dot">✓</span> Desde incógnito (sin cuenta) <span class="accent">reservas</span> ese barco</div>
  <div><span class="ck-dot">✓</span> La reserva aparece en "Mis reservas"</div>
</div>

<!--
SPEAKER: El test de incógnito es la prueba de fuego de los permisos. Si un
huésped sin cuenta no puede reservar, o puede editar barcos ajenos, hay que
ajustar el prompt de accesos.
-->

---
layout: center
class: ng-dark
section: PASO 5
---

<div class="kicker text-center">Paso 5a</div>
<div class="statement-sm">IA <span class="accent">dentro</span> del producto</div>
<p class="opacity-60 mt-6 text-xl text-center">Objetivo 4 · IA para tus usuarios, vía la pasarela de Lovable.</p>

<div class="pain-points">
  <div><span class="pain-dot">›</span> Botón "<span class="accent">Genera la descripción</span>" del anuncio</div>
  <div><span class="pain-dot">›</span> "<span class="accent">Sugiere un precio</span>" según barcos similares</div>
</div>

<!-- La pasarela de IA (AI gateway) — concepto -->

---
layout: center
class: ng-light
section: PASO 5
---

<div class="kicker text-center">Paso 5a · La pasarela de IA</div>

<h2 class="text-center">IA <span class="accent">sin gestionar claves</span></h2>

<div class="team-wants">
  <div>
    <h3 class="accent">El AI gateway de Lovable</h3>
    <ol>
      <li>Sin API keys que crear</li>
      <li>Consumo gestionado en tu cuenta</li>
      <li>Por defecto: Gemini Flash (rápido, barato)</li>
      <li>También OpenAI para casos complejos</li>
    </ol>
  </div>
  <div>
    <h3>Para qué sirve</h3>
    <ol>
      <li>Generar contenido (descripciones, ideas)</li>
      <li>Clasificar, resumir, analizar texto</li>
      <li>Cualquier tarea sobre los datos de tu app</li>
    </ol>
  </div>
</div>

<p class="shadow-punchline">Es la capa de IA de <strong>Lovable Cloud</strong>: añadir IA es solo otro prompt.</p>

<!--
SPEAKER (mención, no demo): crédito inicial (~1$/proyecto), modelo por defecto Gemini
Flash, opción OpenAI. Uso visible en Cloud → AI. Límite: la pasarela solo da una
selección de modelos (Google/OpenAI); si necesitas otro, vas por API clásica — justo 5b.
-->

<!-- ---- Paso 5a · detalle: prompt de IA en el producto → demo ---- -->

---
layout: center
class: ng-light
section: PASO 5
---

<div class="kicker text-center">Paso 5a · IA en el producto</div>

<h2 class="text-center">Una función de IA para tus <span class="accent">usuarios</span></h2>

<pre class="prompt-card">In the "List your boat" form, add a
"<span class="accent">Generate description with AI</span>" button.

When clicked:
- Send the boat's name, type, port and capacity to Lovable AI
- Generate an appealing 2-3 sentence description
- Fill the description field with the result (editable)

Bonus: a "<span class="accent">Suggest a price/day</span>" button based on similar boats.

Use Lovable AI.</pre>

<p class="demo-cue">▶︎ <span class="accent">Demo</span>: añadimos el botón y lo probamos en vivo.</p>

<!--
SPEAKER / DEMO: Mismo patrón que el "Generar ideas" de Spin the Wheel — la
competencia es transferible. Enseña que añadir IA es solo otro prompt, no un
proyecto aparte. Lovable AI no necesita claves: ya viene con Cloud.
-->

---
layout: center
class: ng-dark
section: PASO 5
---

<div class="kicker text-center">Paso 5b</div>
<div class="statement-sm">Conectar al <span class="accent">mundo</span></div>
<p class="opacity-60 mt-6 text-xl text-center">Objetivo 4 · datos y servicios externos vía API.</p>

<!-- ¿Qué es una API? — concepto -->

---
layout: center
class: ng-light
section: PASO 5
---

<div class="kicker text-center">Paso 5b · ¿Qué es una API?</div>

<h2 class="text-center">Cómo hablan dos <span class="accent">apps</span></h2>

<div class="pain-points">
  <div><span class="pain-dot">1</span> Tu app <span class="accent">pide</span> algo, con parámetros (ubicación, fechas…)</div>
  <div><span class="pain-dot">2</span> El servicio externo <span class="accent">responde</span>, normalmente en JSON</div>
  <div><span class="pain-dot">3</span> Tu app usa esos datos <span class="accent">frescos</span></div>
</div>

<p class="shadow-punchline">Ejemplo: <strong>qué hacer cerca del puerto</strong> durante tu reserva. La IA no lo sabe en tiempo real; una API sí.</p>

<!--
SPEAKER: API = el contrato para que dos apps se hablen. No hace falta saber programarlo:
hace falta saber qué pides y qué te devuelven. La documentación de la API es el mapa.
-->

---
layout: center
class: ng-light
section: PASO 5
---

<div class="kicker text-center">Paso 5b · Dos formas de conectar</div>

<h2 class="text-center">Conector nativo o <span class="accent">API por docs</span></h2>

<div class="team-wants">
  <div>
    <h3 class="accent">A · Conector nativo</h3>
    <ol>
      <li>Ya integrados: Slack, Stripe, Google Calendar, ElevenLabs…</li>
      <li>Autorizas la conexión y listo</li>
      <li>Ej: avisar por Slack cuando reservan un barco</li>
    </ol>
  </div>
  <div>
    <h3 class="accent">B · API por documentación</h3>
    <ol>
      <li>Cuando no hay conector</li>
      <li>Das a Lovable el enlace a los docs + tu API key</li>
      <li>Ej: con <strong>Linkup</strong>, qué hacer cerca del puerto</li>
    </ol>
  </div>
</div>

<p class="shadow-punchline">La clave (API key) se guarda en el <strong>almacén seguro</strong> de Lovable, nunca en el chat.</p>

<!--
SPEAKER: A (conector nativo) es lo rápido: Connectors → Manage → elige el servicio →
autoriza → úsalo en un prompt. B (API por docs) para todo lo demás: la doc + un
ejemplo de llamada es lo que Lovable necesita. Modo planificación para validar antes.
-->

---
layout: center
class: ng-light
section: PASO 5
---

<div class="kicker text-center">Paso 5b · El prompt (API por docs)</div>

<h2 class="text-center">Pídelo con la <span class="accent">documentación</span></h2>

<pre class="prompt-card">Add a "Things to do nearby" section using the Linkup API.

- On the boat detail page, search what to do around the
  boat's port (restaurants, activities, events).
- Use the Linkup API — docs: https://docs.linkup.so
- Store LINKUP_API_KEY in Lovable's secret manager
  (never hardcode it).</pre>

<p class="shadow-punchline">Crédito gratis en <span class="mono">linkup.so</span> con el código <strong class="accent nowrap">HACKBARNA20</strong>.</p>

<p class="demo-cue">▶︎ <span class="accent">Demo</span>: conector Slack en vivo; la API de Linkup si da tiempo.</p>

<!--
SPEAKER / DEMO: Demo segura = el conector Slack (rápido, sin claves). La API por docs
es más avanzada: enséñala con este prompt y, si hay tiempo, hazla en vivo. La API key
va al almacén seguro; el modo planificación valida parámetros (radio, nº de resultados)
antes de generar.
-->

---
layout: center
class: ng-dark
section: PASO 6
---

<div class="kicker text-center">Paso 6</div>
<div class="statement-sm">Deploy a <span class="accent">producción</span></div>
<p class="opacity-60 mt-6 text-xl text-center">Objetivo: app desplegada, conectada a BD y lista para enseñar.</p>

<!-- ---- Paso 6 · detalle: publicar → checklist "listo para enseñar" ---- -->

---
layout: center
class: ng-light
section: PASO 6
---

<div class="kicker text-center">Paso 6 · Publica</div>

<h2 class="text-center">De tu pantalla <span class="accent">al mundo</span></h2>

<div class="pain-points">
  <div><span class="pain-dot">1</span> Elige la <span class="accent">URL</span> (.lovable.app) y quién puede acceder</div>
  <div><span class="pain-dot">2</span> Metadatos: nombre, descripción, favicon, social image</div>
  <div><span class="pain-dot">3</span> <span class="accent">Escaneo de seguridad</span>: no te lo saltes</div>
  <div><span class="pain-dot">4</span> Revisa las integraciones (Slack, APIs…)</div>
  <div><span class="pain-dot">5</span> <span class="accent">Publish</span> → tu app está en línea</div>
</div>

<p class="shadow-punchline">El escaneo detecta datos expuestos <strong>antes</strong> que tus usuarios. Corrige y vuelve a escanear.</p>

<!--
SPEAKER / DEMO: Abre la URL en tu propio móvil en directo — el efecto "está vivo" es
el momento más potente del taller. El paso 3 es el importante: el scan detecta cosas
como emails o datos sensibles expuestos. Puedes darle contexto ("prototipo, datos
falsos") para los falsos positivos, pero no lo saltes. Si publicaste pronto (Paso 2),
aquí es solo "re-publicar".
-->

---
layout: center
class: ng-light
section: PASO 6
---

<div class="kicker text-center">Paso 6 · Para ir más lejos</div>

<h2 class="text-center">GitHub y <span class="accent">dominio propio</span></h2>

<div class="team-wants">
  <div>
    <h3 class="accent">Conecta GitHub</h3>
    <ol>
      <li>Copia del código + historial completo</li>
      <li>Sincronización en los dos sentidos</li>
      <li>Colaborar fuera de Lovable (repo privado)</li>
    </ol>
  </div>
  <div>
    <h3 class="accent">Dominio personalizado</h3>
    <ol>
      <li>De .lovable.app a tu-marca.com</li>
      <li>Cómpralo en Lovable o conecta uno existente</li>
      <li>Más credibilidad y fácil de recordar</li>
    </ol>
  </div>
</div>

<p class="shadow-punchline">Opcionales para hoy, pero es lo que separa un prototipo de un <strong>producto</strong>.</p>

<!--
SPEAKER (mención / show si da tiempo): GitHub = repo privado, commits como puntos de
guardado, sync bidireccional (editas en GitHub → aparece en Lovable). Dominio: la
propagación DNS puede tardar de minutos a 48 h. Tras publicar, la pestaña Analytics
muestra visitas, páginas y de dónde viene el tráfico — útil después del taller.
-->

---
layout: center
class: ng-dark
section: PASO 6
---

<div class="kicker text-center">Checkpoint · Paso 6 · listo para enseñar</div>

<div class="statement-sm">¿<span class="accent">Compartible?</span></div>

<div class="checkpoint">
  <div><span class="ck-dot">✓</span> URL pública que abre <span class="accent">sin tu portátil</span></div>
  <div><span class="ck-dot">✓</span> El flujo principal va de principio a fin (publicar → reservar)</div>
  <div><span class="ck-dot">✓</span> <span class="accent">Funciona en móvil</span></div>
</div>

<p class="shadow-punchline">Cambias algo después → vuelve a pulsar <strong>Publish</strong>. La preview <strong>no</strong> es la versión en línea.</p>

<!--
SPEAKER: Final de la Parte 1 (~3 h). Todos deberían tener un SaaS desplegado. Recalca
el gotcha: el botón Publish se activa cuando hay cambios sin publicar y se atenúa
cuando no hay nada nuevo. Justo después: el descanso, y luego la Parte 2 (tu turno).
-->

---
layout: center
class: ng-dark
section: PAUSA
---

<!-- ============================================================
     SLIDE — DESCANSO (entre Parte 1 y Parte 2)
     ============================================================ -->

<div class="kicker text-center">Pausa</div>

<div class="statement">Descanso <span class="accent">☕</span></div>

<p class="shadow-punchline">~10 min. Volvemos para construir <strong>lo tuyo</strong>.</p>

<!--
SPEAKER: Fin de la Parte 1. Estírate, café, preguntas sueltas. Anuncia la hora exacta
de vuelta. Después, la Parte 2 (tu turno).
-->

---
layout: center
class: ng-dark
section: TU TURNO
---

<!-- ============================================================
     SLIDE — TU TURNO (segunda parte: tiempo libre)
     ============================================================ -->

<div class="kicker text-center">Segunda parte · ~2 h</div>

<div class="statement-sm">Ahora te toca a ti. <span class="accent">Construye.</span></div>

<div class="pain-points">
  <div><span class="pain-dot">›</span> Adapta el clon de Airbnb a <span class="accent">tu nicho</span></div>
  <div><span class="pain-dot">›</span> …o arranca tu <span class="accent">propio proyecto</span> desde cero</div>
  <div><span class="pain-dot">›</span> Estoy aquí para desbloquearte mientras construyes</div>
</div>

<p class="shadow-punchline">
  ⏱ <strong>~90 min</strong> de construcción · <strong>check-in</strong> a mitad · luego showcase.
</p>

<!--
SPEAKER: Esta es la parte clave del taller. Deja que experimenten. Circula,
ayuda con prompts, datos y deploy. Anuncia el timebox y haz un check-in a la mitad.
-->

---
layout: center
class: ng-light
section: DECISIÓN
---

<!-- ============================================================
     SLIDE — EVALUAR: COSTE, LÍMITES, MADUREZ
     ============================================================ -->

<div class="kicker text-center">¿Cuándo usar Lovable?</div>

<div class="team-wants">
  <div>
    <h3 class="accent">Lovable brilla</h3>
    <ol>
      <li>MVPs y prototipos rápidos</li>
      <li>Validar una idea con usuarios reales</li>
      <li>Side-projects y herramientas internas</li>
    </ol>
  </div>
  <div>
    <h3>Considera un stack tradicional</h3>
    <ol>
      <li>Lógica muy específica o a gran escala</li>
      <li>Requisitos de coste/control estrictos</li>
      <li>Equipos grandes con CI/CD propio</li>
    </ol>
  </div>
</div>

<p class="seo-proof">Sé honesto sobre lo que <em>no</em> hicimos hoy: escalado, tests, seguridad avanzada.</p>

<!--
SPEAKER · coste: habla de créditos y planes con datos actuales (verifícalos antes
del taller). El idioma del prompt puede afectar al consumo — mídelo, no cites cifras de memoria.
-->

---
layout: center
class: ng-dark
section: SHOWCASE
---

<!-- ============================================================
     SLIDE — SHOWCASE (que comparta todo el mundo, no solo 3-4)
     Gap 9: canal/galería compartida para los links de todos.
     ============================================================ -->

<div class="kicker text-center">Showcase</div>

<div class="statement-sm">Enseña lo que <span class="accent">construiste.</span></div>

<div class="pain-points">
  <div><span class="pain-dot">›</span> 3–4 voluntarios lo enseñan en <span class="accent">60 s</span></div>
  <div><span class="pain-dot">›</span> <span class="accent">Todos</span> pegan su URL en la galería compartida</div>
</div>

<div class="slide-qr">
  <!-- TODO: sustituir por el QR real de la galería/canal (public/images/qr/). -->
  <img src="/memoji.png" alt="QR de la galería compartida (placeholder)" />
  <div class="slide-qr-label mono">galería compartida</div>
</div>

<!--
SPEAKER: Que nadie se quede sin enseñar. El QR lleva a un doc/canal donde cada
asistente pega su link — así la sala ve TODO lo construido, no solo a los voluntarios.
-->

<!-- Recursos y próximos pasos (cierre el bucle, Ch7.2) -->

---
layout: center
class: ng-light
section: RECURSOS
---

<div class="kicker text-center">Para seguir</div>

<h2 class="text-center">Recursos y <span class="braces accent">próximos pasos</span></h2>

<div class="team-wants">
  <div>
    <h3 class="accent">Aprende más</h3>
    <ol>
      <li><span class="mono">docs.lovable.dev</span>: documentación oficial</li>
      <li>Changelog: novedades cada semana</li>
      <li>Comunidad <strong>Hackbarna</strong> · <span class="mono">hackbarna.com</span></li>
    </ol>
  </div>
  <div>
    <h3 class="accent">Tu siguiente paso</h3>
    <ol>
      <li>Termina tu marketplace y compártelo</li>
      <li>Conecta una API real a tu nicho</li>
      <li>Construye algo para un usuario real</li>
    </ol>
  </div>
</div>

<p class="shadow-punchline">Truco pro: pega una página de la <strong>documentación</strong> en tu prompt para pedidos avanzados.</p>

<!--
SPEAKER: Cierra el bucle como el curso. Lo que aprendiste no es "Lovable", es crear
producto: cadrar, prompter, iterar, publicar. La herramienta cambia; el método queda.
-->

---
layout: center
class: ng-dark
section: FEEDBACK
---

<!-- ============================================================
     SLIDE FINAL — CIERRE + FEEDBACK (fusionadas en un solo cierre)
     ============================================================ -->

<div class="statement-sm">¡Gracias! <span class="braces accent nowrap">¿preguntas?</span></div>

<div class="flex justify-center mt-8">
  <img src="/images/qr/feedback.svg" alt="QR al formulario de feedback"
       style="width:15rem; height:15rem; background:#fff; border-radius:0.75rem; padding:0.6rem;" />
</div>

<p class="shadow-punchline">Déjame tu <span class="accent">feedback</span> en 1 minuto · <span class="mono">{{ $slidev.configs.handle }} · slng.ai</span></p>

<!--
SPEAKER: Slide final. Responde preguntas con el QR en pantalla; el enlace va al
formulario de feedback (Microsoft Forms). Deja el handle visible mientras recogen.
-->
