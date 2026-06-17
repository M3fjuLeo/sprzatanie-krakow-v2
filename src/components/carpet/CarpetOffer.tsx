import { Building2, Armchair, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const CarpetOffer = () => {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900">
            Pranie dywanów i tapicerki – cennik
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col h-full bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-zinc-100 rounded-xl">
                <Building2 className="text-zinc-900" size={24} />
              </div>
              <span className="bg-zinc-100 text-zinc-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                B2B
              </span>
            </div>

            <h3 className="text-xl font-bold text-zinc-900 mb-4">
              Dla Firm i Hoteli
            </h3>

            <p className="text-zinc-600 text-sm mb-8 min-h-12">
              Wykładziny obiektowe, duże metraże, praca w godzinach nocnych.
              Obsługa biur i instytucji państwowych.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-zinc-700">
                <CheckCircle2 size={18} className="text-zinc-900 shrink-0" />
                <span>Powyżej 300m² wycena indywidualna</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-700">
                <CheckCircle2 size={18} className="text-zinc-900 shrink-0" />
                <span>Czas schnięcia 3-6h</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-700">
                <CheckCircle2 size={18} className="text-zinc-900 shrink-0" />
                <span>Przejrzyste rozliczenie</span>
              </li>
            </ul>

            <Link
              href="/kontakt"
              className="cursor-pointer mt-auto block w-full text-center bg-zinc-900 text-white py-3 rounded-xl font-medium hover:bg-zinc-800 transition-colors"
            >
              Zapytaj o wycenę
            </Link>
          </div>

          <div className="flex flex-col h-full bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-emerald-50 rounded-xl">
                <Armchair className="text-emerald-600" size={24} />
              </div>
              <span className="bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Dla Domu
              </span>
            </div>

            <h3 className="text-xl font-bold text-zinc-900 mb-4">
              Klienci Indywidualni
            </h3>

            <p className="text-zinc-600 text-sm mb-8 min-h-12">
              Przywracamy świeżość Twoim meblowi i dywanom. Usługa z dojazdem do
              klienta (min. 150 zł).
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-zinc-700">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                <span>Pranie narożników, sof i foteli</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-700">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                <span>Pranie dywanów i wykładzin</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-700">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                <span>Impregnacja dywanów i wykładzin</span>
              </li>
            </ul>

            <Link
              href="/kontakt"
              className="cursor-pointer mt-auto block w-full text-center bg-white border border-zinc-200 text-zinc-900 py-3 rounded-xl font-medium hover:bg-zinc-50 transition-colors"
            >
              Zamów pranie
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarpetOffer;
