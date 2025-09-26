import { AnimatedSection } from "@/components/animated-section";
import { Mic, FileText, ListChecks, GraduationCap } from "lucide-react";
import { TypewriterEffect } from "./ui/typewriter-effect";

const CustomTerminal = () => {
  return (
    <div className="flex-1 flex flex-col justify-center">
      <AnimatedSection animation="fadeInRight" className="relative" delay={600}>
        {/* Main Terminal Window    */}
        <div className=" bg-white dark:bg-black border-4 border-black dark:border-white">
          {/* Terminal Header */}
          <div className="bg-black dark:bg-white text-white dark:text-black p-4 font-mono text-sm">
            <div className="flex items-center justify-between">
              <span>Terminal Didacta AI</span>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-white dark:bg-black"></div>
                <div className="w-3 h-3 bg-white dark:bg-black"></div>
                <div className="w-3 h-3 bg-white dark:bg-black"></div>
              </div>
            </div>
          </div>

          {/* Terminal Content */}
          <div
            className="p-3 sm:p-4 lg:p-6 space-y-2 sm:space-y-4 text-xs sm:text-sm terminal-content"
            style={{ textTransform: "none" }}
          >
            <div className="dark:text-white">
              <span className="text-gray-600 dark:text-gray-300">$</span> didacta-ai --procesando
              clase_virtual_martes.m4a
            </div>
            {/* Typewriter status lines */}
            <div className="text-gray-600 dark:text-gray-300">
              {/* Line 1 */}
              <TypewriterEffect
                words={[
                  { text: "[⎆]", className: "text-gray-600 dark:text-gray-300" },
                  { text: "Procesando", className: "text-gray-600 dark:text-gray-300" },
                  { text: "archivo", className: "text-gray-600 dark:text-gray-300" },
                  { text: "de", className: "text-gray-600 dark:text-gray-300" },
                  { text: "audio...", className: "text-gray-600 dark:text-gray-300" },
                ]}
                className="text-gray-600 dark:text-gray-300"
                startDelay={0}
              />
            </div>

            <div className="text-gray-600 dark:text-gray-300">
              {/* Line 2 */}
              <TypewriterEffect
                words={[
                  { text: "[✓]", className: "text-gray-600 dark:text-gray-300" },
                  { text: "Transcripción", className: "text-gray-600 dark:text-gray-300" },
                  { text: "completa:", className: "text-gray-600 dark:text-gray-300" },
                  { text: "98%", className: "text-gray-600 dark:text-gray-300" },
                  { text: "de", className: "text-gray-600 dark:text-gray-300" },
                  { text: "precisión", className: "text-gray-600 dark:text-gray-300" },
                ]}
                className="text-gray-600 dark:text-gray-300"
                startDelay={4}
              />
            </div>

            <div className="text-gray-600 dark:text-gray-300">
              {/* Line 3 */}
              <TypewriterEffect
                words={[
                  { text: "[✓]", className: "text-gray-600 dark:text-gray-300" },
                  { text: "Resumen", className: "text-gray-600 dark:text-gray-300" },
                  { text: "generado:", className: "text-gray-600 dark:text-gray-300" },
                  { text: "5", className: "text-gray-600 dark:text-gray-300" },
                  { text: "conceptos", className: "text-gray-600 dark:text-gray-300" },
                  { text: "clave", className: "text-gray-600 dark:text-gray-300" },
                ]}
                className="text-gray-600 dark:text-gray-300"
                startDelay={9}
              />
            </div>

            <div className="text-gray-600 dark:text-gray-300">
              {/* Line 4 */}
              <TypewriterEffect
                words={[
                  { text: "[✓]", className: "text-gray-600 dark:text-gray-300" },
                  { text: "Quiz", className: "text-gray-600 dark:text-gray-300" },
                  { text: "creado:", className: "text-gray-600 dark:text-gray-300" },
                  { text: "10", className: "text-gray-600 dark:text-gray-300" },
                  { text: "preguntas", className: "text-gray-600 dark:text-gray-300" },
                ]}
                className="text-gray-600 dark:text-gray-300"
                startDelay={15}
              />
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-300">$</span>{" "}
              <span className="animate-pulse">_</span>
            </div>
          </div>

          {/* Mobile Terminal Cards */}
          <div className="lg:hidden px-4 my-8 space-y-4 terminal-cards">
            <div className="mono-card p-4 bg-white dark:bg-black floating-card">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-black dark:bg-white flex items-center justify-center">
                  <Mic className="h-4 w-4 text-white dark:text-black" />
                </div>
                <div className="font-bold text-xs uppercase dark:text-white">TRANSCRIPCIÓN</div>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Convertí audio de clase en texto claro
              </p>
            </div>

            <div className="mono-card p-4 bg-white dark:bg-black floating-card">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-black dark:bg-white flex items-center justify-center">
                  <FileText className="h-4 w-4 text-white dark:text-black" />
                </div>
                <span className="font-bold text-xs uppercase dark:text-white">RESÚMENES</span>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Síntesis automáticas para estudiar rápido
              </p>
            </div>

            <div className="mono-card p-4 bg-white dark:bg-black floating-card">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-black dark:bg-white flex items-center justify-center">
                  <ListChecks className="h-4 w-4 text-white dark:text-black" />
                </div>
                <span className="font-bold text-xs uppercase dark:text-white">QUIZZES</span>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Evaluaciones dinámicas con IA integrada
              </p>
            </div>

            <div className="mono-card p-4 bg-white dark:bg-black floating-card">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-black dark:bg-white flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-white dark:text-black" />
                </div>
                <span className="font-bold text-xs uppercase dark:text-white">CAMPUS</span>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Espacio central para alumnos
              </p>
            </div>
          </div>

          {/* Floating Feature Cards */}
          <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 hidden lg:block">
            {/* Transcripción */}
            <AnimatedSection
              className="relative"
              animation="scaleIn"
              delay={1000}
            >
              <div className="absolute top-64 !h-fit left-0 w-48 mono-card p-4 bg-white dark:bg-black">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-black dark:bg-white flex items-center justify-center">
                    <Mic className="h-4 w-4 text-white dark:text-black" />
                  </div>
                  <span className="font-bold text-xs uppercase dark:text-white">
                    TRANSCRIPCIÓN
                  </span>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Convertí audio de clase en texto claro
                </p>
              </div>
            </AnimatedSection>

            {/* Resúmenes */}
            <AnimatedSection animation="scaleIn" delay={1200}>
              <div className="absolute top-72 !h-fit right-0 w-44 mono-card p-4 bg-white dark:bg-black">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-black dark:bg-white flex items-center justify-center">
                    <FileText className="h-4 w-4 text-white dark:text-black" />
                  </div>
                  <span className="font-bold text-xs uppercase dark:text-white">RESÚMENES</span>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Síntesis automáticas para estudiar rápido
                </p>
              </div>
            </AnimatedSection>

            {/* Quizzes */}
            <AnimatedSection animation="scaleIn" delay={1400}>
              <div className="absolute -top-40 !h-fit left-2 w-48 mono-card p-4 bg-white dark:bg-black">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-black dark:bg-white flex items-center justify-center">
                    <ListChecks className="h-4 w-4 text-white dark:text-black" />
                  </div>
                  <span className="font-bold text-xs uppercase dark:text-white">QUIZZES</span>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Evaluaciones dinámicas con IA integrada
                </p>
              </div>
            </AnimatedSection>

            {/* Campus */}
            <AnimatedSection animation="scaleIn" delay={1600}>
              <div className="absolute -top-24 !h-fit -right-12 w-44 mono-card p-4 bg-white dark:bg-black">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-black dark:bg-white flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-white dark:text-black" />
                  </div>
                  <span className="font-bold text-xs uppercase dark:text-white">CAMPUS</span>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Espacio central para alumnos
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default CustomTerminal;
