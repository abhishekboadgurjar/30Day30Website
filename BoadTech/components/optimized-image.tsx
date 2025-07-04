"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("overflow-hidden relative", className)}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute inset-0 bg-muted/10 animate-pulse"
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        onLoadingComplete={() => setIsLoading(false)}
        className={cn(
          "object-cover transition-all duration-300",
          isLoading ? "scale-110 blur-lg" : "scale-100 blur-0"
        )}
      />
    </div>
  );
}
