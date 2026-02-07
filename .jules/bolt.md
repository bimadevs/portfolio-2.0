## 2024-05-22 - Optimizing Route Guard for Next.js App Router
**Learning:** Using `useEffect` for synchronous route validation in Next.js triggers unnecessary loading states and layout shifts on every navigation.
**Action:** Move synchronous checks (like route enablement and protection config) to the render phase. Only use effects for actual async operations (like auth checks) and ensure public routes render immediately without blocking.

## 2025-05-23 - Optimizing Carousel Image Preloading
**Learning:** Manual image preloading using `new Image()` bypasses `next/image` optimizations, leading to double downloads (unoptimized original + optimized variant).
**Action:** Use a hidden `SmartImage` (or `next/image`) with `priority` prop to preload the next slide. This ensures the browser downloads the exact optimized URL that will be displayed.
