"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Leaf, ArrowLeft, Calendar, MapPin, Phone, Mail } from "lucide-react"

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    propertySize: "",
    preferredDate: "",
    preferredTime: "",
    budget: "",
    description: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you! We'll contact you within 24 hours to confirm your consultation.")
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-green-600" />
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">GreenThumb Nursery</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-800 mb-4">Book Your Landscaping Consultation</h1>
            <p className="text-green-600 text-lg">
              Let our experts help you create the garden of your dreams. Free consultation included!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Consultation Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-green-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="border-green-200 focus:border-green-500"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-green-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="border-green-200 focus:border-green-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-green-700">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="border-green-200 focus:border-green-500"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="address" className="text-green-700">
                          Property Address *
                        </Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          className="border-green-200 focus:border-green-500"
                          required
                        />
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="serviceType" className="text-green-700">
                          Service Type *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                          <SelectTrigger className="border-green-200 focus:border-green-500">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="garden-design">Garden Design</SelectItem>
                            <SelectItem value="landscaping">Full Landscaping</SelectItem>
                            <SelectItem value="maintenance">Garden Maintenance</SelectItem>
                            <SelectItem value="consultation">Consultation Only</SelectItem>
                            <SelectItem value="plant-installation">Plant Installation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="propertySize" className="text-green-700">
                          Property Size
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("propertySize", value)}>
                          <SelectTrigger className="border-green-200 focus:border-green-500">
                            <SelectValue placeholder="Select property size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small (Under 1000 sq ft)</SelectItem>
                            <SelectItem value="medium">Medium (1000-5000 sq ft)</SelectItem>
                            <SelectItem value="large">Large (5000-10000 sq ft)</SelectItem>
                            <SelectItem value="xlarge">Extra Large (Over 10000 sq ft)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Scheduling */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferredDate" className="text-green-700">
                          Preferred Date
                        </Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                          className="border-green-200 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredTime" className="text-green-700">
                          Preferred Time
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                          <SelectTrigger className="border-green-200 focus:border-green-500">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8am-12pm)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12pm-5pm)</SelectItem>
                            <SelectItem value="evening">Evening (5pm-7pm)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <Label htmlFor="budget" className="text-green-700">
                        Estimated Budget Range
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="border-green-200 focus:border-green-500">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1000">Under $1,000</SelectItem>
                          <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                          <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
                          <SelectItem value="over-25000">Over $25,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Project Description */}
                    <div>
                      <Label htmlFor="description" className="text-green-700">
                        Project Description
                      </Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Tell us about your vision, specific requirements, or any questions you have..."
                        className="border-green-200 focus:border-green-500 min-h-[100px]"
                      />
                    </div>

                    {/* Newsletter Signup */}
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-green-700 text-sm">
                        Subscribe to our newsletter for gardening tips and special offers
                      </Label>
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                      Book Free Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span className="text-green-700">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <span className="text-green-700">info@greenthumb.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span className="text-green-700">
                      123 Garden Street
                      <br />
                      Green Valley, CA 90210
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Services */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Our Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-green-700">
                    <li>• Garden Design & Planning</li>
                    <li>• Complete Landscaping</li>
                    <li>• Plant Installation</li>
                    <li>• Irrigation Systems</li>
                    <li>• Ongoing Maintenance</li>
                    <li>• Seasonal Cleanup</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Consultation Info */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-800">Free Consultation</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    Our initial consultation is completely free! We'll visit your property, discuss your vision, and
                    provide expert recommendations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
