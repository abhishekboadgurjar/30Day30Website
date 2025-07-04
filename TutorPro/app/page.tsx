"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Star,
  Award,
  BookOpen,
  GraduationCap,
  CheckCircle,
  Video,
  Home,
  Target,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [selectedSubject, setSelectedSubject] = useState("")
  const [selectedGrade, setSelectedGrade] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const subjects = [
    {
      category: "Mathematics",
      icon: "📊",
      grades: ["Grade 1-5", "Grade 6-8", "Grade 9-10", "Grade 11-12", "College Level"],
      tutors: 45,
      popular: true,
    },
    {
      category: "Science",
      icon: "🔬",
      grades: ["Grade 6-8", "Grade 9-10", "Grade 11-12 (Physics)", "Grade 11-12 (Chemistry)", "Grade 11-12 (Biology)"],
      tutors: 38,
      popular: true,
    },
    {
      category: "English",
      icon: "📚",
      grades: ["Grade 1-5", "Grade 6-8", "Grade 9-10", "Grade 11-12", "IELTS/TOEFL"],
      tutors: 52,
      popular: true,
    },
    {
      category: "Computer Science",
      icon: "💻",
      grades: ["Grade 9-10", "Grade 11-12", "College Level", "Programming", "Web Development"],
      tutors: 28,
      popular: false,
    },
    {
      category: "Social Studies",
      icon: "🌍",
      grades: [
        "Grade 6-8",
        "Grade 9-10",
        "Grade 11-12 (History)",
        "Grade 11-12 (Geography)",
        "Grade 11-12 (Economics)",
      ],
      tutors: 22,
      popular: false,
    },
    {
      category: "Languages",
      icon: "🗣️",
      grades: ["Spanish", "French", "German", "Mandarin", "Hindi"],
      tutors: 18,
      popular: false,
    },
  ]

  const featuredTutors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      subject: "Mathematics",
      experience: "8 years",
      rating: 4.9,
      reviews: 127,
      education: "PhD Mathematics, MIT",
      specialization: "Calculus, Algebra, SAT Prep",
      price: 45,
      image: "/images/tutor-1.png",
      available: true,
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      subject: "Physics",
      experience: "12 years",
      rating: 4.8,
      reviews: 89,
      education: "MS Physics, Stanford",
      specialization: "AP Physics, IB Physics",
      price: 50,
      image: "/images/tutor-2.png",
      available: true,
    },
    {
      id: 3,
      name: "Ms. Emily Rodriguez",
      subject: "English",
      experience: "6 years",
      rating: 4.9,
      reviews: 156,
      education: "MA English Literature, Harvard",
      specialization: "Essay Writing, Literature",
      price: 40,
      image: "/images/tutor-3.png",
      available: false,
    },
    {
      id: 4,
      name: "Mr. David Kumar",
      subject: "Computer Science",
      experience: "10 years",
      rating: 4.7,
      reviews: 73,
      education: "MS Computer Science, CMU",
      specialization: "Python, Java, Web Dev",
      price: 55,
      image: "/images/tutor-4.png",
      available: true,
    },
  ]

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Parent",
      student: "Sofia (Grade 10)",
      text: "My daughter's math grades improved from C to A+ in just 3 months. The tutor was patient, knowledgeable, and made learning fun!",
      rating: 5,
      subject: "Mathematics",
    },
    {
      name: "Robert Chen",
      role: "Student",
      grade: "Grade 12",
      text: "The physics tutor helped me understand complex concepts easily. Got accepted to my dream engineering college!",
      rating: 5,
      subject: "Physics",
    },
    {
      name: "Lisa Thompson",
      role: "Parent",
      student: "Alex (Grade 8)",
      text: "Excellent English tutor! My son's writing skills and confidence have improved dramatically. Highly recommend!",
      rating: 5,
      subject: "English",
    },
    {
      name: "Ahmed Hassan",
      role: "Student",
      grade: "College",
      text: "The computer science tutor made programming concepts crystal clear. Now I'm confident in my coding abilities!",
      rating: 5,
      subject: "Computer Science",
    },
  ]

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM",
  ]

  const packages = [
    {
      name: "Trial Package",
      sessions: 1,
      price: 0,
      originalPrice: 45,
      description: "Free demo class to get started",
      features: ["1 Free Demo Class", "Subject Assessment", "Learning Plan", "No Commitment"],
      popular: false,
      cta: "Book Free Demo",
    },
    {
      name: "Monthly Package",
      sessions: 8,
      price: 320,
      originalPrice: 360,
      description: "Perfect for regular learning",
      features: ["8 Sessions (2/week)", "Progress Reports", "Homework Help", "Flexible Scheduling"],
      popular: true,
      cta: "Book Your Tutor",
    },
    {
      name: "Intensive Package",
      sessions: 16,
      price: 600,
      originalPrice: 720,
      description: "Ideal for exam preparation",
      features: ["16 Sessions (4/week)", "Mock Tests", "Study Materials", "24/7 Support"],
      popular: false,
      cta: "Book Your Tutor",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">TutorPro</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#subjects" className="text-gray-600 hover:text-gray-900">
              Subjects
            </Link>
            <Link href="#tutors" className="text-gray-600 hover:text-gray-900">
              Tutors
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-gray-900">
              Reviews
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:flex">
              <Phone className="h-4 w-4 mr-2" />
              (555) 123-TUTOR
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="h-4 w-4 mr-2" />
              Book Your Tutor
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100">
                🎓 1000+ Successful Students
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Find Your Perfect
                <span className="block text-blue-600">Home Tutor</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connect with qualified, experienced tutors for personalized learning. Improve grades, build confidence,
                and achieve academic success with our expert tutors.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Video className="h-5 w-5 mr-2" />
                  Book Free Demo Class
                </Button>
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Your Tutor Now
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  Verified Tutors
                </div>
                <div className="flex items-center">
                  <Home className="h-4 w-4 mr-1" />
                  Home & Online
                </div>
                <div className="flex items-center">
                  <Target className="h-4 w-4 mr-1" />
                  Personalized Learning
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/hero-tutoring.png"
                alt="Online tutoring session"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">4.8/5</span>
                </div>
                <p className="text-sm text-gray-600">500+ Parent Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Demo Booking */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Book Your Free Demo Class</CardTitle>
              <CardDescription>Experience our teaching quality with a complimentary trial session</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                  >
                    <option value="">Select Subject</option>
                    {subjects.map((subject) => (
                      <option key={subject.category} value={subject.category}>
                        {subject.icon} {subject.category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Grade</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={selectedGrade}
                    onChange={(e) => setSelectedGrade(e.target.value)}
                  >
                    <option value="">Select Grade</option>
                    <option>Grade 1-5</option>
                    <option>Grade 6-8</option>
                    <option>Grade 9-10</option>
                    <option>Grade 11-12</option>
                    <option>College Level</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <Video className="h-4 w-4 mr-2" />
                    Book Free Demo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Subjects & Grades */}
      <section id="subjects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Subjects & Grades We Cover</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tutoring across all major subjects and grade levels with expert tutors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{subject.icon}</span>
                      <CardTitle className="text-lg">{subject.category}</CardTitle>
                    </div>
                    {subject.popular && <Badge className="bg-orange-500">Popular</Badge>}
                  </div>
                  <CardDescription>{subject.tutors} expert tutors available</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-sm">Available Grades:</h4>
                    <div className="flex flex-wrap gap-1">
                      {subject.grades.map((grade, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {grade}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Your Tutor
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutors */}
      <section id="tutors" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Tutors</h2>
            <p className="text-xl text-gray-600">Qualified, experienced, and passionate about teaching</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTutors.map((tutor) => (
              <Card key={tutor.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <Image
                      src={tutor.image || "/placeholder.svg"}
                      alt={tutor.name}
                      width={80}
                      height={80}
                      className="rounded-full mx-auto mb-3"
                    />
                    <h3 className="font-semibold text-lg">{tutor.name}</h3>
                    <p className="text-blue-600 font-medium">{tutor.subject}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-medium">{tutor.experience}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Rating:</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">{tutor.rating}</span>
                        <span className="text-gray-500 ml-1">({tutor.reviews})</span>
                      </div>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Education:</span>
                      <p className="font-medium">{tutor.education}</p>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Specialization:</span>
                      <p className="font-medium">{tutor.specialization}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">${tutor.price}/hr</span>
                    <Badge
                      variant={tutor.available ? "default" : "secondary"}
                      className={tutor.available ? "bg-green-500" : ""}
                    >
                      {tutor.available ? "Available" : "Busy"}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700" disabled={!tutor.available}>
                      <Video className="h-4 w-4 mr-2" />
                      Book Demo Class
                    </Button>
                    <Button variant="outline" className="w-full" disabled={!tutor.available}>
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Your Tutor
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Availability Calendar */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Check Tutor Availability</h2>
            <p className="text-xl text-gray-600">Select your preferred date and time for tutoring sessions</p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Calendar className="h-6 w-6 mr-2" />
                Schedule Your Session
              </CardTitle>
              <CardDescription>Choose your preferred date and time slot</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Select Date</h3>
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="mb-4"
                  />

                  <h3 className="font-semibold mb-4">Available Time Slots</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot}
                        variant={selectedTime === slot ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(slot)}
                        className={selectedTime === slot ? "bg-blue-600" : ""}
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Session Details</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Session Duration: 60 minutes</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Home className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Location: Your Home or Online</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Materials: Provided by tutor</span>
                      </div>
                    </div>

                    {selectedDate && selectedTime && (
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Selected Slot:</h4>
                        <p className="text-green-700">
                          {new Date(selectedDate).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <p className="text-green-700">{selectedTime}</p>
                      </div>
                    )}

                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      disabled={!selectedDate || !selectedTime}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Your Tutor
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Learning Package</h2>
            <p className="text-xl text-gray-600">Flexible pricing options to suit every learning need and budget</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? "ring-2 ring-blue-500" : ""}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-blue-600">${pkg.price}</span>
                    {pkg.originalPrice > pkg.price && (
                      <span className="text-gray-500 line-through">${pkg.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">
                    {pkg.sessions} session{pkg.sessions > 1 ? "s" : ""}
                  </p>
                  <p className="text-gray-600">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">{pkg.cta}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Students & Parents Say</h2>
            <p className="text-xl text-gray-600">Real success stories from our tutoring community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-4 italic">"{testimonial.text}"</blockquote>
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-semibold">{testimonial.name}</span>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                        {testimonial.student && <p className="text-sm text-gray-500">{testimonial.student}</p>}
                        {testimonial.grade && <p className="text-sm text-gray-500">{testimonial.grade}</p>}
                      </div>
                    </div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {testimonial.subject}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <TrendingUp className="h-8 w-8 text-green-500" />
                  <div>
                    <h3 className="text-xl font-semibold">95% Grade Improvement</h3>
                    <p className="text-gray-600">Average improvement in student grades</p>
                  </div>
                </div>
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Video className="h-5 w-5 mr-2" />
                  Start Your Success Story
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Boost Your Grades?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of successful students who improved their academic performance with our expert tutors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Video className="h-5 w-5 mr-2" />
              Book Free Demo Class
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Calendar className="h-5 w-5 mr-2" />
              Book Your Tutor Now
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Started Today</h2>
              <p className="text-xl text-gray-600 mb-8">
                Have questions? Need help choosing the right tutor? Our education consultants are here to help you find
                the perfect match.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-600">(555) 123-TUTOR</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Service Areas</p>
                    <p className="text-gray-600">Home & Online tutoring available citywide</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                  <div>
                    <p className="font-semibold">Available Hours</p>
                    <p className="text-gray-600">Mon-Sun: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 mr-4">
                  <Video className="h-5 w-5 mr-2" />
                  Book Free Demo
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Find Your Perfect Tutor</CardTitle>
                <CardDescription>
                  Tell us about your learning needs and we'll match you with the best tutor
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Student Name" />
                  <Input placeholder="Parent Name" />
                </div>
                <Input placeholder="Phone Number" />
                <Input placeholder="Email Address" />
                <div className="grid grid-cols-2 gap-4">
                  <select className="w-full p-2 border rounded-md">
                    <option>Select Subject</option>
                    {subjects.map((subject) => (
                      <option key={subject.category} value={subject.category}>
                        {subject.category}
                      </option>
                    ))}
                  </select>
                  <select className="w-full p-2 border rounded-md">
                    <option>Select Grade</option>
                    <option>Grade 1-5</option>
                    <option>Grade 6-8</option>
                    <option>Grade 9-10</option>
                    <option>Grade 11-12</option>
                    <option>College Level</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <select className="w-full p-2 border rounded-md">
                    <option>Tutoring Type</option>
                    <option>Home Tutoring</option>
                    <option>Online Tutoring</option>
                    <option>Both</option>
                  </select>
                  <select className="w-full p-2 border rounded-md">
                    <option>Preferred Time</option>
                    <option>Morning (9 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 5 PM)</option>
                    <option>Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
                <Textarea placeholder="Tell us about your learning goals and any specific requirements..." rows={3} />
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="demo-class" />
                  <label htmlFor="demo-class" className="text-sm">
                    I want to book a free demo class first
                  </label>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Your Tutor
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6 text-blue-500" />
                <span className="text-xl font-bold">TutorPro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting students with qualified tutors for personalized learning and academic success. Trusted by
                thousands of families.
              </p>
              <div className="flex items-center space-x-2 mb-2">
                <Award className="h-4 w-4 text-green-500" />
                <span className="text-sm">Verified Tutors</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-500" />
                <span className="text-sm">Satisfaction Guaranteed</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Popular Subjects</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Mathematics Tutoring
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Science Tutoring
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    English Tutoring
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Computer Science
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Test Preparation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Home Tutoring
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Online Tutoring
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Group Classes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Exam Preparation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Assignment Help
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: (555) 123-TUTOR</li>
                <li>Email: info@tutorpro.com</li>
                <li>Hours: Mon-Sun 9AM-8PM</li>
                <li>Free demo classes available</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 TutorPro. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed and developed by <span className="text-blue-500 font-semibold">Boad Technologies</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
