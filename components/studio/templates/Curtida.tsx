import { Heart } from "lucide-react";
import type { TemplateProps } from "../types";
import { CAMPO_PRIMARIO } from "../campos";

// Sticker "Curtida": pílula vermelha estilo "curtir" do Instagram, com
// coração + métrica principal. Fundo transparente.
export default function Curtida({ modalidade, valor }: TemplateProps) {
  const primario = CAMPO_PRIMARIO[modalidade];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 px-16 text-center">
      <div className="flex items-center gap-6 rounded-full bg-[#ef4444] px-14 py-8">
        <Heart fill="white" stroke="white" size={64} />
        <span className="font-display text-[64px] font-extrabold text-white">
          {valor(primario)}
        </span>
      </div>
      <div className="font-display text-[32px] text-ink/60">
        {valor("data")}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logos/logo-wordmark.png" alt="" width={220} className="mt-8" />
    </div>
  );
}
