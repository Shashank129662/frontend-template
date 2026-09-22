# Next.js Design-to-Code Template

A reusable, production-oriented **Next.js + TypeScript + Tailwind** starter for Figma-to-Code, Screenshot-to-Code, and Image-to-Code work with Codex. It keeps the implementation generic so a new design—not an old brand—defines the resulting site.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- pnpm
- ESLint
- Playwright-based visual QA helper

## Install and run

```bash
pnpm install
pnpm dev
```

Run quality checks before handoff:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

With the development server running, capture responsive QA screenshots:

```bash
pnpm visual:qa
```

The script writes screenshots to `artifacts/screenshots/` and checks status, errors, broken images, horizontal overflow, and H1 count. To test another route or server: `UI_ROUTES=/pricing UI_URL=http://localhost:3000 pnpm visual:qa`.

## Designer workflow

1. Clone the repository and run `pnpm install`.
2. Convert supplied raster visual assets to **WEBP** without changing aspect ratio or degrading quality.
3. Put files into the relevant `public/assets/` folder.
4. Provide a screenshot/image reference or Figma page/frame.
5. Open [PROMPT.md](PROMPT.md) and copy the matching prompt.
6. Give Codex the prompt and reference.
7. Codex reads [AGENTS.md](AGENTS.md) and relevant `.agents/skills/` instructions.
8. Codex maps assets, builds the UI, validates it, and iterates against the reference.
9. Review generated UI and provide missing brand assets or production metadata.

### WEBP-only visual asset policy

All supplied frontend raster visual assets must be `.webp`. Do not add PNG, JPG, JPEG, GIF, AVIF, BMP, TIFF, or SVG files as normal visual assets. WEBP gives a consistent pipeline, broad browser support, efficient compression, transparency support, and smaller frontend payloads. CSS shapes and programmatic icons remain fine when appropriate; supplied visual artwork belongs in WEBP.

Fonts may stay in native webfont formats under `public/assets/fonts/`.

### Asset placement and naming

```text
public/assets/
├── backgrounds/
├── images/
├── icons/
├── logos/
└── fonts/
```

Use stable, descriptive names: `hero-background.webp`, `hero-phone.webp`, `feature-dashboard.webp`, `product-card-01.webp`, `brand-amazon.webp`, and `arrow-right.webp`. Avoid `image1.webp`, `img2.webp`, `final.webp`, and `new-final-2.webp`.

`public/assets/` is canonical. Codex inspects it before creating visual elements, so an available `hero-phone.webp` is used rather than an approximate CSS drawing.

## Project structure

```text
src/
├── app/             App Router routes, layout, globals, robots, sitemap
├── components/      Layout, sections, shared parts, and UI components
├── lib/             Reused integrations and shared helpers
├── types/           Shared TypeScript types
└── utils/           Reused utility functions
public/assets/       Canonical supplied assets, organized by purpose
scripts/             Visual QA automation
.agents/skills/      Repository-local Codex workflow skills
AGENTS.md            Primary instructions for Codex
PROMPT.md            Copy-ready implementation prompts
```

## SEO setup

The root layout uses generic Metadata API defaults. Set `NEXT_PUBLIC_SITE_URL` to the verified production origin, then replace generic title, description, Open Graph, Twitter, canonical, and sitemap values with real site information. Do not ship generic metadata as final brand metadata.

## Notes for implementation

Use `next/image` for local artwork where appropriate and preserve proportions. Use `next/link` for internal navigation. Keep substantial pages split into meaningful components without needless micro-components. Do not use fake images, random remote sources, or fallback hacks when an essential asset is missing—preserve layout and report the missing file instead.

