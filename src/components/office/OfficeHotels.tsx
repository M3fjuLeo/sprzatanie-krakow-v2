import Image from "next/image";
import { BedDouble, Armchair, Moon, Sparkles } from "lucide-react";

const points = [
  {
    icon: <BedDouble size={18} />,
    title: "Pokoje i korytarze",
    desc: "Pranie wykładzin obiektowych i dywanów w pokojach, na korytarzach i w lobby.",
  },
  {
    icon: <Armchair size={18} />,
    title: "Tapicerka i krzesła",
    desc: "Fotele, sofy oraz krzesła konferencyjne i restauracyjne. Usuwamy trudne plamy i impregnujemy tapicerkę po praniu.",
  },
  {
    icon: <Moon size={18} />,
    title: "Bez przerw w pracy obiektu",
    desc: "Pracujemy w godzinach nocnych i w weekendy, w terminach dopasowanych do obłożenia.",
  },
  {
    icon: <Sparkles size={18} />,
    title: "Stała współpraca",
    desc: "Cykliczny serwis na podstawie umowy, z przejrzystym rozliczeniem.",
  },
];

const OfficeHotels = () => {
  return (
    <section id="hotele" className="py-24 bg-zinc-50/50 border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl font-medium tracking-tight text-zinc-900">
              Hotele i apartamenty
            </h2>
            <p className="mt-4 text-zinc-500 max-w-xl leading-relaxed">
              Czyste wykładziny i tapicerka to pierwsze, co widzi gość. Dbamy o
              tekstylia w Twoim obiekcie tak, żeby nie kolidowało to z
              rezerwacjami.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {points.map((p) => (
                <div key={p.title} className="flex gap-4 items-start">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-zinc-100 text-zinc-900">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-900">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-zinc-200 ring-1 ring-zinc-200">
            <Image
              src="/gallery/hotel.webp"
              alt="Pranie wykładzin i tapicerki w hotelu w Krakowie"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeHotels;
