import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-md bg-yellow-500 flex items-center justify-center">
                <span className="font-montserrat font-bold text-xl text-black">K</span>
              </div>
              <span className="ml-3 font-montserrat font-bold text-xl">KCC</span>
            </div>
            <p className="mt-2 text-sm text-gray-300 max-w-xs">
              Karada Construction Company specializes in premium road construction and infrastructure development with a commitment to quality and sustainability.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-medium">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {['About Us', 'Services', 'Projects', 'Team', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-yellow-400 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium">Our Services</h3>
            <ul className="mt-4 space-y-2">
              {[
                'Highway Construction', 
                'Road Maintenance', 
                'Bridge Construction', 
                'Asphalt Paving', 
                'Concrete Structures', 
                'Infrastructure Development'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href="#services"
                    className="text-gray-300 hover:text-yellow-400 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  123 Construction Avenue, Building District, Tokyo, Japan
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-sm text-gray-300">+81 3-1234-5678</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-sm text-gray-300">info@karadaconstruction.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Karada Construction Company. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="text-xs text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link href="#" className="text-xs text-gray-400 hover:text-white">Terms of Service</Link>
            <Link href="#" className="text-xs text-gray-400 hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}