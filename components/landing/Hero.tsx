import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import { HERO } from "@/config/content";
import { CHECKOUT_VIP } from "@/config/links";

export default function Hero() {
  return (
    <section className="pt-10 md:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-2">
        <Reveal>
          <div>
            <h1 className="font-anton text-5xl uppercase text-ink sm:text-6xl md:text-7xl">
              A primeira IA de
              <br />
              gestão <span className="text-evo">fitness</span>
            </h1>
            <p className="mt-6 font-display text-sm font-bold uppercase tracking-wide text-ink/70">
              {HERO.subtitulo}
            </p>
            <CTAButton href={CHECKOUT_VIP} className="mt-7">
              {HERO.cta}
            </CTAButton>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <Image
            src="/canva/hero.png"
            alt="Evo — seu personal e nutricionista no WhatsApp"
            width={1423}
            height={1645}
            priority
            className="mx-auto h-auto w-full max-w-md"
          />
        </Reveal>
      </div>

      <Reveal>
        <div className="mx-auto mt-6 max-w-5xl px-4 text-center">
          <h2 className="font-anton text-4xl uppercase leading-tight text-ink sm:text-5xl md:text-6xl">
            Tudo que você precisa
            <br className="hidden sm:block" /> direto no{" "}
            <span className="text-evo">WhatsApp</span>
          </h2>
          <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-1 font-display text-xs font-bold uppercase tracking-wide text-ink/60 sm:text-sm">
            {HERO.bandLabels.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
