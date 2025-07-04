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
  Upload,
  FileText,
  MessageCircle,
  Shield,
  Award,
  Users,
  Home,
  Search,
  Filter,
  Download,
  CheckCircle,
  AlertCircle,
  Star,
  Microscope,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [reportId, setReportId] = useState("")

  const testCategories = [
    "All",
    "Blood Tests",
    "Urine Tests",
    "Cardiac Tests",
    "Diabetes Tests",
    "Thyroid Tests",
    "Liver Tests",
    "Kidney Tests",
    "Vitamin Tests",
    "Cancer Screening",
    "Infectious Disease",
    "Allergy Tests",
  ]

  const popularTests = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      category: "Blood Tests",
      price: 299,
      originalPrice: 399,
      description: "Comprehensive blood analysis including RBC, WBC, platelets",
      duration: "4-6 hours",
      fasting: false,
      homeCollection: true,
      popular: true,
    },
    {
      id: 2,
      name: "Lipid Profile",
      category: "Cardiac Tests",
      price: 449,
      originalPrice: 599,
      description: "Cholesterol, triglycerides, HDL, LDL analysis",
      duration: "6-8 hours",
      fasting: true,
      homeCollection: true,
      popular: true,
    },
    {
      id: 3,
      name: "HbA1c (Diabetes Test)",
      category: "Diabetes Tests",
      price: 399,
      originalPrice: 499,
      description: "3-month average blood sugar levels",
      duration: "4-6 hours",
      fasting: false,
      homeCollection: true,
      popular: true,
    },
    {
      id: 4,
      name: "Thyroid Function Test (TSH, T3, T4)",
      category: "Thyroid Tests",
      price: 599,
      originalPrice: 799,
      description: "Complete thyroid hormone analysis",
      duration: "6-8 hours",
      fasting: false,
      homeCollection: true,
      popular: true,
    },
    {
      id: 5,
      name: "Liver Function Test (LFT)",
      category: "Liver Tests",
      price: 349,
      originalPrice: 449,
      description: "SGPT, SGOT, bilirubin, protein analysis",
      duration: "4-6 hours",
      fasting: true,
      homeCollection: true,
      popular: false,
    },
    {
      id: 6,
      name: "Kidney Function Test (KFT)",
      category: "Kidney Tests",
      price: 399,
      originalPrice: 499,
      description: "Creatinine, urea, uric acid analysis",
      duration: "4-6 hours",
      fasting: false,
      homeCollection: true,
      popular: false,
    },
    {
      id: 7,
      name: "Vitamin D Test",
      category: "Vitamin Tests",
      price: 899,
      originalPrice: 1199,
      description: "25-hydroxy vitamin D levels",
      duration: "24-48 hours",
      fasting: false,
      homeCollection: true,
      popular: true,
    },
    {
      id: 8,
      name: "Vitamin B12 Test",
      category: "Vitamin Tests",
      price: 699,
      originalPrice: 899,
      description: "Cobalamin levels in blood",
      duration: "6-8 hours",
      fasting: false,
      homeCollection: true,
      popular: false,
    },
  ]

  const healthPackages = [
    {
      name: "Basic Health Checkup",
      price: 1499,
      originalPrice: 2499,
      tests: 25,
      includes: ["CBC", "Lipid Profile", "Blood Sugar", "Urine Analysis", "Thyroid (TSH)"],
      popular: false,
    },
    {
      name: "Comprehensive Health Checkup",
      price: 2999,
      originalPrice: 4999,
      tests: 50,
      includes: ["All Basic Tests", "Liver Function", "Kidney Function", "Vitamin D", "HbA1c", "ECG"],
      popular: true,
    },
    {
      name: "Executive Health Checkup",
      price: 4999,
      originalPrice: 7999,
      tests: 75,
      includes: ["All Comprehensive Tests", "Cancer Markers", "Cardiac Risk", "Full Body Scan", "Consultation"],
      popular: false,
    },
  ]

  const filteredTests = popularTests.filter((test) => {
    const matchesCategory = selectedCategory === "All" || test.category === selectedCategory
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleWhatsAppSupport = () => {
    const message = "Hi! I need help with lab test booking. Can you assist me?"
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Microscope className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">HealthLab Pro</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#tests" className="text-gray-600 hover:text-gray-900">
              Tests
            </Link>
            <Link href="#packages" className="text-gray-600 hover:text-gray-900">
              Packages
            </Link>
            <Link href="#home-collection" className="text-gray-600 hover:text-gray-900">
              Home Collection
            </Link>
            <Link href="#reports" className="text-gray-600 hover:text-gray-900">
              Track Reports
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={handleWhatsAppSupport} className="hidden sm:flex">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="h-4 w-4 mr-2" />
              Book Test
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">🏥 NABL Accredited Lab</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Accurate Lab Tests
                <span className="block text-blue-600">At Your Doorstep</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Book lab tests online with free home sample collection. Get accurate reports within 24 hours from our
                NABL accredited laboratory.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Home className="h-5 w-5 mr-2" />
                  Book Home Collection
                </Button>
                <Button size="lg" variant="outline">
                  <FileText className="h-5 w-5 mr-2" />
                  Upload Prescription
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  NABL Accredited
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  ISO Certified
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  1M+ Tests Done
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/hero-lab.png"
                alt="Laboratory testing"
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
                <p className="text-sm text-gray-600">50,000+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <Home className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Home Collection</h3>
                <p className="text-sm text-gray-600">Free sample collection at your home</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <Upload className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Upload Prescription</h3>
                <p className="text-sm text-gray-600">Upload doctor's prescription easily</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Track Reports</h3>
                <p className="text-sm text-gray-600">Track your test reports online</p>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-shadow cursor-pointer"
              onClick={handleWhatsAppSupport}
            >
              <CardContent className="pt-6">
                <MessageCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">WhatsApp Support</h3>
                <p className="text-sm text-gray-600">Get instant help via WhatsApp</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Test Categories & Search */}
      <section id="tests" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Lab Tests</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of diagnostic tests with transparent pricing and quick results.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search for tests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="md:w-auto">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {testCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-blue-600 text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Test Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests.map((test) => (
              <Card key={test.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{test.name}</CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {test.category}
                      </Badge>
                    </div>
                    {test.popular && <Badge className="bg-orange-500 text-white">Popular</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{test.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Report in {test.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Home className="h-4 w-4 mr-2" />
                      {test.homeCollection ? "Home collection available" : "Lab visit required"}
                    </div>
                    {test.fasting && (
                      <div className="flex items-center text-sm text-orange-600">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Fasting required
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">₹{test.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">₹{test.originalPrice}</span>
                    </div>
                    <Badge variant="secondary" className="text-green-600">
                      {Math.round(((test.originalPrice - test.price) / test.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Book Now</Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Packages */}
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Health Checkup Packages</h2>
            <p className="text-xl text-gray-600">Comprehensive health packages at discounted prices</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {healthPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? "ring-2 ring-blue-500" : ""}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-blue-600">₹{pkg.price}</span>
                    <span className="text-gray-500 line-through">₹{pkg.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-600">{pkg.tests} tests included</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Package</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Home Collection */}
      <section id="home-collection" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Free Home Sample Collection</h2>
              <p className="text-xl text-gray-600 mb-8">
                Skip the lab visit! Our certified phlebotomists will collect your samples from the comfort of your home
                at no extra cost.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Book Online</h4>
                    <p className="text-gray-600">Schedule your preferred time slot</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sample Collection</h4>
                    <p className="text-gray-600">Certified technician visits your home</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Get Reports</h4>
                    <p className="text-gray-600">Receive reports via email/WhatsApp</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Home className="h-5 w-5 mr-2" />
                Schedule Home Collection
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/images/home-collection.png"
                alt="Home sample collection"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upload Prescription & Track Reports */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Upload Prescription */}
            <Card className="p-8">
              <CardHeader className="text-center">
                <Upload className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Upload Prescription</CardTitle>
                <CardDescription>
                  Upload your doctor's prescription and we'll help you book the required tests
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Drag and drop your prescription here</p>
                  <Button variant="outline">Choose File</Button>
                </div>
                <div className="space-y-2">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Phone Number" />
                  <Input placeholder="Email Address" />
                  <Textarea placeholder="Additional notes (optional)" rows={3} />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Upload & Get Quote</Button>
              </CardContent>
            </Card>

            {/* Track Reports */}
            <Card className="p-8">
              <CardHeader className="text-center">
                <FileText className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Track Test Reports</CardTitle>
                <CardDescription>Enter your report ID or phone number to track your test results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Report ID or Phone Number</label>
                  <Input
                    placeholder="Enter Report ID or Phone Number"
                    value={reportId}
                    onChange={(e) => setReportId(e.target.value)}
                  />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Search className="h-4 w-4 mr-2" />
                  Track Report
                </Button>

                {reportId && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Report Status</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Sample collected</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Processing in lab</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-sm">Report generation in progress</span>
                      </div>
                    </div>
                    <Button size="sm" className="mt-4" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose HealthLab Pro?</h2>
            <p className="text-xl text-gray-600">Trusted by over 1 million customers across the country</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">NABL Accredited</h3>
              <p className="text-gray-600">Government certified lab with highest quality standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Home Collection</h3>
              <p className="text-gray-600">Convenient sample collection at your doorstep</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Reports</h3>
              <p className="text-gray-600">Get accurate reports within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support via WhatsApp</p>
            </div>
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
                Have questions? Need help booking a test? Our team is here to assist you 24/7.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Phone Support</p>
                    <p className="text-gray-600">1800-123-4567 (Toll Free)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold">WhatsApp Support</p>
                    <p className="text-gray-600">+91 98765-43210</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-semibold">Lab Locations</p>
                    <p className="text-gray-600">50+ centers across major cities</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 mr-4" onClick={handleWhatsAppSupport}>
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Support
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quick Booking</CardTitle>
                <CardDescription>Book your test in just 2 minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Phone Number" />
                <Input placeholder="Email Address" />
                <Input placeholder="Pincode" />
                <select className="w-full p-2 border rounded-md">
                  <option>Select Test Category</option>
                  <option>Blood Tests</option>
                  <option>Urine Tests</option>
                  <option>Health Packages</option>
                  <option>Cardiac Tests</option>
                </select>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="home-collection" />
                  <label htmlFor="home-collection" className="text-sm">
                    I want home sample collection
                  </label>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Now
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
                <Microscope className="h-6 w-6 text-blue-500" />
                <span className="text-xl font-bold">HealthLab Pro</span>
              </div>
              <p className="text-gray-400 mb-4">
                NABL accredited diagnostic center providing accurate lab tests with free home sample collection across
                India.
              </p>
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="text-sm">NABL Accredited</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">ISO 15189 Certified</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Popular Tests</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Complete Blood Count
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Lipid Profile
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Thyroid Function
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Diabetes Tests
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Vitamin Tests
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Home Collection
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Health Packages
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Corporate Health
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Prescription Upload
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Report Tracking
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Toll Free: 1800-123-4567</li>
                <li>WhatsApp: +91 98765-43210</li>
                <li>Email: support@healthlabpro.com</li>
                <li>24/7 Customer Support</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 HealthLab Pro. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed and developed by <span className="text-blue-500 font-semibold">Boad Technologies</span>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <button
        onClick={handleWhatsAppSupport}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  )
}
