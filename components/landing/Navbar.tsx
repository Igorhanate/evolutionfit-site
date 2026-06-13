"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { CHECKOUT_VIP } from "@/config/links";

const LINKS = [
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#evolucao", label: "Evolução" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/#planos", label: "Planos" },
  { href: "/studio", label: "Studio" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" aria-label="Evolution Fit — início">
          <Image
            src="/logos/logo-wordmark.png"
            alt="Evolution Fit"
            width={163}
            height={40}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink/70 transition-colors hover:text-evo"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={CHECKOUT_VIP}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-ink bg-evo px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-evo-dark"
          >
            Assinar
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
      {open && (
        <div className="flex flex-col gap-1 border-t border-ink/10 bg-white px-4 pb-4 pt-2 md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 font-semibold text-ink/80 hover:bg-evo-light"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={CHECKOUT_VIP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full border-2 border-ink bg-evo px-4 py-2.5 text-center font-extrabold uppercase tracking-wide text-white"
          >
            Assinar
          </Link>
        </div>
      )}
    </header>
  );
}
