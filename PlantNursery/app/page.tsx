import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Sprout, TreePine, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">GreenThumb Nursery</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#plants" className="text-green-700 hover:text-green-600 font-medium">
                Plants
              </Link>
              <Link href="#tips" className="text-green-700 hover:text-green-600 font-medium">
                Garden Tips
              </Link>
              <Link href="#services" className="text-green-700 hover:text-green-600 font-medium">
                Services
              </Link>
              <Link href="#booking" className="text-green-700 hover:text-green-600 font-medium">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">Grow Your Dream Garden</h1>
          <p className="text-xl text-green-600 mb-8 max-w-2xl mx-auto">
            Discover premium plants, expert gardening tips, and professional landscaping services to transform your
            outdoor space into a natural paradise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              <Link href="#plants">Browse Plants</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 bg-transparent"
            >
              <Link href="#booking">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Sprout className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Premium Plants</h3>
                <p className="text-green-600">
                  Carefully selected indoor and outdoor plants for every space and skill level.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Expert Guidance</h3>
                <p className="text-green-600">
                  Professional advice and tips from experienced horticulturists and landscapers.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Landscaping Services</h3>
                <p className="text-green-600">
                  Complete garden design and maintenance services for residential and commercial spaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plant Preview */}
      <section id="plants" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Featured Plants</h2>
            <p className="text-green-600 text-lg">Discover our most popular plants for every garden</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Indoor Plants"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-green-800 mb-2">Indoor Plants</h3>
                <p className="text-green-600 text-sm">Perfect for brightening up your home</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Outdoor Plants"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-green-800 mb-2">Outdoor Plants</h3>
                <p className="text-green-600 text-sm">Hardy plants for your garden and patio</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Herbs"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-green-800 mb-2">Fresh Herbs</h3>
                <p className="text-green-600 text-sm">Grow your own culinary herbs</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button className="bg-green-600 hover:bg-green-700">
              <Link href="/plants">View All Plants</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6" />
                <span className="text-xl font-bold">GreenThumb Nursery</span>
              </div>
              <p className="text-green-200">Growing beautiful gardens since 1995</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-green-200">
                <li>
                  <Link href="/plants" className="hover:text-white">
                    Plants
                  </Link>
                </li>
                <li>
                  <Link href="/tips" className="hover:text-white">
                    Garden Tips
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/booking" className="hover:text-white">
                    Book Now
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-green-200">
                <li>123 Garden Street</li>
                <li>Green Valley, CA 90210</li>
                <li>(555) 123-4567</li>
                <li>info@greenthumb.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-green-200">
                <li>Mon-Fri: 8am-6pm</li>
                <li>Saturday: 8am-5pm</li>
                <li>Sunday: 10am-4pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 GreenThumb Nursery. Powered by Boad Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
