import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, BarChart, ListFilter, Search, ArrowRight } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  image: string;
  duration: string;
  level: string;
  category: string;
  description: string;
  price: string;
  featured?: boolean;
}

const CoursesPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', 'Web Development', 'Mobile Development', 'Data Structures', 'Design', 'Machine Learning', 'Game Development'];

  const courses: Course[] = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "16 weeks",
      level: "Beginner to Advanced",
      category: "Web Development",
      description: "Master front-end and back-end technologies to build complete web applications. Learn HTML, CSS, JavaScript, React, Node.js, and more.",
      price: "$1,499",
      featured: true
    },
    {
      id: 2,
      title: "Mobile App Development",
      image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "14 weeks",
      level: "Intermediate",
      category: "Mobile Development",
      description: "Learn to create native mobile applications for iOS and Android platforms using React Native and Flutter.",
      price: "$1,299",
      featured: true
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      image: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "12 weeks",
      level: "Intermediate to Advanced",
      category: "Data Structures",
      description: "Strengthen your problem-solving skills and ace technical interviews with advanced data structures and algorithms.",
      price: "$1,199",
      featured: true
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "10 weeks",
      level: "Beginner",
      category: "Design",
      description: "Learn the principles of user interface and user experience design. Master tools like Figma and design thinking methodologies.",
      price: "$999",
    },
    {
      id: 5,
      title: "JavaScript Mastery",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "8 weeks",
      level: "Intermediate",
      category: "Web Development",
      description: "Take your JavaScript skills to the next level. Learn modern ES6+ features, async programming, and advanced concepts.",
      price: "$899",
    },
    {
      id: 6,
      title: "Machine Learning Fundamentals",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "14 weeks",
      level: "Intermediate to Advanced",
      category: "Machine Learning",
      description: "Introduction to machine learning algorithms, data processing, and model training with Python and popular ML libraries.",
      price: "$1,399",
    },
    {
      id: 7,
      title: "Game Development with Unity",
      image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "12 weeks",
      level: "Beginner to Intermediate",
      category: "Game Development",
      description: "Create 2D and 3D games using Unity engine. Learn game design principles, C# programming, and asset creation.",
      price: "$1,199",
    },
    {
      id: 8,
      title: "Python for Data Science",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "10 weeks",
      level: "Beginner to Intermediate",
      category: "Data Structures",
      description: "Learn Python programming with focus on data analysis, visualization, and basic machine learning concepts.",
      price: "$999",
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Expand Your Coding Skills</h1>
            <p className="text-lg text-indigo-100 mb-6">
              Browse our comprehensive range of courses designed to help you master the latest technologies and programming concepts.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2">
              <ListFilter size={18} className="text-gray-600" />
              <span className="text-gray-700">Filter by:</span>
              <select
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12" ref={ref}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">
            {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'} Available
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full ${
                  course.featured ? 'border-2 border-indigo-500' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * (index % 4) }}
              >
                {course.featured && (
                  <div className="bg-indigo-500 text-white text-xs font-semibold px-3 py-1 text-center">
                    Featured Course
                  </div>
                )}
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">
                    {course.category}
                  </span>
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

                  <div className="mt-auto space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">{course.price}</span>
                      <a href="#" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition-colors">
                        Details <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                    <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors font-medium">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No courses found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Not Sure Which Course to Choose?</h2>
              <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                Our education counselors can help you find the perfect course based on your goals, experience level, and interests.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  Schedule a Consultation
                </a>
                <a
                  href="#"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  Download Course Catalog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesPage;