import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Videos from './components/sections/Videos';
import Seminars from './components/sections/Seminars';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

import './index.css';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "Sandeep Maheshwari | Motivational Speaker & Entrepreneur";
    
    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // For cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
    };
  }, []);
  
  return (
    <div className="font-['Open_Sans']">
      <Navbar />
      <Hero />
      <About />
      <Videos />
      <Testimonials />
      <Seminars />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;