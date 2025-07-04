import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ClassSchedule from './components/ClassSchedule';
import BookingModal from './components/BookingModal';
import ProgressDashboard from './components/ProgressDashboard';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleBookClass = (classData: any) => {
    setSelectedClass(classData);
    setShowBookingModal(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading your wellness journey...</p>
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
          <Services />
          <ClassSchedule onBookClass={handleBookClass} />
          <Testimonials />
        </>
      )}
      
      {activeSection === 'schedule' && (
        <div className="pt-20">
          <ClassSchedule onBookClass={handleBookClass} />
        </div>
      )}
      
      {activeSection === 'dashboard' && (
        <div className="pt-20">
          <ProgressDashboard />
        </div>
      )}
      
      {activeSection === 'contact' && (
        <div className="pt-20">
          <Contact />
        </div>
      )}

      <Footer />
      
      {showBookingModal && (
        <BookingModal
          classData={selectedClass}
          onClose={() => setShowBookingModal(false)}
        />
      )}
    </div>
  );
}

export default App;