import Link from "next/link";
import Navbar from "@/components/landing/Navbar";

export const metadata = { title: "Studio de Métricas — Evolution Fit AI" };

export default function StudioPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 pt-16 text-center">
        <h1 className="font-display text-4xl font-extrabold">
          Studio de Métricas
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Gere cards dos seus treinos para compartilhar nos stories. Em breve.
        </p>
        <Link href="/" className="mt-8 font-bold text-evo hover:underline">
          ← Voltar ao início
        </Link>
      </section>
    </main>
  );
}
