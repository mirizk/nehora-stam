# AGENTS.md

Single-page Hebrew (RTL) marketing site for a STAM Judaica business, built on TanStack Start + Tailwind v4. Prerendered to static HTML (`dist/client`) and hosted on Cloudflare Pages; it has no host-specific code.

## Structure

- `src/routes/__root.tsx` — HTML shell. Sets `lang="he" dir="rtl"`, site metadata, and loads Google Fonts (Frank Ruhl Libre, Heebo).
- `src/routes/index.tsx` — the entire landing page, split into section components (Header, Hero, TrustStrip, Services, Inspection, Trust, Contact, Footer). All copy lives in constants at the top of the file (`BUSINESS`, `PRODUCTS`, `INSPECTION_STEPS`, `BADGES`, `STATS`, `TESTIMONIALS`).
- `src/components/ContactForm.tsx` — AJAX contact form posting to Web3Forms (submissions are emailed to the owner), with pending/success/error states and a `bot-field` honeypot. The Web3Forms access key is the `WEB3FORMS_ACCESS_KEY` constant; it is public by design.
- `public/img/` — AI-generated product photography (hero, torah, tefillin, mezuzah): original PNGs plus pre-sized `<name>-<width>.webp` files.
- `public/og.jpg` (1200×630 social sharing image), `public/robots.txt`, `public/sitemap.xml` — SEO assets. Update `lastmod` in the sitemap when content changes meaningfully.
- Structured data (schema.org `Store` JSON-LD) is built from `BUSINESS` in `index.tsx`; canonical/Open Graph tags live in `__root.tsx`. Keep these in sync when business details change.
- `src/styles.css` — Tailwind theme tokens: `ink`, `ink-soft`, `parchment`, `parchment-deep`, `gold`, `gold-light`, `font-serif`, `font-sans`, plus small utilities (`grain`, `gold-rule`, `rise` entrance animation).

## Conventions and decisions

- RTL first: layout relies on the document `dir="rtl"`; "forward" arrows use `ArrowLeft`. Phone numbers and emails get `dir="ltr"`.
- Images are served as pre-sized WebP via the `img(name, width)` helper with `srcSet`, never the raw PNGs. When replacing an image, regenerate the WebP files at the widths used in `index.tsx`.
- Keep the build fully static (prerender in `vite.config.ts`); avoid server functions or host-specific plugins so the site stays portable.
- Generated imagery deliberately avoids visible Hebrew lettering: AI-rendered scripture text is garbled, which this audience would notice. Keep that in mind when replacing images.
- Business details, stats and testimonials are placeholder copy to be replaced by the owner.
