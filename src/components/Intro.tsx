"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { greetings } from "@/data/greetings";

type IntroProps = {
  onComplete: () => void;
};

export default function Intro({ onComplete }: IntroProps) {
  const [index, setIndex] = useState(-1);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    // First 0.75 seconds = absolute darkness.
    const startTimer = window.setTimeout(() => {
      setIndex(0);
    }, 750);

    return () => window.clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (index < 0 || finished) return;

    if (index >= greetings.length - 1) {
      const finishTimer = window.setTimeout(() => {
        setFinished(true);

        window.setTimeout(() => {
          onComplete();
        }, 900);
      }, 650);

      return () => window.clearTimeout(finishTimer);
    }

    // Starts readable, then becomes progressively faster.
    const delay = 80;

    const timer = window.setTimeout(() => {
      setIndex((current) => current + 1);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [index, finished, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={finished ? { y: "100%" } : { y: 0 }}
      transition={{
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      {index >= 0 && (
        <>
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{
                opacity: 0,
                y: 18,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -18,
                filter: "blur(6px)",
              }}
              transition={{ duration: 0.08 }}
              className="px-6 text-center text-5xl font-semibold tracking-tight text-[#b52a2a] sm:text-7xl md:text-8xl"
            >
              {greetings[index]}
            </motion.h1>
          </AnimatePresence>

          <div className="absolute bottom-7 right-7 font-mono text-sm tracking-[0.18em] text-[#b52a2a] sm:bottom-10 sm:right-12 sm:text-base">
            {String(index + 1).padStart(3, "0")} /{" "}
            {String(greetings.length).padStart(3, "0")}
          </div>
        </>
      )}
    </motion.div>
  );
}