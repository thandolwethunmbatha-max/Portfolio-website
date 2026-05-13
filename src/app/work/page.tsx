import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";
export const metadata: Metadata = { title: "Work", description: "Filterable portfolio grid of brand identity, social media, web design, poster, campaign, merchandise, photography, and digital graphics projects by Thandolwethu Mbatha." };
export default function WorkPage() {
  return <section className="min-h-screen bg-[#050505] px-4 pb-24 pt-32 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-12 grid gap-6 lg:grid-cols-[1fr_.65fr]"><h1 className="display text-[clamp(5rem,15vw,14rem)] uppercase leading-[.75]">Work Index</h1><p className="self-end text-lg leading-8 text-white/60">A filterable archive of brand systems, social assets, digital layouts, posters, campaigns, merchandise concepts, photography, and visual storytelling.</p></div><ProjectGrid /></div></section>;
}
