"use client";
import { forwardRef, useEffect, useRef, useState } from "react";
import { STAGE_W, STAGE_H } from "./types";

// Fundo quadriculado indicando transparência (como em editores de imagem).
const XADREZ =
  "repeating-conic-gradient(#e6e6e2 0% 25%, #f4f4f0 0% 50%) 0 / 36px 36px";

// Renderiza o template em tamanho real (1080x1920) dentro de um wrapper que o
// escala para caber na tela. O node exportado (ref) NÃO recebe transform, então
// o html-to-image o captura cru, em 1080x1920.
const PreviewStage = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  function PreviewStage({ children }, ref) {
    const wrap = useRef<HTMLDivElement>(null);
    const [escala, setEscala] = useState(0.3);

    useEffect(() => {
      const el = wrap.current;
      if (!el) return;
      const medir = () => setEscala(el.clientWidth / STAGE_W);
      medir();
      const ro = new ResizeObserver(medir);
      ro.observe(el);
      return () => ro.disconnect();
    }, []);

    return (
      <div
        ref={wrap}
        className="w-full overflow-hidden rounded-3xl ring-1 ring-ink/10"
        style={{ height: STAGE_H * escala, background: XADREZ }}
      >
        <div style={{ transformOrigin: "top left", transform: `scale(${escala})` }}>
          <div ref={ref} style={{ width: STAGE_W, height: STAGE_H }}>
            {children}
          </div>
        </div>
      </div>
    );
  },
);

export default PreviewStage;
