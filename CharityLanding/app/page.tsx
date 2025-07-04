import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Globe, Mail, Phone, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function CharityLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-rose-600" />
            <span className="text-2xl font-bold text-gray-900">
              Care for Change
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#mission" className="text-gray-600 hover:text-gray-900">
              Mission
            </Link>
            <Link href="#gallery" className="text-gray-600 hover:text-gray-900">
              Our Work
            </Link>
            <Link href="#donate" className="text-gray-600 hover:text-gray-900">
              Donate
            </Link>
            <Link
              href="#newsletter"
              className="text-gray-600 hover:text-gray-900"
            >
              Newsletter
            </Link>
          </nav>
          <Button className="bg-rose-600 hover:bg-rose-700">Donate Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-rose-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Together We Can Make a{" "}
            <span className="text-rose-600">Difference</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join us in our mission to create positive change in communities
            around the world. Every donation, every volunteer hour, every act of
            kindness matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
              Donate Today
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Mission and Cause Section */}
      <section id="mission" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in the power of community and compassion to transform
              lives and create lasting change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Community Support
                </h3>
                <p className="text-gray-600">
                  Building stronger communities through direct support,
                  education, and empowerment programs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
                <p className="text-gray-600">
                  Creating sustainable solutions that address poverty,
                  education, and healthcare worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Compassionate Care
                </h3>
                <p className="text-gray-600">
                  Providing immediate relief and long-term support to those who
                  need it most.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how your support has helped us make a difference in
              communities around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Community water project"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-center p-4">
                  Clean Water Initiative - Providing access to clean water for
                  500+ families
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Education program"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-center p-4">
                  Education Program - Supporting 200+ children with school
                  supplies and scholarships
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Healthcare outreach"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-center p-4">
                  Healthcare Outreach - Free medical care for underserved
                  communities
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Food distribution"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-center p-4">
                  Food Security - Distributing meals to 1000+ families monthly
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Volunteer training"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-center p-4">
                  Volunteer Training - Empowering local leaders and volunteers
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Emergency relief"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-center p-4">
                  Emergency Relief - Rapid response to natural disasters and
                  crises
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section id="donate" className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Support Changes Lives
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Every donation, no matter the size, helps us continue our vital
            work. Join thousands of supporters who are making a difference
            today.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold mb-2">$25</div>
                <p className="text-sm opacity-90">
                  Provides school supplies for one child
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold mb-2">$50</div>
                <p className="text-sm opacity-90">
                  Feeds a family for one week
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold mb-2">$100</div>
                <p className="text-sm opacity-90">
                  Provides clean water access
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold mb-2">$250</div>
                <p className="text-sm opacity-90">
                  Supports healthcare for 10 people
                </p>
              </CardContent>
            </Card>
          </div>

          <Button
            size="lg"
            className="bg-white text-rose-600 hover:bg-gray-100"
          >
            Donate Now
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get updates on our latest projects, success stories, and ways you
              can help make a difference.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1"
                required
              />
              <Button type="submit" className="bg-rose-600 hover:bg-rose-700">
                Subscribe
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-rose-600" />
                <span className="text-xl font-bold">Care for Change</span>
              </div>
              <p className="text-gray-400 mb-4">
                Creating positive change in communities worldwide through
                compassion and action.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#mission" className="hover:text-white">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="hover:text-white">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="#donate" className="hover:text-white">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="#newsletter" className="hover:text-white">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Partner with Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Corporate Giving
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@careforchange.org</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Hope Street, City, State 12345</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Care for Change. All rights reserved. | Powered by
              Boad Technologies
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
