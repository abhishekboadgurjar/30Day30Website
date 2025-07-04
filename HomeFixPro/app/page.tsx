"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Clock,
  MapPin,
  Star,
  Shield,
  Award,
  Wrench,
  Zap,
  Droplets,
  Wind,
  MessageCircle,
  AlertTriangle,
  Calendar,
  DollarSign,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [zipCode, setZipCode] = useState("")
  const [showChat, setShowChat] = useState(false)

  const services = [
    {
      name: "Plumbing Services",
      icon: <Droplets className="h-8 w-8 text-blue-500" />,
      image: "/images/plumbing-service.jpg",
      services: [
        { name: "Drain Cleaning", price: "$89-149" },
        { name: "Leak Repair", price: "$125-250" },
        { name: "Toilet Repair/Install", price: "$150-300" },
        { name: "Water Heater Service", price: "$200-500" },
        { name: "Emergency Plumbing", price: "$150/hr" },
      ],
      emergency: true,
    },
    {
      name: "Electrical Services",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      image: "/images/electrician-service.jpg",
      services: [
        { name: "Outlet Installation", price: "$125-200" },
        { name: "Circuit Breaker Repair", price: "$200-400" },
        { name: "Ceiling Fan Install", price: "$150-250" },
        { name: "Electrical Panel Upgrade", price: "$800-2000" },
        { name: "Emergency Electrical", price: "$175/hr" },
      ],
      emergency: true,
    },
    {
      name: "HVAC Services",
      icon: <Wind className="h-8 w-8 text-green-500" />,
      image: "/images/hvac-service.jpg",
      services: [
        { name: "AC Repair", price: "$150-350" },
        { name: "Furnace Service", price: "$125-300" },
        { name: "Duct Cleaning", price: "$300-500" },
        { name: "System Installation", price: "$3000-8000" },
        { name: "Emergency HVAC", price: "$200/hr" },
      ],
      emergency: true,
    },
    {
      name: "General Repairs",
      icon: <Wrench className="h-8 w-8 text-orange-500" />,
      image: "/images/handyman-service.jpg",
      services: [
        { name: "Drywall Repair", price: "$75-150" },
        { name: "Door/Window Repair", price: "$100-250" },
        { name: "Tile Repair", price: "$125-300" },
        { name: "Painting Touch-ups", price: "$100-200" },
        { name: "General Handyman", price: "$75/hr" },
      ],
      emergency: false,
    },
  ]

  const reviews = [
    {
      name: "Jennifer Martinez",
      rating: 5,
      text: "Quick response for our plumbing emergency! Fixed our burst pipe within 2 hours. Professional and reasonably priced.",
      service: "Emergency Plumbing",
      date: "1 week ago",
    },
    {
      name: "Robert Chen",
      rating: 5,
      text: "Excellent electrical work. Upgraded our panel and installed new outlets. Clean work and great communication.",
      service: "Electrical Panel Upgrade",
      date: "2 weeks ago",
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Fixed our AC right before the heatwave! Technician was knowledgeable and explained everything clearly.",
      service: "AC Repair",
      date: "3 weeks ago",
    },
    {
      name: "Mike Thompson",
      rating: 5,
      text: "Great handyman service. Fixed multiple issues around the house in one visit. Will definitely call again!",
      service: "General Repairs",
      date: "1 month ago",
    },
  ]

  const serviceAreas = [
    "Downtown",
    "Westside",
    "Eastside",
    "Northgate",
    "Southpark",
    "Midtown",
    "Riverside",
    "Hillcrest",
    "Oakwood",
    "Pinehurst",
  ]

  return (
    <div className="min-h-screen">
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <AlertTriangle className="h-4 w-4 mr-2" />
          <span className="font-semibold">24/7 Emergency Services Available</span>
          <Button size="sm" className="ml-4 bg-white text-red-600 hover:bg-gray-100">
            <Phone className="h-4 w-4 mr-1" />
            Call Now: (555) 911-HELP
          </Button>
        </div>
      </div>

      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">HomeFixPro</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#reviews" className="text-gray-600 hover:text-gray-900">
              Reviews
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:flex">
              <Phone className="h-4 w-4 mr-2" />
              (555) 123-4567
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Get Quote</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">⚡ Same Day Service Available</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Professional Home Services You Can Trust</h1>
              <p className="text-xl text-gray-600 mb-8">
                Licensed plumbers, electricians, and repair specialists serving your area. Emergency services available
                24/7 with upfront pricing.
              </p>

              {/* Zip Code Booking Form */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">Get Instant Quote</CardTitle>
                  <CardDescription>Enter your zip code to see available services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter zip code"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button className="bg-blue-600 hover:bg-blue-700">Check Availability</Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">We service all zip codes within 25 miles of downtown</p>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency: (555) 911-HELP
                </Button>
                <Button size="lg" variant="outline">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Service
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  Licensed & Insured
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  5-Star Rated
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Same Day Service
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/hero-plumber.jpg"
                alt="Professional home service technician"
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
                  <span className="font-semibold">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600">1,200+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Home Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional, licensed technicians for all your home repair and maintenance needs. Upfront pricing with no
              hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    {service.icon}
                    {service.emergency && (
                      <Badge variant="destructive" className="text-xs">
                        24/7 Emergency
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-32 mb-4">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <ul className="space-y-2 mb-4">
                    {service.services.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex justify-between text-sm">
                        <span>{item.name}</span>
                        <span className="font-semibold text-blue-600">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Quote</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">No hidden fees. No surprises. Just honest, upfront pricing.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    {service.icon}
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex justify-between items-center">
                        <span className="text-sm">{item.name}</span>
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          {item.price}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-xs text-gray-500">* Prices may vary based on complexity and materials needed</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <DollarSign className="h-8 w-8 text-green-500" />
                  <div>
                    <h3 className="text-xl font-semibold">Service Call Fee: $89</h3>
                    <p className="text-gray-600">Waived when you book the repair</p>
                  </div>
                </div>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Schedule Free Estimate
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <span className="text-xl font-semibold">4.9/5</span>
              <span className="text-gray-600">(1,200+ Google Reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{review.name}</span>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {review.service}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trustpilot/Google Reviews Embed */}
          <div className="text-center">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center space-x-8 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Image src="/placeholder.svg?height=30&width=100" alt="Google Reviews" width={100} height={30} />
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">4.9/5 (1,200+ reviews)</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Image src="/placeholder.svg?height=30&width=100" alt="Trustpilot" width={100} height={30} />
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">4.8/5 (850+ reviews)</p>
                  </div>
                </div>
                <Button variant="outline" size="lg">
                  Read All Reviews
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas We Serve</h2>
            <p className="text-xl text-gray-600">Professional home services throughout the metro area</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-4">
                  <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="font-medium">{area}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">Don't see your area? We may still serve you!</p>
            <Button variant="outline">Check Service Availability</Button>
          </div>
        </div>
      </section>

      {/* Contact/Booking Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Fix Your Home?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Get professional service from licensed technicians. Same-day appointments available.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <div>
                    <span className="font-semibold">Regular Service: (555) 123-4567</span>
                    <br />
                    <span className="text-blue-200">Emergency: (555) 911-HELP</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>Serving all metro areas within 25 miles</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3" />
                  <span>Mon-Fri: 7AM-8PM, Sat-Sun: 8AM-6PM, Emergency: 24/7</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Emergency
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Service
                </Button>
              </div>
            </div>

            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle>Request Service</CardTitle>
                <CardDescription>We'll contact you within 30 minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <Input type="tel" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Zip Code</label>
                  <Input placeholder="12345" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Service Needed</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Select a service</option>
                    <option>Plumbing</option>
                    <option>Electrical</option>
                    <option>HVAC</option>
                    <option>General Repairs</option>
                    <option>Emergency Service</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Describe the Issue</label>
                  <Textarea placeholder="Tell us about the problem..." rows={3} />
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="emergency" />
                  <label htmlFor="emergency" className="text-sm">
                    This is an emergency (additional fees may apply)
                  </label>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Request Service Call</Button>
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
                <Wrench className="h-6 w-6 text-blue-500" />
                <span className="text-xl font-bold">HomeFixPro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional home services with licensed, insured technicians. Serving the community for over 15 years.
              </p>
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">BBB A+ Rating</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Plumbing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Electrical
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    HVAC
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    General Repairs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Emergency Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Service Areas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Regular: (555) 123-4567</li>
                <li>Emergency: (555) 911-HELP</li>
                <li>info@homefixpro.com</li>
                <li>Mon-Fri: 7AM-8PM</li>
                <li>Emergency: 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 HomeFixPro. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed and developed by <span className="text-blue-500 font-semibold">Boad Technologies</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Live Chat Widget */}
      {showChat && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-2xl border z-50">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold">Live Chat</span>
            </div>
            <button onClick={() => setShowChat(false)} className="text-white hover:text-gray-200">
              ×
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="bg-gray-100 p-3 rounded-lg mb-3">
              <p className="text-sm">Hi! How can we help you today?</p>
              <span className="text-xs text-gray-500">Support Team</span>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Live Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-40"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  )
}
