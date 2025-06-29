"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatedHeading } from "./animated-heading"
import { siteConfig } from "@/lib/config"

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === siteConfig.hero.images.length - 1 ? 0 : prevIndex + 1))
    }, siteConfig.hero.slideInterval)

    return () => clearInterval(interval)
  }, [])

  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}`

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute top-6 left-6 z-20">
        <Image
          src="/logo.svg"
          alt={`${siteConfig.company.name} Logo`}
          width={120}
          height={120}
          className="rounded-full bg-white p-2 shadow-lg"
        />
      </div>

      <div className="relative h-full">
        {siteConfig.hero.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${index === currentImageIndex
                ? "translate-x-0"
                : index < currentImageIndex
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Transport Service ${index + 1}`}
              fill
              // CHANGED: Modified object-fit and positioning for better responsive display
              // className=" w-full object-cover object-center sm:object-cover md:object-cover lg:object-cover"
              className="w-full md:object-cover"
              // CHANGED: Added responsive object positioning for better mobile display
              style={{
                objectPosition: "center center",
              }}
              priority={index === 0}
              // CHANGED: Added sizes prop for better responsive image loading
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <AnimatedHeading as="h1" className="text-4xl md:text-6xl font-bold mb-6">
            {siteConfig.company.name}
          </AnimatedHeading>
          <p className="text-xl md:text-2xl mb-8 font-light">{siteConfig.company.tagline}</p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">{siteConfig.company.description}</p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Contact via WhatsApp">
              Get Quote Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
