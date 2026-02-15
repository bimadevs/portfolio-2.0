## 2025-05-15 - Interactive Wrappers Accessibility
**Learning:** The design system uses `RevealFx` and `Flex` as interactive wrappers (e.g. in Carousel). These components render `div`s by default and do not automatically handle accessibility for interactive states.
**Action:** When making `RevealFx` or `Flex` interactive (onClick), always manually add `role="button"`, `tabIndex={0}`, `aria-label`, and `onKeyDown` handler for keyboard support.
