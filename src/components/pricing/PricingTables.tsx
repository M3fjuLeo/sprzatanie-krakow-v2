"use client";

import { useState } from "react";
import {
  Armchair,
  Layers,
  MapPin,
  Car,
  Building2,
  Plus,
  Minus,
} from "lucide-react";

interface PricingItemProps {
  name: string;
  price: string;
  sub?: string;
  dark?: boolean;
}

const PricingItem = ({ name, price, sub, dark = false }: PricingItemProps) => (
  <li className="flex justify-between items-baseline text-sm group">
    <div className="flex flex-col">
      <span
        className={`${dark ? "text-zinc-300" : "text-zinc-600"} group-hover:${
          dark ? "text-white" : "text-zinc-900"
        } transition-colors`}
      >
        {name}
      </span>
      {sub && <span className="text-[10px] text-zinc-400">{sub}</span>}
    </div>
    <span
      className={`font-medium ${
        dark ? "text-white" : "text-zinc-900"
      } tabular-nums whitespace-nowrap`}
    >
      {price}
    </span>
  </li>
);

const PricingTables = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Czy pracujecie w godzinach nocnych i w weekendy?",
      a: "Tak. Dla klientów biznesowych jesteśmy dyspozycyjni 24/7. Realizujemy zlecenia w czasie, który nie zakłóca funkcjonowania Twojej firmy.",
    },
    {
      q: "Jak przygotować powierzchnię do przyjazdu?",
      a: "Prosimy o usunięcie drobnych przedmiotów z czyszczonych powierzchni. Potrzebujemy dostępu do prądu i wody.",
    },
    {
      q: "Jak długo schnie tapicerka po praniu?",
      a: "Czas całkowitego schnięcia wynosi zazwyczaj od 3 do 6 godzin, w zależności od wentylacji pomieszczenia.",
    },
    {
      q: "Czy usuwacie wszystkie trudne plamy?",
      a: "Usuwamy większość plam. Niektóre stare przebarwienia mogą być jednak trwałe. Technik zawsze ocenia sytuację przed pracą.",
    },
  ];

  return (
    <section className="pt-4 pb-8 md:pt-8 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-6">
            Cennik usług
          </h2>
          <div className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-3 text-sm font-medium text-white shadow-sm">
            <MapPin size={18} className="text-zinc-400" />
            Minimalna wartość zamówienia (Kraków, Wieliczka, Niepołomice,
            Skawina):{" "}
            <span className="text-green-400 font-bold ml-1">220 zł</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-zinc-100">
              <div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
                <Armchair size={20} />
              </div>
              <div>
                <h3 className="font-medium text-zinc-900">Tapicerka Meblowa</h3>
                <p className="text-xs text-zinc-500">Pranie materiałowe</p>
              </div>
            </div>
            <ul className="space-y-4">
              <PricingItem name="Duży narożnik (7-8 os.)" price="370 zł" />
              <PricingItem name="Narożnik (4-6 os.)" price="320 zł" />
              <PricingItem name="Narożnik (4 os.)" price="270 zł" />
              <PricingItem name="Sofa (2-3 os.)" price="220 zł" />
              <PricingItem name="Wersalka" price="180 zł" />
              <PricingItem name="Tapczan" price="150 zł" />
              <PricingItem name="Fotel" price="80 zł / szt" />
              <PricingItem name="Pufa" price="40 zł / szt" />
              <PricingItem name="Poduchy z narożnika" price="17 zł / szt" />
            </ul>
          </div>

          <div className="bg-zinc-900 text-white rounded-2xl border border-zinc-800 p-6 shadow-xl relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-white">
              <Layers size={80} strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-zinc-800">
                <div className="h-10 w-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white">
                  <Layers size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-white">
                    Wykładziny i Dywany
                  </h3>
                  <p className="text-xs text-zinc-400">Czyszczenie dogłębne</p>
                </div>
              </div>
              <ul className="space-y-4">
                <PricingItem
                  dark
                  name="Wykładzina (do 15 m²)"
                  price="22 zł/m²"
                />
                <PricingItem
                  dark
                  name="Wykładzina (do 50 m²)"
                  price="19 zł/m²"
                />
                <PricingItem
                  dark
                  name="Wykładzina (do 100 m²)"
                  price="17 zł/m²"
                />
                <PricingItem
                  dark
                  name="Wykładzina (do 250 m²)"
                  price="14 zł/m²"
                />
                <PricingItem
                  dark
                  name="Wykładzina (do 500 m²)"
                  price="11 zł/m²"
                />
                <div className="pt-2 border-t border-zinc-800"></div>
                <PricingItem dark name="Dywany wełniane" price="22 zł/m²" />
                <PricingItem dark name="Dywany typu Shaggy" price="30 zł/m²" />
                <PricingItem dark name="Impregnacja dywanowa" price="8 zł/m²" />
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-zinc-100">
              <div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
                <Car size={20} />
              </div>
              <div>
                <h3 className="font-medium text-zinc-900">
                  Powierzchnie Zewnętrzne
                </h3>
                <p className="text-xs text-zinc-500">Kostka brukowa, Tartan</p>
              </div>
            </div>
            <ul className="space-y-4">
              <PricingItem name="Czyszczenie (do 50 m²)" price="22 zł/m²" />
              <PricingItem name="Czyszczenie (do 150 m²)" price="20 zł/m²" />
              <PricingItem name="Czyszczenie (do 500 m²)" price="16 zł/m²" />
              <PricingItem
                name="Czyszczenie (powyżej 500 m²)"
                price="14 zł/m²"
              />
            </ul>
            <div className="mt-8 pt-6 border-t border-zinc-100">
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                <span className="font-semibold text-red-600">Uwaga:</span>{" "}
                Minimalny koszt zamówienia na mycie kostki brukowej, boisk lub
                placów zabaw z Tartanu wynosi{" "}
                <strong className="text-zinc-900">440 zł</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-zinc-900 flex items-center justify-center text-white">
              <Building2 size={20} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-zinc-900">
                Sprzątanie Biur i Lokali (Ceny Netto)
              </h3>
              <p className="text-sm text-zinc-500">
                Podłogi, meble, sprzęt, lampy itp.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm">
            <table className="w-full text-left text-sm text-zinc-600">
              <thead className="bg-zinc-50 text-xs uppercase text-zinc-900 border-b border-zinc-200">
                <tr>
                  <th scope="col" className="px-6 py-4 font-medium">
                    Metraż
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium">
                    Sprzątanie jednorazowe biura
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium">
                    Cena za m²
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium">
                    Sprzątanie po remoncie
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 bg-white">
                <tr className="hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-zinc-900">
                    Do 50 m²
                  </td>
                  <td className="px-6 py-4">500,00 zł</td>
                  <td className="px-6 py-4">10,00 zł/m²</td>
                  <td className="px-6 py-4 font-medium">900,00 zł</td>
                </tr>
                <tr className="hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-zinc-900">
                    Do 100 m²
                  </td>
                  <td className="px-6 py-4">800,00 zł</td>
                  <td className="px-6 py-4">8,00 zł/m²</td>
                  <td className="px-6 py-4 font-medium">1300,00 zł</td>
                </tr>
                <tr className="hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-zinc-900">
                    Do 250 m²
                  </td>
                  <td className="px-6 py-4">1500,00 zł</td>
                  <td className="px-6 py-4">6,00 zł/m²</td>
                  <td className="px-6 py-4 font-medium">2600,00 zł</td>
                </tr>
                <tr className="hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-zinc-900">
                    Do 500 m²
                  </td>
                  <td className="px-6 py-4">2000,00 zł</td>
                  <td className="px-6 py-4">4,00 zł/m²</td>
                  <td className="px-6 py-4 font-medium">3500,00 zł</td>
                </tr>
                <tr className="hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-zinc-900">
                    Do 750 m²
                  </td>
                  <td className="px-6 py-4">2250,00 zł</td>
                  <td className="px-6 py-4">3,00 zł/m²</td>
                  <td className="px-6 py-4 font-medium">3800,00 zł</td>
                </tr>
                <tr className="hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-zinc-900">
                    Do 1000 m²
                  </td>
                  <td className="px-6 py-4">2500,00 zł</td>
                  <td className="px-6 py-4">2,50 zł/m²</td>
                  <td className="px-6 py-4 font-medium">4200,00 zł</td>
                </tr>
                <tr className="bg-zinc-50">
                  <td className="px-6 py-4 font-medium text-zinc-900">
                    Od 1000 m² wzwyż
                  </td>
                  <td colSpan={3} className="px-6 py-4 text-zinc-900">
                    Każdy kolejny m² dolicza się <strong>1,50 zł/m²</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium tracking-tight text-zinc-900">
              Najczęstsze pytania
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? "bg-zinc-50 border-zinc-200"
                    : "bg-white border-zinc-100 hover:border-zinc-200"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-base font-medium text-zinc-900">
                    {item.q}
                  </span>
                  <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shrink-0">
                    {openIndex === index ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-sm leading-relaxed text-zinc-500">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTables;
