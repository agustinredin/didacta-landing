"use client"

import { checkBrowserSupport } from "@/lib/utils"
import { AlertTriangle, X } from "lucide-react"
import { useEffect, useState } from "react"

export function BrowserCompatibilityNotice() {
    const [dismissed, setDismissed] = useState(false)
    const [shown, setShown] = useState(false)
    
    useEffect(() => {
        const checkCompatible = async () => {
            return new Promise((resolve, reject) => {
                const support = checkBrowserSupport()
                resolve(Object.values(support).some((isSupported) => !isSupported))
            })
        }

        checkCompatible().then((incompatible) => {
            setShown(incompatible as boolean && !dismissed)
        })
    }, [])

    if (!shown) return null

    if (shown) return (
      <div className="fixed top-32 left-4 right-4 z-50 max-w-md mx-auto">
        <div className=" border mono-code rounded-lg p-4 shadow-lg">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-medium">Experiencia Visual Limitada</h3>
              <p className="text-sm mt-1">
                Tu navegador no soporta algunos efectos visuales modernos. La funcionalidad completa está disponible, pero
                algunos efectos de vidrio pueden verse diferentes.
              </p>
              <p className="text-xs mt-2">
                Para la mejor experiencia, considera actualizar tu navegador.
              </p>
            </div>
            <button
              onClick={() => setShown(false)}
              className="ml-3 text-red-600 hover:text-red-800 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    )
}
