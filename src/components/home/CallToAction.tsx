import Link from "next/link";
import { Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="bg-white py-20 sm:py-28 border-t border-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-6">
          Dołącz do grona zadowolonych <br className="hidden sm:block" />
          klientów.
        </h2>

        <p className="text-lg sm:text-xl text-zinc-500 mb-10 leading-relaxed font-light">
          Skontaktuj się z nami, aby otrzymać darmową wycenę.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+48664917532"
            className="cursor-pointer group flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white text-base font-medium rounded-full hover:bg-zinc-800 transition-all shadow-lg hover:shadow-zinc-900/20 w-full sm:w-auto"
          >
            <Phone
              size={20}
              className="transition-transform group-hover:scale-110"
            />
            Zadzwoń teraz
          </a>

          <Link
            href="/kontakt"
            className="cursor-pointer flex items-center justify-center px-8 py-4 bg-white text-zinc-700 border border-zinc-200 text-base font-medium rounded-full hover:bg-zinc-50 hover:border-zinc-300 transition-all w-full sm:w-auto"
          >
            Napisz wiadomość
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
