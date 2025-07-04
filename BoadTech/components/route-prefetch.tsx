"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const routes = [
  "/",
  "/services",
  "/portfolio",
  "/blog",
  "/about",
  "/careers",
  "/contact",
  "/services/web-development",
  "/services/mobile-apps",
  "/services/ui-ux-design",
  "/services/backend-solutions",
  "/services/analytics-seo",
  "/services/digital-transformation"
];

export function RoutePrefetch() {
  const router = useRouter();

  useEffect(() => {
    routes.forEach((route) => {
      router.prefetch(route);
    });
  }, [router]);

  return null;
}
