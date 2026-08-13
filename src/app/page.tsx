import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="bg-[#050505] text-[#f5f5f7]">
      <Hero />
      <About />
      <Education />
    </main>
  );
}