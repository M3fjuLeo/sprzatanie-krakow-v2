import { Metadata } from "next";
import { ShieldCheck, Lock, Eye, Server, FileText } from "lucide-react";
import React from "react";

export const metadata: Metadata = {
  title: "Polityka Prywatności | Błysk - Firma Sprzątająca Kraków",
  description:
    "Polityka prywatności firmy PHU Błysk. Informacje o RODO, plikach cookie oraz Google Consent Mode v2.",
  alternates: {
    canonical: "https://sprzataniekrakow.pl/polityka-prywatnosci",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  const companyData = {
    name: "PHU Błysk",
    address: "ul. Sandora Petöfiego 24 lok. 3, 31-712 Kraków",
    nip: "6782849970",
    regon: "363106421",
    email: "biuro@sprzataniekrakow.pl",
  };

  return (
    <main className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="border-b border-zinc-100 pb-10 mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
            Polityka Prywatności i Plików Cookie
          </h1>
          <p className="text-lg text-zinc-500">
            Dbamy o przejrzystość. Poniżej znajdziesz szczegółowe informacje o
            tym, kto jest administratorem Twoich danych, w jakim celu je
            przetwarzamy oraz jak działają nasze narzędzia analityczne i
            reklamowe.
          </p>
          <p className="text-sm text-zinc-400 mt-4">
            Obowiązuje od: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-12">
          <Section
            icon={<ShieldCheck className="text-zinc-900" size={24} />}
            title="1. Administrator Danych Osobowych"
          >
            <p>
              Administratorem Twoich danych osobowych jest firma:
              <br />
              <strong>{companyData.name}</strong>
              <br />z siedzibą: {companyData.address}.
            </p>
            <div className="mt-4 p-4 bg-zinc-50 rounded-lg border border-zinc-200 inline-block text-sm">
              <p>
                <strong>NIP:</strong> {companyData.nip}
              </p>
              <p>
                <strong>REGON:</strong> {companyData.regon}
              </p>
            </div>
            <p className="mt-4">
              We wszelkich sprawach związanych z ochroną danych możesz
              skontaktować się z nami mailowo:
              <a
                href={`mailto:${companyData.email}`}
                className="cursor-pointer text-zinc-900 font-medium underline ml-1 hover:text-zinc-600"
              >
                {companyData.email}
              </a>
              .
            </p>
          </Section>

          <Section
            icon={<Server className="text-zinc-900" size={24} />}
            title="2. Cel i podstawa przetwarzania danych"
          >
            <ul className="list-disc pl-5 space-y-3 marker:text-zinc-400">
              <li>
                <strong>Obsługa zapytań (Formularz/Email):</strong> Przetwarzamy
                Twoje dane (imię, e-mail, telefon), aby odpowiedzieć na Twoją
                wiadomość lub przygotować darmową wycenę.
                <span className="block text-sm text-zinc-500 mt-1">
                  Podstawa prawna: Podjęcie działań na żądanie osoby, której
                  dane dotyczą (art. 6 ust. 1 lit. b RODO).
                </span>
              </li>
              <li>
                <strong>Realizacja usług:</strong> W przypadku zawarcia umowy,
                przetwarzamy dane niezbędne do wykonania usługi sprzątania i
                wystawienia faktury.
                <span className="block text-sm text-zinc-500 mt-1">
                  Podstawa prawna: Wykonanie umowy oraz obowiązek prawny
                  (podatkowy).
                </span>
              </li>
              <li>
                <strong>Analityka i Marketing:</strong> Wyłącznie za Twoją
                dobrowolną zgodą analizujemy ruch na stronie (Google Analytics)
                i prowadzimy działania remarketingowe (Google Ads).
                <span className="block text-sm text-zinc-500 mt-1">
                  Podstawa prawna: Zgoda użytkownika (art. 6 ust. 1 lit. a
                  RODO).
                </span>
              </li>
            </ul>
          </Section>

          <Section
            icon={<Lock className="text-zinc-900" size={24} />}
            title="3. Pliki Cookie i Google Consent Mode v2"
          >
            <p>
              Nasza strona jest w pełni dostosowana do najnowszych standardów
              prywatności Google. Działamy w oparciu o{" "}
              <strong>Google Consent Mode v2</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-zinc-400">
              <li>
                <strong>Domyślna blokada:</strong> Po wejściu na stronę, skrypty
                Google Analytics i Google Ads są ładowane w trybie ograniczonym
                (bez cookies). Nie śledzimy Cię bez Twojej zgody.
              </li>
              <li>
                <strong>Twoja decyzja:</strong> Dopiero gdy klikniesz
                "Akceptuję" na naszym banerze, narzędzia te uzyskują pełną
                funkcjonalność (np. zapisywanie preferencji, personalizacja
                reklam).
              </li>
              <li>
                <strong>Wycofanie zgody:</strong> Możesz w każdej chwili zmienić
                zdanie, czyszcząc pliki cookie w przeglądarce.
              </li>
            </ul>
          </Section>

          <Section
            icon={<Eye className="text-zinc-900" size={24} />}
            title="4. Odbiorcy danych"
          >
            <p>
              Z zachowaniem wszelkich gwarancji bezpieczeństwa danych, możemy
              przekazywać Twoje dane podmiotom przetwarzającym je na nasze
              zlecenie:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 marker:text-zinc-400">
              <li>Dostawcy usług hostingowych (Vercel Inc.).</li>
              <li>
                Dostawcy usług analitycznych i reklamowych (Google Ireland
                Ltd.).
              </li>
              <li>Biuro rachunkowe (w celach księgowych).</li>
            </ul>
          </Section>

          <Section
            icon={<FileText className="text-zinc-900" size={24} />}
            title="5. Twoje Prawa"
          >
            <p>Zgodnie z RODO masz prawo do:</p>
            <div className="grid sm:grid-cols-2 gap-3 mt-4 text-sm">
              {[
                "Dostępu do treści swoich danych",
                "Sprostowania (poprawiania) danych",
                "Usunięcia danych (prawo do bycia zapomnianym)",
                "Ograniczenia przetwarzania",
                "Przenoszenia danych",
                "Wniesienia sprzeciwu",
                "Cofnięcia zgody w dowolnym momencie",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-zinc-50 px-3 py-2 rounded border border-zinc-100 text-zinc-700"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              Masz również prawo wniesienia skargi do organu nadzorczego
              (Prezesa Urzędu Ochrony Danych Osobowych), jeśli uznasz, że
              przetwarzanie Twoich danych narusza przepisy.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const Section = ({ icon, title, children }: SectionProps) => (
  <section className="group scroll-mt-24">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-zinc-100 rounded-lg group-hover:bg-zinc-200 transition-colors text-zinc-900">
        {icon}
      </div>
      <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
    </div>
    <div className="text-base leading-7 text-zinc-600 pl-0 md:pl-[3.25rem]">
      {children}
    </div>
  </section>
);
