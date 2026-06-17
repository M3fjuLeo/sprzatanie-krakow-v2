import { Metadata } from "next";
import { getServiceSchema } from "@/utils/schemas";

import OutdoorHero from "@/components/outdoor/OutdoorHero";
import OutdoorPillars from "@/components/outdoor/OutdoorPillars";
import OutdoorTech from "@/components/outdoor/OutdoorTech";
import OutdoorProcess from "@/components/outdoor/OutdoorProcess";
import OutdoorFAQ from "@/components/outdoor/OutdoorFAQ";

export const metadata: Metadata = {
  title: "Czyszczenie Kostki, Boisk i Elewacji Kraków | Błysk",
  description:
    "Specjalistyczne mycie ciśnieniowe i gorącowodne. Parkingi, boiska poliuretanowe (Orliki), elewacje. Usuwamy mchy, glony i plamy olejowe. Sprawdź ofertę B2B.",
  alternates: {
    canonical: "https://sprzataniekrakow.pl/powierzchnie",
  },
};

export default function Outdoor() {
  const schema = getServiceSchema(
    "Czyszczenie Kostki Brukowej, Boisk i Elewacji",
    "Specjalistyczne mycie gorącowodne kostki brukowej, czyszczenie elewacji metodą SoftWash oraz mycie boisk poliuretanowych (Orliki). Usługi dla firm i instytucji.",
    "/powierzchnie"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="bg-white">
        <OutdoorHero />
        <OutdoorPillars />
        <OutdoorTech />
        <OutdoorProcess />
        <OutdoorFAQ />
      </main>
    </>
  );
}
