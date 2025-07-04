import React from 'react';
import { seminars } from '../../data/siteData';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Seminars: React.FC = () => {
  // Function to calculate days remaining
  const getDaysRemaining = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <section id="seminars" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Seminars</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join Sandeep Maheshwari at one of his transformative seminars. Experience the power
            of his teachings in person and connect with like-minded individuals.
          </p>
        </div>
        
        {/* Seminars List */}
        <div className="space-y-8">
          {seminars.map((seminar) => (
            <div 
              key={seminar.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100"
            >
              <div className="md:flex">
                {/* Left side with countdown */}
                <div className="bg-blue-600 text-white p-6 flex flex-col items-center justify-center md:w-64 text-center">
                  <div className="text-5xl font-bold mb-2">{getDaysRemaining(seminar.date)}</div>
                  <div className="text-blue-100">Days Remaining</div>
                  
                  <div className="mt-6 py-3 px-5 bg-white text-blue-600 rounded-full font-medium text-sm shadow-lg transform transition-transform hover:scale-105">
                    {new Date(seminar.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                </div>
                
                {/* Right side with details */}
                <div className="p-6 md:p-8 flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{seminar.title}</h3>
                  
                  <div className="flex flex-wrap gap-y-3 mb-4">
                    <div className="flex items-center text-gray-600 mr-6">
                      <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                      <span>
                        {new Date(seminar.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mr-6">
                      <Clock className="h-5 w-5 text-blue-500 mr-2" />
                      <span>{seminar.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                      <span>{seminar.venue}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{seminar.description}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={seminar.registrationLink} 
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                      Register Now
                    </a>
                    <button className="inline-block bg-transparent hover:bg-blue-50 text-blue-600 font-medium px-6 py-3 border border-blue-600 rounded-full transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Registration CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl overflow-hidden shadow-xl">
          <div className="md:flex items-center">
            <div className="md:w-2/3 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Want to Host a Seminar?</h3>
              <p className="text-blue-100 mb-6">
                Bring Sandeep Maheshwari to your city, college, or corporate event. 
                Fill out the form to inquire about booking options and availability.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Contact Us
              </a>
            </div>
            <div className="hidden md:block md:w-1/3 relative h-64">
              <img 
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Seminar Audience" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seminars;