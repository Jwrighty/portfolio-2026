# Approve the public consulting presentation

Status: ready-for-human

Type: HITL

## Parent

`.scratch/consulting-page/PRD.md`

## What to build

Review the completed consulting experience as a public business representation and release candidate. Confirm that its facts, privacy choices, client-work claims, visual hierarchy, recruiter positioning, navigation, metadata, and rendered behavior match the approved PRD before the page is treated as final.

This is a human-in-the-loop release gate because the page publishes personal business information and will support an administrative application. Any corrections discovered during review should remain within the approved scope and be verified in the same preview before sign-off.

## Acceptance criteria

- [ ] Jason reviews representative mobile and desktop renders of the consulting page and homepage integration.
- [ ] Jason confirms that his name, business activity, Meguro location, Gmail address, and selected-project availability are accurate and appropriate to publish.
- [ ] Jason confirms that the Keelty narrative accurately represents the real work and contains no unsupported claims or misleading commissioning language.
- [ ] Jason confirms that the homepage remains unmistakably job-search-first and that consulting reads as a secondary professional activity.
- [ ] Keyboard navigation, focus visibility, heading structure, meaningful image text, reduced-motion behavior, and 200-percent text zoom have been checked from the rendered experience.
- [ ] The homepage consulting link, portfolio return link, Gmail action, and live Keelty link have been exercised successfully.
- [ ] The consulting page's title, description, canonical path, social metadata, and sitemap entry have been verified in generated output.
- [ ] The final production build succeeds and no scope-excluded feature or personal financial evidence is published.
- [ ] Any review corrections are incorporated and Jason explicitly approves the result for release.

## Blocked by

- `.scratch/consulting-page/issues/02-keelty-client-work.md`
- `.scratch/consulting-page/issues/03-homepage-consulting-entry.md`

## Comments

**2026-08-04 — blockers cleared; ready for Jason's review.**

Machine-checkable items already verified: production build succeeds; `/consulting` is in the generated sitemap; title, description, canonical, Open Graph and Twitter tags are correct in the generated HTML; homepage → consulting and consulting → homepage navigation both work; every link has a descriptive name, external links carry `target="_blank" rel="noopener noreferrer"` and internal/`mailto:` links do not; the Keelty image has meaningful alt text; no horizontal overflow at 375px or at 200% text zoom; motion reuses the existing `.settle` / `.reveal-line` choreography covered by the global `prefers-reduced-motion` block.

Still needs Jason: confirm the published facts (name, activity, Meguro location, Gmail address, availability) are accurate and appropriate to publish, confirm the Keelty narrative represents the real engagement, and give explicit release approval.
