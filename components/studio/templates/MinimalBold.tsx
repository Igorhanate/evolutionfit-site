import type { TemplateProps } from "../types";
import { CAMPO_PRIMARIO } from "../campos";

// Sticker "Minimal bold": data/hora pequenos no rodapé e a métrica principal
// gigante. Fundo transparente. Inspirado nos cards lilás do cliente.
export default function MinimalBold({ modalidade, valor }: TemplateProps) {
  const primario = CAMPO_PRIMARIO[modalidade];
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-end gap-8 px-20 pb-44 text-center"
      style={{ textShadow: "0 2px 16px rgba(255,255,255,0.5)" }}
    >
      <div className="font-display text-[40px] font-bold tracking-wide text-ink/80">
        {valor("data")} · {valor("hora")}
      </div>
      <div className="font-display text-[150px] font-extrabold leading-none text-ink">
        {valor(primario)}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logos/logo-wordmark.png" alt="" width={360} className="mt-6" />
    </div>
  );
}
