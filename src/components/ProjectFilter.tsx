"use client";
import { categories } from "@/data/projects";
export function ProjectFilter({ active, onChange }: { active: string; onChange: (category: string) => void }) {
  return <div className="mb-10 flex flex-wrap gap-2" role="list" aria-label="Project filters">
    {categories.map((category) => <button key={category} onClick={() => onChange(category)} className={`border px-3 py-2 text-xs font-black uppercase tracking-[0.16em] transition ${active === category ? "border-[#D9FF00] bg-[#D9FF00] text-black" : "border-white/15 text-white/60 hover:border-white hover:text-white"}`}>{category}</button>)}
  </div>;
}
