import React, { useState } from 'react';
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const images = [product.image, product.image, product.image]; // Mock multiple images

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-rose-600 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-lg">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    activeImage === index ? 'border-rose-500' : 'border-gray-200 hover:border-rose-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-600 hover:text-rose-600 transition-colors duration-200">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-rose-600 transition-colors duration-200">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-sm font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl hover:from-rose-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
              >
                <ShoppingCart className="h-5 w-5 mr-3" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>

              {/* Stock Status */}
              <div className="mt-4 flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Premium quality materials</li>
                <li>• Professional-grade formulation</li>
                <li>• Cruelty-free and ethically sourced</li>
                <li>• Suitable for all skin types</li>
                <li>• Long-lasting performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};