import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Code2, ExternalLink } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Digital<span className="font-normal">Tech</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {[
              "Home",
              "Services",
              "Projects",
              "About",
              "Testimonials",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-sky-600 ${
                  scrolled ? "text-slate-800" : "text-white"
                }`}
              >
                {item}
              </a>
            ))}

            {/* Boad Technologies CTA */}
            <a
              href="https://www.boadtechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium border border-sky-500 rounded-lg transition-all duration-300 hover:bg-sky-500 hover:text-white ${
                scrolled
                  ? "text-sky-600 hover:border-sky-600"
                  : "text-white border-white/50 hover:bg-white hover:text-sky-600"
              }`}
            >
              <Code2 size={16} />
              <span>Need a Website</span>
              <ExternalLink size={14} />
            </a>

            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-600 rounded-lg hover:from-sky-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X
                size={24}
                className={scrolled ? "text-slate-800" : "text-white"}
              />
            ) : (
              <Menu
                size={24}
                className={scrolled ? "text-slate-800" : "text-white"}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg py-5 px-4 transition-all">
            <nav className="flex flex-col space-y-4">
              {[
                "Home",
                "Services",
                "Projects",
                "About",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="flex items-center text-slate-800 hover:text-sky-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ChevronRight size={16} className="mr-2" />
                  {item}
                </a>
              ))}

              {/* Mobile Boad Technologies Section */}
              <div className="pt-4 mt-4 border-t border-slate-200">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  Professional Services
                </p>
                <a
                  href="https://www.boadtechnologies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 text-slate-800 bg-slate-50 rounded-lg hover:bg-sky-50 hover:text-sky-600 transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    <Code2
                      size={20}
                      className="text-sky-500 group-hover:text-sky-600 transition-colors"
                    />
                    <div>
                      <div className="font-medium">Boad Technologies</div>
                      <div className="text-xs text-slate-500">
                        Website & App Development
                      </div>
                    </div>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-slate-400 group-hover:text-sky-500 transition-colors"
                  />
                </a>
              </div>

              <a
                href="#contact"
                className="mt-4 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-600 rounded-lg hover:from-sky-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
