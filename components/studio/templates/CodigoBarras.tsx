import type { TemplateProps } from "../types";
import { CAMPO_PRIMARIO } from "../campos";

// Sticker "Código de barras": estética de cupom fiscal, fonte mono, com um
// código de barras decorativo no centro. Fundo transparente.

// Larguras hardcoded das barras (varia entre 4 e 14px).
const BARRAS_W = [
  6, 4, 10, 4, 14, 6, 4, 8, 12, 4, 6, 10, 4, 14, 8, 4, 6, 12, 4, 10, 6, 4, 14,
  8, 4, 6, 10, 4, 12, 6, 4, 8, 14, 4, 6, 10, 4, 12, 8, 4,
];

export default function CodigoBarras({ modalidade, valor }: TemplateProps) {
  const primario = CAMPO_PRIMARIO[modalidade];
  const halo = { textShadow: "0 2px 16px rgba(255,255,255,0.6)" };

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-12 px-16 text-center"
      style={halo}
    >
      <div className="font-led text-[40px] uppercase tracking-wide text-ink">
        {valor("data")} // {valor(primario)}
      </div>

      <div className="flex h-[160px] items-end gap-[3px]">
        {BARRAS_W.map((w, i) => (
          <div key={i} className="h-[160px] bg-ink" style={{ width: `${w}px` }} />
        ))}
      </div>

      <div className="flex w-full max-w-[820px] justify-around">
        <div className="flex flex-col items-center gap-2">
          <span className="font-led text-[24px] uppercase tracking-widest text-ink/50">
            tempo
          </span>
          <span className="font-led text-[56px] text-ink">{valor("tempo")}</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-led text-[24px] uppercase tracking-widest text-ink/50">
            calorias
          </span>
          <span className="font-led text-[56px] text-ink">{valor("calorias")}</span>
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logos/logo-wordmark.png" alt="" width={220} className="mt-6" />
    </div>
  );
}
