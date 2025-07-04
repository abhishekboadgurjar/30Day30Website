import React, { useState } from 'react';
import { Check, MoveRight } from 'lucide-react';

const cities = [
  { name: "Mumbai", date: "June 15-16, 2025", status: "Open" },
  { name: "Delhi", date: "June 22-23, 2025", status: "Open" },
  { name: "Kolkata", date: "June 29-30, 2025", status: "Open" },
  { name: "Chennai", date: "July 6-7, 2025", status: "Open" },
  { name: "Bangalore", date: "July 13-14, 2025", status: "Open" },
  { name: "Hyderabad", date: "July 20-21, 2025", status: "Open" },
  { name: "Pune", date: "July 27-28, 2025", status: "Coming Soon" },
  { name: "Ahmedabad", date: "August 3-4, 2025", status: "Coming Soon" }
];

const AuditionSection = () => {
  const [activeTab, setActiveTab] = useState<'cities' | 'online'>('cities');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    talent: '',
    experience: '',
    video: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      talent: '',
      experience: '',
      video: ''
    });
    
    // Show success message (in a real app)
  };
  
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative" id="auditions">
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative">
              Show Us Your Talent
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-yellow-400"></span>
            </h2>
            <p className="text-gray-400 mx-auto">Ready to be discovered or laughed at? We're looking for all kinds of talents - from the extraordinary to the questionably entertaining. Apply now!</p>
          </div>
          
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/5">
            <div className="flex border-b border-gray-800">
              <button 
                className={`flex-1 py-4 text-center font-medium transition-colors duration-300 ${
                  activeTab === 'cities' 
                    ? 'bg-yellow-400 text-black' 
                    : 'bg-transparent text-white hover:bg-gray-800'
                }`}
                onClick={() => setActiveTab('cities')}
              >
                City Auditions
              </button>
              <button 
                className={`flex-1 py-4 text-center font-medium transition-colors duration-300 ${
                  activeTab === 'online' 
                    ? 'bg-yellow-400 text-black' 
                    : 'bg-transparent text-white hover:bg-gray-800'
                }`}
                onClick={() => setActiveTab('online')}
              >
                Online Submission
              </button>
            </div>
            
            <div className="p-6 md:p-8">
              {activeTab === 'cities' ? (
                <div className="animate-fade-in">
                  <p className="text-gray-300 mb-6">Join us in person at one of our audition locations across India. Registration is free and open to all Indian citizens aged 16 and above.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cities.map(city => (
                      <div key={city.name} className="bg-gray-800 rounded-lg p-5 transition-all duration-300 hover:bg-gray-700 hover:shadow-md">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-white font-bold text-lg">{city.name}</h3>
                            <p className="text-gray-400 text-sm mt-1">{city.date}</p>
                          </div>
                          <div>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              city.status === 'Open' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-gray-500/20 text-gray-400'
                            }`}>
                              {city.status}
                            </span>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          {city.status === 'Open' ? (
                            <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-2 rounded-lg font-medium transition-colors duration-300">
                              Register
                            </button>
                          ) : (
                            <button className="w-full bg-gray-700 text-gray-300 py-2 rounded-lg font-medium cursor-not-allowed opacity-70">
                              Coming Soon
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <p className="text-gray-300 mb-6">Can't make it to a live audition? Submit your talent online and our judges will review your application.</p>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">Full Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">Email Address</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-gray-300 mb-2 text-sm">Phone Number</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          placeholder="+91 12345 67890"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="talent" className="block text-gray-300 mb-2 text-sm">Talent Category</label>
                        <select
                          id="talent"
                          name="talent"
                          value={formData.talent}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          required
                        >
                          <option value="">Select your talent</option>
                          <option value="singing">Singing</option>
                          <option value="dancing">Dancing</option>
                          <option value="comedy">Comedy</option>
                          <option value="magic">Magic</option>
                          <option value="acrobatics">Acrobatics</option>
                          <option value="unique">Something Unique</option>
                        </select>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="experience" className="block text-gray-300 mb-2 text-sm">Experience Level</label>
                        <input
                          id="experience"
                          name="experience"
                          type="text"
                          value={formData.experience}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          placeholder="Brief description of your experience"
                          required
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="video" className="block text-gray-300 mb-2 text-sm">Video URL (YouTube, Vimeo, etc.)</label>
                        <input
                          id="video"
                          name="video"
                          type="url"
                          value={formData.video}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          placeholder="https://youtube.com/your-video-url"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <button 
                        type="submit"
                        className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-4 rounded-lg font-bold text-lg transition-colors duration-300 flex items-center justify-center"
                      >
                        Submit Your Audition
                        <MoveRight size={20} className="ml-2" />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-12 bg-gray-900/70 rounded-xl p-6 border border-gray-800">
            <h3 className="text-white font-bold text-xl mb-4">Why Audition for India's Got Latent?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Chance to win ₹1 Crore grand prize",
                "Nationwide TV exposure",
                "Career-launching opportunity",
                "Mentorship from industry experts",
                "Join our community of talented performers",
                "Guaranteed fun, regardless of outcome"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-yellow-400 mr-3">
                    <Check size={18} />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditionSection;