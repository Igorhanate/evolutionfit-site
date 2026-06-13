import type { TemplateProps, CampoId } from "../types";
import { CAMPOS_POR_MODALIDADE } from "../campos";
import { fmtPercent } from "../format";

// Sticker "LED retrô": painel escuro estilo relógio digital, métricas em
// fonte mono verde com brilho. Fundo transparente.
export default function LedRetro({ modalidade, valor, temValor }: TemplateProps) {
  const campos = CAMPOS_POR_MODALIDADE[modalidade];
  const metricaCampos = campos.filter(
    (c) => c.id !== "nomeTreino" && c.id !== "nomeWod",
  );
  const preenchidos = metricaCampos.filter((c) => temValor(c.id));
  const exibir = (preenchidos.length ? preenchidos : metricaCampos).slice(0, 3);

  const mostra = (id: CampoId) =>
    id === "percentEvolucao" ? fmtPercent(valor(id)) : valor(id);

  const glow = { textShadow: "0 0 18px rgba(57,211,83,0.6)" };

  return (
    <div className="flex h-full w-full items-center justify-center px-16">
      <div className="flex w-[820px] flex-col items-center gap-12 rounded-[36px] bg-black/75 px-16 py-20">
        <div className="flex w-full flex-col gap-10">
          {exibir.map((c) => (
            <div key={c.id} className="flex flex-col items-center gap-2">
              <span
                className="font-led text-[28px] uppercase tracking-widest text-[#39d353]/50"
                style={glow}
              >
                {c.label}
              </span>
              <span className="font-led text-[72px] text-[#39d353]" style={glow}>
                {mostra(c.id)}
              </span>
            </div>
          ))}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/logo-wordmark-white.png" alt="" width={240} className="mt-4" />
      </div>
    </div>
  );
}
