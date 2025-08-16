"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, ArrowLeft, ArrowRight, Check, Eye, EyeOff, Sparkles, Brain, Zap } from "lucide-react"

interface OnboardingModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  interests: string[]
  password: string
}

const STEPS = [
  { id: 1, title: "Bienvenida", description: "Comienza tu viaje de aprendizaje" },
  { id: 2, title: "Información", description: "Cuéntanos sobre ti" },
  { id: 3, title: "Intereses", description: "Personaliza tu experiencia" },
  { id: 4, title: "Seguridad", description: "Protege tu cuenta" },
  { id: 5, title: "Confirmación", description: "Revisa y confirma" },
]

const INTERESTS = [
  { id: "tech", label: "Tecnología", icon: "💻" },
  { id: "science", label: "Ciencias", icon: "🔬" },
  { id: "business", label: "Negocios", icon: "📊" },
  { id: "languages", label: "Idiomas", icon: "🌍" },
  { id: "arts", label: "Arte y Diseño", icon: "🎨" },
  { id: "health", label: "Salud", icon: "🏥" },
  { id: "education", label: "Educación", icon: "📚" },
  { id: "music", label: "Música", icon: "🎵" },
]

export function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    interests: [],
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 2:
        if (!formData.name.trim()) newErrors.name = "El nombre es requerido"
        if (!formData.email.trim()) newErrors.email = "El email es requerido"
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido"
        break
      case 3:
        if (formData.interests.length === 0) newErrors.interests = "Selecciona al menos un interés"
        break
      case 4:
        if (!formData.password) newErrors.password = "La contraseña es requerida"
        else if (formData.password.length < 8) newErrors.password = "Mínimo 8 caracteres"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, STEPS.length))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
    setErrors({})
  }

  const handleInterestToggle = (interestId: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter((id) => id !== interestId)
        : [...prev.interests, interestId],
    }))
  }

  const handleSubmit = async () => {
    if (!validateStep(4)) return

    setIsSubmitting(true)
    // Simular creación de cuenta
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setCurrentStep(5)
  }

  const getPasswordStrength = (password: string) => {
    if (password.length === 0) return { strength: 0, label: "" }
    if (password.length < 6) return { strength: 1, label: "Débil", color: "bg-red-500" }
    if (password.length < 8) return { strength: 2, label: "Regular", color: "bg-yellow-500" }
    if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password))
      return { strength: 3, label: "Fuerte", color: "bg-green-500" }
    return { strength: 2, label: "Regular", color: "bg-yellow-500" }
  }

  const passwordStrength = getPasswordStrength(formData.password)

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center space-y-8">
            <div className="relative">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25">
                <Brain className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Bienvenido a AI Learn
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
                Convierte tus grabaciones en aprendizaje personalizado con el poder de la inteligencia artificial
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-2xl">🎤</span>
                </div>
                <p className="text-xs text-gray-500">Transcribe</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-2xl">🧠</span>
                </div>
                <p className="text-xs text-gray-500">Analiza</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-2xl">📚</span>
                </div>
                <p className="text-xs text-gray-500">Aprende</p>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Cuéntanos sobre ti</h2>
              <p className="text-gray-600">Necesitamos algunos datos básicos para personalizar tu experiencia</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                    errors.name ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"
                  }`}
                  placeholder="Tu nombre completo"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                    errors.email ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">¿Qué te interesa aprender?</h2>
              <p className="text-gray-600">Selecciona tus áreas de interés para personalizar tu contenido</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {INTERESTS.map((interest) => (
                <button
                  key={interest.id}
                  onClick={() => handleInterestToggle(interest.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 text-left hover:scale-105 ${
                    formData.interests.includes(interest.id)
                      ? "border-purple-500 bg-purple-50 shadow-md shadow-purple-500/20"
                      : "border-gray-200 bg-white hover:border-purple-300"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="font-medium text-gray-900">{interest.label}</span>
                  </div>
                  {formData.interests.includes(interest.id) && <Check className="h-5 w-5 text-purple-600 ml-auto" />}
                </button>
              ))}
            </div>
            {errors.interests && <p className="text-red-500 text-sm text-center">{errors.interests}</p>}
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Protege tu cuenta</h2>
              <p className="text-gray-600">Crea una contraseña segura para mantener tus datos protegidos</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                      errors.password ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"
                    }`}
                    placeholder="Mínimo 8 caracteres"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                          style={{ width: `${(passwordStrength.strength / 3) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-600">{passwordStrength.label}</span>
                    </div>
                  </div>
                )}
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Tu contraseña debe tener:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <Check
                      className={`h-4 w-4 mr-2 ${formData.password.length >= 8 ? "text-green-500" : "text-gray-300"}`}
                    />
                    Al menos 8 caracteres
                  </li>
                  <li className="flex items-center">
                    <Check
                      className={`h-4 w-4 mr-2 ${/[A-Z]/.test(formData.password) ? "text-green-500" : "text-gray-300"}`}
                    />
                    Una letra mayúscula
                  </li>
                  <li className="flex items-center">
                    <Check
                      className={`h-4 w-4 mr-2 ${/[0-9]/.test(formData.password) ? "text-green-500" : "text-gray-300"}`}
                    />
                    Un número
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="text-center space-y-8">
            <div className="relative">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/25">
                <Check className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                <Zap className="h-4 w-4 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                ¡Tu cuenta está lista!
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto mb-8">
                Bienvenido a AI Learn, {formData.name}. Estás listo para comenzar tu viaje de aprendizaje personalizado.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 text-left max-w-md mx-auto">
              <h3 className="font-semibold text-gray-900 mb-4">Resumen de tu cuenta:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Nombre:</span>
                  <span className="font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Intereses:</span>
                  <span className="font-medium">{formData.interests.length} seleccionados</span>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white/95 backdrop-blur-sm border border-white/20 shadow-2xl">
        <CardContent className="p-0">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">AI Learn</h1>
                <p className="text-sm text-gray-500">
                  Paso {currentStep} de {STEPS.length}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              disabled={isSubmitting}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              {STEPS.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                      currentStep > step.id
                        ? "bg-purple-600 text-white"
                        : currentStep === step.id
                          ? "bg-purple-600 text-white ring-4 ring-purple-200"
                          : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
                  </div>
                  {index < STEPS.length - 1 && (
                    <div
                      className={`w-12 h-1 mx-2 rounded-full transition-all duration-300 ${
                        currentStep > step.id ? "bg-purple-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <h3 className="font-medium text-gray-900">{STEPS[currentStep - 1]?.title}</h3>
              <p className="text-sm text-gray-500">{STEPS[currentStep - 1]?.description}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 min-h-[400px] flex items-center">
            <div className="w-full">{renderStep()}</div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1 || isSubmitting}
              className="flex items-center space-x-2 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Volver</span>
            </Button>

            {currentStep < 4 ? (
              <Button
                onClick={nextStep}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex items-center space-x-2"
              >
                <span>Siguiente</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : currentStep === 4 ? (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                    <span>Creando cuenta...</span>
                  </>
                ) : (
                  <>
                    <span>Crear cuenta</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            ) : (
              <Button
                onClick={onClose}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white flex items-center space-x-2"
              >
                <span>Comenzar a aprender</span>
                <Zap className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
