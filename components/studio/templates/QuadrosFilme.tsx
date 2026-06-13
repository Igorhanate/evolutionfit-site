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

// Montagem "Quadros de filme": sequência vertical de 3 quadros cinematográficos
// com métricas sobrepostas em estilo legenda dourada (LED). Fundo transparente.
export default function QuadrosFilme({ modalidade, valor, fotos }: TemplateProps) {
  const primario = CAMPO_PRIMARIO[modalidade];
  const legendas = [valor("data"), valor(primario), valor("tempo")];

  return (
    <div className="flex h-full w-full items-center justify-center px-12">
      <div className="flex w-[720px] flex-col gap-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="relative rounded-sm bg-black p-2">
            <Foto src={fotos[i]} className="h-[300px] w-full rounded-[2px]" />
            <span className="absolute bottom-5 right-5 font-led text-[26px] text-[#e3b341]">
              {legendas[i]}
            </span>
          </div>
        ))}
        <div className="mt-2 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/logo-wordmark-white.png" alt="" width={200} />
        </div>
      </div>
    </div>
  );
}
