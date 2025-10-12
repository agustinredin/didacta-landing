"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {Sun, Moon} from 'lucide-react'

export default function ThemeSwitcher({...props}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div {...props}>
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`h-6 flex items-center transition-colors duration-300 dark:text-white space-x-4 cursor-pointer`}
    >
      <div
        className={`transform transition-transform duration-300 ${
          isDark ? "translate-x-0" : "translate-x-1"
        }`}
      >{isDark ? <Moon /> : <Sun />}</div>
          <label className="font-medium dark:text-white cursor-pointer">{isDark ? "OSCURO" : "CLARO"}</label>
    </button>
    </div>
  )
}

