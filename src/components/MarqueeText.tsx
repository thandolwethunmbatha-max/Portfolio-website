export function MarqueeText({ text }: { text: string }) {
  return <div className="overflow-hidden border-y border-white/10 bg-[#050505] py-5 text-white"><div className="marquee flex w-max gap-8 whitespace-nowrap"><span className="display text-6xl uppercase sm:text-8xl">{text}</span><span className="display text-6xl uppercase text-[#D9FF00] sm:text-8xl">{text}</span><span className="display text-6xl uppercase sm:text-8xl">{text}</span><span className="display text-6xl uppercase text-[#D9FF00] sm:text-8xl">{text}</span></div></div>;
}
