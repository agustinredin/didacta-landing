"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useI18n()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", company: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <Card className="mono-card border-2 border-black">
        <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
          <div className="w-16 h-16 bg-black mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-black mb-4 uppercase tracking-wide">¡MENSAJE ENVIADO!</h3>
          <div className="mono-code">
            <div className="text-xs text-gray-600 mb-1">// ÉXITO</div>
            <p className="text-sm text-black">
              Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo pronto.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mono-card border-2 border-black">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                {t("contactForm.inputOne.label")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 mono-input transition-all duration-200"
                placeholder={t("contactForm.inputOne.placeHolder")}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                {t("contactForm.inputTwo.label")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 mono-input transition-all duration-200"
                placeholder={t("contactForm.inputTwo.placeHolder")}
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
              {t("contactForm.inputThree.label")}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 mono-input transition-all duration-200"
              placeholder={t("contactForm.inputThree.placeHolder")}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
              {t("contactForm.inputFour.label")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 mono-input resize-none transition-all duration-200"
              placeholder={t("contactForm.inputFour.label")}
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full mono-button-primary py-4 text-lg font-medium">
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent mr-2"></div>
{t("contactForm.isSubmiting")}              
</div>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                {t("contactForm.button")}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
