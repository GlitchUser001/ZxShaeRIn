"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505]"
    >
      <Navbar />

      {/* Background ambience */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.8,
          delay: 0.3,
        }}
        className="pointer-events-none absolute left-[12%] top-[25%] h-[450px] w-[450px] rounded-full bg-[#6e1010]/10 blur-[140px]"
      />

      <div className="mx-auto flex min-h-screen max-w-[1400px] items-center px-8 pt-24 md:px-14 lg:px-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT — Portrait */}
          <motion.div
            initial={{
              opacity: 0,
              x: -55,
              scale: 0.97,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Large ambient crimson glow */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b52a2a]/15 blur-[110px]"
            />

            {/* Decorative outer outline */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.1,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                pointer-events-none
                absolute
                left-1/2 top-1/2
                h-[490px] w-[330px]
                -translate-x-[47%] -translate-y-[48%]
                rounded-[46%_54%_48%_52%/38%_42%_58%_62%]
                border border-[#b52a2a]/30
                sm:h-[580px] sm:w-[390px]
              "
            />

            {/* Portrait */}
            <motion.div
              whileHover={{
                scale: 1.015,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                relative
                h-[470px] w-[310px]
                overflow-hidden
                rounded-[48%_52%_46%_54%/38%_40%_60%_62%]
                border border-white/10
                bg-[#111]
                shadow-[0_30px_100px_rgba(0,0,0,0.65),0_0_50px_rgba(181,42,42,0.12)]
                sm:h-[560px] sm:w-[370px]
              "
            >
              <img
                src="/images/profile.jpg"
                alt="Sheron"
                className="
                  h-full w-full
                  scale-[1.02]
                  object-cover
                  object-[52%_50%]
                  transition-transform
                  duration-[1200ms]
                  ease-out
                  group-hover:scale-[1.07]
                "
              />

              {/* Dark cinematic overlay */}
              <div className="pointer-events-none absolute inset-0 bg-black/10" />

              {/* Bottom vignette */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

              {/* Top vignette */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-black/20 to-transparent" />

              {/* Subtle crimson edge lighting */}
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_12px_0_35px_rgba(181,42,42,0.10)]" />
            </motion.div>

            {/* Decorative vertical accent */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 70 }}
              transition={{
                delay: 1.25,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -bottom-5 left-[15%] hidden w-px bg-gradient-to-b from-[#b52a2a] to-transparent lg:block"
            />
          </motion.div>

          {/* RIGHT — Introduction */}
          <div className="text-center lg:text-left">

            {/* Hi, I'm */}
            <motion.p
              initial={{
                opacity: 0,
                y: 18,
                filter: "blur(6px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[#8a8a8a]"
            >
              Hi, I&apos;m
            </motion.p>

            {/* Animated Sheron */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.38,
                  },
                },
              }}
              className="flex justify-center text-6xl font-semibold tracking-[-0.05em] text-[#f5f5f5] sm:text-7xl lg:justify-start lg:text-8xl"
            >
              {"Sheron".split("").map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 45,
                      filter: "blur(8px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}

              {/* Red dot */}
              <motion.span
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0.2,
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="inline-block text-[#b52a2a]"
              >
                .
              </motion.span>
            </motion.h1>

            {/* Animated Roles */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.13,
                    delayChildren: 0.9,
                  },
                },
              }}
              className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm tracking-[0.18em] text-[#8a8a8a] lg:justify-start"
            >
              {["STUDENT", "DEVELOPER", "CREATOR"].map((role, index) => (
                <div
                  key={role}
                  className="flex items-center gap-3"
                >
                  <motion.span
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 15,
                        filter: "blur(4px)",
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                  >
                    {role}
                  </motion.span>

                  {index !== 2 && (
                    <motion.span
                      variants={{
                        hidden: {
                          opacity: 0,
                          scale: 0,
                        },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          transition: {
                            duration: 0.4,
                          },
                        },
                      }}
                      className="h-1 w-1 rounded-full bg-[#b52a2a]"
                    />
                  )}
                </div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
                filter: "blur(5px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.9,
                delay: 1.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mx-auto
                mt-8
                max-w-[520px]
                text-[15px]
                leading-7
                tracking-[0.02em]
                text-[#777]
                lg:mx-0
                lg:text-base
              "
            >
              I turn curiosity into things you can{" "}
              <span className="text-[#b5b5b5]">
                see, use, and remember.
              </span>{" "}
              Somewhere between ideas, code, and creativity, I&apos;m still
              figuring out what comes next.
            </motion.p>

            {/* Accent line */}
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 80,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 1.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-10 h-px bg-[#b52a2a] lg:mx-0"
            />

          </div>
        </div>
      </div>
    </section>
  );
}