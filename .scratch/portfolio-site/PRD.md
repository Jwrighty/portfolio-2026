# Portfolio Site (v1)

Status: needs-triage

## Problem Statement

Jason needs a personal site that hiring managers, recruiters skimming for screening, and senior engineering peers can land on and quickly form an accurate, favourable impression of his work. He doesn't currently have one. The audience is, in priority order: (A) engineering managers in London hiring senior/principal frontend ICs, (C) recruiters skim-scanning under volume, (B) staff/principal peers evaluating depth.

Generic portfolio templates and AI-generated layouts read as "AI slop" and undermine the maturity signal he's trying to send. A bespoke site needs to demonstrate visual class and engineering taste without falling into the standard portfolio tropes (entrance fades, hero animations, dark/light toggle for its own sake, generic project grids of mockup screenshots).

The site also needs to lay groundwork for future blog posts that document the development process for his projects — the through-line being that both shipped projects were built specifically to test agentic workflows.

## Solution

A single-page, static, dark-only, editorial portfolio at `https://jasonwright.io` with three sections — header/bio, career timeline, projects — plus a minimal on-brand 404. Built with Astro 5 + Tailwind v4 (CSS-first `@theme`), self-hosted woff2 fonts, deployed to Vercel.

Aesthetic: narrow editorial column (max-width ~640px), warm-grey serif text on near-black, a single muted-amber accent, typographic hierarchy via Cormorant Garamond (display) / Inter (body) / JetBrains Mono (small labels). Zero client-side JavaScript — expansion interactions use native `<details>`/`<summary>` elements. Motion is limited to native `<details>` height transitions, gated behind `prefers-reduced-motion: reduce`.

The career timeline and project list are real content sourced from Jason's CV, LinkedIn, and project repos (currently captured in `.scratch/copy-source.md`). Two projects ship publicly at v1 (Billingual, Kana Drive); a third (Keelty Thatching) is authored but flagged `draft: true` until the owner clears publication. A blog posts collection is scaffolded but renders no public routes — it activates when post #1 is written.

The design system (colour, typography, spacing, radii) is expressed as CSS custom properties in a single `@theme` block, doubling as Tailwind's theme so prototyping a new font pairing or accent colour is a one-file change. A `docs/design-system.md` documents the tokens and component inventory.

Lighthouse scores are a primary success metric: self-hosted Latin-subset woff2, single critical-font preload, no third-party scripts beyond Vercel Analytics + Speed Insights, no images on the index page at v1, fully prerendered HTML.

## User Stories

1. As a hiring manager in London, I want to land on Jason's homepage and within five seconds understand his seniority, location, and availability, so that I can decide whether to read further.
2. As a hiring manager, I want to read a concise bio that conveys both engineering depth and product/business judgement, so that I can assess fit for a senior IC role.
3. As a hiring manager, I want to scan a career timeline with companies, dates, and headline outcomes per role, so that I can map his trajectory without reading a CV.
4. As a hiring manager, I want to expand a role to see additional achievements when a single headline isn't enough, so that I can dig in selectively without being overwhelmed up front.
5. As a hiring manager, I want each role's headline to lead with impact ("reduced load time 42.77%") rather than activity ("worked on the video player"), so that I can quickly judge what he actually shipped.
6. As a recruiter screening at volume, I want the page to load instantly on mobile over flaky wifi, so that I don't bounce before forming an impression.
7. As a recruiter, I want stack tags and role titles to be greppable plain text in the rendered HTML, so that ATS-style scanning surfaces the right keywords.
8. As a recruiter, I want clear contact links (GitHub, LinkedIn) above the fold, so that I can reach out without hunting.
9. As a senior engineering peer, I want to read project descriptions and stacks, so that I can evaluate whether the work is genuinely interesting versus resume padding.
10. As a senior engineering peer, I want to follow links to live projects or repos, so that I can see real code or real product rather than just claims.
11. As a senior engineering peer, I want the site itself to be evidence of taste — restrained motion, considered typography, no portfolio cliches — so that the medium reinforces the message.
12. As a visitor on a screen reader, I want semantic landmarks (`<header>`, `<main>`, `<section>`), proper heading hierarchy, and keyboard-accessible expansions, so that I can navigate the site without sighted assumptions.
13. As a visitor with reduced-motion preferences, I want all transitions disabled, so that the site doesn't induce motion sickness.
14. As a visitor on a low-DPI screen, I want display type to render robustly (no disappearing hairlines), so that the site reads as polished rather than broken.
15. As a visitor sharing the link in Slack, LinkedIn, or iMessage, I want a clean unfurl preview with title and description, so that the recipient sees something legitimate.
16. As a visitor mistyping a URL, I want a 404 page that matches the rest of the site and links me back home, so that I don't bail.
17. As Jason, I want to swap a font pairing or accent colour by editing one tokens file, so that I can keep iterating on the look without touching components.
18. As Jason, I want to add a new project by dropping an MDX file into `src/content/projects/`, so that publishing follow-on work is friction-free.
19. As Jason, I want to keep a project hidden by setting `draft: true` in its frontmatter, so that I can prep content (e.g. Keelty Thatching) without exposing it.
20. As Jason, I want a posts collection scaffolded but not yet routed, so that adding the first blog post is a one-session task without committing to UI decisions before content exists.
21. As Jason, I want to deploy by pushing to `main`, so that publishing is friction-free and PRs get preview URLs for visual review.
22. As Jason, I want real-user performance data (Web Vitals), so that I can know whether the site is genuinely fast for actual visitors, not just in the lab.
23. As Jason, I want every commit to leave the site in a working state, so that the public git history demonstrates discipline as part of the portfolio.
24. As Jason, I want the codebase to be a portfolio artefact in its own right — clear separation of concerns, pure components, documented design system — so that "look at the source" produces a positive signal.
25. As Jason, I want canonical URL, sitemap, OG tags, and a favicon in place from launch, so that the site is indexable and shareable from day one.
26. As Jason, I want to defer OG image generation, JSON-LD, RSS, and the blog UI until they're actually needed, so that v1 ships without speculative complexity.
27. As Jason, I want all third-party fonts self-hosted, so that I'm not making render-blocking requests to fonts.googleapis.com and not leaking visitor IPs to Google.
28. As Jason, I want a public GitHub repo with conventional commits and a small README, so that the source is part of the portfolio without ceremony.
29. As Jason, I want the site to work without a custom domain at launch (using `jasonwright.vercel.app`), and switch to `jasonwright.io` via a one-line config change once the domain is purchased.
30. As Jason, I want copy that reflects the agentic-workflows narrative tying Billingual and Kana Drive together, so that the site has a thesis rather than reading as a list of unrelated side projects.

## Implementation Decisions

**Stack**

- Astro 5, static output, no Vercel adapter — the site is fully prerendered.
- Tailwind v4 via `@tailwindcss/vite`, CSS-first config (no `tailwind.config.js`).
- pnpm as package manager.
- MDX integration enabled for content collections.
- `@astrojs/sitemap` integration enabled.
- Deployment to Vercel via GitHub integration; `main` auto-deploys, PRs get preview URLs.
- Vercel Analytics + Vercel Speed Insights enabled.

**Layout & design**

- Single layout: narrow editorial column, max-width ~640px, dark-only.
- Display font: Cormorant Garamond. Body: Inter. Mono: JetBrains Mono. Self-hosted woff2, Latin-subset, single `<link rel="preload">` for Cormorant 400 (the only above-the-fold display face).
- Accent colour: `oklch(0.78 0.11 75)` (muted amber).
- Muted text token chosen to clear WCAG AA contrast on the dark background.
- Tokens defined in a single CSS `@theme` block — colours, fonts, spacing, radii. This block is the source of truth for both raw CSS variables and Tailwind utility classes.

**Behaviour**

- Zero client-side JavaScript. Expansion interactions (career role highlights, project descriptions) use native `<details>`/`<summary>`.
- Hover transitions ≤200ms; `<details>` height transition ~200ms; all transitions disabled under `prefers-reduced-motion: reduce`.
- No entrance animations, no scroll-triggered fades, no theme toggle, no skip-to-content link (single-section page).

**Content architecture**

- Career data: typed TypeScript array in `src/data/career.ts`. Not a content collection — it's structured data, not prose.
- Projects: MDX files under `src/content/projects/`, schema validated by Zod, includes `draft: z.boolean().default(false)`. Index page filters out drafts. Schema includes optional fields for future imagery (`coverImage`, `screenshots`) so adding visuals later requires no schema migration.
- Posts: collection schema defined, directory scaffolded with `.gitkeep`, no public routes, no nav link. Activates when post #1 is written.
- Site identity (name, social URLs, default meta description) centralised in `src/data/site.ts`.
- Three project files at v1: Billingual (visible, live), Kana Drive (visible, in development), Keelty Thatching (`draft: true`).
- Source material for copy revision lives at `.scratch/copy-source.md` (CV, LinkedIn PDF, project repo paths, narrative notes).

**Component organisation**

- `src/components/primitives/` — pure presentational primitives, no data dependencies (Tag, Rule, SectionLabel, ExternalLink, SocialLinks).
- `src/components/career/` — CompanyBlock, RoleEntry. Consumes the career data shape.
- `src/components/projects/` — ProjectCard. Consumes the project content shape.
- `src/components/layout/` — Header, Footer.
- `src/layouts/BaseLayout.astro` — `<html>`, `<head>`, font preload, meta tags, slot.
- `src/pages/index.astro` is composition-only; reads like a table of contents for the site.
- `src/pages/404.astro` is minimal and on-brand, reuses BaseLayout and tokens.
- No barrel files. No `components/ui/` catch-all. Components live by domain or as primitives.

**SEO / meta**

- A pure meta-builder function (`src/lib/meta.ts` or similar) takes `{ title, description, path }` + site defaults and returns the full meta tag set (title, description, canonical, OG, Twitter Card). Used by `BaseLayout`.
- Sitemap auto-generated via `@astrojs/sitemap`.
- Single SVG favicon plus an apple-touch PNG. No multi-icon set.
- `site` in `astro.config.mjs` is `https://jasonwright.io` from day one (a `TODO` comment notes the domain purchase). Until the domain is bought, the site is reachable via `jasonwright.vercel.app`; this is treated as a soft launch state, not a public-share state.
- Deferred to later: OG image, JSON-LD `Person` schema, RSS feed, blog routes.

**Accessibility floor**

- Semantic HTML: `<header>`, `<main>`, `<section>`, `<article>` for project cards.
- One `<h1>` per page; section labels are real `<h2>`s.
- All `target="_blank"` links carry `rel="noopener noreferrer"`.
- Visible focus-visible outlines on all interactive elements, in the accent colour.
- Muted text token bumped from the prototype's `#6a6866` to a value that clears WCAG AA contrast (4.5:1) on `#0f0f10`.
- `lang="en"` on `<html>`.
- `<details>` provides keyboard accessibility natively; no extra ARIA.

**Copy**

- The copy in the design handoff is placeholder. A copy revision pass happens after the site is scaffolded, sourcing from `.scratch/copy-source.md` (Jason's CV, LinkedIn, project repos). Specific edits agreed: drop "Summer" from the location line ("Tokyo → London, 2026"); soften the availability line to "Open to new roles".
- Copy revision is a follow-up issue, not part of the scaffolding work.

**Repo & process**

- Repo `portfolio-2026`, public, default branch `main`.
- Conventional commit style (`feat:`, `chore:`, `docs:`, etc.).
- Sequence of small, logical commits — each compiles and the site works.
- No license file. `.gitignore` covers Astro defaults plus `.env*`, `.DS_Store`.
- README is short: what it is, stack, dev/build commands. No badges, no screenshot.
- Documentation: `docs/design-system.md` documents tokens and the component inventory.

## Testing Decisions

No automated tests at v1. Justification:

- The site is a static personal portfolio. Most modules are presentational Astro components; testing them yields brittle assertions about markup, not meaningful behavioural guarantees.
- Content collection schemas are validated by Astro at build time — `astro build` passing is the test.
- The single piece with non-trivial logic (the meta-builder function) is small enough that visual review of generated `<head>` output during local dev is sufficient at v1.
- "Good test = test external behaviour, not implementation details" still applies; a portfolio site's external behaviour is "the page renders correctly," which is verified by eye.

The test bar may rise later. Plausible triggers: (a) the meta-builder gains real branching (e.g., per-page OG images), (b) a blog renders with a non-trivial component (TOC, code highlighting) that benefits from snapshot-style verification, (c) the site gains an interactive feature beyond `<details>`. None apply at v1.

No test prior art exists in this fresh repo.

## Out of Scope

- **Light theme / theme toggle.** Dark-only at v1. Palette is exposed as tokens so a future light theme would be a tokens-only change.
- **Layouts other than the editorial Column.** The handoff included Split and Sections variants; both dropped from scope.
- **Scroll-triggered fade-ins or other entrance animations.** Explicitly rejected as portfolio cliche.
- **Blog UI.** Posts collection scaffolded, no routes, no list page, no `[slug]` page, no RSS, no prose styles.
- **Per-project detail pages.** Index page only at v1; MDX bodies exist but aren't rendered. Detail routes added when imagery / case studies justify them.
- **Project imagery on the index.** Schema is ready (`coverImage`, `screenshots`) but nothing is rendered. Added when polished assets exist.
- **OG image generation.** Deferred until domain is purchased and shareable previews matter.
- **JSON-LD structured data.** Negligible payoff for a personal portfolio; deferred indefinitely.
- **Custom domain purchase.** Tracked separately; site uses the Vercel subdomain in the interim.
- **Keelty Thatching project visibility.** Authored as `draft: true`; un-drafted only after the owner approves.
- **Automated tests.** None at v1.
- **Analytics beyond Vercel's first-party Analytics + Speed Insights.** No Plausible, Fathom, GA, etc.
- **Skip-to-content link.** Single-section page; would be noise.
- **Multi-icon favicon set.** SVG + apple-touch only.
- **Vercel adapter for on-demand image optimisation.** Static build only; future images will use Astro's build-time `<Image>`.

## Further Notes

- **Narrative thesis.** Both shipped projects were built specifically to test agentic workflows. This is the through-line for any future blog posts and worth surfacing in the bio during the copy revision pass.
- **Billingual evolution.** Plan is to remove Jason's Anthropic API key, switch to BYO-key, drop paid tiers, and open-source it. The project's `meta` line and possibly stack tags will need updating when that happens.
- **Kana Drive context.** Built for Jason's bilingual (JP/EN) 4-year-old son, pivoted mid-project to a jeep-driving theme. Worth weaving into the description so the project reads as personal rather than generic.
- **Domain risk.** `jasonwright.io` is the intended domain (Jason previously held it and let it lapse). If unavailable at purchase time, `astro.config.mjs` `site` is a one-line change.
- **Implementation sequencing suggestion** (for the issue breakdown that follows this PRD): init Astro + pnpm → Tailwind v4 + tokens + fonts → BaseLayout + meta builder → primitives → career data + components → project collection + components → index page → 404 → sitemap + favicon + analytics → design-system docs → Vercel deploy → copy revision pass.
- **Issue tracker convention.** Per `docs/agents/issue-tracker.md`, this PRD lives at `.scratch/portfolio-site/PRD.md`; implementation issues will be filed under `.scratch/portfolio-site/issues/<NN>-<slug>.md` numbered from `01`.
