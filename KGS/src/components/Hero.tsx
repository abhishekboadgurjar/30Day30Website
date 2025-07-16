import React from 'react';
import { CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 text-white flex items-center pt-16"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empower Your Future with <span className="text-blue-300">Khan Global Studies</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Join thousands of successful students who transformed their careers through our expert guidance and comprehensive exam preparation.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Expert Faculty Led by Khan Sir',
                'Comprehensive Study Materials',
                'Regular Mock Tests & Evaluations',
                'Personalized Guidance'
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-300 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#courses" 
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-medium transition-colors duration-300"
              >
                Explore Courses
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 rounded-full font-medium transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-blue-600 absolute -top-6 -left-6 animate-pulse"></div>
              <img 
                src="KhanSir.webp" 
                alt="Teacher explaining concepts" 
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 animate-fadeIn opacity-80">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">10k+</div>
            <div className="text-blue-200">Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-blue-200">Courses</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-blue-200">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-blue-200">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;