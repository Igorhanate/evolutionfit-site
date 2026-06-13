import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/landing/Marquee";
import { HERO } from "@/config/content";
import { CHECKOUT_VIP } from "@/config/links";

export default function Hero() {
  return (
    <section className="pt-10 md:pt-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <Reveal>
          <span className="mb-5 inline-block rounded-full border border-evo/30 bg-evo-light px-4 py-1.5 text-sm font-semibold text-evo">
            Pré-venda · apenas 50 vagas
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-4xl font-extrabold leading-tight md:text-6xl">
            {HERO.titulo}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink/70 md:text-xl">
            {HERO.subtitulo}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <CTAButton href={CHECKOUT_VIP} className="mt-8">
            {HERO.cta}
          </CTAButton>
          <p className="mt-4 text-sm text-ink/50">
            Sem baixar app · Disponível 24h · Cancele quando quiser
          </p>
        </Reveal>
      </div>
      <Reveal delay={0.4}>
        <div className="mt-12">
          <Marquee />
        </div>
      </Reveal>
    </section>
  );
}
