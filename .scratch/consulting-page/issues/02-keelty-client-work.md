# Feature Keelty as client work

Status: needs-triage

Type: AFK

## Parent

`.scratch/consulting-page/PRD.md`

## What to build

Add Keelty Master Thatcher to the consulting page as the single selected client-work example. Present the project for a prospective client rather than as a technology-first portfolio card: show the work clearly, explain Jason's actual contribution across structure, visual design, development, performance, and technical SEO, and provide a direct path to the live website.

Reuse the existing Keelty project entry for stable factual fields and imagery so the consulting presentation cannot silently drift from the main portfolio. Keep the consulting-specific narrative close to the consulting page, and do not introduce unsupported outcomes, testimonials, revenue, client-scale, or commissioning claims.

## Acceptance criteria

- [x] The consulting page prominently presents Keelty Master Thatcher as its sole selected client-work example.
- [x] The project title, live URL, cover image, status, and suitable summary fields reuse the existing project entry as their factual source of truth.
- [x] The visible narrative accurately describes Jason's contribution across site structure, visual design, development, performance, and technical SEO.
- [x] A descriptive “Visit the website” action opens the live Keelty website with correct external-link behavior.
- [x] The Keelty image is optimized through the existing image pipeline and has meaningful alternative text.
- [x] The presentation follows the consulting page's client-oriented hierarchy rather than duplicating the existing technology-stack disclosure card.
- [x] The presentation remains coherent at mobile and desktop widths and is fully navigable by keyboard.
- [x] No invented metric, testimonial, revenue claim, client-volume claim, or unsupported description of how the work was commissioned appears.
- [x] The production build succeeds with the Keelty content and image included.

## Blocked by

- `.scratch/consulting-page/issues/01-consulting-identity-enquiry.md`


## Comments

**2026-08-04 — implemented.**

- `src/components/consulting/SelectedWork.astro` — renders a project entry in client-facing form. Title, status, live URL and cover image come from the `projects` collection entry; the summary and contribution list are passed in from the consulting page, so the narrative stays page-local while the facts stay single-sourced.
- Contributions cover structure, visual design, development, and performance/technical SEO, drawn from the existing `keelty-thatching.mdx` body — no metrics, testimonials, revenue, client-volume, or commissioning claims added.
- The cover image goes through `astro:assets` (`widths=[480, 720, 1080, 1440]`, lazy) and carries descriptive alt text.
