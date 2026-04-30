# Primitives library

Status: done

## Parent

`.scratch/portfolio-site/PRD.md`

## What to build

Pure presentational primitives under `src/components/primitives/` with no data dependencies: `Tag`, `Rule`, `SectionLabel`, `ExternalLink`, `SocialLinks`. `ExternalLink` enforces `rel="noopener noreferrer"` on `target="_blank"`. `SocialLinks` reads from `src/data/site.ts`. All primitives style via the `@theme` tokens — no hard-coded colours or fonts. Visible focus-visible outlines in the accent colour on interactive elements. No barrel files.

## Acceptance criteria

- [x] `Tag`, `Rule`, `SectionLabel`, `ExternalLink`, `SocialLinks` exist under `src/components/primitives/`
- [x] `ExternalLink` adds `rel="noopener noreferrer"` whenever `target="_blank"`
- [x] `SocialLinks` reads URLs from `src/data/site.ts`
- [x] Primitives use only `@theme` tokens — no inline colours or fonts
- [x] Focus-visible outlines render in the accent colour on all interactive primitives
- [x] No barrel files (`index.ts`) introduced
- [x] Each primitive can be visually demoed on a throwaway dev page

## Blocked by

- `02-tailwind-tokens-fonts.md`
