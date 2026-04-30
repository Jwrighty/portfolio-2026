# Projects collection + posts scaffold + ProjectCard

Status: done

## Parent

`.scratch/portfolio-site/PRD.md`

## What to build

Two content collections plus index rendering:

- **Projects collection**: MDX files under `src/content/projects/`, Zod schema with `draft: z.boolean().default(false)` and optional `coverImage` / `screenshots` fields for future imagery. Three project files at v1: Billingual (visible, live), Kana Drive (visible, in development), Keelty Thatching (`draft: true`).
- **Posts collection**: schema defined, directory scaffolded with `.gitkeep`, no public routes, no nav link.
- `ProjectCard` component under `src/components/projects/` consumes the project content shape. Index page filters out drafts and renders visible projects with description, stack tags, and links to live site / repo. Each project card is an `<article>`. MDX bodies are not rendered at v1.

## Acceptance criteria

- [x] `src/content/projects/` contains three MDX files: Billingual, Kana Drive, Keelty Thatching
- [x] Project Zod schema validates frontmatter and includes `draft`, `coverImage`, `screenshots`
- [x] Posts collection schema defined; directory scaffolded with `.gitkeep`; no routes
- [x] `ProjectCard` renders inside `<article>`, uses `Tag` primitive for stack
- [x] Index page filters out `draft: true` projects (Keelty hidden)
- [x] Live-site and repo links open in new tab via `ExternalLink`
- [x] Section heading is `<h2>`
- [x] `astro build` validates collection schemas without error

## Blocked by

- `04-primitives.md`
- `05-header-bio.md`
