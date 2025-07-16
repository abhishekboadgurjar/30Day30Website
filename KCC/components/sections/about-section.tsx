"use client"

import { motion } from 'framer-motion'
import { Check, Award, Clock, Users } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { id: 1, value: '25+', label: 'Years Experience' },
  { id: 2, value: '500+', label: 'Projects Completed' },
  { id: 3, value: '150+', label: 'Professional Team' },
  { id: 4, value: '98%', label: 'Client Satisfaction' },
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

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
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
            About Us
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={1}
          >
            The Leading Road Construction Company
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-yellow-500 mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={2}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={3}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
          >
            <Image 
              src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg" 
              alt="Karada Construction Team"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <div>
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={4}
            >
              Our Story Since 1998
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={5}
            >
              Karada Construction Company (KCC) was founded with a vision to transform Japan's infrastructure through innovative road construction techniques and unwavering commitment to quality. For over two decades, we have been at the forefront of the construction industry, delivering projects that connect communities and drive economic growth.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={6}
            >
              Today, KCC stands as a testament to excellence in road construction, bridge development, and infrastructure projects. Our experienced team combines traditional craftsmanship with cutting-edge technology to deliver sustainable solutions that stand the test of time.
            </motion.p>
            
            <motion.ul 
              className="space-y-3 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={7}
            >
              {[
                'Industry-leading quality standards',
                'Advanced construction technologies',
                'Environmental sustainability focus',
                'Comprehensive project management'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={index + 10}
            >
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Core values */}
        <div className="mt-20">
          <motion.h3 
            className="text-2xl font-bold text-center text-gray-900 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={14}
          >
            Our Core Values
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-10 w-10 text-yellow-500" />,
                title: 'Excellence',
                description: 'We pursue excellence in every project, from the smallest details to the grand vision. Quality is never compromised.'
              },
              {
                icon: <Clock className="h-10 w-10 text-yellow-500" />,
                title: 'Reliability',
                description: 'We deliver on our promises, completing projects on time and within budget while exceeding expectations.'
              },
              {
                icon: <Users className="h-10 w-10 text-yellow-500" />,
                title: 'Collaboration',
                description: 'We believe in building strong relationships with clients, partners, and communities to create lasting infrastructure.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                custom={index + 15}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}