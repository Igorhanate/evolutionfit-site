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

// Montagem "Filme / negativo": foto emoldurada como quadro de filme 35mm,
// com furos de sprocket nas laterais e textos estilo LED nas margens.
// Fundo transparente; só o quadro de filme é opaco (preto).
export default function FilmeNegativo({ modalidade, valor, fotos }: TemplateProps) {
  const primario = CAMPO_PRIMARIO[modalidade];
  const furos = Array.from({ length: 10 });

  return (
    <div className="flex h-full w-full items-center justify-center px-12">
      <div className="relative flex w-[820px] flex-col gap-3 bg-black px-6 py-6">
        {/* topo */}
        <div className="flex items-center justify-between px-2 font-led text-[26px] text-white/90">
          <span>{valor("data")}</span>
          <span>AURA</span>
        </div>

        <div className="flex items-stretch gap-3">
          {/* coluna de furos esquerda */}
          <div className="flex flex-col items-center justify-between gap-2 py-2">
            {furos.map((_, i) => (
              <div key={i} className="h-[16px] w-[28px] rounded-sm bg-white/85" />
            ))}
          </div>

          {/* janela central com a foto */}
          <Foto src={fotos[0]} className="h-[820px] w-[620px]" />

          {/* coluna de furos direita */}
          <div className="flex flex-col items-center justify-between gap-2 py-2">
            {furos.map((_, i) => (
              <div key={i} className="h-[16px] w-[28px] rounded-sm bg-white/85" />
            ))}
          </div>
        </div>

        {/* base */}
        <div className="flex items-center justify-between px-2 font-led text-[26px] text-white/90">
          <span>{valor(primario)} · {valor("tempo")}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/logo-wordmark-white.png" alt="" width={160} />
        </div>
      </div>
    </div>
  );
}
