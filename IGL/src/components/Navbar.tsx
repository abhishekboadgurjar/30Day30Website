import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white font-bold text-xl cursor-pointer relative overflow-hidden group">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">INDIA'S GOT</span>
            <span className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 transition-transform duration-300 translate-y-full group-hover:translate-y-0">INDIA'S GOT</span>
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 font-extrabold">LATENT</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Episodes', 'Auditions', 'Judges', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-yellow-300 transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
            <User size={18} />
            <span>Sign Up/Login</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {['Home', 'Episodes', 'Auditions', 'Judges', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-yellow-300 py-2 px-4 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2 rounded-full font-medium transition-colors duration-300 flex items-center justify-center space-x-2 mt-4">
            <User size={18} />
            <span>Sign Up/Login</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;