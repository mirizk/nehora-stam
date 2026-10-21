# AGENTS.md

Single-page Hebrew (RTL) marketing site for a STAM Judaica business, built on TanStack Start + Tailwind v4 and deployed to Netlify.

## Structure

- `src/routes/__root.tsx` — HTML shell. Sets `lang="he" dir="rtl"`, site metadata, and loads Google Fonts (Frank Ruhl Libre, Heebo).
- `src/routes/index.tsx` — the entire landing page, split into section components (Header, Hero, TrustStrip, Services, Inspection, Trust, Contact, Footer). All copy lives in constants at the top of the file (`BUSINESS`, `PRODUCTS`, `INSPECTION_STEPS`, `BADGES`, `STATS`, `TESTIMONIALS`).
- `src/components/ContactForm.tsx` — AJAX Netlify Forms contact form with pending/success/error states.
- `public/contact-form.html` — hidden static copy of the form so Netlify detects it at build time. **Its fields must match `ContactForm.tsx` exactly** (name, phone, email, service, message, bot-field). The `service` options come from `SERVICES` in the component.
- `public/img/` — AI-generated product photography (hero, torah, tefillin, mezuzah).
- `src/styles.css` — Tailwind theme tokens: `ink`, `ink-soft`, `parchment`, `parchment-deep`, `gold`, `gold-light`, `font-serif`, `font-sans`, plus small utilities (`grain`, `gold-rule`, `rise` entrance animation).

## Conventions and decisions

- RTL first: layout relies on the document `dir="rtl"`; "forward" arrows use `ArrowLeft`. Phone numbers and emails get `dir="ltr"`.
- Images are always served through the Netlify Image CDN via the `img(name, width)` helper with `srcSet`, never the raw PNGs.
- The form POSTs to `/contact-form.html`, not `/`, because the SSR catch-all would swallow a POST to `/`. Netlify Forms is enabled for the site.
- Generated imagery deliberately avoids visible Hebrew lettering: AI-rendered scripture text is garbled, which this audience would notice. Keep that in mind when replacing images.
- Business details, stats and testimonials are placeholder copy to be replaced by the owner.
