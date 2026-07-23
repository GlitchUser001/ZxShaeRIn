"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Coming Soon", href: "#coming-soon" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-1/2 top-5 z-50 -translate-x-1/2"
    >
      <nav className="flex items-center rounded-full border border-white/[0.08] bg-[#111111]/70 p-1.5 shadow-[0_10px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <a
          href="#home"
          className="flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold text-white"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#b52a2a] shadow-[0_0_12px_rgba(181,42,42,0.8)]" />
          SHERON
        </a>

        <div className="mx-1 hidden h-4 w-px bg-white/10 md:block" />

        <div className="hidden items-center md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-[12px] font-medium text-[#999] transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}