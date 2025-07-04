import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, AlignJustify as Spotify, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">BeerBiceps</h3>
            <p className="text-gray-400 mb-4">
              Conversations that inspire, educate, and entertain. Join Ranveer Allahbadia on a journey of discovery.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.youtube.com/@BeerBiceps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://open.spotify.com/show/6rrhlLnCjwNBEqRBsJqXwU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="Spotify"
              >
                <Spotify size={20} />
              </a>
              <a
                href="https://www.instagram.com/beerbiceps/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com/RanveerAllahbad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/episodes" className="text-gray-400 hover:text-white transition-colors">
                  Episodes
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/episodes?category=Mindfulness" className="text-gray-400 hover:text-white transition-colors">
                  Mindfulness
                </Link>
              </li>
              <li>
                <Link to="/episodes?category=Business" className="text-gray-400 hover:text-white transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/episodes?category=Health" className="text-gray-400 hover:text-white transition-colors">
                  Health & Fitness
                </Link>
              </li>
              <li>
                <Link to="/episodes?category=Finance" className="text-gray-400 hover:text-white transition-colors">
                  Finance
                </Link>
              </li>
              <li>
                <Link to="/episodes?category=Creativity" className="text-gray-400 hover:text-white transition-colors">
                  Creativity
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="flex items-center text-gray-400 mb-2">
              <Mail size={16} className="mr-2" /> contact@beerbiceps.com
            </p>
            <div className="mt-4">
              <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors">
                Send Message
              </Link>
            </div>
          </div>
        </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
  <p>&copy; {new Date().getFullYear()} BeerBiceps. All rights reserved.</p>
  <p className="mt-1">
    Design and developed by{" "}
    <a
      href="https://www.boadtechnologies.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Boad Technologies
    </a>
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;