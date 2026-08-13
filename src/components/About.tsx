"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "start start"],
  });

  // Video reveal controlled by scrolling
  const videoOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.65, 1],
    [0, 0.15, 0.75, 1]
  );

  const videoScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.08, 1]
  );

  // Darkness fades as About takes over
  const darkness = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [0.95, 0.75, 0.48]
  );

  // Main content follows the scroll transition
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.8],
    [0, 0.5, 1]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0.25, 0.8],
    [45, 0]
  );

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative min-h-screen w-full overflow-hidden bg-[#050505]"
    >
      {/* BACKGROUND VIDEO */}
      <motion.div
        style={{
          opacity: videoOpacity,
          scale: videoScale,
        }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source
            src="/videos/about-bg.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* SCROLL-CONTROLLED DARKNESS */}
      <motion.div
        style={{
          opacity: darkness,
        }}
        className="pointer-events-none absolute inset-0 bg-black"
      />

      {/* CINEMATIC GRADIENTS */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* CRIMSON ATMOSPHERE */}
      <div className="pointer-events-none absolute -left-[15%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#b52a2a]/10 blur-[160px]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-end px-8 pb-20 pt-32 md:px-14 md:pb-24 lg:px-20 lg:pb-28">
        <div className="w-full">

          {/* ABOUT LABEL */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.6,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-7 flex items-center gap-3"
          >
            <motion.span
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#b52a2a] shadow-[0_0_12px_rgba(181,42,42,0.8)]"
            />

            <span className="text-xs font-medium tracking-[0.14em] text-white/55">
              01 / ABOUT
            </span>
          </motion.div>

          {/* FULL NAME */}
<motion.h2
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: false,
    amount: 0.15,
  }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }}
  className="
    max-w-[1000px]
    text-5xl
    font-semibold
    leading-[0.95]
    tracking-[-0.06em]
    sm:text-6xl
    md:text-7xl
    lg:text-[96px]
  "
>
  {/* Sheron Oliver */}
  <span className="block overflow-hidden pb-3">
    <motion.span
      variants={{
        hidden: {
          opacity: 0,
          y: 75,
          filter: "blur(8px)",
        },

        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",

          transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className="block text-[#f5f5f7]"
    >
      Sheron Oliver
    </motion.span>
  </span>

  {/* Khoya */}
  <span className="block overflow-hidden pb-3">
    <motion.span
      variants={{
        hidden: {
          opacity: 0,
          y: 75,
          filter: "blur(8px)",
        },

        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",

          transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className="block text-[#b52a2a]"
    >
      Khoya.
    </motion.span>
  </span>
</motion.h2>

          {/* DETAILS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 grid max-w-[1050px] gap-8 border-t border-white/15 pt-8 md:grid-cols-[0.55fr_1.45fr]"
          >
            {/* ROLES */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.5,
              }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.35,
                  },
                },
              }}
            >
              {["Student", "Developer", "Creator"].map((role) => (
                <motion.p
                  key={role}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -15,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="text-sm leading-7 text-white/45"
                >
                  {role}
                </motion.p>
              ))}
            </motion.div>

            {/* DESCRIPTION */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(5px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: false,
                amount: 0.4,
              }}
              transition={{
                duration: 0.9,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="max-w-[680px] text-lg leading-[1.6] tracking-[-0.025em] text-white/60 sm:text-xl">
                Curiosity usually starts it.{" "}

                <span className="text-white">
                  Building is how I figure out where it goes.
                </span>

                {" "}I explore ideas through technology, design and creative
                work, learning something new every time an idea becomes real.
              </p>

              {/* BOTTOM STATEMENT */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.7,
                }}
                className="mt-8 flex items-center gap-3 text-xs tracking-[0.08em] text-white/40"
              >
                <motion.span
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: 32,
                  }}
                  viewport={{
                    once: false,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-px bg-[#b52a2a]"
                />

                <span>
  STILL LEARNING. STILL BUILDING.
</span>
</motion.div>

</motion.div>

</motion.div>

</div>

</div>

</section>
);
}