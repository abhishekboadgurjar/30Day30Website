import React, { useState } from 'react';
import { Clock, Users, MapPin, Filter, Calendar } from 'lucide-react';

interface ClassScheduleProps {
  onBookClass: (classData: any) => void;
}

const ClassSchedule: React.FC<ClassScheduleProps> = ({ onBookClass }) => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const categories = ['All', 'Yoga', 'HIIT', 'Personal Training', 'Group Fitness'];

  const classes = {
    Monday: [
      {
        id: 1,
        name: 'Morning Vinyasa Flow',
        instructor: 'Sarah Johnson',
        time: '7:00 AM - 8:00 AM',
        duration: '60 min',
        spots: 12,
        maxSpots: 15,
        category: 'Yoga',
        level: 'All Levels',
        price: 25
      },
      {
        id: 2,
        name: 'HIIT Bootcamp',
        instructor: 'Mike Chen',
        time: '6:00 PM - 7:00 PM',
        duration: '60 min',
        spots: 8,
        maxSpots: 10,
        category: 'HIIT',
        level: 'Intermediate',
        price: 30
      },
      {
        id: 3,
        name: 'Personal Training',
        instructor: 'Emma Wilson',
        time: '9:00 AM - 10:00 AM',
        duration: '60 min',
        spots: 1,
        maxSpots: 1,
        category: 'Personal Training',
        level: 'Customized',
        price: 80
      }
    ],
    Tuesday: [
      {
        id: 4,
        name: 'Hatha Yoga',
        instructor: 'David Park',
        time: '8:00 AM - 9:30 AM',
        duration: '90 min',
        spots: 10,
        maxSpots: 12,
        category: 'Yoga',
        level: 'Beginner',
        price: 25
      },
      {
        id: 5,
        name: 'Strength & Conditioning',
        instructor: 'Lisa Rodriguez',
        time: '7:00 PM - 8:00 PM',
        duration: '60 min',
        spots: 6,
        maxSpots: 8,
        category: 'Group Fitness',
        level: 'All Levels',
        price: 20
      }
    ],
    Wednesday: [
      {
        id: 6,
        name: 'Power Yoga',
        instructor: 'Sarah Johnson',
        time: '7:30 AM - 8:30 AM',
        duration: '60 min',
        spots: 14,
        maxSpots: 15,
        category: 'Yoga',
        level: 'Intermediate',
        price: 25
      },
      {
        id: 7,
        name: 'CrossFit WOD',
        instructor: 'Tom Anderson',
        time: '6:30 PM - 7:30 PM',
        duration: '60 min',
        spots: 5,
        maxSpots: 12,
        category: 'HIIT',
        level: 'Advanced',
        price: 35
      }
    ],
    Thursday: [
      {
        id: 8,
        name: 'Restorative Yoga',
        instructor: 'Emma Wilson',
        time: '6:00 PM - 7:15 PM',
        duration: '75 min',
        spots: 8,
        maxSpots: 10,
        category: 'Yoga',
        level: 'All Levels',
        price: 25
      }
    ],
    Friday: [
      {
        id: 9,
        name: 'Friday Flow',
        instructor: 'Sarah Johnson',
        time: '7:00 AM - 8:00 AM',
        duration: '60 min',
        spots: 11,
        maxSpots: 15,
        category: 'Yoga',
        level: 'All Levels',
        price: 25
      },
      {
        id: 10,
        name: 'HIIT & Core',
        instructor: 'Mike Chen',
        time: '6:00 PM - 6:45 PM',
        duration: '45 min',
        spots: 9,
        maxSpots: 12,
        category: 'HIIT',
        level: 'Intermediate',
        price: 25
      }
    ],
    Saturday: [
      {
        id: 11,
        name: 'Weekend Warriors',
        instructor: 'Lisa Rodriguez',
        time: '9:00 AM - 10:30 AM',
        duration: '90 min',
        spots: 7,
        maxSpots: 15,
        category: 'Group Fitness',
        level: 'All Levels',
        price: 30
      }
    ],
    Sunday: [
      {
        id: 12,
        name: 'Sunday Zen',
        instructor: 'David Park',
        time: '10:00 AM - 11:30 AM',
        duration: '90 min',
        spots: 12,
        maxSpots: 15,
        category: 'Yoga',
        level: 'All Levels',
        price: 25
      }
    ]
  };

  const filteredClasses = classes[selectedDay]?.filter(cls => 
    selectedCategory === 'All' || cls.category === selectedCategory
  ) || [];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Yoga': return 'from-emerald-500 to-emerald-600';
      case 'HIIT': return 'from-red-500 to-red-600';
      case 'Personal Training': return 'from-blue-500 to-blue-600';
      case 'Group Fitness': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Class <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Schedule</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect class for your schedule and fitness level. Book your spot today!
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Day Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedDay === day
                    ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            <div className="flex items-center space-x-2 mr-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Category:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-500'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((classItem) => (
            <div
              key={classItem.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${getCategoryColor(classItem.category)}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{classItem.name}</h3>
                    <p className="text-gray-600">with {classItem.instructor}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(classItem.level)}`}>
                    {classItem.level}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-4 h-4 mr-3 text-emerald-500" />
                    <span>{classItem.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-4 h-4 mr-3 text-emerald-500" />
                    <span>{classItem.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="w-4 h-4 mr-3 text-emerald-500" />
                    <span>{classItem.spots} of {classItem.maxSpots} spots available</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-4 h-4 mr-3 text-emerald-500" />
                    <span>Studio A</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    ${classItem.price}
                  </span>
                  <button
                    onClick={() => onBookClass(classItem)}
                    disabled={classItem.spots === 0}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      classItem.spots === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:shadow-lg transform hover:scale-105'
                    }`}
                  >
                    {classItem.spots === 0 ? 'Full' : 'Book Now'}
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${getCategoryColor(classItem.category)} transition-all duration-500`}
                      style={{ width: `${((classItem.maxSpots - classItem.spots) / classItem.maxSpots) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {Math.round(((classItem.maxSpots - classItem.spots) / classItem.maxSpots) * 100)}% full
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredClasses.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No classes scheduled</h3>
            <p className="text-gray-600">Try selecting a different day or category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClassSchedule;