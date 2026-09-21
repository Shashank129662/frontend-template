---
name: accessibility
description: Implement or review keyboard access, focus management, semantic controls, forms, and motion accessibility in frontend UI.
---
# Accessibility

Use native semantic elements first: landmarks, ordered headings, links for navigation, buttons for actions, labels for inputs, and fieldsets for grouped options. Give icon-only controls accessible names. Describe informative images; use empty alt text for decorative images.

## Interaction checks

- Navigate using Tab and Shift+Tab. Focus order must follow reading order, remain visible, and avoid hidden content. Check Enter/Space activation on the controls where those keys apply.
- Dialogs need an accessible name, sensible initial focus, contained focus while modal, Escape dismissal when appropriate, and focus restored to the trigger. Prefer an established accessible primitive or native dialog over custom focus machinery.
- Menus and disclosures expose expanded state and their controlled content. Use menu roles only when implementing the expected menu keyboard pattern.
- Associate instructions and errors with inputs; expose invalid state and announce async status without repeatedly interrupting screen-reader users.
- Check text and control contrast, zoom/reflow, touch usability, and reduced-motion behavior. Where a reference creates an accessibility problem, make the smallest usable adjustment and report it.

Automated checks do not establish keyboard or screen-reader usability. Record which flows were exercised manually; use installed accessibility tools if available, without claiming coverage from screenshots alone.
