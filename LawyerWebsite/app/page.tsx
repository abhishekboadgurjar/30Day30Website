import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Phone,
  Mail,
  MapPin,
  Scale,
  Clock,
  Star,
  Calendar,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function LawyerWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-gray-900">LegalPro</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#process"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Process
              </Link>
              <Link
                href="#reviews"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Reviews
              </Link>
              <Button className="bg-amber-600 hover:bg-amber-700">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule a Call
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Expert Legal Counsel You Can Trust
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              With over 15 years of experience, we provide comprehensive legal
              services tailored to your unique needs. Your success is our
              priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-3"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-transparent"
              >
                Learn More
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Our Firm
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008, our firm has built a reputation for excellence
                in legal representation. We combine deep legal expertise with a
                client-first approach to deliver outstanding results.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600">Cases Won</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700">
                <Phone className="h-4 w-4 mr-2" />
                Schedule a Call
              </Button>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Avatar className="h-16 w-16 mr-4">
                  <AvatarImage
                    src="/placeholder.svg?height=64&width=64"
                    alt="Attorney"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    John Doe, Esq.
                  </h3>
                  <p className="text-gray-600">Senior Partner</p>
                </div>
              </div>
              <p className="text-gray-600">
                {
                  '"Our commitment to excellence and client satisfaction has made us one of the most trusted law firms in the region. We fight for what\'s right."'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Practice Areas */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Practice Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive legal services across multiple practice
              areas, ensuring expert representation for all your legal needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Law",
                description:
                  "Business formation, contracts, mergers & acquisitions, compliance",
                icon: "🏢",
              },
              {
                title: "Personal Injury",
                description:
                  "Auto accidents, medical malpractice, workplace injuries, wrongful death",
                icon: "⚖️",
              },
              {
                title: "Family Law",
                description:
                  "Divorce, child custody, adoption, domestic relations",
                icon: "👨‍👩‍👧‍👦",
              },
              {
                title: "Real Estate",
                description:
                  "Property transactions, zoning, landlord-tenant disputes",
                icon: "🏠",
              },
              {
                title: "Criminal Defense",
                description: "DUI, white collar crimes, drug offenses, appeals",
                icon: "🛡️",
              },
              {
                title: "Estate Planning",
                description: "Wills, trusts, probate, asset protection",
                icon: "📋",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Process Timeline */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure the best possible
              outcome for your case.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description:
                    "Free 30-minute consultation to understand your case and legal needs.",
                  duration: "30 minutes",
                },
                {
                  step: "02",
                  title: "Case Evaluation",
                  description:
                    "Thorough analysis of your case, including research and strategy development.",
                  duration: "1-2 weeks",
                },
                {
                  step: "03",
                  title: "Legal Strategy",
                  description:
                    "Development of a comprehensive legal strategy tailored to your specific situation.",
                  duration: "1 week",
                },
                {
                  step: "04",
                  title: "Documentation & Filing",
                  description:
                    "Preparation and filing of all necessary legal documents and paperwork.",
                  duration: "2-4 weeks",
                },
                {
                  step: "05",
                  title: "Negotiation & Resolution",
                  description:
                    "Active negotiation and representation to achieve the best possible outcome.",
                  duration: "Varies",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <Badge variant="secondary" className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.duration}
                      </Badge>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about our services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Business Owner",
                content:
                  "Exceptional service and expertise. They handled my corporate legal matters with professionalism and achieved excellent results.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Individual Client",
                content:
                  "The team was incredibly supportive during my personal injury case. They fought hard and secured a fair settlement.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Family Client",
                content:
                  "Compassionate and knowledgeable representation during a difficult divorce. Highly recommend their family law services.",
                rating: 5,
              },
              {
                name: "David Thompson",
                role: "Real Estate Investor",
                content:
                  "Outstanding real estate legal services. They made complex transactions smooth and stress-free.",
                rating: 5,
              },
              {
                name: "Lisa Wang",
                role: "Startup Founder",
                content:
                  "Helped us navigate complex business formation and contracts. Their expertise was invaluable to our success.",
                rating: 5,
              },
              {
                name: "Robert Miller",
                role: "Individual Client",
                content:
                  "Professional, responsive, and results-driven. They exceeded my expectations in every way.",
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage
                        src={`/placeholder.svg?height=40&width=40`}
                        alt={review.name}
                      />
                      <AvatarFallback>
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">"{review.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Don't wait to protect your rights. Schedule a free consultation
            today and let us help you navigate your legal challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-amber-600 bg-transparent"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="h-6 w-6 text-amber-600" />
                <span className="text-xl font-bold">LegalPro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Providing expert legal counsel with integrity and dedication
                since 2008.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@legalpro.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Legal St, City, State 12345</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Practice Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Corporate Law</li>
                <li>Personal Injury</li>
                <li>Family Law</li>
                <li>Real Estate</li>
                <li>Criminal Defense</li>
                <li>Estate Planning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#process"
                    className="hover:text-white transition-colors"
                  >
                    Process
                  </Link>
                </li>
                <li>
                  <Link
                    href="#reviews"
                    className="hover:text-white transition-colors"
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 LegalPro. All rights reserved. | Website by{" "}
              <span className="text-amber-600 font-semibold">
                Boad Technologies
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
