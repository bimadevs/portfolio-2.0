---
name: BimaDev Portfolio
description: Precision-engineered dark portfolio and technical showcase
colors:
  primary: "#2D69FA"
  primary-hover: "#5A93FC"
  accent: "#08A6A5"
  accent-hover: "#4DE9DC"
  neutral-bg: "#0A0A0A"
  neutral-surface: "#151515"
  neutral-surface-strong: "#3F3F3F"
  neutral-border: "#3F3F3F"
  neutral-text-primary: "#FFFFFF"
  neutral-text-secondary: "#E0E0E0"
  neutral-text-tertiary: "#959595"
  danger: "#E90507"
typography:
  display:
    fontFamily: "var(--font-primary), Inter, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "var(--font-primary), Inter, -apple-system, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: "-0.01em"
  title:
    fontFamily: "var(--font-primary), Inter, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "var(--font-primary), Inter, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "var(--font-code), Source Code Pro, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0.02em"
rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-text-primary}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.neutral-text-primary}"
  button-secondary:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text-primary}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "40px"
  card:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.md}"
    padding: "24px"
  input:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text-primary}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
    height: "48px"
---

# Design System: BimaDev Portfolio

## Overview

**Creative North Star: "The Obsidian Monolith"**

The BimaDev design system embodies cinematic dark-mode precision, drawing inspiration from high-end developer workstations, obsidian architecture, and terminal instruments. Built upon Once UI primitives, the interface frames technical achievements and developer writings with disciplined typography, high-contrast readability, and translucent surface geometry.

The visual space is defined by deep obsidian neutrals (`#0A0A0A` to `#151515`), punctuated by vibrant electric cobalt (`#2D69FA`) and luminescent cyan accents (`#08A6A5`). Ambient backdrop lighting, cursor-aware gradient masks, and subtle grid overlays establish an immersive atmosphere without overwhelming content legibility.

**Key Characteristics:**
- **Cinematic Obsidian Canvas:** Deep charcoal background with subtle 1px border scaffolding and translucent card layers.
- **Electric Accent Calibration:** Luminous cobalt blue strictly reserved for primary actions, active indicators, and focal points.
- **Monospace Technical Texture:** Source Code Pro accents for badges, timestamps, code snippets, and metadata.
- **Fluid Micro-Interactions:** Snappy spring transitions, subtle hover alpha glows, and smooth scroll reveal motions.

## Colors

The color palette is engineered for high-contrast dark environments, balancing deep absorption neutrals with sharp electric spectral accents.

### Primary
- **Cobalt Luminescence** (`#2D69FA` / `#5A93FC`): Used for primary interactive triggers, active navigation markers, and focal brand moments.

### Secondary
- **Cyan Pulse** (`#08A6A5` / `#4DE9DC`): Used for secondary highlights, AI feature tags, and supplementary badge indicators.

### Neutral
- **Obsidian Void** (`#0A0A0A`): The foundational canvas and root page background.
- **Charcoal Surface** (`#151515`): Default container, card, and panel background.
- **Slate Surface** (`#3F3F3F`): Elevated interactive hover states and active card fills.
- **Subtle Stroke** (`#3F3F3F`): 1px structural dividing lines and card borders.
- **Starlight White** (`#FFFFFF`): Primary headings and high-emphasis body text.
- **Muted Silver** (`#E0E0E0`): Standard body copy and secondary descriptions.
- **Ash Gray** (`#959595`): Tertiary metadata, placeholders, and inactive labels.

### Named Rules
**The 10% Illumination Rule.** Luminous cobalt blue is strictly reserved for primary CTAs, active status badges, and focal interactive elements; the dark canvas dominates 90%+ of the visual field.

**The Translucent Alpha Rule.** Background layers use stepped alpha transparencies (10%, 30%, 50%) rather than opaque tint blocks, maintaining canvas continuity under dynamic gradient masks.

## Typography

**Display Font:** Inter (sans-serif)
**Body Font:** Inter (sans-serif)
**Label/Mono Font:** Source Code Pro (monospace)

**Character:** Clean modernist geometric sans-serif paired with crisp monospaced code typography for an authoritative engineering feel.

### Hierarchy
- **Display** (800 weight, `clamp(2.5rem, 5vw, 4rem)`, line-height `1.1`): Hero titles, landmark page headings.
- **Headline** (700 weight, `1.5rem` / 24px, line-height `1.33`): Section titles, project card titles.
- **Title** (600 weight, `1.25rem` / 20px, line-height `1.4`): Subsection headings, modal titles.
- **Body** (400 weight, `1rem` / 16px, line-height `1.6`): Narrative paragraphs, essay content, max line length 65–75ch.
- **Label** (500 weight, `0.875rem` / 14px, line-height `1.25`, tracking `0.02em`): Metadata badges, tags, code snippets, timestamps.

### Named Rules
**The Monospace Distinction Rule.** Technical metadata, timestamps, slugs, and category tags are rendered in Source Code Pro at 0.875rem to distinguish engineering data from narrative copy.

## Layout

The spatial model relies on a responsive flex and grid system with standardized spacing increments based on an 8px base unit (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`).

- **Max Container Widths:** Centered layout containers scale from `640px` (mobile), `768px` (tablet), `1024px` (desktop), up to `1440px` (wide).
- **Responsive Padding:** Page containers use `16px` padding on mobile, expanding to `24px` on tablet and `40px` on desktop.
- **Rhythm:** Section vertical spacing is `48px` to `64px` on desktop, condensing to `32px` on mobile screens.

## Elevation & Depth

Depth is established through tonal layering, translucent glass fills, and 1px border strokes rather than heavy drop shadows. Surfaces rest flat on the obsidian background and reveal depth through hover alpha shifts and dynamic cursor gradient masks.

### Shadow Vocabulary
- **Subtle Surface** (`0px 1px 4px rgba(0, 0, 0, 0.08)`): Minimal resting separation for floating popovers.
- **Elevated Overlay** (`0px 8px 16px rgba(0, 0, 0, 0.12)`): Modal dialogs, dropdown menus, and toast notifications.

### Named Rules
**The Glass & Stroke Rule.** Surfaces establish visual elevation via 1px border outlines and backdrop translucent fills, never heavy drop shadows at rest.

## Shapes

- **Radius Scale:** Playful geometry with `4px` (xs, inputs/small badges), `8px` (sm, standard buttons), `12px` (md, interactive cards), `16px` (lg, modal dialogs), and `9999px` (full, pill chips, avatars).
- **Borders:** Crisp 1px solid borders using `--neutral-border-medium` (`#3F3F3F`) or brand alpha outlines (`#5A93FC4D`).

## Components

### Buttons
- **Shape:** Rounded corners (8px radius).
- **Primary:** Background `var(--brand-solid-medium)` (`#2D69FA`), color `#FFFFFF`, padding `8px 16px`, height `40px`. Hover transitions to `#5A93FC`.
- **Secondary:** Background `var(--neutral-background-medium)` (`#151515`), border `1px solid var(--neutral-border-medium)` (`#3F3F3F`), color `#FFFFFF`. Hover transitions to `#3F3F3F`.
- **Tertiary / Ghost:** Transparent background, color `#E0E0E0`, hover transitions to `#FFFFFF` with subtle border outline.

### Chips & Badges
- **Style:** Pill shape (9999px radius), padding `4px 12px`, typography `Source Code Pro` 0.875rem.
- **Selected State:** Background `var(--brand-alpha-medium)` (`#5A93FC4D`), color `var(--brand-on-background-medium)` (`#CBE3FB`).
- **Unselected State:** Background `var(--neutral-alpha-weak)` (`#9595951A`), color `var(--neutral-on-background-medium)` (`#E0E0E0`).

### Cards / Containers
- **Corner Style:** 12px radius (`--radius-m`).
- **Background:** Translucent frosted surface (`#151515` with backdrop-filter).
- **Border:** 1px solid `var(--neutral-border-medium)` (`#3F3F3F`).
- **Hover:** Background smoothly shifts to `var(--neutral-alpha-medium)` (`#9595954D`) with `transition: macro-medium`.

### Inputs / Fields
- **Style:** 8px radius (`--radius-sm`), min-height 48px, background `var(--neutral-background-medium)`, color `#FFFFFF`.
- **Focus State:** Border shifts to `var(--neutral-border-medium)` with subtle ambient glow.
- **Labels:** Floating label behavior scaling to 75% on focus or populated state.

### Navigation / Header
- **Style:** Sticky top navigation bar with frosted backdrop blur (`backdrop-filter: blur(12px)`), horizontal link pills with active indicator states, and quick-action icon links.

## Do's and Don'ts

### Do:
- **Do** maintain high contrast between text (`#FFFFFF` / `#E0E0E0`) and the dark canvas (`#0A0A0A`).
- **Do** reserve cobalt blue (`#2D69FA`) strictly for primary calls-to-action, key highlights, and active states.
- **Do** use `Source Code Pro` monospace typography for technical metadata, tags, and timestamps.
- **Do** use 1px border strokes (`#3F3F3F`) to define container boundaries instead of heavy drop shadows.
- **Do** leverage Once UI layout primitives (`Column`, `Row`, `Flex`, `Grid`) for consistent spacing and alignment.

### Don't:
- **Don't** use pure light backgrounds or un-themed white containers in page content.
- **Don't** introduce external icon libraries outside the established Once UI `icons.ts` registry.
- **Don't** add arbitrary saturated colors (magenta, yellow, orange) for core UI elements unless specifically representing a status code.
- **Don't** use inline style overrides when Once UI design token props and SCSS modules are available.
- **Don't** apply heavy dark drop shadows that muddy the background gradient mask.
