import type { TemplateProps } from "../types";
import { CAMPOS_POR_MODALIDADE } from "../campos";
import { fmtPercent } from "../format";
import type { CampoId } from "../types";

// Sticker "Stats compactos": caixinha discreta com 2-4 métricas, perto da
// base do canvas. Fundo transparente fora da caixa.
export default function StatsCompactos({ modalidade, valor, temValor }: TemplateProps) {
  const campos = CAMPOS_POR_MODALIDADE[modalidade];
  const preenchidos = campos.filter((c) => temValor(c.id));
  const exibir = (preenchidos.length ? preenchidos : campos).slice(0, 4);

  const mostra = (id: CampoId) =>
    id === "percentEvolucao" ? fmtPercent(valor(id)) : valor(id);

  return (
    <div className="flex h-full w-full flex-col items-center justify-start px-20 pt-[1280px]">
      <div className="flex w-[720px] flex-col items-center gap-10 rounded-[32px] bg-white/85 px-12 py-10 ring-1 ring-ink/10">
        <div
          className={`grid w-full gap-x-8 gap-y-8 ${
            exibir.length >= 3 ? "grid-cols-3" : "grid-cols-2"
          }`}
        >
          {exibir.map((c) => (
            <div key={c.id} className="flex flex-col items-center gap-2 text-center">
              <span className="font-display text-[24px] uppercase tracking-wide text-ink/50">
                {c.label}
              </span>
              <span className="font-display text-[44px] font-extrabold text-ink">
                {mostra(c.id)}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logos/logo-wordmark.png" alt="" width={240} className="mt-8" />
    </div>
  );
}
