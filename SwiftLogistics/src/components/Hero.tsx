import React from 'react';
import { Truck, Clock, Shield, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const features = [
    { icon: Clock, text: 'Same-day delivery' },
    { icon: Shield, text: 'Secure handling' },
    { icon: MapPin, text: 'Real-time tracking' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Logistics background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Fast & Reliable
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Delivery Solutions
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional courier services for businesses and individuals. 
            Same-day delivery, real-time tracking, and secure handling of your packages.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 min-w-[200px]">
              Book Delivery Now
            </button>
            <button className="flex items-center space-x-3 text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 min-w-[200px]">
              <Truck className="w-5 h-5" />
              <span>Track Package</span>
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-full">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-white font-medium">{feature.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500/20 rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default Hero;