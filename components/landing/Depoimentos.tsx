import Reveal from "@/components/ui/Reveal";
import { DEPOIMENTOS } from "@/config/content";

function Card({ nome, texto }: { nome: string; texto: string }) {
  return (
    <figure className="w-80 shrink-0 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
      <blockquote className="text-sm leading-relaxed text-ink/75">
        “{texto}”
      </blockquote>
      <figcaption className="mt-4 font-display text-sm font-bold text-evo">
        {nome}
      </figcaption>
    </figure>
  );
}

export default function Depoimentos() {
  const metade = Math.ceil(DEPOIMENTOS.length / 2);
  const linha1 = [...DEPOIMENTOS.slice(0, metade), ...DEPOIMENTOS.slice(0, metade)];
  const linha2 = [...DEPOIMENTOS.slice(metade), ...DEPOIMENTOS.slice(metade)];
  return (
    <section id="depoimentos" className="overflow-hidden bg-evo-light/30 py-20 md:py-28">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-extrabold md:text-4xl">
          Resultados não mentem!
        </h2>
        <p className="mt-3 text-center text-ink/60">Avaliações dos clientes</p>
      </Reveal>
      <div className="mt-12 flex flex-col gap-5">
        <div className="animate-marquee-slow flex w-max gap-5">
          {linha1.map((d, i) => (
            <Card key={`a${i}`} nome={d.nome} texto={d.texto} />
          ))}
        </div>
        <div className="animate-marquee-slow flex w-max gap-5 [animation-direction:reverse]">
          {linha2.map((d, i) => (
            <Card key={`b${i}`} nome={d.nome} texto={d.texto} />
          ))}
        </div>
      </div>
    </section>
  );
}
