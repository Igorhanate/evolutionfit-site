import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import CardsTopo from "@/components/landing/CardsTopo";
import PlanoVip from "@/components/landing/PlanoVip";
import Depoimentos from "@/components/landing/Depoimentos";
import FuroDieta from "@/components/landing/FuroDieta";
import FeaturesCards from "@/components/landing/FeaturesCards";
import Evolucao from "@/components/landing/Evolucao";
import AvaliacoesClientes from "@/components/landing/AvaliacoesClientes";
import NosVemosLa from "@/components/landing/NosVemosLa";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-16" />
      <Hero />
      <CardsTopo />
      <PlanoVip />
      <Depoimentos />
      <FuroDieta />
      <FeaturesCards />
      <Evolucao />
      <AvaliacoesClientes />
      <NosVemosLa />
      <Footer />
    </main>
  );
}
