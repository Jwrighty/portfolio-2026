# Connect consulting to the job-first homepage

Status: needs-triage

Type: AFK

## Parent

`.scratch/consulting-page/PRD.md`

## What to build

Make the consulting route discoverable from the existing homepage without changing the portfolio's primary employment narrative. Add the approved supporting sentence to Jason's introduction and a restrained internal “Consulting” action near the existing professional links.

Preserve the semantics of the social-links navigation by keeping the consulting route distinct from external social profiles. The finished first viewport must continue to communicate permanent-role availability, senior/principal frontend positioning, and the Tokyo-to-London relocation before consulting becomes a secondary path.

## Acceptance criteria

- [x] The homepage introduction adds: “Alongside product engineering, I take on selected web design and frontend consulting projects for small businesses and product teams.”
- [x] A visible internal “Consulting” action leads to `/consulting` without being mislabeled as a social link or presented as an external destination.
- [x] The action uses the portfolio's established text-link, focus, keyboard, and reduced-motion conventions.
- [x] “Open to new roles,” senior/principal frontend positioning, and “Tokyo → London, 2026” remain clear in the first viewport.
- [x] Career history continues to appear before projects, and the existing permanent-role footer remains unchanged.
- [x] The addition wraps cleanly at representative mobile widths and does not create competing vermilion signals in the first viewport.
- [x] The homepage and consulting route both succeed in the production build, with no broken internal navigation.

## Blocked by

- `.scratch/consulting-page/issues/01-consulting-identity-enquiry.md`


## Comments

**2026-08-04 — implemented.**

- `src/components/layout/Header.astro` — added the approved sentence as a second bio paragraph and a `Consulting` `TextLink` in the link row, outside the `<nav aria-label="Social links">` so the social navigation keeps its meaning. The link is muted with no `↗`, so it does not read as external and adds no vermilion to the first viewport.
- "Open to new roles", the senior/principal line, "Tokyo → London, 2026", the Work-before-Projects order and the footer are unchanged.
