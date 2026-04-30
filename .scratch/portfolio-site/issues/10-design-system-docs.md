# `docs/design-system.md`

Status: done

## Parent

`.scratch/portfolio-site/PRD.md`

## What to build

Concise `docs/design-system.md` documenting:

- Token reference (colour, typography, spacing, radii) sourced from the `@theme` block
- Font pairing rationale (Cormorant / Inter / JetBrains Mono)
- Component inventory: primitives, career components, project components, layout components
- How to swap a font pairing or accent colour by editing the tokens file

## Acceptance criteria

- [x] `docs/design-system.md` exists
- [x] Documents all tokens defined in `@theme`
- [x] Lists every component organised by directory (primitives / career / projects / layout)
- [x] Explains the one-file change to swap font pairing or accent colour
- [x] Concise — reads as a reference, not a tutorial

## Blocked by

- `02-tailwind-tokens-fonts.md`
- `04-primitives.md`
