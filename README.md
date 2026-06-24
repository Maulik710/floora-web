# Floora — Premium Surfaces Website

A high-end, minimal brand & catalog website for a ceramic and surface-materials
company (SPC, WPC, laminate, luxury vinyl, porcelain tile). Built with **Next.js 14
(App Router) + Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerendered)
npm start        # serve the production build
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, categories, why-us, featured, trust, testimonials, CTA |
| `/products` | Filterable catalog (material, finish, colour, style, size, room + search) |
| `/products/[slug]` | Product detail — gallery + zoom, specs, variants, spec-sheet download |
| `/about` | Brand story, mission, showroom imagery, milestones |
| `/gallery` | Masonry inspiration gallery filterable by room, with lightbox |
| `/contact` | Form, click-to-call/email, WhatsApp, hours, embedded map |

## Customer-connect features (site-wide)

- Sticky header with logo, nav, expandable search, inquiry counter, **Get Quote**
- Floating **WhatsApp / Call / Callback** action cluster on every page
- **Request a Quote** & **Request a Sample** modals on product pages
- Persistent **Inquiry list** (localStorage) → send multiple products as one combined inquiry
- **Callback** request ("leave your number") modal
- Newsletter signup + full footer with quick links, categories, contact & social
- Mobile click-to-call / click-to-email links

## Customising

- **Brand & contact details:** `lib/site.js` (phone, email, address, WhatsApp, hours, socials)
- **Products & filters:** `lib/products.js`
- **Colours / fonts / shadows:** `tailwind.config.js` + `app/globals.css`

## Design system

Warm-neutral luxury palette (warm white `#FAF8F5`, charcoal `#1C1B19`, sand/taupe,
clay accent `#B08D57`). Headings: Cormorant Garamond + Cinzel; body: Inter.
Soft shadows, generous whitespace, smooth scroll-reveal, `prefers-reduced-motion` respected.

> Imagery uses Unsplash photos as placeholders — swap the URLs in `lib/products.js`,
> `app/page.jsx`, `app/about/page.jsx` and `components/GalleryClient.jsx` for real product photography.
