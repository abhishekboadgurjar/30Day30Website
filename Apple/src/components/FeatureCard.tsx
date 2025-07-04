import React from 'react';

interface FeatureProps {
  feature: {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
    link: string;
  };
}

const FeatureCard: React.FC<FeatureProps> = ({ feature }) => {
  return (
    <a 
      href={feature.link}
      className="group block bg-white rounded-2xl transition-all duration-300 hover:shadow-lg"
    >
      <div className="aspect-square overflow-hidden rounded-t-2xl">
        <img 
          src={feature.image} 
          alt={feature.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
        <span className="mt-4 inline-block text-blue-500 group-hover:underline">
          Learn more {'>'}
        </span>
      </div>
    </a>
  );
};

export default FeatureCard;