import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { CARDS_TOPO } from "@/config/content";

export default function CardsTopo() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <div className="grid grid-cols-3 gap-3 md:gap-6">
        {CARDS_TOPO.map((img, i) => (
          <Reveal key={img} delay={i * 0.08}>
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/10">
              <Image
                src={`/canva/${img}`}
                alt=""
                width={1336}
                height={1255}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
