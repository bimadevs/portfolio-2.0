"use client";

import { usePathname } from "next/navigation";
import { Flex } from "@/once-ui/components";
import { RouteGuard } from "@/components/RouteGuard";

export function PageLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    // Home page: no padding constraints — hero spans full width.
    return (
      <Flex position="relative" zIndex={0} fillWidth flex={1} direction="column" horizontal="center">
        <RouteGuard>{children}</RouteGuard>
      </Flex>
    );
  }

  // Other pages: centered with horizontal padding.
  return (
    <Flex
      position="relative"
      zIndex={0}
      fillWidth
      paddingY="l"
      paddingX="l"
      horizontal="center"
      flex={1}
    >
      <Flex horizontal="center" fillWidth minHeight="0">
        <RouteGuard>{children}</RouteGuard>
      </Flex>
    </Flex>
  );
}
