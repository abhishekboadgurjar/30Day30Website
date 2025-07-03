"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Star, Quote } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Marketing Manager",
    language: "Spanish",
    rating: 5,
    thumbnail: "/placeholder.svg?height=300&width=400",
    videoUrl: "#",
    quote:
      "I went from complete beginner to conversational in just 3 months. The personalized approach made all the difference!",
    duration: "2:34",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Software Engineer",
    language: "French",
    rating: 5,
    thumbnail: "/placeholder.svg?height=300&width=400",
    videoUrl: "#",
    quote:
      "The flexibility to schedule lessons around my work was perfect. My tutor was patient and encouraging throughout.",
    duration: "1:58",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Student",
    language: "German",
    rating: 5,
    thumbnail: "/placeholder.svg?height=300&width=400",
    videoUrl: "#",
    quote:
      "Amazing experience! The cultural insights my tutor shared helped me understand the language on a deeper level.",
    duration: "3:12",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Business Owner",
    language: "Mandarin",
    rating: 5,
    thumbnail: "/placeholder.svg?height=300&width=400",
    videoUrl: "#",
    quote:
      "Learning Mandarin for business was challenging, but my tutor made it engaging and practical. Highly recommend!",
    duration: "2:45",
  },
]

export function VideoTestimonials() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  const handlePlayVideo = (id: number) => {
    setPlayingVideo(id)
    // In a real implementation, you would handle video playback here
    console.log(`Playing video ${id}`)
  }

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Success Stories from Our Students</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear directly from our students about their language learning journey and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group overflow-hidden">
              <div className="relative">
                <img
                  src={testimonial.thumbnail || "/placeholder.svg"}
                  alt={`${testimonial.name} testimonial`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="lg" className="rounded-full" onClick={() => handlePlayVideo(testimonial.id)}>
                    <Play className="h-6 w-6 mr-2" />
                    Play Video
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {testimonial.duration}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="relative mb-4">
                  <Quote className="h-6 w-6 text-primary/20 absolute -top-2 -left-1" />
                  <p className="text-muted-foreground italic pl-6">{testimonial.quote}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary">Learning {testimonial.language}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Join thousands of successful language learners</p>
          <Button size="lg" asChild>
            <a href="#booking">Start Your Journey Today</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
