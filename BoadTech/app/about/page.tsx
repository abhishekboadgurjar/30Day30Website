"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.2 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Get to know the team behind Boad Technologies and what drives us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2025, Boad Technologies began with a simple mission:
                to bridge the gap between complex technology and human needs.
                Our founders, with backgrounds in software development and
                design, recognized that many businesses were struggling to adapt
                to the digital transformation.
              </p>
              <p className="text-muted-foreground mb-8">
                Today, we're proud to be a leading digital agency, helping our
                clients navigate the ever-changing technological landscape with
                innovative solutions and exceptional service.
              </p>
              <motion.div
                className="grid grid-cols-3 gap-4"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center p-4 bg-card rounded-lg"
                    variants={fadeInUp}
                  >
                    <motion.div
                      className="mb-2 p-2 rounded-full bg-primary/10 text-primary"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                    <span className="text-2xl font-bold">{stat.value}</span>
                    <span className="text-sm text-muted-foreground">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="relative aspect-video rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Boad Technologies Team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Card className="p-6">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="group"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
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
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
