import type { ReactNode } from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@/styles/globals.css";
import "@/styles/performance-optimizations.css";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  title: "Didacta - IA para estudiantes",
  description:
    "Didacta es una aplicación web que transforma las clases en conocimiento accionable. Con transcripciones, resúmenes y cuestionarios impulsados por IA, ayuda a los estudiantes a aprender más rápido y a los docentes a gestionar contenido de forma eficiente.",
  generator: "v0.app",
  keywords: [
    "Didacta",
    "IA LMS",
    "plataforma de aprendizaje",
    "productividad estudiantil",
    "transcripciones de clases",
    "resúmenes con IA",
    "quizzes con IA",
    "campus virtual",
    "tecnología educativa",
    "edtech",
  ],
  authors: [
    {
      name: "Didacta Team",
      // , url: "https://didacta.ai"
    },
  ],
  openGraph: {
    title: "Didacta - Convertí tus clases en conocimiento",
    description:
      "Una plataforma de aprendizaje impulsada por IA para estudiantes y docentes. Transcribe, resume y valida conocimientos con facilidad.",
    // url: "https://didacta.ai",
    siteName: "Didacta",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
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
        <main>{children}</main>
      </body>
    </html>
  );
}
