import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User } from 'lucide-react';

const Booking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    location: '',
    message: ''
  });

  const availableTimes = [
    '9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM', '7:00 PM'
  ];

  const packages = ['Essential - $1,200', 'Premium - $2,500', 'Luxury - $4,200', 'Custom Quote'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the booking request
    alert('Booking request submitted! I\'ll get back to you within 24 hours.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Book Your <span className="text-amber-500 font-medium">Session</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to create something beautiful together? Let's plan your perfect session.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Booking Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline h-4 w-4 mr-1" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Package
                  </label>
                  <select
                    name="package"
                    required
                    value={formData.package}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="">Select a package</option>
                    {packages.map((pkg, index) => (
                      <option key={index} value={pkg}>{pkg}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Preferred Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="">Select time</option>
                    {availableTimes.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Session Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Where would you like to shoot?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell me about your vision
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Share details about your session, special requests, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-black py-4 px-6 rounded-lg font-medium hover:bg-amber-400 transition-colors"
              >
                Send Booking Request
              </button>
            </form>
          </div>

          {/* Info & Availability */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Booking Information</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• 50% deposit required to secure your date</li>
                <li>• Remaining balance due 48 hours before session</li>
                <li>• Rescheduling allowed up to 7 days before</li>
                <li>• Weather-dependent outdoor shoots can be rescheduled</li>
                <li>• Gallery delivery within 2-3 weeks</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Pre-session consultation call</li>
                <li>• Location scouting & timeline planning</li>
                <li>• Professional editing & retouching</li>
                <li>• High-resolution digital gallery</li>
                <li>• Print release for personal use</li>
              </ul>
            </div>

            <div className="text-center p-6 border-2 border-dashed border-gray-200 rounded-lg">
              <p className="text-gray-600 mb-2">Prefer to chat first?</p>
              <p className="font-medium text-gray-900">Call: (415) 555-0123</p>
              <p className="text-sm text-gray-500">Available Mon-Fri, 9am-6pm PST</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;