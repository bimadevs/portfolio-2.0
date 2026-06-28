# ONCE UI — PORTFOLIO UI LIBRARY

## OVERVIEW

Custom UI component library for the portfolio. 66+ components, own design token system, SCSS styling, and icon registry.

## STRUCTURE

```
├── components/    # 66+ React components (re-exported from index.ts)
├── hooks/         # useDebounce
├── modules/code/  # CodeBlock for syntax highlighting
├── styles/        # 16 SCSS files (global, typography, layout, spacing, etc.)
├── tokens/        # 8 SCSS token files (theme, scheme, border, shadow, typography)
├── icons.ts       # Icon registry (react-icons wrapper)
├── interfaces.ts  # Props interfaces (Flex, Grid, Text, Style, Spacing, etc.)
└── types.ts       # Design token types (ColorScheme, TextVariant, SpacingToken, etc.)
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Find component | `components/[Name].tsx` | Each component has own file |
| Component style | `components/[Name].module.scss` | CSS Modules |
| Add icon | `icons.ts` | Register in `iconLibrary` object |
| Change tokens | `tokens/` | SCSS variables for theme |
| Global styles | `styles/` | Imports via styles/index.scss |

## CONVENTIONS

- **Component pattern**: Function component with explicit named export + re-export from `index.ts`
- **Styling**: SCSS Modules (`*.module.scss`) — NEVER inline styles
- **Props**: Extend from `interfaces.ts` base types (FlexProps, StyleProps, CommonProps, etc.)
- **Icons**: Use string key from `iconLibrary` — NOT direct icon imports — `prefixIcon="github"`
- **Design tokens**: String combination types — `background="brand-weak"`, `variant="heading-strong-m"`
- **Layout primitives**: Flex, Column, Row, Grid, Size — these are the building blocks
- **Animations**: RevealFx, GlitchFx, HoloFx, Fade, LetterFx — GSAP + framer-motion based
- **No Tailwind**: All styling via SCSS + design tokens

## ANTI-PATTERNS

- **DO NOT** import icons directly from react-icons — always via `icons.ts` registry
- **DO NOT** use inline `style` props — use design token props instead
- **DO NOT** add new icon libraries — stick to `react-icons/hi2`, `react-icons/pi`, `react-icons/fa6`
- **DO NOT** create standalone CSS — always use `.module.scss`

## KEY COMPONENTS

- `Flex`, `Column`, `Row`, `Grid` — layout primitives with responsive props
- `Text`, `Heading` — typography with `variant` prop
- `Background` — configurable gradient/dots/grid/lines backgrounds
- `Button`, `IconButton`, `ToggleButton` — interactive elements
- `RevealFx`, `GlitchFx`, `Fade` — scroll/entry animations
- `Toast`, `Dialog`, `Dropdown`, `Tooltip` — overlay components
- `SmartImage`, `SmartLink` — enhanced media/link components
- `Avatar`, `Badge`, `Card`, `Chip`, `Tag` — display components
- `Input`, `Textarea`, `Select`, `Checkbox`, `RadioButton`, `Switch`, `PasswordInput` — form controls
