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

// Montagem "Tira photo booth": tira vertical de 3 fotos estilo cabine, com
// uma fita de destaque com a métrica principal escrita à mão. Fundo transparente.
export default function TiraPhotoBooth({ modalidade, valor, fotos }: TemplateProps) {
  const primario = CAMPO_PRIMARIO[modalidade];
  return (
    <div className="flex h-full w-full items-center justify-center px-12">
      <div
        className="relative flex w-[460px] flex-col gap-4 bg-white p-4 shadow-2xl"
        style={{ transform: "rotate(-2deg)" }}
      >
        <Foto src={fotos[0]} className="h-[360px] w-full" />
        <Foto src={fotos[1]} className="h-[360px] w-full" />
        <Foto src={fotos[2]} className="h-[360px] w-full" />

        {/* fita amarela com a métrica */}
        <div
          className="absolute top-[420px] right-[-30px] flex items-center justify-center bg-[#ffe25a]/85 px-8 py-3 shadow-md"
          style={{ transform: "rotate(-4deg)" }}
        >
          <span className="font-marker text-[40px] text-ink">{valor(primario)}</span>
        </div>

        <div className="mt-2 flex items-center justify-center pb-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/logo-wordmark.png" alt="" width={180} />
        </div>
      </div>
    </div>
  );
}
