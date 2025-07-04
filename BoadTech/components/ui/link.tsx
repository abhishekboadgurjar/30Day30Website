"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SmartLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function SmartLink({ href, children, className, onClick }: SmartLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink
      href={href}
      onClick={onClick}
      prefetch={true}
      scroll={false}
      className={cn(
        "relative inline-flex items-center",
        isActive ? "text-primary" : "hover:text-primary",
        className
      )}
    >
      {children}
      {isActive && (
        <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary" />
      )}
    </NextLink>
  );
}
