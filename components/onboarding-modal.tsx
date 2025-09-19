"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  X,
  ArrowLeft,
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  Sparkles,
  Brain,
  Zap,
} from "lucide-react";
import { Logo } from "./Logo";

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  interests: string[];
  password: string;
  confirmPassword: string;
}

//TODO: Que una vez logeado se guarde la sesión y no vuelva a aparecer el modal (INVESTIGAR JWT + COOKIES)

const STEPS = [
  {
    id: 1,
    title: "BIENVENIDA",
    description: "COMIENZA TU VIAJE DE APRENDIZAJE",
  },
  { id: 2, title: "INFORMACIÓN", description: "CUÉNTANOS SOBRE TI" },
  { id: 3, title: "SEGURIDAD", description: "PROTEGE TU CUENTA" },
  { id: 4, title: "CONFIRMACIÓN", description: "REVISA Y CONFIRMA" },
];
export function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    interests: [],
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let onboardingData = sessionStorage.getItem("onboarding");
    if (!onboardingData) return;
    setFormData({
      ...formData,
      name: JSON.parse(onboardingData).name,
      email: JSON.parse(onboardingData).email,
    });
    setCurrentStep(4);
  }, []);

  if (!isOpen) return null;

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 2:
        if (!formData.name.trim()) newErrors.name = "EL NOMBRE ES REQUERIDO";
        if (!formData.email.trim()) newErrors.email = "EL EMAIL ES REQUERIDO";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
          newErrors.email = "EMAIL INVÁLIDO";
        break;
      case 3:
        if (!formData.password)
          newErrors.password = "LA CONTRASEÑA ES REQUERIDA";
        else if (formData.password.length < 8)
          newErrors.password = "MÍNIMO 8 CARACTERES";
        else if (!/[A-Z]/.test(formData.password))
          newErrors.password = "DEBE CONTENER AL MENOS UNA MAYÚSCULA";
        else if (!/[0-9]/.test(formData.password))
          newErrors.password = "DEBE CONTENER AL MENOS UN NÚMERO";
        else if (formData.password !== formData.confirmPassword)
          newErrors.password = "LAS CONTRASEÑAS NO COINCIDEN";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setErrors({});
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    sessionStorage.setItem(
      "onboarding",
      JSON.stringify({
        name: formData.name,
        email: formData.email,
      })
    );
    setIsSubmitting(false);
    setCurrentStep(4);
  };

  const getPasswordValidity = (password: string) => {
    if (password.length === 0) return { strength: 0, label: "" };
    if (password.length < 6)
      return { strength: 1, label: "DÉBIL", color: "bg-gray-400" };
    if (password.length < 8)
      return { strength: 2, label: "REGULAR", color: "bg-gray-600" };
    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password)
    )
      return { strength: 3, label: "FUERTE", color: "bg-black" };

    return { strength: 2, label: "REGULAR", color: "bg-gray-600" };
  };

  const passwordStrength = getPasswordValidity(formData.password);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center space-y-8">
            <div className="flex justify-center w-full">
              <Logo className="w-20" />
              {/* <div className="w-24 h-24 mx-auto bg-black flex items-center justify-center mb-6">
              </div> */}
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-black uppercase tracking-wide">
                BIENVENIDO
              </h2>
              <div className="mono-code max-w-xs sm:max-w-sm mx-auto">
                <div className="text-xs text-gray-600 mb-2">// DESCRIPCIÓN</div>
                <p className="text-sm text-black leading-relaxed">
                  Convierte tus grabaciones en aprendizaje personalizado con el
                  poder de la inteligencia artificial
                </p>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-black uppercase tracking-wide">
                CUÉNTANOS SOBRE TI
              </h2>
              <div className="mono-code">
                <div className="text-xs text-gray-600 mb-1">
                  // ENTRADA REQUERIDA
                </div>
                <p className="text-sm text-black">
                  Necesitamos algunos datos básicos para personalizar tu
                  experiencia
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                  NOMBRE COMPLETO
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-3 mono-input transition-all duration-200 ${
                    errors.name ? "border-red-500 bg-red-50" : ""
                  }`}
                  placeholder="TU NOMBRE COMPLETO"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 font-mono uppercase">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                  EMAIL
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 mono-input transition-all duration-200 ${
                    errors.email ? "border-red-500 bg-red-50" : ""
                  }`}
                  placeholder="TU@EMAIL.COM"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 font-mono uppercase">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-black uppercase tracking-wide">
                PROTEGE TU CUENTA
              </h2>
              <div className="mono-code">
                <div className="text-xs text-gray-600 mb-1">// SEGURIDAD</div>
                <p className="text-sm text-black">
                  Crea una contraseña segura para mantener tus datos protegidos
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                  CONTRASEÑA
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className={`w-full px-4 py-3 pr-12 mono-input transition-all duration-200 ${
                      errors.password ? "border-red-500 bg-red-50" : ""
                    }`}
                    placeholder="MÍNIMO 8 CARACTERES"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black hover:bg-black hover:text-white p-1 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide mt-4">
                  REPETIR CONTRASEÑA
                </label>
                <div className="relative">
                  <input
                    type={"password"}
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className={`w-full px-4 py-3 pr-12 mono-input transition-all duration-200 ${
                      errors.password ? "border-red-500 bg-red-50" : ""
                    }`}
                  />
                </div>
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="flex-1 bg-gray-200 h-2 border border-black">
                        <div
                          className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                          style={{
                            width: `${(passwordStrength.strength / 3) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="text-sm font-bold text-black uppercase tracking-wide">
                        {passwordStrength.label}
                      </span>
                    </div>
                  </div>
                )}
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1 font-mono uppercase">
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="mono-code">
                <h4 className="text-sm font-bold text-black mb-2 uppercase">
                  // REQUISITOS DE CONTRASEÑA
                </h4>
                <ul className="text-sm text-black space-y-1">
                  <li className="flex items-center">
                    <div
                      className={`w-3 h-3 mr-2 ${
                        formData.password.length >= 8
                          ? "bg-green-700"
                          : "bg-gray-300"
                      }`}
                    ></div>
                    AL MENOS 8 CARACTERES
                  </li>
                  <li className="flex items-center">
                    <div
                      className={`w-3 h-3 mr-2 ${
                        /[A-Z]/.test(formData.password)
                          ? "bg-green-700"
                          : "bg-gray-300"
                      }`}
                    ></div>
                    UNA LETRA MAYÚSCULA
                  </li>
                  <li className="flex items-center">
                    <div
                      className={`w-3 h-3 mr-2 ${
                        /[0-9]/.test(formData.password)
                          ? "bg-green-700"
                          : "bg-gray-300"
                      }`}
                    ></div>
                    UN NÚMERO
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-8">
            <div className="relative">
              <div className="w-24 h-24 mx-auto bg-black flex items-center justify-center mb-6">
                <Check className="h-12 w-12 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-black uppercase tracking-wide">
                ¡TU CUENTA ESTÁ LISTA!
              </h2>
              <div className="mono-code max-w-md mx-auto mb-8">
                <div className="text-xs text-gray-600 mb-2">// ÉXITO</div>
                <p className="text-sm text-black leading-relaxed">
                  Bienvenido a AI Learn, <b>{formData.name.trim()}</b>. Estás
                  listo para comenzar tu viaje de aprendizaje personalizado.
                </p>
              </div>
            </div>
            <div className="mono-card p-6 text-left max-w-md mx-auto">
              <h3 className="font-bold text-black mb-4 uppercase tracking-wide">
                // RESUMEN DE CUENTA
              </h3>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-gray-600 uppercase">NOMBRE:</span>
                  <span className="font-bold text-black">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 uppercase">EMAIL:</span>
                  <span className="font-bold text-black">{formData.email}</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-sm sm:max-w-lg lg:max-w-2xl bg-white border-4 border-black mx-4 !p-0">
        <CardContent className="p-0">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b-2 border-black bg-black text-white">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <Brain className="h-5 w-5 text-black" />
              </div>
              <div>
                <h1 className="text-lg font-bold uppercase tracking-wide">
                  AI LEARN
                </h1>
                <p className="text-sm uppercase tracking-wide">
                  PASO {currentStep} DE {STEPS.length}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white hover:text-black p-2 transition-colors"
              disabled={isSubmitting}
            >
              <X className="h-6 w-6 cursor-pointer" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-b-2 border-black">
            <div className="flex items-center mb-2">
              {STEPS.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center ${
                    index + 1 != STEPS.length && `grow`
                  }`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center text-sm font-bold transition-all duration-300 border-2 border-black ${
                      currentStep > step.id
                        ? "bg-black text-white"
                        : currentStep === step.id
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      step.id
                    )}
                  </div>
                  {index < STEPS.length - 1 && (
                    <div
                      className={`grow h-1 mx-2 transition-all duration-300 border border-black ${
                        currentStep > step.id ? "bg-black" : "bg-white"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <h3 className="font-bold text-black uppercase tracking-wide">
                {STEPS[currentStep - 1]?.title}
              </h3>
              <p className="text-sm text-gray-600 uppercase tracking-wide">
                {STEPS[currentStep - 1]?.description}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 lg:p-8 min-h-[300px] sm:min-h-[400px] flex items-center">
            <div className="w-full">{renderStep()}</div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-t-2 border-black bg-gray-50">
            {currentStep != 4 ? (
              <Button
                onClick={prevStep}
                disabled={currentStep === 1 || isSubmitting}
                className="mono-button flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>VOLVER</span>
              </Button>
            ) : null}

            {currentStep < 3 ? (
              <Button
                onClick={nextStep}
                disabled={isSubmitting}
                className="mono-button-primary flex items-center space-x-2"
              >
                <span>SIGUIENTE</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : currentStep === 3 ? (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="mono-button-primary flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div
                      className="animate-spin w-4 h-4 border-2 !rounded-full border-white border-t-transparent"
                      style={{ borderRadius: "50% !important" }}
                    />
                    <span>CREANDO CUENTA...</span>
                  </>
                ) : (
                  <>
                    <span>CREAR CUENTA</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            ) : (
              //TODO: redir to app
              <Button
                onClick={onClose}
                className="mono-button-primary flex items-center space-x-2 ml-auto"
              >
                <span>COMENZAR A APRENDER</span>
                <Zap className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
