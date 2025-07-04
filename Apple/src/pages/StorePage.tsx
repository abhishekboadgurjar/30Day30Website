import React from 'react';
import { ShoppingBag, Gift, CreditCard, Truck } from 'lucide-react';

const StorePage: React.FC = () => {
  const storeCategories = [
    {
      title: "Shop the Latest",
      description: "Check out the newest Apple products.",
      image: "https://images.pexels.com/photos/7014766/pexels-photo-7014766.jpeg",
      link: "#latest"
    },
    {
      title: "Mac",
      description: "Shop MacBook, iMac, Mac mini",
      image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg",
      link: "/mac"
    },
    {
      title: "iPhone",
      description: "Shop iPhone 15, iPhone 14, iPhone 13",
      image: "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg",
      link: "/iphone"
    },
    {
      title: "iPad",
      description: "Shop iPad Pro, iPad Air, iPad",
      image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
      link: "/ipad"
    },
    {
      title: "Apple Watch",
      description: "Shop Apple Watch Series 9, Ultra 2, SE",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
      link: "/watch"
    },
    {
      title: "AirPods",
      description: "Shop AirPods Pro, AirPods Max",
      image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
      link: "/airpods"
    }
  ];

  const benefits = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Free delivery",
      description: "On orders over $50"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Apple Gift Card",
      description: "Give the gift of Apple"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Flexible payments",
      description: "Pay monthly at 0% APR"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast shipping",
      description: "Same-day delivery available"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-center mb-6">
            Store. <span className="text-gray-400">The best way to buy the products you love.</span>
          </h1>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-blue-500">{benefit.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storeCategories.map((category, index) => (
              <a 
                key={index}
                href={category.link}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <span className="text-blue-500 group-hover:underline">
                    Shop now {'>'}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StorePage;