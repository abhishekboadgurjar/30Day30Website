import React, { useState } from 'react';
import { FileText, Download, BookOpen, Bell } from 'lucide-react';
import { resources, currentAffairs } from '../data/resources';

const ResourceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'materials' | 'current'>('materials');
  
  return (
    <section id="resources" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Study Resources
          </h2>
          <p className="text-gray-600">
            Access high-quality study materials and stay updated with current affairs relevant to your exams
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('materials')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === 'materials'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex justify-center items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>Study Materials</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('current')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === 'current'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex justify-center items-center">
                <Bell className="h-5 w-5 mr-2" />
                <span>Current Affairs</span>
              </div>
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'materials' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-lg p-5 transition-all hover:shadow-md hover:border-blue-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        resource.type === 'Free' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {resource.type}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{resource.size}</span>
                      <a 
                        href="#"
                        className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {currentAffairs.map((item, index) => (
                  <div 
                    key={index} 
                    className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-gray-800">{item.title}</h3>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href="#"
                      className="mt-3 inline-block text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Read more →
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Subscribe to Our Monthly Newsletter</h3>
              <p className="mb-4 text-blue-100">
                Stay updated with the latest exam notifications, free resources, and preparation tips.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row md:flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="px-4 py-3 rounded-lg focus:outline-none text-gray-800 w-full"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-lg transition-colors whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;