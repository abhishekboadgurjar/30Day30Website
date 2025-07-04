import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Pricing />
      <Booking />
      <InstagramFeed />
      <Footer />
    </div>
  );
}

export default App;