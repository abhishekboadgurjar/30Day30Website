import React from 'react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">What Listeners Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join the growing community of listeners who find value in our conversations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;