import React from 'react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=300',
      likes: 234,
      comments: 12
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300',
      likes: 189,
      comments: 8
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=300',
      likes: 156,
      comments: 15
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=300',
      likes: 298,
      comments: 22
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Get inspired by our latest looks, behind-the-scenes content, and customer transformations. 
            Join our beauty community!
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            <Instagram className="h-5 w-5 mr-2" />
            @luxebeauty
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center">
                      <Heart className="h-5 w-5 mr-1" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-5 w-5 mr-1" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};