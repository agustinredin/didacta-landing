"use client"

import { useBrowserSupport } from "../hooks/use-browser-support"
import { AlertTriangle, X } from "lucide-react"
import { useState } from "react"

export function BrowserCompatibilityNotice() {
  const support = useBrowserSupport()
  const [dismissed, setDismissed] = useState(false)

  // Show notice if critical features are missing
  const showNotice = !support.backdropFilter && !dismissed

  if (showNotice) 
  return (
    <div className="fixed top-32 left-4 right-4 z-50 max-w-md mx-auto">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow-lg">
        <div className="flex items-start">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-sm font-medium text-yellow-800">Experiencia Visual Limitada</h3>
            <p className="text-sm text-yellow-700 mt-1">
              Tu navegador no soporta algunos efectos visuales modernos. La funcionalidad completa está disponible, pero
              algunos efectos de vidrio pueden verse diferentes.
            </p>
            <p className="text-xs text-yellow-600 mt-2">
              Para la mejor experiencia, considera actualizar tu navegador.
            </p>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="ml-3 text-yellow-600 hover:text-yellow-800 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )

  return null

}
