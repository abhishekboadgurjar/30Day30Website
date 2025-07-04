import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURED_COURSES } from "@/lib/constants";

export function CoursesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              Comprehensive learning paths to help you master web development from the ground up.
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 group">
            <Link href="/courses">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_COURSES.map((course, index) => (
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
    </section>
  );
}