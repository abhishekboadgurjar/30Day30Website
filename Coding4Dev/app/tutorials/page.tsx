import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Filter, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Tutorials | Coding4Dev",
  description: "Free coding tutorials covering web development, JavaScript, React, Node.js, and more.",
};

export default function TutorialsPage() {
  const tutorials = [
    {
      title: "Building a REST API with Node.js",
      description: "Learn how to create a RESTful API using Node.js and Express",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "45 min",
      level: "Intermediate",
      category: "Backend",
    },
    {
      title: "React Hooks Deep Dive",
      description: "Master React Hooks with practical examples",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "60 min",
      level: "Advanced",
      category: "React",
    },
    {
      title: "CSS Grid Layout Tutorial",
      description: "Create responsive layouts with CSS Grid",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "30 min",
      level: "Beginner",
      category: "CSS",
    },
    {
      title: "TypeScript Fundamentals",
      description: "Get started with TypeScript in your projects",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "50 min",
      level: "Beginner",
      category: "TypeScript",
    },
    // Add more tutorials as needed
  ];

  return (
    <div className="container px-4 md:px-8 py-12 md:py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Video Tutorials</h1>
        <p className="text-xl text-muted-foreground max-w-[800px]">
          Free, comprehensive tutorials to help you master web development.
          New content added weekly!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search tutorials..."
            className="pl-9"
          />
        </div>
        <div className="flex gap-4">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Categories
          </Button>
          <Button variant="outline">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial, index) => (
          <Card key={index} className="overflow-hidden group">
            <div className="aspect-video relative">
              <Image
                src={tutorial.image}
                alt={tutorial.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 flex gap-2">
                <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                  {tutorial.level}
                </Badge>
                <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                  {tutorial.duration}
                </Badge>
              </div>
            </div>
            <CardContent className="p-5">
              <Badge className="mb-2" variant="outline">{tutorial.category}</Badge>
              <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
              <p className="text-muted-foreground mb-4">{tutorial.description}</p>
              <Button asChild variant="ghost" size="sm" className="group/btn">
                <Link href={`/tutorials/${tutorial.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  Watch Tutorial
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button size="lg">
          Load More Tutorials
        </Button>
      </div>
    </div>
  );
}