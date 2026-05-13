import Link from "next/link";
export function Footer() {
  return <footer className="border-t border-white/10 bg-[#050505] px-4 py-10 text-white sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.4fr_.6fr]">
      <div><p className="display text-5xl uppercase sm:text-7xl">Let's build visual systems.</p><p className="mt-4 max-w-xl text-sm text-white/55">References available on request.</p></div>
      <div className="grid content-between gap-6 text-sm uppercase tracking-[0.16em] text-white/70">
        <Link href="mailto:Thandolwethu.n.mbatha@gmail.com" className="hover:text-[#D9FF00]">Email</Link>
        <Link href="https://www.behance.net/thandolwethumbatha" className="hover:text-[#D9FF00]">Behance</Link>
        <p>© {new Date().getFullYear()} Thandolwethu Mbatha</p>
      </div>
    </div>
  </footer>;
}
