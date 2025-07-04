import React from "react";
import { Camera, Cpu, Battery, Shield } from "lucide-react";

const IphonePage: React.FC = () => {
  const products = [
    {
      name: "iPhone 15 Pro",
      tagline: "Titanium. So strong. So light. So Pro.",
      price: "From $999",
      image:
        "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg",
    },
    {
      name: "iPhone 15",
      tagline: "New camera. New design. Newphoria.",
      price: "From $799",
      image:
        "https://images.pexels.com/photos/5750002/pexels-photo-5750002.jpeg",
    },
    {
      name: "iPhone 14",
      tagline: "A total powerhouse.",
      price: "From $699",
      image:
        "https://images.pexels.com/photos/5750003/pexels-photo-5750003.jpeg",
    },
  ];

  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "A17 Pro chip",
      description: "The fastest chip ever in a smartphone",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Pro camera system",
      description: "48MP main camera with 5x optical zoom",
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "All-day battery life",
      description: "Up to 29 hours of video playback",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ceramic Shield",
      description: "Tougher than any smartphone glass",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">iPhone</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Wonderfull. Magical. Powerful.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-500 hover:underline">
              Shop iPhone {">"}
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              Compare iPhone {">"}
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
            Why iPhone
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

export default IphonePage;
