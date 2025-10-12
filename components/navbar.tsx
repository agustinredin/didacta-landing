"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Brain, LinkIcon } from "lucide-react";
import { Logo, LogoLetra } from "./Logo";

interface NavbarProps {
  setIsOnboardingOpen?: (open: boolean) => void;
}

export function Navbar({ setIsOnboardingOpen }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [onboardingData, setOnboardingData] = useState(null);

  useEffect(() => {
    let onboardingCookie = sessionStorage.getItem("onboarding");
    if (!onboardingCookie) return;
    setOnboardingData({
      name: JSON.parse(onboardingCookie).name,
      email: JSON.parse(onboardingCookie).email,
    });
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 w-fit mt-1">
            <Link href="/" className="flex items-center justify-center">
              <Logo className="text-white w-12" />
              <span className="tracking-[-0.06em] font-black text-2xl">
                Didacta
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center lg:mt-2 space-x-4 xl:space-x-8">
            <Link
              href="/caracteristicas-principales"
              className="text-black hover:bg-black hover:text-white px-3 py-2 transition-colors font-medium uppercase tracking-wide"
            >
              Características
            </Link>
            <Link
              href="/#how-it-works"
              className="text-black hover:bg-black hover:text-white px-3 py-2 transition-colors font-medium uppercase tracking-wide"
            >
              Cómo funciona
            </Link>
            <Link
              href="/#pricing"
              className="text-black hover:bg-black hover:text-white px-3 py-2 transition-colors font-medium uppercase tracking-wide"
            >
              Precios
            </Link>
            <Link
              href="/#contact"
              className="text-black hover:bg-black hover:text-white px-3 py-2 transition-colors font-medium uppercase tracking-wide"
            >
              Contacto
            </Link>
          </div>

          {/* Medium screen navigation */}
          <div className="flex items-center space-x-2 lg:mt-2">
            <div className="hidden md:flex items-center gap-4 group">
              {/* solve this not being defined when rendered in the server */}
              {typeof window !== "undefined" && onboardingData ? (
                <a href={process.env.NEXT_PUBLIC_APP_URL} target="_blank">
                  <Button
                    onClick={() => setIsOnboardingOpen?.(true)}
                    className="mono-button-orange px-3 py-2"
                  >
                    <LinkIcon className="mr-2 h-6 w-6 group-hover:stroke-orange" />
                    Ir a plataforma
                  </Button>
                </a>
              ) : (
                <Button
                  onClick={() => setIsOnboardingOpen?.(true)}
                  className="mono-button-primary px-3 py-2"
                >
                  <Zap className="mr-2 h-6 w-6 group-hover:fill-orange" />
                  Crear cuenta
                </Button>
              )}
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
              <Link
                href="/caracteristicas-principales"
                className="block px-3 py-2 text-black hover:bg-black hover:text-white transition-colors font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                Características
              </Link>
              <Link
                href="/#how-it-works"
                className="block px-3 py-2 text-black hover:bg-black hover:text-white transition-colors font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                Cómo funciona
              </Link>
              <Link
                href="/#pricing"
                className="block px-3 py-2 text-black hover:bg-black hover:text-white transition-colors font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                Precios
              </Link>
              <Link
                href="/#contact"
                className="block px-3 py-2 text-black hover:bg-black hover:text-white transition-colors font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <div className="md:hidden py-2 group">
                <Button
                  size="sm"
                  onClick={() => {
                    setIsOnboardingOpen?.(true);
                    setIsOpen(false);
                  }}
                  className="w-full mono-button-primary"
                >
                  <Zap className="mr-2 h-6 w-6 group-hover:fill-orange" />
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
