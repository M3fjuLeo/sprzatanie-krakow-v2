"use client";

import { useEffect } from "react";

// Google Ads: konwersja „Kliknięcie numeru – witryna” przy każdym kliknięciu linku tel:
const PHONE_CONVERSION = "AW-459488250/gnwcCK2Lha8dEPr3jNsB";

export default function PhoneClickTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href^="tel:"]');
      if (!link) return;

      const gtag = (window as Window & { gtag?: (...args: unknown[]) => void })
        .gtag;
      if (typeof gtag === "function") {
        gtag("event", "conversion", {
          send_to: PHONE_CONVERSION,
          value: 1.0,
          currency: "PLN",
        });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
