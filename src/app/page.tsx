"use client";

import { useState } from "react";

import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="bg-[#050505] text-[#f5f5f7]">
      {!introComplete ? (
        <Intro
          onComplete={() => {
            setIntroComplete(true);
          }}
        />
      ) : (
        <>
          <Hero />
          <About />
          <Education />
        </>
      )}
    </main>
  );
}