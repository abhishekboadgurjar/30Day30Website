import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EpisodesSection from "./components/EpisodesSection";
import JudgesSection from "./components/JudgesSection";
import AuditionSection from "./components/AuditionSection";
import TestimonialsSection from "./components/TestimonialsSection";

import Footer from "./components/Footer";
import "./styles/animations.css";
import AboutSection from "./components/AboutSection";

function App() {
  useEffect(() => {
    // Update page title
    document.title = "India's Got Latent - Celebrating India's Hidden Talents";

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <EpisodesSection />
      <JudgesSection />
      <AuditionSection />
      <TestimonialsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
