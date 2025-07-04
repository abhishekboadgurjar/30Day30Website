import React from 'react';
import { Dumbbell, Heart, Zap, Users, Clock, Target } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Dumbbell,
      title: 'Personal Training',
      description: 'One-on-one sessions tailored to your fitness goals with expert guidance.',
      features: ['Custom workout plans', 'Nutritional guidance', 'Progress tracking'],
      price: 'From $80/session',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Heart,
      title: 'Yoga Classes',
      description: 'Find balance and flexibility through various yoga styles and meditation.',
      features: ['Hatha & Vinyasa', 'Meditation sessions', 'Stress relief'],
      price: 'From $25/class',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'HIIT Training',
      description: 'High-intensity workouts designed to maximize calorie burn and endurance.',
      features: ['Group sessions', 'Equipment provided', 'All fitness levels'],
      price: 'From $30/class',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Group Fitness',
      description: 'Motivating group classes that make fitness fun and social.',
      features: ['Various class types', 'Community support', 'Flexible scheduling'],
      price: 'From $20/class',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      title: '24/7 Gym Access',
      description: 'Round-the-clock access to premium equipment and facilities.',
      features: ['Modern equipment', 'Locker rooms', 'Free WiFi'],
      price: 'From $99/month',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Target,
      title: 'Wellness Coaching',
      description: 'Holistic approach to health including lifestyle and mindset coaching.',
      features: ['Goal setting', 'Habit formation', 'Stress management'],
      price: 'From $120/session',
      color: 'from-rose-500 to-rose-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive fitness and wellness programs designed to help you achieve your goals and transform your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
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
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
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
      </div>
    </section>
  );
};

export default Services;