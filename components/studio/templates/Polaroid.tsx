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

// Montagem "Polaroid": foto única dentro de uma polaroid clássica, levemente
// rotacionada, com legenda escrita à mão na borda inferior. Fundo transparente.
export default function Polaroid({ modalidade, valor, fotos }: TemplateProps) {
  const primario = CAMPO_PRIMARIO[modalidade];
  return (
    <div className="flex h-full w-full items-center justify-center px-12">
      <div
        className="flex w-[760px] flex-col items-center gap-6 rounded-sm bg-white p-8 shadow-2xl"
        style={{ transform: "rotate(-3deg)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/logo-wordmark.png" alt="" width={200} />
        <Foto src={fotos[0]} className="h-[680px] w-[680px] rounded-sm" />
        <div className="flex w-full items-center justify-between px-6 pt-2 pb-4">
          <div className="flex flex-col font-marker text-[44px] leading-tight text-ink">
            <span>{valor("data")}</span>
            <span>{valor("hora")}</span>
          </div>
          <div className="flex flex-col items-end font-marker text-[44px] leading-tight text-ink">
            <span>{valor(primario)}</span>
            <span>{valor("calorias")} cal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
