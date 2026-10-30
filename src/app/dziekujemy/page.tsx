import { Metadata } from "next";
import ThankYou from "@/components/thanks/ThankYou";

export const metadata: Metadata = {
  title: "Dziękujemy za wiadomość",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <ThankYou
      title="Dziękujemy, otrzymaliśmy Twoje zapytanie."
      text="Odpowiemy w ciągu 24 godzin. Jeśli sprawa jest pilna, zadzwoń do nas od poniedziałku do soboty w godzinach 8:00–18:00."
    />
  );
}
