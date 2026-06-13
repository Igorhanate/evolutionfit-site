import type { TemplateProps } from "../types";
import { CAMPOS_POR_MODALIDADE, CAMPO_PRIMARIO } from "../campos";

// Sticker "Serif elegante": métrica principal gigante em serifa editorial,
// com rótulo itálico acima e data abaixo. Fundo transparente.
export default function Serif({ modalidade, valor }: TemplateProps) {
  const primario = CAMPO_PRIMARIO[modalidade];
  const campo = CAMPOS_POR_MODALIDADE[modalidade].find((c) => c.id === primario);

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-10 px-16 text-center"
      style={{ textShadow: "0 2px 16px rgba(255,255,255,0.5)" }}
    >
      <div className="font-serif-el text-[40px] italic text-ink/60">
        {campo?.label.toLowerCase()}
      </div>
      <div className="font-serif-el text-[140px] leading-none text-ink">
        {valor(primario)}
      </div>
      <div className="font-serif-el text-[36px] text-ink/70">
        {valor("data")}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logos/logo-wordmark.png" alt="" width={220} className="mt-10" />
    </div>
  );
}
