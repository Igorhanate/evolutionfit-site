import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import FuroDieta from "@/components/landing/FuroDieta";
import Evolucao from "@/components/landing/Evolucao";
import Depoimentos from "@/components/landing/Depoimentos";
import Planos from "@/components/landing/Planos";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-16" />
      <Hero />
      <Features />
      <FuroDieta />
      <Evolucao />
      <Depoimentos />
      <Planos />
      <Footer />
    </main>
  );
}
