# Design System

## Tokens

Source of truth: `src/styles/global.css`, inside the `@theme` block.

### Colour

| Token | Value | Use |
| --- | --- | --- |
| `--color-bg` | `#0f0f10` | Page background |
| `--color-surface` | `#1a1a1c` | Raised or inset surfaces |
| `--color-border` | `#2e2e32` | Dividers, rules, quiet outlines |
| `--color-text` | `#d4d0c8` | Body copy |
| `--color-muted` | `#8a8680` | Secondary copy and metadata |
| `--color-accent` | `oklch(0.78 0.11 75)` | Links, labels, active emphasis |
| `--color-white` | `#ffffff` | Primary display text |

### Typography

| Token | Value | Use |
| --- | --- | --- |
| `--font-display` | `"Cormorant Garamond", "Georgia", serif` | Nameplate, section-scale headings, editorial moments |
| `--font-sans` | `"Inter", ui-sans-serif, system-ui, sans-serif` | Body copy and interface text |
| `--font-mono` | `"JetBrains Mono", ui-monospace, "Menlo", monospace` | Labels, metadata, code-like details |

Cormorant Garamond gives the site its editorial profile, Inter keeps long-form and UI copy quiet and readable, and JetBrains Mono adds a technical register for metadata without overwhelming the page.

### Spacing

| Token | Value |
| --- | --- |
| `--spacing-18` | `4.5rem` |
| `--spacing-22` | `5.5rem` |
| `--spacing-30` | `7.5rem` |

These augment Tailwind defaults for larger portfolio rhythm and page-level vertical spacing.

### Radii

| Token | Value | Use |
| --- | --- | --- |
| `--radius-sm` | `0.25rem` | Focus rings, small controls, swatches |
| `--radius-md` | `0.5rem` | Compact surfaces |
| `--radius-lg` | `1rem` | Larger framed regions when needed |
| `--radius-pill` | `9999px` | Fully rounded badges or pills |

## Components

### `src/components/primitives`

| Component | Purpose |
| --- | --- |
| `ExternalLink.astro` | Styled external anchor with safe default target/rel |
| `Rule.astro` | Token-based horizontal divider |
| `SectionLabel.astro` | Mono uppercase section or eyebrow label |
| `SocialLinks.astro` | GitHub and LinkedIn navigation sourced from site data |
| `Tag.astro` | Small bordered metadata tag |

### `src/components/layout`

| Component | Purpose |
| --- | --- |
| `Header.astro` | Homepage identity, bio, availability, and social links |
| `Footer.astro` | Compact availability note and repeated social links |

### `src/components/projects`

| Component | Purpose |
| --- | --- |
| `ProjectCard.astro` | Project summary with status, stack tags, and optional links |

### `src/components/career`

| Component | Purpose |
| --- | --- |
| `CompanyBlock.astro` | Company-level career grouping with dates, location, summary, and roles |
| `RoleEntry.astro` | Role detail with impact headline, native disclosure, achievements, and stack tags |

## Changing The Look

To swap the font pairing or accent colour, edit only the `@theme` block in `src/styles/global.css`.

For fonts, update `--font-display`, `--font-sans`, or `--font-mono`, then keep the related `@font-face` declarations and font files in sync. For colour, change `--color-accent` and verify link, label, and focus contrast against `--color-bg` and `--color-surface`.
