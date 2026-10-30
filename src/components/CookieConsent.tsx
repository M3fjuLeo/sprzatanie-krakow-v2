"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const OPEN_COOKIE_SETTINGS_EVENT = "open-cookie-settings";

type ConsentStatus = "granted" | "denied";

const STORAGE_KEY = "cookieConsent";

const updateGoogle = (status: ConsentStatus) => {
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void })
    .gtag;
  if (typeof gtag === "function") {
    gtag("consent", "update", {
      ad_storage: status,
      ad_user_data: status,
      ad_personalization: status,
      analytics_storage: status,
    });
  }
};

const readConsent = (): string | null => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const saveConsent = (value: "granted" | "declined") => {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // brak dostępu do localStorage – zgoda obowiązuje tylko w tej sesji
  }
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Domyślnie wszystko jest zablokowane (consent default: denied w layout.tsx).
    // Zgodę włączamy wyłącznie, jeśli użytkownik wcześniej ją wyraził.
    const savedConsent = readConsent();
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (savedConsent === "granted") {
      updateGoogle("granted");
    } else if (savedConsent !== "declined") {
      timer = setTimeout(() => setIsVisible(true), 1000);
    }

    const openSettings = () => setIsVisible(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
    };
  }, []);

  const handleAccept = () => {
    saveConsent("granted");
    updateGoogle("granted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    saveConsent("declined");
    updateGoogle("denied");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Zgoda na pliki cookie"
      className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 bg-white border-t border-zinc-200 shadow-2xl animate-in slide-in-from-bottom duration-500"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex gap-4 items-start">
          <div className="hidden sm:flex bg-zinc-100 p-3 rounded-xl h-fit text-zinc-900 shrink-0">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 text-base mb-2">
              Dbamy o Twoją prywatność
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
              Za Twoją zgodą używamy plików cookie Google Analytics i Google
              Ads, aby mierzyć ruch na stronie i skuteczność reklam. Bez zgody
              nie zapisujemy ich w Twojej przeglądarce. Decyzję możesz zmienić
              w każdej chwili w stopce strony („Ustawienia cookies”).
              Szczegóły znajdziesz w{" "}
              <Link
                href="/polityka-prywatnosci"
                className="cursor-pointer text-zinc-900 underline font-medium"
              >
                Polityce Prywatności
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
          <button
            onClick={handleDecline}
            className="cursor-pointer w-full sm:w-auto px-8 py-2.5 text-sm font-medium text-zinc-900 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors"
          >
            Odrzuć
          </button>
          <button
            onClick={handleAccept}
            className="cursor-pointer w-full sm:w-auto px-8 py-2.5 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-all shadow-sm"
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
}
