// Stałe dane firmy
const COMPANY_DATA = {
  "@type": "LocalBusiness",
  name: "Błysk - Firma Sprzątająca Kraków",
  image: "https://sprzataniekrakow.pl/og-image.jpg",
  logo: "https://sprzataniekrakow.pl/icon.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Sandora Petöfiego 24/3",
    addressLocality: "Kraków",
    postalCode: "31-712",
    addressCountry: "PL",
  },
  telephone: "+48664917532",
  priceRange: "$$",
};

// Obszar działania (Kraków + do 20 km, wg strony /kontakt)
const AREA_SERVED = [
  "Kraków",
  "Wieliczka",
  "Skawina",
  "Niepołomice",
  "Zielonki",
  "Zabierzów",
].map((name) => ({ "@type": "City", name }));

// Funkcja generująca Schema dla konkretnej usługi (przyda się na podstronach)
export const getServiceSchema = (
  title: string,
  description: string,
  url: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: title,
    provider: COMPANY_DATA,
    areaServed: AREA_SERVED,
    description: description,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "PLN",
      url: `https://sprzataniekrakow.pl${url.endsWith("/") ? url : `${url}/`}`,
    },
  };
};

// Funkcja dla głównego biznesu (na stronę główną)
export const getBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    ...COMPANY_DATA,
    "@id": "https://sprzataniekrakow.pl/#organization",
    url: "https://sprzataniekrakow.pl/",
    email: "biuro@sprzataniekrakow.pl",
    areaServed: AREA_SERVED,
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.0676,
      longitude: 20.0176,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/blysk.krakow",
      "https://www.instagram.com/blysk.krakow",
    ],
  };
};
