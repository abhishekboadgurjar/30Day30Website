"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const stats = [
  { icon: <Users />, value: "50+", label: "Clients" },
  { icon: <Award />, value: "100+", label: "Projects" },
  { icon: <Clock />, value: "5+", label: "Years Experience" },
];

const values = [
  {
    title: "Innovation",
    description:
      "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
  },
  {
    title: "Quality",
    description:
      "We're committed to excellence in every line of code and pixel of design, ensuring reliable and robust deliverables.",
  },
  {
    title: "Collaboration",
    description:
      "We work closely with our clients, fostering transparent communication and shared success.",
  },
  {
    title: "User-Centric",
    description:
      "We design with real users in mind, focusing on accessibility, usability, and meaningful experiences.",
  },
];

const team = [
  {
    name: "Abhishek Gurjar",
    role: "Founder & CEO",
    image:
      "https://i.ibb.co/mVYvCxD5/Whats-App-Image-2025-05-25-at-18-58-58-7ebbcae4.jpg",
  },
  {
    name: "Jamie Chen",
    role: "Lead Developer",
    image:
      "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Sara Williams",
    role: "UX/UI Designer",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Michael Torres",
    role: "Project Manager",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6" ref={sectionRef}>
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            className="text-sm text-primary font-medium uppercase tracking-widest mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Story & Mission
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get to know the team behind Boad Technologies and what drives us
          </motion.p>
        </div>

        <Tabs defaultValue="story" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="story">Our Story</TabsTrigger>
              <TabsTrigger value="values">Our Values</TabsTrigger>
              <TabsTrigger value="team">Our Team</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="story" className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Boad Technologies Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col space-y-6"
              >
                <h3 className="text-2xl font-bold">From Vision to Reality</h3>
                <p className="text-muted-foreground">
                  Founded in 2020, Boad Technologies began with a simple
                  mission: to bridge the gap between complex technology and
                  human needs. Our founders, with backgrounds in software
                  development and design, recognized that many businesses were
                  struggling to adapt to the digital transformation.
                </p>
                <p className="text-muted-foreground">
                  We started by helping local businesses establish their online
                  presence, and quickly grew to partner with companies of all
                  sizes across various industries. Today, we're proud to be a
                  leading digital agency, helping our clients navigate the
                  ever-changing technological landscape.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="mb-2 p-2 rounded-full bg-primary/10 text-primary">
                        {stat.icon}
                      </div>
                      <span className="text-2xl font-bold">{stat.value}</span>
                      <span className="text-sm text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="values">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </motion.div>

            <div className="mt-12 p-8 bg-card rounded-lg border text-center">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                To empower businesses with innovative digital solutions that
                drive growth, enhance user experiences, and create lasting value
                in an ever-evolving technological landscape.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="team">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </motion.div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Join Our Team
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
