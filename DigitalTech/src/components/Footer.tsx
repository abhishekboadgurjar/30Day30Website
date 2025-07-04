import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Digital<span className="font-normal">Tech</span>
            </h3>
            <p className="text-slate-300 mb-6">
              Creating exceptional digital experiences through innovative web
              development solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "Home",
                "Services",
                "Projects",
                "About",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-300 hover:text-sky-400 transition-colors flex items-center"
                  >
                    <ArrowRight size={16} className="mr-2" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Web Design",
                "Web Development",
                "E-commerce Solutions",
                "CMS Development",
                "UI/UX Design",
                "Web Maintenance",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-300 hover:text-sky-400 transition-colors flex items-center"
                  >
                    <ArrowRight size={16} className="mr-2" /> {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  className="text-sky-400 mr-3 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-slate-300">
                  123 Web Avenue, Digital City, Internet State, 10010
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-sky-400 mr-3 flex-shrink-0" size={18} />
                <a
                  href="tel:+11234567890"
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-sky-400 mr-3 flex-shrink-0" size={18} />
                <a
                  href="mailto:info@Digitaltech.com"
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                >
                  info@digitaltech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-slate-400 text-sm">
                © {currentYear} Digital Tech. All rights reserved.
              </p>
              <p className="text-slate-400 text-sm">
                Design and developed by{" "}
                <a 
                  href="https://www.boadtechnologies.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 transition-colors font-medium"
                >
                  Boad Technologies
                </a>
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors"
                  >
                    Cookies Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;