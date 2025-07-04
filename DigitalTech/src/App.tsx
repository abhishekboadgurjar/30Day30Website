import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-slate-50 text-slate-900">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;