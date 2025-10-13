"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeChanger({ ...props }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div
      className="fixed bottom-6 right-8 z-50 mono-card p-4 transition-all duration-75 opacity-75 hover:opacity-100"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div {...props}>
        <button
          className={`h-6 flex items-center transition-colors duration-300 dark:text-white space-x-4 cursor-pointer`}
        >
          <div>{isDark ? <Moon /> : <Sun />}</div>
          <label className="text-left font-medium text-xs dark:text-white cursor-pointer w-16">
            <div className="text-xs text-gray-600 mb-1">// MODO</div>
            {isDark ? "OSCURO" : "CLARO"}
          </label>
        </button>
      </div>
    </div>
  );
}
