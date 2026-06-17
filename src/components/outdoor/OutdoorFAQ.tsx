"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, Phone } from "lucide-react";

const OutdoorFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Czy mycie uszkodzi nawierzchnię boiska/tartanu?",
      a: "Nie. Stosujemy specjalistyczne dysze o szerokim kącie strumienia oraz regulowane ciśnienie dostosowane do specyfikacji producenta nawierzchni. Naszym celem jest wypłukanie brudu z porów, a nie erozja granulatu.",
    },
    {
      q: "Czy czyścicie również place zabaw i piaskownice?",
      a: "Tak. Myjemy urządzenia zabawowe gorącą wodą (dezynfekcja termiczna) bez użycia agresywnej chemii, co jest kluczowe dla bezpieczeństwa dzieci. Czyścimy również bezpieczne nawierzchnie gumowe wokół urządzeń.",
    },
    {
      q: "Jakie media musi zapewnić zamawiający?",
      a: "Standardowo potrzebujemy dostępu do ujęcia wody (hydrant lub kran zewnętrzny) oraz prądu. Jeśli to niemożliwe, możemy przyjechać z własnym zbiornikiem i agregatem (opcja dodatkowo płatna).",
    },
    {
      q: "Czy mycie SoftWash jest bezpieczne dla roślinności?",
      a: "Tak. Przed rozpoczęciem nakładania chemii obficie zraszamy roślinność wodą, co tworzy barierę ochronną, a w razie potrzeby przykrywamy wrażliwe krzewy. Używana chemia jest biodegradowalna.",
    },
  ];

  return (
    <>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-8 text-center">
            Pytania techniczne
          </h2>

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
                  <div className="px-6 pb-6 text-sm leading-relaxed text-zinc-600">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="wycena" className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-6">
            Zamów darmową próbę
          </h2>
          <p className="text-base text-zinc-500 mb-8 max-w-2xl mx-auto">
            Dla powierzchni powyżej 500m² oferujemy bezpłatny pokaz możliwości
            na fragmencie nawierzchni. Zobacz efekt przed złożeniem zamówienia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-zinc-900 px-8 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 transition-colors"
            >
              Zamów wycenę / Demo
            </Link>
            <a
              href="tel:+48123456789"
              className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-white border border-zinc-200 px-8 py-3 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors"
            >
              <Phone className="mr-2" size={18} />
              +48 123 456 789
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OutdoorFAQ;
