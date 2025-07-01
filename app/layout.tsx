import type { Metadata } from 'next'  
import './globals.css'  
  
export const metadata: Metadata = {  
  title: 'OM PARIVAHAN SERVICES',  
  description: 'OM PARIVAHAN SERVICES is a leading logistics and transportation company specializing in efficient and reliable delivery solutions across India.',  
  generator: 'Yashvir835',  
  icons: {  
    icon: '/logo.svg',         // default icon  
    shortcut: '/logo.svg',     // optional for browser shortcut  
    apple: '/logo.svg',        // optional for Apple devices  
  },  
  keywords: [  
    'transport services',  
    'logistics company india',  
    'goods delivery',  
    'om privahan services',  
    'om privahan',  
    'truck services'  
  ],  
  applicationName: 'OM PARIVAHAN SERVICES',  
  openGraph: {  
    title: 'OM PARIVAHAN SERVICES - Reliable Transport Across India',  
    description: 'Professional logistics and goods transport services across India. Fast, affordable, and secure delivery solutions.',  
    url: 'https://www.omprivahanservices.com',  
    siteName: 'OM PARIVAHAN SERVICES',  
    images: [  
      {  
        url: '/logo.svg',  
        width: 800,  
        height: 600,  
        alt: 'OM PARIVAHAN SERVICES Logo',  
      },  
    ],  
    locale: 'en_IN',  
    type: 'website',  
  },  
};  
  
export default function RootLayout({  
  children,  
}: Readonly<{  
  children: React.ReactNode  
}>) {  
  return (  
    <html lang="en">  
      <body>{children}</body>  
    </html>  
  )  
}
