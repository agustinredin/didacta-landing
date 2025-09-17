"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { OnboardingModal } from "@/components/onboarding-modal";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  GaugeCircle,
  Layers3,
  ListChecks,
  Map,
  MessageSquareQuote,
  Mic,
  Scissors,
  Share2,
  Sparkles,
  Workflow,
} from "lucide-react";

const coreFeatures = [
  {
    title: "TRANSCRIPCIÓN INTELIGENTE",
    icon: Mic,
    tagline: "Audio limpio, contexto preservado",
    description: [
      "Transformá grabaciones ruidosas en texto limpio y accionable. La IA separa oradores, elimina silencios innecesarios y respeta la terminología académica en múltiples idiomas.",
      "Pensado para clases extensas: cada párrafo mantiene su marca de tiempo, destaca conceptos clave y enlaza de vuelta al fragmento de audio original para que revises sólo lo importante.",
    ],
    capabilities: [
      {
        label: "Identificación de oradores",
        description:
          "Detección automática de speakers con diarización por tramos y etiquetado en la línea de tiempo. Exportación por voz (resúmenes, citas y tareas por orador) y fusión de segmentos cuando hay interrupciones o solapamientos.",
      },
      {
        label: "Limpieza contextual",
        description:
          "Normalización de muletillas, abreviaturas y puntuación con perfiles por materia (formal, coloquial o técnico). Conserva ejemplos clave y marca incertidumbres con etiquetas de revisión para corrección rápida.",
      },
    ],
    outcomes: [
      "Obtené transcripciones listas para editar en Google Docs, Notion o PDF en menos de cinco minutos por hora de audio.",
      "Buscá conceptos por palabra clave y reproducí inmediatamente el fragmento original sin salir de Didacta.",
      "Compartí extractos comentados con tus compañeros o docentes directamente desde la interfaz.",
    ],
  },
  {
    title: "RESUMEN CON IA",
    icon: Brain,
    tagline: "Entendé el panorama completo en minutos",
    description: [
      "Los resúmenes jerarquizan las ideas principales, generan subtemas y ofrecen ejemplos prácticos basados en tus propios apuntes.",
      "Podés alternar entre versiones breves, intermedias o extendidas, y solicitar enfoques específicos (teórico, práctico, exámenes) con un clic.",
    ],
    capabilities: [
      {
        label: "Resúmenes multinivel",
        description:
          "Capas ejecutiva, detallada y orientada a práctica con control de granularidad. Inserta citas y marcas de tiempo para volver al audio/fragmento original sin perder traza de fuentes.",
      },
      {
        label: "Glosario instantáneo",
        description:
          "Extracción de definiciones, fórmulas, símbolos y bibliografía por tema. Enlazado cruzado entre términos y creación automática de “tarjetas” reutilizables por curso.",
      },
    ],
    outcomes: [
      "Recibí un briefing de menos de 400 palabras para repasar antes de cada clase.",
      "Exportá versiones orientadas a docentes, alumnos o equipos de apoyo académico con diferente nivel de detalle.",
      "Conectá el resumen con tu repositorio y mantenelo sincronizado cada vez que subís nuevo material.",
    ],
  },
  {
    title: "QUIZZES INTERACTIVOS",
    icon: MessageSquareQuote,
    tagline: "Evalúa y practica con IA",
    description: [
      "Diseñamos cuestionarios adaptativos que se alimentan de tus transcripciones, resúmenes y recortes de PDF. Cada intento ajusta la dificultad según el desempeño del estudiante.",
      "Los docentes reciben sugerencias de retroalimentación automática y pueden aprobar preguntas antes de publicarlas. Además, registramos objetivos de aprendizaje para mapear cobertura curricular.",
    ],
    capabilities: [
      {
        label: "Bancos adaptativos",
        description:
          "Pools de preguntas por nivel cognitivo (recordar, aplicar, analizar) con ajuste dinámico según desempeño. Registra métricas por objetivo de aprendizaje y propone refuerzos donde hay brechas.",
      },
      {
        label: "Modo práctica y examen",
        description:
          "Sesiones guiadas con pistas, solución paso a paso y feedback inmediato. Exámenes cronometrados con intentos, barajado de ítems y bloqueo de navegación para evaluación justa.",
      },
    ],
    outcomes: [
      "Entrega quizzes con retroalimentación inmediata en el campus virtual o exportalos en PDF para clases presenciales.",
      "Generá rutas de estudio personalizadas según los resultados de cada estudiante.",
      "Usá el historial para medir mejora entre parciales y finales sin planillas manuales.",
    ],
  },
  {
    title: "CORTAR PDF",
    icon: Scissors,
    tagline: "Dominá materiales extensos sin perder contexto",
    description: [
      "Subí libros, guías y papers largos para que la IA los fragmente en segmentos temáticos. Cada recorte conserva la cita original y las referencias bibliográficas.",
      "Arrastrá y reorganizá los bloques resultantes para construir compilados personalizados o enviar sólo las partes críticas a tus compañeros.",
    ],
    capabilities: [
      {
        label: "Segmentación semántica",
        description:
          "Detección de títulos, subtítulos, tablas, figuras y cuadros aun sin índice. Reconstrucción de estructura lógica del PDF y generación de secciones navegables con saltos precisos.",
      },
      {
        label: "Recortes inteligentes",
        description:
          "Selección de páginas o párrafos para compilar resúmenes abreviados con notas al margen. Mantiene enlaces al documento completo y conserva contexto para ampliar cuando sea necesario.",
      },
    ],
    outcomes: [
      "Prepará colecciones de lectura enfocadas para parciales, finales o talleres prácticos en cuestión de minutos.",
      "Creá tarjetas de estudio mezclando recortes con resúmenes y quizzes asociados automáticamente.",
      "Integrá los recortes con tu mapa mental para resaltar conexiones entre capítulos y clases.",
    ],
  },
  {
    title: "GENERAR MAPA MENTAL",
    icon: Map,
    tagline: "Visualizá relaciones y dependencias",
    description: [
      "Convertí tus resúmenes y recortes de PDF en mapas mentales navegables que muestran cómo se conectan los conceptos entre sí.",
      "Los nodos se actualizan cada vez que aparece nuevo material relevante, manteniendo al día tu visión global de la materia.",
    ],
    capabilities: [
      {
        label: "Jerarquía automática",
        description:
          "Mapa de temas con niveles, subtemas y ejemplos ordenados por relevancia. Permite colapsar/expandir ramas y reordenar prioridades sin romper la consistencia del contenido.",
      },
      {
        label: "Visualización colaborativa",
        description:
          "Comentarios, tareas y enlaces directamente sobre cada nodo con historial de cambios. Roles y permisos por curso para edición controlada y seguimiento de contribuciones.",
      },
    ],
    outcomes: [
      "Planificá sesiones de repaso enfocadas según la densidad de cada rama del mapa.",
      "Detectá temas que aún no tienen suficientes recursos o preguntas asociadas.",
      "Descargá el mapa en PNG, SVG o exportalo a herramientas como Miro y Whimsical sin perder estructura.",
    ],
  },
];

const workflowPhases = [
  {
    icon: Workflow,
    title: "Orquestación automática de contenidos",
    description:
      "Cada recurso que ingresás dispara un pipeline que prepara materiales para estudio colaborativo sin intervención manual.",
    bulletPoints: [
      "Centralizá audio, PDFs y notas manuscritas en un solo buzón de entrada.",
      "Aplicamos controles de calidad para garantizar lecturabilidad, accesibilidad y privacidad antes de compartir.",
      "Definí triggers automáticos: generar resúmenes, cortar PDF o crear un mapa mental apenas se carga una nueva clase.",
    ],
  },
  {
    icon: Layers3,
    title: "Capas de enriquecimiento inteligente",
    description:
      "Las capacidades base se combinan para ofrecer recursos listos para usar en distintos formatos y niveles de detalle.",
    bulletPoints: [
      "Los resúmenes alimentan los quizzes y los mapas mentales para mantener coherencia terminológica.",
      "Los recortes de PDF se etiquetan automáticamente con palabras clave y objetivos de aprendizaje.",
      "Podés versionar materiales por cohorte, cátedra o grupo de estudio sin duplicar esfuerzos.",
    ],
  },
  {
    icon: Share2,
    title: "Entrega multicanal y seguimiento",
    description:
      "Distribuí tus entregables en diferentes plataformas mientras Didacta monitorea resultados y nivel de adopción.",
    bulletPoints: [
      "Compartí enlaces seguros, archivos descargables o inserciones embebidas para LMS, Slack o Teams.",
      "Hacé seguimiento de quién abrió, completó o comentó cada recurso para ajustar tu estrategia en tiempo real.",
      "Cerrá el círculo con recordatorios inteligentes y recomendaciones de próximos pasos para cada estudiante.",
    ],
  },
];

const roleBenefits = [
  {
    icon: ListChecks,
    title: "Estudiantes que buscan constancia",
    description:
      "Organizá tu semana con paquetes automáticos que mezclan transcripciones, resúmenes, recortes y mapas mentales.",
    gains: [
      "Configurá objetivos semanales y recibí recordatorios cuando algún tema queda sin repasar.",
      "Generá colecciones listas para imprimir o estudiar offline con un clic.",
      "Identificá rápidamente qué contenidos ya dominás gracias a las métricas de quizzes y mapas mentales.",
    ],
  },
  {
    icon: GaugeCircle,
    title: "Docentes y tutores",
    description:
      "Asegurá consistencia pedagógica entre comisiones y grupos reduciendo horas de preparación manual.",
    gains: [
      "Validá la calidad de las transcripciones y editá colaborativamente antes de publicarlas.",
      "Publicá quizzes, mapas y recortes en el campus virtual y analiza dónde necesitan refuerzo los estudiantes.",
      "Recibí sugerencias de material complementario basadas en desempeño y temas críticos.",
    ],
  },
  {
    icon: Sparkles,
    title: "Equipos académicos y coordinadores",
    description:
      "Diseñá programas escalables con indicadores claros de adopción y éxito en cada materia.",
    gains: [
      "Monitoreá el pipeline completo desde la carga de material hasta la entrega final en una sola vista.",
      "Generá reportes exportables para comités académicos o acreditaciones sin trabajo extra.",
      "Automatizá campañas de engagement cuando detectamos baja participación o mapas incompletos.",
    ],
  },
];

export default function CarateristicasPrincipalesPage() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <Navbar setIsOnboardingOpen={setIsOnboardingOpen} />
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
      />

      <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-block border-2 border-black px-4 py-2 uppercase tracking-widest text-sm">
              02. CARATERISTICAS PRINCIPALES
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase">
              TODO LO QUE LA PLATAFORMA HACE POR VOS
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Esta página concentra cada módulo de Didacta y cómo interactúan
              entre sí. Amplía la descripción que ves en la home con escenarios
              reales, beneficios tácticos y nuevas funciones como Cortar PDF y
              Generar Mapa Mental.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4">
              <Button
                onClick={() => setIsOnboardingOpen(true)}
                className="mono-button-primary px-6 py-3 text-base"
              >
                Probar gratis
              </Button>
              <Button asChild className="mono-button px-6 py-3 text-base">
                <Link href="/#pricing">Ver planes</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto mt-20 space-y-12">
          {coreFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection
                key={feature.title}
                animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                delay={200}
              >
                <Card className="mono-card">
                  <CardContent className="p-8 sm:p-12">
                    <div className="flex flex-col lg:flex-row gap-10">
                      <div className="lg:w-3/5 space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-black flex items-center justify-center">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <div className="text-xs text-gray-600 uppercase tracking-[0.3em]">
                              {feature.tagline}
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-black uppercase tracking-tight">
                              {feature.title}
                            </h2>
                          </div>
                        </div>
                        <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
                          {feature.description.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                        <div className="border-2 border-black bg-white p-4">
                          <div className="text-xs text-gray-600 uppercase tracking-[0.3em] mb-2">
                            RESULTADOS DIRECTOS
                          </div>
                          <ul className="list-disc list-inside space-y-2 text-sm text-black leading-relaxed">
                            {feature.outcomes.map((outcome) => (
                              <li key={outcome}>{outcome}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="lg:w-2/5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                          {feature.capabilities.map((capability) => (
                            <div
                              key={capability.label}
                              className="border-2 border-black bg-gray-50 p-4 h-full flex flex-col"
                            >
                              <h3 className="text-sm font-bold uppercase tracking-wide text-black mb-2">
                                {capability.label}
                              </h3>
                              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                                {capability.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        <section className="max-w-6xl mx-auto mt-24">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-black">
                ASÍ SE ARTICULAN TODAS LAS CARATERISTICAS
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
                La potencia de Didacta surge de combinar las capacidades
                principales. Cada fase del flujo garantiza que la información
                llegue a tu equipo a tiempo, en el formato correcto y con
                seguimiento continuo.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {workflowPhases.map((phase) => {
                const Icon = phase.icon;
                return (
                  <Card key={phase.title} className="mono-card h-full">
                    <CardContent className="p-8 space-y-4">
                      <div className="w-14 h-14 bg-black flex items-center justify-center">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-tight text-black">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {phase.description}
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-black leading-relaxed">
                        {phase.bulletPoints.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </AnimatedSection>
        </section>

        <section className="max-w-6xl mx-auto mt-24">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-black">
                PLANES DE ACCIÓN SEGÚN TU ROL
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Activá las carateristicas que necesitás según el objetivo de tu
                equipo. Cada combinación aprovecha la automatización para
                liberar tiempo de preparación y profundizar el aprendizaje.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roleBenefits.map((role) => {
                const Icon = role.icon;
                return (
                  <Card key={role.title} className="mono-card h-full">
                    <CardContent className="p-8 space-y-4">
                      <div className="w-14 h-14 bg-black flex items-center justify-center">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-tight text-black">
                        {role.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {role.description}
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-black leading-relaxed">
                        {role.gains.map((gain) => (
                          <li key={gain}>{gain}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </AnimatedSection>
        </section>

        <section className="max-w-5xl mx-auto mt-24">
          <AnimatedSection animation="fadeInUp">
            <Card className="mono-card-highlight">
              <CardContent className="p-10 sm:p-14 text-center space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-black">
                  PREPARÁ TU PRÓXIMA CLASE CON DIDACTA
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Transcribí una clase, generá un resumen, cortá los PDFs clave
                  y visualizá todo en un mapa mental en cuestión de minutos.
                  Nuestra automatización se encarga de mantener cada recurso
                  alineado y listo para compartir.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <Button
                    onClick={() => setIsOnboardingOpen(true)}
                    className="mono-button-primary px-8 py-3 text-base"
                  >
                    Crear cuenta ahora
                  </Button>
                  <Button asChild className="mono-button px-8 py-3 text-base">
                    <Link href="/#contact">Hablar con nosotros</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}
