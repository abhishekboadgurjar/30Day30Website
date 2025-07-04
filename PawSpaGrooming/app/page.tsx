import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Heart, MapPin, Phone, Star, Sparkles, Shield, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const services = [
    {
      name: "Basic Grooming",
      price: "$45-65",
      duration: "2-3 hours",
      includes: ["Bath & Blow Dry", "Nail Trim", "Ear Cleaning", "Basic Brush Out"],
      popular: false,
    },
    {
      name: "Full Service Grooming",
      price: "$75-95",
      duration: "3-4 hours",
      includes: ["Everything in Basic", "Hair Cut & Styling", "Teeth Brushing", "Cologne Spritz", "Bow or Bandana"],
      popular: true,
    },
    {
      name: "Luxury Spa Package",
      price: "$120-150",
      duration: "4-5 hours",
      includes: [
        "Everything in Full Service",
        "Deep Conditioning Treatment",
        "Nail Polish",
        "Aromatherapy",
        "Photo Session",
      ],
      popular: false,
    },
    {
      name: "Nail Trim Only",
      price: "$15",
      duration: "15 mins",
      includes: ["Quick nail trim", "Nail filing"],
      popular: false,
    },
  ]

  const blogPosts = [
    {
      title: "5 Signs Your Dog Needs Professional Grooming",
      excerpt: "Learn to recognize when your furry friend needs expert care beyond regular brushing.",
      date: "Dec 10, 2024",
      readTime: "4 min read",
      image: "/images/blog-1.jpg",
    },
    {
      title: "Winter Pet Care: Keeping Your Pet's Coat Healthy",
      excerpt: "Essential tips for maintaining your pet's skin and coat during the colder months.",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      image: "/images/blog-2.jpg",
    },
    {
      title: "How to Prepare Your Pet for Their First Grooming",
      excerpt: "Make your pet's first grooming experience stress-free with these helpful preparation tips.",
      date: "Nov 28, 2024",
      readTime: "5 min read",
      image: "/images/blog-3.jpg",
    },
  ]

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Amazing service! My golden retriever Max looks absolutely gorgeous after his grooming session. The staff was so gentle and caring.",
      date: "2 weeks ago",
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Best pet grooming in town! They transformed my scruffy rescue dog into a show-stopper. Highly recommend!",
      date: "1 month ago",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "Professional, caring, and reasonably priced. My cat actually seemed to enjoy the experience, which says a lot!",
      date: "3 weeks ago",
    },
  ]

  const galleryImages = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold text-gray-900">PawSpa Grooming</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="#gallery" className="text-gray-600 hover:text-gray-900">
              Gallery
            </Link>
            <Link href="#blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Link href="#reviews" className="text-gray-600 hover:text-gray-900">
              Reviews
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <Button className="bg-pink-500 hover:bg-pink-600">
            <Calendar className="h-4 w-4 mr-2" />
            Book Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-pink-100 text-pink-700 hover:bg-pink-100">
                ⭐ #1 Rated Pet Grooming Service
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Premium Pet Grooming & Spa Services</h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your furry friend with our professional grooming services. Expert care, gentle handling, and
                stunning results guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (555) 123-PAWS
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Same Day Booking
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  Insured & Bonded
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  Certified Groomers
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-dog.jpg"
                alt="Happy groomed dog"
                width={500}
                height={600}
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
                <p className="text-sm text-gray-600">500+ Happy Pets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Grooming Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From basic baths to luxury spa treatments, we offer comprehensive grooming services tailored to your pet's
              needs and your budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className={`relative ${service.popular ? "ring-2 ring-pink-500" : ""}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-pink-500">{service.price}</span>
                    <span className="text-gray-500">({service.duration})</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Sparkles className="h-4 w-4 text-pink-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-pink-500 hover:bg-pink-600">Book This Service</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Before & After Gallery</h2>
            <p className="text-xl text-gray-600">See the amazing transformations our expert groomers achieve</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Groomed pet ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pet Care Tips & Insights</h2>
            <p className="text-xl text-gray-600">
              Expert advice to keep your pets healthy and happy between grooming sessions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-pink-500 transition-colors">
                    <Link href="#">{post.title}</Link>
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="text-pink-500 hover:text-pink-600 font-medium">
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Pet Parents Say</h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <span className="text-xl font-semibold">4.9/5</span>
              <span className="text-gray-600">(500+ Google Reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{review.name}</span>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Read All Reviews on Google
            </Button>
          </div>
        </div>
      </section>

      {/* Contact/Booking Section */}
      <section id="contact" className="py-20 bg-pink-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Pamper Your Pet?</h2>
              <p className="text-xl mb-8 text-pink-100">
                Book your appointment today and give your furry friend the royal treatment they deserve.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>123 Pet Street, Dogtown, CA 90210</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>(555) 123-PAWS</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3" />
                  <span>Mon-Sat: 8AM-6PM, Sun: 10AM-4PM</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-pink-500 hover:bg-gray-100">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Online
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pink-500"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle>Quick Booking Form</CardTitle>
                <CardDescription>We'll call you back within 2 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Pet Name</label>
                    <input type="text" className="w-full p-2 border rounded-md" placeholder="Fluffy" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Pet Type</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Dog</option>
                      <option>Cat</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Your Name</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input type="tel" className="w-full p-2 border rounded-md" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Service Needed</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Basic Grooming</option>
                    <option>Full Service Grooming</option>
                    <option>Luxury Spa Package</option>
                    <option>Nail Trim Only</option>
                  </select>
                </div>
                <Button className="w-full bg-pink-500 hover:bg-pink-600">Request Callback</Button>
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
                <Heart className="h-6 w-6 text-pink-500" />
                <span className="text-xl font-bold">PawSpa Grooming</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional pet grooming services with love and care for over 10 years.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  Facebook
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  Instagram
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Dog Grooming
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cat Grooming
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Nail Trimming
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Spa Treatments
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
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Pet Street</li>
                <li>Dogtown, CA 90210</li>
                <li>(555) 123-PAWS</li>
                <li>info@pawspagrooming.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 PawSpa Grooming. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed and developed by <span className="text-pink-500 font-semibold">Boad Technologies</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
