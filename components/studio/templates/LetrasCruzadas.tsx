import type { TemplateProps, Modalidade } from "../types";
import { CAMPO_PRIMARIO } from "../campos";

// Sticker "Letras cruzadas": palavra da modalidade empilhada verticalmente,
// cruzando com a métrica principal na horizontal. Fundo transparente.

const PALAVRA: Record<Modalidade, string> = {
  musculacao: "FORÇA",
  corrida: "CORRIDA",
  ciclismo: "PEDAL",
  crossfit: "WOD",
  yoga: "YOGA",
};

export default function LetrasCruzadas({ modalidade, valor }: TemplateProps) {
  const palavra = PALAVRA[modalidade];
  const letras = palavra.split("");
  const meio = Math.floor(letras.length / 2);
  const primario = CAMPO_PRIMARIO[modalidade];
  const halo = { textShadow: "0 2px 16px rgba(255,255,255,0.6)" };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-16 px-16">
      <div className="relative flex flex-col items-center" style={halo}>
        {letras.map((l, i) => (
          <div key={i} className="relative flex items-center">
            <span className="font-led text-[88px] font-bold leading-none text-ink">
              {l}
            </span>
            {i === meio && (
              <span className="font-led ml-6 text-[88px] font-bold leading-none text-evo">
                {valor(primario)}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logos/logo-wordmark.png" alt="" width={220} className="mt-4" />
    </div>
  );
}
