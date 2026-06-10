# ssartweek.com — sitio de San Salvador Art Week 2027

Sitio estático (HTML/CSS/JS, sin framework ni build). Rápido, listo para Cloudflare Pages.

## Estructura
```
ssartweek-website/
├── index.html              # Home (español)
├── satelite.html           # Eventos satélite
├── organizadores.html      # Organizadores y aliados
├── assets/
│   ├── css/tokens.css      # ← colores y fuentes (edita aquí para re-skin)
│   ├── css/styles.css      # todo el resto del diseño
│   ├── js/main.js          # navegación, animaciones y mapa de sedes
│   └── images/             # logos, elementos, social-share
├── llms.txt / llms-full.txt# perfil para asistentes de IA
├── robots.txt, sitemap.xml # SEO
├── site.webmanifest, favicons
└── _source/                # originales del cliente (no se publica)
```

## Cómo pedir cambios frecuentes
- **Cambiar un texto:** indícanos la página (Home / Satélite / Organizadores), la sección y el texto nuevo.
- **Cambiar un color o fuente:** se edita un solo archivo, `assets/css/tokens.css`.
- **Agregar galerías, patrocinadores, fechas del programa:** envíanos la lista (nombres, logos en PNG/SVG, enlaces) y la colocamos en las secciones que ya están marcadas como "Próximamente".
- **Formulario de inscripción:** cuando tengas el Google Form, pásanos el enlace y conectamos el botón "Abrir formulario".
- **Tickets:** cuando exista el enlace de pago, lo conectamos al botón "Comprar tickets".
- **Mapa de sedes:** las coordenadas están en `assets/js/main.js` (arreglo `SS_VENUES`). Son aproximadas; confírmalas contra Google Maps antes del lanzamiento.

## Pendientes de contenido (placeholders activos)
Galerías participantes · listado de patrocinadores y logos · formulario de inscripción (Google Form) · enlace de pago para tickets · programa detallado por sede y horario · versión en inglés.

## Imágenes
Las imágenes mostradas usan `.webp`. Los originales viven en `_source/`. Para reemplazar un logo, deja el original en `_source/logos-original/` y la versión web en `assets/images/logos/`.

## Contacto del proyecto
info@ssartweek.com · +503 6110 1000
