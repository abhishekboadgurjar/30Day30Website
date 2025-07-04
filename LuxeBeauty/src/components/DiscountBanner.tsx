import React from 'react';
import { X, Sparkles } from 'lucide-react';

interface DiscountBannerProps {
  onClose: () => void;
}

export const DiscountBanner: React.FC<DiscountBannerProps> = ({ onClose }) => {
  return (
    <div className="relative bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="h-5 w-5 animate-pulse" />
          <p className="text-center font-medium">
            <span className="font-bold">Limited Time:</span> Get 30% OFF on all makeup kits + FREE consultation! 
            <span className="ml-2 font-bold">Use code: BEAUTY30</span>
          </p>
          <Sparkles className="h-5 w-5 animate-pulse" />
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};