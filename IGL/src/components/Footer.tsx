import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative pb-4">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center">
              <div className="text-white font-bold text-xl">
                <span className="inline-block">INDIA'S GOT</span>
                <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 font-extrabold">LATENT</span>
              </div>
            </div>
            
            <p className="text-gray-400 mt-4 mb-6">India's premier talent competition showcasing the extraordinary and occasionally bewildering talents from across the nation.</p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-yellow-400"></span>
            </h3>
            
            <ul className="space-y-2">
              {['Home', 'Episodes', 'Auditions', 'Judges', 'About', 'FAQ', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 group inline-flex items-center"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-yellow-400"></span>
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-yellow-400 mr-3 mt-1">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-400">123 Talent Street, Mumbai, Maharashtra 400001, India</span>
              </li>
              <li className="flex items-center">
                <div className="text-yellow-400 mr-3">
                  <Phone size={18} />
                </div>
                <span className="text-gray-400">+91 12345 67890</span>
              </li>
              <li className="flex items-center">
                <div className="text-yellow-400 mr-3">
                  <Mail size={18} />
                </div>
                <span className="text-gray-400">info@indiasgotlatent.tv</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 relative inline-block">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-yellow-400"></span>
            </h3>
            
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates on auditions, episodes, and behind-the-scenes content.</p>
            
            <form className="mb-6">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button 
                  type="submit"
                  className="absolute right-0 top-0 bottom-0 bg-yellow-400 hover:bg-yellow-300 text-black px-4 rounded-r-lg font-medium transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            <div className="flex space-x-4">
              <a href="#" className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/60 to-yellow-500/60 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-black/30 p-2 rounded-lg overflow-hidden">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1024px-Google_Play_Store_badge_EN.svg.png" alt="Get it on Google Play" className="h-8" />
                  </div>
                </div>
              </a>
              <a href="#" className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/60 to-yellow-500/60 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-black/30 p-2 rounded-lg overflow-hidden">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png" alt="Download on the App Store" className="h-8" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    <div className="border-t border-gray-800 py-6 mt-8">
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    <p className="text-gray-500 text-sm">
      © 2025 India's Got Latent. All rights reserved.
    </p>

    <div className="flex space-x-6 mt-4 md:mt-0">
      <a
        href="#"
        className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
      >
        Privacy Policy
      </a>
      <a
        href="#"
        className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
      >
        Terms of Service
      </a>
      <a
        href="#"
        className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
      >
        Cookie Policy
      </a>
    </div>
  </div>

  {/* Boad Technologies credit */}
  <div className="mt-4 text-center text-sm text-gray-500">
    Design and developed by{" "}
    <a
      href="https://www.boadtechnologies.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Boad Technologies
    </a>
  </div>
</div>

    </footer>
  );
};

export default Footer;