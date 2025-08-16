"use client"

import { useEffect, useState } from "react"

interface BrowserSupport {
  backdropFilter: boolean
  backgroundClip: boolean
  cssGrid: boolean
  flexbox: boolean
}

export function useBrowserSupport(): BrowserSupport {
  const [support, setSupport] = useState<BrowserSupport>({
    backdropFilter: false,
    backgroundClip: false,
    cssGrid: false,
    flexbox: false,
  })

  useEffect(() => {
    if (typeof window === "undefined") return

    const checkSupport = () => {
      const testElement = document.createElement("div")

      // Test backdrop-filter support
      const backdropFilter =
        "backdropFilter" in testElement.style ||
        "webkitBackdropFilter" in testElement.style ||
        CSS.supports("backdrop-filter", "blur(1px)") ||
        CSS.supports("-webkit-backdrop-filter", "blur(1px)")

      // Test background-clip: text support
      const backgroundClip = CSS.supports("background-clip", "text") || CSS.supports("-webkit-background-clip", "text")

      // Test CSS Grid support
      const cssGrid = CSS.supports("display", "grid")

      // Test Flexbox support
      const flexbox = CSS.supports("display", "flex")

      setSupport({
        backdropFilter,
        backgroundClip,
        cssGrid,
        flexbox,
      })

      // Add classes to document for CSS targeting
      const docElement = document.documentElement

      if (!backdropFilter) {
        docElement.classList.add("no-backdrop-filter")
      }

      if (!backgroundClip) {
        docElement.classList.add("no-background-clip")
      }

      if (!cssGrid) {
        docElement.classList.add("no-css-grid")
      }

      if (!flexbox) {
        docElement.classList.add("no-flexbox")
      }
    }

    checkSupport()
  }, [])

  return support
}
