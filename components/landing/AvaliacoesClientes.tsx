import Image from "next/image";
import { UserRound, Star } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { DEPOIMENTOS, FOTOS_REAIS } from "@/config/content";

function Estrelas() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} className="fill-[#f5b301] text-[#f5b301]" />
      ))}
    </div>
  );
}

export default function AvaliacoesClientes() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <Reveal>
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {FOTOS_REAIS.map((f) => (
            <div key={f} className="aspect-[3/4] overflow-hidden rounded-xl bg-ink/5">
              <Image
                src={`/canva/${f}`}
                alt=""
                width={420}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <h2 className="mt-12 text-center font-anton text-4xl uppercase text-ink sm:text-5xl md:text-6xl">
          Avaliações <span className="text-evo">dos clientes</span>
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {DEPOIMENTOS.map((d, i) => (
          <Reveal key={d.nome} delay={(i % 2) * 0.06}>
            <figure className="flex gap-4 rounded-2xl bg-evo-light px-5 py-4 ring-1 ring-evo/15">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-evo text-white">
                <UserRound size={20} />
              </span>
              <div>
                <div className="flex items-center justify-between gap-3">
                  <figcaption className="font-display text-sm font-bold text-evo">
                    {d.nome}
                  </figcaption>
                  <Estrelas />
                </div>
                <blockquote className="mt-1 text-sm leading-relaxed text-ink/75">
                  {d.texto}
                </blockquote>
              </div>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
