---
name: nextjs-production
description: Implement or modify Next.js App Router routes and frontend components with correct server/client boundaries and maintainable TypeScript.
---
# Next.js production

Inspect installed versions, route structure, package scripts, and adjacent patterns before editing. Use APIs supported by the installed Next.js/React/Tailwind versions; do not paste configuration from another major version.

## Runtime boundaries

- Default to Server Components. Add `use client` where state, event handlers, effects, or browser APIs are required, and keep that boundary small.
- Pass serializable data across server/client boundaries. Keep secrets and privileged integrations on the server; public environment values are exposed to the browser.
- Keep rendering deterministic. Avoid accessing window/storage during server rendering or using time/random values that cause hydration mismatches.
- Use route loading, error, and not-found boundaries when the actual route/data behavior needs them. Do not create empty infrastructure for hypothetical features.
- Treat client validation as usability, not authorization. Validate and authorize real mutations at the server boundary.

## Maintainability

Use explicit domain types, narrow unknown input, and avoid `any` or error suppressions that hide an incorrect contract. Keep effects for synchronization with external systems, not values derivable during render. Clean up subscriptions/timers. Handle failed requests visibly; never turn failures into fake success.

Use `component-architecture` for extraction decisions, `forms-and-state` for asynchronous controls, and AGENTS.md for repository commands and completion criteria.
