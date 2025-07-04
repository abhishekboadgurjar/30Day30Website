import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimatedText from "../ui/AnimatedText";
import { useInView } from "../hooks/useInView";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote:
      "Digital Technologies transformed our online presence completely. Their team delivered a website that perfectly represents our brand and has significantly increased our customer engagement.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, Retail Solutions",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote:
      "Working with Digital Technologies was a game-changer for our e-commerce platform. They delivered a fast, responsive site that has improved our conversion rates by over 40%.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder, Creative Studios",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote:
      "The team at Digital Technologies truly understood our creative vision and translated it into a stunning website. Their attention to detail and technical expertise exceeded our expectations.",
    rating: 5,
  },
  {
    id: 4,
    name: "Robert Williams",
    role: "CTO, Finance Pro",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote:
      "We needed a complex web application with secure user authentication and data management. Digital Technologies delivered a flawless solution that our clients love to use.",
    rating: 5,
  },
  {
    id: 5,
    name: "Jennifer Adams",
    role: "Owner, Boutique Shop",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote:
      "As a small business owner, I needed a website that would help me compete with larger retailers. Digital Technologies created an amazing online store that has helped my business grow exponentially.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  const autoPlayRef = useRef<number | null>(null);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (isVisible) {
      autoPlayRef.current = window.setInterval(() => {
        goToNext();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isVisible, currentIndex, isAnimating]);

  return (
    <section id="testimonials" className="py-20 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <AnimatedText
            text="What Our Clients Say"
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          />
          <p className="max-w-2xl mx-auto text-slate-600">
            Don't just take our word for it. Hear what our clients have to say
            about their experience working with Digital Technologies.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10">
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Testimonial carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div
                    className={`bg-white rounded-2xl shadow-lg p-8 md:p-10 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-700`}
                  >
                    {/* Quote mark */}
                    <div className="text-6xl font-serif text-slate-200 leading-none mb-4">
                      "
                    </div>

                    {/* Testimonial quote */}
                    <p className="text-lg md:text-xl text-slate-700 mb-8 italic">
                      {testimonial.quote}
                    </p>

                    {/* Rating */}
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={
                            i < testimonial.rating
                              ? "text-amber-400 fill-amber-400"
                              : "text-slate-300"
                          }
                        />
                      ))}
                    </div>

                    {/* Client info */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-slate-500 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-amber-500 w-6"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
