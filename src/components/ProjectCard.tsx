"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { SafeImage } from "./SafeImage";
export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .04 }} className="group">
    <Link href={`/work/${project.slug}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9FF00]">
      <SafeImage src={project.coverImage} alt={`${project.title} project cover`} title={project.title} className={`${index % 3 === 1 ? "aspect-[4/5]" : "aspect-[5/4]"} min-h-0 border border-white/10`} />
      <div className="grid grid-cols-[1fr_auto] border-b border-white/10 py-5">
        <div><h3 className="display text-4xl uppercase leading-none text-white transition group-hover:text-[#D9FF00]">{project.title}</h3><p className="mt-2 text-sm text-white/50">{project.client} · {project.year}</p></div>
        <span className="text-3xl transition group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-white/55">{project.shortDescription}</p>
      <div className="mt-4 flex flex-wrap gap-2">{project.categories.slice(0,3).map((cat) => <span key={cat} className="border border-white/15 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">{cat}</span>)}</div>
    </Link>
  </motion.article>;
}
