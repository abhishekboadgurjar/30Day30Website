import React from 'react';
import { Camera, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Camera className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-semibold">Sarah Chen Photography</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Creating timeless memories through the art of photography. Specializing in weddings, 
              portraits, and commercial photography in the San Francisco Bay Area.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Portfolio', 'About', 'Pricing', 'Booking', 'Blog', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-gray-400">(415) 555-0123</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-gray-400">hello@sarahchen.photo</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-1" />
                <div className="text-gray-400">
                  <div>San Francisco, CA</div>
                  <div className="text-sm">Available worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Sarah Chen Photography. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Designed and developed by{' '}
              <a 
                href="https://boadtechnologies.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 transition-colors"
              >
                Boad Technologies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;