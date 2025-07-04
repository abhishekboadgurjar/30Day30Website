import React, { useEffect, useRef } from "react";
import { Play, Crown } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const elements = heroRef.current.querySelectorAll(".parallax-element");
      const x = e.clientX;
      const y = e.clientY;

      elements.forEach((element) => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.getAttribute("data-speed") || "0");
        const offsetX = ((x - window.innerWidth / 2) * speed) / 50;
        const offsetY = ((y - window.innerHeight / 2) * speed) / 50;

        el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      id="home"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900"></div>

      {/* Floating background elements with parallax effect */}
      <div className="parallax-element" data-speed="-1.5">
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-red-500/10 blur-3xl"></div>
      </div>
      <div className="parallax-element" data-speed="2">
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
      </div>
      <div className="parallax-element" data-speed="1.2">
        <div className="absolute bottom-0 left-1/4 w-8 h-8 bg-yellow-400/30 rounded-full blur-sm"></div>
      </div>
      <div className="parallax-element" data-speed="-0.8">
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-yellow-400/50 rounded-full blur-sm"></div>
      </div>

      {/* Audio cassette icon */}
      <div className="parallax-element" data-speed="2.5">
        <div className="absolute top-1/4 left-1/3 transform -rotate-12">
          <div className="w-20 h-12 bg-gray-800 rounded-md border-2 border-gray-700 relative">
            <div className="absolute inset-x-4 inset-y-2">
              <div className="h-full flex items-center justify-center">
                <div className="w-3 h-3 rounded-full border border-yellow-500"></div>
                <div className="w-3 h-3 rounded-full border border-yellow-500 ml-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Star icon */}
      <div className="parallax-element" data-speed="-1.8">
        <div className="absolute bottom-1/3 right-1/4 text-yellow-400 transform rotate-12">
          <div className="w-16 h-16 text-yellow-400">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold">
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4">
              <div className="text-white flex flex-wrap justify-center">
                <span className="animate-character">INDIA'S</span>
                <span className="ml-4 animate-character-delay">GOT</span>
              </div>
              <div className="relative inline-block mt-4 md:mt-0 px-4 border-8 border-yellow-400 animate-pulse-slow">
  <h1 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
    LATENT
  </h1>
</div>

            </div>
          </h1>

          <div className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-300 animate-fade-in">
            <h2 className="font-medium">
              Celebrating India's Hidden (and Often Hilarious) Talents! on Your
              <span className="text-yellow-400 font-semibold ml-2">
                Favourite Pointless Reality Show
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8 animate-fade-in-up">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 hover:shadow-lg">
              <Play className="fill-current" size={24} />
              <span>Latest Episodes</span>
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105">
              <Crown size={24} />
              <span>Become a Member</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6 animate-fade-in-up-delay">
            <a href="#" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/60 to-yellow-500/60 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 transform group-hover:scale-105"></div>
              <div className="relative border-2 border-yellow-400/50 bg-black/30 px-6 py-3 rounded-full overflow-hidden">
                <div className="h-10 bg-black/30 rounded flex items-center justify-center text-white px-4">
                  <span className="text-sm mr-2">Get it on</span>
                  <span className="font-bold">Google Play</span>
                </div>
              </div>
            </a>
            <a href="#" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/60 to-yellow-500/60 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 transform group-hover:scale-105"></div>
              <div className="relative border-2 border-yellow-400/50 bg-black/30 px-6 py-3 rounded-full overflow-hidden">
                <div className="h-10 bg-black/30 rounded flex items-center justify-center text-white px-4">
                  <span className="text-sm mr-2">Download on the</span>
                  <span className="font-bold">App Store</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

 

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L12 18L17 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 7L12 12L17 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Additional floating elements */}
      <div className="parallax-element" data-speed="1.7">
        <div className="absolute top-1/3 left-1/5 w-6 h-6 bg-purple-500/30 rounded-full blur-sm"></div>
      </div>
      <div className="parallax-element" data-speed="-1.2">
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-blue-400/40 rounded-full blur-sm"></div>
      </div>
    </div>
  );
};

export default HeroSection;
