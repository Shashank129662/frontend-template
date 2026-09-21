---
name: screenshot-to-code
description: Analyze a screenshot or image reference and implement it faithfully as responsive Next.js code.
---
# Screenshot to code

Treat the supplied image as the visual source of truth. Before coding, identify viewport dimensions, sections, containers, typography, colors, spacing, backgrounds, assets, alignment, layering, and likely responsive transitions. Inspect `public/assets/` before creating a visual element and map assets semantically. Implement the design rather than a conceptually similar page. Render the exact reference viewport, compare screenshots, fix material geometry and typography deltas, then check mobile through large desktop.
