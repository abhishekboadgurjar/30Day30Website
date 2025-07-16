import React from 'react';
import { Truck, Clock, Shield, Package, MapPin, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Truck,
      title: 'Same-Day Delivery',
      description: 'Urgent packages delivered within hours across the city.',
      features: ['2-4 hour delivery', 'Real-time tracking', 'Secure handling'],
      price: 'From $45',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Express Delivery',
      description: 'Next business day delivery for time-sensitive shipments.',
      features: ['Next day delivery', 'Priority handling', 'SMS notifications'],
      price: 'From $25',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Package,
      title: 'Standard Delivery',
      description: 'Reliable delivery service for regular shipments.',
      features: ['2-3 day delivery', 'Package insurance', 'Proof of delivery'],
      price: 'From $15',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Secure Transport',
      description: 'Specialized handling for valuable and fragile items.',
      features: ['Extra protection', 'Signature required', 'Full insurance'],
      price: 'From $35',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: MapPin,
      title: 'Local Courier',
      description: 'Quick local deliveries within the metropolitan area.',
      features: ['1-2 hour delivery', 'Local expertise', 'Flexible pickup'],
      price: 'From $20',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Users,
      title: 'Business Solutions',
      description: 'Tailored logistics solutions for businesses of all sizes.',
      features: ['Volume discounts', 'Account management', 'API integration'],
      price: 'Custom pricing',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive delivery solutions tailored to meet your specific needs. From urgent same-day delivery to reliable standard shipping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {service.price}
                  </span>
                  <button className={`bg-gradient-to-r ${service.color} text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className={`h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Service Features */}
        <div className="mt-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose SwiftLogistics?</h3>
            <p className="text-blue-100 text-lg">We're committed to providing the best delivery experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">100% Secure</h4>
              <p className="text-blue-100">Your packages are fully insured and handled with care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">On-Time Delivery</h4>
              <p className="text-blue-100">99.5% on-time delivery rate with real-time tracking</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
              <p className="text-blue-100">Round-the-clock customer support for all your needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;