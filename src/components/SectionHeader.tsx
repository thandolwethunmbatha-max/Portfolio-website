import { Reveal } from "./Reveal";
export function SectionHeader({ eyebrow, title, copy, dark = false }: { eyebrow: string; title: string; copy?: string; dark?: boolean }) {
  return <Reveal className="mb-10 grid gap-5 md:grid-cols-[.35fr_1fr] md:items-end">
    <p className={`text-xs font-black uppercase tracking-[0.25em] ${dark ? "text-black/55" : "text-[#D9FF00]"}`}>/{eyebrow}</p>
    <div><h2 className={`display text-5xl uppercase leading-[.86] sm:text-7xl lg:text-8xl ${dark ? "text-black" : "text-white"}`}>{title}</h2>{copy && <p className={`mt-5 max-w-2xl text-base leading-7 ${dark ? "text-black/65" : "text-white/60"}`}>{copy}</p>}</div>
  </Reveal>;
}
