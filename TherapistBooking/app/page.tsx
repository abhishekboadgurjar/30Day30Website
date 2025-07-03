"use client"

import { useState } from "react"
import { Calendar, Heart, Mail, MapPin, Phone, Star, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TherapistBooking() {
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [activeSection, setActiveSection] = useState("home")

  const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Dr. Johnson helped me through one of the most difficult periods of my life. Her compassionate approach and practical strategies made all the difference.",
      date: "2 months ago",
    },
    {
      name: "Michael R.",
      rating: 5,
      text: "I was skeptical about therapy at first, but Dr. Johnson created such a safe and welcoming environment. I've made tremendous progress with my anxiety.",
      date: "3 months ago",
    },
    {
      name: "Emma L.",
      rating: 5,
      text: "The mindfulness techniques I learned have been life-changing. Dr. Johnson's expertise in trauma therapy is exceptional.",
      date: "1 month ago",
    },
  ]

  const blogPosts = [
    {
      title: "5 Mindfulness Techniques for Daily Stress Relief",
      excerpt:
        "Discover simple yet effective mindfulness practices you can incorporate into your daily routine to manage stress and anxiety.",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "Understanding Trauma and Its Impact on Mental Health",
      excerpt:
        "Learn about different types of trauma and how they affect our mental well-being, plus healthy coping strategies.",
      date: "March 8, 2024",
      readTime: "8 min read",
    },
    {
      title: "Building Resilience: A Guide to Emotional Strength",
      excerpt:
        "Explore practical ways to build emotional resilience and develop healthy coping mechanisms for life's challenges.",
      date: "March 1, 2024",
      readTime: "6 min read",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-blue-100 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-800">Dr. Emily Johnson</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === "home" ? "text-blue-600" : "text-gray-600"}`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === "about" ? "text-blue-600" : "text-gray-600"}`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("booking")}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === "booking" ? "text-blue-600" : "text-gray-600"}`}
              >
                Book Session
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === "testimonials" ? "text-blue-600" : "text-gray-600"}`}
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === "blog" ? "text-blue-600" : "text-gray-600"}`}
              >
                Blog
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Find Your Path to
                  <span className="text-blue-600 block">Mental Wellness</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Licensed Clinical Psychologist specializing in anxiety, depression, and trauma therapy. Creating a
                  safe space for healing and growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("booking")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Session
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("about")}
                  className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-blue-500" />
                  <span>(555) 123-4567</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                <div className="text-center space-y-6">
                  <Avatar className="w-32 h-32 mx-auto border-4 border-blue-100">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Dr. Emily Johnson" />
                    <AvatarFallback className="text-2xl bg-blue-100 text-blue-600">EJ</AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Dr. Emily Johnson</h3>
                    <p className="text-blue-600 font-medium">Licensed Clinical Psychologist</p>
                    <p className="text-gray-600 mt-2">Ph.D. in Clinical Psychology</p>
                  </div>

                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-gray-600 ml-2">4.9/5 (127 reviews)</span>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      Anxiety
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Depression
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      Trauma
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200 rounded-3xl transform rotate-3 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">About Dr. Johnson</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 10 years of experience in clinical psychology, I'm dedicated to helping individuals navigate
              life's challenges and discover their inner strength.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-blue-600">
                    <User className="h-5 w-5" />
                    <span>Education & Credentials</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold">Ph.D. in Clinical Psychology</p>
                    <p className="text-gray-600">Stanford University, 2014</p>
                  </div>
                  <div>
                    <p className="font-semibold">Licensed Clinical Psychologist</p>
                    <p className="text-gray-600">California Board of Psychology</p>
                  </div>
                  <div>
                    <p className="font-semibold">Certified Trauma Specialist</p>
                    <p className="text-gray-600">International Society for Traumatic Stress Studies</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-green-600">
                    <Heart className="h-5 w-5" />
                    <span>Specializations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="outline" className="justify-center py-2">
                      Anxiety Disorders
                    </Badge>
                    <Badge variant="outline" className="justify-center py-2">
                      Depression
                    </Badge>
                    <Badge variant="outline" className="justify-center py-2">
                      PTSD & Trauma
                    </Badge>
                    <Badge variant="outline" className="justify-center py-2">
                      Mindfulness-Based Therapy
                    </Badge>
                    <Badge variant="outline" className="justify-center py-2">
                      Cognitive Behavioral Therapy
                    </Badge>
                    <Badge variant="outline" className="justify-center py-2">
                      Couples Counseling
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="prose prose-lg text-gray-600">
                <p>
                  My approach to therapy is rooted in compassion, evidence-based practices, and the belief that every
                  individual has the capacity for healing and growth. I specialize in helping clients overcome anxiety,
                  depression, and trauma through a combination of cognitive-behavioral therapy, mindfulness techniques,
                  and personalized treatment plans.
                </p>
                <p>
                  I believe in creating a safe, non-judgmental space where clients can explore their thoughts and
                  feelings freely. My goal is to empower you with the tools and insights needed to navigate life's
                  challenges and build lasting resilience.
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">My Philosophy</h4>
                <p className="text-gray-600 italic">
                  "Healing is not about returning to who you were before, but about discovering who you can become.
                  Every step forward, no matter how small, is a victory worth celebrating."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Book Your Session</h2>
            <p className="text-xl text-gray-600">
              Take the first step towards better mental health. Schedule a consultation today.
            </p>
          </div>

          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Calendar */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Select a Date</h3>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 35 }, (_, i) => {
                        const day = i - 6
                        const isCurrentMonth = day > 0 && day <= 31
                        const isAvailable = isCurrentMonth && day % 7 !== 0 && day % 7 !== 6
                        return (
                          <button
                            key={i}
                            onClick={() => isAvailable && setSelectedDate(`2024-03-${day.toString().padStart(2, "0")}`)}
                            className={`
                              h-10 w-10 rounded-lg text-sm font-medium transition-all duration-200
                              ${!isCurrentMonth ? "text-gray-300 cursor-not-allowed" : ""}
                              ${isAvailable ? "hover:bg-blue-100 hover:text-blue-600 cursor-pointer" : ""}
                              ${!isAvailable && isCurrentMonth ? "text-gray-400 cursor-not-allowed" : ""}
                              ${selectedDate === `2024-03-${day.toString().padStart(2, "0")}` ? "bg-blue-600 text-white" : ""}
                            `}
                            disabled={!isAvailable}
                          >
                            {isCurrentMonth ? day : ""}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {selectedDate && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Available Times</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`
                              py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200
                              ${
                                selectedTime === time
                                  ? "bg-blue-600 text-white"
                                  : "bg-white border border-gray-200 hover:border-blue-300 hover:text-blue-600"
                              }
                            `}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Booking Form */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Information</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>

                    <div>
                      <Label htmlFor="sessionType">Session Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select session type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="initial">Initial Consultation (90 min)</SelectItem>
                          <SelectItem value="individual">Individual Therapy (60 min)</SelectItem>
                          <SelectItem value="couples">Couples Therapy (90 min)</SelectItem>
                          <SelectItem value="group">Group Therapy (90 min)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="notes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        placeholder="Please share any specific concerns or questions you'd like to discuss..."
                        rows={3}
                      />
                    </div>

                    {selectedDate && selectedTime && (
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-800 mb-2">Session Summary</h4>
                        <div className="text-sm text-blue-700 space-y-1">
                          <p>
                            <strong>Date:</strong> {new Date(selectedDate).toLocaleDateString()}
                          </p>
                          <p>
                            <strong>Time:</strong> {selectedTime}
                          </p>
                          <p>
                            <strong>Duration:</strong> 60 minutes
                          </p>
                          <p>
                            <strong>Fee:</strong> $150
                          </p>
                        </div>
                      </div>
                    )}

                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                      disabled={!selectedDate || !selectedTime}
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Session
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600">Real stories from people who found their path to healing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Mental Wellness Blog</h2>
            <p className="text-xl text-gray-600">Insights, tips, and resources for your mental health journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 rounded-t-lg"></div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-semibold">Dr. Emily Johnson</span>
              </div>
              <p className="text-gray-300">
                Licensed Clinical Psychologist dedicated to helping you find your path to mental wellness.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@drjohnson.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Wellness St, San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-gray-300">
                <p>Individual Therapy</p>
                <p>Couples Counseling</p>
                <p>Group Therapy</p>
                <p>Trauma Treatment</p>
                <p>Anxiety & Depression</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Office Hours</h4>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-blue-400">Emergency: (555) 999-8888</p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Dr. Emily Johnson. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Powered by <span className="text-blue-400 font-medium">Boad Technologies</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
