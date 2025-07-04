import Image from "next/image";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-[800px]">
            Join thousands of developers who have transformed their careers with our tutorials.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={index}
              className="relative rounded-lg border bg-card p-6 transition-all hover:shadow-md"
            >
              <Quote className="h-8 w-8 text-muted-foreground/30 absolute top-6 right-6" />
              <div className="mb-4">
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </div>
              <div className="flex items-center mt-6">
                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 rounded-lg border bg-card/50 p-6 md:p-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl" />
          
          <div className="relative flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Coding Journey?
            </h3>
            <p className="text-lg text-muted-foreground max-w-[600px] mb-6">
              Subscribe to our YouTube channel for free tutorials and join our community of learners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[600px]">
              <div className="flex flex-col items-center p-4 bg-background rounded-lg border">
                <div className="text-3xl font-bold text-blue-500 mb-2">100+</div>
                <p className="text-sm text-muted-foreground">Video Tutorials</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-background rounded-lg border">
                <div className="text-3xl font-bold text-purple-500 mb-2">20k+</div>
                <p className="text-sm text-muted-foreground">YouTube Subscribers</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-background rounded-lg border">
                <div className="text-3xl font-bold text-green-500 mb-2">15+</div>
                <p className="text-sm text-muted-foreground">Complete Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}