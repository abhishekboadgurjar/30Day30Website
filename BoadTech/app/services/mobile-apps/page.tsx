import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const platforms = [
  "iOS (Swift/SwiftUI)", "Android (Kotlin)", "React Native",
  "Flutter", "Progressive Web Apps", "Cross-Platform Development"
];

const features = [
  {
    title: "Native Mobile Apps",
    description: "High-performance applications built specifically for iOS and Android platforms."
  },
  {
    title: "Cross-Platform Solutions",
    description: "Cost-effective apps that work seamlessly across multiple platforms."
  },
  {
    title: "App Maintenance",
    description: "Regular updates, bug fixes, and performance optimization services."
  },
  {
    title: "App Store Optimization",
    description: "Strategic positioning and marketing of your app in stores."
  }
];

export default function MobileAppsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Mobile App Development
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Create powerful, user-friendly mobile applications that engage your audience
                and drive business growth across all platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Start Your App</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Mobile App Development"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Development Platforms</h2>
              <div className="grid grid-cols-2 gap-4">
                {platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 rounded-lg bg-secondary/50"
                  >
                    <Smartphone className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm font-medium">{platform}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>User-centered design methodology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Agile development process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Comprehensive testing strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Post-launch support and updates</span>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create an exceptional mobile experience that your users will love.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started
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