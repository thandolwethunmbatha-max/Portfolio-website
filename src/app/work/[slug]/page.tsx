import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Reveal } from "@/components/Reveal";
import { SafeImage } from "@/components/SafeImage";
import { getProjectBySlug, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.shortDescription, openGraph: { title: `${project.title} — Thandolwethu Mbatha`, description: project.shortDescription, images: [project.coverImage] } };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  return <article className="bg-[#050505] text-white"><section className="px-4 pb-14 pt-32 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><Link href="/work" className="text-xs font-black uppercase tracking-[0.2em] text-[#D9FF00] hover:text-white">← Back to work</Link><div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><h1 className="display text-[clamp(4.5rem,14vw,14rem)] uppercase leading-[.74]">{project.title}</h1><div className="border-l border-white/15 pl-6"><p className="text-sm uppercase tracking-[0.22em] text-white/45">{project.client} · {project.year}</p><p className="mt-5 text-lg leading-8 text-white/65">{project.overview}</p></div></div></div></section><SafeImage src={project.coverImage} alt={`${project.title} cover image`} title={project.title} priority className="h-[72vh] min-h-[460px] border-y border-white/10" sizes="100vw" />
  <section className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.45fr_1fr]"><Reveal><p className="text-xs font-black uppercase tracking-[0.24em] text-[#D9FF00]">Services</p><div className="mt-5 flex flex-wrap gap-2">{project.services.map((service) => <span key={service} className="border border-white/15 px-3 py-2 text-xs uppercase tracking-[0.14em] text-white/70">{service}</span>)}</div></Reveal><div className="grid gap-10 md:grid-cols-3"><Reveal><h2 className="display text-4xl uppercase">Challenge</h2><p className="mt-4 text-sm leading-7 text-white/60">{project.challenge}</p></Reveal><Reveal><h2 className="display text-4xl uppercase">Direction</h2><p className="mt-4 text-sm leading-7 text-white/60">{project.direction}</p></Reveal><Reveal><h2 className="display text-4xl uppercase">Outcome</h2><p className="mt-4 text-sm leading-7 text-white/60">{project.outcome}</p></Reveal></div></div></section>
  <section className="px-4 pb-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><ProjectGallery project={project}/></div></section>
  <section className="paper-grid bg-[#F4F4F0] px-4 py-20 text-black sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2"><Reveal><h2 className="display text-6xl uppercase leading-none">Deliverables</h2><ul className="mt-8 grid gap-3">{project.deliverables.map((item) => <li key={item} className="border-b border-black/15 pb-3 text-lg font-bold uppercase">{item}</li>)}</ul></Reveal><Reveal className="self-end"><p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-black/50">Next project</p><h3 className="display text-6xl uppercase leading-none">{next.title}</h3><Button href={`/work/${next.slug}`} variant="dark" className="mt-7">View next</Button></Reveal></div></section></article>;
}
