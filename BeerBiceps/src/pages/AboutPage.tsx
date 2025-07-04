import React from 'react';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';
import { MessageCircle, Award, Users, Youtube, Star, BarChart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Ranveer Allahbadia</h1>
          <p className="text-xl text-gray-600">
            Entrepreneur, Content Creator, and Host of The Ranveer Show
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQC1d2wfuB4CkzP6rwvXMqW6ZUrjnncP8K2jeRjdxoKEaXMac5LAN5QEF0Cl7LUIveY0JL5HtW98gWZzip6q86G6Q"
              alt="Ranveer Allahbadia"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">The Journey</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Ranveer Allahbadia, known as BeerBiceps to millions of followers, is an entrepreneur, podcaster, and one of India's leading content creators. With a background in engineering from DJ Sanghvi College of Engineering, Ranveer pivoted to pursue his passion for health, fitness, and personal development.
              </p>
              <p>
                What started as fitness advice on YouTube evolved into a multifaceted media company that produces content across various platforms including podcasts, YouTube channels, and social media profiles. His flagship podcast, "The Ranveer Show," has become one of India's most popular podcasts, featuring conversations with thought leaders, celebrities, entrepreneurs, and experts.
              </p>
              <p>
                Beyond content creation, Ranveer is the co-founder of Monk Entertainment, a talent management and influencer marketing company. His entrepreneurial ventures span across digital media, fitness, and lifestyle sectors.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <MessageCircle className="text-primary mb-2" size={24} />
                <h4 className="font-semibold text-lg">Content Creator</h4>
                <p className="text-gray-600 text-sm">Multi-platform presence with millions of followers</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <Award className="text-primary mb-2" size={24} />
                <h4 className="font-semibold text-lg">Award Winner</h4>
                <p className="text-gray-600 text-sm">Recognized for excellence in digital content</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <Users className="text-primary mb-2" size={24} />
                <h4 className="font-semibold text-lg">Entrepreneur</h4>
                <p className="text-gray-600 text-sm">Co-founder of Monk Entertainment</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <Youtube className="text-primary mb-2" size={24} />
                <h4 className="font-semibold text-lg">Podcaster</h4>
                <p className="text-gray-600 text-sm">Host of The Ranveer Show</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">The Podcast</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              "The Ranveer Show" is a long-form podcast that features in-depth conversations with remarkable individuals from various walks of life. The show explores themes of personal growth, entrepreneurship, wellness, spirituality, and current affairs.
            </p>
            <p className="text-gray-700 mb-6">
              What sets the podcast apart is Ranveer's authentic approach to interviewing. He creates a comfortable environment for guests to share their stories, insights, and even vulnerabilities. The conversations go beyond surface-level discussions to explore the mindsets, habits, and philosophies that have shaped his guests' journeys.
            </p>
            <p className="text-gray-700">
              With over 500 episodes and counting, the podcast has featured notable guests including international thought leaders, Bollywood celebrities, successful entrepreneurs, spiritual gurus, and experts in various fields. Each episode aims to extract valuable lessons and insights that listeners can apply to their own lives.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-2">
                  <Star size={20} />
                </div>
                <h4 className="font-semibold">Top-Rated</h4>
                <p className="text-sm text-gray-600">Across platforms</p>
              </div>
              
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-2">
                  <Users size={20} />
                </div>
                <h4 className="font-semibold">500+</h4>
                <p className="text-sm text-gray-600">Episodes</p>
              </div>
              
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-2">
                  <BarChart size={20} />
                </div>
                <h4 className="font-semibold">Millions</h4>
                <p className="text-sm text-gray-600">Of listeners</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Podcast Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Authentic Conversations</h3>
              <p className="text-gray-700">
                Real discussions that go beyond surface-level topics to explore deeper insights and personal experiences.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Actionable Insights</h3>
              <p className="text-gray-700">
                Practical advice and strategies that listeners can implement to improve various aspects of their lives.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Diverse Perspectives</h3>
              <p className="text-gray-700">
                A platform that welcomes voices from different industries, backgrounds, and viewpoints to broaden horizons.
              </p>
            </div>
          </div>
        </div>

        <Testimonials />
      </div>
      
      <Newsletter />
    </div>
  );
};

export default AboutPage;