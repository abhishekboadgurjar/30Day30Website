import React, { useState } from 'react';
import { Clock, Users, BookOpen, Award } from 'lucide-react';
import CourseCard from './CourseCard';
import { courses } from '../data/courses';

const categories = ['All', 'UPSC', 'SSC', 'Banking', 'NEET', 'Railway'];

const CourseSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Premium Courses
          </h2>
          <p className="text-gray-600 mb-8">
            Comprehensive courses designed by experts to help you excel in competitive exams
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Why Choose Our Courses?
              </h3>
              <p className="text-gray-600 mb-6">
                With Khan Sir's proven teaching methodology and our comprehensive approach, we ensure the highest success rate in competitive exams.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Clock className="h-5 w-5 text-blue-600" />, text: 'Flexible Learning Schedule' },
                  { icon: <Users className="h-5 w-5 text-blue-600" />, text: 'Interactive Live Classes' },
                  { icon: <BookOpen className="h-5 w-5 text-blue-600" />, text: 'Comprehensive Study Material' },
                  { icon: <Award className="h-5 w-5 text-blue-600" />, text: 'Regular Mock Tests' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 mt-1">{feature.icon}</div>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Get Personal Counseling</h4>
              <p className="text-gray-600 mb-6">
                Not sure which course is right for you? Get free counseling from our expert team.
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Request a Call Back
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;