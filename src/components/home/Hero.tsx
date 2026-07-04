import Link from "next/link";
import { ClipboardList, Building2, School, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white pt-16 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-medium mb-8 border border-emerald-100 transition-transform hover:scale-105 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Dostępne terminy na ten tydzień
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight mb-6 leading-[1.1]">
            Specjalistyczne utrzymanie <br className="hidden sm:block" />
            czystości dla Firm i Instytucji.
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light">
            Specjalizujemy się w profesjonalnym praniu wykładzin obiektowych
            (biura, hotele, obiekty sportowe) oraz kompleksowej obsłudze
            sprzątającej B2B. Ofertę uzupełnia pranie dywanów i tapicerki
            meblowej dla Klientów Indywidualnych.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/kontakt"
              className="cursor-pointer group flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white text-base font-medium rounded-full hover:bg-zinc-800 transition-all shadow-lg hover:shadow-zinc-900/20 w-full sm:w-auto"
            >
              Wyceń usługę
              <ClipboardList
                size={18}
                className="text-zinc-400 group-hover:text-white transition-colors"
              />
            </Link>

            <Link
              href="/biura"
              className="cursor-pointer flex items-center justify-center px-8 py-4 bg-white text-zinc-700 border border-zinc-200 text-base font-medium rounded-full hover:bg-zinc-50 hover:border-zinc-300 transition-all w-full sm:w-auto"
            >
              Oferta dla Firm
            </Link>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 pt-8 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-zinc-500 font-medium">
            <div className="p-2 bg-zinc-50 rounded-lg text-zinc-900">
              <Building2 size={20} strokeWidth={1.5} />
            </div>
            <span>Biura i Wspólnoty</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-zinc-500 font-medium">
            <div className="p-2 bg-zinc-50 rounded-lg text-zinc-900">
              <School size={20} strokeWidth={1.5} />
            </div>
            <span>Szkoły i Obiekty Sportowe</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-zinc-500 font-medium">
            <div className="p-2 bg-zinc-50 rounded-lg text-zinc-900">
              <ShieldCheck size={20} strokeWidth={1.5} />
            </div>
            <span>Polisa OC 200 000 zł</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
