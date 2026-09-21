---
name: component-architecture
description: Choose clear React component boundaries without monolithic pages or needless abstraction.
---
# Component architecture

Keep `app/page.tsx` compositional. Put reusable structural UI in `components/layout`, page blocks in `components/sections`, reusable controls in `components/ui`, and cross-cutting pieces in `components/shared`. Extract a component for a meaningful repeated or independently understandable responsibility; do not split trivial markup or create abstractions for hypothetical reuse.
