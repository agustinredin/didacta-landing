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
  { id: 1, title: "WELCOME", description: "START_YOUR_LEARNING_JOURNEY" },
  { id: 2, title: "INFO", description: "TELL_US_ABOUT_YOURSELF" },
  { id: 3, title: "INTERESTS", description: "CUSTOMIZE_YOUR_EXPERIENCE" },
  { id: 4, title: "SECURITY", description: "PROTECT_YOUR_ACCOUNT" },
  { id: 5, title: "CONFIRMATION", description: "REVIEW_AND_CONFIRM" },
]

const INTERESTS = [
  { id: "tech", label: "TECHNOLOGY", icon: "💻" },
  { id: "science", label: "SCIENCE", icon: "🔬" },
  { id: "business", label: "BUSINESS", icon: "📊" },
  { id: "languages", label: "LANGUAGES", icon: "🌍" },
  { id: "arts", label: "ART_DESIGN", icon: "🎨" },
  { id: "health", label: "HEALTH", icon: "🏥" },
  { id: "education", label: "EDUCATION", icon: "📚" },
  { id: "music", label: "MUSIC", icon: "🎵" },
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
        if (!formData.name.trim()) newErrors.name = "NAME_IS_REQUIRED"
        if (!formData.email.trim()) newErrors.email = "EMAIL_IS_REQUIRED"
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "INVALID_EMAIL"
        break
      case 3:
        if (formData.interests.length === 0) newErrors.interests = "SELECT_AT_LEAST_ONE_INTEREST"
        break
      case 4:
        if (!formData.password) newErrors.password = "PASSWORD_IS_REQUIRED"
        else if (formData.password.length < 8) newErrors.password = "MINIMUM_8_CHARACTERS"
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
    if (password.length < 6) return { strength: 1, label: "WEAK", color: "bg-gray-400" }
    if (password.length < 8) return { strength: 2, label: "FAIR", color: "bg-gray-600" }
    if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password))
      return { strength: 3, label: "STRONG", color: "bg-black" }
    return { strength: 2, label: "FAIR", color: "bg-gray-600" }
  }

  const passwordStrength = getPasswordStrength(formData.password)

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center space-y-8">
            <div className="relative">
              <div className="w-24 h-24 mx-auto bg-black flex items-center justify-center mb-6">
                <Brain className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-black flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-black uppercase tracking-wide">WELCOME_TO_AI_LEARN</h2>
              <div className="mono-code max-w-md mx-auto">
                <div className="text-xs text-gray-600 mb-2">// DESCRIPTION</div>
                <p className="text-sm text-black leading-relaxed">
                  Transform your recordings into personalized learning with the power of artificial intelligence
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
              <div className="text-center mono-card p-3">
                <div className="w-8 h-8 bg-black mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-lg">🎤</span>
                </div>
                <p className="text-xs text-black uppercase">TRANSCRIBE</p>
              </div>
              <div className="text-center mono-card p-3">
                <div className="w-8 h-8 bg-black mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-lg">🧠</span>
                </div>
                <p className="text-xs text-black uppercase">ANALYZE</p>
              </div>
              <div className="text-center mono-card p-3">
                <div className="w-8 h-8 bg-black mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-lg">📚</span>
                </div>
                <p className="text-xs text-black uppercase">LEARN</p>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2 text-black uppercase tracking-wide">TELL_US_ABOUT_YOU</h2>
              <div className="mono-code">
                <div className="text-xs text-gray-600 mb-1">// INPUT_REQUIRED</div>
                <p className="text-sm text-black">We need some basic data to personalize your experience</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">FULL_NAME</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 mono-input transition-all duration-200 ${
                    errors.name ? "border-red-500 bg-red-50" : ""
                  }`}
                  placeholder="YOUR_FULL_NAME"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1 font-mono uppercase">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">EMAIL</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 mono-input transition-all duration-200 ${
                    errors.email ? "border-red-500 bg-red-50" : ""
                  }`}
                  placeholder="YOUR@EMAIL.COM"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1 font-mono uppercase">{errors.email}</p>}
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2 text-black uppercase tracking-wide">WHAT_INTERESTS_YOU?</h2>
              <div className="mono-code">
                <div className="text-xs text-gray-600 mb-1">// SELECT_TOPICS</div>
                <p className="text-sm text-black">Select your areas of interest to personalize your content</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {INTERESTS.map((interest) => (
                <button
                  key={interest.id}
                  onClick={() => handleInterestToggle(interest.id)}
                  className={`p-4 border-2 transition-all duration-200 text-left hover:translate-x-1 hover:translate-y-1 ${
                    formData.interests.includes(interest.id)
                      ? "border-black bg-black text-white"
                      : "border-black bg-white text-black hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{interest.icon}</span>
                    <span className="font-bold text-sm uppercase tracking-wide">{interest.label}</span>
                  </div>
                  {formData.interests.includes(interest.id) && <Check className="h-4 w-4 text-white ml-auto mt-2" />}
                </button>
              ))}
            </div>
            {errors.interests && (
              <p className="text-red-500 text-sm text-center font-mono uppercase">{errors.interests}</p>
            )}
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2 text-black uppercase tracking-wide">PROTECT_YOUR_ACCOUNT</h2>
              <div className="mono-code">
                <div className="text-xs text-gray-600 mb-1">// SECURITY</div>
                <p className="text-sm text-black">Create a secure password to keep your data protected</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">PASSWORD</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className={`w-full px-4 py-3 pr-12 mono-input transition-all duration-200 ${
                      errors.password ? "border-red-500 bg-red-50" : ""
                    }`}
                    placeholder="MINIMUM_8_CHARACTERS"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black hover:bg-black hover:text-white p-1 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="flex-1 bg-gray-200 h-2 border border-black">
                        <div
                          className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                          style={{ width: `${(passwordStrength.strength / 3) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-black uppercase tracking-wide">
                        {passwordStrength.label}
                      </span>
                    </div>
                  </div>
                )}
                {errors.password && <p className="text-red-500 text-sm mt-1 font-mono uppercase">{errors.password}</p>}
              </div>
              <div className="mono-code">
                <h4 className="text-sm font-bold text-black mb-2 uppercase">// PASSWORD_REQUIREMENTS</h4>
                <ul className="text-sm text-black space-y-1">
                  <li className="flex items-center">
                    <div className={`w-3 h-3 mr-2 ${formData.password.length >= 8 ? "bg-black" : "bg-gray-300"}`}></div>
                    AT_LEAST_8_CHARACTERS
                  </li>
                  <li className="flex items-center">
                    <div
                      className={`w-3 h-3 mr-2 ${/[A-Z]/.test(formData.password) ? "bg-black" : "bg-gray-300"}`}
                    ></div>
                    ONE_UPPERCASE_LETTER
                  </li>
                  <li className="flex items-center">
                    <div
                      className={`w-3 h-3 mr-2 ${/[0-9]/.test(formData.password) ? "bg-black" : "bg-gray-300"}`}
                    ></div>
                    ONE_NUMBER
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
              <div className="w-24 h-24 mx-auto bg-black flex items-center justify-center mb-6">
                <Check className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-black flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-black uppercase tracking-wide">ACCOUNT_READY!</h2>
              <div className="mono-code max-w-md mx-auto mb-8">
                <div className="text-xs text-gray-600 mb-2">// SUCCESS</div>
                <p className="text-sm text-black leading-relaxed">
                  Welcome to AI Learn, {formData.name}. You're ready to start your personalized learning journey.
                </p>
              </div>
            </div>
            <div className="mono-card p-6 text-left max-w-md mx-auto">
              <h3 className="font-bold text-black mb-4 uppercase tracking-wide">// ACCOUNT_SUMMARY</h3>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-gray-600 uppercase">NAME:</span>
                  <span className="font-bold text-black">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 uppercase">EMAIL:</span>
                  <span className="font-bold text-black">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 uppercase">INTERESTS:</span>
                  <span className="font-bold text-black">{formData.interests.length}_SELECTED</span>
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
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white border-4 border-black">
        <CardContent className="p-0">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b-2 border-black bg-black text-white">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <Brain className="h-5 w-5 text-black" />
              </div>
              <div>
                <h1 className="text-lg font-bold uppercase tracking-wide">AI_LEARN</h1>
                <p className="text-sm uppercase tracking-wide">
                  STEP_{currentStep}_OF_{STEPS.length}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white hover:text-black p-2 transition-colors"
              disabled={isSubmitting}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-4 bg-gray-50 border-b-2 border-black">
            <div className="flex items-center justify-between mb-2">
              {STEPS.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-8 h-8 flex items-center justify-center text-sm font-bold transition-all duration-300 border-2 border-black ${
                      currentStep > step.id
                        ? "bg-black text-white"
                        : currentStep === step.id
                          ? "bg-black text-white"
                          : "bg-white text-black"
                    }`}
                  >
                    {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
                  </div>
                  {index < STEPS.length - 1 && (
                    <div
                      className={`w-12 h-1 mx-2 transition-all duration-300 border border-black ${
                        currentStep > step.id ? "bg-black" : "bg-white"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <h3 className="font-bold text-black uppercase tracking-wide">{STEPS[currentStep - 1]?.title}</h3>
              <p className="text-sm text-gray-600 uppercase tracking-wide">{STEPS[currentStep - 1]?.description}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 min-h-[400px] flex items-center">
            <div className="w-full">{renderStep()}</div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t-2 border-black bg-gray-50">
            <Button
              onClick={prevStep}
              disabled={currentStep === 1 || isSubmitting}
              className="mono-button flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>BACK</span>
            </Button>

            {currentStep < 4 ? (
              <Button
                onClick={nextStep}
                disabled={isSubmitting}
                className="mono-button-primary flex items-center space-x-2"
              >
                <span>NEXT</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : currentStep === 4 ? (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="mono-button-primary flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent" />
                    <span>CREATING...</span>
                  </>
                ) : (
                  <>
                    <span>CREATE_ACCOUNT</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            ) : (
              <Button onClick={onClose} className="mono-button-primary flex items-center space-x-2">
                <span>START_LEARNING</span>
                <Zap className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
