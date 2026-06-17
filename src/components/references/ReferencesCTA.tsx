import Link from "next/link";

const ReferencesCTA = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-medium tracking-tight text-zinc-900">
          Dołącz do grona zadowolonych klientów
        </h2>
        <p className="mt-4 text-zinc-500">
          Dbamy o komfort pracy w prestiżowych biurach i obiektach użyteczności
          publicznej w Krakowie.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/kontakt"
            className="cursor-pointer rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 transition-colors"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReferencesCTA;
