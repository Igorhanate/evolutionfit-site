import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";
import { BENEFICIOS_VIP, VIP } from "@/config/content";
import { CHECKOUT_VIP } from "@/config/links";

export default function PlanoVip() {
  return (
    <section id="planos" className="mx-auto max-w-4xl px-4 py-16 md:py-20">
      <Reveal>
        <h2 className="text-center font-anton text-4xl uppercase text-ink sm:text-5xl md:text-6xl">
          {VIP.titulo}
        </h2>
        <p className="mt-2 text-center font-display text-xs font-bold uppercase tracking-wide text-ink/55 sm:text-sm">
          {VIP.selo}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-8 max-w-xl rounded-3xl bg-white p-7 shadow-xl ring-1 ring-ink/10 md:p-9">
          <ul className="grid gap-3.5">
            {BENEFICIOS_VIP.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-evo text-white">
                  <Check size={15} strokeWidth={3} />
                </span>
                <span className="font-display text-base font-medium text-ink/85">
                  {b}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <CTAButton href={CHECKOUT_VIP} className="w-full sm:w-auto">
              {VIP.cta}
            </CTAButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
