"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/sections/contact";

const positions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "5+ years",
    description:
      "We're looking for an experienced Full Stack Developer to join our engineering team and help build innovative solutions.",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Join our design team to create beautiful and intuitive user experiences for our clients' digital products.",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    experience: "4+ years",
    description:
      "Help us build and maintain robust infrastructure and deployment pipelines for our growing portfolio of projects.",
  },
  {
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Create cutting-edge mobile applications for iOS and Android platforms using React Native.",
  },
  {
    title: "Project Manager",
    department: "Operations",
    location: "London, UK",
    type: "Full-time",
    experience: "4+ years",
    description:
      "Lead project teams and ensure successful delivery of client projects while maintaining high quality standards.",
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Drive our digital marketing initiatives and help grow our brand presence across various channels.",
  },
];

const benefits = [
  {
    title: "Flexible Work",
    description: "Work from anywhere with flexible hours",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "Career Growth",
    description: "Continuous learning and development opportunities",
    icon: <ArrowRight className="h-6 w-6" />,
  },
  {
    title: "Great Culture",
    description: "Collaborative and innovative work environment",
    icon: <Briefcase className="h-6 w-6" />,
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tighter mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Join Our Team
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Build the future of digital experiences with us. We're always
              looking for talented individuals to join our growing team.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10 text-primary">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>

          <ContactSection />

          <div className="text-center bg-muted/30 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Don't see the right position?
            </h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
