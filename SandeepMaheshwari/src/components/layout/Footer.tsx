import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sandeep Maheshwari</h3>
            <p className="text-gray-300 mb-4">
              Empowering millions to discover their true potential through
              motivational speaking, entrepreneurship guidance, and life
              coaching.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://youtube.com/@sandeepseminars?feature=shared"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#videos"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Videos
                </a>
              </li>
              <li>
                <a
                  href="#seminars"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Seminars
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="flex items-center text-gray-300 mb-2">
              <Mail size={18} className="mr-2" />
              <a
                href="mailto:info@sandeepmaheshwari.com"
                className="hover:text-blue-400 transition-colors"
              >
                info@sandeepmaheshwari.com
              </a>
            </p>
            <p className="text-gray-300">
              For business inquiries, speaking engagements, or general
              questions, please fill out the
              <a
                href="#contact"
                className="text-blue-400 hover:text-blue-300 ml-1 transition-colors"
              >
                contact form
              </a>
              .
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Sandeep Maheshwari. All rights
            reserved.
          </p>
          <p className="mt-2">
            Design and developed by{" "}
            <a
              href="https://www.boadtechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200"
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
