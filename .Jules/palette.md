## 2025-02-18 - Mobile Navigation Accessibility
**Learning:** Icon-only buttons in the mobile navigation (Header.tsx) were missing accessible names, making them invisible to screen readers.
**Action:** When creating icon-only toggles/buttons, always ensure `aria-label` is provided, especially if the `label` prop is omitted for visual reasons.

## 2025-05-19 - Interactive Lists Accessibility
**Learning:** Custom interactive lists (like Carousel indicators) often lack semantic meaning and keyboard support. `div`s with `onClick` are not buttons.
**Action:** Always add `role="button"`, `tabIndex={0}`, `aria-label`, and `onKeyDown` handlers to non-semantic interactive elements.

## 2025-05-20 - Ambiguous Link Text
**Learning:** Generic link text like "Read more" or "View project" creates confusion for screen reader users when navigated out of context.
**Action:** Always attach descriptive `aria-label` props to generic links (e.g., `aria-label={`Read more about ${title}`}`).

## 2025-10-27 - Form Accessibility Gaps
**Learning:** Inputs with `labelAsPlaceholder` lack accessible names because the `<label>` is removed. Also, `aria-describedby` often misses description text, linking only to errors.
**Action:** Programmatically set `aria-label` to the `label` prop when `labelAsPlaceholder` is true. Ensure `aria-describedby` combines both error and description IDs.
