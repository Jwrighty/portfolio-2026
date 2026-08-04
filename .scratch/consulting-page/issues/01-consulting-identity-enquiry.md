# Launch consulting identity and enquiry path

Status: needs-triage

Type: AFK

## Parent

`.scratch/consulting-page/PRD.md`

## What to build

Publish a complete `/consulting` route that presents Jason Wright as an independent web designer and frontend consultant based in Meguro, Tokyo. The page should explain the three agreed services, provide a direct Gmail enquiry path, group the public business details required for administrative review, and offer a clear route back to the job-focused portfolio.

The route should feel native to the existing “Signal on the Stage” portfolio, remain fully static, use centrally managed business identity data, and ship with page-specific metadata and sitemap coverage. It must be useful to a genuine prospective client while remaining factual and restrained.

## Acceptance criteria

- [x] `/consulting` renders as a first-class statically generated page and is included in the generated sitemap.
- [x] The page identifies Jason Wright, web design and frontend consulting, and Meguro, Tokyo, Japan in one scannable business-details section.
- [x] The page states that Jason is available for selected projects and uses `jason.wrighty@gmail.com` for a working email action.
- [x] The page explains small-business websites, frontend consulting, and website improvements using the approved plain-language copy.
- [x] Business identity data that may change over time is centralized rather than duplicated throughout the page.
- [x] A descriptive internal link returns visitors to the main portfolio.
- [x] The page has consulting-specific title, description, canonical path, Open Graph metadata, and Twitter Card metadata through the existing metadata system.
- [x] The page reuses the existing typography, colors, measured column, hairline separators, text-link vocabulary, focus treatment, and reduced-motion conventions.
- [x] The page remains readable and operable at representative mobile and desktop widths, with keyboard navigation and a logical semantic heading structure.
- [x] The production build succeeds without new runtime dependencies, client-side form handling, or unsupported business claims.

## Blocked by

None - can start immediately


## Comments

**2026-08-04 — implemented.**

- `src/pages/consulting.astro` — the `/consulting` route: hero identity, services, selected work, business details, footer.
- `src/data/site.ts` — added `email` and a `business` object (proprietor, activity, location, availability); the page and its business-details list read from it rather than repeating the facts.
- `src/components/primitives/TextLink.astro` — same-tab text link (internal routes and `mailto:`), sharing the `draw-link` / `tap-target` / focus vocabulary with `ExternalLink` but without the external `↗`.
- `astro.config.mjs` — `trailingSlash: 'never'`, so the generated sitemap URL matches the canonical path built by `src/lib/meta.ts`.
- Verified: production build emits `dist/consulting/index.html`; sitemap lists `https://jasonwright.io/consulting`; title, description, canonical, OG and Twitter tags render from `buildMeta`; no horizontal overflow at 375px or at 200% text zoom; landmarks are banner → 3 regions → contentinfo with h1 → h2 → h3 order.
