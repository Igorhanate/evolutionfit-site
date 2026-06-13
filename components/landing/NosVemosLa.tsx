import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";
import { FECHAMENTO } from "@/config/content";
import { CHECKOUT_VIP } from "@/config/links";

export default function NosVemosLa() {
  return (
    <section className="px-4 py-20 text-center md:py-28">
      <Reveal>
        <h2 className="font-anton text-6xl uppercase leading-none text-ink sm:text-8xl md:text-[10rem]">
          {FECHAMENTO.titulo}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mx-auto mt-8 max-w-md font-display text-lg font-bold text-ink">
          {FECHAMENTO.preco}
          <br />
          {FECHAMENTO.sub}
        </p>
        <CTAButton href={CHECKOUT_VIP} className="mt-8">
          {FECHAMENTO.cta}
        </CTAButton>
      </Reveal>
    </section>
  );
}
