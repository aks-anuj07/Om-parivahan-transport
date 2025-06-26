# OM Parivahan Services Next.js Project

This repository contains the foundational setup for the **OM Parivahan Services** website built with Next.js 14.

---

## 🚀 Project Overview

**OM Parivahan Services** is a leading logistics and transportation company specializing in efficient, reliable, and sustainable delivery solutions across India. This Next.js project provides the global layout, metadata management, and icon configuration for SEO, social previews, and browser integration.

---

## 📁 Repository Structure

```
/ (root)
├── public/
│   ├── logo.png           # Your brand logo used for favicon and social previews
├── src/
│   └── app/
│       ├── globals.css    # Global styles
│       ├── layout.tsx     # RootLayout component with metadata
│       └── page.tsx       # Sample home page (replace with your content)
├── .env.local             # Environment variables (if needed)
├── next.config.js         # Next.js configuration
├── package.json           # Project metadata & dependencies
└── README.md              # This file
```

---

## 📝 Metadata Configuration

All global metadata is managed in `src/app/layout.tsx` via Next.js’ [Metadata API](https://nextjs.org/docs/app/api-reference/functions/generateMetadata). Below is a summary:

* **Title & Description**

  ```ts
  title: 'OM PARIVAHAN SERVICES'
  description: 'OM PARIVAHAN SERVICES is a leading logistics and transportation company specializing in efficient and reliable delivery solutions across India.'
  generator: 'Yashvir835'
  ```

* **Icons**

  ```ts
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  }
  ```

  Place your `logo.png` in the `public/` directory so it’s accessible at runtime.

* **Open Graph** (for social sharing previews)

  ```ts
  openGraph: {
    title: 'OM PARIVAHAN SERVICES',
    description: 'Efficient and reliable logistics services across India.',
    url: 'https://your-domain.com',
    siteName: 'OM Parivahan Services',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'OM Parivahan Services Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
  ```

---

## 🏗️ Root Layout Component

The `RootLayout` wraps every page, adds your `<html>` and `<body>` tags, and injects global styles. Example:

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
```

You can extend this with headers, footers, or any site-wide providers (e.g., context, themes).

---

## 🔧 Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-org/om-parivahan-services.git
   cd om-parivahan-services
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000` to view your site.

---

---


---

© {new Date().getFullYear()} OM Parivahan Services. All rights reserved.
