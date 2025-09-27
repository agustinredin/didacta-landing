"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  startDelay,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
  /** start delay in seconds */
  startDelay?: number;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  // support optional startDelay so multiple instances can be staggered
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (isInView) {
      const run = () =>
        animate(
          "span",
          {
            display: "inline-block",
            opacity: 1,
            width: "fit-content",
          },
          {
            duration: 0.3,
            delay: stagger(0.05),
            ease: "anticipate",
          }
        );

      if (startDelay && startDelay > 0) {
        timer = setTimeout(run, Math.round(startDelay * 1000));
      } else {
        run();
      }
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isInView, startDelay]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `text-black opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        // "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          //   "inline-block w-[3px] h-[0.75rem] bg-grey-500",
          "hidden",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
