import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { FUROU_DIETA } from "@/config/content";

export default function FuroDieta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <Reveal>
          <div>
            <h2 className="font-anton text-4xl uppercase text-ink sm:text-5xl md:text-6xl">
              Furou a dieta?
            </h2>
            <p className="mt-2 font-anton text-2xl uppercase leading-tight text-ink/80 sm:text-3xl">
              Com a Evolution isso não é problema
            </p>
            <p className="mt-5 max-w-md text-lg text-ink/70">{FUROU_DIETA.texto}</p>
            <p className="mt-6 font-display text-lg font-semibold text-evo">
              {FUROU_DIETA.tagline}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <Image
            src="/canva/furou-dieta.png"
            alt="Análise de refeição por foto no WhatsApp"
            width={1395}
            height={1929}
            className="mx-auto h-auto w-full max-w-[320px] rounded-2xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
