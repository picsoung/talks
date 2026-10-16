# Taller · De idea a SaaS en 5 horas con Lovable

"Clona Airbnb para lo que quieras con Lovable" — taller práctico (5 h).
Deck creado desde `slides-template/` (branding compartido: cream + dark + gold).

## Run locally

```bash
npm install
npm run dev          # abre http://localhost:3030
```

## Export

```bash
npm run export-pdf   # → dist/slides.pdf  (npx playwright install chromium la 1ª vez)
```

## Estado: SKELETON

`slides.md` tiene la estructura completa con copy de marcador de posición.
Busca los comentarios `TODO:` para rellenar:

- Capturas/ilustraciones en `public/images/` (ahora todo apunta a `/memoji.png`).
- Slides de detalle/demo dentro de cada **Paso 1–6** (ahora son solo divisores).
- `venue:` en el frontmatter (ciudad/fecha del taller).

## Estructura

1. Título · 2. Intro personal · 3. Por qué yo (Lovable) · 4. Proyectos que he construido
5. Agenda · 6. El proyecto (Airbnb para tu nicho) · 7. Por qué vs. SaaS típico
8. Manos a la obra → Pasos 1–6 (divisores) · Cuándo usar Lovable · Cierre/CTA

Branding: ver `style.css`. No edites `style.css` / `layouts/` / `global-*.vue`
sin considerar portar el cambio a `../slides-template/` (ver `../CLAUDE.md`).
