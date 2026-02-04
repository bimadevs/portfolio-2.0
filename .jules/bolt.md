## 2024-05-22 - Optimizing Route Guard for Next.js App Router
**Learning:** Using `useEffect` for synchronous route validation in Next.js triggers unnecessary loading states and layout shifts on every navigation.
**Action:** Move synchronous checks (like route enablement and protection config) to the render phase. Only use effects for actual async operations (like auth checks) and ensure public routes render immediately without blocking.
