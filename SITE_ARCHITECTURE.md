# Site Architecture

This project is a content-driven Next.js App Router scaffold inspired by a large digital marketing agency site.

## Important note

This codebase does not reproduce WebeDigital's proprietary copy, photography, branding assets, or source code verbatim. It mirrors the public information architecture and recurring layout patterns so you can build your own licensed implementation safely.

## File tree

```text
app/
  layout.tsx
  globals.css
  page.tsx
  about/page.tsx
  awards/page.tsx
  blog/page.tsx
  contact-us/page.tsx
  resources/
    case-studies/page.tsx
    whitepapers/page.tsx
  services/
    page.tsx
    seo-geo/page.tsx
    paid-media/page.tsx
    web-development/page.tsx
    content-pr/page.tsx
    branding-creative/page.tsx
    amazon/page.tsx

components/
  pages/
    home-page.tsx
  sections/
    home/
      home-hero.tsx
      channel-columns.tsx
      problem-section.tsx
      solution-section.tsx
      technology-section.tsx
      origin-story-section.tsx
      results-section.tsx
      testimonials-section.tsx
    page/
      page-hero.tsx
      simple-page-layout.tsx
      service-template.tsx
  site-shell/
    brand-mark.tsx
    container.tsx
    cta-banner.tsx
    site-footer.tsx
    site-frame.tsx
    site-header.tsx
  ui/
    art-panel.tsx
    eyebrow.tsx
    feature-grid.tsx
    section-heading.tsx
    stat-grid.tsx
  utils/
    cn.ts

data/
  home.ts
  navigation.ts
  pages.ts

lib/
  types.ts
```

## How it is organized

1. `app/`
   Route files only. Each page is intentionally thin and imports a page-level component or template.

2. `components/site-shell/`
   Shared frame pieces used across the whole site: header, footer, CTA banner, shell container, and brand mark.

3. `components/sections/home/`
   One file per homepage section. This is where you keep hero, channel features, problem block, solution block, technology block, origin story, results, and testimonials separated cleanly.

4. `components/sections/page/`
   Reusable templates for non-homepage routes. `simple-page-layout.tsx` is for broad informational pages. `service-template.tsx` is for service detail pages.

5. `components/ui/`
   Smaller reusable UI pieces.

6. `data/`
   All navigation labels, section copy, cards, metrics, and service definitions live here. If you want to update content without editing layout code, start here.

## Recommended next build steps

1. Replace placeholder art panels with licensed screenshots, illustrations, or photography.
2. Swap in final copy in `data/home.ts` and `data/pages.ts`.
3. Add real forms to `/contact-us`.
4. Add article or resource CMS integration if you need a real blog and whitepaper library.
5. If you want exact spacing from your own licensed design reference, add per-section tokens in `globals.css`.
