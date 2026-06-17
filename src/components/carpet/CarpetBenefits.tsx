import { ShieldCheck, Leaf, Palette } from "lucide-react";

const CarpetBenefits = () => {
  const benefits = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Eliminacja alergenów",
      desc: "Metoda ta skutecznie usuwa roztocza, pyłki i zarodniki grzybów, które gromadzą się głęboko przy osnowie wykładziny, tworząc zdrowsze środowisko pracy.",
      colorClass: "text-blue-600 bg-blue-50",
      borderColor: "hover:border-blue-200",
    },
    {
      icon: <Leaf size={24} />,
      title: "Bezpieczna chemia",
      desc: "Używamy wyłącznie atestowanych środków marek Karcher. Są one w pełni biodegradowalne i bezpieczne dla dzieci oraz zwierząt domowych.",
      colorClass: "text-emerald-600 bg-emerald-50",
      borderColor: "hover:border-emerald-200",
    },
    {
      icon: <Palette size={24} />,
      title: "Przywrócenie kolorów",
      desc: "Usunięcie szarej powłoki brudu (tzw. filmu) przywraca żywe barwy wykładziny i podnosi estetykę wnętrza, przedłużając żywotność materiału.",
      colorClass: "text-purple-600 bg-purple-50",
      borderColor: "hover:border-purple-200",
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-6">
            Dlaczego nasze pranie dywanów jest skuteczne?
          </h2>
          <p className="text-zinc-500 leading-relaxed">
            Stosujemy metodę{" "}
            <span className="text-zinc-900 font-medium">ekstrakcyjną</span>,
            która fizycznie wyciąga brud z głębi włókien, a nie tylko wciera go
            w głąb Twojej wykładziny.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className={`group flex flex-col items-start p-8 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 ${item.borderColor}`}
            >
              <div
                className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.colorClass} transition-transform group-hover:scale-110`}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-medium text-zinc-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarpetBenefits;
