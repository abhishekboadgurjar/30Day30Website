"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, LineChart, Smartphone, Globe, PenTool, Database, ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const services = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Web Development",
    description: "Cutting-edge websites with modern frameworks like React, Next.js, and Vue that deliver exceptional user experiences.",
    link: "/services/web-development"
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android that are responsive, fast, and user-friendly.",
    link: "/services/mobile-apps"
  },
  {
    icon: <PenTool className="h-10 w-10" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that focus on user experience, accessibility, and conversion optimization.",
    link: "/services/ui-ux-design"
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Backend Solutions",
    description: "Scalable, secure backend systems with cloud infrastructure, APIs, and database architecture.",
    link: "/services/backend-solutions"
  },
  {
    icon: <LineChart className="h-10 w-10" />,
    title: "Analytics & SEO",
    description: "Data-driven strategies to improve visibility, track performance, and optimize for search engines.",
    link: "/services/analytics-seo"
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Digital Transformation",
    description: "End-to-end digital solutions that help businesses modernize their processes and technologies.",
    link: "/services/digital-transformation"
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16" ref={containerRef}>
        <div className="container px-4 md:px-6">
          <motion.div 
            className="flex flex-col items-center text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                Our Services
              </h1>
            </motion.div>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Comprehensive digital solutions tailored to your business needs
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4">
              {services.map((service, index) => (
                <Button
                  key={index}
                  variant={selectedService === service.title ? "default" : "outline"}
                  onClick={() => setSelectedService(service.title)}
                  className="text-sm"
                >
                  {service.title}
                </Button>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            style={{ scale: springScale, opacity }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <Card 
                  className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col overflow-hidden relative"
                  style={{
                    background: `linear-gradient(210deg, var(--card-background, hsl(var(--card))) 0%, var(--card-background, hsl(var(--card))) 40%, var(--card-hover, hsl(var(--card))) 100%)`
                  }}
                >
                  <CardHeader>
                    <motion.div 
                      className="p-2 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary relative z-10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                    <CardDescription className="text-base mb-6">{service.description}</CardDescription>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      {["Modern Technologies", "Scalable Solutions", "Expert Team", "24/7 Support"].map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="mt-auto pt-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Button asChild className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
                        <Link href={service.link} className="flex items-center justify-center">
                          Learn More
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                          >
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </motion.div>
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-primary/20"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get Started
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}