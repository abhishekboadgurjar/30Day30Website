import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseSection from './components/CourseSection';
import AboutSection from './components/AboutSection';
import ResourceSection from './components/ResourceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  // Update document title
  React.useEffect(() => {
    document.title = 'Khan Global Studies - Excellence in Education';
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <CourseSection />
      <AboutSection />
      <ResourceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;