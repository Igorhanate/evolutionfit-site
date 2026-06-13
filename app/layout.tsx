import type { Metadata } from "next";
import {
  Inter,
  Poppins,
  Permanent_Marker,
  Share_Tech_Mono,
  Playfair_Display,
  Special_Elite,
} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Fontes especiais usadas pelos templates do Studio.
const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marker",
});
const led = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-led",
});
const serifEl = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif-el",
});
const typewriter = Special_Elite({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-typewriter",
});

// Trocar para o domínio final após o deploy (Vercel ou domínio próprio).
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://evolutionfit-site.vercel.app";

const titulo = "Evolution Fit AI — A primeira IA de gestão fitness";
const descricao =
  "Treinos personalizados, análise de refeições por foto e acompanhamento de evolução. Tudo direto no WhatsApp, 24h por dia. Sem baixar app.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: titulo,
  description: descricao,
  icons: {
    icon: "/icon-512.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Evolution Fit AI",
    title: titulo,
    description: descricao,
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Evolution Fit AI" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descricao,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${inter.variable} ${marker.variable} ${led.variable} ${serifEl.variable} ${typewriter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
