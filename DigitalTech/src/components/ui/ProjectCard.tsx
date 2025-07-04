import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
  delay: number;
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  imageUrl,
  link,
  delay,
  isVisible
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative overflow-hidden rounded-xl shadow-md bg-white transition-all duration-500 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70`}></div>
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 mb-4 line-clamp-2">{description}</p>
        
        <a
          href={link}
          className="inline-flex items-center text-sky-600 font-medium hover:text-sky-700 transition-colors"
        >
          View Project <ArrowUpRight size={16} className="ml-1" />
        </a>
      </div>
      
      <div 
        className={`absolute inset-0 bg-gradient-to-tr from-indigo-600/90 to-sky-500/90 flex items-center justify-center p-6 transition-all duration-500 ${
          isHovered ? 'opacity-95' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-white/90 mb-6">{description}</p>
          <a
            href={link}
            className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white font-medium transition-colors"
          >
            View Details <ArrowUpRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;