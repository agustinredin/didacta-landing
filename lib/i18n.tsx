"use client"

import { createContext, ReactNode, useContext, useState } from "react"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

type Lang = "en" | "es"

const dictionaries = { en, es }

interface I18nContextValue {
  lang: Lang
  t: (key: string) => string
  switchLang: (lang: Lang) => void
}

const I18nContext = createContext<I18nContextValue>({
  lang: "en",
  t: (key) => key,
  switchLang: () => {},
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  const t = (key: string) => {
    const parts = key.split(".")
    let result: any = dictionaries[lang]
    for (const part of parts) {
      result = result?.[part]
      if (result === undefined) return key
    }
    return typeof result === "string" ? result : key
  }

  return (
    <I18nContext.Provider value={{ lang, switchLang: setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
