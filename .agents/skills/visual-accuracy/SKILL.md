# Visual Accuracy

Match the implementation as closely as possible to the supplied Figma design, screenshot, mockup, or reference image.

Treat the reference—not template defaults—as the visual source of truth.

## Comparison priority

Fix differences in this order:

1. Page and container geometry
2. Section height and width
3. Major artwork and image placement
4. Typography and line wrapping
5. Spacing and alignment
6. Colors and backgrounds
7. Borders, radii, and shadows
8. Small decorative details

Fix structural differences before applying small spacing adjustments.

## Typography

Match:

* font family
* font size
* font weight
* line height
* letter spacing
* text width
* alignment
* line wrapping

Fix typography and container width before manually forcing line breaks.

## Images and artwork

Match the reference image's:

* size
* position
* aspect ratio
* crop
* alignment

Never stretch or distort source artwork.

Use `object-fit`, positioning, and container sizing appropriately.

## Visual comparison

Compare the same:

```text
route + state + viewport
```

Ensure fonts and images are loaded before evaluating the result.

When useful, compare using side-by-side views or overlays to identify differences.

Track important mismatches by:

```text
Element → Difference → Likely cause → Fix
```

## Responsive accuracy

Do not use arbitrary offsets that make one viewport accurate while breaking another.

After changing shared layout, typography, or spacing, recheck affected responsive views.

Preserve the reference's layout behavior rather than reproducing only one screenshot size.

## Avoid

Do not:

* approximate obvious dimensions without checking the reference
* replace intentional spacing with template defaults
* distort images
* force line breaks to hide typography problems
* stack arbitrary margin or position patches
* optimize one viewport while breaking others
* claim pixel-difference testing unless it was actually performed

## Completion

Before finishing, verify:

* overall composition matches
* major sections align
* typography is visually consistent
* spacing and alignment match
* images are correctly sized and positioned
* colors and backgrounds match
* responsive views remain correct

Report any remaining visible mismatch that could not be reproduced accurately.
