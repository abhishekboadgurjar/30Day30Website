import React from 'react';
import { Award, Camera, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Camera, label: 'Sessions', value: '500+' },
    { icon: Heart, label: 'Happy Clients', value: '200+' },
    { icon: Award, label: 'Awards', value: '15+' },
    { icon: Users, label: 'Years Experience', value: '8+' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              About <span className="text-amber-500 font-medium">Sarah</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                For over eight years, I've been passionate about capturing the authentic emotions and 
                intimate moments that make each story unique. My approach combines artistic vision with 
                documentary-style storytelling.
              </p>
              <p>
                Based in San Francisco, I specialize in weddings, portraits, and commercial photography. 
                Every session is tailored to reflect your personality and style, ensuring timeless images 
                that you'll treasure forever.
              </p>
              <p>
                When I'm not behind the camera, you'll find me exploring new coffee shops, hiking Bay Area 
                trails, or planning my next travel photography adventure.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                  <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sarah Chen - Photographer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-black p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">Professional</div>
              <div className="text-sm">Photographer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;