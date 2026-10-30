import { Metadata } from "next";
import { getServiceSchema } from "@/utils/schemas";

import OfficeHero from "@/components/office/OfficeHero";
import OfficeSectors from "@/components/office/OfficeSectors";
import OfficeSpecialist from "@/components/office/OfficeSpecialist";
import OfficeProcess from "@/components/office/OfficeProcess";
import OfficeHotels from "@/components/office/OfficeHotels";
import OfficeQuote from "@/components/office/OfficeQuote";

export const metadata: Metadata = {
  title: "Sprzątanie Biur, Hoteli i Obiektów Kraków | Błysk",
  description:
    "Specjalistyczne usługi dla firm, hoteli i instytucji. Sprzątanie biur, szkół, siłowni, basenów. Pranie wykładzin obiektowych. Czyszczenie boisk poliuretanowych i kostki brukowej. Stałe umowy.",
  alternates: {
    canonical: "https://sprzataniekrakow.pl/biura",
  },
};

export default function OfficeServices() {
  const schema = getServiceSchema(
    "Sprzątanie Biur i Obiektów Sportowych",
    "Kompleksowa obsługa sprzątająca dla szkół, biur i obiektów sportowych. Czyszczenie poliuretanu, tartanów i kostki brukowej.",
    "/biura"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        <OfficeHero />
        <OfficeSectors />
        <OfficeHotels />
        <OfficeSpecialist />
        <OfficeProcess />
        <OfficeQuote />
      </main>
    </>
  );
}
