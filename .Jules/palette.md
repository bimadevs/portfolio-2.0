## 2025-02-18 - Mobile Navigation Accessibility
**Learning:** Icon-only buttons in the mobile navigation (Header.tsx) were missing accessible names, making them invisible to screen readers.
**Action:** When creating icon-only toggles/buttons, always ensure `aria-label` is provided, especially if the `label` prop is omitted for visual reasons.

## 2025-05-19 - Interactive Lists Accessibility
**Learning:** Custom interactive lists (like Carousel indicators) often lack semantic meaning and keyboard support. `div`s with `onClick` are not buttons.
**Action:** Always add `role="button"`, `tabIndex={0}`, `aria-label`, and `onKeyDown` handlers to non-semantic interactive elements.

## 2025-05-20 - Ambiguous Link Text
**Learning:** Generic link text like "Read more" or "View project" creates confusion for screen reader users when navigated out of context.
**Action:** Always attach descriptive `aria-label` props to generic links (e.g., `aria-label={`Read more about ${title}`}`).
\n## 2025-05-23 - [Accessible Placeholder Labels]\n**Learning:** Component library inputs hide labels when `labelAsPlaceholder` is used, making them inaccessible to screen readers as placeholders are not sufficient accessible names.\n**Action:** Ensure custom inputs with hidden labels programmatically assign `aria-label` using the hidden label text.
