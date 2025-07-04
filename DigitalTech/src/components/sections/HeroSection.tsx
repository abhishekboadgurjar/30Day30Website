import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import AnimatedText from "../ui/AnimatedText";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const translateY = scrollPosition * 0.4;
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Parallax background element */}
      <div
        ref={heroRef}
        className="absolute inset-0 opacity-20 pointer-events-none"
      >
        <div className="absolute inset-0 grid grid-cols-6 gap-1 w-full h-full">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="border border-white/10 h-full w-full"></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText
            text="Transforming Ideas Into Digital Reality"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            delay={0.5}
          />

          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto opacity-0 animate-fadeIn animation-delay-1000">
            Digital Technologies specializes in creating exceptional web
            experiences that drive growth and elevate your brand in the digital
            landscape.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fadeIn animation-delay-1500">
            <a
              href="#projects"
              className="px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-600 rounded-lg hover:from-sky-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 text-base font-medium text-white bg-transparent border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center"
            >
              Get in Touch <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fadeIn animation-delay-2000">
          <span className="text-slate-400 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-scrollIndicator"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
