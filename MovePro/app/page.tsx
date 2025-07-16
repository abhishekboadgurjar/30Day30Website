"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Calendar,
  MapPin,
  Phone,
  MessageCircle,
  Truck,
  Shield,
  Star,
  CheckCircle,
  Clock,
  Calculator,
  Navigation,
  Headphones,
  Award,
  Plus,
  Minus,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [pickupAddress, setPickupAddress] = useState("")
  const [deliveryAddress, setDeliveryAddress] = useState("")
  const [moveDate, setMoveDate] = useState("")
  const [moveTime, setMoveTime] = useState("")
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: number }>({})
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [estimatedPrice, setEstimatedPrice] = useState(0)
  const [distance, setDistance] = useState(0)
  const [showChat, setShowChat] = useState(false)

  const movingItems = [
    {
      category: "Furniture",
      items: [
        { name: "Sofa (2-3 seater)", price: 50 },
        { name: "Sofa (4+ seater)", price: 75 },
        { name: "Dining Table", price: 60 },
        { name: "Bed (Single)", price: 40 },
        { name: "Bed (Double/Queen)", price: 60 },
        { name: "Wardrobe", price: 80 },
        { name: "TV Unit", price: 45 },
        { name: "Coffee Table", price: 25 },
        { name: "Bookshelf", price: 35 },
      ],
    },
    {
      category: "Appliances",
      items: [
        { name: "Refrigerator", price: 100 },
        { name: "Washing Machine", price: 80 },
        { name: "Microwave", price: 30 },
        { name: "TV (32-43 inch)", price: 40 },
        { name: "TV (50+ inch)", price: 60 },
        { name: "Air Conditioner", price: 120 },
        { name: "Dishwasher", price: 70 },
      ],
    },
    {
      category: "Boxes & Misc",
      items: [
        { name: "Small Box", price: 5 },
        { name: "Medium Box", price: 8 },
        { name: "Large Box", price: 12 },
        { name: "Wardrobe Box", price: 15 },
        { name: "Fragile Items", price: 20 },
        { name: "Artwork/Mirrors", price: 25 },
      ],
    },
  ]

  const additionalServices = [
    { name: "Packing Service", price: 200, description: "Professional packing of all items" },
    { name: "Unpacking Service", price: 150, description: "Unpacking and basic setup" },
    { name: "Furniture Assembly", price: 100, description: "Disassembly and reassembly" },
    { name: "Storage (1 month)", price: 300, description: "Secure storage facility" },
    { name: "Insurance Coverage", price: 50, description: "Full protection for your items" },
    { name: "Express Service", price: 100, description: "Priority scheduling and handling" },
  ]

  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
    "6:00 PM - 8:00 PM",
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York to Boston",
      rating: 5,
      text: "Excellent service! The team was professional, punctual, and handled our belongings with care. Highly recommend!",
      date: "2 weeks ago",
    },
    {
      name: "Mike Chen",
      location: "Local Move - Downtown",
      rating: 5,
      text: "Best moving experience ever! The online booking was so easy and the price calculator was accurate. No hidden fees!",
      date: "1 month ago",
    },
    {
      name: "Emily Rodriguez",
      location: "Chicago to Miami",
      rating: 5,
      text: "Long-distance move made easy. Great communication throughout the process and everything arrived safely.",
      date: "3 weeks ago",
    },
    {
      name: "David Wilson",
      location: "Office Relocation",
      rating: 5,
      text: "Professional office move with minimal downtime. The team worked efficiently and completed everything on schedule.",
      date: "1 week ago",
    },
  ]

  const updateItemQuantity = (itemName: string, change: number) => {
    setSelectedItems((prev) => {
      const newQuantity = (prev[itemName] || 0) + change
      if (newQuantity <= 0) {
        const { [itemName]: removed, ...rest } = prev
        return rest
      }
      return { ...prev, [itemName]: newQuantity }
    })
  }

  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName) ? prev.filter((s) => s !== serviceName) : [...prev, serviceName],
    )
  }

  // Calculate estimated price
  useEffect(() => {
    let total = 0

    // Calculate items cost
    movingItems.forEach((category) => {
      category.items.forEach((item) => {
        const quantity = selectedItems[item.name] || 0
        total += item.price * quantity
      })
    })

    // Add services cost
    additionalServices.forEach((service) => {
      if (selectedServices.includes(service.name)) {
        total += service.price
      }
    })

    // Add distance multiplier (simulate distance calculation)
    if (pickupAddress && deliveryAddress) {
      const simulatedDistance = Math.floor(Math.random() * 500) + 50
      setDistance(simulatedDistance)
      total += simulatedDistance * 0.5 // $0.50 per mile
    }

    setEstimatedPrice(total)
  }, [selectedItems, selectedServices, pickupAddress, deliveryAddress])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">MovePro</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="#calculator" className="text-gray-600 hover:text-gray-900">
              Calculator
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
              (555) 123-MOVE
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Calculator className="h-4 w-4 mr-2" />
              Get Quote
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
                🚚 Trusted by 50,000+ Families
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Professional Moving
                <span className="block text-blue-600">Made Simple</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get instant quotes, book your move online, and track everything in real-time. Licensed, insured, and
                trusted movers at your service.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Calculator className="h-5 w-5 mr-2" />
                  Get Instant Quote
                </Button>
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: (555) 123-MOVE
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
                src="/images/hero-moving.png"
                alt="Professional moving service"
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
                <p className="text-sm text-gray-600">15,000+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Calculator */}
      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Moving Cost Calculator</h2>
            <p className="text-xl text-gray-600">Get an instant estimate for your move</p>
          </div>

          <Card className="max-w-6xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Calculator className="h-6 w-6 mr-2" />
                Calculate Your Moving Cost
              </CardTitle>
              <CardDescription>Fill in the details below to get an accurate estimate</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Addresses */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Pickup Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Enter pickup address"
                      value={pickupAddress}
                      onChange={(e) => setPickupAddress(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Delivery Address</label>
                  <div className="relative">
                    <Navigation className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Enter delivery address"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Moving Date</label>
                  <Input
                    type="date"
                    value={moveDate}
                    onChange={(e) => setMoveDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={moveTime}
                    onChange={(e) => setMoveTime(e.target.value)}
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

              {/* Items Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Select Items to Move</h3>
                <div className="space-y-6">
                  {movingItems.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h4 className="font-medium text-blue-600 mb-3">{category.category}</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.items.map((item, itemIndex) => (
                          <Card key={itemIndex} className="border-gray-200">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-sm">{item.name}</span>
                                <span className="text-blue-600 font-semibold">${item.price}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">Quantity:</span>
                                <div className="flex items-center space-x-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateItemQuantity(item.name, -1)}
                                    disabled={!selectedItems[item.name]}
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="w-8 text-center">{selectedItems[item.name] || 0}</span>
                                  <Button size="sm" variant="outline" onClick={() => updateItemQuantity(item.name, 1)}>
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Additional Services</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {additionalServices.map((service, index) => (
                    <Card
                      key={index}
                      className={`cursor-pointer transition-all ${
                        selectedServices.includes(service.name) ? "ring-2 ring-blue-500 bg-blue-50" : "hover:shadow-md"
                      }`}
                      onClick={() => toggleService(service.name)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{service.name}</span>
                          <span className="text-blue-600 font-semibold">+${service.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">{service.description}</p>
                        <div className="mt-2">
                          <CheckCircle
                            className={`h-4 w-4 ${
                              selectedServices.includes(service.name) ? "text-blue-600" : "text-gray-300"
                            }`}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Price Summary */}
              {estimatedPrice > 0 && (
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Estimated Total</h3>
                    <div className="text-3xl font-bold text-blue-600">${estimatedPrice}</div>
                  </div>
                  {distance > 0 && <p className="text-sm text-gray-600 mb-4">Estimated distance: {distance} miles</p>}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Calendar className="h-5 w-5 mr-2" />
                      Book This Move
                    </Button>
                    <Button size="lg" className="flex-1 bg-orange-600 hover:bg-orange-700">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Moving Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive moving solutions for residential and commercial needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Image
                  src="/images/packing-service.png"
                  alt="Packing service"
                  width={400}
                  height={250}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Local Moving</h3>
                <p className="text-gray-600 mb-4">
                  Same-city moves with professional packing, loading, and delivery services.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Professional packing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Same-day service available
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Furniture protection
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Quote</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Image
                  src="/images/loading-truck.png"
                  alt="Long distance moving"
                  width={400}
                  height={250}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Long Distance Moving</h3>
                <p className="text-gray-600 mb-4">
                  Interstate and cross-country moves with tracking and insurance coverage.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time tracking
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Full insurance coverage
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Dedicated moving coordinator
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Quote</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Image
                  src="/images/storage-service.png"
                  alt="Storage service"
                  width={400}
                  height={250}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Storage Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Secure, climate-controlled storage facilities for short and long-term needs.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Climate-controlled
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 security monitoring
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Flexible terms
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Quote</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from satisfied customers</p>
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
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Move?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get your instant quote now and book your move with confidence. Professional, reliable, and affordable moving
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Calculator className="h-5 w-5 mr-2" />
              Get Instant Quote
            </Button>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Phone className="h-5 w-5 mr-2" />
              Call: (555) 123-MOVE
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-600 mb-8">
                Need help planning your move? Our moving experts are here to assist you 24/7.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Call Us Now</p>
                    <p className="text-gray-600">(555) 123-MOVE</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Service Areas</p>
                    <p className="text-gray-600">Nationwide coverage with local expertise</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                  <div>
                    <p className="font-semibold">Available Hours</p>
                    <p className="text-gray-600">24/7 Customer Support</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={() => setShowChat(true)}>
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Live Chat
                </Button>
                <Button size="lg" variant="outline">
                  <Headphones className="h-5 w-5 mr-2" />
                  Request Callback
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Request a Callback</CardTitle>
                <CardDescription>We'll call you back within 15 minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Phone Number" />
                <Input placeholder="Email Address" />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Moving From" />
                  <Input placeholder="Moving To" />
                </div>
                <select className="w-full p-2 border rounded-md">
                  <option>Type of Move</option>
                  <option>Local Move</option>
                  <option>Long Distance</option>
                  <option>Commercial Move</option>
                  <option>Storage Only</option>
                </select>
                <Textarea placeholder="Additional details about your move..." rows={3} />
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="urgent" />
                  <label htmlFor="urgent" className="text-sm">
                    This is urgent - call me ASAP
                  </label>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Phone className="h-4 w-4 mr-2" />
                  Request Callback
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
                <Truck className="h-6 w-6 text-blue-500" />
                <span className="text-xl font-bold">MovePro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional moving services with over 20 years of experience. Licensed, insured, and trusted by
                thousands of families.
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
                    Local Moving
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Long Distance Moving
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Commercial Moving
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Storage Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Packing Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li>New York</li>
                <li>Los Angeles</li>
                <li>Chicago</li>
                <li>Houston</li>
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
                <li>Phone: (555) 123-MOVE</li>
                <li>Email: info@movepro.com</li>
                <li>24/7 Customer Support</li>
                <li>Free estimates available</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 MovePro. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed and developed by <span className="text-blue-500 font-semibold">Boad Technologies</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Live Chat Widget */}
      {showChat && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-2xl border z-50">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold">Live Chat</span>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-blue-700"
              onClick={() => setShowChat(false)}
            >
              ×
            </Button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="bg-gray-100 p-3 rounded-lg mb-4">
              <p className="text-sm">Hi! I'm Sarah from MovePro. How can I help you with your move today?</p>
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

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
        <Button
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
          onClick={() => setShowChat(true)}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg"
          onClick={() => window.open("tel:+15551234567", "_self")}
        >
          <Phone className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
