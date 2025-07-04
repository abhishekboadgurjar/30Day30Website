"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Zap,
  Shield,
  Smartphone,
  Globe,
  Image as ImageIcon,
  Link as LinkIcon,
  Code,
  Palette,
  Database,
  Search,
} from "lucide-react";

// Category list
const categories = [
  "All",
  "Developer Tool",
  "Design Tool",
  "Productivity Tool",
  "Security Tool",
  "Web Utility",
  "Marketing Tool",
  "Utility Tool",
];

// Icon map for dynamic rendering
const iconMap: Record<string, any> = {
  ImageIcon,
  LinkIcon,
  Code,
  Palette,
  Shield,
  Smartphone,
  Globe,
  Database,
  Search,
  Zap,
};

export default function BoadX() {
  const [tools, setTools] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Fetch data from your API
  useEffect(() => {
    const fetchTools = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/tools`);
        const data = await res.json();
        setTools(Array.isArray(data) ? data : [data]); // Handle single or multiple tools
      } catch (err) {
        console.error("Error fetching tools:", err);
      }
    };
    fetchTools();
  }, []);

  // Filter by selected category
  const filteredItems =
    activeCategory === "All"
      ? tools
      : tools.filter((item) => item.category === activeCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Our Products & Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Discover powerful tools and utilities crafted by Boad
              Technologies. From developer productivity to design workflows, we
              build solutions that make your work easier.
            </p>
          </motion.div>

          {/* Category filter buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full transition-all duration-300 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Grid of tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Code;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="group"
                >
                  <Card className="overflow-hidden h-full border-0 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="relative overflow-hidden rounded-t-lg aspect-video">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <Link href={item.link} target="_blank">
                          <Button
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                          >
                            Try Tool <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href={item.github} target="_blank">
                          <Button
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                          >
                            Source <Github className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <motion.div
                        initial={false}
                        animate={{
                          y: hoveredIndex === index ? -5 : 0,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <div className="mb-2">
                          <span className="text-xs font-medium text-primary uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                          {item.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {item.features?.map((feature: string, i: number) => (
                            <div
                              key={i}
                              className="flex items-center text-xs text-muted-foreground"
                            >
                              <div className="w-1 h-1 rounded-full bg-primary mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tech?.map((tech: string, i: number) => (
                            <span
                              key={i}
                              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={item.link}
                          target="_blank"
                          className="inline-flex items-center text-sm font-medium text-primary hover:underline group-hover:translate-x-1 transition-transform"
                        >
                          Try Now <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Custom Tool CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Need a Custom Tool?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? We build custom tools and
                solutions tailored to your specific needs.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Request Custom Tool
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
