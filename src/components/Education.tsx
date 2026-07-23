"use client";

import { motion } from "framer-motion";

import EducationCard from "./EducationCard";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#050505] py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-0 top-0 z-0 h-[700px] w-[700px] rounded-full bg-[#b52a2a]/5 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-8 md:px-14 lg:px-20">
        {/* SECTION LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.25em] text-[#b52a2a]"
        >
          02 / EDUCATION
        </motion.p>

        {/* BIG HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            filter: "blur(12px)",
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8"
        >
          <h2
            className="
              max-w-[900px]
              text-6xl
              font-semibold
              leading-[0.95]
              tracking-[-0.06em]
              text-[#f5f5f7]
              sm:text-7xl
              lg:text-[95px]
            "
          >
            Learning doesn&apos;t
          </h2>

          <h2
            className="
              max-w-[900px]
              text-6xl
              font-semibold
              leading-[0.95]
              tracking-[-0.06em]
              text-[#6f6f74]
              sm:text-7xl
              lg:text-[95px]
            "
          >
            stop at a classroom.
          </h2>
        </motion.div>

        {/* SMALL DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            delay: 0.25,
            duration: 0.8,
          }}
          className="
            mt-10
            max-w-[640px]
            text-lg
            leading-8
            text-[#808086]
          "
        >
          Every chapter contributed something different. Some taught
          knowledge. Others taught discipline. The rest came from building
          things that didn't exist yesterday.
        </motion.p>

        {/* Cards */}
        <div className="relative mt-28">
          <div className="relative z-10">
            {education.map((item, index) => (
              <EducationCard
                key={item.number}
                index={index}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}