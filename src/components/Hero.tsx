"use client";
import { motion } from "framer-motion";
import { Button } from "./Button";
export function Hero() {
  const words = ["THANDOLWETHU", "MBATHA"];
  return <section className="brutal-grid relative flex min-h-screen items-end overflow-hidden bg-[#050505] px-4 pb-12 pt-28 text-white sm:px-6 lg:px-8">
    <motion.div className="pointer-events-none absolute right-4 top-28 h-44 w-44 border border-[#D9FF00] opacity-70 mix-blend-difference" animate={{ rotate: [0, 8, 0], y: [0, 24, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}/>
    <div className="mx-auto w-full max-w-7xl">
      <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#D9FF00]">Johannesburg, South Africa · Graphic Design</p>
      <h1 aria-label="Thandolwethu Mbatha" className="display max-w-[13ch] text-[clamp(4.4rem,16vw,15.5rem)] uppercase leading-[.74]">
        {words.map((word, i) => <motion.span key={word} className="block" initial={{ y: 110, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .8, delay: i * .12, ease: [0.22, 1, 0.36, 1] }}>{word}</motion.span>)}
      </h1>
      <div className="mt-9 grid gap-8 md:grid-cols-[.9fr_1.1fr] md:items-end">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }} className="grotesk text-2xl font-bold uppercase leading-none sm:text-4xl">Graphic Designer & Visual Storyteller</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }}>
          <p className="max-w-2xl text-base leading-7 text-white/65 sm:text-lg">I create brand identities, digital graphics, social media visuals, web experiences, and visual systems that help brands communicate with clarity and impact.</p>
          <div className="mt-7 flex flex-wrap gap-3"><Button href="/work" variant="accent">View Work</Button><Button href="/contact">Contact Me</Button></div>
        </motion.div>
      </div>
    </div>
  </section>;
}
