import { Metadata } from "next";
import { getServiceSchema } from "@/utils/schemas";

import CarpetHero from "@/components/carpet/CarpetHero";
import CarpetProcess from "@/components/carpet/CarpetProcess";
import CarpetCaseStudy from "@/components/carpet/CarpetCaseStudy";
import CarpetOffer from "@/components/carpet/CarpetOffer";
import CarpetFAQ from "@/components/carpet/CarpetFAQ";
import CarpetBenefits from "@/components/carpet/CarpetBenefits";

export const metadata: Metadata = {
  title: "Pranie Dywanów i Tapicerki Kraków | Błysk (Tauron Arena Partner)",
  description:
    "Profesjonalne pranie ekstrakcyjne wykładzin biurowych i dywanów. Bezpieczna chemia, krótki czas schnięcia (3-6h). Obsługa firm i klientów indywidualnych.",
  alternates: {
    canonical: "https://sprzataniekrakow.pl/pranie-dywanow",
  },
};

export default function CarpetCleaning() {
  const schema = getServiceSchema(
    "Pranie Dywanów i Tapicerki",
    "Specjalistyczne pranie ekstrakcyjne dywanów, wykładzin biurowych i tapicerki meblowej w Krakowie. Partner Tauron Arena.",
    "/pranie-dywanow"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        <CarpetHero />
        <div id="proces">
          <CarpetProcess />
        </div>
        <CarpetBenefits />
        <CarpetCaseStudy />
        <CarpetOffer />
        <CarpetFAQ />
      </main>
    </>
  );
}
