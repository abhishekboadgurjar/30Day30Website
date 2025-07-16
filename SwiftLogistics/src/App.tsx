import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import PricingCalculator from './components/PricingCalculator';
import TrackingSection from './components/TrackingSection';
import Services from './components/Services';
import LiveChat from './components/LiveChat';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading your delivery solution...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && (
        <>
          <Hero />
          <BookingForm />
          <Services />
          <PricingCalculator />
        </>
      )}
      
      {activeSection === 'booking' && (
        <div className="pt-20">
          <BookingForm />
        </div>
      )}
      
      {activeSection === 'pricing' && (
        <div className="pt-20">
          <PricingCalculator />
        </div>
      )}
      
      {activeSection === 'tracking' && (
        <div className="pt-20">
          <TrackingSection />
        </div>
      )}
      
      {activeSection === 'contact' && (
        <div className="pt-20">
          <Contact />
        </div>
      )}

      <Footer />
      
      <LiveChat isOpen={showChat} onToggle={() => setShowChat(!showChat)} />
    </div>
  );
}

export default App;