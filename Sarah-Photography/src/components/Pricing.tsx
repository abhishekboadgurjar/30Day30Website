import React from 'react';
import { Check, Download, Star } from 'lucide-react';
import { pricingPackages } from '../data/pricingData';

const Pricing: React.FC = () => {
  const handleDownloadPDF = () => {
    // In a real app, this would download an actual PDF
    alert('PDF download would start here. This is a demo implementation.');
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Photography <span className="text-amber-500 font-medium">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Thoughtfully crafted packages to capture your special moments
          </p>
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 bg-amber-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-amber-400 transition-colors"
          >
            <Download className="h-5 w-5" />
            Download Full Pricing Guide
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${
                pkg.popular ? 'ring-2 ring-amber-500' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-amber-500 text-black px-4 py-2 text-sm font-medium flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-light text-amber-500 mb-2">{pkg.price}</div>
                <div className="text-gray-600 mb-6">{pkg.duration} session</div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-amber-500 text-black hover:bg-amber-400'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Book This Package
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need something custom? Let's discuss your specific requirements.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-amber-500 hover:text-amber-600 font-medium"
          >
            Contact for Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;