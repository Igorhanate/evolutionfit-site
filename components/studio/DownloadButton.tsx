"use client";
import { useState } from "react";
import { toPng } from "html-to-image";
import { Download } from "lucide-react";

// Exporta o node do preview (já em 1080x1920) como PNG. Sem backgroundColor =
// fundo transparente. Tudo roda no navegador; nada é enviado.
export default function DownloadButton({
  alvo,
}: {
  alvo: React.RefObject<HTMLDivElement | null>;
}) {
  const [carregando, setCarregando] = useState(false);

  async function baixar() {
    const node = alvo.current;
    if (!node) return;
    setCarregando(true);
    try {
      await document.fonts.ready;
      // 1º passe "aquece" o embed de fontes/imagens; 2º passe gera o final.
      await toPng(node, { pixelRatio: 1, cacheBust: true });
      const dataUrl = await toPng(node, { pixelRatio: 1, cacheBust: true });
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "evolutionfit-card.png";
      a.click();
    } catch (e) {
      console.error(e);
      alert("Não consegui gerar o card agora. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <button
      onClick={baixar}
      disabled={carregando}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-evo px-6 py-4 font-display font-bold text-white shadow-lg shadow-evo/25 transition hover:bg-evo-dark disabled:opacity-60"
    >
      <Download size={20} />
      {carregando ? "Gerando…" : "Baixar PNG"}
    </button>
  );
}
