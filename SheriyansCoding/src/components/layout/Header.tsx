import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Code, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-2xl font-bold"
          onClick={closeMenu}
        >
          <Code 
            size={32} 
            className={`transition-colors duration-300 ${
              scrolled ? 'text-indigo-700' : 'text-white'
            }`} 
          />
          <span 
            className={`transition-colors duration-300 ${
              scrolled ? 'text-indigo-700' : 'text-white'
            }`}
          >
            Sheriyans
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition-colors duration-300 hover:text-indigo-400 ${
                  isActive 
                    ? 'text-indigo-500' 
                    : scrolled ? 'text-gray-800' : 'text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button 
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
              scrolled 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                : 'bg-white text-indigo-600 hover:bg-gray-100'
            }`}
          >
            Apply Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X 
              size={28} 
              className={scrolled ? 'text-gray-800' : 'text-white'} 
            />
          ) : (
            <Menu 
              size={28} 
              className={scrolled ? 'text-gray-800' : 'text-white'} 
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg py-2 font-medium ${
                      isActive ? 'text-indigo-600' : 'text-gray-800'
                    }`
                  }
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              ))}
              <button 
                className="mt-4 px-5 py-3 bg-indigo-600 text-white text-lg rounded-full font-medium hover:bg-indigo-700 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;