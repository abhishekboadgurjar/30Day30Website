import React from 'react';
import { Smartphone, Laptop, Watch, Headphones } from 'lucide-react';
import FeatureCard from './FeatureCard';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  link: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Smartphone size={24} className="text-blue-500" />,
      title: "iPhone",
      description: "iPhone 15 Pro, iPhone 15, iPhone 14, iPhone 13. From $429.",
      image: "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg",
      link: "#iphone"
    },
    {
      icon: <Laptop size={24} className="text-gray-500" />,
      title: "Mac",
      description: "MacBook Pro, MacBook Air, iMac, Mac mini. From $599.",
      image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg",
      link: "#mac"
    },
    {
      icon: <Watch size={24} className="text-red-500" />,
      title: "Apple Watch",
      description: "Apple Watch Series 9, Apple Watch Ultra 2, Apple Watch SE. From $249.",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
      link: "#watch"
    },
    {
      icon: <Headphones size={24} className="text-black" />,
      title: "AirPods",
      description: "AirPods Pro, AirPods Max, AirPods. From $129.",
      image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
      link: "#airpods"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Which Apple product is right for you?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;