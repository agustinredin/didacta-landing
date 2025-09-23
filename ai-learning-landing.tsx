"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "./components/navbar";
import { AnimatedSection } from "./components/animated-section";
import { ContactForm } from "./components/contact-form";
import { SEOHead } from "./components/seo-head";
import { OnboardingModal } from "./components/onboarding-modal";
import {
  Mic,
  Brain,
  MessageSquareQuote,
  Zap,
  Target,
  Sparkles,
  Users,
  Clock,
  Shield,
  Globe,
  Smartphone,
  Laptop,
  Mail,
  Phone,
  MapPin,
  FileText,
  ListChecks,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";
import {
  StickyScrollHowItWorks,
  howItWorksContent,
} from "./components/sticky-scroll-how-it-works";
import Phone3D from "./components/phone";
import { ClientTranslator } from "@/lib/ClientTranslator";
import en from "./locale/locale.json";
import CustomTerminal from "./components/custom-terminal";

export default function Component() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  return (
    <ClientTranslator dict={en}>
      <SEOHead />
      <div className="min-h-screen bg-white text-black font-mono">
        {/* Navbar */}
        <Navbar setIsOnboardingOpen={setIsOnboardingOpen} />

        {/* Header/Hero Section */}
        <section className="relative mx-8 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:pb-32 lg:pt-48 bg-white">
          <div className="max-w-7xl mx-auto my-16 lg:my-12 w-full">
            <div className="flex flex-wrap gap-8 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8 lg:w-1/2">
                <AnimatedSection animation="fadeIn" delay={200}>
                  <div className="text-sm font-medium text-black mb-6 tracking-widest uppercase border-2 border-black bg-white px-4 py-2 inline-block">
                    01. Transforma tu aprendizaje
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={400}>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black tracking-tight uppercase">
                    Convertí tus clases en conocimiento
                  </h1>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={600}>
                  <div className="mono-code">
                    <p className="text-base sm:text-md text-black leading-relaxed">
                      Prestá atencion en clase y dejá que la IA facilite tu
                      aprendizaje. Nuestra aplicación genera resumenes y
                      cuestionarios inteligentes para estudiar de manera más
                      efectiva.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={800}>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      size="lg"
                      onClick={() => setIsOnboardingOpen(true)}
                      className="text-lg px-8 py-4 mono-button-orange border border-orange"
                    >
                      Empezar gratis
                    </Button>
                    <Button size="lg" className="text-lg px-8 py-4 mono-button">
                      <a href="/caracteristicas-principales">Saber más</a>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Terminal-style Scene */}
              <CustomTerminal />
            </div>

            {/* Stats - TODO: Real stats (No se renderiza?)*/}
            <AnimatedSection
              animation="fadeInUp"
              delay={1800}
              className="hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mt-12 sm:mt-20 pt-8 sm:pt-16 border-t-2 border-black">
                <div className="text-center mono-card p-6">
                  <div className="text-3xl font-bold text-black mb-2">
                    10,000+
                  </div>
                  <div className="text-gray-600 uppercase tracking-wide text-sm">
                    USUARIOS ACTIVOS
                  </div>
                </div>
                <div className="text-center mono-card p-6">
                  <div className="text-3xl font-bold text-black mb-2">50M+</div>
                  <div className="text-gray-600 uppercase tracking-wide text-sm">
                    MINUTOS PROCESADOS
                  </div>
                </div>
                <div className="text-center mono-card p-6">
                  <div className="text-3xl font-bold text-black mb-2">98%</div>
                  <div className="text-gray-600 uppercase tracking-wide text-sm">
                    PRECISIÓN IA
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative px-6 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black tracking-tight uppercase">
                  ¿POR QUÉ ELEGIRNOS?
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <AnimatedSection animation="scaleIn" delay={200}>
                <div className="text-center mono-card h-full p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-black flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-black uppercase tracking-wide">
                    AHORRÁ TIEMPO
                  </h3>
                  <p className="text-sm text-gray-600">
                    Procesá horas de audio en minutos y obtené resúmenes
                    instantáneos
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={400}>
                <div className="text-center mono-card h-full p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-black flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-black uppercase tracking-wide">
                    SEGURO Y PRIVADO
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tus datos y tus archivos están encriptados y seguros
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={600}>
                <div className="text-center mono-card h-full p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-black flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-black uppercase tracking-wide">
                    COLABORATIVO
                  </h3>
                  <p className="text-sm text-gray-600">
                    Exportá y compartí el contenido en diversos formatos a tus
                    compañeros
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={800}>
                <div className="text-center mono-card h-full p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-black flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-black uppercase tracking-wide">
                    MULTIPLATAFORMA
                  </h3>
                  <p className="text-sm text-gray-600">
                    Accedé desde cualquier dispositivo y en cualquier lugar
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="relative mx-8 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-white"
        >
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black tracking-tight uppercase">
                  CARACTERÍSTICAS PRINCIPALES
                </h2>
                <div className="mono-code max-w-3xl mx-auto">
                  <p className="text-sm text-black">
                    Descubrí cómo nuestro uso de la IA revoluciona la forma en
                    que aprendés
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 py-8">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <Card className="mono-card h-full">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto bg-black flex items-center justify-center mb-4">
                        <Mic className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-4 h-4 bg-black mx-auto"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">
                      TRANSCRIPCIÓN
                    </h3>
                    <div className="mono-code text-left mb-4">
                      <p className="text-sm text-black">
                        Grabá o subí tu audio y convertilo en texto preciso
                        usando tecnología de reconocimiento de voz.
                      </p>
                    </div>
                    <ul className="text-xs text-gray-600 space-y-2 text-left">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-black mr-2"></div>
                        SOPORTE PARA 50+ IDIOMAS
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-black mr-2"></div>
                        98% DE PRECISIÓN
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-black mr-2"></div>
                        PROCESAMIENTO EN TIEMPO REAL
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={400}>
                <Card className="mono-card-highlight h-full xl:-translate-y-8">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto bg-black flex items-center justify-center mb-4">
                        <Brain className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-4 h-4 bg-black mx-auto"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">
                      RESUMEN CON IA
                    </h3>
                    <div className="mono-code text-left mb-4">
                      <p className="text-sm text-black">
                        Extraé automáticamente las ideas clave y conceptos
                        importantes.
                      </p>
                    </div>
                    <ul className="text-xs text-gray-600 space-y-2 text-left">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-black mr-2"></div>
                        RESÚMENES PERSONALIZADOS
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-black mr-2"></div>
                        EXTRACCIÓN DE CONCEPTOS CLAVE
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-black mr-2"></div>
                        ANÁLISIS CONTEXTUAL SEGÚN TEMA
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <div className="md:max-xl:col-span-2">
                <AnimatedSection
                  animation="fadeInRight"
                  delay={600}
                  className="md:max-xl:w-1/2 md:max-xl:m-auto"
                >
                  <Card className="mono-card h-full">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        <div className="w-16 h-16 mx-auto bg-black flex items-center justify-center mb-4">
                          <MessageSquareQuote className="h-8 w-8 text-white" />
                        </div>
                        <div className="w-4 h-4 bg-black mx-auto"></div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">
                        QUIZZES INTERACTIVOS
                      </h3>
                      <div className="mono-code text-left mb-4">
                        <p className="text-sm text-black">
                          Generá automáticamente cuestionarios personalizados
                          que refuerzan el aprendizaje y evalúan la comprensión.
                        </p>
                      </div>
                      <ul className="text-xs text-gray-600 space-y-2 text-left">
                        <li className="flex items-center">
                          <div className="w-3 h-3 bg-black mr-3"></div>
                          PREGUNTAS ADAPTATIVAS
                        </li>
                        <li className="flex items-center">
                          <div className="w-3 h-3 bg-black mr-3"></div>
                          RETROALIMENTACIÓN INSTANTÁNEA
                        </li>
                        <li className="flex items-center">
                          <div className="w-3 h-3 bg-black mr-3"></div>
                          SEGUIMIENTO DE PROGRESO
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
            <AnimatedSection animation="fadeInUp">
              <div className="text-center my-10">
                <Button size="lg" className="text-lg px-10 py-6 mono-button">
                  <a href="/caracteristicas-principales">Ver todas</a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* How it Works Section - old - 110 lineas */}
        {/* <section
          id="how-it-works"
          className="relative mx-8 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-white"
        >
          <div className="max-w-6xl mx-auto">
                <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black tracking-tight uppercase">
                  ¿CÓMO FUNCIONA?
                </h2>
                <div className="mono-code max-w-3xl mx-auto">
                  <div className="text-sm text-gray-600 mb-2">// PROCESO</div>
                  <p className="text-sm text-black">
                    Tres simples pasos para transformar tu audio en conocimiento
                    estructurado
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <div className="text-center mono-card p-8">
                  <div className="w-20 h-20 mx-auto bg-black flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">
                    PROPORCIONA AUDIO
                  </h3>
                  <div className="mono-code text-left">
                    <div className="text-xs text-gray-600 mb-1">// ENTRADA</div>
                    <p className="text-sm text-black">
                      Sube tu archivo de audio, graba directamente o conecta tu
                      micrófono para sesiones en vivo
                    </p>
                  </div>
                  <div className="flex lg:hidden justify-center my-4">
                    <div className="text-2xl font-bold text-black rotate-90">
                      →
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* <div className="hidden lg:flex justify-center">
                <AnimatedSection animation="fadeIn" delay={400}>
                  <div className="text-2xl lg:text-4xl font-bold text-black">
                    →
                  </div>
                </AnimatedSection>
              </div> */}

        {/* <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="text-center mono-card p-8">
                  <div className="w-20 h-20 mx-auto bg-black flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">
                    IA PROCESA
                  </h3>
                  <div className="mono-code text-left">
                    <div className="text-xs text-gray-600 mb-1">
                      // PROCESAMIENTO
                    </div>
                    <p className="text-sm text-black">
                      Nuestra IA transcribe, analiza el contenido y extrae las
                      ideas clave usando algoritmos avanzados
                    </p>
                  </div>
                  <div className="flex lg:hidden justify-center my-4">
                    <div className="text-2xl font-bold text-black rotate-90">
                      →
                    </div>
                  </div>
                </div>
              </AnimatedSection> */}

        {/* <div className="hidden lg:flex justify-center">
                <AnimatedSection animation="fadeIn" delay={800}>
                  <div className="text-2xl lg:text-4xl font-bold text-black">
                    →
                  </div>
                </AnimatedSection>
              </div> */}

        {/* <AnimatedSection animation="fadeInRight" delay={1000}>
                <div className="text-center mono-card p-8">
                  <div className="w-20 h-20 mx-auto bg-black flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">
                    APRENDE ACTIVAMENTE
                  </h3>
                  <div className="mono-code text-left">
                    <div className="text-xs text-gray-600 mb-1">// SALIDA</div>
                    <p className="text-sm text-black">
                      Recibe resúmenes estructurados, quizzes personalizados y
                      material de estudio optimizado
                    </p>
                  </div>
                  <div className="flex lg:hidden justify-center my-4">
                    <div className="text-2xl font-bold text-black rotate-90">
                      &nbsp;
                    </div>
                  </div>
                </div>
              </AnimatedSection> */}
        {/* </div>
          </div> */}
        {/* </section> */}

        {/* How it Works Section - NEW STICKY SCROLL VERSION */}
        <section id="how-it-works" className="relative bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black tracking-tight uppercase">
                  ¿CÓMO FUNCIONA?
                </h2>
                <div className="mono-code max-w-3xl mx-auto">
                  <div className="text-sm text-gray-600 mb-2">
                    // PROCESO INTERACTIVO
                  </div>
                  <p className="text-sm text-black">
                    Descubrí paso a paso cómo transformamos la información de
                    tus clases en conocimiento
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <StickyScrollHowItWorks content={howItWorksContent} />
          </AnimatedSection>
        </section>

        {/* Testimonials Section - TODO: Real testimonials (No se está renderizando actualmente) */}
        <section
          id="testimonials"
          className="relative hidden mx-8 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-gray-50"
        >
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black tracking-tight uppercase">
                  TESTIMONIOS DE USUARIOS
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <Card className="mono-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-black text-lg">★★★★★</div>
                    </div>
                    <div className="mono-code mb-4">
                      <div className="text-xs text-gray-600 mb-1">
                        // RESEÑA
                      </div>
                      <p className="text-sm text-black">
                        "AI Learn ha revolucionado la forma en que proceso las
                        conferencias. Ahora puedo convertir horas de audio en
                        resúmenes útiles en minutos."
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-black flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">MR</span>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm uppercase">
                          MARÍA RODRÍGUEZ
                        </div>
                        <div className="text-gray-600 text-xs uppercase">
                          ESTUDIANTE DE MEDICINA
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={400}>
                <Card className="mono-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-black text-lg">★★★★★</div>
                    </div>
                    <div className="mono-code mb-4">
                      <div className="text-xs text-gray-600 mb-1">
                        // RESEÑA
                      </div>
                      <p className="text-sm text-black">
                        "Como profesor, uso AI Learn para crear material de
                        estudio a partir de mis clases. Los quizzes generados
                        son increíblemente precisos."
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-black flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">CL</span>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm uppercase">
                          CARLOS LÓPEZ
                        </div>
                        <div className="text-gray-600 text-xs uppercase">
                          PROFESOR UNIVERSITARIO
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={600}>
                <Card className="mono-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-black text-lg">★★★★★</div>
                    </div>
                    <div className="mono-code mb-4">
                      <div className="text-xs text-gray-600 mb-1">
                        // RESEÑA
                      </div>
                      <p className="text-sm text-black">
                        "La precisión de la transcripción es impresionante. He
                        mejorado mi productividad en un 300% desde que uso AI
                        Learn."
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-black flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">AS</span>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm uppercase">
                          ANA SILVA
                        </div>
                        <div className="text-gray-600 text-xs uppercase">
                          CONSULTORA EMPRESARIAL
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="relative mx-8 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-white"
        >
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black tracking-tight uppercase">
                  PLANES DE PRECIOS
                </h2>
                <div className="mono-code max-w-3xl mx-auto">
                  <div className="text-sm text-gray-600 mb-2">// OPCIONES</div>
                  <p className="text-sm text-black">
                    Queremos dar lo mejor a nuestros usuarios. El verdadero
                    valor está en transformar tus notas y audios en conocimiento
                    accionable, generando un impacto real en tu aprendizaje.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <Card className="mono-card border-4 border-black relative">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-black uppercase tracking-wide">
                      PLAN FREE
                    </h3>
                    <div className="text-4xl font-bold mb-6 text-green-800">
                      GRATIS
                    </div>
                    <div className="mono-code mb-6">
                      <div className="text-xs text-gray-600 mb-1">
                        // OBJETIVO
                      </div>
                      <p className="text-sm text-black">
                        Familiarizarte con el asistente
                      </p>
                    </div>
                    <ul className="space-y-3 mb-8 text-left text-sm">
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        ASISTENTE DE IA AVANZADO{" "}
                        <span className="text-gray-600"> &nbsp;(GPT-5)</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>5 HORAS DE
                        TRANSCRIPCIÓN
                        <span className="text-gray-600 text-sm">/MES</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>500 PÁGINAS
                        DE BIBLIOGRAFÍA
                        <span className="text-gray-600 text-sm">/MES</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        ESCANEO DE PDF O TEXTO MANUSCRITO
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        RESÚMENES INTELIGENTES PERSONALIZADOS
                      </li>
                    </ul>
                    <Button
                      onClick={() => setIsOnboardingOpen(true)}
                      className="w-full mono-button py-4 text-lg font-medium"
                    >
                      CREAR CUENTA GRATIS
                    </Button>
                    <p className="text-xs text-gray-500 mt-4 uppercase tracking-wide">
                      ONBOARDING INTERACTIVO DISPONIBLE
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={400}>
                <Card className="mono-card relative">
                  <img
                    src="MP_RGB_HANDSHAKE_pluma_vertical.svg"
                    alt="Icono de MP"
                    className="inline-block w-16 h-16 ml-2 invert-25 absolute top-4 right-4"
                  />
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 text-sm font-bold uppercase tracking-wide">
                    VERSIÓN ILIMITADA
                  </div>
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-black uppercase tracking-wide">
                      PLAN PLUS
                    </h3>
                    <div className="text-4xl font-bold mb-6 text-black">
                      $10.000
                      <span className="text-lg text-gray-600">/MES</span>
                    </div>
                    <div className="mono-code mb-6">
                      <div className="text-xs text-gray-600 mb-1">
                        // OBJETIVO
                      </div>
                      <p className="text-sm text-black">
                        Para equipos y organizaciones
                      </p>
                    </div>
                    <ul className="space-y-3 mb-8 text-left text-sm">
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-orange mr-3"></div>
                        TODO LO DISPONIBLE EN FREE, MÁS...
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>15 HORAS DE
                        TRANSCRIPCIÓN
                        <span className="text-gray-600 text-sm">/MES</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>1000
                        PÁGINAS DE BIBLIOGRAFÍA
                        <span className="text-gray-600 text-sm">/MES</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        QUIZZES ILIMITADOS ADAPTATIVOS
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        SOPORTE PRIORITARIO 24/7
                      </li>
                    </ul>
                    <Button className="w-full mono-button-primary py-4 text-lg font-medium">
                      IR A PLATAFORMA
                    </Button>
                    <p className="text-xs text-gray-500 mt-4 uppercase tracking-wide">
                      CANCELÁ CUANDO QUIERAS
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative mx-8 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="scaleIn">
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 tracking-tight uppercase">
                  ARRANCÁ A USAR NUESTRO ASISTENTE HOY
                </h2>
                <div className="mono-code mb-12 max-w-3xl mx-auto">
                  <div className="text-sm text-gray-600 mb-2">
                    // MEJORÁ TU APRENDIZAJE
                  </div>
                  <p className="text-sm text-black leading-relaxed">
                    Unite a estudiantes y profesionales que ya están
                    transformando su forma de aprender con IA. El futuro del
                    aprendizaje personalizado está acá.
                  </p>
                </div>
                <div className="flex flex-wrap flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <Button
                    size="lg"
                    onClick={() => setIsOnboardingOpen(true)}
                    className="text-xs sm:text-sm md:text-lg px-12 py-6 mono-button-primary"
                  >
                    <Target className="h-5 w-5" />
                    EMPEZAR A APRENDER GRATIS
                  </Button>
                  {/* TODO <Button size="lg" className="text-lg px-12 py-6 mono-button">
                    <Download className="mr-2 h-5 w-5" />
                    DESCARGAR APP
                  </Button>
                    DESCARGAR APP
                  </Button> */}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="relative not-last:px-6 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32 bg-gray-50"
        >
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black tracking-tight uppercase">
                  CONTACTANOS
                </h2>
                <div className="mono-code max-w-3xl mx-auto">
                  <div className="text-sm text-gray-600 mb-2">// SOPORTE</div>
                  <p className="text-sm text-black">
                    Nuestro equipo está acá para ayudarte. Envianos un mensaje y
                    te responderemos lo antes posible.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* TODO: Llenar con mail una vez comprado un dominio */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"> */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12 max-w-4xl m-auto">
              {/* <AnimatedSection animation="fadeInLeft" delay={200}>
                <div className="space-y-6">
                  <div className="mono-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black mb-2 uppercase">
                          EMAIL
                        </h3>
                        <p className="text-gray-600 font-mono">
                          hola@ailearn.com
                        </p>
                        <p className="text-gray-600 font-mono">
                          soporte@ailearn.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mono-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black mb-2 uppercase">
                          TELÉFONO
                        </h3>
                        <p className="text-gray-600 font-mono">
                          +1 (555) 123-4567
                        </p>
                        <p className="text-gray-500 text-sm uppercase">
                          LUN-VIE, 9:00-18:00
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mono-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black mb-2 uppercase">
                          OFICINA
                        </h3>
                        <p className="text-gray-600 font-mono">
                          123 Innovation Street
                        </p>
                        <p className="text-gray-600 font-mono">
                          Tech Valley, CA 94000
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mono-card p-6">
                    <h3 className="text-lg font-bold text-black mb-3 uppercase">
                      ¿NECESITAS AYUDA INMEDIATA?
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Visita nuestro centro de ayuda para encontrar respuestas a
                      las preguntas más frecuentes
                    </p>
                    <Button className="mono-button">CENTRO DE AYUDA</Button>
                  </div>
                </div>
              </AnimatedSection> */}

              <AnimatedSection animation="fadeInUp" delay={400}>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative px-6 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32 border-t-2 border-black bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="mono-code">
                <p className="text-sm text-black uppercase tracking-wide">
                  © 2025 DIDACTA AI. CONVIRTIENDO TUS CLASES EN CONOCIMIENTO.
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* Onboarding Modal */}
        <OnboardingModal
          isOpen={isOnboardingOpen}
          onClose={() => setIsOnboardingOpen(false)}
        />
      </div>
      {/* <div>
      <Phone3D imageUrl='step1.png' />
    </div> */}
    </ClientTranslator>
  );
}
