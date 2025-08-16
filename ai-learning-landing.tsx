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
  ArrowRight,
  Zap,
  Target,
  Sparkles,
  Users,
  Clock,
  Shield,
  Star,
  CheckCircle,
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900 overflow-hidden">
        {/* Navbar */}
        <Navbar setIsOnboardingOpen={setIsOnboardingOpen} />

        {/* Optimized background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none will-change-transform">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-2xl animate-pulse transform-gpu"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000 transform-gpu"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-2000 transform-gpu"></div>
        </div>

        {/* Header/Hero Section */}
        <section className="relative px-4 pt-32 pb-20 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <AnimatedSection animation="fadeIn" delay={200}>
                  <div className="text-sm font-medium text-purple-600 mb-6 tracking-wide">
                    01. Transforma tu aprendizaje
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={400}>
                  <h1 className="text-6xl md:text-7xl font-bold leading-tight text-gray-900 tracking-tight">
                    Convierte{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      audio
                    </span>{" "}
                    en{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                      conocimiento
                    </span>{" "}
                    con facilidad
                  </h1>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={600}>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                    Ahora es más fácil que nunca transformar cualquier conversación o grabación en aprendizaje
                    estructurado sin necesidad de conocimientos técnicos profundos.
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={800}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      onClick={() => setIsOnboardingOpen(true)}
                      className="text-lg px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all duration-300 hover:scale-105"
                    >
                      Comenzar gratis
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-4 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full transition-all duration-300 bg-transparent"
                    >
                      Saber más
                    </Button>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right 3D Scene */}
              <div className="relative h-[600px] lg:h-[700px]">
                <AnimatedSection animation="fadeInRight" delay={600}>
                  {/* Background 3D Shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 rounded-[3rem] overflow-hidden">
                    {/* Organic shapes */}
                    <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-60 blur-xl"></div>
                    <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-40 blur-2xl"></div>

                    {/* Wavy lines */}
                    <svg className="absolute top-20 left-20 w-64 h-32 opacity-30" viewBox="0 0 200 100">
                      <path d="M10,50 Q50,20 90,50 T170,50" stroke="#d97706" strokeWidth="2" fill="none" />
                      <path d="M10,60 Q50,30 90,60 T170,60" stroke="#d97706" strokeWidth="2" fill="none" />
                      <path d="M10,70 Q50,40 90,70 T170,70" stroke="#d97706" strokeWidth="2" fill="none" />
                    </svg>
                  </div>

                  {/* Floating Cards */}
                  <div className="absolute inset-0 p-8">
                    {/* Advanced AI Card */}
                    <AnimatedSection animation="scaleIn" delay={1000}>
                      <div className="absolute top-24 left-8 w-64 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 hover:scale-105 transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <Brain className="h-5 w-5 text-white" />
                          </div>
                          <span className="font-semibold text-gray-900">IA Avanzada</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          IA más inteligente con algoritmos propietarios de última generación.
                        </p>
                      </div>
                    </AnimatedSection>

                    {/* Analytics Card */}
                    <AnimatedSection animation="scaleIn" delay={1200}>
                      <div className="absolute top-48 right-4 w-56 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-white/50 hover:scale-105 transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-600 rounded-lg flex items-center justify-center">
                            <Zap className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-semibold text-gray-900 text-sm">Análisis</span>
                        </div>
                        <p className="text-xs text-gray-600">Toma decisiones informadas directamente en tu producto.</p>
                      </div>
                    </AnimatedSection>

                    {/* Community Card */}
                    <AnimatedSection animation="scaleIn" delay={1400}>
                      <div className="absolute bottom-20 left-4 w-60 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-white/50 hover:scale-105 transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <Users className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-semibold text-gray-900 text-sm">Comunidad</span>
                        </div>
                        <p className="text-xs text-gray-600">
                          Únete a una comunidad activa y divertida con otros creadores.
                        </p>
                      </div>
                    </AnimatedSection>

                    {/* Development Card */}
                    <AnimatedSection animation="scaleIn" delay={1600}>
                      <div className="absolute bottom-8 right-8 w-52 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-white/50 hover:scale-105 transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                            <Laptop className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-semibold text-gray-900 text-sm">Desarrollo</span>
                        </div>
                        <p className="text-xs text-gray-600">Mejores ciclos de desarrollo con menos riesgo.</p>
                      </div>
                    </AnimatedSection>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Stats moved below */}
            <AnimatedSection animation="fadeInUp" delay={1800}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20 pt-16 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                  <div className="text-gray-600">Usuarios Activos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50M+</div>
                  <div className="text-gray-600">Minutos Procesados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                  <div className="text-gray-600">Precisión IA</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative px-4 py-32">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Características Principales
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Descubre cómo nuestra tecnología de IA revoluciona la forma en que aprendes y procesas información
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-10">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <Card className="glass-card relative border border-white/70 hover:scale-105 group shadow-lg hover:shadow-xl will-change-transform transform-gpu transition-all duration-300">
                  <CardContent className="relative p-10 text-center">
                    <div className="mb-8 relative">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30 transition-all duration-300 will-change-transform">
                        <Mic className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse shadow-sm"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-blue-600">Transcripción Inteligente</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Convierte automáticamente cualquier audio en texto preciso usando tecnología de reconocimiento de
                      voz avanzada con IA.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Soporte para 50+ idiomas
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Precisión del 98%
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Procesamiento en tiempo real
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={400}>
                <Card className="glass-card relative border border-white/70 hover:scale-105 group shadow-lg hover:shadow-xl will-change-transform transform-gpu transition-all duration-300">
                  <CardContent className="relative p-10 text-center">
                    <div className="mb-8 relative">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/30 transition-all duration-300 will-change-transform">
                        <Brain className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-pulse delay-500 shadow-sm"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-purple-600">Resumen con IA</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Extrae automáticamente las ideas clave y conceptos importantes usando modelos de lenguaje de
                      última generación.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Resúmenes personalizados
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Extracción de conceptos clave
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Análisis de sentimientos
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={600}>
                <Card className="glass-card relative border border-white/70 hover:scale-105 group shadow-lg hover:shadow-xl will-change-transform transform-gpu transition-all duration-300">
                  <CardContent className="relative p-10 text-center">
                    <div className="mb-8 relative">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:shadow-green-500/30 transition-all duration-300 will-change-transform">
                        <MessageSquareQuote className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000 shadow-sm"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-green-600">Quizzes Interactivos</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Genera automáticamente cuestionarios personalizados que refuerzan el aprendizaje y evalúan la
                      comprensión.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Preguntas adaptativas
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Retroalimentación instantánea
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Seguimiento de progreso
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative px-4 py-32 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                  ¿Por qué elegir{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    AI Learn
                  </span>
                  ?
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection animation="scaleIn" delay={200}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Ahorra Tiempo</h3>
                  <p className="text-gray-600">Procesa horas de audio en minutos y obtén resúmenes instantáneos</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={400}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Seguro y Privado</h3>
                  <p className="text-gray-600">Tus datos están protegidos con encriptación de nivel empresarial</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={600}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Colaborativo</h3>
                  <p className="text-gray-600">Comparte y colabora en proyectos de aprendizaje con tu equipo</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={800}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Multiplataforma</h3>
                  <p className="text-gray-600">Accede desde cualquier dispositivo, en cualquier lugar</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="relative px-4 py-32">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Cómo Funciona
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Tres simples pasos para transformar tu audio en conocimiento estructurado
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-12 items-center">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <div className="text-center relative">
                  <div className="w-28 h-28 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 will-change-transform transform-gpu">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Proporciona Audio</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sube tu archivo de audio, graba directamente en la plataforma o conecta tu micrófono para sesiones
                    en vivo
                  </p>
                </div>
              </AnimatedSection>

              <div className="hidden md:flex justify-center">
                <AnimatedSection animation="fadeIn" delay={400}>
                  <ArrowRight className="h-10 w-10 text-purple-500 animate-pulse will-change-transform" />
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="text-center relative">
                  <div className="w-28 h-28 mx-auto bg-gradient-to-br from-purple-500 to-green-600 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-purple-500/20 will-change-transform transform-gpu">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-600">IA Procesa</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nuestra IA transcribe, analiza el contenido y extrae las ideas clave automáticamente usando
                    algoritmos avanzados
                  </p>
                </div>
              </AnimatedSection>

              <div className="hidden md:flex justify-center">
                <AnimatedSection animation="fadeIn" delay={800}>
                  <ArrowRight className="h-10 w-10 text-green-500 animate-pulse delay-500 will-change-transform" />
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fadeInRight" delay={1000}>
                <div className="text-center relative">
                  <div className="w-28 h-28 mx-auto bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-green-500/20 will-change-transform transform-gpu">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-600">Aprende Activamente</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Recibe resúmenes estructurados, quizzes personalizados y material de estudio optimizado para tu
                    aprendizaje
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative px-4 py-32 bg-gradient-to-r from-yellow-50 to-orange-50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                  Lo que dicen nuestros{" "}
                  <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    usuarios
                  </span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <Card className="glass-card border border-white/70 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">
                      "AI Learn ha revolucionado la forma en que proceso las conferencias. Ahora puedo convertir horas
                      de audio en resúmenes útiles en minutos."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">MR</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">María Rodríguez</div>
                        <div className="text-gray-600 text-sm">Estudiante de Medicina</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={400}>
                <Card className="glass-card border border-white/70 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">
                      "Como profesor, uso AI Learn para crear material de estudio a partir de mis clases. Los quizzes
                      generados son increíblemente precisos."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">CL</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Carlos López</div>
                        <div className="text-gray-600 text-sm">Profesor Universitario</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={600}>
                <Card className="glass-card border border-white/70 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">
                      "La precisión de la transcripción es impresionante. He mejorado mi productividad en un 300% desde
                      que uso AI Learn."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">AS</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Ana Silva</div>
                        <div className="text-gray-600 text-sm">Consultora Empresarial</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Pricing Section - Solo 2 planes */}
        <section id="pricing" className="relative px-4 py-32">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                  Planes que se adaptan a{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    tus necesidades
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Elige el plan perfecto para tu nivel de uso y comienza a transformar tu aprendizaje hoy mismo
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <Card className="glass-card border-2 border-purple-500 shadow-xl relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Más Popular
                  </div>
                  <CardContent className="p-10 text-center">
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">Plan Pro</h3>
                    <div className="text-5xl font-bold mb-6 text-purple-600">
                      $19<span className="text-xl text-gray-600">/mes</span>
                    </div>
                    <p className="text-gray-600 mb-8">Perfecto para estudiantes y profesionales</p>
                    <ul className="space-y-4 mb-10 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        50 horas de audio por mes
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        Transcripción avanzada con IA
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        Resúmenes inteligentes personalizados
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        Quizzes ilimitados adaptativos
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        Soporte prioritario 24/7
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        Exportación en múltiples formatos
                      </li>
                    </ul>
                    <Button
                      onClick={() => setIsOnboardingOpen(true)}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 text-white py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
                    >
                      Comenzar Prueba Gratis
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">14 días gratis, cancela cuando quieras</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={400}>
                <Card className="glass-card border border-white/70 shadow-lg">
                  <CardContent className="p-10 text-center">
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">Plan Empresa</h3>
                    <div className="text-5xl font-bold mb-6 text-green-600">
                      $99<span className="text-xl text-gray-600">/mes</span>
                    </div>
                    <p className="text-gray-600 mb-8">Para equipos y organizaciones</p>
                    <ul className="space-y-4 mb-10 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        Audio ilimitado para todo el equipo
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        IA personalizada para tu industria
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        Integraciones API completas
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        Equipos y colaboración ilimitada
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        Soporte dedicado y onboarding
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        Análisis avanzados y reportes
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-blue-700 hover:from-green-700 hover:to-blue-800 text-white py-4 text-lg font-medium transition-all duration-300 hover:scale-105">
                      Contactar Ventas
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">Demo personalizada incluida</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative px-4 py-32 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                  ¿Tienes preguntas?{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Contáctanos
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Nuestro equipo está aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">hola@ailearn.com</p>
                      <p className="text-gray-600">soporte@ailearn.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfono</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-500 text-sm">Lunes a Viernes, 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Oficina</h3>
                      <p className="text-gray-600">123 Innovation Street</p>
                      <p className="text-gray-600">Tech Valley, CA 94000</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-white/20">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">¿Necesitas ayuda inmediata?</h3>
                    <p className="text-gray-600 mb-4">
                      Visita nuestro centro de ayuda para encontrar respuestas a las preguntas más frecuentes.
                    </p>
                    <Button
                      variant="outline"
                      className="bg-white/60 backdrop-blur-sm border-gray-300 text-gray-700 hover:bg-white/80"
                    >
                      Centro de Ayuda
                    </Button>
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
        <section className="relative px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="scaleIn">
              <div className="glass-cta relative border border-white/50 rounded-3xl p-16 shadow-xl overflow-hidden">
                <div className="relative z-10">
                  <Sparkles className="h-20 w-20 mx-auto mb-8 text-yellow-500 animate-pulse will-change-transform" />
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                    <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Convierte tus Conversaciones
                    </span>
                    <br />
                    <span className="text-gray-900">en Conocimiento</span>
                  </h2>
                  <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                    Únete a miles de estudiantes y profesionales que ya están transformando su forma de aprender con IA.
                    El futuro del aprendizaje personalizado está aquí.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button
                      size="lg"
                      onClick={() => setIsOnboardingOpen(true)}
                      className="text-lg px-12 py-6 bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-700 hover:to-blue-800 text-white shadow-lg shadow-purple-500/15 transition-all duration-300 hover:scale-105 will-change-transform transform-gpu"
                    >
                      <Target className="mr-2 h-5 w-5" />
                      Empieza a Aprender Gratis
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-12 py-6 bg-white/60 backdrop-blur-sm border-gray-300 text-gray-700 hover:bg-white/80 hover:text-gray-900 transition-all duration-300 shadow-md will-change-transform transform-gpu"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Descargar App
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative px-4 py-16 border-t border-gray-200 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    AI Learn
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Transformando el futuro del aprendizaje con inteligencia artificial avanzada.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors">
                    <Smartphone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-purple-200 transition-colors">
                    <Laptop className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-green-200 transition-colors">
                    <Globe className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-4">Producto</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a href="#features" className="hover:text-blue-600 transition-colors">
                      Características
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="hover:text-blue-600 transition-colors">
                      Precios
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600 transition-colors">
                      API
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600 transition-colors">
                      Integraciones
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-4">Recursos</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-blue-600 transition-colors">
                      Documentación
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600 transition-colors">
                      Tutoriales
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600 transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600 transition-colors">
                      Comunidad
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-4">Soporte</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-blue-600 transition-colors">
                      Centro de Ayuda
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-blue-600 transition-colors">
                      Contacto
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600 transition-colors">
                      Estado del Sistema
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600 transition-colors">
                      Términos de Servicio
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 text-center">
              <p className="text-gray-500">© 2024 AI Learning Platform. Transformando el futuro del aprendizaje.</p>
            </div>
          </div>
        </footer>

        {/* Onboarding Modal */}
        <OnboardingModal isOpen={isOnboardingOpen} onClose={() => setIsOnboardingOpen(false)} />
      </div>
    </>
  )
}
