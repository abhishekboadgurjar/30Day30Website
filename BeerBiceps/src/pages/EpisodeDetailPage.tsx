import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, Youtube, AlignJustify as Spotify, ChevronLeft, Share2 } from 'lucide-react';
import { getEpisodeById, episodes } from '../data/episodes';

const EpisodeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const episode = getEpisodeById(id || '');
  
  // Redirect if episode not found
  useEffect(() => {
    if (!episode) {
      window.location.href = '/episodes';
    }
  }, [episode]);

  if (!episode) {
    return <div className="pt-24 text-center">Episode not found</div>;
  }

  const relatedEpisodes = episodes
    .filter(ep => 
      ep.id !== episode.id && 
      ep.categories.some(cat => episode.categories.includes(cat))
    )
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to="/episodes" className="inline-flex items-center text-gray-600 hover:text-primary transition-colors">
            <ChevronLeft size={18} className="mr-1" />
            Back to Episodes
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Main Content */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={episode.image} 
                alt={episode.title} 
                className="w-full h-64 md:h-96 object-cover" 
              />
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {episode.categories.map((category, index) => (
                    <Link 
                      key={index}
                      to={`/episodes?category=${category}`}
                      className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
                
                <h1 className="text-3xl font-bold mb-4 text-gray-900">{episode.title}</h1>
                
                <div className="flex flex-wrap items-center text-gray-600 mb-6 gap-4">
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-2" />
                    <span>{formatDate(episode.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2" />
                    <span>{episode.duration}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <a
                    href={episode.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md inline-flex items-center transition-all duration-300"
                  >
                    <Youtube size={18} className="mr-2" />
                    Watch on YouTube
                  </a>
                  <a
                    href={episode.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md inline-flex items-center transition-all duration-300"
                  >
                    <Spotify size={18} className="mr-2" />
                    Listen on Spotify
                  </a>
                  <button 
                    className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-md inline-flex items-center transition-all duration-300"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    }}
                  >
                    <Share2 size={18} className="mr-2" />
                    Share
                  </button>
                </div>
                
                <div className="prose max-w-none">
                  <h2 className="text-xl font-semibold mb-3">Episode Description</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {episode.description}
                    {/* Extended description - in a real app, this would come from the database */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  
                  <h2 className="text-xl font-semibold mb-3">Show Notes</h2>
                  <ul className="list-disc pl-5 mb-8 space-y-2 text-gray-700">
                    <li>Introduction to the episode topic and guest background</li>
                    <li>Key insights from the conversation about mindfulness techniques</li>
                    <li>Discussion about the latest research in the field</li>
                    <li>Practical tips that listeners can apply in their daily lives</li>
                    <li>Book recommendations and resources mentioned during the episode</li>
                  </ul>
                  
                  <h2 className="text-xl font-semibold mb-3">Timestamps</h2>
                  <div className="space-y-3 mb-8">
                    <div className="flex">
                      <span className="font-medium text-primary inline-block w-16">00:00</span>
                      <span className="text-gray-700">Introduction and welcome</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium text-primary inline-block w-16">04:28</span>
                      <span className="text-gray-700">Guest introduction and background</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium text-primary inline-block w-16">12:15</span>
                      <span className="text-gray-700">Main discussion begins</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium text-primary inline-block w-16">36:42</span>
                      <span className="text-gray-700">Q&A with audience questions</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium text-primary inline-block w-16">57:18</span>
                      <span className="text-gray-700">Lightning round and final thoughts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Player - in a real implementation this would be an embedded iframe */}
            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Listen to this Episode</h3>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">
                  Embedded player would appear here (YouTube/Spotify iframe)
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            {/* Sidebar */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Related Episodes</h3>
              <div className="space-y-4">
                {relatedEpisodes.map(relEpisode => (
                  <Link 
                    key={relEpisode.id} 
                    to={`/episode/${relEpisode.id}`}
                    className="flex items-start hover:bg-gray-50 p-2 rounded-md transition-colors"
                  >
                    <img 
                      src={relEpisode.image} 
                      alt={relEpisode.title} 
                      className="w-20 h-20 object-cover rounded-md mr-3" 
                    />
                    <div>
                      <h4 className="font-medium line-clamp-2 text-gray-900">{relEpisode.title}</h4>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Clock size={12} className="mr-1" />
                        <span>{relEpisode.duration}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h3>
              <p className="text-gray-600 mb-4">Get notified about new episodes and exclusive content.</p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetailPage;