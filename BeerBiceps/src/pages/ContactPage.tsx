import React from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have questions, feedback, or want to be a guest on the podcast? Reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
              <Mail size={20} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-700">contact@beerbiceps.com</p>
            <p className="text-gray-700">business@beerbiceps.com</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
              <Phone size={20} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">+91 1234567890</p>
            <p className="text-gray-700">(Business Hours: 10AM - 6PM)</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
              <MapPin size={20} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-700">Monk Entertainment Pvt. Ltd.</p>
            <p className="text-gray-700">Mumbai, Maharashtra, India</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
              <p className="text-gray-700 mb-6">
                Fill out the form and our team will get back to you within 24-48 hours.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-3 flex items-center">
                  <MessageCircle size={18} className="text-primary mr-2" />
                  Be a Guest on the Podcast
                </h3>
                <p className="text-gray-700 text-sm">
                  Interested in sharing your story on The Ranveer Show? Include the subject "Guest Application" and tell us about yourself, your expertise, and what value you can provide to our listeners.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center">
                  <MessageCircle size={18} className="text-primary mr-2" />
                  Business Inquiries
                </h3>
                <p className="text-gray-700 text-sm">
                  For sponsorships, collaborations, or speaking engagements, please include "Business Inquiry" in the subject line with details of your proposal.
                </p>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Connect on Social Media</h2>
          <p className="text-gray-700 mb-8">
            Follow Ranveer and the podcast on social media for updates, behind-the-scenes content, and more.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a
              href="https://www.youtube.com/@BeerBiceps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <span className="font-medium">YouTube</span>
            </a>
            
            <a
              href="https://www.instagram.com/beerbiceps/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-pink-50 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </div>
              <span className="font-medium">Instagram</span>
            </a>
            
            <a
              href="https://open.spotify.com/show/6rrhlLnCjwNBEqRBsJqXwU"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </div>
              <span className="font-medium">Spotify</span>
            </a>
            
            <a
              href="https://twitter.com/RanveerAllahbad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </div>
              <span className="font-medium">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;