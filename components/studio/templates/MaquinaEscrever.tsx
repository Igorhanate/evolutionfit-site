import type { TemplateProps } from "../types";

// Sticker "Máquina de escrever": frase estilo nota datilografada, com os
// valores numéricos destacados em marca-texto amarelo. Fundo transparente.

const mark = (t: string) => (
  <span className="rounded-[2px] bg-[#ffe25a] px-1 box-decoration-clone">{t}</span>
);

export default function MaquinaEscrever({ modalidade, valor }: TemplateProps) {
  let frase: React.ReactNode;

  if (modalidade === "corrida" || modalidade === "ciclismo") {
    frase = (
      <>
        Percorri {mark(valor("distancia"))} em {mark(valor("tempo"))}, ritmo{" "}
        {mark(valor("ritmo"))}.
      </>
    );
  } else if (modalidade === "musculacao") {
    frase = (
      <>
        Treino {mark(valor("nomeTreino"))}: {mark(valor("kgLevantados"))} levantados em{" "}
        {mark(valor("tempo"))}.
      </>
    );
  } else if (modalidade === "crossfit") {
    frase = (
      <>
        WOD {mark(valor("nomeWod"))} fechado em {mark(valor("tempo"))}.
      </>
    );
  } else {
    frase = (
      <>
        {mark(valor("tempo"))} de prática, {mark(valor("calorias"))} calorias.
      </>
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-12 px-16 text-center">
      <div
        className="font-typewriter max-w-[820px] text-[52px] leading-relaxed text-ink"
        style={{ textShadow: "0 2px 16px rgba(255,255,255,0.5)" }}
      >
        {frase}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logos/logo-wordmark.png" alt="" width={220} className="mt-6" />
    </div>
  );
}
