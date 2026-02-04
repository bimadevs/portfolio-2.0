"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { routes, protectedRoutes } from "@/app/resources";
import { Flex, Spinner, Button, Heading, Column, PasswordInput } from "@/once-ui/components";
import NotFound from "@/app/not-found";

interface RouteGuardProps {
	children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname() || "";
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [authStatus, setAuthStatus] = useState<{ path: string; isAuthorized: boolean } | null>(null);

  const isProtected = protectedRoutes[pathname as keyof typeof protectedRoutes];

  const isRouteEnabled = (() => {
    if (pathname in routes) {
      return routes[pathname as keyof typeof routes];
    }
    const dynamicRoutes = ["/blog", "/work"] as const;
    for (const route of dynamicRoutes) {
      if (pathname.startsWith(route) && routes[route]) {
        return true;
      }
    }
    return false;
  })();

  useEffect(() => {
    setPassword("");
    setError(undefined);

    if (isProtected) {
      const checkAuth = async () => {
        try {
          const response = await fetch("/api/check-auth");
          setAuthStatus({ path: pathname, isAuthorized: response.ok });
        } catch {
          setAuthStatus({ path: pathname, isAuthorized: false });
        }
      };
      checkAuth();
    }
  }, [pathname, isProtected]);

  const handlePasswordSubmit = async () => {
    const response = await fetch("/api/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      setAuthStatus({ path: pathname, isAuthorized: true });
      setError(undefined);
    } else {
      setError("Incorrect password");
    }
  };

  if (!isRouteEnabled) {
    return <NotFound />;
  }

  if (!isProtected) {
    return <>{children}</>;
  }

  if (authStatus?.path !== pathname) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  if (!authStatus.isAuthorized) {
    return (
      <Column paddingY="128" maxWidth={24} gap="24" center>
        <Heading align="center" wrap="balance">
          This page is password protected
        </Heading>
        <Column fillWidth gap="8" horizontal="center">
          <PasswordInput
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={error}
          />
          <Button onClick={handlePasswordSubmit}>Submit</Button>
        </Column>
      </Column>
    );
  }

  return <>{children}</>;
};

export { RouteGuard };
