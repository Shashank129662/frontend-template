---
name: asset-management
description: Discover, validate, organize, and accurately place supplied visual assets under the repository WEBP policy.
---
# Asset management

Inventory `public/assets/` before coding. Match by visual identity and purpose, not name alone. Supplied visual raster assets must be `.webp`; preserve transparency, aspect ratio, and quality when converting. Use `backgrounds`, `images`, `icons`, `logos`, and `fonts` directories. Do not generate fake imagery, hotlink remote assets, recreate supplied artwork in CSS, or silently substitute placeholders. If a required asset is missing, keep the correct footprint and report it.

## Mapping and verification

Inspect dimensions, transparency, and visible content of candidate assets; use a contact sheet when there are many files. Record which file belongs to each visual section, its natural ratio, and intended crop. Verify conversion results visually before changing callers or removing source files. If conversion tooling is unavailable, report the exact asset and blocker.

Set image dimensions or a constrained aspect-ratio container to reserve space. Choose contain versus cover from the reference, and use responsive sizes for fluid images. Verify background images as well as HTML images; the screenshot helper's broken-image check does not cover CSS backgrounds.
