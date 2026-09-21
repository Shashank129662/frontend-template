---
name: visual-accuracy
description: Drive high-fidelity visual matching from Figma or screenshots.
---
# Visual accuracy

Compare the full composition first: container geometry, section heights, major artwork and typography. Then correct spacing, colors/backgrounds, borders, radii, shadows, and details. Match line breaks, image crop and placement; do not stretch source art. Treat the visual reference—not template defaults—as truth.

## Comparison procedure

Compare the same route state and viewport with fonts and images loaded. Track discrepancies by element, observed difference, and likely cause. Fix container geometry before local spacing; fix font family/weight/measure before forcing line breaks. Check overlays or side-by-side crops when useful.

Avoid offset patches that align one viewport but break the layout elsewhere. Recheck affected responsive views after shared changes. Do not describe screenshot capture as automatic pixel-difference testing; record what was actually inspected and any remaining mismatch.
