import type { TemplateProps } from "../types";
import { CAMPO_PRIMARIO } from "../campos";
import { fmtPercent } from "../format";

// Sticker "Evolução com gráfico": card de evolução com gráfico de linha
// estático (SVG) ascendente. Painel claro para legibilidade sobre fotos.
export default function EvolucaoGrafico({ modalidade, valor }: TemplateProps) {
  const titulo =
    modalidade === "musculacao" ? valor("nomeTreino") : valor(CAMPO_PRIMARIO[modalidade]);

  return (
    <div className="flex h-full w-full items-center justify-center px-12">
      <div className="flex w-[860px] flex-col items-center gap-8 rounded-[40px] bg-white/85 px-16 py-16 text-center ring-1 ring-ink/10">
        <div className="font-display text-[60px] font-extrabold text-ink">{titulo}</div>
        <div className="font-display text-[52px] font-extrabold text-evo">
          {fmtPercent(valor("percentEvolucao"))} de evolução
        </div>
        {modalidade === "musculacao" && (
          <div className="font-display text-[40px] text-ink/70">
            1RM máx {valor("rm")}
          </div>
        )}

        <svg viewBox="0 0 600 260" className="mt-4 w-full max-w-[600px]">
          {/* grid */}
          <line x1="0" y1="20" x2="600" y2="20" stroke="#1b7a3d" strokeOpacity="0.12" strokeWidth="2" />
          <line x1="0" y1="80" x2="600" y2="80" stroke="#1b7a3d" strokeOpacity="0.12" strokeWidth="2" />
          <line x1="0" y1="140" x2="600" y2="140" stroke="#1b7a3d" strokeOpacity="0.12" strokeWidth="2" />
          <line x1="0" y1="200" x2="600" y2="200" stroke="#1b7a3d" strokeOpacity="0.12" strokeWidth="2" />

          {/* linha ascendente */}
          <path
            d="M20,230 L160,180 L320,120 L460,70 L580,30"
            fill="none"
            stroke="#1b7a3d"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* pontos */}
          <circle cx="20" cy="230" r="9" fill="#1b7a3d" />
          <circle cx="160" cy="180" r="9" fill="#1b7a3d" />
          <circle cx="320" cy="120" r="9" fill="#1b7a3d" />
          <circle cx="460" cy="70" r="9" fill="#1b7a3d" />
          <circle cx="580" cy="30" r="9" fill="#1b7a3d" />
        </svg>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/logo-wordmark.png" alt="" width={240} className="mt-2" />
      </div>
    </div>
  );
}
