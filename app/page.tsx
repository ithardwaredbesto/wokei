"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import MenuSection from "@/components/menu-section"
import AboutSection from "@/components/about-section"
import PromoSection from "@/components/promo-section"
import LocationsSection from "@/components/locations-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MenuSection />
      <PromoSection />
      <AboutSection />
      <TestimonialsSection />
      <LocationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
