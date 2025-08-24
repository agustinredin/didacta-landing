import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function checkBrowserSupport() {
          const testElement = document.createElement("div")

      // Test backdrop-filter support
      const backdropFilter =
        "backdropFilter" in testElement.style ||
        "webkitBackdropFilter" in testElement.style ||
        CSS.supports("backdrop-filter", "blur(1px)") ||
        CSS.supports("-webkit-backdrop-filter", "blur(1px)")

      // Test background-clip: text support
      const backgroundClip =  CSS.supports("background-clip", "text") ||  CSS.supports("-webkit-background-clip", "text")

      // Test CSS Grid support
      const cssGrid =  CSS.supports("display", "grid")

      // Test Flexbox support
      const flexbox =  CSS.supports("display", "flex")

      
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
    
    return {
      backdropFilter,
      backgroundClip,
      cssGrid,
      flexbox,
    }
    
}