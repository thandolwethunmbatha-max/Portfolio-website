import { Project } from "@/data/projects";
import { SafeImage } from "./SafeImage";
import { Reveal } from "./Reveal";
export function ProjectGallery({ project }: { project: Project }) {
  return <div className="grid gap-5 md:grid-cols-2">
    {project.galleryImages.map((image, index) => <Reveal key={image} className={index === 0 ? "md:col-span-2" : ""}><SafeImage src={image} alt={`${project.title} gallery image ${index + 1}`} title={`${project.title} / ${String(index + 1).padStart(2, "0")}`} className={`${index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"} min-h-0 border border-white/10`} sizes="(max-width: 768px) 100vw, 80vw" /></Reveal>)}
  </div>;
}
