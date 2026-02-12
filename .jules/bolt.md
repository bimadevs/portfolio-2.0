## 2024-05-22 - Optimizing Route Guard for Next.js App Router
**Learning:** Using `useEffect` for synchronous route validation in Next.js triggers unnecessary loading states and layout shifts on every navigation.
**Action:** Move synchronous checks (like route enablement and protection config) to the render phase. Only use effects for actual async operations (like auth checks) and ensure public routes render immediately without blocking.

## 2025-05-23 - Optimizing Carousel Image Preloading
**Learning:** Manual image preloading using `new Image()` bypasses `next/image` optimizations, leading to double downloads (unoptimized original + optimized variant).
**Action:** Use a hidden `SmartImage` (or `next/image`) with `priority` prop to preload the next slide. This ensures the browser downloads the exact optimized URL that will be displayed.

## 2025-05-24 - Deduplicating Filesystem Reads in App Router
**Learning:** Next.js App Router components (`generateMetadata` and `page.tsx`) run in the same request but do not automatically share the result of synchronous function calls. This caused O(N) redundant filesystem reads for every blog post request.
**Action:** Wrap expensive data fetching functions (like `getMDXData`) with `React.cache`. This memoizes the result for the duration of the request, ensuring the filesystem is read only once per directory per request.
