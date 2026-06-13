"use client";
import { useEffect, useRef, useState } from "react";
import PreviewStage from "./PreviewStage";
import StudioForm from "./StudioForm";
import DownloadButton from "./DownloadButton";
import { TEMPLATES, TEMPLATE_PADRAO, getTemplate } from "./templates/registry";
import { EXEMPLOS } from "./campos";
import type { CampoId, Metricas, Modalidade } from "./types";

function agora(): { data: string; hora: string } {
  const d = new Date();
  const meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
  return {
    data: `${d.getDate()} ${meses[d.getMonth()]} ${d.getFullYear()}`,
    hora: `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`,
  };
}

export default function StudioApp() {
  const [modalidade, setModalidade] = useState<Modalidade>("musculacao");
  const [metricas, setMetricas] = useState<Metricas>({});
  const [templateId, setTemplateId] = useState<string>(TEMPLATE_PADRAO);
  const [fotos, setFotos] = useState<string[]>([]);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { data, hora } = agora();
    setMetricas((m) => ({ data, hora, ...m }));
  }, []);

  const valor = (c: CampoId) =>
    metricas[c]?.trim() ? metricas[c]!.trim() : EXEMPLOS[c];
  const temValor = (c: CampoId) => !!metricas[c]?.trim();
  const setCampo = (c: CampoId, v: string) =>
    setMetricas((m) => ({ ...m, [c]: v }));

  const def = getTemplate(templateId);
  const Tpl = def.Component;

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[380px_1fr]">
      <StudioForm
        modalidade={modalidade}
        setModalidade={setModalidade}
        metricas={metricas}
        setCampo={setCampo}
        numFotos={def.fotos}
        fotos={fotos}
        setFotos={setFotos}
      />

      <div className="flex flex-col gap-5">
        <div className="mx-auto w-full max-w-[360px]">
          <PreviewStage ref={stageRef}>
            <Tpl
              modalidade={modalidade}
              metricas={metricas}
              fotos={fotos}
              valor={valor}
              temValor={temValor}
            />
          </PreviewStage>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {TEMPLATES.map((t) => (
            <button
              key={t.id}
              onClick={() => setTemplateId(t.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                t.id === templateId
                  ? "bg-evo text-white"
                  : "bg-white text-ink/70 ring-1 ring-ink/10 hover:ring-evo/40"
              }`}
            >
              {t.nome}
            </button>
          ))}
        </div>

        <div className="mx-auto w-full max-w-[360px]">
          <DownloadButton alvo={stageRef} />
        </div>
      </div>
    </div>
  );
}
