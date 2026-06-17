import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Błysk",
    default: "Błysk - Firma Sprzątająca Kraków",
  },
  description:
    "Profesjonalne usługi sprzątające dla domu i biznesu. Jakość, której możesz zaufać.",
  openGraph: {
    siteName: "Błysk - Sprzątanie Kraków",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        {/* Domyślna zgoda Google Tag */}
        <Script id="cookie-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'granted',
              'ad_user_data': 'granted',
              'ad_personalization': 'granted',
              'analytics_storage': 'granted',
              'wait_for_update': 500
            });
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2TEVWM42ZP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2TEVWM42ZP');
            gtag('config', 'AW-459488250');
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} bg-white text-zinc-900 font-sans antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
