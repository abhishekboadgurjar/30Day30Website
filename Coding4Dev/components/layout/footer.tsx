import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-card/50">
      <div className="container px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Coding4Dev
              </span>
            </Link>
            <p className="text-muted-foreground">
              Learn coding, web development, and create amazing projects with us. From beginner to advanced tutorials.
            </p>
            <div className="flex items-center space-x-2 pt-2">
              <Link href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </Button>
              </Link>
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
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/tutorials"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Video Tutorials
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog Articles
                </Link>
              </li>
              <li>
                <Link 
                  href="/courses"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link 
                  href="/resources"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Free Resources
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Subscribe</h3>
            <p className="text-muted-foreground">
              Get the latest tutorials and resources directly to your inbox.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center mt-12 pt-8 border-t text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm">
              © {currentYear} Coding4Dev. All rights reserved.
            </p>
            <p className="text-sm">
              Design and developed by{" "}
              <Link 
                href="https://www.boadtechnologies.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors font-medium"
              >
                Boad Technologies
              </Link>
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Link 
              href="/privacy"
              className="text-sm hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms"
              className="text-sm hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}