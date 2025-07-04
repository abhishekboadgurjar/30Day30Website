import React, { useState, useEffect } from 'react';
import SMImage from '/SM.png'; // adjust the path as needed

const Hero: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    "The best way to predict your future is to create it.",
    "Change your thoughts and you change your world.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don't count the days, make the days count."
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [quotes.length]);
  
  return (
    <section 
    id="home" 
    className="relative h-screen flex items-center bg-cover bg-center" 
    style={{  
      backgroundImage: `url(${SMImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
    }}
  >
    <div className="absolute inset-0 bg-black opacity-50" />
    
    <div className="relative z-10 text-left px-4 sm:px-6 lg:px-8 max-w-4xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-['Roboto']">
        Sandeep Maheshwari
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-8 font-['Roboto']">
        Motivational Speaker | Entrepreneur | Photographer
      </h2>
      <div className="h-24 flex items-start justify-start">
        <p className="text-xl md:text-2xl text-white italic animate-fade-in opacity-0" style={{ animation: 'fadeIn 1s forwards' }}>
          "{quotes[currentQuote]}"
        </p>
      </div>
      <div className="mt-8">
        <a 
          href="#about" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Discover My Journey
        </a>
      </div>
    </div>
  
    {/* Scroll Down Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
  
  );
};

export default Hero;