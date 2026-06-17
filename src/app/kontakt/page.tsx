import { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactArea from "@/components/contact/ContactArea";

export const metadata: Metadata = {
  title: "Kontakt | Błysk - Firma Sprzątająca Kraków",
  description:
    "Skontaktuj się z nami w sprawie wyceny sprzątania biura, prania wykładzin lub mycia elewacji. Działamy w Krakowie i okolicach.",
  alternates: {
    canonical: "https://sprzataniekrakow.pl/kontakt",
  },
};

export default function Contact() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <ContactForm />
      <ContactArea />
    </main>
  );
}
