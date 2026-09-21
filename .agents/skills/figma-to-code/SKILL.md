---
name: figma-to-code
description: Translate an accessible Figma frame into responsive Next.js code using actual Figma structure and local assets.
---
# Figma to code

When Figma access is available, inspect the requested frame: hierarchy, auto-layout, components, variables, styles, typography, spacing, effects, assets, and desktop/mobile constraints. Do not claim an inaccessible file was inspected. Translate meaningful groups into React components rather than copying Figma layers. Use local WEBP assets first and validate the rendered route at the Figma frame dimensions before checking responsive behavior.

## Translate design intent

Identify the exact file, page, node, and variant from the user reference. Read the Figma tool's required skills before invoking it when present. Distinguish auto-layout constraints and reusable instances from incidental layer positions. Map repeated design roles to existing component APIs and tokens; do not generate a React component per layer.

Read relevant variants and interaction states when available. If tool output is truncated, inspect focused subframes. Reconcile exported artwork with local files under the repository asset policy. Report unavailable fonts, missing exports, and unsupported design effects explicitly.
