import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-2">
      {/* iPhone 15 Pro Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-sm font-semibold mb-2">New</h2>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight mb-4">
              iPhone 15 Pro
            </h1>
            <p className="text-xl md:text-2xl mb-2">
              Titanium. So strong. So light. So Pro.
            </p>
            <p className="text-gray-400 mb-8">
              From $999 or $41.62/mo. for 24 mo.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
              <a 
                href="#" 
                className="text-blue-500 hover:underline text-xl"
              >
                Buy
              </a>
              <a 
                href="#" 
                className="text-blue-500 hover:underline text-xl"
              >
                Learn more {'>'}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg" 
            alt="iPhone 15 Pro"
            className="object-cover w-full h-full opacity-90"
          />
        </div>
      </section>

      {/* iPhone 15 Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-sm font-semibold mb-2">New</h2>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-4">
              iPhone 15
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 mb-2">
              New camera. New design. Newphoria.
            </p>
            <p className="text-gray-500 mb-8">
              From $799 or $33.29/mo. for 24 mo.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
              <a 
                href="#" 
                className="text-blue-500 hover:underline text-xl"
              >
                Buy
              </a>
              <a 
                href="#" 
                className="text-blue-500 hover:underline text-xl"
              >
                Learn more {'>'}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/5750003/pexels-photo-5750003.jpeg" 
            alt="iPhone 15"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      <button 
        onClick={scrollToFeatures}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </div>
  );
};

export default Hero;