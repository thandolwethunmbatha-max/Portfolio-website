import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { MarqueeText } from "@/components/MarqueeText";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const services = ["Brand identity", "Digital graphics", "Social media systems", "Web & e-commerce design", "Campaign assets", "Photography & retouching"];
export default function Home() {
  return <>
    <Hero />
    <MarqueeText text="Brand identity · Social media · Web design · Campaign graphics · Visual storytelling ·" />
    <FeaturedWork />
    <section className="paper-grid bg-[#F4F4F0] px-4 py-24 text-black sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]"><SectionHeader eyebrow="About" title="Self-taught, agency-tested, story-led." copy="Based in Johannesburg, Thandolwethu builds visual identities, social content, e-commerce graphics, and web experiences that help brands look sharper and communicate better." dark /><Reveal><p className="text-2xl leading-10 text-black/75">Creative and versatile graphic designer experienced in social media graphics, brand and corporate identity, digital assets, and web & e-commerce design. The practice moves between bold editorial structure and functional digital systems.</p><Button href="/about" variant="dark" className="mt-8">Read about</Button></Reveal></div></section>
    <section className="bg-[#050505] px-4 py-24 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Services" title="Design for launches, brands & digital surfaces" /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <Reveal key={service} className="border border-white/10 p-6"><span className="text-xs text-[#D9FF00]">0{index + 1}</span><h3 className="mt-10 display text-4xl uppercase leading-none">{service}</h3></Reveal>)}</div></div></section>
    <CTASection />
  </>;
}
