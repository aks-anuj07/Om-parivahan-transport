import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Package, Clock, Shield, MapPin, Leaf } from "lucide-react"
import { AnimatedHeading } from "./animated-heading"
import { siteConfig } from "@/lib/config"

const iconMap = {
  truck: Truck,
  package: Package,
  clock: Clock,
  shield: Shield,
  mapPin: MapPin,
  leaf: Leaf,
}

export function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedHeading className="text-3xl md:text-4xl font-bold mb-4">Our Services</AnimatedHeading>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to meet your specific transportation needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-600"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
