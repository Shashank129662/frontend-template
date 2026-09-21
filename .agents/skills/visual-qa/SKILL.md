---
name: visual-qa
description: Validate responsive rendering with the repository Playwright screenshot helper and iterate against a supplied reference.
---
# Visual QA

Run the app, then execute `pnpm visual:qa` (optionally `UI_URL`, `UI_ROUTES`, `UI_WIDTHS`, and `SCREENSHOT_DIR`). Inspect generated screenshots and `artifacts/visual-qa-results.json`. The script checks status, horizontal overflow, broken images, page errors, and H1 count; it does not replace human comparison. Capture reference-sized viewports first and iterate on material differences.
