---
name: design-tokens
description: Consolidate repeated colors, spacing, typography, and component variants from a supplied frontend design without inventing a design system.
---
# Design tokens

Inspect `src/app/globals.css`, current utility usage, fonts, and supplied references. Identify repeated values with a shared meaning before creating tokens. Keep one-off geometry local; avoid generating a speculative palette or spacing scale.

This repository uses Tailwind v4's CSS entry point. Extend existing CSS theme/custom properties where appropriate; do not create a legacy Tailwind config merely to store colors. Separate semantic roles such as surface, text, border, and accent when they vary independently. Add themes only when requested or already present.

Keep component variants as a small typed mapping of full class strings. Reuse the existing class-composition approach; do not install a variant library for a few styles. Include focus, disabled, pending, selected, and error variants only for controls that need them.

Verify representative consumers after token changes, including text wrapping and contrast. A token rename or value change must update all affected callers without broad unrelated visual changes. Coordinate component API decisions with `component-architecture`.
