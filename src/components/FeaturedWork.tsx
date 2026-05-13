import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";
export function FeaturedWork() {
  return <section className="bg-[#050505] px-4 py-24 text-white sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Featured work" title="Selected systems, campaigns & digital artifacts" copy="A focused reel of brand, social, web, campaign, merchandise, and image-making projects." />
    <div className="grid gap-8 md:grid-cols-2">{projects.filter((p) => p.featured).map((project, index) => <ProjectCard key={project.slug} project={project} index={index}/>)}</div></div>
  </section>;
}
