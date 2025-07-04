"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Play } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function HeroSection() {
  const codeRef = useRef<HTMLPreElement>(null);
  
  useEffect(() => {
    const codeElement = codeRef.current;
    if (!codeElement) return;
    
    const originalCode = `function Coding4Dev() {
  const skills = [
    "HTML", "CSS", "JavaScript",
    "React", "Node.js", "MongoDB",
    "Next.js", "Express"
  ];
  
  return (
    <div className="learn-to-code">
      <h1>Become a Developer</h1>
      <p>Start your coding journey today!</p>
      {skills.map(skill => (
        <Skill name={skill} key={skill} />
      ))}
    </div>
  );
}`;
    
    let i = 0;
    codeElement.textContent = "";
    
    const typeCode = () => {
      if (i < originalCode.length) {
        codeElement.textContent += originalCode.charAt(i);
        i++;
        setTimeout(typeCode, Math.random() * 25 + 5);
      } else {
        setTimeout(() => {
          i = 0;
          codeElement.textContent = "";
          setTimeout(typeCode, 500);
        }, 3000);
      }
    };
    
    typeCode();
    
    return () => {
      i = originalCode.length; // Stop the animation when unmounting
    };
  }, []);
  
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-purple-900/20" />
      
      {/* Animated code circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container relative px-4 md:px-8 pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <div>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring mb-6">
                <span className="text-xs bg-blue-500 rounded-full h-2 w-2 mr-2"></span>
                Learn coding with our YouTube tutorials
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Master Web Development with <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Coding4Dev</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
              Tutorials, guides, and projects for modern web development. From beginner to advanced concepts, all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="group">
                <Link href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Tutorials
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/courses">
                  Explore Courses
                </Link>
              </Button>
            </div>
            
            <div className="pt-6">
              <p className="text-sm text-muted-foreground">
                Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, Next.js, and more!
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl border bg-card p-2">
              <div className="flex items-center justify-between border-b bg-card px-3 py-1.5">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-1">
                  <Code className="h-4 w-4" />
                  <span className="text-xs font-medium">App.jsx</span>
                </div>
              </div>
              <pre 
                ref={codeRef}
                className="language-jsx p-4 text-sm md:text-base font-mono text-blue-50 font-light h-80 overflow-auto"
              ></pre>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-blue-500/10 blur-xl" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-purple-500/10 blur-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}