import { Building2, Map, Route } from "lucide-react";

interface AreaCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  isDashed?: boolean;
}

const AreaCard = ({ icon, title, desc, isDashed }: AreaCardProps) => (
  <div
    className={`rounded-xl border p-6 transition-colors ${
      isDashed
        ? "border-dashed border-zinc-200 bg-white hover:border-zinc-300"
        : "border-zinc-100 bg-zinc-50 hover:border-zinc-200"
    }`}
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="text-zinc-400">{icon}</div>
      <h3 className="font-medium text-zinc-900">{title}</h3>
    </div>
    <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
  </div>
);

const ContactArea = () => {
  return (
    <section className="py-16 border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-8">
          Obszar działania
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AreaCard
            icon={<Building2 size={20} />}
            title="Kraków"
            desc="Obsługujemy wszystkie dzielnice Krakowa bez dodatkowych opłat za dojazd."
          />
          <AreaCard
            icon={<Map size={20} />}
            title="Okolice do 20km"
            desc="Wieliczka, Skawina, Zielonki, Zabierzów, Niepołomice i pobliskie miejscowości."
          />
          <AreaCard
            icon={<Route size={20} />}
            title="Dalsze trasy"
            desc="Realizacje powyżej 20km od granic miasta wyceniamy indywidualnie."
            isDashed
          />
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
