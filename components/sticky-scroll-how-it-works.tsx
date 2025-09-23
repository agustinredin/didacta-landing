"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Mic,
  Brain,
  MessageSquareQuote,
  Upload,
  AudioWaveform as Waveform,
  FileText,
  CheckCircle,
} from "lucide-react";

interface HowItWorksContent {
  step: number;
  title: string;
  description: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

export const StickyScrollHowItWorks = ({
  content,
  contentClassName,
}: {
  content: HowItWorksContent[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#ffffff", // white
    "#f8fafc", // slate-50
    "#f1f5f9", // slate-100
  ];

  return (
    <motion.div
      className="relative flex min-h-screen justify-center space-x-10 px-16"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-48">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  x: activeCard === index ? 0 : -20,
                }}
                className="flex items-center space-x-4 mb-6"
              >
                <div className="w-16 h-16 bg-black flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <div className="w-12 h-12 bg-black flex items-center justify-center">
                  {item.icon}
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl font-bold text-black uppercase tracking-wide mb-4"
              >
                {item.title}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="mono-code"
              >
                <div className="text-lg md:text-md text-gray-600 mb-2">// PROCESO</div>
                <p className="text-black text-[1.4rem] md:text-xl leading-relaxed p-9 md:p-3">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
          <div className="h-60" />
        </div>
      </div>

      <div className="hidden lg:block w-full max-w-md relative">
        {content.map((item, index) => (
          <motion.div
            key={`content-${index}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: activeCard === index ? 1 : 0.3,
              x: activeCard === index ? 0 : 20,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`absolute w-full ${
              activeCard === index
                ? "pointer-events-auto"
                : "pointer-events-none"
            }`}
            style={{
              top: `${top_calc(index)}rem`,
              transform:
                activeCard === index ? "translateX(0)" : "translateX(100px)",
            }}
          >
            <div className="min-h-[20rem] w-full mono-card overflow-hidden">
              {item.content}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Content components for each step
const Step1Content = () => (
  <div className="min-h-[20rem] w-full bg-white p-6 flex flex-col justify-center items-center">
    <div className="mono-card p-6 w-full">
      <div className="flex items-center space-x-3 mb-4">
        <Upload className="h-8 w-8 text-black" />
        <span className="font-bold uppercase">SUBIR ARCHIVO</span>
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-black"></div>
          <span className="text-sm">audio.mp3</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-black"></div>
          <span className="text-sm">clase_matematica.wav</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-black"></div>
          <span className="text-sm">clase_virtual_martes.m4a</span>
        </div>
      </div>
    </div>
    <div className="mt-4 text-center">
      <div className="text-xs text-gray-600 mb-1">// FORMATOS SOPORTADOS</div>
      <div className="text-sm font-mono">MP3, WAV, M4A, FLAC</div>
    </div>
  </div>
);

const Step2Content = () => (
  <div className="min-h-[20rem] w-full bg-white p-6 flex flex-col justify-center">
    <div className="mono-card p-6 w-full">
      <div className="flex items-center space-x-3 mb-4">
        <Brain className="h-8 w-8 text-black" />
        <span className="font-bold uppercase">PROCESO DE IA</span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-4 w-4 text-black" />
          <span className="text-sm">Transcripción: 98% completa</span>
        </div>
        <div className="flex items-center space-x-2">
          <Waveform className="h-4 w-4 text-black animate-pulse" />
          <span className="text-sm">Análisis de contenido...</span>
        </div>
        <div className="flex items-center space-x-2">
          <div
            className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin"
            style={{ borderRadius: "50% !important" }}
          ></div>
          <span className="text-sm">Extrayendo conceptos clave</span>
        </div>
      </div>
    </div>
    <div className="mt-4 text-center">
      <div className="text-xs text-gray-600 mb-1">// TIEMPO PROMEDIO</div>
      <div className="text-sm font-mono">2-5 MINUTOS</div>
    </div>
  </div>
);

const Step3Content = () => (
  <div className="min-h-[20rem] w-full bg-white p-6 flex flex-col justify-center">
    <div className="mono-card p-6 w-full">
      <div className="flex items-center space-x-3 mb-4">
        <FileText className="h-8 w-8 text-black" />
        <span className="font-bold uppercase">RESULTADO</span>
      </div>
      <div className="space-y-3">
        <div className="mono-card p-3 bg-gray-50">
          <div className="text-xs font-bold mb-1">TRANSCRIPCIÓN</div>
          <div className="text-xs">Texto completo con timestamps</div>
        </div>
        <div className="mono-card p-3 bg-gray-50">
          <div className="text-xs font-bold mb-1">QUIZ</div>
          <div className="text-xs">10 preguntas generadas</div>
        </div>
      </div>
    </div>
    <div className="mt-4 text-center">
      <div className="text-xs text-gray-600 mb-1">
        // FORMATOS DE EXPORTACIÓN
      </div>
      <div className="text-sm font-mono">PDF, DOCX, TXT</div>
    </div>
  </div>
);

export const howItWorksContent: HowItWorksContent[] = [
  {
    step: 1,
    title: "PROPORCIONÁ AUDIO",
    description:
      "Subí tu archivo de audio, grabá directamente desde tu dispositivo o conectá tu micrófono para sesiones en vivo. Soportamos múltiples formatos de audio.",
    icon: <Mic className="h-6 w-6 text-white" />,
    content: <Step1Content />,
  },
  {
    step: 2,
    title: "DEJÁ QUE LA IA TRABAJE",
    description:
      "Nuestra inteligencia artificial transcribe el audio, analiza el contenido y extrae las ideas clave usando algoritmos de procesamiento de lenguaje natural avanzados.",
    icon: <Brain className="h-6 w-6 text-white" />,
    content: <Step2Content />,
  },
  {
    step: 3,
    title: "APRENDÉ ACTIVAMENTE",
    description:
      "Recibí resúmenes estructurados, quizzes personalizados y material de estudio optimizado. Todo listo para potenciar tu aprendizaje de manera efectiva.",
    icon: <MessageSquareQuote className="h-6 w-6 text-white" />,
    content: <Step3Content />,
  },
];

//esto es un crimen
function top_calc(index: number) {
  return -1.325 * index * index + 34.525 * index + 13.5;
}
