"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, ChevronDown, ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "cursor-pointer text-zinc-600 hover:text-zinc-900 font-medium transition-colors duration-200 flex items-center gap-1";
  const dropdownLinkClass =
    "cursor-pointer block p-3 hover:bg-zinc-50 rounded-lg text-sm text-zinc-500 hover:text-zinc-900 font-medium transition-colors";

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-3 group"
            onClick={closeMenu}
          >
            <div className="bg-zinc-900 text-white p-2 rounded-lg group-hover:bg-zinc-800 transition-colors">
              <Sparkles size={20} />
            </div>
            <span className="text-xl font-bold text-zinc-900 tracking-tight">
              Błysk
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={linkClass}>
              Strona główna
            </Link>

            <div className="relative group h-full flex items-center">
              <button className={`${linkClass} cursor-pointer`}>
                Usługi <ChevronDown size={16} />
              </button>

              <div className="absolute top-full left-0 mt-0 w-80 bg-white border border-zinc-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-2 flex flex-col">
                  <Link href="/biura" className={dropdownLinkClass}>
                    Oferta B2B (Biura, Obiekty sportowe, Hotele)
                  </Link>
                  <Link href="/pranie-dywanow" className={dropdownLinkClass}>
                    Pranie Dywanów i Tapicerki
                  </Link>
                  <Link href="/powierzchnie" className={dropdownLinkClass}>
                    Czyszczenie Nawierzchni
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/referencje" className={linkClass}>
              Referencje
            </Link>
            <Link href="/cennik" className={linkClass}>
              Cennik
            </Link>
            <Link href="/kontakt" className={linkClass}>
              Kontakt
            </Link>
          </div>

          <div className="hidden md:block">
            <Link
              href="/kontakt"
              className="cursor-pointer bg-zinc-900 text-white px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-zinc-800 transition-all shadow-lg hover:shadow-zinc-900/20"
            >
              Zamów sprzątanie <ArrowRight size={16} />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer text-zinc-900"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 absolute w-full left-0 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
            <Link
              href="/"
              onClick={closeMenu}
              className="cursor-pointer text-lg font-medium text-zinc-900 py-2 border-b border-zinc-50"
            >
              Strona główna
            </Link>

            <div className="py-2 border-b border-zinc-50">
              <span className="text-lg font-medium text-zinc-900 mb-2 block">
                Usługi
              </span>
              <div className="flex flex-col pl-4 space-y-3">
                <Link
                  href="/biura"
                  onClick={closeMenu}
                  className="cursor-pointer text-zinc-600"
                >
                  Oferta B2B (Biura, Obiekty sportowe, Hotele)
                </Link>
                <Link
                  href="/pranie-dywanow"
                  onClick={closeMenu}
                  className="cursor-pointer text-zinc-600"
                >
                  Pranie Dywanów i Tapicerki
                </Link>
                <Link
                  href="/powierzchnie"
                  onClick={closeMenu}
                  className="cursor-pointer text-zinc-600"
                >
                  Czyszczenie Nawierzchni
                </Link>
              </div>
            </div>

            <Link
              href="/referencje"
              onClick={closeMenu}
              className="cursor-pointer text-lg font-medium text-zinc-900 py-2 border-b border-zinc-50"
            >
              Referencje
            </Link>
            <Link
              href="/cennik"
              onClick={closeMenu}
              className="cursor-pointer text-lg font-medium text-zinc-900 py-2 border-b border-zinc-50"
            >
              Cennik
            </Link>
            <Link
              href="/kontakt"
              onClick={closeMenu}
              className="cursor-pointer text-lg font-medium text-zinc-900 py-2 border-b border-zinc-50"
            >
              Kontakt
            </Link>

            <Link
              href="/kontakt"
              onClick={closeMenu}
              className="cursor-pointer mt-4 bg-zinc-900 text-white px-6 py-3 rounded-xl font-medium text-center flex items-center justify-center gap-2"
            >
              Zamów sprzątanie <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
