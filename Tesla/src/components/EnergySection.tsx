import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const EnergySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.3 });

  return (
    <section
      id="powerwall"
      ref={sectionRef}
      className="relative h-screen w-full snap-start overflow-hidden"
      style={{
        backgroundImage: `url(https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Powerwall-Desktop.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="relative z-10 h-full flex flex-col justify-between items-center px-8 pt-24 pb-12 text-white">
        <div className={`text-center transform transition-all duration-1000 ease-out ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl font-medium mb-2">Powerwall</h1>
          <p className="text-lg sm:text-xl mb-4">Energy Storage for Your Home</p>
        </div>

        <div className={`w-full transform transition-all duration-1000 delay-300 ease-out ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-4 sm:gap-8">
            {[
              { label: 'Backup Protection', value: '24/7' },
              { label: 'Capacity', value: '13.5 kWh' },
              { label: 'Power', value: '7 kW' },
              { label: 'Scalable', value: 'Up to 10' }
            ].map((spec) => (
              <div key={spec.label} className="text-center">
                <p className="text-xl sm:text-2xl font-medium">{spec.value}</p>
                <p className="text-sm">{spec.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-gray-900 px-8 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">
              Order Now
            </button>
            <button className="bg-gray-900 bg-opacity-70 text-white px-8 py-2 rounded-md font-medium hover:bg-opacity-80 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergySection;