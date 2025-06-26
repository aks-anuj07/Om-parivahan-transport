"use client"
import { Truck, Package, Clock, Shield, Leaf, MapPin } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { FooterSection } from "@/components/footer-section"
import { ContactIcons } from "@/components/contact-icons"

const heroImages = [
  "/images/truck1.jpg",
  "/images/truck2.jpg",
  "/images/truck3.jpg",
  "/images/truck4.jpg",
  "/images/delivery-map.jpg",
  "/images/truck6.jpg",
  "/images/truck7.jpg",
  "/images/truck8.jpg",
]

const services = [
  {
    icon: <Truck className="h-8 w-8 text-orange-600" />,
    title: "Express Parcels",
    description: "Same-day and next-day delivery for urgent shipments across the city and beyond.",
  },
  {
    icon: <Package className="h-8 w-8 text-orange-600" />,
    title: "Bulk Freight",
    description: "Large-scale freight transportation with optimized routing for cost-effective solutions.",
  },
  {
    icon: <Clock className="h-8 w-8 text-orange-600" />,
    title: "Scheduled Transport",
    description: "Regular scheduled routes with guaranteed on-time arrivals for your business needs.",
  },
  {
    icon: <Shield className="h-8 w-8 text-orange-600" />,
    title: "Cold-Chain Transport",
    description: "Temperature-controlled transportation for perishable goods and sensitive materials.",
  },
  {
    icon: <MapPin className="h-8 w-8 text-orange-600" />,
    title: "Long-Haul Routes",
    description: "Cross-country transportation with real-time tracking and dedicated support.",
  },
  {
    icon: <Leaf className="h-8 w-8 text-orange-600" />,
    title: "Eco-Friendly Logistics",
    description: "Sustainable transport solutions with fuel-efficient vehicles and green practices.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection  />
      <AboutSection />
      <ServicesSection  />
      <FooterSection />
      <ContactIcons />
    </div>
  )
}
