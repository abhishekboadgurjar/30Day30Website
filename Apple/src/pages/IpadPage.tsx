import React from "react";
import { Pen, Cpu, Monitor, Wifi } from "lucide-react";

const IpadPage: React.FC = () => {
  const products = [
    {
      name: "iPad Pro",
      tagline: "Supercharged by M2",
      price: "From $799",
      image:
        "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
    },
    {
      name: "iPad Air",
      tagline: "Light. Bright. Full of might.",
      price: "From $599",
      image:
        "https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg",
    },
    {
      name: "iPad",
      tagline: "Lovable. Drawable. Magical.",
      price: "From $449",
      image:
        "https://images.pexels.com/photos/1334599/pexels-photo-1334599.jpeg",
    },
  ];

  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "M2 chip",
      description: "Next-level performance and capabilities",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Liquid Retina display",
      description: "Brilliant 12.9-inch XDR display",
    },
    {
      icon: <Pen className="w-6 h-6" />,
      title: "Apple Pencil",
      description: "The most advanced digital pencil",
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Ultra-fast connectivity",
      description: "With 5G and Wi-Fi 6E support",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">iPad</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Like a computer. Unlike any computer.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-500 hover:underline">
              Shop iPad {">"}
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              Compare iPad {">"}
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
          <h2 className="text-3xl font-semibold text-center mb-12">Why iPad</h2>
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

export default IpadPage;
