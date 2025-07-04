"use client";

import dynamic from "next/dynamic";
import { LoadingSpinner } from "./loading";

export function withDynamicImport(Component: any, options = {}) {
  return dynamic(() => Promise.resolve(Component), {
    loading: () => <LoadingSpinner />,
    ssr: true,
    ...options,
  });
}
