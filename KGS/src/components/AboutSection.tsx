import React from 'react';
import { CheckCircle2, UserCheck, BookOpen, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                About Khan Sir & Khan Global Studies
              </h2>
              <p className="text-gray-600 mb-6">
                Khan Global Studies (KGS) was founded by renowned educator Khan Sir with a mission to provide quality education to students preparing for competitive exams. Our unique teaching methodology and comprehensive approach have helped thousands of students achieve their dreams.
              </p>
              <p className="text-gray-600 mb-6">
                With years of experience in guiding students for various competitive exams, Khan Sir has developed a teaching style that simplifies complex concepts and makes learning more effective and engaging.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: <UserCheck className="h-8 w-8 text-blue-600" />,
                  title: 'Expert Faculty',
                  description: 'Learn from experienced educators led by Khan Sir himself'
                },
                {
                  icon: <BookOpen className="h-8 w-8 text-blue-600" />,
                  title: 'Comprehensive Material',
                  description: 'Get access to well-researched and updated study materials'
                },
                {
                  icon: <CheckCircle2 className="h-8 w-8 text-blue-600" />,
                  title: 'Regular Assessment',
                  description: 'Track your progress with regular tests and evaluations'
                },
                {
                  icon: <Award className="h-8 w-8 text-blue-600" />,
                  title: 'Proven Results',
                  description: 'Join our community of successful aspirants'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-5 rounded-lg">
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#courses" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Explore Our Courses
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/5212338/pexels-photo-5212338.jpeg" 
                  alt="Khan Sir teaching" 
                  className="w-full h-64 object-cover rounded-lg shadow-md transform translate-y-8"
                />
                <img 
                  src="https://images.pexels.com/photos/5427669/pexels-photo-5427669.jpeg" 
                  alt="Students studying" 
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg" 
                  alt="KGS campus" 
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://images.pexels.com/photos/5212696/pexels-photo-5212696.jpeg" 
                  alt="Classroom session" 
                  className="w-full h-64 object-cover rounded-lg shadow-md transform -translate-y-8"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Student Success Stories
            </h2>
            <p className="text-gray-600">
              See how our teaching approach and guidance have helped students achieve their goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                exam: 'UPSC CSE 2023',
                rank: 'AIR 45',
                image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg',
                quote: 'The structured approach and personal guidance from Khan Sir helped me crack the UPSC exam. The current affairs sessions were particularly helpful.'
              },
              {
                name: 'Rajesh Kumar',
                exam: 'SSC CGL 2023',
                rank: 'AIR 12',
                image: 'https://images.pexels.com/photos/5905905/pexels-photo-5905905.jpeg',
                quote: 'KGS provided comprehensive study material and regular mock tests which were crucial for my preparation. The faculty\'s support was exceptional.'
              },
              {
                name: 'Anjali Patel',
                exam: 'Banking PO 2023',
                rank: 'AIR 28',
                image: 'https://images.pexels.com/photos/5212687/pexels-photo-5212687.jpeg',
                quote: 'The specialized banking course at KGS covered all aspects of the exam. The tips and tricks shared by Khan Sir made solving complex problems easier.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.exam}</p>
                    <p className="text-sm font-bold text-blue-600">Rank: {testimonial.rank}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;