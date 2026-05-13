"use client";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";
export function ProjectGrid() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => active === "All" ? projects : projects.filter((project) => project.categories.includes(active)), [active]);
  return <section><ProjectFilter active={active} onChange={setActive}/><div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">{filtered.map((project, index) => <ProjectCard key={project.slug} project={project} index={index}/>)}</div></section>;
}
