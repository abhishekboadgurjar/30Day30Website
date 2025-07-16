import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BarChart } from 'lucide-react';

interface CourseProps {
  course: {
    id: number;
    title: string;
    image: string;
    duration: string;
    level: string;
    description: string;
  };
}

const CourseCard: React.FC<CourseProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{course.title}</h3>
        
        <div className="flex space-x-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <BarChart size={16} className="mr-1" />
            {course.level}
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 flex-grow">{course.description}</p>
        
        <Link 
          to={`/courses`} 
          className="mt-auto inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
        >
          Learn More <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;