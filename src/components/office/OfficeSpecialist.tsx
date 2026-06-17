import { CheckCircle2, Snowflake } from "lucide-react";

const ListItem = ({ text, color }: { text: string; color: string }) => (
  <li className="flex items-center gap-3 text-sm text-zinc-600">
    <CheckCircle2 size={18} className={color} />
    {text}
  </li>
);

const OfficeSpecialist = () => {
  return (
    <section className="py-24 bg-zinc-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900">
            Specjalistyczne czyszczenie
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-zinc-100">
            <div className="p-8">
              <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12h10" />
                  <path d="M9 4v16" />
                  <path d="m3 9 3 3-3 3" />
                  <path d="M14 8V6a2 2 0 0 1 2-2h6" />
                  <path d="M14 16v2a2 2 0 0 0 2 2h6" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-zinc-900">
                Nawierzchnie poliuretanowe i tartan
              </h3>
              <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
                Profesjonalne czyszczenie boisk szkolnych, bieżni
                lekkoatletycznych oraz bezpiecznych placów zabaw.
              </p>
              <ul className="mt-6 space-y-3">
                <ListItem
                  text="Usuwanie mchu, glonów i zabrudzeń atmosferycznych"
                  color="text-orange-500"
                />
                <ListItem
                  text="Maszynowe mycie pod ciśnieniem"
                  color="text-orange-500"
                />
                <ListItem
                  text="Przywracanie przyczepności i estetyki"
                  color="text-orange-500"
                />
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-zinc-100">
            <div className="p-8">
              <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20" />
                  <path d="M2 12h20" />
                  <path d="m4.93 4.93 14.14 14.14" />
                  <path d="m14.83 9.17-5.66 5.66" />
                  <path d="m14.83 14.83-5.66-5.66" />
                  <path d="m9.17 4.93 5.66 5.66" />
                  <path d="m9.17 19.07 5.66-5.66" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-zinc-900">
                Kostka brukowa i parkingi
              </h3>
              <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
                Wysokociśnieniowe mycie parkingów, podjazdów i chodników.
              </p>
              <ul className="mt-6 space-y-3">
                <ListItem
                  text="Usuwanie plam olejowych i śladów opon"
                  color="text-blue-500"
                />
                <ListItem
                  text="Odświeżanie i impregnacja kostki brukowej"
                  color="text-blue-500"
                />

                <li className="flex items-start gap-3 text-sm text-zinc-600">
                  <Snowflake
                    size={18}
                    className="text-blue-500 mt-0.5 shrink-0"
                  />
                  <span>
                    Zimowe odśnieżanie terenów zewnętrznych <br />
                    <span className="text-xs text-blue-600 font-medium">
                      *Tylko dla klientów ze stałą umową na sprzątanie wnętrz
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeSpecialist;
