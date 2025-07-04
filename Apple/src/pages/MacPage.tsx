import React from 'react';
import { Cpu, Monitor, Battery, Wifi } from 'lucide-react';

const MacPage: React.FC = () => {
  const products = [
    {
      name: "MacBook Pro",
      tagline: "Supercharged by M3 Pro and M3 Max",
      price: "From $1999",
      image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg"
    },
    {
      name: "MacBook Air",
      tagline: "Power. It's in the Air.",
      price: "From $999",
      image: "https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg"
    },
    {
      name: "iMac",
      tagline: "Say hello to the new iMac.",
      price: "From $1299",
      image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg"
    }
  ];

  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "M3 chip",
      description: "Incredible performance with amazing efficiency"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Liquid Retina XDR display",
      description: "The best display ever in a Mac"
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Up to 22 hours battery life",
      description: "The longest battery life ever in a Mac"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Superfast Wi-Fi 6E",
      description: "The most advanced wireless connectivity"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Mac</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Powerful. Beautiful. Simply amazing.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-500 hover:underline">
              Shop Mac {'>'}
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              Compare Mac {'>'}
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4">{product.tagline}</p>
                  <p className="text-gray-900 font-medium mb-4">{product.price}</p>
                  <a href="#" className="text-blue-500 hover:underline">
                    Learn more {'>'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Mac
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-blue-500">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MacPage;