# CLAUDE.md — operating brief for ssartweek.com

Read this first on any future session for this site.

## Project
- **Site:** San Salvador Art Week 2027 — cultural event / festival site.
- **Domain:** ssartweek.com (already owned).
- **Folder / repo name:** `ssartweek-website` / `ssartweek`.
- **Build type:** Business (organization / event), multi-page.
- **Client / organizer:** Fundación Padilla For The Arts (MACA Centroamérica, https://macacentroamerica.org/). Contact: info@ssartweek.com, +503 6110 1000.

## Language status — IMPORTANT
- **Spanish-first.** The Spanish site is the primary site and currently lives at the **root** (`/index.html`, `/satelite.html`, `/organizadores.html`), not under `/es/`. This is a deliberate deviation from the usual EN-at-root / ES-at-`/es/` convention because the client wanted Spanish fully done first.
- **English is a later phase.** When approved, add the English mirror (recommended: `/en/` or restructure ES into `/es/` with EN at root — decide with the client) and turn on the language switcher (currently ES active, EN shown muted as "próximamente"). Update hreflang + sitemap accordingly.

## Design
- Aesthetic chosen by client: **editorial minimal** (white space, refined type, sparing color).
- Tokens in `assets/css/tokens.css`; all other styling in `assets/css/styles.css`. No raw hex in HTML.
- Fonts: Space Grotesk (display) + Inter (body).
- Palette pulled from the ARTWEEK + SSACO logos. See `brand/brand.md`.

## Pages & key sections
- `index.html`: hero, visión ("Territorios en Transformación"), experiencias, **SSACO + MAD EXPO highlights**, galerías (placeholder), itinerario (5 días), **mapa de sedes interactivo** (Leaflet), inscripción + tickets (placeholders), partners (tiers + logo wall placeholder), contacto.
- `satelite.html`: fiestas/eventos (placeholders), Fundación Padilla, contacto.
- `organizadores.html`: SSACO, Fundación Padilla, MAD EXPO, objetivos, aliados.

## Interactive map
- Leaflet 1.9.4 + CARTO light tiles. Venue data is the `SS_VENUES` array in `assets/js/main.js`. Coordinates are **approximate** — confirm against Google Maps before launch. Groups: metro (teal), costa (coral), region (amber).

## Open content placeholders (all marked "Próximamente")
Galleries list · sponsor logos · inscripción Google Form link · ticket payment link · detailed per-venue schedule · English version. Wire each up as the client supplies it.

## SEO / AI-findability
Present: per-page `<head>` SEO, Festival + Organization JSON-LD, llms.txt, llms-full.txt, robots.txt, sitemap.xml, favicon stack, manifest, OG/Twitter share image. Re-run sitemap `lastmod` on meaningful changes.

## Footer credit
EKY credit ("Hecho con amor por everybodyknowsyou.") is present and inlined. Confirm with the client/Nelson whether to keep it on this institutional event site or remove it before launch.

## Deploy
Not deployed yet. Next stage: **cloudflare-pages-deploy** (GitHub repo + Cloudflare Pages + connect ssartweek.com). `_source/` and `brand/` are excluded from the deploy.

## Status
First reviewable build complete (Spanish, all three pages). Awaiting Nelson's review before full content pass + deploy.
