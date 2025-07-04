import React, { useState } from 'react';

interface Trim {
  id: string;
  name: string;
  price: string;
  range: string;
  topSpeed: string;
  acceleration: string;
}

interface OrderSectionProps {
  modelName: string;
  trims: Trim[];
}

const OrderSection: React.FC<OrderSectionProps> = ({ modelName, trims }) => {
  const [selectedTrim, setSelectedTrim] = useState(trims[0].id);
  const [selectedColor, setSelectedColor] = useState('white');

  const colors = [
    { id: 'white', name: 'Pearl White', hexCode: '#f5f5f5' },
    { id: 'black', name: 'Solid Black', hexCode: '#222' },
    { id: 'blue', name: 'Deep Blue', hexCode: '#1a3a6e' },
    { id: 'red', name: 'Red Multi-Coat', hexCode: '#af0e1c' },
    { id: 'gray', name: 'Stealth Gray', hexCode: '#656565' },
  ];

  const currentTrim = trims.find(trim => trim.id === selectedTrim) || trims[0];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-center mb-12">{modelName} Design Studio</h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-80 md:h-96 mb-8">
              <img 
                src={`https://images.pexels.com/photos/3747142/pexels-photo-3747142.jpeg?auto=compress&cs=tinysrgb&w=1600`} 
                alt={`${modelName} ${currentTrim.name}`} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex justify-center gap-4 mb-8">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`w-12 h-12 rounded-full focus:outline-none ${
                    selectedColor === color.id ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                  }`}
                  style={{ backgroundColor: color.hexCode }}
                  aria-label={color.name}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-medium mb-6">Choose Your Configuration</h3>

              <div className="mb-8">
                <p className="text-sm text-gray-600 mb-2">Trim</p>
                <div className="space-y-3">
                  {trims.map((trim) => (
                    <div 
                      key={trim.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedTrim === trim.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:bg-gray-100'
                      }`}
                      onClick={() => setSelectedTrim(trim.id)}
                    >
                      <div className="flex justify-between">
                        <h4 className="font-medium">{trim.name}</h4>
                        <p className="font-medium">{trim.price}</p>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <p>{trim.range} range</p>
                        <p>{trim.topSpeed} top speed</p>
                        <p>{trim.acceleration} 0-60 mph</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                  Continue to Payment
                </button>
                <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-md font-medium hover:bg-gray-300 transition-colors">
                  Save Configuration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;