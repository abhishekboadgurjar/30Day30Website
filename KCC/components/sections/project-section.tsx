"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar, MapPin } from 'lucide-react'

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'highways', label: 'Highways' },
  { id: 'bridges', label: 'Bridges' },
  { id: 'urban', label: 'Urban Roads' },
  { id: 'commercial', label: 'Commercial' },
]

const projects = [
  {
    id: 1,
    title: 'Tokyo Bay Highway Extension',
    category: 'highways',
    location: 'Tokyo Bay Area',
    date: 'Completed in 2023',
    description: 'A 15-kilometer extension of the existing highway system, featuring innovative drainage systems and eco-friendly materials.',
    image: 'https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg'
  },
  {
    id: 2,
    title: 'Osaka River Bridge',
    category: 'bridges',
    location: 'Osaka Prefecture',
    date: 'Completed in 2022',
    description: 'An award-winning cable-stayed bridge designed to withstand seismic activity while providing a critical transportation link.',
    image: 'https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg'
  },
  {
    id: 3,
    title: 'Kyoto Central Boulevard',
    category: 'urban',
    location: 'Kyoto City Center',
    date: 'Completed in 2023',
    description: 'Urban road redevelopment project with pedestrian-friendly features and smart traffic management systems.',
    image: 'https://images.pexels.com/photos/351059/pexels-photo-351059.jpeg'
  },
  {
    id: 4,
    title: 'Nagoya Industrial Park Access Road',
    category: 'commercial',
    location: 'Nagoya Prefecture',
    date: 'Completed in 2021',
    description: 'High-capacity roadway designed for heavy industrial traffic with enhanced durability and safety features.',
    image: 'https://images.pexels.com/photos/2553973/pexels-photo-2553973.jpeg'
  },
  {
    id: 5,
    title: 'Hokkaido Mountain Pass',
    category: 'highways',
    location: 'Northern Hokkaido',
    date: 'Completed in 2022',
    description: 'All-weather highway through challenging mountain terrain, featuring heated road surfaces for winter conditions.',
    image: 'https://images.pexels.com/photos/730426/pexels-photo-730426.jpeg'
  },
  {
    id: 6,
    title: 'Yokohama Harbor Bridge',
    category: 'bridges',
    location: 'Yokohama Port',
    date: 'Completed in 2020',
    description: 'Innovative suspension bridge connecting the port to the main transportation network with dedicated shipping lanes.',
    image: 'https://images.pexels.com/photos/1703314/pexels-photo-1703314.jpeg'
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

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)
  
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
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
            Our Portfolio
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={1}
          >
            Featured Projects
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
            Explore our completed projects that showcase our expertise and commitment to quality.
            Each project represents our dedication to excellence in road construction.
          </motion.p>
        </div>
        
        <motion.div 
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          custom={4}
        >
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full bg-gray-100 p-1 rounded-lg">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={index + 5}
            >
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">
                    {categories.find(cat => cat.id === project.category)?.label}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{project.location}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{project.date}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <Button variant="link" className="p-0 text-yellow-500 hover:text-yellow-600 font-medium">
                  View project details &rarr;
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
          custom={12}
        >
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-8">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}