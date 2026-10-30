import { Metadata } from "next";
import ThankYou from "@/components/thanks/ThankYou";

export const metadata: Metadata = {
  title: "Dziękujemy za zapytanie o współpracę",
  robots: { index: false, follow: false },
};

export default function ThankYouB2BPage() {
  return (
    <ThankYou
      title="Dziękujemy za zapytanie o współpracę."
      text="Skontaktujemy się w ciągu 24 godzin, żeby umówić audyt obiektu i przygotować wycenę. Jeśli wolisz porozmawiać od razu, zadzwoń."
    />
  );
}
