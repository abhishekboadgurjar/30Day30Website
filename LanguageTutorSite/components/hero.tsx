import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Users, Award, Languages } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Master Any Language with <span className="text-primary">Expert Tutoring</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Personalized language lessons that fit your schedule. Learn from native speakers and achieve fluency
                faster than ever.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#booking">
                  Start Learning Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#resources">Browse Free Resources</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Language learning illustration"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-4">
              <Languages className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
