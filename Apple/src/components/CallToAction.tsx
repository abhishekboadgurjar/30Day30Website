import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section id="buy" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Experience Quantum Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Starting at $999 or $41.62/mo for 24 mo.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <a 
              href="#" 
              className="px-8 py-3 rounded-full bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Buy Now
            </a>
            <a 
              href="#" 
              className="px-8 py-3 rounded-full bg-transparent text-white text-sm font-medium border border-white/30 hover:bg-white/10 transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>Free shipping. 14-day return policy. No questions asked.</p>
            <p className="mt-2">Available in select countries. See terms and conditions for details.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;