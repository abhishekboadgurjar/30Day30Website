import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const AccessoriesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full snap-start overflow-hidden"
      style={{
        backgroundImage: `url(https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Supercharger-Trip-Desktop.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="relative z-10 h-full flex flex-col justify-between items-center px-8 pt-24 pb-12 text-white">
        <div className={`text-center transform transition-all duration-1000 ease-out ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl font-medium mb-2">Accessories</h1>
          <p className="text-lg sm:text-xl mb-4">Enhance Your Tesla Experience</p>
        </div>

        <div className={`w-full transform transition-all duration-1000 delay-300 ease-out ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center">
            <button className="bg-white text-gray-900 px-8 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;