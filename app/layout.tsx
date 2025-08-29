import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@/styles/globals.css";
import "@/styles/performance-optimizations.css";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
    shortcut: "/Logo_n_f_t.png",
  },
  title: "Didacta - IA para estudiantes",
  description:
    "Didacta is a web app that transforms classes into actionable knowledge. With AI-powered transcription, summaries, and quizzes, it helps students learn faster and teachers manage content efficiently.",
  generator: "v0.app",
  keywords: [
    "Didacta",
    "AI LMS",
    "learning platform",
    "student productivity",
    "class transcriptions",
    "AI summaries",
    "AI quizzes",
    "virtual campus",
    "education technology",
    "edtech",
  ],
  authors: [
    {
      name: "Didacta Team",
      // , url: "https://didacta.ai"
    },
  ],
  openGraph: {
    title: "Didacta - Convert your classes into knowledge",
    description:
      "An AI-powered learning platform for students and teachers. Transcribe, summarize, and validate knowledge with ease.",
    // url: "https://didacta.ai",
    siteName: "Didacta",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-mono: ${GeistMono.style.fontFamily};
  --font-sans: ${GeistSans.style.fontFamily};
}
        `}</style>
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
