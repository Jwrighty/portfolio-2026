# Header + bio section on index

Status: done

## Parent

`.scratch/portfolio-site/PRD.md`

## What to build

`src/components/layout/Header.astro` and a bio block composed onto `src/pages/index.astro`. Within five seconds a visitor should see Jason's name, seniority, location ("Tokyo → London, 2026"), availability ("Open to new roles"), short bio, and contact links (GitHub, LinkedIn) above the fold. Layout is the editorial column (max-width ~640px), dark-only. Single `<h1>`. Semantic `<header>` and `<main>` landmarks. Copy at this stage is placeholder — the revision pass is issue 12.

## Acceptance criteria

- [x] `Header` component renders name + concise bio + location + availability
- [x] Contact links (GitHub, LinkedIn) visible above the fold via `SocialLinks`
- [x] Layout uses editorial column max-width ~640px
- [x] Single `<h1>` on the page
- [x] `<header>` and `<main>` landmarks present
- [x] Renders correctly on mobile viewport
- [x] Copy is placeholder; location reads "Tokyo → London, 2026", availability reads "Open to new roles"

## Blocked by

- `03-baselayout-meta-builder.md`
- `04-primitives.md`
