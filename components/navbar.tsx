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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Learn
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Características
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Cómo Funciona
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Testimonios
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Precios
            </a>
            <Button
              size="sm"
              onClick={() => setIsOnboardingOpen?.(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-700 hover:to-blue-800 text-white"
            >
              <Zap className="mr-2 h-4 w-4" />
              Prueba Gratis
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/20 bg-white/90 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Características
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Cómo Funciona
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Testimonios
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Precios
              </a>
              <div className="px-3 py-2">
                <Button
                  size="sm"
                  onClick={() => {
                    setIsOnboardingOpen?.(true)
                    setIsOpen(false)
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-700 hover:to-blue-800 text-white"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Prueba Gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
