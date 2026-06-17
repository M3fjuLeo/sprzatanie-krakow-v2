import Link from "next/link";
import { Sparkles, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const linkClass =
    "cursor-pointer text-zinc-500 hover:text-zinc-900 text-sm transition-colors duration-200";
  const iconClass = "mt-0.5 text-zinc-400 shrink-0";

  return (
    <footer className="bg-white border-t border-zinc-100 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link
              href="/"
              className="cursor-pointer flex items-center gap-2 group"
            >
              <div className="bg-zinc-900 text-white p-1.5 rounded-lg group-hover:bg-zinc-800 transition-colors">
                <Sparkles size={20} />
              </div>
              <span className="text-xl font-bold text-zinc-900">Błysk</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Profesjonalne usługi sprzątające dla domu i biznesu. Jakość,
              której możesz zaufać.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-zinc-900 mb-6 text-sm uppercase tracking-wider">
              Usługi
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/pranie-dywanow" className={linkClass}>
                  Pranie dywanów
                </Link>
              </li>
              <li>
                <Link href="/biura" className={linkClass}>
                  Sprzątanie biur
                </Link>
              </li>
              <li>
                <Link href="/powierzchnie" className={linkClass}>
                  Czyszczenie Nawierzchni
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-zinc-900 mb-6 text-sm uppercase tracking-wider">
              Firma
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/referencje" className={linkClass}>
                  Referencje
                </Link>
              </li>
              <li>
                <Link href="/cennik" className={linkClass}>
                  Cennik
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className={linkClass}>
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/polityka-prywatnosci" className={linkClass}>
                  Polityka prywatności
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-zinc-900 mb-6 text-sm uppercase tracking-wider">
              Dane kontaktowe
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-500 text-sm">
                <Phone size={18} className={iconClass} />
                <a href="tel:+48664917532" className={linkClass}>
                  +48 664 917 532
                </a>
              </li>
              <li className="flex items-start gap-3 text-zinc-500 text-sm">
                <Mail size={18} className={iconClass} />
                <a
                  href="mailto:biuro@sprzataniekrakow.pl"
                  className={linkClass}
                >
                  biuro@sprzataniekrakow.pl
                </a>
              </li>
              <li className="flex items-start gap-3 text-zinc-500 text-sm">
                <MapPin size={18} className={iconClass} />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=ul.+Sandora+Petöfiego+24+31-712+Kraków"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  ul. Sandora Petöfiego 24
                  <br />
                  31-712 KRAKÓW
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 text-xs text-zinc-400 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Firma Sprzątająca Błysk. Wszelkie
              prawa zastrzeżone.
            </p>
            <span className="hidden md:inline text-zinc-300">|</span>
            <p>
              Strona wykonana przez{" "}
              <a
                href="https://www.linkedin.com/in/mateusz-ropek-45b782258/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-zinc-900 transition-colors"
              >
                Mateusz Ropek
              </a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 text-center sm:text-right">
            <span className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-[0.2em]">
              NIP: 6782849970
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-[0.2em]">
              REGON: 363106421
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
