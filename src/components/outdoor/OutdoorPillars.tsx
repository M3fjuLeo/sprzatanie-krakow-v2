import { Car, Trophy, Utensils, AlertCircle, CheckCircle2 } from "lucide-react";

const OutdoorPillars = () => {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-medium tracking-tight text-zinc-900">
            Obszary specjalizacji
          </h2>
          <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest hidden sm:block">
            Technologia 2026
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm flex flex-col h-full group hover:border-zinc-300 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Car size={24} />
            </div>
            <h3 className="text-lg font-medium text-zinc-900 mb-2">
              Parkingi i Kostka Brukowa
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge text="Biurowce" />
              <Badge text="Logistyka" />
            </div>
            <ProblemSolution
              problem="Plamy olejowe, ślady opon, gumy do żucia, mech i chwasty w spoinach."
              solution="Mycie pod ciśnieniem + chemia zasadowa. Skuteczne emulgowanie smarów."
            />
          </div>

          <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm flex flex-col h-full group hover:border-zinc-300 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
            <div className="h-12 w-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <Trophy size={24} />
            </div>
            <h3 className="text-lg font-medium text-zinc-900 mb-2">
              Obiekty Sportowe i Place Zabaw
            </h3>
            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
              <Badge text="Orliki" />
              <Badge text="Szkoły" />
              <Badge text="MOSiR" />
            </div>
            <ProblemSolution
              problem="Śliska nawierzchnia (ryzyko wypadku), glony w mikroporach tartanu, brak drenażu."
              solution="Specjalistyczne mycie bez uszkadzania granulatu. Udrożnienie porów nawierzchni."
            />
          </div>

          <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm flex flex-col h-full group hover:border-zinc-300 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Utensils size={24} />
            </div>
            <h3 className="text-lg font-medium text-zinc-900 mb-2">
              Ogródki Restauracyjne i Tarasy
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge text="Gastronomia" />
              <Badge text="Hotele" />
            </div>
            <ProblemSolution
              problem="Uporczywe zabrudzenia organiczne, tłuszcze, rozlane napoje oraz wdeptane gumy."
              solution="Mycie i odtłuszczanie nawierzchni. Usuwanie gum i trudnych plam. Szybki efekt świeżości."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Badge = ({ text }: { text: string }) => (
  <span className="inline-flex items-center rounded-md bg-zinc-50 px-2 py-1 text-[10px] font-medium text-zinc-500 ring-1 ring-inset ring-zinc-500/10">
    {text}
  </span>
);

const ProblemSolution = ({
  problem,
  solution,
}: {
  problem: string;
  solution: string;
}) => (
  <div className="space-y-4 grow relative z-10">
    <div className="bg-red-50/50 rounded-lg p-3 border border-red-100">
      <p className="text-xs font-medium text-red-800 mb-1 flex items-center gap-1">
        <AlertCircle size={12} /> Problem
      </p>
      <p className="text-sm text-zinc-600">{problem}</p>
    </div>
    <div className="bg-green-50/50 rounded-lg p-3 border border-green-100">
      <p className="text-xs font-medium text-green-800 mb-1 flex items-center gap-1">
        <CheckCircle2 size={12} /> Rozwiązanie
      </p>
      <p className="text-sm text-zinc-600">{solution}</p>
    </div>
  </div>
);

export default OutdoorPillars;
