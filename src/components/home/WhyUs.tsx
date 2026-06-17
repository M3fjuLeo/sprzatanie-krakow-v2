import { ShieldCheck, FlaskConical, CalendarClock } from "lucide-react";

const WhyUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="flex flex-col items-start group">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-zinc-900">
              Pełne bezpieczeństwo
            </h3>
            <p className="mt-2 text-base leading-relaxed text-zinc-500">
              Polisa OC na 200 000 zł i weryfikowany personel. Gwarancja spokoju
              dla Twojej firmy.
            </p>
          </div>

          <div className="flex flex-col items-start group">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
              <FlaskConical size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-zinc-900">
              Profesjonalna chemia
            </h3>
            <p className="mt-2 text-base leading-relaxed text-zinc-500">
              Używamy środków dedykowanych do obiektów sportowych i biurowych
              (atesty PZH).
            </p>
          </div>

          <div className="flex flex-col items-start group">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
              <CalendarClock size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-zinc-900">Elastyczność</h3>
            <p className="mt-2 text-base leading-relaxed text-zinc-500">
              Pracujemy w godzinach nocnych i w weekendy, aby nie zakłócać pracy
              Twojego obiektu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
