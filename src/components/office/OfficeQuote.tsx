import QuoteForm from "@/components/contact/QuoteForm";

const OfficeQuote = () => {
  return (
    <section id="wycena" className="py-24 bg-zinc-50/50 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-medium tracking-tight text-zinc-900">
              Zapytaj o ofertę dla firmy
            </h2>
            <p className="mt-4 text-zinc-500 max-w-md leading-relaxed">
              Opisz obiekt: rodzaj, przybliżony metraż i zakres prac.
              Odpowiemy w ciągu 24 godzin i umówimy bezpłatny audyt.
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm">
            <QuoteForm defaultSubject="wspolpraca" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeQuote;
