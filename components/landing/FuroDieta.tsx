import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";
import { FUROU_DIETA } from "@/config/content";
import { CHECKOUT_VIP } from "@/config/links";

export default function FuroDieta() {
  return (
    <section className="bg-evo-light/60">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
        <Reveal>
          <div>
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">
              {FUROU_DIETA.titulo}{" "}
              <span className="text-evo">{FUROU_DIETA.destaque}</span>
            </h2>
            <p className="mt-4 text-lg text-ink/70">{FUROU_DIETA.texto}</p>
            <p className="mt-6 font-display text-xl font-semibold text-ink/80">
              {FUROU_DIETA.tagline}
            </p>
            <CTAButton href={CHECKOUT_VIP} className="mt-8">
              Começar agora
            </CTAButton>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/illustrations/analise-comida.png"
              alt="Análise de refeição por foto no WhatsApp"
              width={640}
              height={640}
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
