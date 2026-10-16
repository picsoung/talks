# PRD — SuperBoatly (ejemplo)
### Un "Airbnb de barcos" · documento de referencia del taller

> Esto es un **PRD de una página** como ejemplo. No hace falta rellenarlo entero para
> empezar en Lovable — sirve para ver cómo se formaliza un encuadre. Para tu propio
> proyecto, adapta cada sección a tu nicho.

---

## 1. Intención del producto

Un marketplace de dos lados para **alquilar barcos entre particulares**. Los propietarios
publican sus barcos; quienes buscan una salida en barco los encuentran, comparan y reservan.
El objetivo de la v1 no es solo que funcione, sino que sea **agradable de usar** desde el primer minuto (MLP).

---

## 2. Usuarios y roles

| Rol | Acceso | Puede |
|-----|--------|-------|
| **Visitante** | Sin cuenta | Navegar, buscar y ver fichas de barcos |
| **Anfitrión** | Con cuenta (email + contraseña) | Publicar y gestionar sus barcos; ver sus reservas |
| **Huésped** | Con datos mínimos (nombre + email) | Reservar un barco; ver sus reservas |

> Un mismo usuario puede ser anfitrión y huésped.

---

## 3. Funcionalidades del MLP (dentro del scope)

- Página principal con **cuadrícula de barcos** (foto, nombre, puerto, precio/día)
- **Búsqueda y filtros** (puerto, tipo de barco, precio)
- **Ficha de barco**: galería, descripción, capacidad, precio, botón "Reservar"
- **Publicar un barco** (formulario, solo anfitriones autenticados)
- **Reservar** (elegir fechas + datos de contacto)
- **Persistencia** de datos (Lovable Cloud)
- **Autenticación** del anfitrión
- Diseño **moderno, mobile-first, en español**

## 4. Fuera del scope (por ahora)

- Pagos reales / pasarela de pago
- Mensajería entre usuarios
- Reseñas y valoraciones
- Precios dinámicos, cupones
- Multi-idioma
- Notificaciones (email / push)
- App nativa

---

## 5. Parcours de usuario

**Anfitrión**
1. Se registra / inicia sesión
2. Pulsa "Publica tu barco" → rellena el formulario (con opción de IA para la descripción)
3. Su barco aparece en la cuadrícula
4. Consulta sus reservas en "Mis barcos"

**Huésped**
1. Llega a la app (sin cuenta), busca y filtra
2. Abre la ficha de un barco
3. Pulsa "Reservar" → elige fechas → introduce nombre + email
4. La reserva queda registrada

---

## 6. Reglas y comportamientos

- Un visitante **sin cuenta** puede navegar y reservar; **no** puede publicar.
- Un anfitrión solo puede **editar o borrar sus propios** barcos.
- No se puede reservar un barco para fechas ya ocupadas.
- El enlace a una ficha debe poder **compartirse** (URL pública).

---

## 7. Modelo de datos (resumen)

- **profiles** — usuario (puede ser anfitrión y/o huésped)
- **boats** — nombre, descripción, puerto, precio_día, capacidad, fotos, `→ owner_id`
- **bookings** — `→ boat_id`, `→ guest_id`, fecha_inicio, fecha_fin, estado

---

## 8. Jalones de construcción

1. **Concepto** — UI con datos ficticios
2. **Interfaz** — diseño + iteración
3. **Datos reales** — backend + auth (modelo de arriba)
4. **Al mundo** — IA (generar descripción / sugerir precio) o servicio externo
5. **En línea** — desplegar y compartir

---

*Tip: puedes pegar este PRD (o partes) en el **modo planificación** de Lovable, o usar
ChatGPT/Claude para generar uno parecido para tu propio nicho antes de empezar.*
