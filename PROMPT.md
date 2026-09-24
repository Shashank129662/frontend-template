# Frontend UI Task Briefs

Use the closest template below for the frontend task and replace the bracketed fields.

`AGENTS.md` governs implementation standards, design interpretation, responsiveness, accessibility, code quality, skill selection, and validation. This file should describe only the page-specific requirements and context.

Do not manually define pixel sizes, spacing, typography values, colors, breakpoints, or other styling details when they can be inferred from the supplied visual reference.

The implementation should reproduce the supplied design as accurately as possible while following the repository conventions defined in `AGENTS.md`.

---

## Build a Page from Figma

```text
Follow AGENTS.md.

Build the following UI page from the provided Figma design.

Figma Reference:
[Figma URL / frame / node]

Provided Assets:
[list relevant assets from public/assets, or "use available project assets"]

Interactions:
[buttons, navigation, forms, menus, tabs, dialogs, sliders, etc.]

Preserve:
[existing functionality/components/routes that must remain unchanged]

Out of Scope:
[anything that must not be changed]

Acceptance Criteria:
- Reproduce the supplied Figma design accurately.
- Include all visible sections and UI elements from the reference.
- Use provided project assets where applicable.
- Preserve required existing functionality.
- Implement all specified interactions.
- Follow AGENTS.md for responsive behaviour, accessibility, implementation quality, and validation.
```

---

## Build a Page from an Image / Screenshot

```text
Follow AGENTS.md.

Build the following UI page from the supplied visual reference.

Visual Reference:
[attached screenshot / image / reference]

Provided Assets:
[list relevant assets from public/assets, or "use available project assets"]

Interactions:
[buttons, navigation, forms, menus, tabs, dialogs, sliders, etc.]

Preserve:
[existing functionality/components/routes that must remain unchanged]

Out of Scope:
[areas that should not be modified]

Acceptance Criteria:
- Reproduce the supplied reference as accurately as possible.
- Match the visual hierarchy, composition, content placement, and overall appearance of the reference.
- Include all visible sections and UI elements.
- Use supplied assets instead of recreating them when available.
- Implement the required interactions.
- Follow AGENTS.md for responsive behaviour, accessibility, implementation quality, and validation.
```

---

## Build a New UI Page

```text
Follow AGENTS.md.

Create the following frontend page.

Reference:
[Figma / screenshot / image / description]

Required Content:
[text, labels, data, sections, CTAs, etc.]

Provided Assets:
[list assets from public/assets, or "none"]

Interactions:
[buttons, navigation, forms, menus, tabs, dialogs, sliders, etc.]

Existing Components to Reuse:
[components or "identify and reuse suitable existing components"]

Preserve:
[existing application behaviour/routes/components that should not change]

Out of Scope:
[anything that should not be implemented]

Acceptance Criteria:
- Build all requested sections and components.
- Use existing reusable components where appropriate.
- Use supplied project assets where applicable.
- Implement all required interactions and states.
- Keep the implementation consistent with the rest of the application.
- Follow AGENTS.md for design quality, responsiveness, accessibility, code quality, and validation.
```

---

## Update an Existing Page

```text
Follow AGENTS.md.

Update the following existing frontend page.

Page / Route:
[route or page name]

Goal:
[what needs to change]

Reference:
[Figma / screenshot / image / description]

Changes Required:
[list the page-specific changes]

Provided Assets:
[list new/replacement assets if applicable]

Interactions:
[new or modified interactions]

Preserve:
[existing sections, functionality, APIs, components, routes, etc.]

Out of Scope:
[areas that must remain untouched]

Acceptance Criteria:
- Apply the requested changes accurately.
- Match the supplied reference where provided.
- Preserve unrelated existing functionality.
- Reuse existing components where appropriate.
- Avoid unnecessary changes outside the requested page.
- Follow AGENTS.md for implementation and validation.
```

---

## Build or Update a UI Component

```text
Follow AGENTS.md.

Build or update the following UI component.

Component:
[component name]

Reference:
[Figma / screenshot / image / description]

Purpose:
[what the component does]

Content:
[text, icons, images, data, etc.]

Variants:
[variants if applicable]

Interactions:
[click, hover, dropdown, expand/collapse, navigation, etc.]

Preserve:
[existing public props, behaviour, consumers, etc.]

Acceptance Criteria:
- Match the supplied reference where provided.
- Support the required variants and states.
- Preserve existing consumers unless explicitly requested otherwise.
- Keep the component reusable when appropriate.
- Follow AGENTS.md for implementation, accessibility, responsiveness, and validation.
```
---

## Validate a UI Page

```text
Follow AGENTS.md.

Validate the following frontend implementation against its reference.

Page / Route:
[route or page]

Reference:
[Figma / screenshot / image]

Validate:
- Page structure
- Visible content
- Assets and imagery
- Component placement
- Visual hierarchy
- Responsive behaviour
- Interactive elements
- Required UI states
- Accessibility
- Existing functionality

Fix:
Fix any implementation differences that fall within the requested page scope.

Do not:
Do not modify unrelated routes, components, APIs, or application behaviour.

Completion Criteria:
The page should closely reproduce the supplied reference and satisfy the implementation and validation requirements defined in AGENTS.md.
```

---

# Prompt Guidelines

Keep each task focused on **what UI needs to be created or changed**, rather than prescribing implementation-level styling.

Do not add manual requirements for:

* Exact pixel dimensions
* Font sizes
* Margins or padding
* Individual colors
* Border radius values
* Breakpoint values
* Element coordinates
* CSS implementation details

These should be inferred from the supplied Figma design, screenshot, image, existing design system, and repository conventions.

Specify styling details only when they represent an intentional requirement that cannot be determined from the visual reference.

For visual implementation tasks, prioritize this order of truth:

1. Supplied Figma design or visual reference
2. Supplied assets
3. Existing application design system and shared components
4. Page-specific requirements in this file
5. Repository implementation rules from `AGENTS.md`

The task brief defines **what to build**. `AGENTS.md` defines **how to build and validate it**.
