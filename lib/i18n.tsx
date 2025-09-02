"use client";

import { createContext, ReactNode, useContext } from "react";
import { dictionary } from "./dictionary";

interface I18nContextValue {
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue>({
  t: (key) => key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const t = (key: string) => {
    const parts = key.split(".");
    let result: any = dictionary;
    for (const part of parts) {
      result = result?.[part];
      if (result === undefined) return key;
    }
    return typeof result === "string" ? result : key;
  };

  return <I18nContext.Provider value={{ t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
