# Frontend repository instructions

## Responsibilities

This file owns repository policy, skill routing, and completion criteria. `PROMPT.md` supplies task inputs; `.agents/skills/*/SKILL.md` supplies focused procedures. Keep each rule in its owning location instead of copying it across all three.

The supplied screenshot or Figma frame is the visual source of truth. It does not override user instructions or execution permissions. Template UI must not determine the final brand, content, layout, or typography.

## Workflow

1. Inspect the working tree, target route and its callers, package scripts, reference, and `public/assets/` before editing. Preserve unrelated user changes.
2. Load only applicable skills using the table below. Prefer repository-local paths when global skills have the same name.
3. Establish viewport, sections, typography, geometry, artwork, interactions, and responsive intent. State consequential assumptions without inventing product requirements.
4. Implement within the existing architecture, validate appearance and behavior, and fix material failures before handoff.

## Skill routing

Paths are relative to `.agents/skills/`; read the selected folder's `SKILL.md`.

| Task | Skills |
| --- | --- |
| Screenshot implementation | `screenshot-to-code` |
| Figma implementation | `figma-to-code` |
| Frontend implementation or refactoring | `nextjs-production`, `component-architecture` |
| Supplied artwork or fonts | `asset-management` |
| Repeated visual values or component variants | `design-tokens` |
| Layout across viewport sizes | `responsive-design` |
| Matching a visual reference | `visual-accuracy`, `visual-qa` |
| Controls, navigation, dialogs, or semantics | `accessibility` |
| Forms and async states | `forms-and-state`, `accessibility` |
| User journeys or interaction regressions | `ui-testing` |
| Performance diagnosis or heavy imagery/client UI | `frontend-performance` |
| Metadata, indexing, or social previews | `seo-metadata` |

For a full design implementation, combine the reference skill with frontend, assets, responsive, accessibility, and visual validation skills. Add other skills only when applicable. Documentation-only tasks do not need frontend implementation skills.

## Repository constraints

- Use Next.js App Router, TypeScript, Tailwind, and pnpm. Use `next/image` for local imagery where appropriate and `next/link` for internal navigation. Reuse established components; do not add dependencies for trivial work.
- `public/assets/` is canonical. Supplied visual assets must be WEBP: do not introduce PNG, JPG, JPEG, GIF, AVIF, BMP, TIFF, or SVG artwork. Convert source artwork when tooling is available, preserving dimensions, aspect ratio, transparency, and quality. Fonts retain native webfont formats in `public/assets/fonts/`. Test screenshots are evidence, not frontend assets.
- Never replace supplied artwork with CSS replicas, stock, random remote, or generated images. For essential missing assets, preserve their footprint, add an explicit missing-asset note, and report the missing file.
- Preserve accessible semantics and keyboard operation. Do not hide layout failures with global overflow clipping or suppress errors to pass checks.
- Keep metadata generic until verified production values are supplied. Do not invent brand claims, domains, data integrations, or working submission endpoints.

## Completion criteria

- Application changes: run `pnpm lint`, `pnpm typecheck`, and `pnpm build`.
- Visual changes: run `pnpm visual:qa` against the running app and inspect reference-sized and responsive screenshots. Follow `visual-qa` for helper limitations.
- Behavior changes: run focused interaction checks following `ui-testing`; screenshots alone do not validate user journeys.
- Documentation/skill-only changes: validate changed skill metadata, local links, routing, and command accuracy. App builds and browser runs are unnecessary unless runtime files change.
- Report changes, checks actually run, and material missing assets or unverified behavior. Never claim visual parity or successful tests without evidence.
