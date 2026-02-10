## 2024-05-22 - Optimizing Route Guard for Next.js App Router
**Learning:** Using `useEffect` for synchronous route validation in Next.js triggers unnecessary loading states and layout shifts on every navigation.
**Action:** Move synchronous checks (like route enablement and protection config) to the render phase. Only use effects for actual async operations (like auth checks) and ensure public routes render immediately without blocking.

## 2025-05-23 - Optimizing Carousel Image Preloading
**Learning:** Manual image preloading using `new Image()` bypasses `next/image` optimizations, leading to double downloads (unoptimized original + optimized variant).
**Action:** Use a hidden `SmartImage` (or `next/image`) with `priority` prop to preload the next slide. This ensures the browser downloads the exact optimized URL that will be displayed.

## 2026-02-10 - Caching MDX Data Fetching
**Learning:** `getPosts` was called multiple times per request (metadata + page), causing redundant file reads. `React.cache` uses reference equality for arguments, so caching `getPosts(["arr"])` fails if the array is new each time.
**Action:** Wrap the internal `getMDXData(dir: string)` with `React.cache` instead, as string paths are primitives and cache correctly.
