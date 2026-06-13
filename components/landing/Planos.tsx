import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";
import { BENEFICIOS_VIP, PLANOS } from "@/config/content";
import { CHECKOUT_ANUAL, CHECKOUT_TRIMESTRAL, CHECKOUT_VIP } from "@/config/links";

export default function Planos() {
  return (
    <section id="planos" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-extrabold md:text-4xl">
          Escolha seu plano
        </h2>
        <p className="mt-3 text-center text-ink/60">{PLANOS.aviso}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative mx-auto mt-12 max-w-2xl rounded-3xl bg-ink p-8 text-white shadow-xl md:p-10">
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-evo px-4 py-1.5 text-xs font-bold tracking-wide">
            {PLANOS.vip.selo}
          </span>
          <h3 className="font-display text-2xl font-extrabold">
            {PLANOS.vip.nome}
          </h3>
          <p className="mt-3">
            <span className="font-display text-5xl font-extrabold">
              {PLANOS.vip.preco}
            </span>
            <span className="text-white/60">{PLANOS.vip.sufixo}</span>
            <span className="ml-2 align-middle text-sm text-white/50">
              valor promocional
            </span>
          </p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {BENEFICIOS_VIP.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-white/85">
                <Check size={18} className="mt-0.5 shrink-0 text-evo" />
                {b}
              </li>
            ))}
          </ul>
          <CTAButton href={CHECKOUT_VIP} className="mt-8 w-full text-center">
            {PLANOS.vip.cta}
          </CTAButton>
        </div>
      </Reveal>

      <div className="mx-auto mt-8 grid max-w-2xl gap-5 sm:grid-cols-2">
        {[
          { plano: PLANOS.trimestral, href: CHECKOUT_TRIMESTRAL },
          { plano: PLANOS.anual, href: CHECKOUT_ANUAL },
        ].map(({ plano, href }, i) => (
          <Reveal key={plano.nome} delay={0.15 + i * 0.05}>
            <div className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-ink/5">
              <h3 className="font-display text-lg font-bold">{plano.nome}</h3>
              <p className="mt-2">
                <span className="font-display text-3xl font-extrabold">
                  {plano.preco}
                </span>
                <span className="text-ink/50">{plano.sufixo}</span>
              </p>
              <div className="mt-auto pt-6">
                <CTAButton href={href} variant="outline" className="w-full text-center">
                  {plano.cta}
                </CTAButton>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
