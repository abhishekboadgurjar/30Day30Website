import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { CoursesSection } from "@/components/home/courses-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { BlogSection } from "@/components/home/blog-section";
import { NewsletterSection } from "@/components/home/newsletter-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <TestimonialsSection />
      <BlogSection />
      <NewsletterSection />
    </>
  );
}