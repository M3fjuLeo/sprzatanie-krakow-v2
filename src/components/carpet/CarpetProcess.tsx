import { Sparkles, Waves, ShieldCheck, Wind } from "lucide-react";

const CarpetProcess = () => {
  const steps = [
    {
      id: 1,
      title: "1. Dogłębne odkurzanie",
      desc: "Dogłębnie usuwamy piasek, kurz oraz uporczywe zabrudzenia, jak gumy czy kredki. Chronimy strukturę włókien i przywracamy estetykę wykładziny.",
      icon: <Wind size={24} />,
    },
    {
      id: 2,
      title: "2. Pranie ekstrakcyjne",
      desc: "Natryskujemy środek czyszczący i odsysamy brud. Usuwamy roztocza.",
      icon: <Waves size={24} />,
    },
    {
      id: 3,
      title: "3. Płukanie wykładziny",
      desc: "Neutralizujemy pH i usuwamy resztki detergentu. Dywan nie łapie brudu tak szybko.",
      icon: <Sparkles size={24} />,
    },
    {
      id: 4,
      title: "4. Impregnacja",
      desc: "Nakładamy warstwę ochronną, która utrudnia wnikanie nowych plam.",
      icon: <ShieldCheck size={24} />,
    },
  ];

  return (
    <section className="py-24 bg-zinc-50/50 border-y border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900">
            Proces 4-fazowy
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl">
            Skuteczność potwierdzona na tysiącach metrów kwadratowych. Nie
            pomijamy żadnego kroku, co gwarantuje trwałość efektu.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          <div
            className="absolute top-8 left-0 w-full border-t border-dashed border-zinc-200 hidden lg:block"
            style={{ zIndex: 0 }}
          ></div>

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-start lg:items-center lg:text-center group"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-zinc-200 shadow-sm text-zinc-900 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg font-medium text-zinc-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarpetProcess;
