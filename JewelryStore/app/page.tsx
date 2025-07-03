"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingCart, Star, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function JewelryStore() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const featuredProducts = [
    {
      id: 1,
      name: "Ethereal Rose Gold Ring",
      price: 299,
      originalPrice: 399,
      image: "/images/ring-gold.jpg",
      category: "Rings",
      rating: 5,
      reviews: 24,
    },
    {
      id: 2,
      name: "Moonstone Drop Earrings",
      price: 189,
      image: "/images/earrings-moonstone.jpg",
      category: "Earrings",
      rating: 5,
      reviews: 18,
    },
    {
      id: 3,
      name: "Vintage Pearl Necklace",
      price: 459,
      image: "/images/necklace-pearl.jpg",
      category: "Necklaces",
      rating: 5,
      reviews: 31,
    },
    {
      id: 4,
      name: "Artisan Silver Bracelet",
      price: 149,
      image: "/images/bracelet-silver.jpg",
      category: "Bracelets",
      rating: 4,
      reviews: 12,
    },
  ]

  const categories = [
    {
      name: "Rings",
      image: "/images/category-rings.jpg",
      count: 45,
    },
    {
      name: "Earrings",
      image: "/images/category-earrings.jpg",
      count: 38,
    },
    {
      name: "Necklaces",
      image: "/images/category-necklaces.jpg",
      count: 29,
    },
    {
      name: "Bracelets",
      image: "/images/category-bracelets.jpg",
      count: 22,
    },
    {
      name: "Brooches",
      image: "/images/category-brooches.jpg",
      count: 15,
    },
    {
      name: "Custom Pieces",
      image: "/images/category-custom.jpg",
      count: 8,
    },
  ]

  const timelineSteps = [
    {
      step: 1,
      title: "Design Consultation",
      description: "We begin with understanding your vision and preferences through detailed consultation.",
      duration: "1-2 days",
    },
    {
      step: 2,
      title: "Sketch & Approval",
      description: "Our artisans create detailed sketches and 3D renderings for your approval.",
      duration: "3-5 days",
    },
    {
      step: 3,
      title: "Material Selection",
      description: "Choose from our premium collection of metals, gemstones, and materials.",
      duration: "1 day",
    },
    {
      step: 4,
      title: "Handcrafting",
      description: "Master craftsmen bring your design to life with traditional techniques.",
      duration: "7-14 days",
    },
    {
      step: 5,
      title: "Quality Check",
      description: "Rigorous quality inspection ensures perfection in every detail.",
      duration: "1-2 days",
    },
    {
      step: 6,
      title: "Delivery",
      description: "Your unique piece is carefully packaged and delivered to your doorstep.",
      duration: "2-3 days",
    },
  ]

  const instagramPosts = [
    { id: 1, image: "/images/instagram-1.jpg", likes: 234 },
    { id: 2, image: "/images/instagram-2.jpg", likes: 189 },
    { id: 3, image: "/images/instagram-3.jpg", likes: 312 },
    { id: 4, image: "/images/instagram-4.jpg", likes: 156 },
    { id: 5, image: "/images/instagram-5.jpg", likes: 278 },
    { id: 6, image: "/images/instagram-6.jpg", likes: 203 },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full"></div>
              <span className="text-xl font-bold text-gray-900">Boad Crafts</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
                Home
              </Link>
              <Link href="#shop" className="text-gray-700 hover:text-amber-600 transition-colors">
                Shop
              </Link>
              <Link href="#process" className="text-gray-700 hover:text-amber-600 transition-colors">
                Our Process
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">Handcrafted Excellence</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Timeless Jewelry,
                <span className="text-amber-600"> Crafted by Hand</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Discover our collection of exquisite handcrafted jewelry and handicrafts. Each piece tells a story of
                traditional artistry and modern elegance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Shop Collection
                </Button>
                <Button size="lg" variant="outline">
                  Custom Design
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-2xl">
                <Image
                  src="/images/hero-jewelry.jpg"
                  alt="Featured Jewelry"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">500+ Happy Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Collection</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most beloved pieces, each carefully crafted with attention to detail and artistic flair.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={400}
                      className={`w-full h-64 object-cover transition-transform duration-500 ${
                        hoveredProduct === product.id ? "scale-110" : "scale-100"
                      }`}
                    />
                    {product.originalPrice && (
                      <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">Sale</Badge>
                    )}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < product.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Categories */}
      <section id="shop" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse collection of handcrafted jewelry and accessories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.count} items</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It's Made Timeline */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It's Made</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to creation, discover the meticulous process behind each handcrafted piece.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-200 hidden lg:block"></div>

            <div className="space-y-12">
              {timelineSteps.map((step, index) => (
                <div
                  key={step.step}
                  className={`flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:space-x-8`}
                >
                  <div className="flex-1 lg:text-right lg:pr-8">
                    <div className={`${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} text-center lg:text-left`}>
                      <Badge className="mb-2 bg-amber-100 text-amber-800">Step {step.step}</Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <span className="text-sm text-amber-600 font-medium">{step.duration}</span>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-amber-600 rounded-full text-white font-bold my-4 lg:my-0">
                    {step.step}
                  </div>

                  <div className="flex-1 lg:pl-8">
                    <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={`/images/process-${step.step === 1 ? "consultation" : step.step === 2 ? "sketch" : step.step === 3 ? "materials" : step.step === 4 ? "crafting" : step.step === 5 ? "quality" : "delivery"}.jpg`}
                        alt={step.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Follow Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Get inspired by our latest creations and behind-the-scenes moments on Instagram.
            </p>
            <Button
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Follow @boadcrafts
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post) => (
              <div key={post.id} className="group relative cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={`Instagram post ${post.id}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <Heart className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">{post.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full"></div>
                <span className="text-xl font-bold">Boad Crafts</span>
              </div>
              <p className="text-gray-400 mb-6">
                Creating timeless jewelry and handicrafts with traditional artistry and modern elegance.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Custom Orders
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Care Guide
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Customer Care</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@boadcrafts.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>123 Artisan Street, Craft City</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Boad Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
