import type { TemplateProps } from "../types";
import { CAMPO_PRIMARIO } from "../campos";

function Foto({ src, className }: { src?: string; className?: string }) {
  return src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" className={`${className} object-cover`} />
  ) : (
    <div className={`${className} flex items-center justify-center bg-gradient-to-br from-[#cfe3d6] to-[#b7c9e0] text-ink/40`}>
      <span className="font-display text-[28px]">sua foto</span>
    </div>
  );
}

// Montagem "Colagem com etiqueta": grade 2x2 de fotos com uma etiqueta
// destacando a métrica principal por cima. Fundo transparente.
export default function ColagemEtiqueta({ modalidade, valor, fotos }: TemplateProps) {
  const primario = CAMPO_PRIMARIO[modalidade];

  return (
    <div className="flex h-full w-full items-center justify-center px-12">
      <div className="relative flex w-[860px] flex-col items-center gap-8">
        <div className="grid w-[860px] grid-cols-2 gap-2 overflow-hidden rounded-2xl">
          <Foto src={fotos[0]} className="aspect-square w-full" />
          <Foto src={fotos[1]} className="aspect-square w-full" />
          <Foto src={fotos[2]} className="aspect-square w-full" />
          <Foto src={fotos[3]} className="aspect-square w-full" />
        </div>

        <div
          className="absolute top-[360px] flex items-center justify-center rounded-md bg-[#2563eb] px-6 py-3 font-display text-[44px] font-bold text-white shadow-lg"
          style={{ transform: "rotate(-3deg)" }}
        >
          essa semana — {valor(primario)}
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/logo-wordmark.png" alt="" width={220} />
      </div>
    </div>
  );
}
