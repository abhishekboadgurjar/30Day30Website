import React from 'react';
import { Heart, Watch, Droplet, MapPin } from 'lucide-react';

const WatchPage: React.FC = () => {
  const products = [
    {
      name: "Apple Watch Ultra 2",
      tagline: "Adventure awaits.",
      price: "From $799",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg"
    },
    {
      name: "Apple Watch Series 9",
      tagline: "Smarter. Brighter. Mightier.",
      price: "From $399",
      image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg"
    },
    {
      name: "Apple Watch SE",
      tagline: "A great deal to love.",
      price: "From $249",
      image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg"
    }
  ];

  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Advanced health features",
      description: "Monitor your heart health and more"
    },
    {
      icon: <Watch className="w-6 h-6" />,
      title: "Powerful sensors",
      description: "Track your workouts with precision"
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Swimproof design",
      description: "Water resistant to 50 meters"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Built-in GPS",
      description: "Track your routes without your phone"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Apple Watch</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Your health. Your progress. And everything in between.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-500 hover:underline">
              Shop Apple Watch {'>'}
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              Compare Apple Watch {'>'}
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
            Why Apple Watch
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

export default WatchPage;