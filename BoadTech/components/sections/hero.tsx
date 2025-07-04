"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Particles from "@/components/ui/particles";

export function HeroSection() {
 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e: globalThis.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

const calculateTransform = (axis: "x" | "y", strength = 15) => {
  if (typeof window === "undefined") return 0;

  const windowDimension =
    axis === "x" ? window.innerWidth : window.innerHeight;
  const mousePos = axis === "x" ? mousePosition.x : mousePosition.y;
  const percentage = mousePos / windowDimension - 0.5;
  return percentage * strength;
};


  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Particles className="absolute inset-0" />

      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-10"
        )}
      />

      <div className="container relative z-20 px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            className="inline-flex items-center justify-center rounded-full border border-muted px-3 py-1 text-sm font-medium bg-background/50 backdrop-blur-sm mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="mr-1 h-3 w-3 text-primary" />
            <span>Innovation meets technology</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-tight"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            style={{
              transform: `translate(${calculateTransform(
                "x",
                5
              )}px, ${calculateTransform("y", 5)}px)`,
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-card-foreground">
              Turning Ideas Into
            </span>
            <br />
            Digital Excellence
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            We specialize in creating powerful, responsive, and fully-functional
            websites and apps with speed, scalability, and style in mind.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center pt-4"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <Button asChild size="lg" className="text-base rounded-full px-8">
              <Link href="#contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base rounded-full px-8"
            >
              <Link href="#portfolio">View Our Work</Link>
            </Button>
          </motion.div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Link
                href="#services"
                className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-sm font-medium mb-2">Scroll Down</span>
                <div className="w-5 h-8 border-2 border-current rounded-full flex justify-center pt-1">
                  <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
