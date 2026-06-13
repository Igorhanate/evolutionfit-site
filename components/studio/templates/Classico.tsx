import type { TemplateProps, CampoId } from "../types";
import { CAMPOS_POR_MODALIDADE } from "../campos";
import { fmtPercent } from "../format";

// Sticker "Clássico": rótulos + valores numa grade, logo central. Fundo
// transparente para colar sobre a foto do usuário nos stories.
export default function Classico({ modalidade, valor, temValor }: TemplateProps) {
  const campos = CAMPOS_POR_MODALIDADE[modalidade];
  const nomeId: CampoId | null = temValor("nomeTreino")
    ? "nomeTreino"
    : temValor("nomeWod")
      ? "nomeWod"
      : null;

  const metricaCampos = campos.filter(
    (c) => c.id !== "nomeTreino" && c.id !== "nomeWod",
  );
  // Mostra os campos preenchidos; se nada foi preenchido, usa os 4 primeiros
  // como exemplo para o preview não ficar vazio.
  const preenchidos = metricaCampos.filter((c) => temValor(c.id));
  const exibir = preenchidos.length ? preenchidos : metricaCampos.slice(0, 4);

  const mostra = (id: CampoId) =>
    id === "percentEvolucao" ? fmtPercent(valor(id)) : valor(id);

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-20 px-24 text-center"
      style={{ textShadow: "0 2px 16px rgba(255,255,255,0.5)" }}
    >
      {nomeId && (
        <div className="font-display text-[68px] font-extrabold text-ink">
          “{valor(nomeId)}”
        </div>
      )}
      <div className="grid w-full grid-cols-2 gap-x-12 gap-y-16">
        {exibir.map((c) => (
          <div key={c.id} className="flex flex-col items-center gap-3">
            <span className="font-display text-[32px] font-bold uppercase tracking-wide text-ink/75">
              {c.label}
            </span>
            <span className="font-display text-[62px] font-extrabold text-ink">
              {mostra(c.id)}
            </span>
          </div>
        ))}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logos/logo-wordmark.png" alt="" width={440} className="mt-4" />
    </div>
  );
}
