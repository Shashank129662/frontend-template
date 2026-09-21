---
name: ui-testing
description: Test frontend user journeys and interaction regressions with the installed Playwright tooling, including keyboard, failure, and responsive states.
---
# UI testing

## Choose coverage

Read the changed components, routes, and existing tests. Define a short matrix of user actions and observable outcomes. Cover the primary journey and the failures relevant to the change; do not add tests for trivial markup or implementation details.

`@playwright/test` is already installed. The repository currently has a screenshot helper, but no committed interaction suite or Playwright configuration. Do not claim `pnpm test` exists. When adding durable tests, use a focused `tests/ui/*.spec.ts` file and add only the configuration/scripts needed to run it. Reuse any configuration introduced since this skill was written.

## Write stable checks

- Prefer `getByRole` with accessible names and `getByLabel`. Use test IDs only when semantic locators cannot distinguish a target.
- Assert visible outcomes: navigation URL, expanded content, form error, status message, or persisted state. Avoid testing hook internals, class strings, or arbitrary DOM nesting.
- Use Playwright's locator waits and retrying assertions. Wait for a meaningful UI state, not fixed sleeps or network-idle on pages with polling.
- Isolate test data and state. Mock external services deterministically when testing UI handling; clearly distinguish mock coverage from end-to-end integration coverage. Never submit real external forms during a routine UI check.
- Exercise relevant keyboard navigation, focus return, pending/disabled behavior, failure/retry, and mobile navigation. Add cross-browser coverage when required by scope or a browser-specific regression.
- For a bug fix, ensure the assertion reproduces the original failure and passes after the correction when practical.

## Run and report

Start the app with `pnpm dev` (or the production build when needed). With tests/config present, run `pnpm exec playwright test tests/ui`; inspect failures and retain useful traces/screenshots. If Chromium is missing, use `pnpm exec playwright install chromium` subject to environment permissions. Report setup blockers rather than skipping silently.

Use `visual-qa` separately for screenshot comparison. Report the flows, viewport/browser coverage, command results, and any untested backend behavior.
