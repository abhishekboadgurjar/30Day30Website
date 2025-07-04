import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Emma Thompson',
      role: 'Marketing Executive',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: "FitFlow Studio has completely transformed my approach to fitness. The instructors are incredibly knowledgeable and supportive. I've never felt stronger or more confident!",
      achievement: 'Lost 25 lbs in 4 months'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Software Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: "As someone who works long hours at a desk, the yoga classes here have been a lifesaver. My back pain is gone, and I sleep so much better. The community here is amazing!",
      achievement: 'Improved flexibility by 60%'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Teacher',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: "The personal training sessions are worth every penny. My trainer created a program that fits my busy schedule and helped me achieve goals I never thought possible.",
      achievement: 'Completed first marathon'
    },
    {
      id: 4,
      name: 'David Rodriguez',
      role: 'Entrepreneur',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: "The HIIT classes are intense but incredibly effective. I've gained muscle, lost fat, and improved my overall health. The energy in these classes is contagious!",
      achievement: 'Gained 15 lbs muscle mass'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Nurse',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: "Working in healthcare is stressful, but coming to FitFlow helps me decompress and stay healthy. The variety of classes means I never get bored. Highly recommend!",
      achievement: 'Reduced stress levels significantly'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Success <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our amazing community members who have transformed their lives through fitness and wellness.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Display */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Quote className="w-12 h-12 text-emerald-500" />
            </div>
            
            <div className="text-center">
              <div className="mb-8">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-emerald-100"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed mb-8 italic">
                "{testimonials[currentSlide].text}"
              </blockquote>
              
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-gray-900">{testimonials[currentSlide].name}</h4>
                <p className="text-gray-600 mb-2">{testimonials[currentSlide].role}</p>
                <div className="inline-block bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                  🏆 {testimonials[currentSlide].achievement}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Smaller Testimonial Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;