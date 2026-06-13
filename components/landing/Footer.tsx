import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";
import { FOOTER } from "@/config/content";
import { CHECKOUT_VIP } from "@/config/links";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold md:text-5xl">
            {FOOTER.fechamento}
          </h2>
          <CTAButton href={CHECKOUT_VIP} className="mt-8">
            QUERO ASSINAR
          </CTAButton>
        </Reveal>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-white/50 md:flex-row">
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
      </div>
    </footer>
  );
}
