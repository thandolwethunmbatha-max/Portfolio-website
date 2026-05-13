"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type SafeImageProps = { src: string; alt: string; title: string; className?: string; priority?: boolean; sizes?: string };
export function SafeImage({ src, alt, title, className, priority = false, sizes = "(max-width: 768px) 100vw, 50vw" }: SafeImageProps) {
  const [failed, setFailed] = useState(false);
  return <div className={cn("relative min-h-[280px] overflow-hidden bg-neutral-900", className)}>
    {!failed ? <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0" onError={() => setFailed(true)} /> : <div className="absolute inset-0 flex flex-col justify-between border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(217,255,0,.16),transparent_28%),linear-gradient(135deg,#101010,#050505)] p-5">
      <span className="text-xs font-black uppercase tracking-[0.22em] text-[#D9FF00]">Image pending</span><span className="display text-5xl uppercase leading-none text-white/85">{title}</span>
    </div>}
  </div>;
}
