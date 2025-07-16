import React from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Mail,
  Phone,
  MapPin,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold"
            >
              <Code size={28} />
              <span>Sheriyans</span>
            </Link>
            <p className="text-indigo-200 mt-4 leading-relaxed">
              Empowering the next generation of coders with hands-on learning,
              industry-relevant skills, and a supportive community.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-white hover:text-indigo-300 transition-colors"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-indigo-300 transition-colors"
              >
                <TwitterIcon size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-indigo-300 transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-indigo-300 transition-colors"
              >
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Courses", "About Us", "Gallery", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={
                        item === "Home"
                          ? "/"
                          : `/${item.toLowerCase().replace(" ", "")}`
                      }
                      className="text-indigo-200 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "App Development",
                "Data Structures & Algorithms",
                "UI/UX Design",
                "Machine Learning",
                "Game Development",
              ].map((course) => (
                <li key={course}>
                  <Link
                    to="/courses"
                    className="text-indigo-200 hover:text-white transition-colors"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-indigo-300 flex-shrink-0 mt-1"
                />
                <span className="text-indigo-200">
                  123 Education Street, Tech City, 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-indigo-300 flex-shrink-0" />
                <span className="text-indigo-200">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-indigo-300 flex-shrink-0" />
                <a
                  href="mailto:info@sheriyans.com"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  info@sheriyans.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-800 mt-12 pt-8 text-center text-indigo-300">
          <p>
            © {new Date().getFullYear()} Sheriyans Coding School. All rights
            reserved.
          </p>
          <p className="mt-2">
            Design and developed by{" "}
            <a
              href="https://www.boadtechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-indigo-400"
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
