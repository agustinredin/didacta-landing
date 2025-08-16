import Head from "next/head"

export function SEOHead() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI Learn",
    description:
      "Plataforma de aprendizaje impulsada por IA que convierte audio en conocimiento estructurado mediante transcripción inteligente, resúmenes automáticos y quizzes interactivos.",
    url: "https://ailearn.com",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web, iOS, Android",
    offers: [
      {
        "@type": "Offer",
        name: "Plan Pro",
        price: "19",
        priceCurrency: "USD",
        billingDuration: "P1M",
      },
      {
        "@type": "Offer",
        name: "Plan Empresa",
        price: "99",
        priceCurrency: "USD",
        billingDuration: "P1M",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1250",
    },
    author: {
      "@type": "Organization",
      name: "AI Learn Inc.",
    },
  }

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>AI Learn - Convierte Audio en Aprendizaje con Inteligencia Artificial</title>
      <meta name="title" content="AI Learn - Convierte Audio en Aprendizaje con Inteligencia Artificial" />
      <meta
        name="description"
        content="Transforma cualquier audio en conocimiento estructurado. Transcripción inteligente, resúmenes automáticos y quizzes interactivos powered by AI. Prueba gratis."
      />
      <meta
        name="keywords"
        content="inteligencia artificial, aprendizaje, transcripción, audio, IA, educación, quizzes, resúmenes automáticos"
      />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="author" content="AI Learn Inc." />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ailearn.com/" />
      <meta property="og:title" content="AI Learn - Convierte Audio en Aprendizaje con IA" />
      <meta
        property="og:description"
        content="Plataforma de aprendizaje que usa IA para convertir audio en conocimiento. Transcripción, resúmenes y quizzes automáticos."
      />
      <meta property="og:image" content="https://ailearn.com/og-image.jpg" />
      <meta property="og:site_name" content="AI Learn" />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ailearn.com/" />
      <meta property="twitter:title" content="AI Learn - Convierte Audio en Aprendizaje con IA" />
      <meta
        property="twitter:description"
        content="Transforma audio en conocimiento con IA. Transcripción inteligente, resúmenes y quizzes automáticos."
      />
      <meta property="twitter:image" content="https://ailearn.com/twitter-image.jpg" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#3B82F6" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://ailearn.com/" />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </Head>
  )
}
