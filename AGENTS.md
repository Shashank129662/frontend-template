# Codex instructions: design-to-code template

## Priority

Follow this order for every implementation:

```text
Reference Design → AGENTS.md → Relevant .agents/skills → Existing repository architecture → Implementation → Validation
```

A supplied Figma design or screenshot is the visual source of truth. Template UI is only a neutral starting point and must not override the reference.

## Required workflow

1. Inspect the repository, target route, reference, and `public/assets/` before editing.
2. Select only relevant skills. Screenshot work: `screenshot-to-code`, `asset-management`, `visual-accuracy`, `responsive-design`, `component-architecture`, `nextjs-production`, `visual-qa`. Figma work replaces `screenshot-to-code` with `figma-to-code`. SEO work: `seo-metadata`, `nextjs-production`.
3. Analyze sections, typography, colors, spacing, containers, backgrounds, artwork, interactions, and responsive behavior before implementation.
4. Map supplied assets semantically. Never recreate supplied artwork with CSS or replace it with a fake, stock, random remote, or generated asset.
5. Use Next.js App Router, TypeScript, Tailwind, `next/image` for local imagery where appropriate, and `next/link` for internal navigation. Keep substantial pages componentized without trivial over-abstraction.
6. Validate with `pnpm lint`, `pnpm typecheck`, and `pnpm build`; use `pnpm visual:qa` against a running app and compare screenshots with the reference. Iterate on material differences.

## Asset policy

`public/assets/` is canonical. Inspect it first. Supplied visual raster assets must be WEBP only: no PNG, JPG, JPEG, GIF, AVIF, BMP, TIFF, or SVG visual assets. Convert non-WEBP raster assets to WEBP when tooling is available while preserving transparency, dimensions, aspect ratio, and quality. Keep fonts in `public/assets/fonts/` in their native webfont format when relevant.

Do not stretch artwork. Use meaningful alt text. If a critical asset is missing, preserve the layout with an explicit missing-asset note and report it.

## Template boundaries

Do not assume a brand, copy, colors, font, sections, URL, or layout from this repository. Keep metadata generic until real production values are supplied. Do not add dependencies for trivial work or hide missing content with fallback hacks.

## Ponytail

`.agents/skills/ponytail/` is the official MIT-licensed Ponytail skill from `DietrichGebert/ponytail`. It can be selected for minimal, non-overengineered implementation decisions, but it does not replace the reference-first visual workflow or validation.
