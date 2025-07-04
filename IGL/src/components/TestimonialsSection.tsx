import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajiv Kumar",
    role: "Viewer",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Participating in India's Got Latent was life-changing. From a small-town performer to a national star, the show gave me a platform I never imagined possible.",
    rating: 5
  },
  {
    id: 2,
    name: "Meera Patel",
    role: "Viewer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Even though I didn't win, the exposure I got from the show led to multiple opportunities. The judges' feedback was invaluable for my growth as an artist.",
    rating: 4.5
  },
  {
    id: 3,
    name: "Arjun Singh",
    role: "Viewer",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "The best part about India's Got Latent is how they treat every contestant with respect, regardless of whether you advance or not. It's a fun, supportive environment.",
    rating: 5
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Viewer",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "From the auditions to the live shows, every moment on India's Got Latent pushed me to improve and showcase my best talents. It's intense but incredibly rewarding.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => {
      clearInterval(intervalId);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isAnimating]);
  
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,225,4,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative">
              Success Stories
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-yellow-400"></span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Hear from our contestants whose lives changed after participating in India's Got Latent.</p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-900 rounded-2xl p-8 md:p-10 relative border border-gray-800">
                      <div className="absolute top-6 right-8 text-yellow-400 opacity-20">
                        <Quote size={80} />
                      </div>
                      
                      <div className="flex flex-col md:flex-row items-center">
                        <div className="mb-6 md:mb-0 md:mr-8">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={`${
                                  i < Math.floor(testimonial.rating) 
                                    ? 'text-yellow-400 fill-current' 
                                    : i < testimonial.rating 
                                      ? 'text-yellow-400' 
                                      : 'text-gray-600'
                                } mr-1`}
                              />
                            ))}
                          </div>
                          
                          <p className="text-gray-300 text-lg italic mb-6">"{testimonial.quote}"</p>
                          
                          <div>
                            <h3 className="text-white font-bold text-xl">{testimonial.name}</h3>
                            <p className="text-yellow-400 text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 z-10"
              onClick={goToPrev}
              disabled={isAnimating}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 z-10"
              onClick={goToNext}
              disabled={isAnimating}
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                  currentIndex === index ? 'bg-yellow-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;