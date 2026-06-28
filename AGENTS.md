# PORTFOLIO KNOWLEDGE BASE

**Generated:** 2026-06-28
**Commit:** 1b98713
**Branch:** main

## OVERVIEW

Next.js 14 portfolio site for BimaDev (FullStack Developer). Dark-themed, content-driven with MDX blog and custom UI library.

## STRUCTURE

```
├── src/
│   ├── app/             # Next.js App Router pages + resources (config, content)
│   │   ├── about/       # About page
│   │   ├── blog/        # Blog listing + [slug] pages + MDX posts
│   │   ├── gallery/     # Photo gallery
│   │   ├── work/        # Projects listing + [slug] pages
│   │   ├── og/          # Open Graph image generation
│   │   ├── resources/   # config.js (routing, style, effects) + content.js (person, social, pages)
│   │   ├── pages/       # Legacy API routes (auth)
│   │   └── utils/       # formatDate.ts, utils.ts (MDX parsing)
│   ├── components/      # Project-specific components (Header, Footer, RouteGuard, ProjectCard, etc.)
│   └── once-ui/         # Custom UI library (see src/once-ui/AGENTS.md)
├── public/              # Static assets (images, trademark)
├── next.config.mjs      # MDX + security headers
├── biome.json           # Linting + formatting (spaces 2, double quotes, 100 char width)
├── tsconfig.json        # strictNullChecks only, path alias @/* → src/*
└── postcss.config.js    # PostCSS with custom media queries
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Page content/text | `src/app/resources/content.js` | All page copy, person info, social links |
| Routing/theme config | `src/app/resources/config.js` | Route toggles, style/effects config |
| Create blog post | `src/app/blog/posts/*.mdx` | MDX format with gray-matter frontmatter |
| Create project | `src/app/work/projects/*.mdx` | MDX format |
| Add route protection | `src/components/RouteGuard.tsx` | Config in config.js protectedRoutes |
| Modify header nav | `src/components/Header.tsx` | Routes from config.js |
| UI components | `src/once-ui/components/` | 66+ components, all re-exported from index.ts |
| Add social icon | `src/once-ui/icons.ts` | Uses react-icons/hi2, react-icons/pi, react-icons/fa6 |

## CONVENTIONS

- **Styling**: CSS Modules (`.module.scss`) + Once UI layout primitives (Flex, Column, Grid)
- **Colors**: Theme token strings like `"neutral-weak"`, `"brand-background-strong"` — defined in once-ui
- **Imports**: Use `@/` alias (e.g. `@/once-ui/components`, `@/components`, `@/app/resources`)
- **Config**: JS files (not TS) for `content.js` and `config.js` — exported with named exports
- **TypeScript**: `strict: false` in tsconfig but `strictNullChecks: true`
- **Biome**: `pnpm biome` for formatting/linting (spaces 2, double quotes)
- **ESLint**: Only `next/core-web-vitals` — minimal config

## ANTI-PATTERNS

- **DO NOT** add new icon libraries — use existing `react-icons` once-ui registry
- **DO NOT** bypass RouteGuard for password-protected routes
- **DO NOT** add Tailwind — project uses CSS Modules + SCSS + Once UI
- **DO NOT** add new npm dependencies unless stdlib cannot do it

## COMMANDS

```bash
pnpm dev       # Next.js dev server
pnpm build     # Production build
pnpm start     # Start production server
pnpm lint      # Next.js lint
pnpm format    # Biome formatting
```

## NOTES

- `tsconfig.json` uses `strict: false` — preferring flexibility over full strictness
- Blog posts and project pages share identical MDX parsing via `utils.ts`
- Route protection uses `/api/check-auth` and `/api/authenticate` endpoints
- Once UI is a self-contained component library — treat as internal, not third-party
- `minHeight: "100vh"` on body — layout uses Column flex pattern
- Animations via framer-motion + GSAP + custom RevealFx/GlitchFx components
