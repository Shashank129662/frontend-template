---
name: visual-qa
description: Capture and inspect responsive screenshots using the repository helper, compare with design references, and document rendering defects.
---
# Visual QA

Read `scripts/validate-ui.mjs` before running so commands match its current behavior. Start the target app separately. The default base URL is `http://localhost:3000`.

```bash
UI_ROUTES=/ UI_WIDTHS=320,390,768,1024,1280,1440,1920 pnpm visual:qa
```

`UI_URL`, comma-separated `UI_ROUTES`, `UI_WIDTHS`, `SCREENSHOT_DIR`, and optional `CHROMIUM_PATH` are supported. Screenshots default to `artifacts/screenshots/`; the JSON report is `artifacts/visual-qa-results.json` regardless of screenshot directory.

## Understand coverage

The helper checks response status 200, horizontal overflow, broken HTML images, uncaught page errors, and exactly one H1 per route. It captures full-page screenshots with viewport height fixed at 900 and requests reduced motion. It does not test interactions, console warnings, CSS background loading, accessibility conformance, or design similarity. Its network-idle navigation can time out on continuously active pages.

For an exact reference height or an open menu/dialog state, take a separate Playwright/browser capture with explicit viewport and state; do not pretend width-only helper output matches both reference dimensions. A full-page capture and a viewport crop answer different comparison questions.

## Compare and iterate

Inspect generated images, not just exit codes. Compare composition, typography, artwork crop, spacing, and detail using `visual-accuracy`. Check responsive reflow using `responsive-design`; exercise controls using `ui-testing`.

Keep captures stable with consistent content, loaded fonts/images, and deterministic UI state. Record route, viewport, state, and artifact paths. Fix material mismatches and recapture affected views. Without a reference, report responsive/rendering checks only; do not claim design parity. If browser setup fails, report the exact blocker and checks not performed.
