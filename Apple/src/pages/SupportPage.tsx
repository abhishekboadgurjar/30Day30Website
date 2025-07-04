import React from "react";
import { HelpCircle, MessageCircle, Phone, Video } from "lucide-react";

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      name: "Apple Support App",
      tagline: "Get help for all your Apple products",
      image:
        "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
      link: "Download now",
    },
    {
      name: "AppleCare+",
      tagline: "Comprehensive protection for your Apple devices",
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      link: "Learn more",
    },
    {
      name: "Apple Repair",
      tagline: "Fast and reliable repair options",
      image:
        "https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg",
      link: "Start a repair",
    },
  ];

  const contactOptions = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Chat",
      description: "Connect with a support expert",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call",
      description: "Speak with a support specialist",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video",
      description: "Show us your issue via video call",
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Support articles",
      description: "Find answers to common questions",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Apple Support</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We're here to help you get the most out of your Apple products.
          </p>

          <div className="bg-gray-100 rounded-2xl p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Search for help</h2>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter a product, issue, or question..."
                className="flex-grow p-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-6 rounded-r-lg hover:bg-blue-600 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Support options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={option.image}
                    alt={option.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{option.name}</h2>
                  <p className="text-gray-600 mb-4">{option.tagline}</p>
                  <a href="#" className="text-blue-500 hover:underline">
                    {option.link} {">"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Contact Apple Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactOptions.map((option, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-blue-500">
                  {option.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
                <a
                  href="#"
                  className="block mt-4 text-blue-500 hover:underline"
                >
                  Get started {">"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular topics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Popular topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "iPhone support",
              "Mac support",
              "iPad support",
              "Watch support",
              "AirPods support",
              "Repairs & service",
            ].map((topic, index) => (
              <a
                key={index}
                href="#"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex items-center justify-between"
              >
                <span className="font-medium">{topic}</span>
                <span className="text-blue-500">{`>`}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
