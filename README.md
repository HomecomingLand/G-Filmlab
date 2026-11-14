# G-Filmlab

Website for G-Filmlab, the masterclasses of Gert Embrechts. Static site built with Astro.

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # output in dist/
```

## Where things live

- `src/content/courses/` — one Markdown file per course (file name = URL `/cursussen/<name>/`).
  Frontmatter feeds the cards and the "Praktisch" box; the body is the course text.
  Files starting with `_` are ignored.
- `src/site.config.ts` — email, phone, address, form endpoint.
- `src/styles/theme.css` — colours and fonts (style modelled on bfi.org.uk and afi.com: Jost caps headings, Inter text, Courier Prime accent).
- `src/views/*.astro` — page layouts and copy (home, cursussen, over Gert, contact, inschrijven).
- `public/images/` — photos and logo.
- `shared/` — layout components and base CSS shared with the other Embrace Evolve sites.

## Cloudflare Pages

Build command `npm run build`, output directory `dist`, environment variable `NODE_VERSION=22`.
Forms: paste a form endpoint (Formspree, Basin, Web3Forms …) into `formEndpoint` in `src/site.config.ts`.
Domain: g-filmlab.org (set in `astro.config.mjs`).
