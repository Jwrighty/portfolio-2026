# Public GitHub repo + Vercel deploy

Status: ready-for-human

## Parent

`.scratch/portfolio-site/PRD.md`

## What to build

Push the repo to a public GitHub repository named `portfolio-2026`, default branch `main`, no license file. Connect to Vercel via GitHub integration so `main` auto-deploys and PRs receive preview URLs. Site is reachable at `jasonwright.vercel.app` (soft-launch state). `astro.config.mjs` `site` already points at `https://jasonwright.io`; the domain switch is a separate one-line change once the domain is purchased.

This slice is **HITL** — it requires the user to authorise GitHub and Vercel and create the GitHub repo / Vercel project under their accounts.

## Acceptance criteria

- [ ] Public GitHub repo `portfolio-2026` exists with `main` as default branch
- [ ] No license file committed
- [ ] Vercel project linked to the repo via GitHub integration
- [ ] Push to `main` triggers a successful production deploy
- [ ] Opening a PR produces a preview URL
- [ ] Site reachable at `jasonwright.vercel.app`
- [ ] Real-user Web Vitals reported in Vercel Analytics / Speed Insights

## Blocked by

- `06-career-timeline.md`
- `07-projects-collection.md`
- `08-404-page.md`
- `09-sitemap-favicon-analytics.md`
