import {
  ClipboardList,
  CalendarDays,
  ShieldCheck,
  TrendingUp,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const ProcessStep = ({ icon, title, desc }: ProcessStepProps) => (
  <div className="flex flex-col items-start lg:items-center bg-white lg:bg-transparent p-4 lg:p-0 rounded-2xl">
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white border border-zinc-100 shadow-sm text-zinc-900 mb-6">
      {icon}
    </div>
    <h4 className="text-lg font-medium text-zinc-900">{title}</h4>
    <p className="mt-2 text-sm text-zinc-500 lg:text-center">{desc}</p>
  </div>
);

const Stat = ({ title, sub }: { title: string; sub: string }) => (
  <div>
    <span className="block text-2xl font-semibold text-zinc-900">{title}</span>
    <span className="text-sm text-zinc-500">{sub}</span>
  </div>
);

const OfficeProcess = () => {
  return (
    <>
      <section className="py-24 bg-white border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 md:text-center">
            <h2 className="text-3xl font-medium tracking-tight text-zinc-900">
              Proces współpracy
            </h2>
            <p className="mt-4 text-zinc-500">
              Stawiamy na przejrzyste zasady i szybkie wdrożenie usług.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute top-12 left-0 w-full border-t border-dashed border-zinc-200 hidden lg:block"
              style={{ zIndex: 0 }}
            ></div>

            <div className="grid gap-12 lg:grid-cols-4 relative z-10">
              <ProcessStep
                icon={<ClipboardList size={32} />}
                title="1. Audyt i Wycena"
                desc="Wizja lokalna obiektu i dobór odpowiedniego zakresu prac."
              />
              <ProcessStep
                icon={<CalendarDays size={32} />}
                title="2. Harmonogram"
                desc="Ustalenie godzin pracy serwisu, aby nie zakłócać działania firmy."
              />
              <ProcessStep
                icon={<ShieldCheck size={32} />}
                title="3. Stały Serwis"
                desc="Realizacja usług przez stały, przeszkolony personel."
              />
              <ProcessStep
                icon={<TrendingUp size={32} />}
                title="4. Kontrola Jakości"
                desc="Regularne wizyty koordynatora i raportowanie efektów."
              />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-zinc-100 pt-12">
            <Stat title="Przejrzyste rozliczenie" sub="Jasne warunki umowy" />
            <Stat title="do 24h" sub="Czas reakcji na zgłoszenia" />
            <Stat title="OC Firmy" sub="Pełne ubezpieczenie usług" />
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] bg-size-[16px_16px] opacity-10"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl mb-6">
            Szukasz sprawdzonej firmy sprzątającej?
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-lg">
            Skontaktuj się z nami, aby omówić szczegóły współpracy i otrzymać
            dedykowaną ofertę dla Twojego obiektu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/kontakt"
              className="cursor-pointer inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors w-full sm:w-auto"
            >
              Przejdź do kontaktu
            </Link>

            <div className="flex flex-col sm:items-start items-center gap-2">
              <div className="flex items-center gap-2 text-zinc-300">
                <Phone size={18} />
                <span className="text-sm font-medium">+48 664 917 532</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Mail size={18} />
                <span className="text-sm font-medium">
                  biuro@sprzataniekrakow.pl
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfficeProcess;
