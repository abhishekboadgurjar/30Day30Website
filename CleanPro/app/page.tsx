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
  Shield,
  Award,
  Users,
  Home,
  Calculator,
  CheckCircle,
  Star,
  Sparkles,
  DollarSign,
  RefreshCw,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [selectedArea, setSelectedArea] = useState("")
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [homeSize, setHomeSize] = useState("")
  const [frequency, setFrequency] = useState("one-time")
  const [calculatedPrice, setCalculatedPrice] = useState(0)

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
    "Garden District",
    "University Area",
  ]

  const cleaningServices = [
    {
      id: "regular",
      name: "Regular House Cleaning",
      description: "Standard cleaning of all rooms, dusting, vacuuming, mopping",
      basePrice: 80,
      duration: "2-3 hours",
      popular: true,
    },
    {
      id: "deep",
      name: "Deep Cleaning",
      description: "Thorough cleaning including inside appliances, baseboards, windows",
      basePrice: 150,
      duration: "4-6 hours",
      popular: false,
    },
    {
      id: "move",
      name: "Move-in/Move-out Cleaning",
      description: "Complete cleaning for moving, including inside cabinets and drawers",
      basePrice: 200,
      duration: "5-7 hours",
      popular: false,
    },
    {
      id: "post-construction",
      name: "Post-Construction Cleanup",
      description: "Specialized cleaning after renovation or construction work",
      basePrice: 250,
      duration: "6-8 hours",
      popular: false,
    },
  ]

  const homeSizes = [
    { id: "studio", name: "Studio/1BR", multiplier: 1 },
    { id: "2br", name: "2 Bedroom", multiplier: 1.3 },
    { id: "3br", name: "3 Bedroom", multiplier: 1.6 },
    { id: "4br", name: "4+ Bedroom", multiplier: 2 },
  ]

  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
  ]

  const subscriptionPackages = [
    {
      name: "Weekly Cleaning",
      frequency: "Every week",
      discount: 20,
      description: "Perfect for busy families",
      popular: true,
      features: ["Same cleaner every time", "Flexible scheduling", "Supply included", "Satisfaction guarantee"],
    },
    {
      name: "Bi-Weekly Cleaning",
      frequency: "Every 2 weeks",
      discount: 15,
      description: "Most popular choice",
      popular: false,
      features: ["Consistent service", "Easy rescheduling", "Eco-friendly products", "Insured & bonded"],
    },
    {
      name: "Monthly Cleaning",
      frequency: "Once a month",
      discount: 10,
      description: "Great for maintenance",
      popular: false,
      features: ["Deep clean focus", "Seasonal tasks", "Quality guarantee", "Background-checked staff"],
    },
  ]

  // Price Calculator
  useEffect(() => {
    if (selectedService && homeSize) {
      const service = cleaningServices.find((s) => s.id === selectedService)
      const size = homeSizes.find((s) => s.id === homeSize)
      if (service && size) {
        let price = service.basePrice * size.multiplier

        // Apply frequency discount
        if (frequency === "weekly") price *= 0.8
        else if (frequency === "bi-weekly") price *= 0.85
        else if (frequency === "monthly") price *= 0.9

        setCalculatedPrice(Math.round(price))
      }
    }
  }, [selectedService, homeSize, frequency])

  const handleCallNow = () => {
    window.open("tel:+15551234567", "_self")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">CleanPro Services</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#packages" className="text-gray-600 hover:text-gray-900">
              Packages
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={handleCallNow} className="hidden sm:flex">
              <Phone className="h-4 w-4 mr-2" />
              (555) 123-4567
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="h-4 w-4 mr-2" />
              Book Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">
                ✨ Trusted by 10,000+ Families
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Professional Home Cleaning
                <span className="block text-blue-600">Made Simple</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Book trusted, insured, and background-checked cleaners in minutes. Same-day service available with our
                instant booking system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Online Now
                </Button>
                <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={handleCallNow}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call to Book: (555) 123-4567
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  Insured & Bonded
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  Background Checked
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  Same Day Available
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/hero-cleaning.png"
                alt="Professional house cleaning service"
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
                <p className="text-sm text-gray-600">2,500+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Booking & Price Calculator */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Cleaning Service</h2>
            <p className="text-xl text-gray-600">Get instant pricing and book your preferred time slot</p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Calculator className="h-6 w-6 mr-2" />
                Instant Price Calculator
              </CardTitle>
              <CardDescription>Select your preferences to get an instant quote</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Area Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">Select Your Area</label>
                <select
                  className="w-full p-3 border rounded-md"
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                >
                  <option value="">Choose your area</option>
                  {serviceAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Service Type</label>
                <div className="grid md:grid-cols-2 gap-4">
                  {cleaningServices.map((service) => (
                    <Card
                      key={service.id}
                      className={`cursor-pointer transition-all ${
                        selectedService === service.id ? "ring-2 ring-blue-500 bg-blue-50" : "hover:shadow-md"
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{service.name}</h3>
                          {service.popular && <Badge className="bg-orange-500">Popular</Badge>}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-blue-600">From ${service.basePrice}</span>
                          <span className="text-sm text-gray-500">{service.duration}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Home Size */}
              <div>
                <label className="block text-sm font-medium mb-2">Home Size</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {homeSizes.map((size) => (
                    <Button
                      key={size.id}
                      variant={homeSize === size.id ? "default" : "outline"}
                      onClick={() => setHomeSize(size.id)}
                      className={homeSize === size.id ? "bg-blue-600" : ""}
                    >
                      {size.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-sm font-medium mb-2">Cleaning Frequency</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button
                    variant={frequency === "one-time" ? "default" : "outline"}
                    onClick={() => setFrequency("one-time")}
                    className={frequency === "one-time" ? "bg-blue-600" : ""}
                  >
                    One-time
                  </Button>
                  <Button
                    variant={frequency === "weekly" ? "default" : "outline"}
                    onClick={() => setFrequency("weekly")}
                    className={frequency === "weekly" ? "bg-blue-600" : ""}
                  >
                    Weekly (-20%)
                  </Button>
                  <Button
                    variant={frequency === "bi-weekly" ? "default" : "outline"}
                    onClick={() => setFrequency("bi-weekly")}
                    className={frequency === "bi-weekly" ? "bg-blue-600" : ""}
                  >
                    Bi-weekly (-15%)
                  </Button>
                  <Button
                    variant={frequency === "monthly" ? "default" : "outline"}
                    onClick={() => setFrequency("monthly")}
                    className={frequency === "monthly" ? "bg-blue-600" : ""}
                  >
                    Monthly (-10%)
                  </Button>
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price Display */}
              {calculatedPrice > 0 && (
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Estimated Price</h3>
                    <div className="text-3xl font-bold text-blue-600">${calculatedPrice}</div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Calendar className="h-5 w-5 mr-2" />
                      Book This Service
                    </Button>
                    <Button size="lg" className="flex-1 bg-green-600 hover:bg-green-700" onClick={handleCallNow}>
                      <Phone className="h-5 w-5 mr-2" />
                      Call to Confirm
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cleaning Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional cleaning services tailored to your needs with transparent pricing and flexible scheduling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cleaningServices.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    {service.popular && <Badge className="bg-orange-500">Popular</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Duration: {service.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Home className="h-4 w-4 mr-2" />
                      All areas covered
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">From ${service.basePrice}</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Select Service</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Packages */}
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Subscription Packages</h2>
            <p className="text-xl text-gray-600">Save more with regular cleaning subscriptions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {subscriptionPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? "ring-2 ring-blue-500" : ""}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">{pkg.frequency}</span>
                    <Badge variant="secondary" className="text-green-600">
                      Save {pkg.discount}%
                    </Badge>
                  </div>
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
                  <div className="space-y-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Choose This Package</Button>
                    <Button variant="outline" className="w-full" onClick={handleCallNow}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call for Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CleanPro Services?</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of families across the city</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Insured & Bonded</h3>
              <p className="text-gray-600">All our cleaners are fully insured and bonded for your peace of mind</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Background Checked</h3>
              <p className="text-gray-600">Thorough background checks and training for all cleaning professionals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-600">Not happy? We'll come back and re-clean for free within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Same-day service available with easy online booking and rescheduling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for a Spotless Home?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Book your cleaning service now and enjoy a professionally cleaned home without the hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Calendar className="h-5 w-5 mr-2" />
              Book Online Now
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={handleCallNow}>
              <Phone className="h-5 w-5 mr-2" />
              Call to Book: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-600 mb-8">
                Questions about our services? Need a custom quote? We're here to help 7 days a week.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Call to Book Now</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Service Areas</p>
                    <p className="text-gray-600">All major neighborhoods and suburbs</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                  <div>
                    <p className="font-semibold">Available Hours</p>
                    <p className="text-gray-600">Mon-Sun: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 mr-4" onClick={handleCallNow}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now to Book
                </Button>
                <Button size="lg" variant="outline">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Online
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <CardDescription>Get a personalized quote for your cleaning needs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Phone Number" />
                <Input placeholder="Email Address" />
                <select className="w-full p-2 border rounded-md">
                  <option>Select your area</option>
                  {serviceAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
                <select className="w-full p-2 border rounded-md">
                  <option>Select service type</option>
                  {cleaningServices.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
                <Textarea placeholder="Additional details about your cleaning needs..." rows={3} />
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="same-day" />
                  <label htmlFor="same-day" className="text-sm">
                    I need same-day service
                  </label>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Get Free Quote
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
                <Sparkles className="h-6 w-6 text-blue-500" />
                <span className="text-xl font-bold">CleanPro Services</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional home cleaning services with trusted, insured, and background-checked cleaners. Serving the
                community for over 10 years.
              </p>
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="text-sm">Fully Insured & Bonded</span>
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
                    Regular House Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Deep Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Move-in/Move-out
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Post-Construction
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Office Cleaning
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Downtown</li>
                <li>Westside</li>
                <li>Eastside</li>
                <li>Midtown</li>
                <li>
                  <Link href="#" className="hover:text-white">
                    View All Areas
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@cleanproservices.com</li>
                <li>Hours: Mon-Sun 8AM-6PM</li>
                <li>Same-day service available</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 CleanPro Services. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed and developed by <span className="text-blue-500 font-semibold">Boad Technologies</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <button
        onClick={handleCallNow}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        <Phone className="h-6 w-6" />
      </button>
    </div>
  )
}
