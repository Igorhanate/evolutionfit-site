"use client";
import { Dumbbell, Footprints, Flame, Bike, Flower2, Upload } from "lucide-react";
import { MODALIDADES, CAMPOS_POR_MODALIDADE } from "./campos";
import type { CampoId, Metricas, Modalidade } from "./types";

const ICON = { Dumbbell, Footprints, Flame, Bike, Flower2 } as const;

type Props = {
  modalidade: Modalidade;
  setModalidade: (m: Modalidade) => void;
  metricas: Metricas;
  setCampo: (c: CampoId, v: string) => void;
  numFotos: number;
  fotos: string[];
  setFotos: (f: string[]) => void;
};

export default function StudioForm({
  modalidade,
  setModalidade,
  metricas,
  setCampo,
  numFotos,
  fotos,
  setFotos,
}: Props) {
  // Reduz a foto (máx 1280px) e converte para data URL. Mantém o export leve
  // e rápido, e o html-to-image embute direto (sem buscar blob/CORS).
  function reduzir(file: File, max = 1280): Promise<string> {
    return new Promise((resolve) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        const escala = Math.min(1, max / Math.max(img.width, img.height));
        const w = Math.round(img.width * escala);
        const h = Math.round(img.height * escala);
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) return resolve(url);
        ctx.drawImage(img, 0, 0, w, h);
        URL.revokeObjectURL(url);
        resolve(canvas.toDataURL("image/jpeg", 0.9));
      };
      img.onerror = () => resolve(url);
      img.src = url;
    });
  }

  async function onFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []).slice(0, numFotos);
    const urls = await Promise.all(files.map((f) => reduzir(f)));
    setFotos(urls);
  }

  const campos = CAMPOS_POR_MODALIDADE[modalidade];

  return (
    <div className="space-y-6">
      <div>
        <span className="text-sm font-semibold text-ink/60">Modalidade</span>
        <div className="mt-2 grid grid-cols-5 gap-2">
          {MODALIDADES.map((m) => {
            const Icone = ICON[m.icone as keyof typeof ICON];
            const ativo = m.id === modalidade;
            return (
              <button
                key={m.id}
                onClick={() => setModalidade(m.id)}
                title={m.nome}
                className={`flex flex-col items-center gap-1 rounded-xl px-1 py-3 text-[10px] font-medium leading-tight ${
                  ativo
                    ? "bg-evo text-white"
                    : "bg-white text-ink/60 ring-1 ring-ink/10 hover:ring-evo/40"
                }`}
              >
                <Icone size={20} />
                {m.nome}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {campos.map((c) => (
          <label key={c.id} className="text-sm">
            <span className="text-ink/60">{c.label}</span>
            <input
              value={metricas[c.id] ?? ""}
              onChange={(e) => setCampo(c.id, e.target.value)}
              inputMode={c.numeric ? "decimal" : "text"}
              placeholder={c.placeholder}
              className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-2 outline-none focus:border-evo"
            />
          </label>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {(["data", "hora"] as CampoId[]).map((c) => (
          <label key={c} className="text-sm">
            <span className="text-ink/60">{c === "data" ? "Data" : "Hora"}</span>
            <input
              value={metricas[c] ?? ""}
              onChange={(e) => setCampo(c, e.target.value)}
              className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-2 outline-none focus:border-evo"
            />
          </label>
        ))}
      </div>

      {numFotos > 0 && (
        <div>
          <span className="text-sm font-semibold text-ink/60">
            {numFotos === 1 ? "Sua foto" : `Suas fotos (até ${numFotos})`}
          </span>
          <label className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-ink/20 px-4 py-6 text-sm text-ink/60 hover:border-evo/50">
            <Upload size={18} />
            {numFotos > 1 ? "Escolher imagens" : "Escolher imagem"}
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              multiple={numFotos > 1}
              onChange={onFiles}
              className="hidden"
            />
          </label>
          {fotos.length > 0 && (
            <p className="mt-2 text-xs text-ink/50">
              {fotos.length} foto(s) selecionada(s) — fica tudo no seu aparelho.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
