import Link from "next/link";
import { Sparkles } from "lucide-react";

const CarpetHero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50/50 px-3 py-1 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-600">
              Partner techniczny Tauron Areny
            </span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-zinc-900 sm:text-6xl mb-6">
            Profesjonalne pranie dywanów <br />
            <span className="text-zinc-400">i wykładzin w Krakowie.</span>
          </h1>

          <p className="text-lg text-zinc-500 leading-relaxed max-w-xl mb-10">
            Specjalistyczne pranie ekstrakcyjne dywanów, wykładzin obiektowych
            oraz tapicerki meblowej. Skutecznie usuwamy zabrudzenia i roztocza
            na terenie całego Krakowa i okolic.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="cursor-pointer inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 transition-all duration-200"
            >
              Zamów wycenę
            </Link>
            <a
              href="#proces"
              className="cursor-pointer inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-all duration-200"
            >
              Zobacz proces
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none hidden lg:block">
        <Sparkles size={600} strokeWidth={0.5} className="text-zinc-900" />
      </div>
    </section>
  );
};

export default CarpetHero;
