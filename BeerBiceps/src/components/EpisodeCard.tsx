import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock } from 'lucide-react';
import { Episode } from '../types';

interface EpisodeCardProps {
  episode: Episode;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={episode.image}
          alt={episode.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {episode.featured && (
          <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            Featured
          </div>
        )}
        <Link
          to={`/episode/${episode.id}`}
          className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/60 transition-opacity duration-300"
        >
          <span className="w-16 h-16 flex items-center justify-center bg-primary text-white rounded-full transform hover:scale-110 transition-transform duration-300">
            <Play size={24} fill="currentColor" />
          </span>
        </Link>
      </div>
      <div className="p-5">
        <div className="flex items-center text-xs text-gray-500 mb-3">
          <span>{new Date(episode.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}</span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Clock size={14} className="mr-1" />
            {episode.duration}
          </span>
        </div>
        <h3 className="font-bold text-lg mb-3 text-gray-900 line-clamp-2 hover:text-primary transition-colors">
          <Link to={`/episode/${episode.id}`}>
            {episode.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {episode.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {episode.categories.map((category, index) => (
            <Link
              key={index}
              to={`/episodes?category=${category}`}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs transition-colors duration-200"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;