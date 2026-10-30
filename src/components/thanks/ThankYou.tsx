import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";

interface ThankYouProps {
  title: string;
  text: string;
}

const ThankYou = ({ title, text }: ThankYouProps) => (
  <section className="py-24 sm:py-32 bg-zinc-50/50 grow">
    <div className="mx-auto max-w-2xl px-6 text-center">
      <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
        <CheckCircle2 size={28} />
      </div>
      <h1 className="text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl mb-4">
        {title}
      </h1>
      <p className="text-base text-zinc-500 leading-relaxed mb-10">{text}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-zinc-900 px-8 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 transition-colors"
        >
          Wróć na stronę główną
        </Link>
        <a
          href="tel:+48664917532"
          className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-white border border-zinc-200 px-8 py-3 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors"
        >
          <Phone className="mr-2" size={18} />
          +48 664 917 532
        </a>
      </div>
    </div>
  </section>
);

export default ThankYou;
