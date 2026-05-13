import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = { href: string; children: React.ReactNode; variant?: "dark" | "light" | "accent"; className?: string };
export function Button({ href, children, variant = "light", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center border px-5 py-3 text-sm font-black uppercase tracking-[0.18em] transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9FF00]",
        variant === "light" && "border-white text-white hover:bg-white hover:text-black",
        variant === "dark" && "border-black text-black hover:bg-black hover:text-white",
        variant === "accent" && "border-[#D9FF00] bg-[#D9FF00] text-black hover:bg-transparent hover:text-[#D9FF00]",
        className,
      )}
    >
      {children}<span className="ml-3 transition-transform group-hover:translate-x-1">↗</span>
    </Link>
  );
}
