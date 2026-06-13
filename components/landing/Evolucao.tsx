"use client";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import { EVOLUCAO } from "@/config/content";

// Curvas do gráfico (viewBox 0 0 600 300, y invertido: menor = mais alto)
const COM_EVOLUTION = "M 40 260 C 160 240, 240 170, 340 120 S 520 50, 560 40";
const SEM_EVOLUTION = "M 40 260 C 180 250, 300 235, 420 225 S 530 215, 560 212";

export default function Evolucao() {
  const reduzirMovimento = useReducedMotion();
  // Sem movimento: linhas já desenhadas (pathLength padrão = cheio) e ponto visível.
  const traco = reduzirMovimento
    ? {}
    : {
        initial: { pathLength: 0 },
        whileInView: { pathLength: 1 },
        viewport: { once: true, margin: "-20%" },
      };
  const ponto = reduzirMovimento
    ? {}
    : {
        initial: { opacity: 0, scale: 0 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, margin: "-20%" },
        transition: { delay: 2.0, duration: 0.3 },
      };
  return (
    <section id="evolucao" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-extrabold md:text-4xl">
          {EVOLUCAO.titulo}
        </h2>
        <p className="mt-3 text-center text-lg">
          <span className="font-display font-extrabold text-evo">
            {EVOLUCAO.destaque}
          </span>{" "}
          <span className="text-ink/60">para quem acompanha tudo com o Evo</span>
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5 md:p-10">
          <svg viewBox="0 0 600 300" className="w-full" role="img" aria-label="Gráfico: com Evolution você evolui 47% mais em 4 semanas">
            {[60, 120, 180, 240].map((y) => (
              <line key={y} x1="40" y1={y} x2="560" y2={y} stroke="#171f1a" strokeOpacity="0.06" strokeWidth="1" />
            ))}
            <motion.path
              d={SEM_EVOLUTION}
              fill="none"
              stroke="#9aa39d"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="8 8"
              {...traco}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
            <motion.path
              d={COM_EVOLUTION}
              fill="none"
              stroke="#1b7a3d"
              strokeWidth="5"
              strokeLinecap="round"
              {...traco}
              transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.circle cx="560" cy="40" r="7" fill="#1b7a3d" {...ponto} />
          </svg>
          <div className="mt-2 flex justify-between px-2 text-xs text-ink/50 md:text-sm">
            {EVOLUCAO.semanas.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <span className="inline-block h-1 w-6 rounded bg-evo" /> Com Evolution
            </span>
            <span className="flex items-center gap-2 text-ink/60">
              <span className="inline-block h-1 w-6 rounded bg-[#9aa39d]" /> Sem Evolution
            </span>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mx-auto mt-8 max-w-xl text-center text-ink/70">
          {EVOLUCAO.texto}
        </p>
      </Reveal>
    </section>
  );
}
