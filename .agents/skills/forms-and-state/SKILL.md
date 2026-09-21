---
name: forms-and-state
description: Implement form validation, submission, loading, empty, error, and success states for interactive frontend features.
---
# Forms and state

Start with a state table for the actual flow: initial, editing, invalid, pending, success, and failure as applicable. Distinguish an empty response from a failed request. Use existing data/form tools; native form controls and local state are sufficient for simple flows.

## Submission contract

- Confirm the real endpoint/action and response contract. If none is supplied, explicitly identify demo behavior; do not fabricate successful delivery or persistence.
- Use names, labels, appropriate input types and autocomplete. Validate actionable constraints, preserving entered data on failure.
- Prevent duplicate submission while pending, expose progress, and allow retry after recoverable failure. Clear/reset data only after confirmed success or explicit user action.
- Bind field errors to inputs and announce result status. Use `accessibility` for keyboard and focus behavior.
- Handle stale responses when search/filter inputs change rapidly. Cancel obsolete work or ignore responses that no longer match the current request.
- Treat server validation and authorization as authoritative. Do not expose secrets or trusted decisions in client code.

Test the valid path, invalid input, delayed response, server failure, retry, and keyboard submission where applicable using `ui-testing`. Do not add optimistic updates unless rollback behavior is defined.
