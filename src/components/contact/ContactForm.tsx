"use client";

import { useState, useRef, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Tag,
  Handshake,
  AlertTriangle,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

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

interface RadioOptionProps {
  name: string;
  value: string;
  label: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioOption = ({
  name,
  value,
  label,
  icon,
  checked,
  onChange,
}: RadioOptionProps) => (
  <label className="cursor-pointer relative group">
    <input
      type="radio"
      name={name}
      value={value}
      className="cursor-pointer peer sr-only"
      checked={checked}
      onChange={onChange}
    />
    <div
      className={`rounded-xl border p-3 transition-all flex items-center gap-3 ${
        checked
          ? "border-zinc-900 bg-zinc-900 ring-1 ring-zinc-900 shadow-md transform -translate-y-0.5"
          : "border-zinc-200 bg-zinc-50 hover:bg-zinc-100"
      }`}
    >
      <div
        className={`transition-colors ${
          checked ? "text-white" : "text-zinc-400"
        }`}
      >
        {icon}
      </div>
      <span
        className={`text-xs font-medium transition-colors ${
          checked ? "text-white" : "text-zinc-600"
        }`}
      >
        {label}
      </span>
    </div>
  </label>
);

interface InputGroupProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputGroup = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: InputGroupProps) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-xs font-medium text-zinc-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      className="block w-full rounded-lg border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 focus:bg-white transition-all outline-none"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    subject: "wycena",
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    const serviceID = "service_w7pydrv";
    const templateID = "template_89j1yf9";
    const publicKey = "rfINM_ET1rgiQqohf";

    emailjs
      .sendForm(serviceID, templateID, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          if (
            typeof window !== "undefined" &&
            typeof (window as any).gtag === "function"
          ) {
            (window as any).gtag("event", "conversion", {
              send_to: "AW-459488250/fH_5CI_P7YwcEPr3jNsB",
            });
          }

          setStatus("success");
          setFormData({
            subject: "wycena",
            name: "",
            phone: "",
            email: "",
            message: "",
            consent: false,
          });
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section className="pt-32 pb-16 grow bg-zinc-50/50">
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
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
            >
              <div>
                <label className="block text-xs font-medium text-zinc-900 mb-3">
                  Czego dotyczy zgłoszenie?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <RadioOption
                    name="subject"
                    value="wycena"
                    label="Darmowa wycena"
                    icon={<Tag size={18} />}
                    checked={formData.subject === "wycena"}
                    onChange={handleChange}
                  />
                  <RadioOption
                    name="subject"
                    value="wspolpraca"
                    label="Współpraca B2B"
                    icon={<Handshake size={18} />}
                    checked={formData.subject === "wspolpraca"}
                    onChange={handleChange}
                  />
                  <RadioOption
                    name="subject"
                    value="reklamacja"
                    label="Reklamacja"
                    icon={<AlertTriangle size={18} />}
                    checked={formData.subject === "reklamacja"}
                    onChange={handleChange}
                  />
                  <RadioOption
                    name="subject"
                    value="inne"
                    label="Inne pytanie"
                    icon={<MessageSquare size={18} />}
                    checked={formData.subject === "inne"}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputGroup
                  id="name"
                  name="name"
                  label="Imię i nazwisko"
                  placeholder="Jan Kowalski"
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputGroup
                  id="phone"
                  name="phone"
                  label="Telefon"
                  type="tel"
                  placeholder="+48..."
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <InputGroup
                id="email"
                name="email"
                label="Adres e-mail"
                type="email"
                placeholder="jan@firma.pl"
                value={formData.email}
                onChange={handleChange}
              />

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-zinc-700"
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-lg border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 focus:bg-white transition-all outline-none resize-none"
                  placeholder="Opisz, czego potrzebujesz..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className="cursor-pointer mt-1 h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="consent"
                  className="cursor-pointer text-[10px] text-zinc-500 leading-snug"
                >
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                  obsługi zapytania. Administratorem danych jest PHU Błysk.{" "}
                  <Link
                    href="/polityka-prywatnosci"
                    className="cursor-pointer underline hover:text-zinc-900"
                  >
                    Polityka Prywatności
                  </Link>
                  .
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`cursor-pointer w-full inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white shadow-sm transition-all
                  ${
                    status === "success"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-zinc-900 hover:bg-zinc-800"
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Wysyłanie...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 size={16} />
                    Wysłano pomyślnie!
                  </>
                ) : (
                  <>
                    Wyślij wiadomość
                    <Send size={16} />
                  </>
                )}
              </button>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-600 text-xs mt-2 bg-red-50 p-3 rounded-lg border border-red-100">
                  <XCircle size={16} />
                  Wystąpił błąd. Spróbuj ponownie lub zadzwoń.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
