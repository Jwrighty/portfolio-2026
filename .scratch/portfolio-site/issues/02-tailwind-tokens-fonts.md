# Tailwind v4 + `@theme` tokens + self-hosted fonts

Status: done

## Parent

`.scratch/portfolio-site/PRD.md`

## What to build

Wire Tailwind v4 via `@tailwindcss/vite` with CSS-first config (no `tailwind.config.js`). Define the design system in a single `@theme` block — colours (near-black background, warm-grey text, muted text that clears WCAG AA on `#0f0f10`, accent `oklch(0.78 0.11 75)`), font families (Cormorant Garamond / Inter / JetBrains Mono), spacing, radii. Self-host the three fonts as Latin-subset woff2. Add a single `<link rel="preload">` for Cormorant 400 (the only above-the-fold display face). Verify on the placeholder index page that tokens drive rendering — a sample of body / display / mono type and the accent colour all render correctly with no FOIT/FOUT regressions.

## Acceptance criteria

- [ ] Tailwind v4 wired via `@tailwindcss/vite`; no `tailwind.config.js`
- [ ] Single `@theme` block defines colour, font, spacing, radius tokens
- [ ] Cormorant Garamond, Inter, JetBrains Mono self-hosted as Latin-subset woff2
- [ ] One `<link rel="preload">` for Cormorant 400 woff2
- [ ] No requests to fonts.googleapis.com or fonts.gstatic.com
- [ ] Muted text token clears 4.5:1 contrast on `#0f0f10` (verified)
- [ ] `prefers-reduced-motion: reduce` disables transitions globally
- [ ] Sample renders of display / body / mono type look correct in dev

## Blocked by

- `01-astro-pnpm-scaffold.md`
