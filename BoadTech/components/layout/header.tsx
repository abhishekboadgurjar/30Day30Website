"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  X,
  Zap,
  ChevronDown,
  Code,
  Smartphone,
  PenTool,
  Database,
  LineChart,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

type Service = {
  name: string;
  href: string;
  description: string;
};

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const services: Service[] = [
  {
    name: "Web Development",
    href: "/services/web-development",
    description:
      "Modern web applications using React, Next.js, and other cutting-edge technologies",
  },
  {
    name: "Mobile Apps",
    href: "/services/mobile-apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android",
  },
  {
    name: "UI/UX Design",
    href: "/services/ui-ux-design",
    description:
      "Beautiful, intuitive interfaces with focus on user experience and accessibility",
  },
  {
    name: "Backend Solutions",
    href: "/services/backend-solutions",
    description:
      "Scalable backend systems with robust APIs and efficient databases",
  },
  {
    name: "Analytics & SEO",
    href: "/services/analytics-seo",
    description:
      "Data-driven insights and search engine optimization strategies",
  },
  {
    name: "Digital Transformation",
    href: "/services/digital-transformation",
    description: "End-to-end digital solutions for business modernization",
  },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const headerRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.98]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if header should be visible based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up or at top
      }

      // Determine if header should have backdrop blur
      setScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const headerVariants = {
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    hidden: {
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const logoVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const navItemVariants = {
    rest: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 35,
        staggerChildren: 0.02,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 35,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 35,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 35,
      },
    },
  };

  return (
    <motion.header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        scrolled
          ? "bg-background/85 backdrop-blur-xl py-3 shadow-lg border-b border-border/50"
          : "bg-transparent py-6"
      )}
      variants={headerVariants}
      animate={isVisible ? "visible" : "hidden"}
      style={{
        opacity: headerOpacity,
        scale: headerScale,
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <motion.div
            variants={logoVariants}
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-bold tracking-tighter transition-all duration-300 hover:text-primary"
            >
              <motion.div
                animate={{ rotate: scrolled ? 180 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Zap className="h-6 w-6" />
              </motion.div>
              <span className="relative">
                Boad Tech
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Link>
          </motion.div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <motion.div
                    variants={navItemVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Link
                      href="/"
                      className="text-sm font-medium transition-all duration-300 hover:text-primary px-4 py-2 rounded-lg hover:bg-accent/50"
                    >
                      Home
                    </Link>
                  </motion.div>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/services" legacyBehavior passHref>
                    <NavigationMenuTrigger className="text-sm font-medium transition-all duration-300 hover:text-primary data-[state=open]:bg-accent/50 rounded-lg">
                      Services
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent className="absolute top-0 left-0 w-full">
                    <motion.ul
                      className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-background dark:bg-background border border-border/50 dark:border-border/60 rounded-xl shadow-2xl shadow-foreground/10 dark:shadow-foreground/20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {services.map((service, index) => (
                        <motion.li
                          key={service.href}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.05,
                            ease: "easeOut",
                          }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-md focus:bg-accent focus:text-accent-foreground group"
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <motion.div
                                  className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                                  whileHover={{ rotate: 5 }}
                                >
                                  {service.name === "Web Development" && (
                                    <Code className="h-4 w-4" />
                                  )}
                                  {service.name === "Mobile Apps" && (
                                    <Smartphone className="h-4 w-4" />
                                  )}
                                  {service.name === "UI/UX Design" && (
                                    <PenTool className="h-4 w-4" />
                                  )}
                                  {service.name === "Backend Solutions" && (
                                    <Database className="h-4 w-4" />
                                  )}
                                  {service.name === "Analytics & SEO" && (
                                    <LineChart className="h-4 w-4" />
                                  )}
                                  {service.name ===
                                    "Digital Transformation" && (
                                    <Globe className="h-4 w-4" />
                                  )}
                                </motion.div>
                                <div className="text-sm font-semibold">
                                  {service.name}
                                </div>
                              </div>
                              <motion.p
                                className="text-sm leading-snug text-muted-foreground pl-11 group-hover:text-accent-foreground/80 transition-colors duration-300"
                                initial={{ opacity: 0.7 }}
                                whileHover={{ opacity: 1 }}
                              >
                                {service.description}
                              </motion.p>
                            </Link>
                          </NavigationMenuLink>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {navItems.slice(1).map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <motion.div
                      variants={navItemVariants}
                      initial="rest"
                      whileHover="hover"
                    >
                      <Link
                        href={item.href}
                        className="text-sm font-medium transition-all duration-300 hover:text-primary px-4 py-2 rounded-lg hover:bg-accent/50 relative group"
                      >
                        {item.name}
                        <motion.div
                          className="absolute -bottom-1 left-4 right-4 h-0.5 bg-primary"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </motion.div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center space-x-4 ml-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ThemeToggle />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="
    relative overflow-hidden
    bg-gradient-to-r from-primary via-primary/95 to-primary/90
    hover:from-primary/95 hover:via-primary/90 hover:to-primary/85
    active:from-primary/90 active:via-primary/85 active:to-primary/80
    text-primary-foreground font-semibold
    px-8 py-3 rounded-lg
    shadow-lg hover:shadow-2xl active:shadow-md
    dark:shadow-primary/25 dark:hover:shadow-primary/40
    transform hover:scale-105 active:scale-95
    transition-all duration-300 ease-out
    border border-primary/20 dark:border-primary/30
    backdrop-blur-sm
    group
    before:absolute before:inset-0 
    before:bg-gradient-to-r 
    before:from-foreground/0 before:via-foreground/10 before:to-foreground/0
    dark:before:from-background/0 dark:before:via-background/20 dark:before:to-background/0
    before:translate-x-[-100%] hover:before:translate-x-[100%]
    before:transition-transform before:duration-700 before:ease-out
    after:absolute after:inset-0 after:rounded-lg
    after:bg-gradient-to-r 
    after:from-transparent after:via-foreground/5 after:to-transparent
    dark:after:via-background/10
    after:opacity-0 hover:after:opacity-100
    after:transition-opacity after:duration-300
  "
                >
                  <Link
                    href="/boadx"
                    className="relative z-10 flex items-center gap-2"
                  >
                    Solutions
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </nav>

          {/* Mobile navigation trigger */}
          <div className="flex items-center space-x-4 md:hidden">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ThemeToggle />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="relative overflow-hidden"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              className="container mx-auto px-4 py-6 bg-background/95 backdrop-blur-xl border-t border-border/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.ul
                className="flex flex-col space-y-6"
                variants={mobileMenuVariants}
              >
                <motion.li variants={mobileItemVariants}>
                  <Link
                    href="/"
                    className="text-sm font-medium transition-all duration-300 hover:text-primary hover:pl-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li className="space-y-3" variants={mobileItemVariants}>
                  <Link
                    href="/services"
                    className="text-sm font-medium transition-all duration-300 hover:text-primary hover:pl-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <motion.ul
                    className="pl-4 space-y-3"
                    initial="closed"
                    animate="open"
                    variants={{
                      open: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.1,
                        },
                      },
                      closed: {
                        transition: {
                          staggerChildren: 0.02,
                          staggerDirection: -1,
                        },
                      },
                    }}
                  >
                    {services.map((service) => (
                      <motion.li
                        key={service.href}
                        variants={{
                          open: { opacity: 1, x: 0 },
                          closed: { opacity: 0, x: -20 },
                        }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={service.href}
                          className="text-sm text-muted-foreground hover:text-primary flex items-center gap-3 transition-all duration-300 p-2 rounded-lg hover:bg-accent/50"
                          onClick={() => setIsOpen(false)}
                        >
                          <motion.div
                            className="p-1.5 rounded-md bg-primary/10 text-primary"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                          >
                            {service.name === "Web Development" && (
                              <Code className="h-3 w-3" />
                            )}
                            {service.name === "Mobile Apps" && (
                              <Smartphone className="h-3 w-3" />
                            )}
                            {service.name === "UI/UX Design" && (
                              <PenTool className="h-3 w-3" />
                            )}
                            {service.name === "Backend Solutions" && (
                              <Database className="h-3 w-3" />
                            )}
                            {service.name === "Analytics & SEO" && (
                              <LineChart className="h-3 w-3" />
                            )}
                            {service.name === "Digital Transformation" && (
                              <Globe className="h-3 w-3" />
                            )}
                          </motion.div>
                          <span className="font-medium">{service.name}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.li>
                {navItems.slice(1).map((item) => (
                  <motion.li key={item.name} variants={mobileItemVariants}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        className="text-sm font-medium transition-all duration-300 hover:text-primary hover:pl-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
                <motion.li variants={mobileItemVariants}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/boadx">Solutions</Link>
                    </Button>
                  </motion.div>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
