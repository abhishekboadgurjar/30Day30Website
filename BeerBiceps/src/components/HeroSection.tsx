import React from 'react';
import { Play, Clock, Youtube, AlignJustify as Spotify } from 'lucide-react';
import { Episode } from '../types';

interface HeroSectionProps {
  featuredEpisode: Episode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ featuredEpisode }) => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={featuredEpisode.image}
          alt={featuredEpisode.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-primary block mb-3">Latest Episode</span>
              {featuredEpisode.title}
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              {featuredEpisode.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center text-sm text-gray-300">
                <Clock size={16} className="mr-2" />
                <span>{featuredEpisode.duration}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {featuredEpisode.categories.map((category, index) => (
                  <span
                    key={index}
                    className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={featuredEpisode.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 transform hover:-translate-y-1"
              >
                <Youtube size={20} className="mr-2" />
                Watch on YouTube
              </a>
              <a
                href={featuredEpisode.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 transform hover:-translate-y-1"
              >
                <Spotify size={20} className="mr-2" />
                Listen on Spotify
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <img
                src={featuredEpisode.image}
                alt={featuredEpisode.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href={featuredEpisode.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 flex items-center justify-center bg-white/90 hover:bg-white text-primary rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <Play size={32} fill="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;