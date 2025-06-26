import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OM PARIVAHAN SERVICES',
  description: 'OM PARIVAHAN SERVICES is a leading logistics and transportation company specializing in efficient and reliable delivery solutions across India.',
  generator: 'Yashvir835',
}

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
