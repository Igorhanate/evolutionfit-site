import Image from "next/image";
import Link from "next/link";
import { FOOTER } from "@/config/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-white/50 md:flex-row">
        <Image
          src="/logos/logo-wordmark-white.png"
          alt="Evolution Fit"
          width={130}
          height={32}
          className="h-7 w-auto"
        />
        <div className="flex gap-6">
          <Link href="/studio" className="hover:text-white">
            Studio de Métricas
          </Link>
          <span>{FOOTER.suporte}</span>
        </div>
        <span>© {new Date().getFullYear()} Evolution Fit AI</span>
      </div>
    </footer>
  );
}
