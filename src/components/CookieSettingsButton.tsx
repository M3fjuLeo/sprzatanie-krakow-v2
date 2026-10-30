"use client";

import { OPEN_COOKIE_SETTINGS_EVENT } from "@/components/CookieConsent";

interface CookieSettingsButtonProps {
  className?: string;
}

export default function CookieSettingsButton({
  className,
}: CookieSettingsButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
      className={className}
    >
      Ustawienia cookies
    </button>
  );
}
