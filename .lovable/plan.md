# Garg Telecom — Corporate Website Plan

A multi-page, fully responsive corporate site for "Garg Telecom" with an enterprise-grade navy + electric-blue identity, built on the existing TanStack Start + Tailwind v4 stack.

## Design System (src/styles.css)

Override the existing tokens with a telecom-corporate palette (all oklch):
- `--background`: crisp white
- `--foreground`: deep navy (~oklch(0.20 0.05 260))
- `--primary`: deep navy blue — used for headers, primary text, dark sections
- `--primary-foreground`: white
- `--accent`: vibrant electric blue (~oklch(0.65 0.20 250)) — CTAs, icons, highlights
- `--secondary`: light navy-tinted gray for surfaces
- `--muted` / `--muted-foreground`: subtle cool grays
- `--ring`: electric blue
- Dark mode mirrors with navy background, electric-blue accent
- Add `--shadow-card` and `--gradient-hero` (navy → electric blue) tokens for premium feel

Typography: load Inter via Google Fonts in `__root.tsx` head links; set as default sans in styles.css.

## Routes (file-based, each with its own head() metadata)

```
src/routes/
  __root.tsx         # add Inter font link + global Header/Footer wrap via Outlet
  index.tsx          # Home (hero, services preview, why-choose, testimonials, CTA)
  services.tsx       # Full services grid + detail cards
  enterprise.tsx     # Enterprise Solutions
  about.tsx          # About Us — story, mission, infrastructure
  support.tsx        # Support — 24/7 info, FAQ, ticket CTA
  contact.tsx        # Contact form + Karol Bagh address + map placeholder
```

Each route sets unique title, description, og:title, og:description.

## Shared Components (src/components/)

- `Header.tsx` — sticky, backdrop-blur, logo "Garg Telecom" (bold), nav links via TanStack `<Link>`, accent "Get a Quote" button. Mobile: Sheet drawer.
- `Footer.tsx` — 4 columns (Brand+address, Quick Links, Legal, Social), copyright "© 2026 Garg Telecom."
- `Hero.tsx` — gradient navy background, headline "Empowering Connections. Enabling the Future.", subheadline, two CTAs.
- `ServicesGrid.tsx` — 4 cards with lucide icons (Wifi, Network, Phone, Server) for Broadband/Fiber, Enterprise Network, Cloud & VoIP, Data Center. Hover lift + accent border.
- `WhyChoose.tsx` — 4-column trust indicators with icons (ShieldCheck, Headphones, Cable, TrendingUp).
- `Testimonials.tsx` — scrolling logo marquee (CSS animation) + 3 review cards.
- `ContactSection.tsx` — used on contact page and home: form (Name, Email, Phone, Company, Message) using shadcn Form + zod validation; address block (Karol Bagh, New Delhi, Delhi - 110007), phone +91-11-XXXX-XXXX, support@gargtelecom.in; map placeholder div with iframe-sized aspect.
- `SectionHeading.tsx` — reusable eyebrow + title + subtitle.

## Imagery

Use Unsplash URL placeholders (fiber optics, server rooms, telecom towers, support teams) — no image generation needed for v1. Lazy-loaded with proper alt text.

## Form behavior

Client-side only for v1: zod schema, toast on submit via existing sonner; no backend wiring. Note in plan that Lovable Cloud can be enabled later to persist submissions.

## SEO & Quality

- Semantic HTML (single H1 per route, proper section/nav/footer)
- Responsive: mobile-first Tailwind; test breakpoints sm/md/lg
- Smooth hover transitions, shadow-card on service cards
- All colors via semantic tokens — no raw hex in components

## Out of scope (v1)

- Real Google Maps API (placeholder iframe instead)
- Backend persistence for contact form
- Auth / customer portal
- CMS for blog