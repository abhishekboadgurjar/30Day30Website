import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Web Developer",
    company: "TechSolutions",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Sheriyans Coding School transformed my career. I went from knowing basic HTML to building full-stack applications in just a few months. The instructors are incredible and truly care about your success.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Frontend Engineer",
    company: "DesignHub",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "The practical approach to teaching at Sheriyans is what sets them apart. Every concept is reinforced with real-world projects. I landed my dream job right after completing their Web Development course.",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Mobile App Developer",
    company: "AppWorks",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "After trying several online courses without much success, Sheriyans' structured curriculum and supportive community made all the difference. The instructors are industry professionals who bring real experience to their teaching.",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Software Engineer",
    company: "DataTech",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "The DSA course at Sheriyans gave me the confidence to tackle technical interviews. Their problem-solving approach and interview preparation sessions were invaluable in landing my current role.",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay || !inView) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, autoplay, inView]);

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            What Our Students Say
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Success stories from our community of learners
          </motion.p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl p-8 md:p-10"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-indigo-100">
                      <img 
                        src={testimonials[current].image} 
                        alt={testimonials[current].name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="absolute -top-2 -left-2 bg-indigo-600 text-white p-2 rounded-full">
                      <Quote size={20} />
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 italic mb-6 leading-relaxed">{testimonials[current].quote}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonials[current].name}</h4>
                    <p className="text-indigo-600">{testimonials[current].role}, {testimonials[current].company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-indigo-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-indigo-600" />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-indigo-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-indigo-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;