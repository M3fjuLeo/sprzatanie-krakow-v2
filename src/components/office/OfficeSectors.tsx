import { Briefcase, GraduationCap, Dumbbell, Building } from "lucide-react";

interface SectorCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const SectorCard = ({ icon, title, desc }: SectorCardProps) => (
  <div className="group relative rounded-2xl bg-zinc-50 p-6 transition-all hover:bg-white hover:shadow-lg hover:shadow-zinc-200/50 hover:ring-1 hover:ring-zinc-200">
    <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-zinc-100 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-lg font-medium text-zinc-900 mb-2">{title}</h3>
    <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
  </div>
);

const OfficeSectors = () => {
  return (
    <section id="sektory" className="py-24 bg-white border-y border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900">
            Sektory obsługi
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl">
            Każdy typ obiektu wymaga innej strategii utrzymania czystości. Nasze
            procesy są dostosowane do specyfiki Twojej branży.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <SectorCard
            icon={<Briefcase size={20} />}
            title="Biura i Coworkingi"
            desc="Utrzymanie czystości open space, sal konferencyjnych i stref relaksu. Serwis dzienny i wieczorny."
          />
          <SectorCard
            icon={<GraduationCap size={20} />}
            title="Edukacja"
            desc="Szkoły, przedszkola i uczelnie. Bezpieczne środki czystości, dezynfekcja i dbałość o higienę sanitariatów."
          />
          <SectorCard
            icon={<Dumbbell size={20} />}
            title="Sport i Rekreacja"
            desc="Siłownie, hale sportowe i baseny. Specjalistyczne maszynowe mycie nawierzchni sportowych."
          />
          <SectorCard
            icon={<Building size={20} />}
            title="Wspólnoty Mieszkaniowe"
            desc="Regularne sprzątanie klatek schodowych, garaży podziemnych i terenów wokół osiedla."
          />
        </div>
      </div>
    </section>
  );
};

export default OfficeSectors;
