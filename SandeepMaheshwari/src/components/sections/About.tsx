import React from 'react';
import { Calendar, Users, Youtube, MapPin } from 'lucide-react';
import { achievements } from '../../data/siteData';
import CountUp from '../ui/CountUp';

const About: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="h-8 w-8 text-blue-500" />;
      case 'Users':
        return <Users className="h-8 w-8 text-blue-500" />;
      case 'Youtube':
        return <Youtube className="h-8 w-8 text-blue-500" />;
      case 'MapPin':
        return <MapPin className="h-8 w-8 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Sandeep Maheshwari</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From a struggling photographer to a renowned motivational speaker and successful entrepreneur,
            Sandeep's journey is a testament to resilience, vision, and the power of positive thinking.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
            <img 
              src="https://images.pexels.com/photos/3201478/pexels-photo-3201478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Sandeep Maheshwari Speaking"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6">
              Sandeep Maheshwari is a name among millions who struggled, failed and surged ahead in search of success,
              happiness and contentment. Just like any middle class guy, he too had a bunch of unclear dreams and a
              blurred vision of his goals in life.
            </p>
            <p className="text-gray-600 mb-6">
              All he had was an undying learning attitude to hold on to. Rowing through ups and downs, it was time that
              taught him the true meaning of his life. He started as a photographer, failed, and then restarted as an
              entrepreneur - founding ImagesBazaar, which is now world's largest collection of Indian images.
            </p>
            <p className="text-gray-600">
              Today he inspires millions through his seminars, videos and sessions, helping them find purpose and direction
              in their lives, rekindling the lost passion and awakening the hidden potential within.
            </p>
          </div>
        </div>
        
        {/* Mission & Values */}
        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Mission & Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Inspire</h4>
              <p className="text-gray-600">
                To inspire and ignite the spark of potential excellence that lies within every individual, helping them
                realize their true capabilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Empower</h4>
              <p className="text-gray-600">
                To empower people with practical knowledge, tools and wisdom that helps them overcome challenges and
                achieve personal and professional success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Transform</h4>
              <p className="text-gray-600">
                To facilitate transformation in people's lives by helping them break free from limiting beliefs and
                adopt a positive, growth-oriented mindset.
              </p>
            </div>
          </div>
        </div>
        
        {/* Achievements Counter */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id} 
                className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl border-t-4 border-blue-500"
              >
                <div className="flex justify-center mb-4">
                  {renderIcon(achievement.icon)}
                </div>
                <h4 className="text-3xl font-bold text-gray-800 mb-2">
                  <CountUp end={achievement.count} />+
                </h4>
                <p className="text-gray-600">{achievement.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;