"use client"

import type { ReactNode } from "react"

interface AnimatedHeadingProps {
  children: ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function AnimatedHeading({ children, className = "", as: Component = "h2" }: AnimatedHeadingProps) {
  return (
    <Component className={`animated-gradient-text ${className}`}>
      {children}
      <style jsx>{`
        .animated-gradient-text {
          background: linear-gradient(
            90deg,
            #374151 0%,
            #6b7280 25%,
            #9ca3af 50%,
            #6b7280 75%,
            #374151 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-slide 10s ease-in-out infinite;
        }

        @keyframes gradient-slide {
          0% {
            background-position: 200% 0%;
          }
          50% {
            background-position: -200% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
      `}</style>
    </Component>
  )
}
