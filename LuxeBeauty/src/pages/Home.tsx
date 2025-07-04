import React from 'react';
import { ArrowRight, Star, Gift, Palette, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { InstagramFeed } from '../components/InstagramFeed';
import { Product } from '../types';

interface HomeProps {
  onNavigate: (page: string) => void;
  onViewProduct: (product: Product) => void;
  onBookingClick: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onViewProduct, onBookingClick }) => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-100 via-pink-50 to-cream-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f9a8d4%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Discover Your
                <span className="block bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                  Natural Beauty
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Premium makeup kits and personalized gifts crafted with love. 
                Book a consultation to find your perfect look.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate('products')}
                  className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl hover:from-rose-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Shop Now
                  <ArrowRight className="inline h-5 w-5 ml-2" />
                </button>
                <button
                  onClick={onBookingClick}
                  className="px-8 py-4 border-2 border-rose-500 text-rose-600 rounded-xl hover:bg-rose-500 hover:text-white transition-all duration-300 font-semibold"
                >
                  Book Consultation
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Beauty products"
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Luxe Beauty?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of premium quality, personalized service, and expert guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full mb-4">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Consultations</h3>
              <p className="text-gray-600">
                Get personalized makeup advice from certified beauty professionals.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Gifts</h3>
              <p className="text-gray-600">
                Custom engraved jewelry boxes and photo frames for special occasions.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Only the finest ingredients and materials for long-lasting beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular items, carefully selected for their quality and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewProduct}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('products')}
              className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-lg hover:from-rose-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              View All Products
              <ArrowRight className="inline h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                comment: "The makeup consultation was amazing! Found my perfect shade and learned so many new techniques."
              },
              {
                name: "Emily Chen",
                rating: 5,
                comment: "Beautiful personalized jewelry box. The engraving was perfect and shipping was super fast!"
              },
              {
                name: "Maria Rodriguez",
                rating: 5,
                comment: "Love the rose gold makeup kit! Quality is outstanding and the packaging is gorgeous."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />
    </div>
  );
};