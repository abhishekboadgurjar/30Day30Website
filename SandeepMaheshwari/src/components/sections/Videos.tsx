import React, { useState } from 'react';
import { videos } from '../../data/siteData';
import { Play } from 'lucide-react';

const Videos: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const categories = ['All', ...Array.from(new Set(videos.map(video => video.category)))];
  
  const filteredVideos = filter === 'All' 
    ? videos 
    : videos.filter(video => video.category === filter);

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Inspirational Videos</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore a collection of motivational videos that have inspired millions around the world.
            Find wisdom, practical advice, and life-changing insights.
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-blue-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div 
              key={video.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div 
                className="relative h-52 cursor-pointer group"
                onClick={() => openVideoModal(video.videoUrl)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-blue-600 bg-opacity-80 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-blue-600 mb-2 inline-block">
                  {video.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{video.title}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(video.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white font-medium px-6 py-3 border border-blue-600 hover:border-transparent rounded-full transition-colors duration-300">
            View More Videos
          </button>
        </div>
      </div>
      
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={closeVideoModal}>
          <div className="relative w-full max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white hover:text-blue-400" onClick={closeVideoModal}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={`${selectedVideo.replace('watch?v=', 'embed/')}?autoplay=1`}
                title="Video Player"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Videos;