import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'model-s', label: 'Model S' },
    { id: 'model-3', label: 'Model 3' },
    { id: 'model-x', label: 'Model X' },
    { id: 'model-y', label: 'Model Y' },
    { id: 'cybertruck', label: 'Cybertruck' },
    { id: 'powerwall', label: 'Powerwall' }
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div 
            className="flex-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="block w-32"
            >
              <img 
                src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" 
                alt="Tesla Logo" 
                className={`h-6 transition-all duration-500 ${isScrolled ? 'brightness-0' : 'brightness-0 invert'}`}
              />
            </a>
          </motion.div>

          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-6">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <motion.button
                    whileHover={{ y: -2 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`font-medium text-sm transition duration-300 hover:text-tesla-red ${
                      isScrolled ? 'text-gray-800' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="flex-1 flex justify-end">
            <ul className="hidden lg:flex space-x-6">
              {['Shop', 'Account'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (navItems.length + index) * 0.1 }}
                >
                  <motion.button
                    whileHover={{ y: -2 }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`font-medium text-sm transition duration-300 hover:text-tesla-red ${
                      isScrolled ? 'text-gray-800' : 'text-white'
                    }`}
                  >
                    {item}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-full ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-lg z-50"
          >
            <div className="container mx-auto px-4 py-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-end mb-8"
              >
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-800"
                >
                  <X size={24} />
                </motion.button>
              </motion.div>
              
              <nav className="flex flex-col space-y-4">
                {[...navItems, { id: 'shop', label: 'Shop' }, { id: 'account', label: 'Account' }].map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="py-3 px-4 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-md text-left hover:text-tesla-red transition-colors"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;