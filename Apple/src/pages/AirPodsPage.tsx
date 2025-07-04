import React from "react";
import { Music, Volume2, Headphones, Mic } from "lucide-react";

const AirPodsPage: React.FC = () => {
  const products = [
    {
      name: "AirPods Pro",
      tagline: "Sound all around.",
      price: "From $249",
      image:
        "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
    },
    {
      name: "AirPods Max",
      tagline: "High-fidelity audio.",
      price: "From $549",
      image:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    },
    {
      name: "AirPods",
      tagline: "Effortless. Magical.",
      price: "From $129",
      image:
        "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg",
    },
  ];

  const features = [
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Active Noise Cancellation",
      description: "Immerse yourself in what you're listening to",
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Spatial Audio",
      description: "Sound moves around you as you move",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Adaptive EQ",
      description: "Automatically tunes music to your ears",
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Clear calls",
      description: "Beamforming microphones focus on your voice",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">AirPods</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Wireless. Effortless. Magical.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-500 hover:underline">
              Shop AirPods {">"}
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              Compare AirPods {">"}
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{product.tagline}</p>
                  <p className="text-gray-900 font-medium mb-4">
                    {product.price}
                  </p>
                  <a href="#" className="text-blue-500 hover:underline">
                    Learn more {">"}
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
            Why AirPods
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

export default AirPodsPage;
