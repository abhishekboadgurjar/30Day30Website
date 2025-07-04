"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Calendar,
  Star,
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Heart,
  ChevronLeft,
  ChevronRight,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const lookbookItems = [
    {
      id: 1,
      image: "/images/lookbook-1.jpg",
      title: "Evening Elegance",
      category: "Evening",
      price: "$1,200",
      description: "Sophisticated black evening gown with intricate beadwork",
    },
    {
      id: 2,
      image: "/images/lookbook-2.jpg",
      title: "Casual Chic",
      category: "Casual",
      price: "$450",
      description: "Effortless everyday style with modern silhouette",
    },
    {
      id: 3,
      image: "/images/lookbook-3.jpg",
      title: "Bridal Dreams",
      category: "Bridal",
      price: "$2,800",
      description: "Timeless bridal gown with delicate lace details",
    },
    {
      id: 4,
      image: "/images/lookbook-4.jpg",
      title: "Business Power",
      category: "Business",
      price: "$680",
      description: "Professional yet feminine business attire",
    },
    {
      id: 5,
      image: "/images/lookbook-5.jpg",
      title: "Cocktail Hour",
      category: "Cocktail",
      price: "$850",
      description: "Perfect for special occasions and celebrations",
    },
    {
      id: 6,
      image: "/images/lookbook-6.jpg",
      title: "Summer Breeze",
      category: "Casual",
      price: "$380",
      description: "Light and airy summer collection piece",
    },
  ]

  const testimonials = [
    {
      name: "Isabella Rodriguez",
      text: "Absolutely stunning work! The custom gown exceeded all my expectations. The attention to detail and perfect fit made me feel like a queen on my wedding day.",
      rating: 5,
      occasion: "Wedding Dress",
    },
    {
      name: "Emma Thompson",
      text: "Professional, creative, and incredibly talented. The consultation process was thorough and the final piece was exactly what I envisioned.",
      rating: 5,
      occasion: "Evening Gown",
    },
    {
      name: "Sophia Chen",
      text: "The quality of craftsmanship is exceptional. Every stitch is perfect and the design is both timeless and modern. Highly recommend!",
      rating: 5,
      occasion: "Cocktail Dress",
    },
    {
      name: "Olivia Johnson",
      text: "From concept to creation, the entire experience was wonderful. The designer truly understands how to make women feel beautiful and confident.",
      rating: 5,
      occasion: "Business Suit",
    },
  ]

  const instagramPosts = [
    { image: "/images/instagram-1.jpg", likes: "2,341", caption: "Behind the scenes of our latest photoshoot ✨" },
    { image: "/images/instagram-2.jpg", likes: "1,892", caption: "New collection preview 👗" },
    { image: "/images/instagram-3.jpg", likes: "3,156", caption: "Custom bridal consultation today 💍" },
    { image: "/images/instagram-4.jpg", likes: "2,678", caption: "Sustainable fashion is the future 🌱" },
  ]

  const categories = ["All", "Evening", "Bridal", "Casual", "Business", "Cocktail"]

  const filteredLookbook =
    selectedCategory === "All" ? lookbookItems : lookbookItems.filter((item) => item.category === selectedCategory)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const handleWhatsAppOrder = (item: any) => {
    const message = `Hi! I'm interested in ordering "${item.title}" (${item.price}). Could you please provide more details?`
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-gold-500" />
            <span className="text-2xl font-serif font-bold text-gray-900">Élégance Atelier</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#lookbook" className="text-gray-600 hover:text-gray-900 font-medium">
              Lookbook
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900 font-medium">
              About
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-gray-900 font-medium">
              Services
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 font-medium">
              Reviews
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">
              Contact
            </Link>
          </nav>
          <Button className="bg-black hover:bg-gray-800 text-white">
            <Calendar className="h-4 w-4 mr-2" />
            Book Consultation
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image src="/images/hero-fashion.jpg" alt="Fashion designer showcase" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-serif font-light mb-6">
            Couture
            <span className="block font-bold">Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Bespoke fashion design where artistry meets elegance. Each piece tells your unique story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              <Calendar className="h-5 w-5 mr-2" />
              Book Fitting
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              View Lookbook
            </Button>
          </div>
        </div>
      </section>

      {/* Lookbook Section */}
      <section id="lookbook" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Latest Collection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our curated selection of bespoke designs, each crafted with meticulous attention to detail and
              timeless elegance.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-black text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Lookbook Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLookbook.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                      <Button
                        className="bg-white text-black hover:bg-gray-100 w-full"
                        onClick={() => handleWhatsAppOrder(item)}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Order via WhatsApp
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black w-full"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-black">{item.price}</span>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => handleWhatsAppOrder(item)}
                    >
                      <MessageCircle className="h-4 w-4 mr-1" />
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/designer-portrait.jpg"
                alt="Fashion Designer"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="h-5 w-5 text-gold-500" />
                  <span className="font-semibold">15+ Years</span>
                </div>
                <p className="text-sm">Couture Experience</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Meet the Designer</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience in haute couture, I believe that fashion is more than clothing—it's an
                expression of your inner beauty and confidence. Each piece I create is a collaboration between your
                vision and my craftsmanship.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From red carpet gowns to everyday elegance, I specialize in creating pieces that make you feel
                extraordinary. My atelier combines traditional techniques with contemporary design, ensuring every
                garment is both timeless and uniquely yours.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">500+</div>
                  <div className="text-gray-600">Custom Pieces</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">From concept to creation, we offer comprehensive fashion services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Custom Design</h3>
                <p className="text-gray-600 mb-4">Bespoke pieces tailored to your vision and measurements</p>
                <p className="text-2xl font-bold text-black">From $800</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Bridal Couture</h3>
                <p className="text-gray-600 mb-4">Dream wedding dresses and bridal party attire</p>
                <p className="text-2xl font-bold text-black">From $2,500</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Alterations</h3>
                <p className="text-gray-600 mb-4">Expert alterations and garment modifications</p>
                <p className="text-2xl font-bold text-black">From $150</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Consultation</h3>
                <p className="text-gray-600 mb-4">Personal styling and wardrobe consultation</p>
                <p className="text-2xl font-bold text-black">$200/hour</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Client Love</h2>
            <p className="text-xl text-gray-300">What our clients say about their experience</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl font-light mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="mb-4">
                <p className="text-xl font-semibold">{testimonials[currentTestimonial].name}</p>
                <p className="text-gray-400">{testimonials[currentTestimonial].occasion}</p>
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-white" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Instagram className="h-8 w-8 text-pink-500" />
              <h2 className="text-4xl font-serif font-bold text-gray-900">Follow Our Journey</h2>
            </div>
            <p className="text-xl text-gray-600">@eleganceatelier</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post, index) => (
              <div key={index} className="relative group cursor-pointer">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={`Instagram post ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-64 rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <Heart className="h-6 w-6 mx-auto mb-2" />
                    <p className="font-semibold">{post.likes} likes</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
            >
              <Instagram className="h-5 w-5 mr-2" />
              Follow @eleganceatelier
            </Button>
          </div>
        </div>
      </section>

      {/* Contact/Booking Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Book Your Consultation</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to create something extraordinary? Let's discuss your vision and bring it to life.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-black" />
                  <div>
                    <p className="font-semibold">Atelier Location</p>
                    <p className="text-gray-600">123 Fashion District, New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-black" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">(555) 123-STYLE</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-black" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">hello@eleganceatelier.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-black" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-gray-600">Tue-Sat: 10AM-6PM, By appointment only</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Consultation
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Schedule Your Fitting</CardTitle>
                <CardDescription>Fill out the form below and we'll contact you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name</label>
                    <Input placeholder="Isabella" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name</label>
                    <Input placeholder="Rodriguez" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input type="email" placeholder="isabella@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <Input type="tel" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Service Interest</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Select a service</option>
                    <option>Custom Design</option>
                    <option>Bridal Couture</option>
                    <option>Alterations</option>
                    <option>Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Event Date (if applicable)</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Tell us about your vision</label>
                  <Textarea placeholder="Describe your dream piece or occasion..." rows={4} />
                </div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  Request Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-gold-500" />
                <span className="text-xl font-serif font-bold">Élégance Atelier</span>
              </div>
              <p className="text-gray-400 mb-4">
                Bespoke fashion design where artistry meets elegance. Creating timeless pieces that celebrate your
                unique style.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Custom Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Bridal Couture
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Alterations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Consultation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Collections</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Evening Wear
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Bridal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Casual Chic
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Business Attire
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Fashion District</li>
                <li>New York, NY 10001</li>
                <li>(555) 123-STYLE</li>
                <li>hello@eleganceatelier.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Élégance Atelier. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed and developed by <span className="text-gold-500 font-semibold">Boad Technologies</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
