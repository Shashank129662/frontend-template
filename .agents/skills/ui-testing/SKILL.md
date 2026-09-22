---
name: ui-testing
description: Use this skill whenever frontend changes need interaction, regression, accessibility, keyboard, responsive, or user-flow validation with Playwright. Trigger it for testing pages, components, forms, dialogs, navigation, menus, authentication flows, loading/error states, mobile behavior, bug fixes, and any change where correctness depends on what a user can see or do in the browser. Use the repository's installed Playwright tooling to create or run stable browser tests based on accessible locators and observable user outcomes. Cover relevant success, failure, retry, disabled/loading, focus, keyboard, and responsive states without testing implementation details. Use visual QA separately when the task is specifically about pixel-level or screenshot comparison.
---
# UI Testing

Use Playwright to validate frontend behavior from the user's perspective. Tests should prove that important journeys and interactions work correctly across the states affected by a change.

Do not create tests simply to increase coverage. Focus on behavior that can regress and outcomes users can observe.

## Inspect the change first

Before writing tests:

1. Read the changed components, routes, layouts, utilities, and existing tests.
2. Identify the user-facing behavior affected by the change.
3. Check whether Playwright configuration or UI tests already exist.
4. Reuse existing testing conventions whenever possible.
5. Determine which browsers, viewports, interaction states, and failure conditions are relevant.

Create a small test matrix containing:

* user action
* expected visible outcome
* important failure state
* keyboard behavior when relevant
* responsive behavior when relevant

Prioritize the primary user journey and realistic regressions.

Do not test trivial markup, static implementation details, or behavior unrelated to the change.

## Playwright setup

`@playwright/test` is already installed.

The repository may initially contain only screenshot or visual-QA helpers without a committed interaction test suite or Playwright configuration.

Never assume commands or configuration exist without checking the repository.

In particular, do not claim `pnpm test` exists unless it is actually defined.

When durable interaction tests are required and no established structure exists, prefer:

```text
tests/
└── ui/
    └── <feature>.spec.ts
```

Add only the minimum Playwright configuration and package scripts necessary to execute the tests.

If testing infrastructure has already been introduced since this skill was written, reuse it instead of creating competing configuration.

## Test user behavior

Write tests around what a real user can perceive and perform.

Prefer assertions for outcomes such as:

* navigation to the expected route
* content becoming visible or hidden
* dialogs opening and closing
* menus expanding
* forms accepting valid input
* validation messages appearing
* loading or pending states
* disabled controls
* success or error messages
* retry behavior
* persisted UI state
* responsive navigation
* keyboard interaction
* focus movement and restoration

Avoid assertions against:

* React hooks
* component state
* internal functions
* CSS class strings
* arbitrary DOM nesting
* framework-generated markup
* implementation details invisible to users

## Test interaction states

When relevant to the changed feature, validate more than the ideal path.

Consider:

* success
* validation failure
* API failure
* retry
* loading
* disabled state
* empty state
* keyboard navigation
* focus behavior
* dialog focus return
* mobile navigation
* tablet layout
* desktop layout

Do not mechanically test every state. Select states that could realistically regress because of the change.

## Responsive behavior

When the affected UI changes across breakpoints, test representative viewport sizes.

At minimum, consider:

```text
Mobile
Desktop
```

Add tablet coverage when the layout has meaningful tablet-specific behavior.

Verify functional responsive behavior such as:

* navigation collapsing correctly
* menus remaining usable
* dialogs fitting within the viewport
* important controls remaining reachable
* content not becoming inaccessible
* interactions continuing to work after layout changes

Pixel-level comparison belongs to the repository's visual QA workflow rather than interaction tests.

## Keyboard and accessibility behavior

When a component is interactive, validate relevant keyboard behavior.

Examples include:

* Tab navigation
* Enter activation
* Space activation
* Escape to close dialogs or menus
* focus movement
* focus restoration
* accessible names
* disabled controls
* modal focus behavior

Do not attempt to replace a complete accessibility audit with Playwright interaction tests.

Test the accessibility behavior directly affected by the feature.

## External services

Keep routine UI tests deterministic.

Mock external APIs when the purpose of the test is validating frontend behavior.

Clearly distinguish between:

```text
Mocked UI test
```

and:

```text
End-to-end integration test
```

Never submit real payments, emails, external forms, destructive actions, or third-party transactions during routine UI testing.

Isolate test data so repeated runs produce consistent results.

## Bug fixes

When testing a bug fix:

1. Reproduce the original user-visible failure when practical.
2. Create an assertion representing the correct behavior.
3. Confirm the assertion would fail against the broken behavior.
4. Verify it passes after the fix.

The regression test should protect against the actual failure rather than merely exercising the affected component.

## Run the application

Use the repository's documented development command.

When applicable:

```bash
pnpm dev
```

Use a production build when the behavior depends on production-specific rendering, routing, optimization, or configuration.

With Playwright tests and configuration present, run:

```bash
pnpm exec playwright test tests/ui
```

For a focused test:

```bash
pnpm exec playwright test tests/ui/<feature>.spec.ts
```

If Chromium is unavailable:

```bash
pnpm exec playwright install chromium
```

Only install browser dependencies when environment permissions allow it.

Never silently skip tests because of missing infrastructure. Report the blocker.

## Debug failures

When a test fails, determine whether the failure comes from:

* application behavior
* incorrect test assumptions
* unstable selectors
* timing or synchronization
* missing test data
* environment configuration
* browser-specific behavior

Use Playwright traces, screenshots, and error output when useful.

Fix the underlying problem rather than hiding instability with retries, sleeps, or overly broad selectors.

## Completion criteria

UI testing is complete when:

* affected primary user journeys have been exercised
* important regression states are covered
* relevant keyboard behavior has been checked
* relevant responsive behavior has been checked
* tests use stable semantic selectors
* assertions validate observable outcomes
* external dependencies are deterministic where appropriate
* executed tests pass, or blockers are clearly reported

## Report results

At completion, report:

* flows tested
* tests added or modified
* browsers tested
* viewport coverage
* keyboard/accessibility checks performed
* mocked versus real integrations
* commands executed
* passing/failing results
* remaining untested behavior
* environment or backend blockers

Do not claim coverage that was not actually executed.