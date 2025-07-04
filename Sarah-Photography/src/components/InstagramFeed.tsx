import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';

const InstagramFeed: React.FC = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 245,
      caption: "Golden hour magic ✨ #weddingphotography"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 189,
      caption: "Corporate headshots that tell a story 📸"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 312,
      caption: "Garden wedding vibes 🌿 #love"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 156,
      caption: "Behind the scenes at corporate event"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 203,
      caption: "Fashion editorial shoot 📷 #portrait"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 178,
      caption: "Product photography session ⌚"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Instagram className="h-8 w-8 text-pink-500" />
            <h2 className="text-4xl font-light text-gray-900">
              Follow My <span className="text-pink-500 font-medium">Journey</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Stay updated with my latest work and behind-the-scenes moments
          </p>
          <a 
            href="https://instagram.com/sarahchenphotography" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Instagram className="h-5 w-5" />
            @sarahchenphotography
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div key={post.id} className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer">
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <p className="text-xs leading-relaxed">{post.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Want to see more? Follow me on Instagram for daily inspiration and sneak peeks!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;