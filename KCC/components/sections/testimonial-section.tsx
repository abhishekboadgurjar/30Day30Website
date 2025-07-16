"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    content: "Karada Construction Company delivered our highway project on time and under budget. Their attention to detail and quality of work exceeded our expectations.",
    author: "Hiroshi Nakamura",
    role: "Director of Infrastructure, Osaka Prefecture",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    content: "Working with KCC on our urban renewal project was a seamless experience. Their team's expertise in road construction transformed our city center.",
    author: "Yuki Tanabe",
    role: "Mayor, Kawasaki City",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg"
  },
  {
    content: "The bridge KCC built for our community has become a landmark. Their engineering excellence and commitment to safety were evident throughout the project.",
    author: "Masaki Kobayashi",
    role: "Chief Engineer, Tohoku Development Authority",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
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

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p 
            className="text-sm font-medium text-yellow-400 uppercase tracking-wider mb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={0}
          >
            Testimonials
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={1}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-yellow-400 mx-auto mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={2}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-lg p-8 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={index + 3}
            >
              <Quote className="h-12 w-12 text-yellow-400 opacity-20 absolute top-6 left-6" />
              <div className="relative z-10">
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.author}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
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
          custom={7}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
          <p className="max-w-2xl mx-auto text-gray-300 mb-6">
            Contact us today to discuss how we can bring your infrastructure vision to life
            with our expertise in road construction and development.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}