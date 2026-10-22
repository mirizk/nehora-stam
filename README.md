# נהורא — STAM Judaica landing page

A Hebrew, right-to-left landing page for a STAM (סת״ם) Judaica business that sells Torah scrolls, Tefillin and Mezuzahs and offers a Mezuzah/Tefillin inspection service.

The page includes a full-bleed hero, a trust strip, product cards for each category, a dedicated inspection-service section with a four-step process, trust badges with customer testimonials, and a contact form whose submissions are emailed via Web3Forms.

## Technologies

- TanStack Start (React 19) with file-based routing
- Tailwind CSS v4 (theme tokens in `src/styles.css`)
- Web3Forms for contact submissions
- Pre-sized responsive WebP images
- Static prerendered build (`pnpm build` → `dist/client`), hosted on Cloudflare Pages
- Google Fonts: Frank Ruhl Libre (headings) and Heebo (body)

## Running locally

```bash
pnpm install
pnpm dev
```

## Before launch

Business details (name, phone, email, address, opening hours), the headline statistics and the testimonials are sample copy. Update them in `src/routes/index.tsx` (the `BUSINESS`, `STATS` and `TESTIMONIALS` constants). Form submissions arrive by email to the address the Web3Forms access key was created with.
