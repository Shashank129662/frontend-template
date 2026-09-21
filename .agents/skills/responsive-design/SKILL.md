---
name: responsive-design
description: Reconstruct responsive layout behavior from visual references with mobile-first Tailwind.
---
# Responsive design

Infer gutters, max widths, grids, stacking order, text measure, image crop and breakpoint transitions before implementation. Use mobile-first Tailwind utilities and fluid layout constraints; preserve fixed dimensions only where the reference warrants them. Test 320, 390, 768, 1024, 1280, 1440, and 1920 pixels. Never mask accidental overflow globally.

## Layout decisions

Use content constraints to choose breakpoints: navigation collision, unreadable cards, and overflowing controls. Infer unsupplied mobile behavior conservatively and disclose consequential assumptions. Preserve semantic reading order; avoid CSS visual reordering that makes keyboard focus confusing.

Test long labels, wrapping headings, minimum widths, and image focal points. At a failure, inspect the responsible child width, flex/grid minimum size, or fixed positioning instead of clipping the entire page. Check immediately on either side of a changed breakpoint. Exact reference heights may require a separate capture as described in `visual-qa`.
