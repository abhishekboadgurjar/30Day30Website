"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

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

export default function CTASection() {
  return (
    <section className="bg-yellow-500 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Build Your Next Construction Project?
            </h2>
            <p className="text-gray-800 text-lg mb-0">
              Partner with Karada Construction Company for excellence, innovation, and reliability in all your road construction needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={1}
          >
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-8">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}