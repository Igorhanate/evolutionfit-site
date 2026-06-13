import Image from "next/image";

// Dimensões reais de cada arte — usadas para manter a proporção (sem cortar).
const ILUSTRACOES: { src: string; w: number; h: number }[] = [
  { src: "corredor.png", w: 2130, h: 1984 },
  { src: "yoga.png", w: 2130, h: 1984 },
  { src: "boxe-dia.png", w: 2816, h: 1536 },
  { src: "idosos.png", w: 2130, h: 1984 },
  { src: "garmin.png", w: 2130, h: 1984 },
  { src: "avaliacao-corporal.png", w: 2132, h: 1984 },
  { src: "dieta-online.png", w: 2378, h: 1792 },
  { src: "boxe-noite.png", w: 1536, h: 1024 },
  { src: "compartilhe-evolucao.png", w: 1884, h: 2272 },
];

export default function Marquee() {
  // Lista duplicada: a animação desloca -50% e reinicia sem emenda visível.
  const itens = [...ILUSTRACOES, ...ILUSTRACOES];
  return (
    <div className="relative overflow-hidden py-6" aria-hidden>
      <div className="animate-marquee flex w-max items-center gap-6">
        {itens.map((img, i) => (
          <div
            key={i}
            className="flex h-44 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-3 shadow-sm ring-1 ring-ink/5 md:h-56"
          >
            <Image
              src={`/illustrations/${img.src}`}
              alt=""
              width={img.w}
              height={img.h}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-paper to-transparent" />
    </div>
  );
}
