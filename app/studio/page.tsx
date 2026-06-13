import Navbar from "@/components/landing/Navbar";
import StudioApp from "@/components/studio/StudioApp";

export const metadata = {
  title: "Studio de Métricas — Evolution Fit AI",
  description:
    "Gere cards dos seus treinos para compartilhar nos stories. Grátis, direto no navegador.",
};

export default function StudioPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16" />
      <section className="mx-auto max-w-6xl px-4 pt-10 text-center">
        <h1 className="font-display text-4xl font-extrabold md:text-5xl">
          Studio de Métricas
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/70">
          Monte o card do seu treino e baixe em PNG para colar nos stories. É
          grátis e roda no seu navegador — nenhuma foto é enviada.
        </p>
      </section>
      <StudioApp />
    </main>
  );
}
