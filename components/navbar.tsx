"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap, Brain } from "lucide-react"

interface NavbarProps {
  setIsOnboardingOpen?: (open: boolean) => void
}

export function Navbar({ setIsOnboardingOpen }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-black uppercase tracking-wider">AI_LEARN</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-black hover:bg-black hover:text-white px-3 py-2 transition-colors font-medium uppercase tracking-wide"
            >
              FEATURES
            </a>
            <a
              href="#how-it-works"
              className="text-black hover:bg-black hover:text-white px-3 py-2 transition-colors font-medium uppercase tracking-wide"
            >
              HOW_IT_WORKS
            </a>
            <a
              href="#testimonials"
              className="text-black hover:bg-black hover:text-white px-3 py-2 transition-colors font-medium uppercase tracking-wide"
            >
              TESTIMONIALS
            </a>
            <a
              href="#pricing"
              className="text-black hover:bg-black hover:text-white px-3 py-2 transition-colors font-medium uppercase tracking-wide"
            >
              PRICING
            </a>
            <Button size="sm" onClick={() => setIsOnboardingOpen?.(true)} className="mono-button-primary">
              <Zap className="mr-2 h-4 w-4" />
              START_FREE
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:bg-black hover:text-white p-2 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-black bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-black hover:bg-black hover:text-white transition-colors font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                FEATURES
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-black hover:bg-black hover:text-white transition-colors font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                HOW_IT_WORKS
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-black hover:bg-black hover:text-white transition-colors font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                TESTIMONIALS
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-black hover:bg-black hover:text-white transition-colors font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                PRICING
              </a>
              <div className="px-3 py-2">
                <Button
                  size="sm"
                  onClick={() => {
                    setIsOnboardingOpen?.(true)
                    setIsOpen(false)
                  }}
                  className="w-full mono-button-primary"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  START_FREE
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
