import Image from "next/image";

const OutdoorProcess = () => {
  return (
    <>
      <section id="proces" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-12 text-center">
            Proces realizacji B2B
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-100 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              <ProcessStep
                number="1"
                title="Wizja lokalna"
                desc="Ocena zabrudzenia, pomiar i dobór technologii."
              />
              <ProcessStep
                number="2"
                title="Próba (Demo)"
                desc="Dla powierzchni >500m² darmowy test skuteczności."
              />
              <ProcessStep
                number="3"
                title="Zabezpieczenie"
                desc="Oklejenie elementów wrażliwych, ochrona studzienek."
              />
              <ProcessStep
                number="4"
                title="Mycie właściwe"
                desc="Praca z talerzami myjącymi (brak rozbryzgu)."
              />
              <ProcessStep
                number="5"
                title="Impregnacja"
                desc="Opcjonalna hydrofobizacja chroniąca przed brudem."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50 border-y border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-12">
            Efekty w trakcie pracy
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Boisko Szkolne"
              badge="Nawierzchnia Poliuretanowa"
              desc="Widoczna granica czyszczenia. Usuwamy wieloletni mech i brud zalegający w porach nawierzchni, przywracając jej oryginalny, zielony kolor oraz właściwości antypoślizgowe."
              imageSrc="/gallery/boisko.webp"
            />
            <CaseStudyCard
              title="Bieżnia Lekkoatletyczna"
              badge="Tartan"
              desc="Proces mycia bieżni. Zdjęcie ukazuje drastyczną różnicę między wyczyszczonym fragmentem (intensywna czerwień) a brudną powierzchnią pokrytą czarnym osadem atmosferycznym."
              imageSrc="/gallery/tartan.webp"
            />
          </div>
        </div>
      </section>
    </>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  desc: string;
}

const ProcessStep = ({ number, title, desc }: ProcessStepProps) => (
  <div className="group relative bg-white p-4">
    <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900 font-medium text-sm mb-4 mx-auto group-hover:bg-zinc-900 group-hover:text-white transition-colors relative z-10">
      {number}
    </div>
    <h3 className="text-sm font-medium text-zinc-900 text-center mb-2">
      {title}
    </h3>
    <p className="text-xs text-zinc-500 text-center leading-relaxed">{desc}</p>
  </div>
);

interface CaseStudyCardProps {
  title: string;
  badge: string;
  desc: string;
  imageSrc: string;
}

const CaseStudyCard = ({
  title,
  badge,
  desc,
  imageSrc,
}: CaseStudyCardProps) => (
  <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm flex flex-col overflow-hidden transition-all hover:shadow-md group">
    <div className="relative h-72 rounded-xl overflow-hidden mb-6 bg-zinc-100">
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-zinc-900/5 pointer-events-none"></div>
    </div>
    <div className="px-2 pb-2">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-zinc-900 text-lg">{title}</h3>
        <span className="inline-flex items-center rounded-md bg-zinc-50 border border-zinc-100 px-2.5 py-1 text-[10px] font-medium text-zinc-600 uppercase tracking-wider">
          {badge}
        </span>
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default OutdoorProcess;
