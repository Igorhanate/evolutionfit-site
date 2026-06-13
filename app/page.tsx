import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import FuroDieta from "@/components/landing/FuroDieta";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-16" />
      <Hero />
      <Features />
      <FuroDieta />
    </main>
  );
}
