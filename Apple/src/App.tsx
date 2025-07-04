import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import MacPage from "./pages/MacPage";
import IphonePage from "./pages/IphonePage";
import IpadPage from "./pages/IpadPage";
import WatchPage from "./pages/WatchPage";
import AirPodsPage from "./pages/AirPodsPage";
import SupportPage from "./pages/SupportPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-['Inter',sans-serif] text-gray-900 antialiased">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/mac" element={<MacPage />} />
            <Route path="/iphone" element={<IphonePage />} />
            <Route path="/ipad" element={<IpadPage />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/airpods" element={<AirPodsPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
