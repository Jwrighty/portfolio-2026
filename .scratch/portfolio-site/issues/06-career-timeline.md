# Career timeline

Status: done

## Parent

`.scratch/portfolio-site/PRD.md`

## What to build

Career data as a typed TypeScript array in `src/data/career.ts` (companies, dates, role titles, headline outcomes, expandable achievements, stack tags). `CompanyBlock` and `RoleEntry` components under `src/components/career/`. Each role's headline leads with impact ("reduced load time 42.77%"), and additional achievements are revealed via native `<details>`/`<summary>` with a ~200ms height transition (disabled under `prefers-reduced-motion: reduce`). Role titles, companies, dates, and stack tags appear as greppable plain text in the rendered HTML for ATS scanning. Section is a real `<h2>` and renders on the index page.

## Acceptance criteria

- [x] `src/data/career.ts` exports a typed array of companies/roles
- [x] `CompanyBlock` and `RoleEntry` exist under `src/components/career/`
- [x] Each role headline leads with impact, not activity
- [x] Expansion uses native `<details>`/`<summary>` — no client JS
- [x] `<details>` height transition ~200ms, disabled under reduced-motion
- [x] Stack tags rendered as plain text via the `Tag` primitive
- [x] Section heading is `<h2>`
- [x] Keyboard navigation works without extra ARIA
- [x] Renders correctly on the index page

## Blocked by

- `04-primitives.md`
- `05-header-bio.md`
