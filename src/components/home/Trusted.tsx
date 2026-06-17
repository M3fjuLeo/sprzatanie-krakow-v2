import { Crown, Building2, ShieldCheck, Timer } from "lucide-react";

const Trusted = () => {
  return (
    <section className="bg-zinc-950 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block py-1 px-4 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-xs font-medium mb-8">
            Zaufanie poparte doświadczeniem
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Sprzątaliśmy w najważniejszych miejscach.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Otrzymaliśmy zaufanie od instytucji o kluczowym znaczeniu kulturowym
            i logistycznym. To najlepszy dowód na nasz profesjonalizm, dyskrecję
            i skuteczność.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10 md:p-12">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500/20 to-amber-600/10 ring-1 ring-amber-500/20">
              <Crown size={32} className="text-amber-400" strokeWidth={1.5} />
            </div>
            <h3 className="mb-4 text-2xl font-medium tracking-tight text-white">
              Zamek Królewski na Wawelu
            </h3>
            <p className="mb-8 text-zinc-400 leading-relaxed">
              Obsługa jednego z najcenniejszych zabytków w Polsce wymagała od
              nas nadzwyczajnej precyzji i ostrożności. Prace obejmowały
              specjalistyczne czyszczenie delikatnych powierzchni historycznych
              oraz zachowanie rygorystycznych protokołów bezpieczeństwa.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-amber-200/80">
              <ShieldCheck size={18} />
              Ochrona dziedzictwa narodowego
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10 md:p-12">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500/20 to-blue-600/10 ring-1 ring-blue-500/20">
              <Building2
                size={32}
                className="text-blue-400"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="mb-4 text-2xl font-medium tracking-tight text-white">
              Tauron Arena Kraków
            </h3>
            <p className="mb-8 text-zinc-400 leading-relaxed">
              Zapewnienie czystości w największej hali widowiskowej w Polsce to
              wyzwanie logistyczne ogromnej skali. Realizowaliśmy sprzątanie po
              masowych wydarzeniach, gdzie kluczowy był czas reakcji i
              koordynacja dużego zespołu w krótkim oknie czasowym.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-blue-200/80">
              <Timer size={18} />
              Logistyka na skalę masową
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-white/5 bg-white/5 p-8 text-center">
          <p className="text-lg font-medium text-white">
            Skoro sprostaliśmy wymaganiom Zamku Królewskiego i Tauron Areny,{" "}
            <br className="hidden sm:block" />
            możesz być pewien, że Twoje biuro lub dom są w najlepszych rękach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
