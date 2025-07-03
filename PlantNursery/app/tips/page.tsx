import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, ArrowLeft, Calendar, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Indoor Plant Care",
    excerpt: "Learn the fundamentals of keeping your houseplants healthy and thriving year-round.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Indoor Gardening",
    author: "Sarah Green",
    date: "March 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Creating a Sustainable Garden Ecosystem",
    excerpt: "Discover how to build a garden that supports local wildlife and reduces environmental impact.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Sustainability",
    author: "Mike Thompson",
    date: "March 12, 2024",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Herb Garden Basics: From Seed to Harvest",
    excerpt: "Everything you need to know about growing fresh herbs in your kitchen garden.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Herbs",
    author: "Lisa Chen",
    date: "March 10, 2024",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Seasonal Planting Guide for Spring",
    excerpt: "Make the most of spring planting season with our comprehensive guide to timing and techniques.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Seasonal",
    author: "David Wilson",
    date: "March 8, 2024",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Troubleshooting Common Plant Problems",
    excerpt: "Identify and solve the most frequent issues that affect both indoor and outdoor plants.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Plant Care",
    author: "Emma Rodriguez",
    date: "March 5, 2024",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "Water-Wise Gardening Techniques",
    excerpt: "Learn how to create a beautiful garden while conserving water and reducing maintenance.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Water Conservation",
    author: "Tom Anderson",
    date: "March 3, 2024",
    readTime: "9 min read",
  },
]

export default function TipsPage() {
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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Gardening Tips & Guides</h1>
          <p className="text-green-600 text-lg max-w-2xl mx-auto">
            Expert advice and practical tips to help you grow a thriving garden. From beginner basics to advanced
            techniques.
          </p>
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden border-green-200 hover:shadow-lg transition-shadow">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                width={400}
                height={300}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <Badge className="bg-green-100 text-green-700 mb-4">Featured</Badge>
              <h2 className="text-3xl font-bold text-green-800 mb-4">{blogPosts[0].title}</h2>
              <p className="text-green-600 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center text-sm text-green-500 mb-4">
                <User className="h-4 w-4 mr-2" />
                <span className="mr-4">{blogPosts[0].author}</span>
                <Calendar className="h-4 w-4 mr-2" />
                <span className="mr-4">{blogPosts[0].date}</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <Link
                href={`/tips/${blogPosts[0].id}`}
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="overflow-hidden border-green-200 hover:shadow-lg transition-shadow">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <Badge variant="secondary" className="bg-green-100 text-green-700 mb-3">
                  {post.category}
                </Badge>
                <h3 className="text-xl font-semibold text-green-800 mb-3">{post.title}</h3>
                <p className="text-green-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-green-500 mb-4">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-500">{post.readTime}</span>
                  <Link href={`/tips/${post.id}`} className="text-green-600 hover:text-green-700 font-medium">
                    Read More →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 bg-green-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Garden Tips</h3>
            <p className="mb-6">Get weekly gardening tips and seasonal advice delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-green-800"
              />
              <button className="bg-white text-green-600 px-6 py-2 rounded-md font-medium hover:bg-green-50 transition-colors">
                Subscribe
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
