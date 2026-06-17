import Link from "next/link";
import { ShieldCheck, Warehouse } from "lucide-react";

const OutdoorHero = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white border-b border-zinc-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-50 px-3 py-1 text-[10px] uppercase tracking-wide font-medium text-zinc-500 mb-8 border border-zinc-200">
            <ShieldCheck size={12} />
            Sektor Przemysłowy i Publiczny
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-zinc-900 sm:text-6xl mb-6">
            Specjalistyczne czyszczenie infrastruktury zewnętrznej.
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl mb-10">
            Usuwamy trudne zabrudzenia przemysłowe, mchy i glony z parkingów
            oraz boisk poliuretanowych. Przywracamy estetykę i bezpieczeństwo
            antypoślizgowe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakt"
              className="cursor-pointer inline-flex h-11 items-center justify-center rounded-lg bg-zinc-900 px-6 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 transition-all"
            >
              Darmowa wycena i próba
            </Link>
            <a
              href="#proces"
              className="cursor-pointer inline-flex h-11 items-center justify-center rounded-lg bg-white border border-zinc-200 px-6 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 transition-all"
            >
              Zobacz jak pracujemy
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none hidden lg:block">
        <Warehouse size={600} strokeWidth={0.5} className="text-zinc-900" />
      </div>
    </section>
  );
};

export default OutdoorHero;
