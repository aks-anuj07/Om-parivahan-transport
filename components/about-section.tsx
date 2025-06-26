import Image from "next/image"
import { Clock, Shield, Package, Leaf } from "lucide-react"
import { AnimatedHeading } from "./animated-heading"
import { siteConfig } from "@/lib/config"

const iconMap = {
  clock: Clock,
  shield: Shield,
  package: Package,
  leaf: Leaf,
}

export function AboutSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedHeading className="text-3xl md:text-4xl font-bold mb-6">
              About Our Business & Legacy
            </AnimatedHeading>
            <p className="text-lg text-gray-700 mb-6">{siteConfig.company.fullDescription}</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {siteConfig.features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <IconComponent className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/delivery-map.jpg"
              alt="Logistics Network"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
