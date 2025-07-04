"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, LineChart, Smartphone, Globe, PenTool, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Web Development",
    description: "Cutting-edge websites with modern frameworks like React, Next.js, and Vue that deliver exceptional user experiences."
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android that are responsive, fast, and user-friendly."
  },
  {
    icon: <PenTool className="h-10 w-10" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that focus on user experience, accessibility, and conversion optimization."
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Backend Solutions",
    description: "Scalable, secure backend systems with cloud infrastructure, APIs, and database architecture."
  },
  {
    icon: <LineChart className="h-10 w-10" />,
    title: "Analytics & SEO",
    description: "Data-driven strategies to improve visibility, track performance, and optimize for search engines."
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Digital Transformation",
    description: "End-to-end digital solutions that help businesses modernize their processes and technologies."
  }
];

export function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6" ref={sectionRef}>
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            className="text-sm text-primary font-medium uppercase tracking-widest mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What We Do Best
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We transform your vision into reality with our comprehensive range of digital services
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="border border-border/50 bg-card/50 backdrop-blur-sm h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg overflow-hidden group">
                <CardHeader>
                  <div className="p-2 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}