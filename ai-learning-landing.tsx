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
        <section className="relative px-4 pt-32 pb-20 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <AnimatedSection animation="fadeIn" delay={200}>
                  <div className="text-sm font-medium text-black mb-6 tracking-widest uppercase border-2 border-black bg-white px-4 py-2 inline-block">
                    01. TRANSFORM_YOUR_LEARNING
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={400}>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black tracking-tight uppercase">
                    TURN AUDIO INTO <span className="bg-black text-white px-2">KNOWLEDGE</span> EASILY.
                  </h1>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={600}>
                  <div className="mono-code">
                    <div className="text-sm text-gray-600 mb-2">// DESCRIPTION</div>
                    <p className="text-lg text-black leading-relaxed">
                      Transform any conversation or recording into structured learning without deep technical knowledge.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={800}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      onClick={() => setIsOnboardingOpen(true)}
                      className="text-lg px-8 py-4 mono-button-primary"
                    >
                      START_FREE
                    </Button>
                    <Button size="lg" className="text-lg px-8 py-4 mono-button">
                      LEARN_MORE
                    </Button>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Terminal-style Scene */}
              <div className="relative h-[600px] lg:h-[700px]">
                <AnimatedSection animation="fadeInRight" delay={600}>
                  {/* Main Terminal Window */}
                  <div className="absolute inset-0 bg-white border-4 border-black">
                    {/* Terminal Header */}
                    <div className="bg-black text-white p-4 font-mono text-sm">
                      <div className="flex items-center justify-between">
                        <span>AI_LEARN_TERMINAL</span>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-white"></div>
                          <div className="w-3 h-3 bg-white"></div>
                          <div className="w-3 h-3 bg-white"></div>
                        </div>
                      </div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 space-y-4 text-sm">
                      <div>
                        <span className="text-gray-600">$</span> ai-learn --process audio.mp3
                      </div>
                      <div className="text-gray-600">[INFO] Processing audio file...</div>
                      <div className="text-gray-600">[SUCCESS] Transcription complete: 98% accuracy</div>
                      <div className="text-gray-600">[SUCCESS] Summary generated: 5 key concepts</div>
                      <div className="text-gray-600">[SUCCESS] Quiz created: 10 questions</div>
                      <div>
                        <span className="text-gray-600">$</span> <span className="animate-pulse">_</span>
                      </div>
                    </div>

                    {/* Floating Feature Cards */}
                    <div className="absolute inset-0 p-8">
                      {/* AI Card */}
                      <AnimatedSection animation="scaleIn" delay={1000}>
                        <div className="absolute top-24 left-8 w-48 mono-card p-4 bg-white">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-black flex items-center justify-center">
                              <Brain className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-bold text-xs uppercase">AI_ENGINE</span>
                          </div>
                          <p className="text-xs text-gray-700">Advanced algorithms for intelligent processing.</p>
                        </div>
                      </AnimatedSection>

                      {/* Analytics Card */}
                      <AnimatedSection animation="scaleIn" delay={1200}>
                        <div className="absolute top-48 right-4 w-44 mono-card p-4 bg-white">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-black flex items-center justify-center">
                              <Zap className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-bold text-xs uppercase">ANALYTICS</span>
                          </div>
                          <p className="text-xs text-gray-700">Real-time data insights.</p>
                        </div>
                      </AnimatedSection>

                      {/* Community Card */}
                      <AnimatedSection animation="scaleIn" delay={1400}>
                        <div className="absolute bottom-20 left-4 w-48 mono-card p-4 bg-white">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-black flex items-center justify-center">
                              <Users className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-bold text-xs uppercase">COMMUNITY</span>
                          </div>
                          <p className="text-xs text-gray-700">Active community of learners.</p>
                        </div>
                      </AnimatedSection>

                      {/* Development Card */}
                      <AnimatedSection animation="scaleIn" delay={1600}>
                        <div className="absolute bottom-8 right-8 w-44 mono-card p-4 bg-white">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-black flex items-center justify-center">
                              <Laptop className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-bold text-xs uppercase">DEV_TOOLS</span>
                          </div>
                          <p className="text-xs text-gray-700">Better development cycles.</p>
                        </div>
                      </AnimatedSection>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Stats */}
            <AnimatedSection animation="fadeInUp" delay={1800}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20 pt-16 border-t-2 border-black">
                <div className="text-center mono-card p-6">
                  <div className="text-3xl font-bold text-black mb-2">10,000+</div>
                  <div className="text-gray-600 uppercase tracking-wide text-sm">ACTIVE_USERS</div>
                </div>
                <div className="text-center mono-card p-6">
                  <div className="text-3xl font-bold text-black mb-2">50M+</div>
                  <div className="text-gray-600 uppercase tracking-wide text-sm">MINUTES_PROCESSED</div>
                </div>
                <div className="text-center mono-card p-6">
                  <div className="text-3xl font-bold text-black mb-2">98%</div>
                  <div className="text-gray-600 uppercase tracking-wide text-sm">AI_ACCURACY</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative px-4 py-32 bg-white">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight uppercase">
                  MAIN_FEATURES
                </h2>
                <div className="mono-code max-w-3xl mx-auto">
                  <div className="text-sm text-gray-600 mb-2">// DESCRIPTION</div>
                  <p className="text-lg text-black">
                    Discover how our AI technology revolutionizes learning and information processing
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-10">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <Card className="mono-card h-full">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto bg-black flex items-center justify-center mb-4">
                        <Mic className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-4 h-4 bg-black mx-auto"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">SMART_TRANSCRIPTION</h3>
                    <div className="mono-code text-left mb-4">
                      <div className="text-xs text-gray-600 mb-1">// FEATURES</div>
                      <p className="text-sm text-black">
                        Convert audio to precise text using advanced AI voice recognition technology.
                      </p>
                    </div>
                    <ul className="text-xs text-gray-600 space-y-2 text-left">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-black mr-2"></div>
                        50+ LANGUAGES SUPPORTED
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-black mr-2"></div>
                        98% ACCURACY RATE
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-black mr-2"></div>
                        REAL-TIME PROCESSING
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
                    <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">AI_SUMMARY</h3>
                    <div className="mono-code text-left mb-4">
                      <div className="text-xs text-gray-600 mb-1">// FEATURES</div>
                      <p className="text-sm text-black">
                        Extract key ideas and concepts using cutting-edge language models.
                      </p>
                    </div>
                    <ul className="text-xs text-gray-600 space-y-2 text-left">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-black mr-2"></div>
                        PERSONALIZED SUMMARIES
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-black mr-2"></div>
                        KEY CONCEPT EXTRACTION
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-black mr-2"></div>
                        SENTIMENT ANALYSIS
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
                    <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">INTERACTIVE_QUIZZES</h3>
                    <div className="mono-code text-left mb-4">
                      <div className="text-xs text-gray-600 mb-1">// FEATURES</div>
                      <p className="text-sm text-black">
                        Generate personalized quizzes that reinforce learning and assess comprehension.
                      </p>
                    </div>
                    <ul className="text-xs text-gray-600 space-y-2 text-left">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-black mr-2"></div>
                        ADAPTIVE QUESTIONS
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-black mr-2"></div>
                        INSTANT FEEDBACK
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-black mr-2"></div>
                        PROGRESS TRACKING
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative px-4 py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight uppercase">
                  WHY_CHOOSE_AI_LEARN?
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection animation="scaleIn" delay={200}>
                <div className="text-center mono-card p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-black flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-black uppercase tracking-wide">SAVE_TIME</h3>
                  <p className="text-sm text-gray-600">Process hours of audio in minutes and get instant summaries</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={400}>
                <div className="text-center mono-card p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-black flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-black uppercase tracking-wide">SECURE_PRIVATE</h3>
                  <p className="text-sm text-gray-600">Your data is protected with enterprise-level encryption</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={600}>
                <div className="text-center mono-card p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-black flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-black uppercase tracking-wide">COLLABORATIVE</h3>
                  <p className="text-sm text-gray-600">Share and collaborate on learning projects with your team</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={800}>
                <div className="text-center mono-card p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-black flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-black uppercase tracking-wide">CROSS_PLATFORM</h3>
                  <p className="text-sm text-gray-600">Access from any device, anywhere</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="relative px-4 py-32 bg-white">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight uppercase">
                  HOW_IT_WORKS
                </h2>
                <div className="mono-code max-w-3xl mx-auto">
                  <div className="text-sm text-gray-600 mb-2">// PROCESS</div>
                  <p className="text-lg text-black">
                    Three simple steps to transform your audio into structured knowledge
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-12 items-center">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <div className="text-center mono-card p-8">
                  <div className="w-20 h-20 mx-auto bg-black flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">PROVIDE_AUDIO</h3>
                  <div className="mono-code text-left">
                    <div className="text-xs text-gray-600 mb-1">// INPUT</div>
                    <p className="text-sm text-black">
                      Upload audio file, record directly, or connect microphone for live sessions
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <div className="hidden md:flex justify-center">
                <AnimatedSection animation="fadeIn" delay={400}>
                  <div className="text-4xl font-bold text-black">→</div>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="text-center mono-card p-8">
                  <div className="w-20 h-20 mx-auto bg-black flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">AI_PROCESSES</h3>
                  <div className="mono-code text-left">
                    <div className="text-xs text-gray-600 mb-1">// PROCESSING</div>
                    <p className="text-sm text-black">
                      Our AI transcribes, analyzes content and extracts key ideas using advanced algorithms
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <div className="hidden md:flex justify-center">
                <AnimatedSection animation="fadeIn" delay={800}>
                  <div className="text-4xl font-bold text-black">→</div>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fadeInRight" delay={1000}>
                <div className="text-center mono-card p-8">
                  <div className="w-20 h-20 mx-auto bg-black flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">LEARN_ACTIVELY</h3>
                  <div className="mono-code text-left">
                    <div className="text-xs text-gray-600 mb-1">// OUTPUT</div>
                    <p className="text-sm text-black">
                      Receive structured summaries, personalized quizzes and optimized study material
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative px-4 py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight uppercase">
                  USER_TESTIMONIALS
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <Card className="mono-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-black text-lg">★★★★★</div>
                    </div>
                    <div className="mono-code mb-4">
                      <div className="text-xs text-gray-600 mb-1">// REVIEW</div>
                      <p className="text-sm text-black">
                        "AI Learn has revolutionized how I process lectures. I can now convert hours of audio into
                        useful summaries in minutes."
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-black flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">MR</span>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm uppercase">MARIA_RODRIGUEZ</div>
                        <div className="text-gray-600 text-xs uppercase">MEDICAL_STUDENT</div>
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
                      <div className="text-xs text-gray-600 mb-1">// REVIEW</div>
                      <p className="text-sm text-black">
                        "As a professor, I use AI Learn to create study material from my classes. The generated quizzes
                        are incredibly accurate."
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-black flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">CL</span>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm uppercase">CARLOS_LOPEZ</div>
                        <div className="text-gray-600 text-xs uppercase">UNIVERSITY_PROFESSOR</div>
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
                      <div className="text-xs text-gray-600 mb-1">// REVIEW</div>
                      <p className="text-sm text-black">
                        "The transcription accuracy is impressive. I've improved my productivity by 300% since using AI
                        Learn."
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-black flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">AS</span>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm uppercase">ANA_SILVA</div>
                        <div className="text-gray-600 text-xs uppercase">BUSINESS_CONSULTANT</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative px-4 py-32 bg-white">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight uppercase">
                  PRICING_PLANS
                </h2>
                <div className="mono-code max-w-3xl mx-auto">
                  <div className="text-sm text-gray-600 mb-2">// OPTIONS</div>
                  <p className="text-lg text-black">
                    Choose the perfect plan for your usage level and start transforming your learning today
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <Card className="mono-card border-4 border-black relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 text-sm font-bold uppercase tracking-wide">
                    MOST_POPULAR
                  </div>
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-black uppercase tracking-wide">PRO_PLAN</h3>
                    <div className="text-4xl font-bold mb-6 text-black">
                      $19<span className="text-lg text-gray-600">/MONTH</span>
                    </div>
                    <div className="mono-code mb-6">
                      <div className="text-xs text-gray-600 mb-1">// TARGET</div>
                      <p className="text-sm text-black">Perfect for students and professionals</p>
                    </div>
                    <ul className="space-y-3 mb-8 text-left text-sm">
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        50 HOURS AUDIO/MONTH
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        ADVANCED AI TRANSCRIPTION
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        PERSONALIZED SUMMARIES
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        UNLIMITED ADAPTIVE QUIZZES
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        24/7 PRIORITY SUPPORT
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        MULTI-FORMAT EXPORT
                      </li>
                    </ul>
                    <Button
                      onClick={() => setIsOnboardingOpen(true)}
                      className="w-full mono-button-primary py-4 text-lg font-medium"
                    >
                      START_FREE_TRIAL
                    </Button>
                    <p className="text-xs text-gray-500 mt-4 uppercase tracking-wide">14_DAYS_FREE_CANCEL_ANYTIME</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={400}>
                <Card className="mono-card">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-black uppercase tracking-wide">ENTERPRISE_PLAN</h3>
                    <div className="text-4xl font-bold mb-6 text-black">
                      $99<span className="text-lg text-gray-600">/MONTH</span>
                    </div>
                    <div className="mono-code mb-6">
                      <div className="text-xs text-gray-600 mb-1">// TARGET</div>
                      <p className="text-sm text-black">For teams and organizations</p>
                    </div>
                    <ul className="space-y-3 mb-8 text-left text-sm">
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        UNLIMITED AUDIO FOR TEAM
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        CUSTOM AI FOR INDUSTRY
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        COMPLETE API INTEGRATIONS
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        UNLIMITED TEAM COLLABORATION
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        DEDICATED SUPPORT & ONBOARDING
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-black mr-3"></div>
                        ADVANCED ANALYTICS & REPORTS
                      </li>
                    </ul>
                    <Button className="w-full mono-button py-4 text-lg font-medium">CONTACT_SALES</Button>
                    <p className="text-xs text-gray-500 mt-4 uppercase tracking-wide">CUSTOM_DEMO_INCLUDED</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative px-4 py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight uppercase">CONTACT_US</h2>
                <div className="mono-code max-w-3xl mx-auto">
                  <div className="text-sm text-gray-600 mb-2">// SUPPORT</div>
                  <p className="text-lg text-black">
                    Our team is here to help. Send us a message and we'll respond as soon as possible.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <div className="space-y-6">
                  <div className="mono-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black mb-2 uppercase">EMAIL</h3>
                        <p className="text-gray-600 font-mono">hello@ailearn.com</p>
                        <p className="text-gray-600 font-mono">support@ailearn.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mono-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black mb-2 uppercase">PHONE</h3>
                        <p className="text-gray-600 font-mono">+1 (555) 123-4567</p>
                        <p className="text-gray-500 text-sm uppercase">MON-FRI, 9:00-18:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="mono-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black mb-2 uppercase">OFFICE</h3>
                        <p className="text-gray-600 font-mono">123 Innovation Street</p>
                        <p className="text-gray-600 font-mono">Tech Valley, CA 94000</p>
                      </div>
                    </div>
                  </div>

                  <div className="mono-card p-6">
                    <h3 className="text-lg font-bold text-black mb-3 uppercase">NEED_IMMEDIATE_HELP?</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Visit our help center to find answers to frequently asked questions.
                    </p>
                    <Button className="mono-button">HELP_CENTER</Button>
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
        <section className="relative px-4 py-32 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="scaleIn">
              <div className="mono-card p-16 border-4 border-black">
                <div className="w-16 h-16 mx-auto mb-8 bg-black flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight uppercase">
                  TURN_CONVERSATIONS_INTO_KNOWLEDGE
                </h2>
                <div className="mono-code mb-12 max-w-3xl mx-auto">
                  <div className="text-sm text-gray-600 mb-2">// CALL_TO_ACTION</div>
                  <p className="text-lg text-black leading-relaxed">
                    Join thousands of students and professionals already transforming their learning with AI. The future
                    of personalized learning is here.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    size="lg"
                    onClick={() => setIsOnboardingOpen(true)}
                    className="text-lg px-12 py-6 mono-button-primary"
                  >
                    <Target className="mr-2 h-5 w-5" />
                    START_LEARNING_FREE
                  </Button>
                  <Button size="lg" className="text-lg px-12 py-6 mono-button">
                    <Download className="mr-2 h-5 w-5" />
                    DOWNLOAD_APP
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative px-4 py-16 border-t-2 border-black bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-black flex items-center justify-center">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-black uppercase tracking-wider">AI_LEARN</span>
                </div>
                <div className="mono-code mb-4">
                  <div className="text-xs text-gray-600 mb-1">// MISSION</div>
                  <p className="text-sm text-black">
                    Transforming the future of learning with advanced artificial intelligence.
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
                <h4 className="font-bold text-black mb-4 uppercase tracking-wide">PRODUCT</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    <a href="#features" className="hover:text-black transition-colors uppercase">
                      FEATURES
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="hover:text-black transition-colors uppercase">
                      PRICING
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      API
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      INTEGRATIONS
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-black mb-4 uppercase tracking-wide">RESOURCES</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      DOCUMENTATION
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      TUTORIALS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      BLOG
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      COMMUNITY
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-black mb-4 uppercase tracking-wide">SUPPORT</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      HELP_CENTER
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-black transition-colors uppercase">
                      CONTACT
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      SYSTEM_STATUS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors uppercase">
                      TERMS_OF_SERVICE
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t-2 border-black pt-8 text-center">
              <div className="mono-code">
                <div className="text-xs text-gray-600 mb-1">// COPYRIGHT</div>
                <p className="text-sm text-black uppercase tracking-wide">
                  © 2024 AI_LEARNING_PLATFORM. TRANSFORMING_THE_FUTURE_OF_LEARNING.
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
