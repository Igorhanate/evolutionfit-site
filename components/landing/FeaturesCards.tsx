import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { FEATURES_CARDS } from "@/config/content";

export default function FeaturesCards() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
        {FEATURES_CARDS.map((f, i) => (
          <Reveal key={f.img} delay={(i % 3) * 0.08}>
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/10">
              <div className="aspect-square">
                <Image
                  src={`/canva/${f.img}`}
                  alt={f.label}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-3 bg-ink px-5 py-4">
                <span className="font-anton text-lg uppercase leading-tight text-white">
                  {f.label}
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 text-white">
                  <ArrowRight size={18} />
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
