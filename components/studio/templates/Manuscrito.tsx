import type { TemplateProps } from "../types";
import { CAMPO_PRIMARIO } from "../campos";

// Sticker "Manuscrito": estilo escrita a mão (font-marker), data grande no
// topo, logo no meio e a métrica principal grande abaixo. Fundo transparente.
export default function Manuscrito({ modalidade, valor }: TemplateProps) {
  const primario = CAMPO_PRIMARIO[modalidade];
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-16 px-20 text-center"
      style={{ textShadow: "0 2px 16px rgba(255,255,255,0.5)" }}
    >
      <div className="font-marker text-[72px] text-ink">
        {valor("data")}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logos/logo-wordmark.png" alt="" width={340} />
      <div className="font-marker text-[140px] leading-none text-ink">
        {valor(primario)}
      </div>
    </div>
  );
}
