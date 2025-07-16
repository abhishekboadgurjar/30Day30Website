"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Loader as Road, Grid as Bridge, Construction, Hammer, Ruler, Truck } from 'lucide-react'

const services = [
  {
    icon: <Road className="h-8 w-8" />,
    title: 'Highway Construction',
    description: 'Comprehensive highway planning, design, and construction using cutting-edge technologies and materials for durable, high-performance roadways.',
    imageSrc: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg'
  },
  {
    icon: <Bridge className="h-8 w-8" />,
    title: 'Bridge Development',
    description: 'Design and construction of safe, efficient bridges that connect communities and enhance transportation networks.',
    imageSrc: 'https://images.pexels.com/photos/358388/pexels-photo-358388.jpeg'
  },
  {
    icon: <Construction className="h-8 w-8" />,
    title: 'Road Maintenance',
    description: 'Preventative and corrective maintenance services that extend the life of existing roadways and ensure traveler safety.',
    imageSrc: 'https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg'
  },
  {
    icon: <Hammer className="h-8 w-8" />,
    title: 'Asphalt Paving',
    description: 'Premium asphalt paving services utilizing innovative materials and techniques for smoother, longer-lasting surfaces.',
    imageSrc: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg'
  },
  {
    icon: <Ruler className="h-8 w-8" />,
    title: 'Concrete Structures',
    description: 'Design and implementation of durable concrete structures for various infrastructure projects with precision engineering.',
    imageSrc: 'https://images.pexels.com/photos/1451454/pexels-photo-1451454.jpeg'
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'Infrastructure Development',
    description: 'Integrated solutions for urban and rural infrastructure development that prioritize sustainability and community needs.',
    imageSrc: 'https://images.pexels.com/photos/3775032/pexels-photo-3775032.jpeg'
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

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
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
            Our Services
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={1}
          >
            Comprehensive Road Construction Solutions
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
            We offer a complete range of road construction and infrastructure development services, 
            leveraging our expertise and state-of-the-art equipment to deliver exceptional results.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={index + 4}
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4 text-yellow-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="link" className="p-0 text-yellow-500 hover:text-yellow-600 font-medium">
                  Learn more &rarr;
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          custom={10}
        >
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8">
            Request Service
          </Button>
        </motion.div>
      </div>
    </section>
  )
}