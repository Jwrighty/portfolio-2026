# `BaseLayout` + meta-builder

Status: done

## Parent

`.scratch/portfolio-site/PRD.md`

## What to build

`src/layouts/BaseLayout.astro` owning `<html lang="en">`, `<head>`, font preload, meta tags, and a default slot. A pure meta-builder (`src/lib/meta.ts` or similar) that takes `{ title, description, path }` plus site defaults from `src/data/site.ts` and returns the full meta tag set: title, description, canonical, OG, Twitter Card. `astro.config.mjs` `site` is set to `https://jasonwright.io` from day one with a `TODO` comment noting the domain purchase. Index page consumes `BaseLayout` and the meta-builder so generated `<head>` is verifiable by eye in dev.

## Acceptance criteria

- [x] `BaseLayout.astro` provides `<html>`, `<head>`, slot
- [x] Cormorant 400 woff2 is preloaded from the layout
- [x] Pure meta-builder takes `{ title, description, path }` + site defaults and returns full tag set
- [x] `src/data/site.ts` centralises name, social URLs, default meta description
- [x] `astro.config.mjs` `site` set to `https://jasonwright.io` with TODO comment
- [x] Canonical, OG title/description/url/type, Twitter Card all rendered in `<head>`
- [x] Index page uses `BaseLayout` — generated `<head>` reviewed in dev

## Blocked by

- `02-tailwind-tokens-fonts.md`
