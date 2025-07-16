"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Twitter, Mail } from 'lucide-react'

const team = [
  {
    name: 'Takeshi Yamada',
    role: 'CEO & Founder',
    bio: 'with over 30 years in construction, Takeshi founded KCC to revolutionize Japan\'s infrastructure industry.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#'
    }
  },
  {
    name: 'Haruka Ito',
    role: 'Chief Operations Officer',
    bio: 'Haruka oversees all project operations, ensuring timely delivery and exceptional quality across all sites.',
    image: 'https://images.pexels.com/photos/3812743/pexels-photo-3812743.jpeg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#'
    }
  },
  {
    name: 'Kenji Sato',
    role: 'Chief Engineer',
    bio: 'An innovator in road construction techniques, Kenji leads our technical development and engineering teams.',
    image: 'https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#'
    }
  },
  {
    name: 'Aiko Tanaka',
    role: 'Sustainability Director',
    bio: 'Aiko ensures all KCC projects incorporate sustainable practices and environmentally friendly materials.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#'
    }
  }
]

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5,
      delay: custom * 0.1,
    }
  })
}

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p 
            className="text-sm font-medium text-yellow-500 uppercase tracking-wider mb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={0}
          >
            Our Leadership
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={1}
          >
            Meet the Team Behind Karada Construction
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-yellow-500 mx-auto mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={2}
          />
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={3}
          >
            Our leadership team brings decades of combined experience in road construction,
            engineering, and project management to deliver exceptional results for our clients.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={index + 4}
            >
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors">
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a href={member.social.twitter} className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors">
                      <Twitter className="h-5 w-5 text-white" />
                    </a>
                    <a href={member.social.email} className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors">
                      <Mail className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-yellow-500 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          custom={8}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
          <p className="max-w-2xl mx-auto text-gray-600 mb-6">
            We're always looking for talented individuals who are passionate about construction
            and infrastructure development. Explore our current openings and become part of our story.
          </p>
          <a 
            href="#careers" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
          >
            View Career Opportunities
          </a>
        </motion.div>
      </div>
    </section>
  )
}