"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Brain } from "lucide-react";
import Logo from "./Logo";

interface NavbarProps {
  setIsOnboardingOpen?: (open: boolean) => void;
}

export function Navbar({ setIsOnboardingOpen }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 h-48">
            <div className="w-60 flex items-center justify-center">
              <Logo className="text-white" />
            </div>

            {/* <div className="w-12 flex items-center justify-center">
              <Logo className="text-white" /> 
            </div>
            <span className="text-lg sm:text-xl font-bold text-black uppercase tracking-wider">
              A definir
            </span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            <a
              href="#features"
              className="text-black hover:bg-black hover:text-white px-3 py-2 transition-colors font-medium uppercase tracking-wide"
            >
              Características
            </a>
            <a
              href="#how-it-works"
              className="text-black hover:bg-black hover:text-white px-3 py-2 transition-colors font-medium uppercase tracking-wide"
            >
              Cómo funciona
            </a>
            <a
              href="#testimonials"
              className="text-black hover:bg-black hover:text-white px-3 py-2 transition-colors font-medium uppercase tracking-wide"
            >
              Testimonios
            </a>
            <a
              href="#pricing"
              className="text-black hover:bg-black hover:text-white px-3 py-2 transition-colors font-medium uppercase tracking-wide"
            >
              Precios
            </a>
          </div>

          {/* Medium screen navigation */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center gap-4">
              <Button
                size="sm"
                onClick={() => setIsOnboardingOpen?.(true)}
                className="mono-button-primary"
              >
                <Zap className="mr-2 h-4 w-4" />
                Probar gratis
              </Button>
            </div>
            <div className="md:lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black hover:bg-black hover:text-white p-2 transition-colors"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t-2 border-black bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-black hover:bg-black hover:text-white transition-colors font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                Características
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-black hover:bg-black hover:text-white transition-colors font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                Cómo funciona
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-black hover:bg-black hover:text-white transition-colors font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                Testimonios
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-black hover:bg-black hover:text-white transition-colors font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                Precios
              </a>
              <div className="md: hidden px-3 py-2">
                <Button
                  size="sm"
                  onClick={() => {
                    setIsOnboardingOpen?.(true);
                    setIsOpen(false);
                  }}
                  className="w-full mono-button-primary"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Probar gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
