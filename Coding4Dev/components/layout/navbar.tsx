"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Github, Instagram, Twitter, Linkedin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Coding4Dev
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden md:flex"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          
          <div className="hidden md:flex items-center gap-3">
            <Link href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          {/* Boad Technologies CTA Button */}
          <Button asChild variant="outline" className="hidden lg:inline-flex">
            <Link 
              href="https://www.boadtechnologies.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Code2 className="h-4 w-4" />
              Need a Website?
            </Link>
          </Button>
          
          <Button asChild variant="default" className="hidden md:inline-flex">
            <Link href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">
              Subscribe
            </Link>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-4 border-b">
                  <span className="font-bold text-xl">Coding4Dev</span>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </div>
                
                <nav className="flex flex-col gap-4 py-6">
                  {NAVIGATION_ITEMS.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                {/* Mobile Boad Technologies Section */}
                <div className="py-4 border-t border-b">
                  <h3 className="font-semibold text-sm text-muted-foreground mb-3">
                    PROFESSIONAL SERVICES
                  </h3>
                  <Button asChild variant="outline" className="w-full">
                    <Link 
                      href="https://www.boadtechnologies.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Code2 className="h-4 w-4" />
                      Boad Technologies
                    </Link>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Website & App Development Services
                  </p>
                </div>
                
                <div className="mt-auto pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <Link href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon">
                        <Github className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon">
                        <Twitter className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon">
                        <Instagram className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                  
                  <Button asChild className="w-full mt-4">
                    <Link href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">
                      Subscribe to YouTube
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}