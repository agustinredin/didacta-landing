"use client"

import { useScrollAnimation } from "../hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fadeInUp", delay = 0 }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  const animationClasses = {
    fadeInUp: isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8",
    fadeInLeft: isVisible ? "animate-fade-in-left" : "opacity-0 -translate-x-8",
    fadeInRight: isVisible ? "animate-fade-in-right" : "opacity-0 translate-x-8",
    fadeIn: isVisible ? "animate-fade-in" : "opacity-0",
    scaleIn: isVisible ? "animate-scale-in" : "opacity-0 scale-95",
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
