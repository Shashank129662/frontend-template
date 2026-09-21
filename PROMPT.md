# Reusable Codex prompts

Attach or link the reference and use one of these prompts from the repository root.

## 1. Screenshot / image to code

```text
Implement the supplied screenshot/image reference in this repository. The application code lives under `src/`.

First read AGENTS.md and discover only the relevant skills under .agents/skills/ (at minimum screenshot-to-code, asset-management, visual-accuracy, responsive-design, component-architecture, nextjs-production, and visual-qa). Inspect the existing architecture and recursively inspect public/assets before editing.

Analyze the reference completely: its sections, typography, colors, spacing, dimensions, backgrounds, image placement, containers, alignment, layers, and responsive behavior. Map supplied local assets semantically to visual reference elements before creating any visual element. All supplied raster visual assets must be WEBP; convert eligible non-WEBP source assets before use. Do not generate, hotlink, invent, or substitute fake visual assets. Report essential missing assets while preserving their intended layout footprint.

Implement the result with Next.js App Router, TypeScript, Tailwind, meaningful components, next/image where appropriate, and next/link for internal links. The reference is the visual source of truth, not the starter page.

Run pnpm lint, pnpm typecheck, and pnpm build. Start the app, run the visual QA script, compare rendered screenshots to the supplied reference at its exact viewport and representative responsive widths, then fix meaningful differences. Do not stop at conceptual similarity.
```

## 2. Figma to code

```text
Implement the supplied Figma page/frame in this repository. The application code lives under `src/`.

Read AGENTS.md first, then load figma-to-code, asset-management, visual-accuracy, responsive-design, component-architecture, nextjs-production, and visual-qa. Use available Figma tooling to inspect the actual frame before coding: hierarchy, auto-layout, components, variants, styles, variables, typography, spacing, colors, effects, images, and responsive constraints. If access is unavailable, state that clearly and use supplied evidence only.

Inspect public/assets before creating visuals. Map local WEBP assets to Figma elements; do not recreate supplied artwork, use remote placeholders, or invent images. Use Next.js + TypeScript + Tailwind with sound component boundaries. Preserve responsive intent rather than scaling down desktop positions.

Validate pnpm lint, pnpm typecheck, and pnpm build. Render the implementation at the Figma frame dimensions, visually compare it, fix significant differences, then validate mobile, tablet, desktop, and large desktop.
```

## 3. Improve an existing implementation

```text
Compare the existing implementation with the supplied design reference and improve only the meaningful visual mismatches.

Read AGENTS.md, inspect the relevant skills, existing architecture, target route, and public/assets before editing. Use the reference as truth. Check spacing, typography, section heights, container widths, image size/crop/position, backgrounds, border radii, shadows, alignment, and responsive behavior. Map existing supplied assets before changing visual elements.

Preserve working architecture and interactions. Do not rewrite correct areas, add arbitrary dependencies, use fallback hacks, invent visual assets, or replace supplied artwork. Use Next.js, TypeScript, and Tailwind conventions.

Run pnpm lint, pnpm typecheck, pnpm build, and visual QA against a running app. Compare before/after screenshots at reference dimensions and responsive widths, then resolve high-impact differences first.
```
