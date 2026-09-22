# Frontend task briefs

Copy the closest template and replace bracketed fields. `AGENTS.md` governs implementation practices and skill selection; this file defines the scope of one request. Omit fields that do not apply.

## Build from a visual reference

```text
Follow AGENTS.md. Build [route or component] from [screenshot attachment, image, or Figma URL/frame].

Reference viewport: [width × height]. Responsive references: [additional sizes or expected reflow].
Provided assets and fonts: [paths in public/assets, or “none supplied”].
Required content: [copy, data, labels, and states].
Required interactions: [controls, destinations, keyboard behaviour, and animations].
Out of scope: [areas that must not change].
Acceptance criteria: [visible and behavioural outcomes].
```

## Improve an existing screen

```text
Follow AGENTS.md. Update [route or component] to address [goal or observed mismatches].

Reference and reproduction: [URL/image, viewport, UI state, and steps].
Preserve: [existing behaviour, assets, public props, or adjacent routes].
Responsive expectations: [mobile/tablet/desktop behaviour].
Acceptance criteria: [what must look or work differently].
```

## Add or refine an interaction

```text
Follow AGENTS.md. Implement [interaction] in [route or component].

Trigger and outcome: [user action and visible result].
States: [default, loading, empty, error, success, disabled].
Accessibility requirements: [keyboard sequence, focus handling, announcements].
Motion requirements: [none, CSS feedback, or named animation behaviour].
Acceptance criteria: [observable checks].
```

## Refactor shared UI

```text
Follow AGENTS.md. Refactor [routes/components] so they share [UI or behaviour].

Current callers and variants: [paths and differences].
Public API to preserve: [props, URLs, events, and semantics].
Visual constraints: [what must stay identical or change].
Acceptance criteria: [target consumers and verification].
```

## Validate a frontend change

```text
Follow AGENTS.md. Validate [routes/components] after [change].

Critical journeys: [steps and expected outcomes].
Visual reference: [image/Figma/none].
Required viewports and browsers: [coverage].
Important states: [loading, empty, error, success, menu/dialog].
Fix failures within [scope] and report the evidence plus any remaining gaps.
```
