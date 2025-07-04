import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Luxe Beauty
            </h3>
            <p className="text-gray-300 mb-4">
              Premium beauty products and personalized gifts crafted with love and attention to detail.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 bg-rose-600 rounded-lg hover:bg-rose-700 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="p-2 bg-rose-600 rounded-lg hover:bg-rose-700 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="p-2 bg-rose-600 rounded-lg hover:bg-rose-700 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">Book Consultation</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-rose-400 mr-3" />
                <span className="text-gray-300">hello@luxebeauty.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-rose-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-rose-400 mr-3" />
                <span className="text-gray-300">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Luxe Beauty. All rights reserved. Developed by{' '}
            <span className="text-rose-400 font-semibold">Boad Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
};