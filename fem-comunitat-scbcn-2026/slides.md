---
# FEM COMUNITAT · SOFTWARE CRAFTERS BARCELONA 2026
# 7-minute lightning talk · Spanish
# Design reused from picsoung/talks/confessions-devoxx-2026
# Cream / ink / gold, bold statements, JetBrains Mono chrome
# Story arc: antes -> ahora -> paradoja -> IA -> personas -> acción
# ============================================================
theme: default
aspectRatio: 16/9
canvasWidth: 1920
title: "Fem comunitat: hay una comunidad para eso"
info: |
  De unos pocos meetups a una comunidad para casi cualquier cosa.
  ¿Estamos más conectados o más perdidos? Una mirada a las
  comunidades tech de Barcelona y cómo cambian con la IA.
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
venue: "Software Crafters BCN · 2026"
handle: "@picsoung"
class: ng-dark
hideVenue: true
---

<div class="cover-grid">
  <div class="cover-copy">
    <div class="kicker">BARCELONA TECH COMMUNITIES · 7 MIN</div>
    <h1 class="cover-title">Fem<br/><span class="accent">comunitat.</span></h1>
    <div class="cover-subtitle">Hay una comunidad para eso</div>
    <div class="cover-signature mono">Nico Grenié <span class="accent">{ @picsoung }</span></div>
  </div>
  <div class="hero-network" aria-hidden="true">
    <div class="network-ring ring-one"></div>
    <div class="network-ring ring-two"></div>
    <div class="network-line line-a"></div>
    <div class="network-line line-b"></div>
    <div class="network-line line-c"></div>
    <div class="network-line line-d"></div>
    <span class="network-node node-a"></span>
    <span class="network-node node-b"></span>
    <span class="network-node node-c"></span>
    <span class="network-node node-d"></span>
    <span class="network-node node-e"></span>
    <span class="network-node node-f"></span>
    <span class="network-center">{ }</span>
  </div>
</div>

<!--
⏱ 0:25 · Apertura
Presentarte en una frase: «Llevo más de diez años metido en comunidades tech
(y últimamente organizo HackBarna y Hack Nights aquí en Barcelona)».
Pregunta que abre: «¿Os habéis dado cuenta de que ahora hay un meetup para todo?»
No alargar la biografía; pasar directo al contraste temporal.
-->

---
layout: center
class: ng-light
section: ANTES
---

<div class="year-tag mono">2016<span class="year-line"></span> BARCELONA</div>

<h1 class="statement statement-left">Pocos meetups.<br/><span class="gold-on-light">Las mismas caras.</span></h1>

<div class="old-community" aria-hidden="true">
  <div class="person-dot">N</div><div class="person-dot">M</div><div class="person-dot">J</div>
  <div class="person-dot">A</div><div class="person-dot">R</div><div class="person-dot">?</div>
  <span class="people-caption mono">Si ibas a uno, acababas conociendo a todos.</span>
</div>

<!--
⏱ 0:40 · Hace diez años
Evocar aquella Barcelona: menos eventos, mucha gente coincidiendo,
una forma más simple de enterarte de qué pasaba. El «un meetup a la semana»
es una exageración intencionada, no lo presentes como una estadística.
Deja una sonrisa y avanza: «Y entonces se multiplicó todo».
-->

---
layout: center
class: ng-dark
section: AHORA
---

<div class="year-tag mono">2026<span class="year-line"></span> BARCELONA</div>

<h1 class="statement statement-left">Hay una comunidad<br/>para <span class="accent">casi todo.</span></h1>

<div class="topic-cloud">
  <span>AI agents</span><span>Python</span><span>Open source</span>
  <span>Rust</span><span>Vibecoding</span><span>Producto</span>
  <span>Startups</span><span>Design systems</span><span>Data</span>
  <span>Hackathons</span><span>Hardware</span><span>Cloud</span>
</div>

<!--
⏱ 0:40 · 2026
No hacer inventario exhaustivo. Señalar 3-4 ejemplos divertidos.
Más eventos, más nichos, más maneras de entrar en tech. Es algo positivo.
Pero el volumen tiene una cara B.
-->

---
layout: center
class: ng-dark slide-punchline
section: LA BROMA
---

<div class="kicker centered">THERE'S AN APP FOR THAT →</div>
<h1 class="statement mega">Hay una<br/><span class="accent">comunidad</span><br/>para eso.</h1>
<div class="mono punchline-foot">Sí, incluso para esa herramienta que salió el martes.</div>

<!--
⏱ 0:30 · El guiño
Pausa después de «para eso». Dejar respirar la broma.
Si la sala responde, pregunta quién organiza o va regularmente a un meetup.
Hacer de puente hacia la pregunta seria.
-->

---
layout: center
class: ng-light
section: LA PARADOJA
---

<div class="kicker">LA PREGUNTA INCÓMODA</div>
<h1 class="statement statement-left dark-ink">Más eventos.<br/><span class="gold-on-light">¿Más conexiones?</span></h1>

<div class="two-sides">
  <div class="side"><div class="side-icon">↗</div><div class="side-label">Más opciones</div><div class="side-desc">más puertas de entrada</div></div>
  <div class="side"><div class="side-icon">?</div><div class="side-label">Más ruido</div><div class="side-desc">¿por dónde empiezo?</div></div>
</div>

<!--
⏱ 0:55 · La tensión
Es la idea central. Si estás empezando o cambiando de sector,
la oferta puede agobiar: FOMO, agendas llenas, grupos de WhatsApp,
tantos eventos que cuesta saber dónde encajas.
Una sala llena no equivale automáticamente a una comunidad fuerte.
No se trata de criticar a los organizadores: es una invitación a conectar mejor.
-->

---
layout: center
class: ng-dark
section: IA
---

<div class="kicker centered">Y ENTONCES LLEGÓ LA IA</div>
<h1 class="statement statement-narrow">Puedes aprender<br/><span class="accent">solo.</span></h1>
<h2 v-click class="reveal-line">Pero no tienes por qué hacerlo.</h2>

<!--
⏱ 0:55 · IA + comunidad
La IA responde dudas en segundos, te ayuda a prototipar, te enseña lo básico.
Pero no sustituye a alguien que te escucha, te aconseja o te presenta a un equipo.
El valor de una comunidad no es solo el conocimiento: también son la confianza,
los amigos y los proyectos que nacen cuando coincidimos.
El segundo mensaje entra con un clic.
-->

---
layout: center
class: ng-light
section: EN LA PRÁCTICA
---

<div class="kicker">LO QUE HE VISTO ORGANIZANDO EVENTOS</div>
<h1 class="case-headline">Lo mejor suele pasar<br/><span class="gold-on-light">entre las charlas.</span></h1>

<div class="story-frames">
  <div class="story-card">
    <div class="story-image-placeholder"><span class="placeholder-mark">+</span><div>Foto de HackBarna<br/><small>TODO · imagen real</small></div></div>
    <div class="story-label">HackBarna</div>
  </div>
  <div class="story-card">
    <div class="story-image-placeholder"><span class="placeholder-mark">+</span><div>Foto de Hack Nights<br/><small>TODO · imagen real</small></div></div>
    <div class="story-label">Hack Nights</div>
  </div>
</div>

<div class="case-bottom mono">Una conversación → una idea → alguien con quien construir.</div>

<!--
⏱ 1:10 · Un ejemplo real
TODO IMPORTANTE: sustituir los dos recuadros por fotos propias en public/images/.
Contar UNA historia concreta de HackBarna o Hack Nights: alguien llega sin equipo,
encuentra a otra persona, aprende algo o sigue un proyecto tras el evento.
Evitar narrar cifras y sponsors: el mensaje son las relaciones.
-->

---
layout: center
class: ng-light
section: POR DÓNDE EMPEZAR
---

<div class="kicker">SI ESTÁS UN POCO PERDIDO...</div>
<h1 class="steps-title">No hace falta<br/><span class="gold-on-light">ir a todo.</span></h1>

<div class="action-steps">
  <div class="action-step"><div class="step-num mono">01</div><div class="step-text">Elige <strong>una</strong> comunidad.</div></div>
  <div class="action-step"><div class="step-num mono">02</div><div class="step-text">Vuelve una segunda vez.</div></div>
  <div class="action-step"><div class="step-num mono">03</div><div class="step-text">Ayuda a alguien.</div></div>
</div>

<!--
⏱ 1:05 · Consejos concretos
Que no sientan que deben ir a cinco meetups a la semana.
Elige una comunidad según intereses, no según la moda.
La segunda vez ya reconoces a alguien. Presentarte y hacer preguntas vale.
Y contribuir puede ser tan simple como responder una duda o presentar a dos personas.
-->

---
layout: center
class: ng-dark closing-slide
section: FIN
---

<div class="kicker centered">FEM COMUNITAT</div>
<h1 class="statement closing-headline">La comunidad<br/>no se consume.<br/><span class="accent">Se construye.</span></h1>
<div class="closing-footer mono">Nos vemos en el próximo meetup. &nbsp; <span class="accent">@picsoung</span></div>

<!--
⏱ 0:40 · Cierre
«No hace falta fundar otro grupo. A veces basta con aparecer, volver,
y echar una mano a la persona que llega por primera vez».
Pausa. Agradecer. Dejar la última frase en pantalla.
Total previsto: 7:00 (25+40+40+30+55+55+70+65+40 s).
-->
