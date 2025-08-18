"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "./components/navbar"
import { AnimatedSection } from "./components/animated-section"
import { ContactForm } from "./components/contact-form"
import { SEOHead } from "./components/seo-head"
import { OnboardingModal } from "./components/onboarding-modal"
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
  Download,
  Globe,
  Smartphone,
  Laptop,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false)

  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-gray-50 text-black font-mono">
        {/* Navbar */}
        <Navbar setIsOnboardingOpen={setIsOnboardingOpen} />

        {/* Header/Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <AnimatedSection animation="fadeIn" delay={200}>
                  <div className="text-sm font-medium text-black mb-6 tracking-widest uppercase border-2 border-black bg-white px-4 py-2 inline-block">
                    01. TRANSFORMA_TU_APRENDIZAJE
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={400}>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black tracking-tight uppercase">
                    CONVIERTE AUDIO EN <span className="bg-black text-white px-2">CONOCIMIENTO</span> FÁCILMENTE.
                  </h1>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={600}>
                  <div className="mono-code">
                    <div className="text-sm text-gray-600 mb-2">// DESCRIPCIÓN</div>
                    <p className="text-base sm:text-lg text-black leading-relaxed">
                      Transforma cualquier conversación o grabación en aprendizaje estructurado sin necesidad de
                      conocimientos técnicos profundos.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={800}>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      size="lg"
                      onClick={() => setIsOnboardingOpen(true)}
                      className="text-lg px-8 py-4 mono-button-primary"
                    >
                      EMPEZAR_GRATIS
                    </Button>
                    <Button size="lg" className="text-lg px-8 py-4 mono-button">
                      SABER_MÁS
                    </Button>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Terminal-style Scene */}
              <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] mt-8 lg:mt-0">
                <AnimatedSection animation="fadeInRight" delay={600}>
                  {/* Main Terminal Window */}
                  <div className="absolute inset-0 bg-white border-4 border-black">
                    {/* Terminal Header */}
                    <div className="bg-black text-white p-4 font-mono text-sm">
                      <div className="flex items-center justify-between">
                        <span>TERMINAL_AI_LEARN</span>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-white"></div>
                          <div className="w-3 h-3 bg-white"></div>
                          <div className="w-3 h-3 bg-white"></div>
                        </div>
                      </div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-3 sm:p-4 lg:p-6 space-y-2 sm:space-y-4 text-xs sm:text-sm terminal-content">
                      <div>
                        <span className="text-gray-600">$</span> ai-learn --procesar audio.mp3
                      </div>
                      <div className="text-gray-600">[INFO] Procesando archivo de audio...</div>
                      <div className="text-gray-600">[ÉXITO] Transcripción completa: 98% precisión</div>
                      <div className="text-gray-600">[ÉXITO] Resumen generado: 5 conceptos clave</div>
                      <div className="text-gray-600">[ÉXITO] Quiz creado: 10 preguntas</div>
                      <div>
                        <span className="text-gray-600">$</span> <span className="animate-pulse">_</span>
                      </div>
                    </div>

                    {/* Mobile Terminal Cards */}
                    <div className="md:hidden mt-6 space-y-4 terminal-cards">
                      <div className="mono-card p-4 bg-white floating-card">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-black flex items-center justify-center">
                            <Brain className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-bold text-xs uppercase">MOTOR_IA</span>
                        </div>
                        <p className="text-xs text-gray-700">Algoritmos avanzados para procesamiento inteligente.</p>
                      </div>

                      <div className="mono-card p-4 bg-white floating-card">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-black flex items-center justify-center">
                            <Zap className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-bold text-xs uppercase">ANÁLISIS</span>
                        </div>
                        <p className="text-xs text-gray-700">Insights de datos en tiempo real.</p>
                      </div>

                      <div className="mono-card p-4 bg-white floating-card">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-black flex items-center justify-center">
                            <Users className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-bold text-xs uppercase">COMUNIDAD</span>
                        </div>
                        <p className="text-xs text-gray-700">Únete a una comunidad activa de estudiantes.</p>
                      </div>

                      <div className="mono-card p-4 bg-white floating-card">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-black flex items-center justify-center">
                            <Laptop className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-bold text-xs uppercase">DESARROLLO</span>
                        </div>
                        <p className="text-xs text-gray-700">Mejores ciclos de desarrollo.</p>
                      </div>
                    </div>

                    {/* Floating Feature Cards */}
                    <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 hidden md:block">
                      {/* AI Card */}
                      <AnimatedSection animation="scaleIn" delay={1000}>
                        <div className="absolute top-24 left-8 w-48 mono-card p-4 bg-white">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-black flex items-center justify-center">
                              <Brain className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-bold text-xs uppercase">MOTOR_IA</span>
                          </div>
                          <p className="text-xs text-gray-700">Algoritmos avanzados para procesamiento inteligente.</p>
                        </div>
                      </AnimatedSection>

                      {/* Analytics Card */}
                      <AnimatedSection animation="scaleIn" delay={1200}>
                        <div className="absolute top-48 right-4 w-44 mono-card p-4 bg-white">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-black flex items-center justify-center">
                              <Zap className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-bold text-xs uppercase">ANÁLISIS</span>
                          </div>
                          <p className="text-xs text-gray-700">Insights de datos en tiempo real.</p>
                        </div>
                      </AnimatedSection>

                      {/* Community Card */}
                      <AnimatedSection animation="scaleIn" delay={1400}>
                        <div className="absolute bottom-20 left-4 w-48 mono-card p-4 bg-white">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-black flex items-center justify-center">
                              <Users className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-bold text-xs uppercase">COMUNIDAD</span>
                          </div>
                          <p className="text-xs text-gray-700">Únete a una comunidad activa de estudiantes.</p>
                        </div>
                      </AnimatedSection>

                      {/* Development Card */}
                      <AnimatedSection animation="scaleIn" delay={1600}>
                        <div className="absolute bottom-8 right-8 w-44 mono-card p-4 bg-white">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-black flex items-center justify-center">
                              <Laptop className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-bold text-xs uppercase">DESARROLLO</span>
                          </div>
                          <p className="text-xs text-gray-700">Mejores ciclos de desarrollo.</p>
                        </div>
                      </AnimatedSection>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Stats */}
            <AnimatedSection animation="fadeInUp" delay={1800}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mt-12 sm:mt-20 pt-8 sm:pt-16 border-t-2 border-black">
                <div className="text-center mono-card p-6">
                  <div className="text-3xl font-bold text-black mb-2">10,000+</div>
                  <div className="text-gray-600 uppercase tracking-wide text-sm">USUARIOS_ACTIVOS</div>
                </div>
                <div className="text-center mono-card p-6">
                  <div className="text-3xl font-bold text-black mb-2">50M+</div>
                  <div className="text-gray-600 uppercase tracking-wide text-sm">MINUTOS_PROCESADOS</div>
                </div>
                <div className="text-center mono-card p-6">
                  <div className="text-3xl font-bold text-black mb-2">98%</div>
                  <div className="text-gray-600 uppercase tracking-wide text-sm">PRECISIÓN_IA</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-white">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black tracking-tight uppercase">
                  CARACTERÍSTICAS_PRINCIPALES
                </h2>
                <div className="mono-code max-w-3xl mx-auto">
                  <div className="text-sm text-gray-600 mb-2">// DESCRIPCIÓN</div>
                  <p className="text-sm text-black">
                    Descubre cómo nuestra tecnología de IA revoluciona la forma en que aprendes y procesas información
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
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
                      TRANSCRIPCIÓN_INTELIGENTE
                    </h3>
                    <div className="mono-code text-left mb-4">
                      <div className="text-xs text-gray-600 mb-1">// CARACTERÍSTICAS</div>
                      <p className="text-sm text-black">
                        Convierte automáticamente cualquier audio en texto preciso usando tecnología de reconocimiento
                        de voz avanzada con IA.
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
                <Card className="mono-card h-full">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto bg-black flex items-center justify-center mb-4">
                        <Brain className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-4 h-4 bg-black mx-auto"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">RESUMEN_CON_IA</h3>
                    <div className="mono-code text-left mb-4">
                      <div className="text-xs text-gray-600 mb-1">// CARACTERÍSTICAS</div>
                      <p className="text-sm text-black">
                        Extrae automáticamente las ideas clave y conceptos importantes usando modelos de lenguaje de
                        última generación.
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
                        ANÁLISIS DE SENTIMIENTOS
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={600}>
                <Card className="mono-card h-full">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto bg-black flex items-center justify-center mb-4">
                        <MessageSquareQuote className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-4 h-4 bg-black mx-auto"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">QUIZZES_INTERACTIVOS</h3>
                    <div className="mono-code text-left mb-4">
                      <div className="text-xs text-gray-600 mb-1">// CARACTERÍSTICAS</div>
                      <p className="text-sm text-black">
                        Genera automáticamente cuestionarios personalizados que refuerzan el aprendizaje y evalúan la
                        comprensión.
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
        </section>

        {/* Benefits Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black tracking-tight uppercase">
                  ¿POR_QUÉ_ELEGIR_AI_LEARN?
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <AnimatedSection animation="scaleIn" delay={200}>
                <div className="text-center mono-card p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-black flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-black uppercase tracking-wide">AHORRA_TIEMPO</h3>
                  <p className="text-sm text-gray-600">
                    Procesa horas de audio en minutos y obtén resúmenes instantáneos
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={400}>
                <div className="text-center mono-card p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-black flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-black uppercase tracking-wide">SEGURO_Y_PRIVADO</h3>
                  <p className="text-sm text-gray-600">
                    Tus datos están protegidos con encriptación de nivel empresarial
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={600}>
                <div className="text-center mono-card p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-black flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-black uppercase tracking-wide">COLABORATIVO</h3>
                  <p className="text-sm text-gray-600">Comparte y colabora en proyectos de aprendizaje con tu equipo</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={800}>
                <div className="text-center mono-card p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-black flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-black uppercase tracking-wide">MULTIPLATAFORMA</h3>
                  <p className="text-sm text-gray-600">Accede desde cualquier dispositivo, en cualquier lugar</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-white">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black tracking-tight uppercase">
                  CÓMO_FUNCIONA
                </h2>
                <div className="mono-code max-w-3xl mx-auto">
                  <div className="text-sm text-gray-600 mb-2">// PROCESO</div>
                  <p className="text-sm text-black">
                    Tres simples pasos para transformar tu audio en conocimiento estructurado
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <div className="text-center mono-card p-8">
                  <div className="w-20 h-20 mx-auto bg-black flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">PROPORCIONA_AUDIO</h3>
                  <div className="mono-code text-left">
                    <div className="text-xs text-gray-600 mb-1">// ENTRADA</div>
                    <p className="text-sm text-black">
                      Sube tu archivo de audio, graba directamente o conecta tu micrófono para sesiones en vivo
                    </p>
                  </div>
                  <div className="flex lg:hidden justify-center my-4">
                    <div className="text-2xl font-bold text-black rotate-90">→</div>
                  </div>
                </div>
              </AnimatedSection>

              <div className="hidden lg:flex justify-center">
                <AnimatedSection animation="fadeIn" delay={400}>
                  <div className="text-2xl lg:text-4xl font-bold text-black">→</div>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="text-center mono-card p-8">
                  <div className="w-20 h-20 mx-auto bg-black flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">IA_PROCESA</h3>
                  <div className="mono-code text-left">
                    <div className="text-xs text-gray-600 mb-1">// PROCESAMIENTO</div>
                    <p className="text-sm text-black">
                      Nuestra IA transcribe, analiza el contenido y extrae las ideas clave usando algoritmos avanzados
                    </p>
                  </div>
                  <div className="flex lg:hidden justify-center my-4">
                    <div className="text-2xl font-bold text-black rotate-90">→</div>
                  </div>
                </div>
              </AnimatedSection>

              <div className="hidden lg:flex justify-center">
                <AnimatedSection animation="fadeIn" delay={800}>
                  <div className="text-2xl lg:text-4xl font-bold text-black">→</div>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fadeInRight" delay={1000}>
                <div className="text-center mono-card p-8">
                  <div className="w-20 h-20 mx-auto bg-black flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">APRENDE_ACTIVAMENTE</h3>
                  <div className="mono-code text-left">
                    <div className="text-xs text-gray-600 mb-1">// SALIDA</div>
                    <p className="text-sm text-black">
                      Recibe resúmenes estructurados, quizzes personalizados y material de estudio optimizado
                    </p>
                  </div>
                  <div className="flex lg:hidden justify-center my-4">
                    <div className="text-2xl font-bold text-black rotate-90">→</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black tracking-tight uppercase">
                  TESTIMONIOS_DE_USUARIOS
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
                      <div className="text-xs text-gray-600 mb-1">// RESEÑA</div>
                      <p className="text-sm text-black">
                        "AI Learn ha revolucionado la forma en que proceso las conferencias. Ahora puedo convertir horas
                        de audio en resúmenes útiles en minutos."
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-black flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">MR</span>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm uppercase">MARÍA_RODRÍGUEZ</div>
                        <div className="text-gray-600 text-xs uppercase">ESTUDIANTE_DE_MEDICINA</div>
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
                      <div className="text-xs text-gray-600 mb-1">// RESEÑA</div>
                      <p className="text-sm text-black">
                        "Como profesor, uso AI Learn para crear material de estudio a partir de mis clases. Los quizzes
                        generados son increíblemente precisos."
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-black flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">CL</span>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm uppercase">CARLOS_LÓPEZ</div>
                        <div className="text-gray-600 text-xs uppercase">PROFESOR_UNIVERSITARIO</div>
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
                      <div className="text-xs text-gray-600 mb-1">// RESEÑA</div>
                      <p className="text-sm text-black">
                        "La precisión de la transcripción es impresionante. He mejorado mi productividad en un 300%
                        desde que uso AI Learn."
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-black flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">AS</span>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm uppercase">ANA_SILVA</div>
                        <div className="text-gray-600 text-xs uppercase">CONSULTORA_EMPRESARIAL</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-white">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black tracking-tight uppercase">
                  PLANES_DE_PRECIOS
                </h2>
                <div className="mono-code max-w-3xl mx-auto">
                  <div className="text-sm text-gray-600 mb-2">// OPCIONES</div>
                  <p className="text-sm text-black">
                    Elige el plan perfecto para tu nivel de uso y comienza a transformar tu aprendizaje hoy mismo
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <Card className="mono-card border-4 border-black relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 text-sm font-bold uppercase tracking-wide">
                    MÁS_POPULAR
                  </div>
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-black uppercase tracking-wide">PLAN_PRO</h3>
                    <div className="text-4xl font-bold mb-6 text-black">
                      $19<span className="text-lg text-gray-600">/MES</span>
                    </div>
                    <div className="mono-code mb-6">
                      <div className="text-xs text-gray-600 mb-1">// OBJETIVO</div>
                      <p className="text-sm text-black">Perfecto para estudiantes y profesionales</p>
                    </div>
                    <ul className="space-y-3 mb-8 text-left text-sm">
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        50 HORAS DE AUDIO/MES
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        TRANSCRIPCIÓN AVANZADA CON IA
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        RESÚMENES INTELIGENTES PERSONALIZADOS
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        QUIZZES ILIMITADOS ADAPTATIVOS
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        SOPORTE PRIORITARIO 24/7
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        EXPORTACIÓN EN MÚLTIPLES FORMATOS
                      </li>
                    </ul>
                    <Button
                      onClick={() => setIsOnboardingOpen(true)}
                      className="w-full mono-button-primary py-4 text-lg font-medium"
                    >
                      COMENZAR_PRUEBA_GRATIS
                    </Button>
                    <p className="text-xs text-gray-500 mt-4 uppercase tracking-wide">
                      14_DÍAS_GRATIS_CANCELA_CUANDO_QUIERAS
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={400}>
                <Card className="mono-card">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-black uppercase tracking-wide">PLAN_EMPRESA</h3>
                    <div className="text-4xl font-bold mb-6 text-black">
                      $99<span className="text-lg text-gray-600">/MES</span>
                    </div>
                    <div className="mono-code mb-6">
                      <div className="text-xs text-gray-600 mb-1">// OBJETIVO</div>
                      <p className="text-sm text-black">Para equipos y organizaciones</p>
                    </div>
                    <ul className="space-y-3 mb-8 text-left text-sm">
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        AUDIO ILIMITADO PARA TODO EL EQUIPO
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        IA PERSONALIZADA PARA TU INDUSTRIA
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        INTEGRACIONES API COMPLETAS
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        EQUIPOS Y COLABORACIÓN ILIMITADA
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        SOPORTE DEDICADO Y ONBOARDING
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        ANÁLISIS AVANZADOS Y REPORTES
                      </li>
                    </ul>
                    <Button className="w-full mono-button py-4 text-lg font-medium">CONTACTAR_VENTAS</Button>
                    <p className="text-xs text-gray-500 mt-4 uppercase tracking-wide">DEMO_PERSONALIZADA_INCLUIDA</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black tracking-tight uppercase">
                  CONTÁCTANOS
                </h2>
                <div className="mono-code max-w-3xl mx-auto">
                  <div className="text-sm text-gray-600 mb-2">// SOPORTE</div>
                  <p className="text-sm text-black">
                    Nuestro equipo está aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <div className="space-y-6">
                  <div className="mono-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black mb-2 uppercase">EMAIL</h3>
                        <p className="text-gray-600 font-mono">hola@ailearn.com</p>
                        <p className="text-gray-600 font-mono">soporte@ailearn.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mono-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black mb-2 uppercase">TELÉFONO</h3>
                        <p className="text-gray-600 font-mono">+1 (555) 123-4567</p>
                        <p className="text-gray-500 text-sm uppercase">LUN-VIE, 9:00-18:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="mono-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black mb-2 uppercase">OFICINA</h3>
                        <p className="text-gray-600 font-mono">123 Innovation Street</p>
                        <p className="text-gray-600 font-mono">Tech Valley, CA 94000</p>
                      </div>
                    </div>
                  </div>

                  <div className="mono-card p-6">
                    <h3 className="text-lg font-bold text-black mb-3 uppercase">¿NECESITAS_AYUDA_INMEDIATA?</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Visita nuestro centro de ayuda para encontrar respuestas a las preguntas más frecuentes.
                    </p>
                    <Button className="mono-button">CENTRO_DE_AYUDA</Button>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={400}>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="scaleIn">
              <div className="mono-card p-16 border-4 border-black">
                <div className="w-16 h-16 mx-auto mb-8 bg-black flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight uppercase">
                  CONVIERTE_CONVERSACIONES_EN_CONOCIMIENTO
                </h2>
                <div className="mono-code mb-12 max-w-3xl mx-auto">
                  <div className="text-sm text-gray-600 mb-2">// LLAMADA_A_LA_ACCIÓN</div>
                  <p className="text-sm text-black leading-relaxed">
                    Únete a miles de estudiantes y profesionales que ya están transformando su forma de aprender con IA.
                    El futuro del aprendizaje personalizado está aquí.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <Button
                    size="lg"
                    onClick={() => setIsOnboardingOpen(true)}
                    className="text-lg px-12 py-6 mono-button-primary"
                  >
                    <Target className="mr-2 h-5 w-5" />
                    EMPEZAR_A_APRENDER_GRATIS
                  </Button>
                  <Button size="lg" className="text-lg px-12 py-6 mono-button">
                    <Download className="mr-2 h-5 w-5" />
                    DESCARGAR_APP
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 border-t-2 border-black bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-black flex items-center justify-center">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-black uppercase tracking-wider">AI_LEARN</span>
                </div>
                <div className="mono-code mb-4">
                  <div className="text-xs text-gray-600 mb-1">// MISIÓN</div>
                  <p className="text-sm text-black">
                    Transformando el futuro del aprendizaje con inteligencia artificial avanzada.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-black flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                    <Smartphone className="h-4 w-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-black flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                    <Laptop className="h-4 w-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-black flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-black mb-4 uppercase tracking-wide">PRODUCTO</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    <a href="#features" className="hover:text-black transition-colors uppercase">
                      CARACTERÍSTICAS
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="hover:text-black transition-colors uppercase">
                      PRECIOS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      API
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      INTEGRACIONES
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-black mb-4 uppercase tracking-wide">RECURSOS</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      DOCUMENTACIÓN
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      TUTORIALES
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      BLOG
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      COMUNIDAD
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-black mb-4 uppercase tracking-wide">SOPORTE</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      CENTRO_DE_AYUDA
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-black transition-colors uppercase">
                      CONTACTO
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      ESTADO_DEL_SISTEMA
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      TÉRMINOS_DE_SERVICIO
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t-2 border-black pt-8 text-center">
              <div className="mono-code">
                <div className="text-xs text-gray-600 mb-1">// COPYRIGHT</div>
                <p className="text-sm text-black uppercase tracking-wide">
                  © 2024 AI_LEARNING_PLATFORM. TRANSFORMANDO_EL_FUTURO_DEL_APRENDIZAJE.
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* Onboarding Modal */}
        <OnboardingModal isOpen={isOnboardingOpen} onClose={() => setIsOnboardingOpen(false)} />
      </div>
    </>
  )
}
