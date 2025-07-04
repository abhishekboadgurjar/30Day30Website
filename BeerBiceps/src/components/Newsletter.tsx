import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Simulate form submission
    setIsSubmitted(true);
    setError('');
    setEmail('');
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail size={32} className="mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-bold mb-4">Subscribe to the Newsletter</h2>
          <p className="text-gray-300 mb-8">
            Get the latest episodes, exclusive content, and insights directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`w-full px-4 py-3 rounded-md focus:outline-none text-gray-900 ${
                    error ? 'border-2 border-red-500' : ''
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && (
                  <p className="text-red-500 text-left text-sm mt-1">{error}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                Subscribe
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </form>

          {isSubmitted && (
            <div className="mt-4 text-green-400 animate-fade-in">
              Thanks for subscribing! Check your email to confirm.
            </div>
          )}

          <p className="text-gray-400 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;