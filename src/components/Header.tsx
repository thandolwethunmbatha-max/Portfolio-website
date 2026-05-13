"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";
const links = [{ href: "/work", label: "Work" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }];
export function Header() {
  const pathname = usePathname();
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <Link href="/" className="grotesk text-sm font-black uppercase tracking-[0.22em] text-white">TM / Johannesburg</Link>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
        {links.map((link) => <Link key={link.href} href={link.href} className={`text-xs font-black uppercase tracking-[0.22em] transition hover:text-[#D9FF00] ${pathname.startsWith(link.href) ? "text-[#D9FF00]" : "text-white/75"}`}>{link.label}</Link>)}
      </nav>
      <MobileMenu />
    </div>
  </header>;
}
