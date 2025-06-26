import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { siteConfig } from "@/lib/config"

export function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src="/images/logo.jpg"
                alt={`${siteConfig.company.name} Logo`}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">{siteConfig.company.name}</h3>
                <p className="text-gray-400">{siteConfig.company.slogan}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              We're not just a transport provider—we're your strategic ally in the fast-paced world of modern logistics.
            </p>
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
              <p className="text-gray-300">{siteConfig.contact.address}</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              {siteConfig.navigation.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-orange-600 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-600" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-600" />
                <span>{siteConfig.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {siteConfig.company.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
