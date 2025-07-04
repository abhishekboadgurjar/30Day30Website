import React from 'react';
import { Award, Users, Headphones, Youtube } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Ranveer Allahbadia</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Ranveer Allahbadia, also known as BeerBiceps, is an entrepreneur, motivational speaker, and one of India's leading content creators. Through his podcast, he engages with thought leaders, celebrities, and experts from various fields to bring insightful conversations to his audience.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With a background in engineering and fitness, Ranveer combines analytical thinking with holistic wellness approaches to provide value-driven content that inspires personal and professional growth.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-3">
                  <Award size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Award-Winning</h4>
                  <p className="text-sm text-gray-600">Multiple creator awards</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-3">
                  <Users size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Community</h4>
                  <p className="text-sm text-gray-600">Millions of engaged followers</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-3">
                  <Headphones size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Top Podcast</h4>
                  <p className="text-sm text-gray-600">Chart-topping episodes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-3">
                  <Youtube size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Creator</h4>
                  <p className="text-sm text-gray-600">Multi-platform presence</p>
                </div>
              </div>
            </div>
            
            <a
              href="/about"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
            >
              Read Full Bio
            </a>
          </div>
          
          <div className="relative">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQC1d2wfuB4CkzP6rwvXMqW6ZUrjnncP8K2jeRjdxoKEaXMac5LAN5QEF0Cl7LUIveY0JL5HtW98gWZzip6q86G6Q"
              alt="Ranveer Allahbadia"
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 -z-10 w-72 h-72 bg-primary/10 rounded-full"></div>
            <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 -z-10 w-48 h-48 bg-primary/10 rounded-full"></div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10M+</div>
            <p className="text-gray-600">Social Media Followers</p>
          </div>
          
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-gray-600">Podcast Episodes</p>
          </div>
          
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100M+</div>
            <p className="text-gray-600">Views on YouTube</p>
          </div>
          
          <div>
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <p className="text-gray-600">Celebrity Interviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;