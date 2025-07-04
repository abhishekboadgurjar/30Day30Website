import React, { useState } from 'react';

interface ColorOption {
  name: string;
  class: string;
}

const ProductShowcase: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>('Silver');
  
  const colorOptions: ColorOption[] = [
    { name: 'Silver', class: 'bg-gray-200' },
    { name: 'Space Gray', class: 'bg-gray-700' },
    { name: 'Gold', class: 'bg-amber-200' },
    { name: 'Pacific Blue', class: 'bg-blue-700' }
  ];

  return (
    <section id="product" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt={`Quantum in ${selectedColor}`}
                className="rounded-2xl shadow-xl mx-auto"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium text-gray-900">
                {selectedColor}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <span className="text-blue-600 font-medium mb-2 block">Perfectly Designed</span>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
              Beautiful. In every way.
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Crafted from aerospace-grade materials, Quantum features a stunning design with a durable finish. The edge-to-edge display seamlessly integrates with the device's contours, creating an immersive experience.
            </p>
            
            <div className="mb-8">
              <h3 className="text-gray-900 font-medium mb-4">Available Colors</h3>
              <div className="flex space-x-4">
                {colorOptions.map(color => (
                  <button
                    key={color.name}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                      selectedColor === color.name ? 'border-blue-500 scale-110' : 'border-transparent'
                    } ${color.class}`}
                    onClick={() => setSelectedColor(color.name)}
                    aria-label={`Select ${color.name} color`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#specs" 
                className="px-6 py-3 text-sm font-medium text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-200"
              >
                View Specs
              </a>
              <a 
                href="#buy" 
                className="px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-200"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;