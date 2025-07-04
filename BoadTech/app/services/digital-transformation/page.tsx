import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const technologies = [
  "Cloud Computing", "AI/ML", "IoT",
  "Big Data", "DevOps", "Automation",
  "CRM Systems", "ERP Solutions", "Digital Workflows",
  "Business Intelligence", "Process Mining", "Change Management"
];

const features = [
  {
    title: "Digital Strategy",
    description: "Comprehensive digital transformation roadmap aligned with your business objectives."
  },
  {
    title: "Process Automation",
    description: "Streamline operations with intelligent automation and workflow optimization."
  },
  {
    title: "Enterprise Solutions",
    description: "Custom enterprise software and integration of modern business systems."
  },
  {
    title: "Change Management",
    description: "Support for organizational change and digital adoption programs."
  }
];

export default function DigitalTransformationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Digital Transformation
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your business with innovative digital solutions.
                We help organizations embrace technology to stay competitive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital Transformation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Capabilities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 rounded-lg bg-secondary/50"
                  >
                    <Globe className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Proven transformation methodology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Industry expertise across sectors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>End-to-end implementation support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Focus on sustainable results</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you navigate your digital transformation journey.
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
