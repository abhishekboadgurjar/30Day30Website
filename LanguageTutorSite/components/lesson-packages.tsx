import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

const packages = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for beginners starting their language journey",
    features: [
      "4 one-on-one lessons per month",
      "Basic conversation practice",
      "Grammar fundamentals",
      "Email support",
      "Progress tracking",
    ],
    popular: false,
  },
  {
    name: "Accelerated",
    price: "$59",
    period: "/month",
    description: "Ideal for serious learners who want faster progress",
    features: [
      "8 one-on-one lessons per month",
      "Advanced conversation practice",
      "Cultural immersion sessions",
      "Priority support",
      "Custom learning materials",
      "Pronunciation coaching",
    ],
    popular: true,
  },
  {
    name: "Intensive",
    price: "$99",
    period: "/month",
    description: "Maximum immersion for rapid fluency achievement",
    features: [
      "12 one-on-one lessons per month",
      "Daily conversation practice",
      "Business language training",
      "24/7 chat support",
      "Personalized curriculum",
      "Mock interviews & presentations",
      "Certificate of completion",
    ],
    popular: false,
  },
]

export function LessonPackages() {
  return (
    <section id="packages" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Choose Your Learning Path</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible lesson packages designed to fit your schedule and learning goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? "border-primary shadow-lg scale-105" : ""}`}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="mt-2">{pkg.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button className="w-full" variant={pkg.popular ? "default" : "outline"} size="lg">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">All packages include a 7-day money-back guarantee</p>
          <p className="text-sm text-muted-foreground">
            Need a custom package?{" "}
            <a href="#booking" className="text-primary hover:underline">
              Contact us
            </a>{" "}
            for enterprise solutions
          </p>
        </div>
      </div>
    </section>
  )
}
