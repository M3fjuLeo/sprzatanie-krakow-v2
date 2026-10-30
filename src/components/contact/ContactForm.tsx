import { Mail, Phone, MapPin } from "lucide-react";
import QuoteForm from "./QuoteForm";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  desc?: string;
}

const ContactItem = ({ icon, title, content, desc }: ContactItemProps) => (
  <div className="group flex gap-4 items-start">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-900 shadow-sm transition-colors group-hover:border-zinc-300">
      {icon}
    </div>
    <div>
      <h3 className="text-sm font-medium text-zinc-900">{title}</h3>
      <div className="text-sm text-zinc-500">{content}</div>
      {desc && <p className="text-xs text-zinc-400 mt-1">{desc}</p>}
    </div>
  </div>
);

const ContactForm = () => {
  return (
    <section className="pt-16 pb-16 grow bg-zinc-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[10px] font-medium text-zinc-600 mb-6 border border-zinc-200 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Działamy lokalnie
              </div>
              <h1 className="text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl mb-6">
                Porozmawiajmy o<br />
                Twoim projekcie.
              </h1>
              <p className="text-base text-zinc-500 leading-relaxed mb-12 max-w-md">
                Szukasz profesjonalnego sprzątania w Krakowie? Skontaktuj się z
                nami. Jesteśmy do dyspozycji od poniedziałku do soboty.
              </p>

              <div className="space-y-6">
                <ContactItem
                  icon={<Mail size={20} />}
                  title="Email"
                  content={
                    <a
                      href="mailto:biuro@sprzataniekrakow.pl"
                      className="cursor-pointer hover:text-zinc-900 transition-colors"
                    >
                      biuro@sprzataniekrakow.pl
                    </a>
                  }
                  desc="Odpowiadamy w ciągu 24h."
                />
                <ContactItem
                  icon={<Phone size={20} />}
                  title="Telefon"
                  content={
                    <a
                      href="tel:+48664917532"
                      className="cursor-pointer hover:text-zinc-900 transition-colors"
                    >
                      +48 664 917 532
                    </a>
                  }
                  desc="Pn-Sob: 8:00 - 18:00"
                />
                <ContactItem
                  icon={<MapPin size={20} />}
                  title="Siedziba"
                  content="ul. Sandora Petöfiego 24/3"
                  desc="31-712 Kraków"
                />
              </div>
            </div>

            <div className="hidden lg:block mt-12 p-2 rounded-2xl bg-zinc-100 border border-zinc-200 grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100 shadow-sm hover:shadow-md">
              <div className="aspect-2/1 w-full rounded-xl bg-zinc-200 relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.9998863678956!2d20.01757397686776!3d50.06757651486749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47164536d526707f%3A0x6006437531713028!2sSandora%20Pet%C3%B6fiego%2024%2C%2031-712%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1707210000000!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Krakowa"
                  className="absolute inset-0 h-full w-full"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm h-fit sticky top-24 relative overflow-hidden">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
