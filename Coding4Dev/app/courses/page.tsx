import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURED_COURSES } from "@/lib/constants";

export const metadata = {
  title: "Courses | Coding4Dev",
  description: "Comprehensive coding courses to help you master web development from the ground up.",
};

export default function CoursesPage() {
  // Extended courses list for the full page
  const allCourses = [
    ...FEATURED_COURSES,
    {
      title: "TypeScript Essentials",
      description: "Add static typing to your JavaScript projects",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      level: "Intermediate",
      modules: 10,
    },
    {
      title: "Responsive Web Design",
      description: "Create websites that look great on any device",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      level: "Beginner",
      modules: 8,
    },
    {
      title: "Web Animation Techniques",
      description: "Add life to your websites with CSS and JavaScript animations",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      level: "Intermediate",
      modules: 12,
    },
    {
      title: "Git & GitHub Mastery",
      description: "Master version control for collaborative development",
      image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      level: "Beginner",
      modules: 6,
    },
  ];

  return (
    <div className="container px-4 md:px-8 py-12 md:py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Courses</h1>
        <p className="text-xl text-muted-foreground max-w-[800px]">
          Comprehensive learning paths to help you master web development from the ground up.
          All courses include hands-on projects and coding challenges.
        </p>
      </div>
      
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">All Courses</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Filter</Button>
            <Button variant="outline" size="sm">Sort</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allCourses.map((course, index) => (
            <Card key={index} className="overflow-hidden group transition-all hover:shadow-md">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {course.level}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-xl mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{course.modules} modules</span>
                  <Button asChild variant="ghost" size="sm" className="group/btn">
                    <Link href={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Learn More
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="bg-muted/50 rounded-lg p-6 md:p-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Want Custom Learning Path?</h2>
            <p className="text-muted-foreground mb-4">
              Not sure where to start? We can help you create a personalized learning path based on your goals and current skill level.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="font-medium mb-3">Subscribe to our YouTube channel</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get access to free tutorials and coding tips. New videos every week!
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link 
                href="https://www.youtube.com/@Coding4Dev" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe on YouTube
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}