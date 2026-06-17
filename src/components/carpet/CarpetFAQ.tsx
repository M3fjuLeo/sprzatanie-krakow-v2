"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const CarpetFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Jak długo schnie wykładzina/dywan po praniu?",
      a: "Dzięki zastosowaniu nowoczesnych maszyn ekstrakcyjnych odsysamy do 90% wilgoci. Czas całkowitego schnięcia wynosi zazwyczaj od 3 do 6 godzin, w zależności od wentylacji pomieszczenia i rodzaju włókna.",
    },
    {
      q: "Czy używane środki są bezpieczne dla dzieci i zwierząt?",
      a: "Tak. Stosujemy wyłącznie atestowane środki renomowanych marek (np. Karcher), które po wypłukaniu są całkowicie neutralne dla zdrowia i nie powodują alergii.",
    },
    {
      q: "Czy usuwacie stare plamy (np. z kawy, wina)?",
      a: "Usuwamy większość typowych plam. Jednak w przypadku starych przebarwień, które weszły w reakcję chemiczną z włóknem lub były zapierane domowymi sposobami, całkowite usunięcie może być niemożliwe. Technik zawsze ocenia szanse przed rozpoczęciem pracy.",
    },
    {
      q: "Czy muszę jakoś przygotować pomieszczenie?",
      a: "Prosimy o usunięcie drobnych przedmiotów z podłogi. Większe meble (jeśli to możliwe) przesuwamy lub zabezpieczamy. Potrzebujemy jedynie dostępu do ciepłej wody i prądu.",
    },
    {
      q: "Czy dojeżdżacie do pojedynczych mebli?",
      a: "Tak, realizujemy zlecenia u klientów indywidualnych. Minimalna kwota zamówienia z darmowym dojazdem to 200 zł.",
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-zinc-100">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900">
            Najczęstsze pytania
          </h2>
          <p className="mt-4 text-zinc-500">
            Odpowiedzi na to, o co najczęściej pytają nasi klienci.
          </p>
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
    </section>
  );
};

export default CarpetFAQ;
