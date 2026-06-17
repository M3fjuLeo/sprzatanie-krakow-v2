import {
  Droplets,
  Leaf,
  Moon,
  CheckCircle2,
  Gauge,
  Zap,
  Activity,
} from "lucide-react";

const OutdoorTech = () => {
  return (
    <section className="py-20 bg-zinc-950 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <h2 className="text-3xl font-medium tracking-tight mb-6">
              Moc hydrodynamiki.
              <br />
              <span className="text-zinc-500">
                Skuteczność bez kompromisów.
              </span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Do mycia kostki brukowej i elewacji używamy przemysłowych myjek
              wysokociśnieniowych Kärcher. Połączenie potężnego ciśnienia i
              dużego przepływu wody pozwala usunąć mech, porosty i
              zanieczyszczenia atmosferyczne bez niszczenia struktury betonu.
            </p>

            <div className="flex flex-col gap-6">
              <FeatureItem
                icon={<Zap size={20} />}
                title="Wysokie ciśnienie robocze"
                desc="Pracujemy na ciśnieniu do 250 bar. Taka siła uderzenia wody mechanicznie odrywa nawet stary, zaschnięty brud i mchy z fug."
              />
              <FeatureItem
                icon={<Leaf size={20} />}
                title="Aktywna piana i chemia"
                desc="Tam, gdzie sama woda nie wystarczy (np. plamy oleju), stosujemy biodegradowalne środki zasadowe, które emulgują zabrudzenia."
              />
              <FeatureItem
                icon={<Moon size={20} />}
                title="Szybkość realizacji"
                desc="Dzięki maszynom o dużym wydatku wody (l/h) myjemy duże powierzchnie znacznie szybciej niż sprzętem marketowym."
              />
            </div>
          </div>

          <div className="relative h-full min-h-100 w-full rounded-3xl bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-between overflow-hidden shadow-2xl shadow-black/50 group">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
            <div className="absolute top-0 right-0 w-75 h-75 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="absolute -right-10 -top-10 text-zinc-800/50 group-hover:text-zinc-800 transition-colors duration-700">
              <Gauge size={280} strokeWidth={0.5} />
            </div>

            <div className="relative z-10 flex justify-between items-start mb-12">
              <div className="flex items-center gap-3">
                <div className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </div>
                <div className="font-mono text-xs text-blue-500 tracking-widest font-medium">
                  SYSTEM ACTIVE
                </div>
              </div>
              <div className="px-3 py-1 rounded-full border border-zinc-700 bg-zinc-800/50 backdrop-blur-md text-[10px] text-zinc-400 font-mono">
                KÄRCHER HD SERIES
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-4 mt-auto">
              <div className="bg-zinc-900/40 backdrop-blur-sm border border-white/10 p-5 rounded-2xl hover:border-blue-500/30 transition-colors group/item">
                <div className="flex items-center gap-2 mb-2 text-zinc-400">
                  <Activity
                    size={16}
                    className="group-hover/item:text-blue-400 transition-colors"
                  />
                  <span className="text-[10px] uppercase tracking-wider font-semibold">
                    Ciśnienie max
                  </span>
                </div>
                <div className="text-3xl font-medium tabular-nums text-white">
                  250<span className="text-lg text-zinc-500 ml-1">bar</span>
                </div>
                <div className="w-full bg-zinc-800 h-1 mt-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-400 w-[95%] h-full rounded-full"></div>
                </div>
              </div>

              <div className="bg-zinc-900/40 backdrop-blur-sm border border-white/10 p-5 rounded-2xl hover:border-cyan-500/30 transition-colors group/item">
                <div className="flex items-center gap-2 mb-2 text-zinc-400">
                  <Droplets
                    size={16}
                    className="group-hover/item:text-cyan-400 transition-colors"
                  />
                  <span className="text-[10px] uppercase tracking-wider font-semibold">
                    Przepływ
                  </span>
                </div>
                <div className="text-3xl font-medium tabular-nums text-white">
                  1000<span className="text-lg text-zinc-500 ml-1">l/h</span>
                </div>
                <div className="w-full bg-zinc-800 h-1 mt-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500 to-teal-400 w-[85%] h-full rounded-full"></div>
                </div>
              </div>

              <div className="bg-zinc-900/40 backdrop-blur-sm border border-white/10 p-4 rounded-2xl col-span-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                      Technologia
                    </div>
                    <div className="text-sm font-medium text-zinc-200">
                      Zimna woda + Aktywna piana
                    </div>
                  </div>
                </div>
                <CheckCircle2 size={20} className="text-green-500/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeatureItem = ({ icon, title, desc }: FeatureItemProps) => (
  <div className="flex gap-4 group">
    <div className="flex-none rounded-xl bg-zinc-800 p-3 text-zinc-400 group-hover:text-white group-hover:bg-zinc-700 transition-all h-12 w-12 flex items-center justify-center border border-zinc-700/50">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-white text-base group-hover:text-blue-200 transition-colors">
        {title}
      </h3>
      <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default OutdoorTech;
