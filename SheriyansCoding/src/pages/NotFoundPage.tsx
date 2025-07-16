import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-indigo-100 rounded-full">
          <Code size={48} className="text-indigo-600" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <div className="mt-6 text-sm text-gray-600">
            <span>Or check out our </span>
            <Link to="/courses" className="text-indigo-600 hover:text-indigo-800 font-medium">
              courses
            </Link>
            <span> or </span>
            <Link to="/contact" className="text-indigo-600 hover:text-indigo-800 font-medium">
              contact us
            </Link>
            <span> for help.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;