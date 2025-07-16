"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Play,
  Calendar,
  MapPin,
  Clock,
  Star,
  Music,
  Headphones,
  Instagram,
  ExternalLink,
  Mail,
  Phone,
  Download,
  Users,
  Award,
  Ticket,
  Volume2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const portfolioItems = [
    {
      id: 1,
      type: "video",
      title: "Live at Madison Square Garden",
      description: "Sold-out performance of my latest single 'Electric Dreams'",
      thumbnail: "/images/performance-1.png",
      duration: "4:32",
      views: "2.1M",
    },
    {
      id: 2,
      type: "video",
      title: "Acoustic Session - 'Midnight Blues'",
      description: "Intimate acoustic performance from my home studio",
      thumbnail: "/images/performance-2.png",
      duration: "3:45",
      views: "856K",
    },
    {
      id: 3,
      type: "video",
      title: "Behind the Scenes - Album Recording",
      description: "Exclusive look at the making of my latest album",
      thumbnail: "/images/studio-session.png",
      duration: "6:18",
      views: "1.3M",
    },
    {
      id: 4,
      type: "video",
      title: "Festival Highlights Reel",
      description: "Best moments from summer festival tour 2024",
      thumbnail: "/images/performance-3.png",
      duration: "5:22",
      views: "3.2M",
    },
  ]

  const upcomingEvents = [
    {
      date: "2024-12-28",
      venue: "The Fillmore",
      city: "San Francisco, CA",
      time: "8:00 PM",
      ticketLink: "https://ticketmaster.com",
      price: "$45-85",
      status: "On Sale",
    },
    {
      date: "2024-12-30",
      venue: "House of Blues",
      city: "Los Angeles, CA",
      time: "9:00 PM",
      ticketLink: "https://ticketmaster.com",
      price: "$55-95",
      status: "Almost Sold Out",
    },
    {
      date: "2025-01-05",
      venue: "Brooklyn Bowl",
      city: "New York, NY",
      time: "8:30 PM",
      ticketLink: "https://ticketmaster.com",
      price: "$40-75",
      status: "On Sale",
    },
    {
      date: "2025-01-12",
      venue: "The Observatory",
      city: "Santa Ana, CA",
      time: "7:30 PM",
      ticketLink: "https://ticketmaster.com",
      price: "$35-65",
      status: "VIP Available",
    },
  ]

  const pressReviews = [
    {
      publication: "Rolling Stone",
      quote:
        "A mesmerizing performance that showcases incredible vocal range and stage presence. This artist is destined for greatness.",
      rating: 5,
      date: "November 2024",
      logo: "/placeholder.svg?height=40&width=120",
    },
    {
      publication: "Billboard",
      quote:
        "The latest album demonstrates remarkable growth as a songwriter and performer. Each track tells a compelling story.",
      rating: 4.5,
      date: "October 2024",
      logo: "/placeholder.svg?height=40&width=120",
    },
    {
      publication: "Pitchfork",
      quote: "An authentic voice in today's music landscape. The live performance energy is absolutely electric.",
      rating: 4,
      date: "September 2024",
      logo: "/placeholder.svg?height=40&width=120",
    },
    {
      publication: "NME",
      quote: "Bold, innovative, and utterly captivating. This is what the future of music sounds like.",
      rating: 5,
      date: "August 2024",
      logo: "/placeholder.svg?height=40&width=120",
    },
  ]

  const instagramPosts = [
    { image: "/images/instagram-1.png", likes: "12.4K", caption: "Studio vibes ✨ Working on something special" },
    { image: "/images/instagram-2.png", likes: "8.7K", caption: "Soundcheck before tonight's show 🎤" },
    { image: "/images/instagram-3.png", likes: "15.2K", caption: "Thank you Chicago! What an incredible night 🔥" },
    { image: "/images/instagram-4.png", likes: "9.8K", caption: "New merch drop coming soon 👕" },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold">ALEX RIVERA</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link href="#events" className="text-gray-300 hover:text-white transition-colors">
              Tour
            </Link>
            <Link href="#press" className="text-gray-300 hover:text-white transition-colors">
              Press
            </Link>
            <Link href="#booking" className="text-gray-300 hover:text-white transition-colors">
              Booking
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Headphones className="h-4 w-4 mr-2" />
            Listen Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image src="/images/hero-musician.png" alt="Alex Rivera performing" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-purple-600 text-white hover:bg-purple-600">🎵 New Album Out Now</Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            ALEX
            <span className="block text-purple-400">RIVERA</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">Singer • Songwriter • Producer</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Play className="h-5 w-5 mr-2" />
              Play Latest Single
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Calendar className="h-5 w-5 mr-2" />
              View Tour Dates
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              2.5M Monthly Listeners
            </div>
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-1" />
              Grammy Nominated
            </div>
            <div className="flex items-center">
              <Ticket className="h-4 w-4 mr-1" />
              50+ Cities Toured
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Video Gallery */}
      <section id="portfolio" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest Performances</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience my music through live performances, studio sessions, and behind-the-scenes content.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured Video */}
            <div className="lg:col-span-1">
              <Card className="bg-gray-900 border-gray-700 overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={portfolioItems[selectedVideo].thumbnail || "/placeholder.svg"}
                    alt={portfolioItems[selectedVideo].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700 rounded-full w-16 h-16"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 px-2 py-1 rounded text-sm">
                    {portfolioItems[selectedVideo].duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{portfolioItems[selectedVideo].title}</h3>
                  <p className="text-gray-400 mb-4">{portfolioItems[selectedVideo].description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{portfolioItems[selectedVideo].views} views</span>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Watch Full
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Video List */}
            <div className="space-y-4">
              {portfolioItems.map((item, index) => (
                <Card
                  key={item.id}
                  className={`bg-gray-900 border-gray-700 cursor-pointer transition-all hover:border-purple-500 ${
                    selectedVideo === index ? "border-purple-500" : ""
                  }`}
                  onClick={() => setSelectedVideo(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex space-x-4">
                      <div className="relative w-24 h-16 flex-shrink-0">
                        <Image
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover rounded"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <Play className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-400 mb-2">{item.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>{item.duration}</span>
                          <span>{item.views} views</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Spotify Embed Simulation */}
          <div className="mt-16">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                    <Volume2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Listen on Spotify</h3>
                    <p className="text-gray-400">Stream my latest album "Electric Dreams"</p>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold">Electric Dreams</h4>
                      <p className="text-sm text-gray-400">Alex Rivera • 2024</p>
                    </div>
                    <Button size="sm" className="bg-green-500 hover:bg-green-600">
                      <Play className="h-4 w-4 mr-1" />
                      Play
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {["Midnight Drive", "Electric Dreams", "City Lights", "Neon Nights"].map((track, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 hover:bg-gray-700 rounded px-2"
                      >
                        <span className="text-sm">
                          {index + 1}. {track}
                        </span>
                        <span className="text-xs text-gray-500">3:42</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Upcoming Tour Dates</h2>
            <p className="text-xl text-gray-400">Don't miss out - get your tickets now!</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div className="text-center md:text-left">
                      <div className="text-2xl font-bold text-purple-400">{formatDate(event.date)}</div>
                      <div className="text-sm text-gray-400 flex items-center justify-center md:justify-start mt-1">
                        <Clock className="h-4 w-4 mr-1" />
                        {event.time}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold mb-1">{event.venue}</h3>
                      <div className="flex items-center text-gray-400 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.city}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={event.status === "Almost Sold Out" ? "destructive" : "secondary"}
                          className={
                            event.status === "Almost Sold Out"
                              ? "bg-red-600"
                              : event.status === "VIP Available"
                                ? "bg-yellow-600"
                                : "bg-green-600"
                          }
                        >
                          {event.status}
                        </Badge>
                        <span className="text-sm text-gray-400">{event.price}</span>
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <Button className="bg-purple-600 hover:bg-purple-700 w-full md:w-auto">
                        <Ticket className="h-4 w-4 mr-2" />
                        Get Tickets
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              View All Tour Dates
            </Button>
          </div>
        </div>
      </section>

      {/* Press & Reviews */}
      <section id="press" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Press & Reviews</h2>
            <p className="text-xl text-gray-400">What the critics are saying</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {pressReviews.map((review, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Image
                      src={review.logo || "/placeholder.svg"}
                      alt={review.publication}
                      width={120}
                      height={40}
                      className="opacity-75"
                    />
                    <div className="flex items-center">
                      {[...Array(Math.floor(review.rating))].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      {review.rating % 1 !== 0 && <Star className="h-4 w-4 text-yellow-400 fill-current opacity-50" />}
                    </div>
                  </div>
                  <blockquote className="text-gray-300 mb-4 italic">"{review.quote}"</blockquote>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="bg-gray-900 border-gray-700 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Press Kit</h3>
                <p className="text-gray-400 mb-6">
                  Download high-resolution photos, biography, and press materials for media use.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="border-gray-600 text-gray-300">
                    <Download className="h-4 w-4 mr-2" />
                    Download Press Kit
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-300">
                    <Download className="h-4 w-4 mr-2" />
                    High-Res Photos
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Instagram className="h-8 w-8 text-pink-500" />
              <h2 className="text-4xl font-bold">Follow the Journey</h2>
            </div>
            <p className="text-xl text-gray-400">@alexriveramusic</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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
                    <Instagram className="h-6 w-6 mx-auto mb-2" />
                    <p className="font-semibold">{post.likes} likes</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
            >
              <Instagram className="h-5 w-5 mr-2" />
              Follow @alexriveramusic
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Request Form */}
      <section id="booking" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Book Alex Rivera</h2>
              <p className="text-xl text-gray-400">
                Interested in booking for your venue, festival, or private event? Let's make it happen.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Booking Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Performance Types</h4>
                      <p className="text-gray-400">
                        Solo acoustic sets, full band performances, festival appearances, private events
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Set Duration</h4>
                      <p className="text-gray-400">30-90 minute sets available, customizable to your event needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Travel</h4>
                      <p className="text-gray-400">Available for nationwide and international bookings</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-900 rounded-lg">
                  <h4 className="font-semibold mb-4">Technical Requirements</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Professional sound system and mixing board</li>
                    <li>• Stage lighting (basic to full production available)</li>
                    <li>• Green room/dressing area</li>
                    <li>• Load-in access for equipment</li>
                  </ul>
                </div>
              </div>

              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl">Booking Request</CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Contact Name</label>
                      <Input placeholder="John Smith" className="bg-gray-800 border-gray-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Organization</label>
                      <Input placeholder="Venue/Company Name" className="bg-gray-800 border-gray-600" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input type="email" placeholder="john@venue.com" className="bg-gray-800 border-gray-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <Input type="tel" placeholder="(555) 123-4567" className="bg-gray-800 border-gray-600" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Event Date</label>
                      <Input type="date" className="bg-gray-800 border-gray-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Event Type</label>
                      <select className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md">
                        <option>Select event type</option>
                        <option>Concert/Show</option>
                        <option>Festival</option>
                        <option>Private Event</option>
                        <option>Corporate Event</option>
                        <option>Wedding</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Venue Location</label>
                    <Input placeholder="City, State" className="bg-gray-800 border-gray-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Expected Attendance</label>
                    <Input placeholder="e.g., 500 people" className="bg-gray-800 border-gray-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Additional Details</label>
                    <Textarea
                      placeholder="Tell us about your event, budget range, technical setup, etc."
                      rows={4}
                      className="bg-gray-800 border-gray-600"
                    />
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Booking Request
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-400">Let's connect and create something amazing together</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="pt-8">
                <Mail className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-400">booking@alexrivera.com</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="pt-8">
                <Phone className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Management</h3>
                <p className="text-gray-400">(555) 123-MUSIC</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="pt-8">
                <Instagram className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Social</h3>
                <p className="text-gray-400">@alexriveramusic</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Music className="h-6 w-6 text-purple-500" />
                <span className="text-xl font-bold">ALEX RIVERA</span>
              </div>
              <p className="text-gray-400 mb-4">
                Singer, songwriter, and producer creating music that connects hearts and moves souls.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Volume2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Music</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Latest Album
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Singles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Music Videos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Lyrics
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Live</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Tour Dates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    VIP Packages
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Merchandise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Fan Club
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Booking: booking@alexrivera.com</li>
                <li>Management: (555) 123-MUSIC</li>
                <li>Press: press@alexrivera.com</li>
                <li>Fan Mail: PO Box 12345</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Alex Rivera. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed and developed by <span className="text-purple-500 font-semibold">Boad Technologies</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
