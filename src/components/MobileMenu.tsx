"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [{ href: "/work", label: "Work" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }];
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <div className="md:hidden">
    <button aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} className="border border-white/20 p-2 text-white">{open ? <X size={20}/> : <Menu size={20}/>}</button>
    <AnimatePresence>
      {open && <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="fixed inset-x-3 top-20 z-50 border border-white/15 bg-[#050505] p-6 shadow-2xl">
        <nav className="grid gap-3" aria-label="Mobile navigation">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={`display border-b border-white/10 py-4 text-5xl uppercase ${pathname.startsWith(link.href) ? "text-[#D9FF00]" : "text-white"}`}>{link.label}</Link>)}
        </nav>
      </motion.div>}
    </AnimatePresence>
  </div>;
}
