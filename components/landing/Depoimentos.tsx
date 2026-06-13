import { UserRound, Star } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { DEPOIMENTOS } from "@/config/content";

function Estrelas() {
  return (
    <div className="flex justify-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="fill-[#f5b301] text-[#f5b301]" />
      ))}
    </div>
  );
}

function CardVerde({ nome, texto }: { nome: string; texto: string }) {
  return (
    <figure className="flex h-full flex-col items-center rounded-2xl bg-evo-light px-6 py-7 text-center ring-1 ring-evo/15">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-evo text-white">
        <UserRound size={24} />
      </span>
      <blockquote className="mt-4 grow text-sm leading-relaxed text-ink/75">
        {texto}
      </blockquote>
      <div className="mt-4">
        <Estrelas />
        <figcaption className="mt-2 font-display text-sm font-bold text-evo">
          {nome}
        </figcaption>
      </div>
    </figure>
  );
}

export default function Depoimentos() {
  const tres = DEPOIMENTOS.slice(0, 3);
  return (
    <section id="depoimentos" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <Reveal>
        <h2 className="text-center font-anton text-4xl uppercase text-ink sm:text-5xl md:text-6xl">
          Resultados <span className="text-evo">não mentem!</span>
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {tres.map((d, i) => (
          <Reveal key={d.nome} delay={i * 0.08}>
            <CardVerde nome={d.nome} texto={d.texto} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
