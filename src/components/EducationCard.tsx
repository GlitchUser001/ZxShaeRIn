"use client";

import { motion } from "framer-motion";

type Props = {
  index: number;
  number: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
};

export default function EducationCard({
  index,
  number,
  label,
  title,
  subtitle,
  description,
  accent,
}: Props) {
  const reverse = index % 2 === 1;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className={`
        group
        relative
        grid
        items-center
        gap-12
        border-t
        border-white/10
        py-24
        lg:grid-cols-2
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* Giant background number */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: false,
        }}
        transition={{
          duration: 0.9,
        }}
        className="
          pointer-events-none
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          text-[180px]
          font-bold
          tracking-[-0.08em]
          text-white/[0.04]
          select-none
        "
      >
        {number}
      </motion.div>

      {/* LEFT */}
      <div className="relative z-10">
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            delay: 0.1,
          }}
          className="text-xs uppercase tracking-[0.25em] text-[#b52a2a]"
        >
          {label}
        </motion.p>

        <motion.h3
          initial={{
            opacity: 0,
            y: 35,
            filter: "blur(6px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-5
            text-4xl
            font-semibold
            tracking-[-0.05em]
            text-white
            transition-transform
            duration-500
            group-hover:translate-x-2
            lg:text-6xl
          "
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            delay: 0.25,
          }}
          className="mt-4 text-lg text-[#8d8d92]"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: 70,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="mt-8 h-px bg-[#b52a2a]"
        />
      </div>

      {/* RIGHT */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
        }}
        transition={{
          delay: 0.25,
        }}
        className="relative z-10"
      >
        <p className="max-w-xl text-lg leading-8 text-[#7b7b80]">
          {description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <motion.span
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="h-2 w-2 rounded-full bg-[#b52a2a]"
          />

          <span className="text-sm uppercase tracking-[0.18em] text-white/50">
            {accent}
          </span>
        </div>
      </motion.div>
    </motion.article>
  );
}