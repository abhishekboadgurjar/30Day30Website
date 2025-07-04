import React, { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Store", path: "/store" },
    { name: "Mac", path: "/mac" },
    { name: "iPad", path: "/ipad" },
    { name: "iPhone", path: "/iphone" },
    { name: "Watch", path: "/watch" },
    { name: "AirPods", path: "/airpods" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-black/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 text-white hover:text-gray-300 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-black hover:text-gray-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
                  fill={isScrolled ? "black" : "white"}
                />
              </svg>
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-black hover:text-gray-600"
                    : "text-white hover:text-gray-300"
                } ${location.pathname === item.path ? "opacity-50" : ""}`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/support"
              className={`text-sm font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-black hover:text-gray-600"
                  : "text-white hover:text-gray-300"
              } ${location.pathname === "/support" ? "opacity-50" : ""}`}
            >
              Support
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button
              className={`p-2 transition-colors duration-200 ${
                isScrolled
                  ? "text-black hover:text-gray-600"
                  : "text-white hover:text-gray-300"
              } focus:outline-none`}
            >
              <Search size={18} />
            </button>
            <button
              className={`p-2 transition-colors duration-200 ${
                isScrolled
                  ? "text-black hover:text-gray-600"
                  : "text-white hover:text-gray-300"
              } focus:outline-none`}
            >
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-4">
            <Link
              to="/"
              className="flex items-center justify-center py-2 text-white hover:text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
                  fill="white"
                />
              </svg>
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-base font-medium text-white hover:text-gray-300 transition-colors duration-200 text-center ${
                  location.pathname === item.path ? "opacity-50" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/support"
              className={`block text-base font-medium text-white hover:text-gray-300 transition-colors duration-200 text-center ${
                location.pathname === "/support" ? "opacity-50" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </Link>
            <div className="pt-4 border-t border-gray-700 flex justify-center space-x-8">
              <button className="flex items-center space-x-2 text-white hover:text-gray-300">
                <Search size={18} />
                <span className="text-sm">Search</span>
              </button>
              <button className="flex items-center space-x-2 text-white hover:text-gray-300">
                <ShoppingBag size={18} />
                <span className="text-sm">Bag</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
