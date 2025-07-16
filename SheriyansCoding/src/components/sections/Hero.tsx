import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-indigo-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center">
        <div className="absolute inset-0 bg-indigo-900/80"></div>
      </div>

      {/* Background grid pattern (optional) */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unlock Your Coding Potential at Sheriyans
          </motion.h1>
          
          <motion.p 
            className="text-xl text-indigo-100 mb-8 md:pr-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            From beginners to advanced developers, we offer practical, industry-focused coding education to help you build the skills you need for a successful tech career.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/courses"
              className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center sm:justify-start"
            >
              Explore Courses <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-600 transition-colors flex items-center justify-center sm:justify-start"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating code blocks decoration */}
      <motion.div 
        className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 rotate-12 hidden lg:block"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <pre className="text-xs text-indigo-300 font-mono">
          <code>
{`function learnToCode() {
  const skills = [];
  const dedication = true;
  const support = "Sheriyans";
  
  while (dedication) {
    skills.push(newSkill);
    if (skills.length >= 100) {
      return "Success!";
    }
  }
}`}
          </code>
        </pre>
      </motion.div>

      <motion.div 
        className="absolute top-[20%] right-[10%] w-64 h-64 bg-purple-500/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 -rotate-6 hidden lg:block"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <pre className="text-xs text-indigo-300 font-mono">
          <code>
{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    to right,
    #4338ca,
    #7e22ce
  );
}`}
          </code>
        </pre>
      </motion.div>
    </section>
  );
};

export default Hero;