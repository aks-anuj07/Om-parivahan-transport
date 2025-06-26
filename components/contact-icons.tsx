"use client";

import { MessageCircle, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function ContactIcons() {
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}`; // e.g. "918168093076"
  const phoneHref = `tel:${siteConfig.contact.phone}`;                  // e.g. "+918168093076"

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={phoneHref}
        className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
        aria-label="Call us"
      >
        <PhoneCall className="h-6 w-6" />
      </a>
    </div>
  );
}
