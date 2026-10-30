"use client";

import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import {
  Tag,
  Handshake,
  AlertTriangle,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

type Subject = "wycena" | "wspolpraca" | "reklamacja" | "inne";

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

interface QuoteFormProps {
  defaultSubject?: Subject;
}

const QuoteForm = ({ defaultSubject = "wycena" }: QuoteFormProps) => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    subject: defaultSubject,
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
    const subject = formData.subject;

    const serviceID = "service_w7pydrv";
    const templateID = "template_89j1yf9";
    const publicKey = "rfINM_ET1rgiQqohf";

    emailjs
      .sendForm(serviceID, templateID, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          const isLead = subject === "wycena" || subject === "wspolpraca";

          const gtag = (
            window as Window & { gtag?: (...args: unknown[]) => void }
          ).gtag;
          if (isLead && typeof gtag === "function") {
            gtag("event", "conversion", {
              send_to: "AW-459488250/fH_5CI_P7YwcEPr3jNsB",
            });
          }

          if (isLead) {
            router.push(
              subject === "wspolpraca" ? "/dziekujemy-firma/" : "/dziekujemy/"
            );
            return;
          }

          setStatus("success");
          setFormData({
            subject: defaultSubject,
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
  );
};

export default QuoteForm;
