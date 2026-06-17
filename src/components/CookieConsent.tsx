"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  const updateGoogle = (status: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: status,
        ad_user_data: status,
        ad_personalization: status,
        analytics_storage: status,
      });
    }
  };

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookieConsent");
    if (savedConsent) {
      updateGoogle(savedConsent === "granted" ? "granted" : "denied");
    } else {
      updateGoogle("granted");
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "granted");
    updateGoogle("granted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    updateGoogle("denied");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 bg-white border-t border-zinc-200 shadow-2xl animate-in slide-in-from-bottom duration-500">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex gap-4 items-start">
          <div className="hidden sm:flex bg-zinc-100 p-3 rounded-xl h-fit text-zinc-900 shrink-0">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 text-base mb-2">
              Dbamy o Twój komfort i czystość danych
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
              Używamy plików cookie... Szczegóły znajdziesz w naszej{" "}
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
            className="cursor-pointer w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-zinc-600 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors"
          >
            Odrzuć śledzenie
          </button>
          <button
            onClick={handleAccept}
            className="cursor-pointer w-full sm:w-auto px-8 py-2.5 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-all shadow-sm"
          >
            Rozumiem i akceptuję
          </button>
        </div>
      </div>
    </div>
  );
}
