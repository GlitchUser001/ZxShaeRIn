"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { greetings } from "@/data/greetings";

type IntroProps = {
  onComplete: () => void;
};

export default function Intro({ onComplete }: IntroProps) {
  const [index, setIndex] = useState(-1);
  const [finished, setFinished] = useState(false);

  // Prevent completion from firing more than once
  const completedRef = useRef(false);

  const total = greetings.length;

  /* =========================
     INITIAL BLACK SCREEN
  ========================= */
  useEffect(() => {
    const startTimer = window.setTimeout(() => {
      setIndex(0);
    }, 750);

    return () => {
      window.clearTimeout(startTimer);
    };
  }, []);

  /* =========================
     GREETING SEQUENCE
  ========================= */
  useEffect(() => {
    if (index < 0) return;
    if (finished) return;
    if (completedRef.current) return;
    if (total === 0) return;

    /* Last greeting reached */
    if (index >= total - 1) {
      completedRef.current = true;

      const finishTimer = window.setTimeout(() => {
        setFinished(true);
      }, 500);

      return () => {
        window.clearTimeout(finishTimer);
      };
    }

    /* Move to next greeting */
    const timer = window.setTimeout(() => {
      setIndex((current) => {
        return Math.min(current + 1, total - 1);
      });
    }, 80);

    return () => {
      window.clearTimeout(timer);
    };
  }, [index, finished, total]);

  /* =========================
     REMOVE INTRO
  ========================= */
  useEffect(() => {
    if (!finished) return;

    const completeTimer = window.setTimeout(() => {
      onComplete();
    }, 900);

    return () => {
      window.clearTimeout(completeTimer);
    };
  }, [finished, onComplete]);

  /* =========================
     SAFE VALUES
  ========================= */
  const safeIndex =
    index < 0 ? 0 : Math.min(index, Math.max(total - 1, 0));

  const counter =
    index < 0 ? 0 : Math.min(index + 1, total);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={
        finished
          ? {
              y: "-100%",
            }
          : {
              y: 0,
            }
      }
      transition={{
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-black
      "
    >
      {index >= 0 && total > 0 && (
        <>
          {/* GREETING */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={safeIndex}
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
              transition={{
                duration: 0.08,
                ease: "easeOut",
              }}
              className="
                px-6
                text-center
                text-5xl
                font-semibold
                tracking-tight
                text-[#b52a2a]
                sm:text-7xl
                md:text-8xl
              "
            >
              {greetings[safeIndex]}
            </motion.h1>
          </AnimatePresence>

          {/* COUNTER */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              absolute
              bottom-7
              right-7
              font-mono
              text-sm
              tracking-[0.18em]
              text-[#b52a2a]
              sm:bottom-10
              sm:right-12
              sm:text-base
            "
          >
            {String(counter).padStart(3, "0")} /{" "}
            {String(total).padStart(3, "0")}
          </motion.div>
        </>
      )}
    </motion.div>
  );
}