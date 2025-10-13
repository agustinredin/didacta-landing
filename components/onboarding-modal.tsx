"use client";

import {
  useEffect,
  useState,
  useRef,
  type ClipboardEvent,
  type KeyboardEvent,
} from "react";
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
    title: "ONBOARDING",
  },
  { id: 2, title: "INFORMACIÓN" },
  { id: 3, title: "VERIFICACIÓN" },
  { id: 4, title: "SEGURIDAD" },
  { id: 5, title: "CONFIRMACIÓN" },
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
  const [isSendingVerification, setIsSendingVerification] = useState(false);
  const [isVerifyingCode, setIsVerifyingCode] = useState(false);
  const [verificationEmailError, setVerificationEmailError] = useState<
    string | null
  >(null);
  const [codeError, setCodeError] = useState<string | null>(null);
  const [verificationCode, setVerificationCode] = useState<string[]>(
    Array(5).fill("")
  );
  const codeInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    let onboardingData = sessionStorage.getItem("onboarding");
    if (!onboardingData) return;
    setFormData({
      ...formData,
      name: JSON.parse(onboardingData).name,
      email: JSON.parse(onboardingData).email,
    });
    setCurrentStep(5);
  }, []);

  useEffect(() => {
    if (currentStep === 4) {
      const timeout = setTimeout(() => {
        codeInputRefs.current[0]?.focus();
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [currentStep]);

  if (!isOpen) return null;

  const validateStep = async (step: number): Promise<boolean> => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 2:
        if (!formData.name.trim()) newErrors.name = "EL NOMBRE ES REQUERIDO";
        if (formData.name.trim().length < 4)
          newErrors.name = "EL NOMBRE DEBE TENER AL MENOS 4 CARACTERES";
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
        else if (!/[\W_]/.test(formData.password))
          newErrors.password = "DEBE CONTENER AL MENOS UN CARÁCTER ESPECIAL";
        else if (formData.password !== formData.confirmPassword)
          newErrors.password = "LAS CONTRASEÑAS NO COINCIDEN";
        if (!(await sendVerificationEmail())) {
          return false;
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendVerificationEmail = async () => {
    setIsSendingVerification(true);
    setVerificationEmailError(null);
    setCodeError(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verification-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            name: formData.name,
            password: formData.password,
          }),
        }
      );

      if (!response.ok) {
        let message = "NO SE PUDO ENVIAR EL CÓDIGO";
        try {
          const data = await response.json();
          if (data?.message) message = data.message;
          if (response?.status === 409) {
            message = `EMAIL YA REGISTRADO. <a href='/${process.env.NEXT_PUBLIC_APP_URL}' class='underline text-blue-600' target='_blank'>INICIAR SESIÓN</a>`;
            let error = new Error(message);
            throw error;
          }
        } catch (error) {
          // ignore json parsing error
        }

        throw new Error(message);
      }

      setVerificationCode(Array(5).fill(""));
      return true;
    } catch (error) {
      setVerificationEmailError(
        error instanceof Error ? error.message : "NO SE PUDO ENVIAR EL CÓDIGO"
      );
      return false;
    } finally {
      setIsSendingVerification(false);
    }
  };

  const register = async () => {
    const code = verificationCode.join("");
    if (code.length !== 5) {
      setCodeError("INGRESÁ LOS 5 DÍGITOS DEL CÓDIGO");
      return;
    }

    setIsVerifyingCode(true);
    setCodeError(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            code,
            password: formData.password,
          }),
        }
      );

      if (!response.ok) {
        let message = "EL CÓDIGO INGRESADO ES INVÁLIDO";
        try {
          const data = await response.json();
          if (data?.message) message = data.message;
        } catch (error) {
          // ignore json parsing error
        }
        throw new Error(message);
      }

      setCurrentStep(5);
      sessionStorage.setItem(
        "onboarding",
        JSON.stringify({
          name: formData.name,
          email: formData.email,
        })
      );
    } catch (error) {
      setCodeError(
        error instanceof Error
          ? error.message
          : "NO SE PUDO VERIFICAR EL CÓDIGO"
      );
    } finally {
      setIsVerifyingCode(false);
    }
  };

  const nextStep = async () => {
    if (currentStep === 4) {
      await register();
      return;
    }

    if (await validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setErrors({});
    if (currentStep === 3) {
      setVerificationCode(Array(5).fill(""));
      setCodeError(null);
    }
    if (currentStep === 2) {
      setVerificationEmailError(null);
    }
  };

  const handleSubmit = async () => {
    if (!(await validateStep(4))) return;

    setIsSubmitting(true);
  };

  const handleCodeChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const nextCode = [...verificationCode];
    nextCode[index] = value;
    setVerificationCode(nextCode);
    setCodeError(null);

    if (value && index < verificationCode.length - 1) {
      codeInputRefs.current[index + 1]?.focus();
    }
  };

  const handleCodeKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && !verificationCode[index] && index > 0) {
      codeInputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      codeInputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < verificationCode.length - 1) {
      event.preventDefault();
      codeInputRefs.current[index + 1]?.focus();
    }

    if (event.key === "Enter" && currentStep === 4) {
      event.preventDefault();
      void register();
    }
  };

  const handleCodePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "");
    if (!pasted) return;

    const nextCode = [...verificationCode];
    for (let i = 0; i < verificationCode.length; i++) {
      nextCode[i] = pasted[i] ?? "";
    }
    setVerificationCode(nextCode);
    setCodeError(null);

    const focusIndex = Math.min(pasted.length, verificationCode.length - 1);
    codeInputRefs.current[focusIndex]?.focus();
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
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-black dark:text-white uppercase tracking-wide">
                BIENVENIDO
              </h2>
              <div className="mono-code max-w-xs sm:max-w-sm mx-auto">
                <div className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                  // DESCRIPCIÓN
                </div>
                <p className="text-sm text-black dark:text-white leading-relaxed">
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
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-black dark:text-white uppercase tracking-wide">
                Empecemos
              </h2>
              <div className="mono-code">
                <div className="text-xs text-gray-600 dark:text-gray-300 mb-1">
                  // ENTRADA REQUERIDA
                </div>
                <p className="text-sm text-black dark:text-white">
                  Necesitamos algunos datos básicos para personalizar tu
                  experiencia
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-black dark:text-white mb-2 uppercase tracking-wide">
                  NOMBRE COMPLETO
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    setVerificationEmailError(null);
                  }}
                  className={`w-full px-4 py-3 mono-input transition-all duration-200 dark:text-white  ${
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
                <label className="block text-sm font-bold text-black dark:text-white mb-2 uppercase tracking-wide">
                  EMAIL
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    setVerificationEmailError(null);
                  }}
                  className={`w-full px-4 py-3 mono-input transition-all duration-200 dark:text-white ${
                    errors.email ? "border-red-500 bg-red-50" : ""
                  }`}
                  placeholder="TU@EMAIL.COM"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 font-mono uppercase">
                    {errors.email}
                  </p>
                )}
                {verificationEmailError && (
                  <div
                    className="text-red-500 text-sm mt-3 font-mono uppercase"
                    dangerouslySetInnerHTML={{ __html: verificationEmailError }}
                  ></div>
                )}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-black dark:text-white uppercase tracking-wide">
                PROTEGE TU CUENTA
              </h2>
              <div className="mono-code">
                <div className="text-xs text-gray-600 dark:text-gray-300 mb-1">
                  // SEGURIDAD
                </div>
                <p className="text-sm text-black dark:text-white">
                  Crea una contraseña segura para mantener tus datos protegidos
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-black dark:text-white mb-2 uppercase tracking-wide">
                  CONTRASEÑA
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className={`w-full px-4 py-3 pr-12 mono-input transition-all duration-200 dark:text-white ${
                      errors.password ? "border-red-500 bg-red-50" : ""
                    }`}
                    placeholder="MÍNIMO 8 CARACTERES"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black p-1 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <label className="block text-sm font-bold text-black dark:text-white mb-2 uppercase tracking-wide mt-4">
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
                    className={`w-full px-4 py-3 pr-12 mono-input transition-all duration-200 dark:text-white ${
                      errors.password ? "border-red-500 bg-red-50" : ""
                    }`}
                  />
                </div>
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="flex-1 bg-gray-200 dark:bg-black h-2 border border-black dark:border-white">
                        <div
                          className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                          style={{
                            width: `${(passwordStrength.strength / 3) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="text-sm font-bold text-black dark:text-white uppercase tracking-wide">
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
                {verificationEmailError && (
                  <div
                    className="text-red-500 text-sm mt-3 font-mono uppercase"
                    dangerouslySetInnerHTML={{ __html: verificationEmailError }}
                  ></div>
                )}
              </div>
              <div className="mono-code">
                <h4 className="text-sm font-bold text-black dark:text-gray-300 mb-2 uppercase">
                  // REQUISITOS DE CONTRASEÑA
                </h4>
                <ul className="text-sm text-black space-y-1">
                  <li className="flex items-center dark:text-white">
                    <div
                      className={`w-3 h-3 mr-2 ${
                        formData.password.length >= 8
                          ? "bg-green-700"
                          : "bg-gray-300"
                      }`}
                    ></div>
                    AL MENOS 8 CARACTERES
                  </li>
                  <li className="flex items-center dark:text-white">
                    <div
                      className={`w-3 h-3 mr-2 ${
                        /[A-Z]/.test(formData.password)
                          ? "bg-green-700"
                          : "bg-gray-300"
                      }`}
                    ></div>
                    AL MENOS UNA LETRA MAYÚSCULA
                  </li>
                  <li className="flex items-center dark:text-white">
                    <div
                      className={`w-3 h-3 mr-2 ${
                        /[0-9]/.test(formData.password)
                          ? "bg-green-700"
                          : "bg-gray-300"
                      }`}
                    ></div>
                    AL MENOS UN NÚMERO
                  </li>
                  <li className="flex items-center dark:text-white">
                    <div
                      className={`w-3 h-3 mr-2 ${
                        /[\W_]/.test(formData.password)
                          ? "bg-green-700"
                          : "bg-gray-300"
                      }`}
                    ></div>
                    AL MENOS UN CARÁCTER ESPECIAL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-black dark:text-white uppercase tracking-wide">
                VERIFICÁ TU EMAIL
              </h2>
              <div className="mono-code">
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                  // VALIDACIÓN
                </div>
                <p className="text-sm text-black dark:text-white">
                  Ingresá el código de 5 dígitos que enviamos a
                  <br />
                  <span className="font-bold">{formData.email}</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-3">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    codeInputRefs.current[index] = element;
                  }}
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={1}
                  className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-mono border-2 border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  value={digit}
                  onChange={(event) =>
                    handleCodeChange(index, event.target.value)
                  }
                  onKeyDown={(event) => handleCodeKeyDown(index, event)}
                  onPaste={handleCodePaste}
                />
              ))}
            </div>
            {codeError && (
              <p className="text-center text-red-500 text-sm font-mono uppercase">
                {codeError}
              </p>
            )}
            <div className="text-center text-xs text-gray-600 dark:text-gray-400">
              <p>// CONSEJO: Revisá tu carpeta de spam si no lo encontrás</p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center space-y-8 my-4">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-black dark:text-white uppercase tracking-wide">
                ¡TU CUENTA ESTÁ LISTA!
              </h2>
              <div className="mono-code max-w-md mx-auto mb-8">
                <div className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                  // ÉXITO
                </div>
                <p className="text-sm text-black dark:text-white leading-relaxed">
                  Bienvenido a Didacta, <b>{formData.name.trim()}</b>. Estás
                  listo para comenzar tu viaje de aprendizaje personalizado.
                </p>
              </div>
            </div>
            <div className="mono-card p-6 text-left max-w-md mx-auto">
              <h3 className="font-bold text-black dark:text-white mb-4 uppercase tracking-wide">
                // RESUMEN DE CUENTA
              </h3>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300 uppercase">
                    NOMBRE:
                  </span>
                  <span className="font-bold text-black dark:text-white">
                    {formData.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300 uppercase">
                    EMAIL:
                  </span>
                  <span className="font-bold text-black dark:text-white">
                    {formData.email}
                  </span>
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
      <Card className="w-full max-w-sm sm:max-w-lg lg:max-w-2xl bg-white dark:bg-black border-4 border-black dark:border-white mx-4 !p-0">
        <CardContent className="p-0">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black modal-header">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-white dark:bg-black flex items-center justify-center">
                <Brain className="h-5 w-5 text-black dark:text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold uppercase tracking-wide text-white dark:text-black">
                  AI LEARN
                </h1>
                <p className="text-sm uppercase tracking-wide">
                  PASO {currentStep} DE {STEPS.length}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white p-2 transition-colors"
              disabled={
                isSubmitting || isSendingVerification || isVerifyingCode
              }
            >
              <X className="h-6 w-6 cursor-pointer" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 dark:bg-black border-b-2 border-black dark:border-white custom-mediaquery-fitheight modal-progress">
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
                        ? "bg-black dark:bg-white text-white dark:text-black"
                        : currentStep === step.id
                        ? "bg-black dark:bg-white text-white dark:text-black"
                        : "bg-white text-black dark:bg-black dark:text-white"
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
                      className={`grow h-1 mx-2 transition-all duration-300 border border-black dark:border-white ${
                        currentStep > step.id
                          ? "bg-black dark:bg-white"
                          : "bg-white dark:bg-black"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <h3 className="font-bold text-black dark:text-white uppercase tracking-wide">
                {STEPS[currentStep - 1]?.title}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 min-h-[300px] sm:min-h-[400px] flex items-center modal-content">
            <div className="w-full">{renderStep()}</div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-t-2 border-black dark:border-white bg-gray-50 dark:bg-black modal-footer">
            {currentStep > 1 && currentStep < STEPS.length ? (
              <Button
                onClick={prevStep}
                disabled={
                  isSubmitting || isSendingVerification || isVerifyingCode
                }
                className="mono-button flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>VOLVER</span>
              </Button>
            ) : null}

            {currentStep === 1 || currentStep === 2 || currentStep == 3 ? (
              <Button
                onClick={nextStep}
                disabled={
                  isSubmitting || isSendingVerification || isVerifyingCode
                }
                className="mono-button-primary flex items-center space-x-2 !ml-auto"
              >
                <span>SIGUIENTE</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : currentStep === 4 ? (
              <Button
                onClick={nextStep}
                disabled={isVerifyingCode}
                className="mono-button-primary flex items-center space-x-2 ml-auto"
              >
                {isVerifyingCode ? (
                  <>
                    <div
                      className="animate-spin w-4 h-4 border-2 !rounded-full border-white border-t-transparent"
                      style={{ borderRadius: "50% !important" }}
                    />
                    <span>VERIFICANDO...</span>
                  </>
                ) : (
                  <>
                    <span>VERIFICAR CÓDIGO</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            ) : (
              currentStep == 5 && (
                <a
                  className="flex items-center space-x-2 ml-auto"
                  target="_blank"
                  href={
                    process.env.NEXT_PUBLIC_APP_URL || "https://didacta-ai.com"
                  }
                  rel="noreferrer"
                >
                  <Button
                    onClick={onClose}
                    className="mono-button-primary flex items-center space-x-2 ml-auto"
                  >
                    <span>COMENZAR A APRENDER</span>
                    <Zap className="h-4 w-4" />
                  </Button>
                </a>
              )
            )}
          </div>
        </CardContent>
      </Card>
      <style jsx>{`
        @media (max-height: 900px) {
          .modal-header {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
          .modal-progress {
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
          }
          .modal-content {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
          .modal-footer {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
