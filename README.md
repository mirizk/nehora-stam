# בית הסופר — STAM Judaica landing page

A Hebrew, right-to-left landing page for a STAM (סת״ם) Judaica business that sells Torah scrolls, Tefillin and Mezuzahs and offers a Mezuzah/Tefillin inspection service.

The page includes a full-bleed hero, a trust strip, product cards for each category, a dedicated inspection-service section with a four-step process, trust badges with customer testimonials, and a contact form whose submissions are collected by Netlify Forms.

## Technologies

- TanStack Start (React 19) with file-based routing
- Tailwind CSS v4 (theme tokens in `src/styles.css`)
- Netlify Forms for contact submissions
- Netlify Image CDN for responsive WebP images
- Google Fonts: Frank Ruhl Libre (headings) and Heebo (body)

## Running locally

```bash
pnpm install
netlify dev --port 8889
```

Using `netlify dev` is recommended so the Image CDN URLs and form handling are emulated locally.

## Before launch

Business details (name, phone, email, address, opening hours), the headline statistics and the testimonials are sample copy. Update them in `src/routes/index.tsx` (the `BUSINESS`, `STATS` and `TESTIMONIALS` constants). Form submissions appear in the Netlify dashboard under Forms; email notifications can be enabled there.
