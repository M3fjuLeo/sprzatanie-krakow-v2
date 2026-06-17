import { Metadata } from "next";

import { getBusinessSchema } from "@/utils/schemas";
import Hero from "../components/home/Hero";
import ForWhom from "../components/home/ForWhom";
import HomeOffer from "../components/home/HomeOffer";
import WhyUs from "../components/home/WhyUs";
import Trusted from "../components/home/Trusted";
import CallToAction from "../components/home/CallToAction";

export const metadata: Metadata = {
  title: "Sprzątanie Biur, Szkół i Pranie Dywanów Kraków | Firma Błysk ✨",
  description:
    "Specjalistyczna firma sprzątająca Błysk. Obsługa firm, szkół i obiektów sportowych (tartan, poliuretan). Profesjonalne pranie tapicerki i dywanów. Sprawdź ofertę!",
  keywords:
    "sprzątanie biur kraków, sprzątanie szkół, czyszczenie poliuretanu, pranie dywanów kraków, pranie tapicerki, czyszczenie wykładzin biurowych, firma sprzątająca b2b",
  alternates: {
    canonical: "https://sprzataniekrakow.pl/",
  },
  openGraph: {
    title: "Specjalistyczne Sprzątanie Obiektów i Pranie | Firma Błysk",
    description:
      "Kompleksowa obsługa biur, szkół i obiektów sportowych. Pranie tapicerki dla domu. Zaufali nam Zamek Królewski na Wawelu i Tauron Arena.",
    images: [{ url: "https://sprzataniekrakow.pl/og-image.jpg" }],
    url: "https://sprzataniekrakow.pl/",
    type: "website",
  },
};

export default function Home() {
  const schema = getBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <ForWhom />
      <HomeOffer />
      <WhyUs />
      <Trusted />
      <CallToAction />
    </>
  );
}
