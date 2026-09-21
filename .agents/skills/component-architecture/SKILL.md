---
name: component-architecture
description: Refactor or implement React component boundaries, reusable controls, and shared variants while preserving consumer behavior.
---
# Component architecture

## Find the boundary

Inspect existing components and every caller before extracting shared UI. Separate route composition, section content, and reusable controls by responsibility. Reuse an existing primitive before introducing another. Extract repeated behavior or a meaningful independent section; do not extract every wrapper.

Use the existing `src/components/layout`, `sections`, `ui`, and `shared` conventions when applicable; create folders only when needed. Keep page-specific helpers and types close to their consumer. Put shared integration logic in `src/lib` and pure reused utilities in `src/utils` without duplicating responsibilities.

## Design the contract

- Use explicit typed props and small named variants supported by actual callers. Prefer composition/children for variable content over many boolean flags.
- Preserve native element semantics and useful native attributes. A navigation link remains a link; an action remains a button. Set non-submit buttons to `type="button"` in forms.
- Keep state with its closest owner. Share stateful logic through a hook only when multiple consumers need it; do not add global state for local UI.
- Keep interactive client boundaries narrow. Avoid pushing an entire page to the client to share one interactive control.
- Keep Tailwind variant classes as complete strings so class detection works; do not construct fragments dynamically.

## Refactor safely

List existing variants and consumers, migrate them together, and remove replaced dead code only within scope. Verify each affected caller at relevant breakpoints and states. Use `ui-testing` for behavioral regressions and `visual-qa` when shared styles change. Reuse is complete when real consumers use the component, not merely when an unused abstraction exists.
