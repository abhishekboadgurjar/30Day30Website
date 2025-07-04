import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, PenTool, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const tools = [
  "Figma", "Adobe XD", "Sketch", "InVision",
  "Principle", "Framer", "Zeplin", "Abstract"
];

const services = [
  {
    title: "User Research",
    description: "Understanding your users' needs, behaviors, and motivations through comprehensive research."
  },
  {
    title: "Interface Design",
    description: "Creating beautiful, intuitive interfaces that align with your brand and delight users."
  },
  {
    title: "User Experience",
    description: "Crafting seamless user journeys and interactions that drive engagement and conversion."
  },
  {
    title: "Design Systems",
    description: "Building scalable design systems that ensure consistency across your digital products."
  }
];

export default function UiUxDesignPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                UI/UX Design Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Create exceptional digital experiences that engage users and drive business growth
                through strategic design thinking and creative excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Start Your Design</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="UI/UX Design"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Design Tools</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 rounded-lg bg-secondary/50"
                  >
                    <PenTool className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Process</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Research & Discovery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Wireframing & Prototyping</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Visual Design & Branding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Testing & Iteration</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Experience?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create intuitive and engaging designs that your users will love.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Start Your Project
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