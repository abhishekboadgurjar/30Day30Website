import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface ModelSpec {
  label: string;
  value: string;
}

interface ModelProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs: ModelSpec[];
}

interface Props {
  model: ModelProps;
  index: number;
}

const ModelSection: React.FC<Props> = ({ model, index }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.3 });
  const isFirstSection = index === 0;

  return (
    <section 
      id={model.id}
      ref={sectionRef}
      className="relative h-screen w-full snap-start overflow-hidden"
      style={{
        backgroundImage: `url(${model.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="relative z-10 h-full flex flex-col justify-between items-center px-8 pt-24 pb-12 text-white">
        <div className={`text-center transform transition-all duration-1000 ease-out ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl font-medium mb-2">{model.title}</h1>
          <p className="text-lg sm:text-xl mb-4">{model.subtitle}</p>
          {model.description && <p className="text-base sm:text-lg">{model.description}</p>}
        </div>

        <div className={`w-full transform transition-all duration-1000 delay-300 ease-out ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-4 sm:gap-8">
            {model.specs.map((spec) => (
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
              Demo Drive
            </button>
          </div>
        </div>

        {isFirstSection && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={24} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ModelSection;