"use client";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import { EVOLUCAO } from "@/config/content";

// Curvas (viewBox 0 0 600 300, y invertido). Com Evolution sobe forte; sem
// Evolution sobe e estabiliza.
const COM = "M 60 270 C 180 250, 250 150, 340 100 S 520 35, 560 25";
const SEM = "M 60 270 C 190 255, 300 200, 400 185 S 520 175, 560 180";

export default function Evolucao() {
  const reduzir = useReducedMotion();
  const traco = reduzir
    ? {}
    : {
        initial: { pathLength: 0 },
        whileInView: { pathLength: 1 },
        viewport: { once: true, margin: "-20%" },
      };

  return (
    <section id="evolucao" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <Reveal>
          <div>
            <h2 className="font-serif-el text-5xl font-bold text-ink md:text-6xl">
              Acompanhe sua evolução
            </h2>
            <span className="mt-5 inline-block rounded-full bg-evo px-5 py-2 font-display text-sm font-bold uppercase tracking-wide text-white">
              {EVOLUCAO.destaque}
            </span>
            <p className="mt-6 max-w-md text-lg text-ink/70">{EVOLUCAO.texto}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-ink p-5 shadow-xl md:p-7">
            <div className="mb-4 flex justify-center gap-6 text-xs font-semibold text-white sm:text-sm">
              <span className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-white" />
                Sem EVOLUTION
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-evo" />
                Com EVOLUTION
              </span>
            </div>
            <svg viewBox="0 0 600 300" className="w-full" role="img" aria-label="Com Evolution você evolui 47% mais em 4 semanas">
              {[40, 100, 160, 220, 280].map((y) => (
                <line key={y} x1="60" y1={y} x2="570" y2={y} stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" />
              ))}
              <motion.path
                d={SEM}
                fill="none"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
                {...traco}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
              <motion.path
                d={COM}
                fill="none"
                stroke="#1f9a49"
                strokeWidth="5"
                strokeLinecap="round"
                {...traco}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
              />
            </svg>
            <div className="mt-2 flex justify-between px-2 text-[10px] font-semibold uppercase tracking-wide text-white/70 sm:text-xs">
              {EVOLUCAO.semanas.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
