import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Calendar, User } from 'lucide-react';
import { useCart } from '../hooks/useCart';

interface HeaderProps {
  onCartClick: () => void;
  onBookingClick: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onCartClick, onBookingClick, currentPage, onNavigate }) => {
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'Book Demo', id: 'booking' },
    { name: 'About', id: 'about' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-rose-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => onNavigate('home')}
              className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent hover:from-rose-600 hover:to-pink-700 transition-all duration-300"
            >
              Luxe Beauty
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-rose-600 border-b-2 border-rose-600'
                    : 'text-gray-700 hover:text-rose-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-rose-600 transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            
            <button 
              onClick={onBookingClick}
              className="hidden sm:flex items-center px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-lg hover:from-rose-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book Now
            </button>

            <button 
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-rose-600 transition-colors duration-200"
            >
              <ShoppingBag className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-rose-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-rose-100 py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-2 text-left text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-rose-600 bg-rose-50'
                      : 'text-gray-700 hover:text-rose-600 hover:bg-rose-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => {
                  onBookingClick();
                  setIsMenuOpen(false);
                }}
                className="flex items-center px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors duration-200"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};