# Agent Guidelines

This repository is a production-level frontend application built with **Next.js App Router, React, TypeScript, Tailwind CSS v4, and pnpm**.

The project is designed to support production frontend development, including implementations created from Figma designs, screenshots, mockups, visual references, and existing product requirements.

`AGENTS.md` defines repository-wide architecture, coding conventions, implementation standards, asset requirements, testing expectations, and verification rules.

`PROMPT.md` contains reusable task-specific instructions.

---

## Architecture Overview

* **Framework:** Next.js with App Router
* **UI Library:** React
* **Language:** TypeScript with strict mode
* **Styling:** Tailwind CSS v4
* **Package Manager:** pnpm
* **Routing:** Next.js App Router
* **Images:** Next.js Image component where appropriate
* **Navigation:** Next.js Link component
* **SEO:** Next.js Metadata API
* **Animation:** CSS transitions by default; animation libraries only when required
* **Testing:** Playwright-based browser and visual validation
* **Linting:** ESLint
* **Type Checking:** TypeScript
* **Assets:** Local assets stored under `public/assets/`

When a visual reference is supplied, the supplied **Figma design, screenshot, image, mockup, or design frame is the visual source of truth**.

Do not allow starter-template styling, placeholder UI, or existing demo content to override the supplied design.

---

# Coding Conventions

## Variable Naming

Use `camelCase` for variables.

Use descriptive names rather than abbreviations.


---

## TypeScript Conventions

Use `PascalCase` for:

* React components
* Interfaces
* Type aliases representing structured data
* Classes


Use `camelCase` for:

* Variables
* Functions
* Methods
* Hooks
* Properties

Do not use `any` simply to bypass TypeScript errors.

Prefer TypeScript inference when the inferred type remains clear.

Explicitly define types when:

* Type inference is insufficient
* Defining component contracts
* Defining API contracts
* Defining shared application data
* Defining complex objects

Shared types should be placed in:

```text
src/types/
```

Do not repeatedly redefine the same interface across multiple components.

Avoid unsafe type assertions unless there is a clear technical reason.

Do not suppress TypeScript errors simply to make the build pass.

---

# Project Structure

The primary project structure is:

```text
src/
├── app/
├── components/
├── lib/
├── types/
└── utils/

public/
└── assets/
    └── fonts/

scripts/
```

## `src/app/`

Contains:

* Routes
* Pages
* Layouts
* Metadata
* Global styles
* Loading states
* Error states
* Route-specific components when appropriate

---

## `src/components/`

Contains:

* Shared UI components
* Layout components
* Navigation components
* Reusable sections
* Reusable page components

Do not create unnecessary nested directories.

---

## `src/types/`

Contains reusable TypeScript definitions.



---

## `src/utils/`

Contains:

* Static reusable data
* Utility functions
* Constants
* Formatting helpers
* Data transformation helpers

Large static data structures should not be embedded directly inside presentation components when they can reasonably live here.

---

## `src/lib/`

Contains:

* Shared application logic
* Framework integrations
* Service helpers
* Application-level reusable utilities

Do not move simple component-specific helpers into `lib` unnecessarily.

---

## `public/assets/`

This is the canonical location for frontend assets.

It may contain:

* Background images
* Product images
* Logos
* Icons
* Brand artwork
* Decorative artwork
* Illustrations
* Fonts

Always inspect existing assets before creating or introducing replacements.

---

# Working Agreement

Before modifying code:

1. Inspect the current Git working tree.
2. Inspect the relevant route.
3. Inspect existing components.
4. Inspect callers of components being changed.
5. Inspect `package.json`.
6. Inspect available project scripts.
7. Inspect `public/assets/`.
8. Inspect existing types.
9. Inspect existing utilities.
10. Inspect existing global and component styles.

Preserve unrelated existing work.

Do not rewrite unrelated files.

Do not make architectural changes unless they are necessary for the requested implementation.

Prefer the smallest change that correctly solves the requirement while maintaining production-quality architecture.

Reuse existing components where appropriate.

Do not install new packages for functionality that can reasonably be implemented using:

* Next.js
* React
* TypeScript
* Tailwind CSS
* CSS
* Existing project dependencies
---

# Visual Reference Implementation

When implementing from a screenshot, image, mockup, or design reference, inspect the complete reference before coding.

Determine:

* Viewport dimensions
* Section boundaries
* Container width
* Horizontal padding
* Vertical spacing
* Typography
* Colors
* Backgrounds
* Border radii
* Shadows
* Image dimensions
* Image crops
* Alignment
* Layering
* Repeated design patterns
* Responsive intent

Inspect `public/assets/` and map available assets to their intended positions.

Implementation order should generally be:

1. Page structure
2. Major section geometry
3. Containers
4. Typography
5. Spacing
6. Primary imagery
7. Decorative imagery
8. Responsive behaviour
9. Interactions
10. Visual refinement

Do not blindly reproduce screenshot coordinates using absolute positioning.

Reconstruct the layout using maintainable:

* Grid
* Flexbox
* Containers
* Responsive rules
* Relative positioning

Use absolute positioning only when the actual design requires layered or floating elements.

---

# SEO and Metadata

Production pages should include appropriate metadata using the Next.js Metadata API.

Metadata may include:

* Title
* Description
* Canonical URL
* Open Graph metadata
* Twitter metadata
* Robots directives

Define metadata at the closest appropriate route or layout.

Do not invent:

* Production domains
* Canonical URLs
* Social handles
* Brand claims
* Social preview assets

Keep unverified metadata generic.

Use semantic heading hierarchy.

Example:

```text
h1
 ├── h2
 │    └── h3
 └── h2
```

A page should normally contain one primary `h1`.

Do not select heading levels based purely on font size.

---
# Development Workflow

Follow this workflow for application changes:

1. Inspect the repository state.
2. Inspect the relevant route and existing implementation.
3. Inspect `public/assets/`.
4. Inspect existing components.
5. Inspect existing types and utilities.
6. Understand the supplied requirement or visual reference.
7. Identify reusable components.
8. Implement the structural layout.
9. Implement styling.
10. Implement responsive behaviour.
11. Implement required interactions.
12. Check TypeScript.
13. Run linting.
14. Run the production build.
15. Perform visual validation for UI changes.
16. Perform interaction validation for behaviour changes.
17. Fix discovered issues.
18. Review the final diff for unrelated changes.
19. Report implementation results and remaining limitations.

---

# Verification

For application changes, run:

```bash
pnpm lint
```

Then:

```bash
pnpm typecheck
```

Then:

```bash
pnpm build
```
