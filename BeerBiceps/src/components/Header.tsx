import React, { useState, useEffect } from 'react';
import { Menu, X, Youtube, AlignJustify as Spotify, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold text-gray-900"
        >
          <span className={`text-primary transition-colors duration-300`}>
            BeerBiceps
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-primary transition-colors font-medium">
            Home
          </Link>
          <Link to="/episodes" className="text-gray-800 hover:text-primary transition-colors font-medium">
            Episodes
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-primary transition-colors font-medium">
            About
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-primary transition-colors font-medium">
            Contact
          </Link>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.youtube.com/@BeerBiceps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://open.spotify.com/show/6rrhlLnCjwNBEqRBsJqXwU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              <Spotify size={20} />
            </a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-900 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 absolute top-full left-0 right-0 animate-fade-in-down">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-800 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/episodes"
              className="text-gray-800 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Episodes
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.youtube.com/@BeerBiceps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://open.spotify.com/show/6rrhlLnCjwNBEqRBsJqXwU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                <Spotify size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;