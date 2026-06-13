import {
  Dumbbell, Camera, ScanLine, ListChecks, Watch, Pill, Share2, MessageCircle,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { FEATURES } from "@/config/content";

const ICONES = {
  Dumbbell, Camera, ScanLine, ListChecks, Watch, Pill, Share2, MessageCircle,
} as const;

export default function Features() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-extrabold md:text-4xl">
          Tudo que você precisa, direto no WhatsApp
        </h2>
        <p className="mt-3 text-center text-ink/60">
          Todas as modalidades · para todas as idades · em todos os lugares
        </p>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => {
          const Icone = ICONES[f.icone as keyof typeof ICONES];
          return (
            <Reveal key={f.titulo} delay={i * 0.06}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 transition-shadow hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-evo-light text-evo">
                  <Icone size={22} />
                </div>
                <h3 className="mt-4 font-display text-base font-bold">
                  {f.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {f.texto}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
