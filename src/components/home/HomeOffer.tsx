import Link from "next/link";
import {
  School,
  Armchair,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const HomeOffer = () => {
  return (
    <section className="py-24 border-y bg-zinc-50/50 border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-tight text-zinc-900">
              Co dokładnie robimy?
            </h2>
            <p className="mt-4 text-zinc-500">
              Specjalizujemy się w obsłudze obiektów o dużym natężeniu ruchu
              oraz praniu ekstrakcyjnym. Sprawdź zakres prac dla Twojej branży.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="/kontakt"
              className="cursor-pointer text-sm font-medium text-zinc-900 hover:text-emerald-600 transition-colors flex items-center gap-1"
            >
              Poproś o wycenę indywidualną
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 transition-all hover:shadow-md hover:ring-zinc-300">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <School size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-4">
              Obiekty Sportowe i Edukacja
            </h3>
            <ul className="space-y-3">
              <ListItem text="Czyszczenie nawierzchni poliuretanowych (Tartan)" />
              <ListItem text="Dezynfekcja saun, pryszniców i szatni" />
              <ListItem text="Kompleksowe sprzątanie ciągów komunikacyjnych" />
            </ul>
          </div>

          <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 transition-all hover:shadow-md hover:ring-zinc-300">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Armchair size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-4">
              Pranie Wykładzin i Mebli (B2B)
            </h3>
            <ul className="space-y-3">
              <ListItem text="Pranie wykładzin obiektowych (biura, hotele)" />
              <ListItem text="Czyszczenie krzeseł konferencyjnych" />
              <ListItem text="Usuwanie trudnych plam" />
              <ListItem text="Impregnacja tapicerki po praniu" />
            </ul>
          </div>

          <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 transition-all hover:shadow-md hover:ring-zinc-300">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Building2 size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-4">
              Wspólnoty i Tereny Zewnętrzne
            </h3>
            <ul className="space-y-3">
              <ListItem text="Sprzątanie klatek schodowych" />
              <ListItem text="Czyszczenie ciśnieniowe kostki brukowej" />
              <ListItem text="Bieżące utrzymanie czystości w biurach" />
              <ListItem text="Odśnieżanie (tylko w stałej umowie)" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ListItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-sm text-zinc-600">
    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-500" />
    <span>{text}</span>
  </li>
);

export default HomeOffer;
