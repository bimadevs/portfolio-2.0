## 2025-02-18 - Mobile Navigation Accessibility
**Learning:** Icon-only buttons in the mobile navigation (Header.tsx) were missing accessible names, making them invisible to screen readers.
**Action:** When creating icon-only toggles/buttons, always ensure `aria-label` is provided, especially if the `label` prop is omitted for visual reasons.

## 2025-05-19 - Interactive Lists Accessibility
**Learning:** Custom interactive lists (like Carousel indicators) often lack semantic meaning and keyboard support. `div`s with `onClick` are not buttons.
**Action:** Always add `role="button"`, `tabIndex={0}`, `aria-label`, and `onKeyDown` handlers to non-semantic interactive elements.

## 2025-05-27 - IconButton Default Labels
**Learning:** The `IconButton` component falls back to the icon name (e.g., "chevronRight") if no `aria-label` or `tooltip` is provided, which provides poor context to screen readers.
**Action:** Always verify the computed accessible name of `IconButton`s. If the icon name is generic, explicitly provide `aria-label`.
