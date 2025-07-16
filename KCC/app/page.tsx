import HeroSection from '@/components/sections/hero-section'
import AboutSection from '@/components/sections/about-section'
import ServicesSection from '@/components/sections/services-section'
import ProjectSection from '@/components/sections/project-section'
import TeamSection from '@/components/sections/team-section'
import TestimonialSection from '@/components/sections/testimonial-section'
import ContactSection from '@/components/sections/contact-section'
import CTASection from '@/components/sections/cta-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
      <TeamSection />
      <TestimonialSection />
      <ContactSection />
      <CTASection />
    </>
  );
}