import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const links = [
    'Tesla © 2025',
    'Privacy & Legal',
    'Vehicle Recalls',
    'Contact',
    'News',
    'Get Updates',
    'Locations',
  ];

  const socialLinks = [
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Github, href: '#' },
    { icon: Youtube, href: '#' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          <motion.div variants={item}>
            <h3 className="text-lg font-medium mb-4">Tesla</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tesla's mission is to accelerate the world's transition to sustainable energy.
            </p>
          </motion.div>
          
          <motion.div variants={item}>
            <h3 className="text-lg font-medium mb-4">Vehicles</h3>
            <ul className="space-y-2">
              {['Model S', 'Model 3', 'Model X', 'Model Y', 'Cybertruck'].map(model => (
                <li key={model}>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href={`#${model.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {model}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-medium mb-4">Energy</h3>
            <ul className="space-y-2">
              {['Solar Panels', 'Solar Roof', 'Powerwall', 'Megapack'].map(product => (
                <li key={product}>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href={`#${product.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {product}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Careers', 'Investors', 'Find Us'].map(item => (
                <li key={item}>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800"
        >
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -2, color: '#e82127' }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            {links.map((link, index) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ color: '#fff' }}
                className="hover:text-white transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
          <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          Designed and Developed by{' '}
          <a 
            href="https://www.boadtechnologies.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white underline hover:text-red-500 transition-colors"
          >
            BOAD Technologies
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;