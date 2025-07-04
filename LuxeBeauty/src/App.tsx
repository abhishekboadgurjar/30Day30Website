import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DiscountBanner } from './components/DiscountBanner';
import { Cart } from './components/Cart';
import { BookingModal } from './components/BookingModal';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Checkout } from './pages/Checkout';
import { Product } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showDiscountBanner, setShowDiscountBanner] = useState(true);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedProduct(null);
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
  };

  const handleBackFromProduct = () => {
    setSelectedProduct(null);
    setCurrentPage('products');
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentPage('checkout');
  };

  const handleOrderComplete = () => {
    alert('Order placed successfully! Thank you for your purchase.');
    setCurrentPage('home');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            onNavigate={handleNavigate}
            onViewProduct={handleViewProduct}
            onBookingClick={() => setIsBookingOpen(true)}
          />
        );
      case 'products':
        return <Products onViewProduct={handleViewProduct} />;
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetail
            product={selectedProduct}
            onBack={handleBackFromProduct}
          />
        ) : null;
      case 'checkout':
        return (
          <Checkout
            onBack={() => setIsCartOpen(true)}
            onOrderComplete={handleOrderComplete}
          />
        );
      default:
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-gray-600">This page is under construction.</p>
              <button
                onClick={() => handleNavigate('home')}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-lg hover:from-rose-600 hover:to-pink-700 transition-all duration-300"
              >
                Go Home
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {showDiscountBanner && (
        <DiscountBanner onClose={() => setShowDiscountBanner(false)} />
      )}
      
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onBookingClick={() => setIsBookingOpen(true)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main>
        {renderCurrentPage()}
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

export default App;