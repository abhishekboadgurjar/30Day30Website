import { Hero } from "@/components/hero"
import { FreeResources } from "@/components/free-resources"
import { LessonPackages } from "@/components/lesson-packages"
import { BookingSection } from "@/components/booking-section"
import { VideoTestimonials } from "@/components/video-testimonials"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FreeResources />
      <LessonPackages />
      <BookingSection />
      <VideoTestimonials />
      <Footer />
    </div>
  )
}
