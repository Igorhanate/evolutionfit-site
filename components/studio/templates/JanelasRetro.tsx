import type { TemplateProps, CampoId } from "../types";
import { CAMPOS_POR_MODALIDADE } from "../campos";

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

function TitleBar({ nome }: { nome: string }) {
  return (
    <div className="flex h-10 items-center justify-between rounded-t-md bg-[#d8d8d8] px-3">
      <span className="font-led text-[22px] text-ink/70">{nome}</span>
      <div className="flex gap-2">
        <div className="h-3 w-3 rounded-full bg-ink/30" />
        <div className="h-3 w-3 rounded-full bg-ink/30" />
        <div className="h-3 w-3 rounded-full bg-ink/30" />
      </div>
    </div>
  );
}

// Montagem "Janelas retrô": desktop estilo OS antigo com janelas sobrepostas —
// duas com fotos e uma nota "stats.txt" com métricas. Fundo transparente.
export default function JanelasRetro({ modalidade, valor, temValor, fotos }: TemplateProps) {
  const campos = CAMPOS_POR_MODALIDADE[modalidade];
  const metricaCampos = campos.filter((c) => c.id !== "nomeTreino" && c.id !== "nomeWod");
  const preenchidos = metricaCampos.filter((c) => temValor(c.id));
  const exibir = (preenchidos.length ? preenchidos : metricaCampos).slice(0, 3) as { id: CampoId; label: string }[];

  return (
    <div className="flex h-full w-full items-center justify-center px-12">
      <div className="relative h-[1100px] w-[900px]">
        {/* janela 1 - foto */}
        <div
          className="absolute left-0 top-0 w-[560px] overflow-hidden rounded-md bg-[#f0f0f0] shadow-xl ring-1 ring-black/30"
          style={{ transform: "rotate(-2deg)" }}
        >
          <TitleBar nome="treino.jpg" />
          <Foto src={fotos[0]} className="h-[420px] w-full" />
        </div>

        {/* janela 2 - foto */}
        <div
          className="absolute left-[260px] top-[360px] w-[560px] overflow-hidden rounded-md bg-[#f0f0f0] shadow-xl ring-1 ring-black/30"
          style={{ transform: "rotate(2deg)" }}
        >
          <TitleBar nome="running.jpg" />
          <Foto src={fotos[1]} className="h-[420px] w-full" />
        </div>

        {/* janela 3 - nota com métricas */}
        <div
          className="absolute left-[60px] top-[760px] w-[460px] overflow-hidden rounded-md bg-[#f0f0f0] shadow-xl ring-1 ring-black/30"
          style={{ transform: "rotate(-1deg)" }}
        >
          <TitleBar nome="stats.txt" />
          <div className="flex flex-col gap-3 bg-white p-6 font-led text-[26px] text-ink">
            {exibir.map((c) => (
              <span key={c.id}>{c.label}: {valor(c.id)}</span>
            ))}
          </div>
        </div>

        {/* logo */}
        <div className="absolute bottom-0 right-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/logo-wordmark.png" alt="" width={200} />
        </div>
      </div>
    </div>
  );
}
