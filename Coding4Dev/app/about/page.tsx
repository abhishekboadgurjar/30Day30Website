import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, Code, Users } from "lucide-react";
import { SVGProps } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SOCIAL_LINKS } from "@/lib/constants";

export const metadata = {
  title: "About | Coding4Dev",
  description: "Learn about our mission to help developers master web development with comprehensive tutorials and courses.",
};

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-8 py-12 md:py-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg border p-8 md:p-12 mb-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-purple-900/20" />
        
        {/* Content */}
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Coding4Dev</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-[800px] mb-8">
            We're on a mission to make web development accessible to everyone through 
            high-quality tutorials, comprehensive courses, and a supportive community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="group">
              <Link href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">
                Watch Our Tutorials
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-lg">
            <p>
              Coding4Dev was born from a simple idea: learning to code should be accessible, 
              engaging, and relevant to real-world applications.
            </p>
            <p>
              Founded in 2022 by a team of passionate developers and educators, we started with a 
              small YouTube channel sharing tutorials on JavaScript fundamentals. As our community 
              grew, so did our content library and vision.
            </p>
            <p>
              Today, we're proud to offer comprehensive courses, in-depth tutorials, and a supportive 
              community that helps developers at all stages of their journey.
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-lg border">
            <Image
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-blue-500/10 blur-xl" />
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-purple-500/10 blur-xl" />
        </div>
      </div>
      
      {/* Mission & Values */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            We're guided by a set of core principles that shape everything we do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: BookOpen,
              title: "Quality Education",
              description: "We believe in creating content that's both comprehensive and easy to understand, focusing on real-world applications."
            },
            {
              icon: Code,
              title: "Modern Practices",
              description: "We stay current with the latest technologies and best practices to ensure our students learn relevant skills."
            },
            {
              icon: Users,
              title: "Community First",
              description: "We foster a supportive learning environment where developers can connect, share, and grow together."
            },
            {
              icon: Award,
              title: "Continuous Growth",
              description: "We're committed to constantly improving our content and expanding our offerings to better serve our community."
            }
          ].map((value, index) => (
            <Card key={index} className="border-t-4 border-t-blue-500">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Team Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            The passionate developers and educators behind Coding4Dev.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Alex Chen",
              role: "Founder & Lead Instructor",
              bio: "Full-stack developer with 10+ years of experience and a passion for teaching.",
              image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              name: "Maya Rodriguez",
              role: "Content Director",
              bio: "Former bootcamp instructor specializing in JavaScript frameworks and modern web development.",
              image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              name: "James Wilson",
              role: "Technical Writer",
              bio: "Backend developer and technical writer who loves simplifying complex concepts.",
              image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          ].map((member, index) => (
            <div key={index} className="group">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-center space-x-2">
                    <Button variant="secondary" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                      <Link href="#" aria-label="Twitter">
                        <Twitter className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="secondary" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                      <Link href="#" aria-label="LinkedIn">
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="secondary" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                      <Link href="#" aria-label="GitHub">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-500 dark:text-blue-400 mb-2">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Milestones */}
      <div className="rounded-lg border bg-card/50 p-8 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
        
        <div className="space-y-8">
          {[
            {
              year: "2022",
              title: "The Beginning",
              description: "Launched our YouTube channel with JavaScript fundamentals tutorials."
            },
            {
              year: "2023",
              title: "Growth & Expansion",
              description: "Reached 10,000 subscribers and launched our first comprehensive MERN stack course."
            },
            {
              year: "2024",
              title: "Community Building",
              description: "Created our website and learning platform to better serve our growing community."
            },
            {
              year: "2025",
              title: "Looking Forward",
              description: "Planning advanced courses and interactive learning experiences."
            }
          ].map((milestone, index, array) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="md:w-1/4">
                  <div className="text-3xl font-bold text-blue-500 dark:text-blue-400">{milestone.year}</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
              {index < array.length - 1 && (
                <Separator className="my-8" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="relative overflow-hidden rounded-lg border p-8 md:p-12">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20" />
        
        {/* Content */}
        <div className="relative text-center max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Learning Community
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to our YouTube channel, follow us on social media, and be part of our growing community of developers.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="group">
              <Link href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">
                Subscribe on YouTube
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Twitter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function Github(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function Linkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}