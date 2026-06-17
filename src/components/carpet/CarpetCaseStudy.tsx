import Image from "next/image";
import { Trophy, Clock, ShieldCheck } from "lucide-react";

const CarpetCaseStudy = () => {
  return (
    <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#52525b_1px,transparent_1px)] bg-size-[20px_20px] opacity-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 font-bold tracking-wider text-xs uppercase mb-6">
              <Trophy size={16} />
              Realizacja Premium
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Czyszczenie wykładzin w Tauron Arena Kraków.
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Jako partner techniczny, odpowiadaliśmy za profesjonalne pranie
              dywanów w strefach VIP oraz Loży Prezydenckiej podczas Mistrzostw
              Europy (EHF EURO) na krakowskiej Tauron Arenie.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Zadanie wymagało najwyższej precyzji, dyskrecji oraz skuteczności.
              Nasz zespół przeprowadził kompleksowe pranie ekstrakcyjne w
              najbardziej prestiżowych sektorach obiektu.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-zinc-800 pt-8">
              <div className="flex items-start gap-3">
                <Clock className="text-zinc-500 shrink-0" />
                <div>
                  <span className="block font-bold text-white">
                    Praca nocna
                  </span>
                  <span className="text-sm text-zinc-500">
                    Działanie w oknie serwisowym 24h
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-zinc-500 shrink-0" />
                <div>
                  <span className="block font-bold text-white">
                    Certyfikat ZPRP
                  </span>
                  <span className="text-sm text-zinc-500">
                    Referencje Związku Piłki Ręcznej
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-zinc-800 aspect-video ring-1 ring-zinc-700 shadow-2xl">
            <Image
              src="/tauronArenaImg.webp"
              alt="Profesjonalne pranie wykładzin biurowych i dywanów w Krakowie - realizacja w Tauron Arena"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
              priority
              className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-900/40 via-transparent to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarpetCaseStudy;
