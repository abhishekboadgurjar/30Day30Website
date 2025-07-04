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
  Code,
  Smartphone,
  Shield,
  Palette,
  Database,
  Search,
  Globe,
  Link as LinkIcon,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Code,
  Smartphone,
  Shield,
  Palette,
  Database,
  Search,
  Globe,
  LinkIcon,
};

export default function PortfolioProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [categories, setCategories] = useState<string[]>(["All"]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/projects`);
        const data = await res.json();
        const projectArray = Array.isArray(data) ? data : [data];
        setProjects(projectArray);

        // Extract unique categories from the project list
        const uniqueCategories = Array.from(
          new Set(projectArray.map((p) => p.category))
        ).filter(Boolean); // remove undefined/null

        setCategories(["All", ...uniqueCategories]);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
              Our Portfolio Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Explore the projects I’ve built with modern technologies.
            </p>
          </motion.div>

          {/* 🔁 Dynamic Category Filters */}
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

          {/* 🔁 Same projects grid as before (no changes here) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((item, index) => {
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
                            className="border-white text-white hover:bg-white hover:text-black"
                          >
                            Visit Site <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href={item.github} target="_blank">
                          <Button
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-black"
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
                          View Project <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA same as before */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Want Something Custom?
              </h2>
              <p className="text-muted-foreground mb-6">
                Let’s collaborate or build something unique together. Reach out
                and let’s bring your idea to life.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Contact Me
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
