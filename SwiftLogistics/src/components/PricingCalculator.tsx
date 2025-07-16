import React, { useState, useEffect } from 'react';
import { Calculator, MapPin, Package, Clock, Truck } from 'lucide-react';

const PricingCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    fromZip: '',
    toZip: '',
    weight: '',
    packageType: 'standard',
    serviceType: 'standard',
    insurance: false,
    signature: false
  });
  
  const [price, setPrice] = useState(0);
  const [distance, setDistance] = useState(0);

  const packageTypes = [
    { id: 'envelope', name: 'Envelope/Documents', multiplier: 1.0 },
    { id: 'small', name: 'Small Package', multiplier: 1.2 },
    { id: 'medium', name: 'Medium Package', multiplier: 1.5 },
    { id: 'large', name: 'Large Package', multiplier: 2.0 },
    { id: 'fragile', name: 'Fragile Items', multiplier: 1.8 }
  ];

  const serviceTypes = [
    { id: 'standard', name: 'Standard (2-3 days)', basePrice: 15, multiplier: 1.0 },
    { id: 'express', name: 'Express (1 day)', basePrice: 25, multiplier: 1.5 },
    { id: 'sameday', name: 'Same Day', basePrice: 45, multiplier: 2.5 },
    { id: 'urgent', name: 'Urgent (2 hours)', basePrice: 75, multiplier: 4.0 }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const calculatePrice = () => {
    if (!formData.weight || !formData.fromZip || !formData.toZip) {
      setPrice(0);
      return;
    }

    // Simulate distance calculation based on ZIP codes
    const simulatedDistance = Math.floor(Math.random() * 500) + 10;
    setDistance(simulatedDistance);

    const selectedService = serviceTypes.find(s => s.id === formData.serviceType);
    const selectedPackage = packageTypes.find(p => p.id === formData.packageType);
    
    if (!selectedService || !selectedPackage) return;

    let basePrice = selectedService.basePrice;
    
    // Distance factor
    const distanceFactor = simulatedDistance > 100 ? 1 + (simulatedDistance - 100) * 0.01 : 1;
    
    // Weight factor
    const weight = parseFloat(formData.weight);
    const weightFactor = weight > 5 ? 1 + (weight - 5) * 0.1 : 1;
    
    // Calculate base price with all factors
    let totalPrice = basePrice * selectedService.multiplier * selectedPackage.multiplier * distanceFactor * weightFactor;
    
    // Add optional services
    if (formData.insurance) totalPrice += 5;
    if (formData.signature) totalPrice += 3;
    
    setPrice(Math.round(totalPrice * 100) / 100);
  };

  useEffect(() => {
    calculatePrice();
  }, [formData]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pricing <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Calculator</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get an instant quote for your delivery. Our transparent pricing helps you plan your shipping costs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calculator className="w-6 h-6 mr-3 text-blue-500" />
              Calculate Your Quote
            </h3>

            <div className="space-y-6">
              {/* Location Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">From ZIP Code</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="fromZip"
                      value={formData.fromZip}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="10001"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">To ZIP Code</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="toZip"
                      value={formData.toZip}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="90210"
                    />
                  </div>
                </div>
              </div>

              {/* Package Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Package Type</label>
                <div className="relative">
                  <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {packageTypes.map(type => (
                      <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Weight (lbs)</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.0"
                  step="0.1"
                  min="0"
                />
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {serviceTypes.map(service => (
                      <option key={service.id} value={service.id}>{service.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Options */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Additional Options</h4>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="insurance"
                    checked={formData.insurance}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-700">Insurance Coverage (+$5)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="signature"
                    checked={formData.signature}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-700">Signature Required (+$3)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Price Display */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Quote</h3>
            
            {price > 0 ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    ${price}
                  </div>
                  <p className="text-gray-600">Estimated delivery cost</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Distance:</span>
                    <span className="font-medium">{distance} miles</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium">{serviceTypes.find(s => s.id === formData.serviceType)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Package:</span>
                    <span className="font-medium">{packageTypes.find(p => p.id === formData.packageType)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight:</span>
                    <span className="font-medium">{formData.weight} lbs</span>
                  </div>
                  {formData.insurance && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Insurance:</span>
                      <span className="font-medium">+$5.00</span>
                    </div>
                  )}
                  {formData.signature && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Signature:</span>
                      <span className="font-medium">+$3.00</span>
                    </div>
                  )}
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Book This Delivery
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    * Prices are estimates. Final cost may vary based on actual distance and package dimensions.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-12 h-12 text-gray-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Enter Details</h4>
                <p className="text-gray-600">Fill in the form to get your instant quote</p>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
            <p className="text-gray-600">No hidden fees. What you see is what you pay.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Quotes</h3>
            <p className="text-gray-600">Get accurate pricing in seconds, not hours.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Options</h3>
            <p className="text-gray-600">Choose the service level that fits your needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;