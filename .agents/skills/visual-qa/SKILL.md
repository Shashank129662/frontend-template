---
name: visual-qa
description: Use this skill when a frontend needs visual QA, screenshot validation, responsive rendering checks, or comparison against Figma designs, reference screenshots, mockups, or expected layouts. Trigger after implementing or modifying UI, during Figma-to-code, image-to-code, screenshot-to-code, responsive design work, visual regression investigation, or when asked to verify that a page renders correctly across screen sizes. Uses the repository visual QA helper to capture screenshots at multiple viewport widths and detect rendering problems such as horizontal overflow, broken images, page errors, invalid responses, and heading issues. Inspect generated screenshots for layout, typography, spacing, alignment, image placement, cropping, responsive reflow, and other visible defects. Use this skill for verification and evidence gathering; use visual-accuracy for correcting design mismatches and ui-testing for interactive behavior.
---
# Visual QA

Capture and inspect the rendered frontend across relevant viewport sizes.

Read `scripts/validate-ui.mjs` before running commands so behavior matches the current repository implementation.

Start the target application separately.

Default URL:

`http://localhost:3000`

Run:

```bash
UI_ROUTES=/ UI_WIDTHS=320,390,768,1024,1280,1440,1920 pnpm visual:qa
```

Supported options include:

* `UI_URL`
* `UI_ROUTES`
* `UI_WIDTHS`
* `SCREENSHOT_DIR`
* `CHROMIUM_PATH`

Screenshots default to:

`artifacts/screenshots/`

The report is written to:

`artifacts/visual-qa-results.json`

## What to inspect

Do not rely only on the command exit code.

Inspect screenshots for:

* layout and section geometry
* responsive reflow
* typography and wrapping
* spacing and alignment
* image size, position, and crop
* overflow or clipping
* broken visual elements
* unexpected rendering differences

Compare against supplied Figma or screenshot references when available.

## Helper coverage

The helper checks:

* HTTP 200 responses
* horizontal overflow
* broken HTML images
* uncaught page errors
* exactly one H1 per route

It captures full-page screenshots with a viewport height of `900` and reduced motion enabled.

It does **not** prove:

* design similarity
* interaction correctness
* accessibility conformance
* CSS background-image loading
* absence of console warnings

Do not claim checks that were not actually performed.

## Exact reference testing

If the reference requires a specific width and height, or UI state such as an open menu, modal, dropdown, or dialog, capture it separately with Playwright using the exact viewport and state.

Do not treat a width-only full-page screenshot as an exact reference-dimension comparison.

## Stable screenshots

Keep comparisons deterministic:

* use consistent content
* wait for fonts and images
* use the same route and UI state
* avoid changing test data
* record viewport dimensions

After fixing a material mismatch, recapture the affected viewport.

## Skill boundaries

Use `visual-qa` to **capture and identify** rendering problems.

Use `visual-accuracy` to **correct visual mismatches**.

Use `responsive-design` to **correct breakpoint and reflow problems**.

Use `ui-testing` to **verify interactions and user journeys**.

## Reporting

Report:

* routes checked
* viewport sizes
* screenshots inspected
* rendering defects found
* reference comparisons performed
* remaining mismatches
* checks not performed
* browser or environment blockers

Without a supplied design reference, report rendering and responsive findings only. Do not claim design parity.
