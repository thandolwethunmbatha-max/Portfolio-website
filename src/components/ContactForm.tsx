"use client";
import { useState } from "react";
export function ContactForm() {
  const [status, setStatus] = useState("");
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.get("name")}`);
    const body = encodeURIComponent(`Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`);
    window.location.href = `mailto:Thandolwethu.n.mbatha@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Opening your email client. Formspree, Resend, or EmailJS can be connected here later.");
  }
  return <form onSubmit={submit} className="grid gap-4" aria-label="Contact form">
    <input required name="name" placeholder="Your name" className="border border-white/15 bg-transparent p-4 text-white outline-none focus:border-[#D9FF00]" />
    <input required name="email" type="email" placeholder="Email address" className="border border-white/15 bg-transparent p-4 text-white outline-none focus:border-[#D9FF00]" />
    <textarea required name="message" rows={6} placeholder="Tell me about the project" className="border border-white/15 bg-transparent p-4 text-white outline-none focus:border-[#D9FF00]" />
    <button className="border border-[#D9FF00] bg-[#D9FF00] px-5 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-transparent hover:text-[#D9FF00]">Send enquiry ↗</button>
    {status && <p className="text-sm text-white/55" role="status">{status}</p>}
  </form>;
}
