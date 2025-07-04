import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface CardProps {
  title: string;
  image: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, image, buttonText }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { threshold: 0.3 });

  return (
    <div 
      ref={cardRef}
      className={`relative rounded-lg overflow-hidden h-80 shadow-lg transform transition-all duration-1000 ease-out ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"></div>
      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
        <h3 className="text-2xl font-medium">{title}</h3>
        <button className="self-start bg-white text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const CardsSection: React.FC = () => {
  const cards = [
    {
      title: "Charging",
      image: "https://images.pexels.com/photos/11694085/pexels-photo-11694085.jpeg?auto=compress&cs=tinysrgb&w=1600",
      buttonText: "Shop Now"
    },
    {
      title: "Vehicle Accessories",
      image: "https://images.pexels.com/photos/12666501/pexels-photo-12666501.jpeg?auto=compress&cs=tinysrgb&w=1600",
      buttonText: "Shop Now"
    },
    {
      title: "Apparel",
      image: "https://images.pexels.com/photos/7985645/pexels-photo-7985645.jpeg?auto=compress&cs=tinysrgb&w=1600",
      buttonText: "Shop Now"
    }
  ];

  return (
    <section id="shop" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-center mb-12">Tesla Accessories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;