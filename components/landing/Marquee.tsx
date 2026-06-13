import Image from "next/image";

const ILUSTRACOES = [
  "corredor.png",
  "yoga.png",
  "boxe-dia.png",
  "idosos.png",
  "garmin.png",
  "avaliacao-corporal.png",
  "analise-alimentos.png",
  "boxe-noite.png",
  "dieta-online.png",
  "compartilhe-evolucao.png",
];

export default function Marquee() {
  // Lista duplicada: a animação desloca -50% e reinicia sem emenda visível.
  const itens = [...ILUSTRACOES, ...ILUSTRACOES];
  return (
    <div className="relative overflow-hidden py-6" aria-hidden>
      <div className="animate-marquee flex w-max gap-8">
        {itens.map((img, i) => (
          <div
            key={i}
            className="h-44 w-44 shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm md:h-56 md:w-56"
          >
            <Image
              src={`/illustrations/${img}`}
              alt=""
              width={224}
              height={224}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-paper to-transparent" />
    </div>
  );
}
