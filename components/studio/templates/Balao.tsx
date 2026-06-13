import type { TemplateProps } from "../types";
import { CAMPO_PRIMARIO } from "../campos";

// Sticker "Balão de mensagem": bolha estilo chat (verde, com rabicho),
// métrica principal + secundária dentro. Fundo transparente.
export default function Balao({ modalidade, valor }: TemplateProps) {
  const primario = CAMPO_PRIMARIO[modalidade];
  const secundario =
    modalidade === "corrida" || modalidade === "ciclismo"
      ? valor("ritmo")
      : valor("tempo");

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 px-16 text-center">
      <div className="relative max-w-[820px] rounded-[40px] bg-evo px-16 py-12 text-white">
        <div className="font-display text-[56px] font-bold leading-tight">
          {valor(primario)}, {secundario}
        </div>
        {/* rabicho da bolha */}
        <div className="absolute -bottom-6 left-16 h-0 w-0 border-x-[18px] border-t-[24px] border-x-transparent border-t-evo" />
      </div>
      <div className="font-display text-[32px] text-ink/60">
        enviado às {valor("hora")}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logos/logo-wordmark.png" alt="" width={220} className="mt-8" />
    </div>
  );
}
