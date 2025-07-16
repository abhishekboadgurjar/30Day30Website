import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Khan Global Studies</h3>
            <p className="mb-4 text-blue-100">
              Empowering students to achieve success in competitive exams
              through quality education and guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com/@khangsresearchcentre1685?feature=shared"
                className="hover:text-blue-300 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Courses", "About Us", "Resources", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item
                        .toLowerCase()
                        .replace(" us", "")
                        .replace(" ", "-")}`}
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              {[
                "UPSC Civil Services",
                "SSC",
                "Banking Exams",
                "NEET",
                "Railway Exams",
              ].map((course) => (
                <li key={course}>
                  <a
                    href="#courses"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-300 mt-0.5" />
                <span className="text-blue-100">
                  123 Education Street, Patna, Bihar, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-300" />
                <span className="text-blue-100">+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-300" />
                <span className="text-blue-100">
                  info@khanglobalstudies.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>
            &copy; {new Date().getFullYear()} Khan Global Studies. All rights
            reserved.
          </p>
          <p className="mt-2">
            Design and developed by{" "}
            <a
              href="https://www.boadtechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-400"
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
