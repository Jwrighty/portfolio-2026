---
name: Jason Wright — Portfolio
description: A cool near-black stage with a single vermilion signal; kinetic frontend craft demonstrated in the interface itself.
colors:
  bg: "oklch(0.145 0.008 262)"
  surface: "oklch(0.185 0.01 262)"
  border: "oklch(0.30 0.012 262)"
  text: "oklch(0.88 0.006 262)"
  muted: "oklch(0.70 0.01 262)"
  accent: "oklch(0.70 0.185 32)"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Bricolage Fallback, system-ui, sans-serif"
    fontSize: "clamp(3rem, 9vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bricolage Grotesque, Bricolage Fallback, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Bricolage Grotesque, Bricolage Fallback, system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Bricolage Grotesque, Bricolage Fallback, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.01em"
  label:
    fontFamily: "Fragment Mono, ui-monospace, Menlo, monospace"
    fontSize: "0.66rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.14em"
  scale:
    display: "clamp(3rem, 9vw, 5.25rem)"
    display-sm: "clamp(2.5rem, 8vw, 4.5rem)"
    headline: "1.2rem"
    section: "1.1rem"
    role: "0.92rem"
    lead: "0.98rem"
    copy: "0.88rem"
    meta: "0.72rem"
    label: "0.66rem"
    micro: "0.6rem"
rounded:
  xs: "2px"
  sm: "0.25rem"
  md: "0.5rem"
  lg: "1rem"
  pill: "9999px"
spacing:
  18: "4.5rem"
  22: "5.5rem"
  30: "7.5rem"
components:
  external-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
  external-link-hover:
    textColor: "{colors.accent}"
  tag:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "2px 7px"
  disclosure-summary:
    textColor: "{colors.accent}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
  disclosure-summary-hover:
    textColor: "{colors.text}"
---

# Design System: Jason Wright — Portfolio

## 1. Overview

**Creative North Star: "Signal on the Stage"**

The whole surface is a cool near-black stage held at near-total restraint, so that a single vermilion signal reads as pure intent. Nothing competes with it: the background is one tone, the type is one family, the layout is one measured column. When the accent appears — a name, a "View" link, a live-status dot — it means something. Scarcity is the mechanism; the rarity of the color is what gives it authority. This is a portfolio whose job is to prove design-grade frontend craft, and it makes that argument by *performing* restraint rather than describing it.

The personality is precise and kinetic. At rest the page is quiet, typographic, almost documentary — hairline rules, mono metadata, generous measure. The craft lives in **response**: underlines that draw in from the left, arrows that nudge up-and-right, native disclosures that animate their own height, a name that rises through a mask on load. Motion is the signature, but it is kinetic *restraint* — it serves reading and never becomes spectacle. The sensory register is a well-set instrument panel in a dark room: everything legible, everything deliberate, one indicator lit.

This system explicitly rejects three things. It is **not** the generic dev-portfolio template (hero banner, skills grid, identical project-card wall, contact form). It is **not** Awwwards showcase excess (scroll-hijacking, WebGL noise, motion for its own sake). And it is **not** dark-mode SaaS landing grammar (gradient glows, glassmorphism cards, startup patterns applied to a person). The reference lane is the sparse, typographic, interaction-rich portfolio — paco.me / rauno.me — where expressiveness lives in how things move and respond, not in visual noise.

**Key Characteristics:**
- Single cool near-black surface; one warm vermilion accent used on ≤10% of any screen.
- One display/sans family (Bricolage Grotesque) paired with one mono (Fragment Mono) for all metadata.
- Flat by default — depth from hairline borders and tonal surface layering, never shadows.
- Motion is the proof of craft, and every animation has a genuine reduced-motion alternative.
- A single measured reading column (max 60rem); border-separated lists, not boxed cards.

## 2. Colors

A monochromatic cool near-black ramp (a whisper of blue, hue 262) carrying one warm vermilion signal (hue 32). The temperature contrast between the cool stage and the warm accent is the entire palette story.

### Primary
- **Vermilion Signal** (`oklch(0.70 0.185 32)`): The one voice. Used sparingly — the surname in the hero, "View" / "Live site" links, disclosure triggers, the pulsing availability dot, the `/` marks before section headings, text selection, and focus rings. Tuned to L 0.70 so it clears 4.5:1 as body-sized text on the near-black background; it is text-safe, not merely decorative.

### Neutral
- **Stage Near-Black** (`oklch(0.145 0.008 262)`): The body background. A cool near-black with a trace of blue — the stage everything performs on.
- **Surface** (`oklch(0.185 0.01 262)`): One tonal step up from the stage for raised or inset regions. Depth by tone, not by shadow.
- **Hairline Border** (`oklch(0.30 0.012 262)`): Every divider, rule, tag outline, and structural line. The primary tool for separating content.
- **Primary Text** (`oklch(0.88 0.006 262)`): Body copy and lead paragraphs. Sits at ~13:1 on the stage; deliberately near-white, never a washed light gray.
- **Muted Text** (`oklch(0.70 0.01 262)`): Secondary copy, mono metadata, dates, descriptions, tags. Still clears 4.5:1 — muted is dimmed, not illegible.
- **Pure White** (`#ffffff`): Reserved for the highest-emphasis headings (the hero forename, section titles, project and company names). White is the loudest *neutral*; the accent is the loudest *color*.

### Named Rules
**The One Signal Rule.** Vermilion appears on ≤10% of any screen. Its rarity is the point — the moment two vermilion elements compete, the signal is gone. When you need emphasis and the accent is already spent, reach for white or weight, not more vermilion.

**The Temperature Rule.** The neutrals stay cool (hue ~262); the accent stays warm (hue 32). Never warm the neutrals toward the accent to "tie the palette together" — the cold stage is what makes the warm signal read.

## 3. Typography

**Display / Body Font:** Bricolage Grotesque (variable, weight 200–800), self-hosted, with a metric-matched `Bricolage Fallback` (Arial, size-adjusted) to minimise swap shift.
**Label / Mono Font:** Fragment Mono (400, roman + italic), self-hosted.

**Character:** One expressive humanist-grotesque family carries every reading surface — from the 84px hero forename down to 15px body — using weight and size for hierarchy rather than a second display face. Fragment Mono is the deliberate contrast axis: it appears *only* as metadata (labels, dates, status, tags, link chrome), so mono reads as instrumentation, never as body copy. The pairing is grotesque warmth against monospaced precision.

### Hierarchy

A single documented ramp of ten role-named steps, exposed as `--text-*` tokens in `global.css` (`text-display`, `text-headline`, `text-copy`, …) and never as loose one-off sizes. Each step is a role, not a pixel value; reach for the role, and if none fits, add a step to the ramp rather than a literal.

- **`display`** (700, `clamp(3rem, 9vw, 5.25rem)`, line-height 0.95, tracking -0.02em, white/accent): The hero name only. Two masked lines that rise on load — forename white, surname vermilion.
- **`display-sm`** (700, `clamp(2.5rem, 8vw, 4.5rem)`): The headline of a standalone page that is not the homepage — the 404 and the consulting page. It states the page's subject where `display` would compete with the hero nameplate.
- **`headline`** (600, 1.2rem, tracking -0.01em, white): Project titles. The largest type in the body flow.
- **`section`** (600, 1.1rem, white): "Work" / "Projects" section headings (each prefixed with a vermilion `/`, sticky in the left rail on wide viewports) and company names.
- **`role`** (500, 0.92rem, primary text): Role titles within a career entry.
- **`lead`** (400, 0.98rem, line-height 1.75): The lead paragraph and 404 body — the largest reading copy.
- **`copy`** (400, 0.88rem, line-height 1.65–1.7): Descriptions, role achievements, disclosure-panel body. Measure capped at ~36–38rem (≈65–70ch); light-on-dark gets the extra 0.01em tracking.
- **`meta`** (400, 0.72rem, Fragment Mono, tracking 0.04em, muted): Link labels and header metadata — the interactive/mono chrome.
- **`label`** (400, 0.66rem, Fragment Mono, tracking 0.04–0.14em, muted; uppercase for section eyebrows): Static metadata — tags, dates, status text, disclosure triggers. Wider tracking (0.14em) when uppercase.
- **`micro`** (0.6rem): Caret (`▾`) and arrow (`↗`) glyphs only — decorative marks, never text a reader parses.

The `body` base stays 17px on the root; `lead` and `copy` are the reading sizes that sit under it. `meta` and `label` are the two mono metadata steps — `meta` for interactive link chrome, `label` for static chips and triggers.

### Named Rules
**The Mono-Is-Metadata Rule.** Fragment Mono is forbidden in body copy. It marks a thing as instrumentation — a label, a date, a status, a tag. The moment mono carries a sentence a reader must *read*, the signal that "this is chrome, not content" is broken.

**The One-Family Reading Rule.** Bricolage carries every reading surface from 84px to 15px. Do not introduce a second display serif or a decorative face; hierarchy comes from weight (400 → 700) and size, not from font-swapping.

## 4. Elevation

Flat by default. There are **no** `box-shadow`s anywhere in the system. Depth is expressed two ways only: a single tonal step from the stage (`bg` → `surface`) for raised or inset regions, and hairline borders (`border`) that separate content into rules, dividers, tag outlines, and the fine left-rail guide on career entries. The page reads as layered paper under even light, not as floating cards under a spotlight.

### Named Rules
**The No-Shadow Rule.** Surfaces never lift with shadow. If a region needs to feel distinct, step it one tone (to `surface`) or bound it with a hairline border. A drop shadow on this stage would read as SaaS-landing grammar — precisely the anti-reference.

**The Hairline Rule.** Structure is drawn with 1px `border` lines: top borders separate list items, a full-height 1px left border indents career roles, a hairline rule extends from every section eyebrow. Never thicken a border into a colored side-stripe accent (see Don'ts).

## 5. Components

The interface has no buttons in the conventional sense — every call to action is a text link. The component vocabulary is small and precise: links, tags, disclosures, section labels, and border-separated list items. Each is quiet at rest and reveals its craft in motion.

### Links (the primary CTA)
- **Character:** Precise and kinetic — the site's signature interaction.
- **Style:** Fragment Mono, 0.72rem, tracking 0.04em, muted at rest, `2px` radius on the focus target.
- **Underline:** The `draw-link` treatment — a 1px underline drawn from a `linear-gradient` background that animates `background-size` from `0%` to `100%` (250ms, ease-out-quart) on hover. Color shifts muted → vermilion.
- **External marker:** A trailing `↗` that nudges up-and-right (`translate(2px, -2px)`, 300ms, ease-out-quint) on hover.

### Tags / Chips
- **Style:** Inline, transparent fill, 1px hairline `border`, `2px` radius, `2px 7px` padding. Fragment Mono 0.63rem, tracking 0.04em, muted text.
- **State:** Static — tags are metadata, not interactive. Never filled with the accent; the outline is the whole treatment.

### Disclosures (details / summary)
- **Character:** Native `<details>` with animated height — a showcase of platform-native motion craft.
- **Trigger:** Fragment Mono, vermilion at rest, → white/primary-text on hover; a leading `▾` rotates 180° (200–300ms, ease-out-quint) when open; the default marker is hidden.
- **Motion:** `::details-content` animates `block-size` from `0` to `auto` (320ms, ease-out-quint) via `interpolate-size: allow-keywords`, with `content-visibility` transitioned `allow-discrete`. `overflow: hidden` (not clip) contains child margins so the collapse ends smoothly.

### Section Labels
- **Style:** Fragment Mono, 0.68rem, uppercase, tracking 0.14em, muted, with a hairline rule (`h-px flex-1 bg-border`) filling the line to the right of the label.

### Cards / Containers
- **There are no boxed cards.** Projects and roles are **border-separated list items** — an `<article>` with a `border-top` hairline (`border-t border-border`, removed on `:first-child`) and vertical padding. This is a deliberate rejection of the identical-project-card wall.
- **Career entries** use a single full-height 1px left border (`border-l border-border pl-4`) as a structural indent guide for grouped roles — a hairline rail, never a colored accent stripe.

### Signature: Availability Signal
- A 7px vermilion dot beside "Open to new roles" that pulses opacity 1 → 0.35 → 1 on a 2.6s loop (`status-pulse`). The one piece of ambient, always-on motion — it advances the "available now" rung of the belief ladder.

### Signature: Hero Load Choreography
- The forename/surname rise through overflow masks (`rise-in`, 700ms ease-out-quint, 90ms stagger between lines); the metadata, bio, and social links `settle-in` in sequence (`--i` step, 70ms apart). One orchestrated page-load, header only — content is fully visible for no-JS and reduced-motion.

## 6. Do's and Don'ts

### Do:
- **Do** keep vermilion (`oklch(0.70 0.185 32)`) to ≤10% of any screen — the One Signal Rule. Emphasis beyond that comes from white or weight.
- **Do** set all metadata (tags, dates, status, link labels, disclosure triggers) in Fragment Mono, and everything a reader actually reads in Bricolage.
- **Do** convey depth with a single tonal step (`bg` → `surface`) or a 1px hairline `border`. Flat is the default.
- **Do** separate projects and roles with top-border hairlines, not card chrome.
- **Do** cap body measure at ~36–38rem (≈65–70ch) and hold the whole layout to the 60rem reading column.
- **Do** keep body/muted text near the ink end (`text` ≈ L 0.88, `muted` ≈ L 0.70) so it clears 4.5:1 — muted means dimmed, never washed-out light gray.
- **Do** ship a genuine `prefers-reduced-motion` alternative for every animation; accessible motion is itself the proof of craft (WCAG 2.2 AA).

### Don't:
- **Don't** build the generic dev-portfolio template — hero banner, skills grid, identical project-card wall, or contact form.
- **Don't** slip into dark-mode SaaS landing grammar: gradient glows, glassmorphism cards, or startup-landing patterns applied to a person.
- **Don't** chase Awwwards showcase excess — scroll-hijacking, WebGL noise, or motion for its own sake that buries the content. Motion serves reading.
- **Don't** add `box-shadow` to lift a surface. The No-Shadow Rule is absolute; step a tone or draw a hairline instead.
- **Don't** thicken a border into a colored side-stripe accent (`border-left` / `border-right` > 1px as a colored bar). The career rail is a 1px hairline guide, and that is the only left-border in the system.
- **Don't** warm the cool neutrals toward the accent, or spend vermilion on more than one competing element per fold.
- **Don't** use Fragment Mono for body copy, or introduce a second display/serif face — Bricolage carries every reading surface via weight and size.
- **Don't** use `background-clip: text` gradients, all-caps body copy, or a tiny uppercase tracked eyebrow above *every* section (the one uppercase mono section label is the deliberate, named exception).
