import { Armchair, Building2, CheckCircle2 } from "lucide-react";

const ForWhom = () => {
  return (
    <section id="oferta" className="py-24 bg-white border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900">
            Dla kogo sprzątamy?
          </h2>
          <p className="mt-4 text-zinc-500 max-w-2xl">
            Dostosowujemy nasze usługi do specyfiki obiektu oraz potrzeb
            klienta.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="group relative rounded-2xl bg-zinc-50 p-8 shadow-sm ring-1 ring-zinc-100 transition-all duration-300 hover:shadow-md hover:ring-zinc-200 hover:-translate-y-1">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-100 transition-transform group-hover:scale-110">
              <Armchair size={24} strokeWidth={1.5} />
            </div>

            <h3 className="text-xl font-medium text-zinc-900 mb-2">
              Pranie Tapicerki i Dywanów
            </h3>

            <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-6">
              Dla Klientów Indywidualnych
            </p>

            <p className="text-zinc-600 mb-6 leading-relaxed">
              Profesjonalne pranie mebli tapicerowanych i wykładzin. Przywracamy
              świeżość Twoim ulubionym meblom przy użyciu bezpiecznych środków.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-zinc-600">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />
                <span>Pranie narożników, sof i foteli</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-600">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />
                <span>Pranie dywanów (odbiór lub u klienta)</span>
              </li>
            </ul>
          </div>

          <div className="group relative rounded-2xl bg-zinc-900 p-8 shadow-lg ring-1 ring-zinc-900 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-900/20 hover:-translate-y-1">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-white shadow-sm ring-1 ring-zinc-700 transition-colors group-hover:bg-zinc-700">
              <Building2 size={24} strokeWidth={1.5} />
            </div>

            <h3 className="text-xl font-medium text-white mb-2">
              Biura, hotele i Obiekty Sportowe
            </h3>

            <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-6">
              Dla Firm i Instytucji
            </p>

            <p className="text-zinc-300 mb-6 leading-relaxed">
              Kompleksowe utrzymanie czystości w obiektach użyteczności
              publicznej, placówkach edukacyjnych i sportowych.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-zinc-300">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />
                <span>Sprzątanie szkół, basenów, siłowni i saun</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-300">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />
                <span>Czyszczenie poliuretanu (boiska, bieżnie)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
