# Initialise Astro 5 + pnpm + MDX

Status: done

## Parent

`.scratch/portfolio-site/PRD.md`

## What to build

Bootstrap the repo: Astro 5 with static output (no Vercel adapter), pnpm as package manager, MDX integration enabled. Default `astro dev` and `astro build` succeed. A throwaway `src/pages/index.astro` renders something minimal so the dev loop is verifiable end-to-end. `.gitignore` covers Astro defaults plus `.env*` and `.DS_Store`. Short README (what it is, stack, dev/build commands).

## Acceptance criteria

- [x] `pnpm install` succeeds on a fresh clone
- [x] `pnpm dev` serves a placeholder index page
- [x] `pnpm build` produces a static `dist/` with no errors
- [x] MDX integration registered in `astro.config.mjs`
- [x] `.gitignore` includes Astro defaults, `.env*`, `.DS_Store`
- [x] README documents stack and dev/build commands; no badges, no screenshot
- [ ] Commit history uses conventional-commit style

## Blocked by

None - can start immediately
