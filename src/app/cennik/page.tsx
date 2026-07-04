import { Metadata } from "next";
import PricingTables from "@/components/pricing/PricingTables";

export const metadata: Metadata = {
  title: "Cennik Usług | Błysk - Pranie Ekstrakcyjne i Obsługa Obiektów",
  description:
    "Sprawdź ceny prania wykładzin biurowych, tapicerki meblowej oraz czyszczenia kostki brukowej i nawierzchni sportowych. Transparentny cennik usług B2B.",
  alternates: {
    canonical: "https://sprzataniekrakow.pl/cennik",
  },
};

export default function Pricing() {
  return (
    <main className="pt-10 bg-white">
      <PricingTables />

      <section
        id="wycena"
        className="py-16 bg-zinc-50 border-t border-zinc-100"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-xl font-medium text-zinc-900 mb-4">
            Nietypowe zlecenie?
          </h2>
          <p className="text-sm text-zinc-500 mb-8 max-w-2xl mx-auto">
            Realizujemy również czyszczenie tapicerki samochodowej (floty),
            mycie przeszkleń na wysokości oraz stałą obsługę higieniczną
            obiektów.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:wycena@blysk.pl"
              className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 transition-colors"
            >
              Zapytaj o wycenę
            </a>
            <a
              href="tel:+48664917532"
              className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-white border border-zinc-200 px-6 py-2.5 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors"
            >
              Zadzwoń: 664 917 532
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
