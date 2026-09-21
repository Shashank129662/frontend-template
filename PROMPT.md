# Frontend task prompts

Replace the bracketed inputs in one prompt below. [AGENTS.md](AGENTS.md) owns repository policy and skill routing; prompts supply task-specific scope only. Omit inputs that do not apply.

## Implement a reference

```text
Follow AGENTS.md. Implement [screenshot attachment or Figma URL and frame ID] at [route].
Reference viewport: [width × height]. Other supplied breakpoints: [references].
Assets and fonts: [paths within public/assets].
Interactions and destinations: [behavior and URLs].
Content or data source: [provided copy/API/static data].
Acceptance criteria: [specific visual and behavioral outcomes].
```

## Correct an existing UI

```text
Follow AGENTS.md. Compare [route] with [reference] and fix [observed mismatches].
Reproduction: [viewport, state, and steps].
Preserve: [working behavior or areas outside scope].
Acceptance criteria: [expected appearance and behavior].
```

## Reuse components

```text
Follow AGENTS.md. Refactor [components/routes] to share [repeated UI or behavior].
Existing variants and callers: [examples].
Preserve appearance, semantics, public props, and interactions unless specified.
Acceptance criteria: [which consumers should use the shared implementation].
```

## Test the UI

```text
Follow AGENTS.md. Validate [routes] against [reference, if available].
Critical user journeys: [steps and expected outcomes].
States: [empty/loading/error/success and relevant roles].
Viewports/browsers: [required coverage].
Add regression tests for [behavior], fix failures within [scope], and report evidence and remaining gaps.
```
