import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle, BookOpen, Code, Users, Award } from 'lucide-react';
import Hero from '../components/sections/Hero';
import CourseCard from '../components/ui/CourseCard';
import TestimonialCarousel from '../components/sections/TestimonialCarousel';
import StatsCounter from '../components/sections/StatsCounter';

const HomePage: React.FC = () => {
  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [whyUsRef, whyUsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <BookOpen size={24} className="text-indigo-600" />,
      title: "Industry-Relevant Curriculum",
      description: "Our courses are designed with input from industry experts to ensure you learn the most in-demand skills."
    },
    {
      icon: <Code size={24} className="text-indigo-600" />,
      title: "Hands-on Coding Experience",
      description: "Build real projects from day one with practical, hands-on coding exercises and challenges."
    },
    {
      icon: <Users size={24} className="text-indigo-600" />,
      title: "Supportive Community",
      description: "Join a community of like-minded learners and get help from mentors committed to your success."
    },
    {
      icon: <Award size={24} className="text-indigo-600" />,
      title: "Job Placement Assistance",
      description: "Get career guidance, interview preparation, and connections to our hiring partners."
    }
  ];

  const featuredCourses = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "16 weeks",
      level: "Beginner to Advanced",
      description: "Master front-end and back-end technologies to build complete web applications."
    },
    {
      id: 2,
      title: "Mobile App Development",
      image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "14 weeks",
      level: "Intermediate",
      description: "Learn to create native mobile applications for iOS and Android platforms."
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      image: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "12 weeks",
      level: "Intermediate to Advanced",
      description: "Strengthen your problem-solving skills and ace technical interviews."
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Featured Courses Section */}
      <section className="py-20 bg-gray-50" ref={featuredRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={featuredInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Featured Courses
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={featuredInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Level up your skills with our most popular and in-demand courses
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link 
              to="/courses" 
              className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              View All Courses <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white" ref={whyUsRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Why Choose Sheriyans?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We're committed to providing the best coding education experience
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              >
                <div className="mb-4 inline-block p-3 bg-indigo-100 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Coding Journey?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with Sheriyans Coding School.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/courses"
              className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Explore Courses
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;