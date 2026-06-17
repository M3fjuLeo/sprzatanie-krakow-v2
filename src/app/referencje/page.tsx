import { Metadata } from "next";

import ReferencesHero from "@/components/references/ReferencesHero";
import ReferencesList from "@/components/references/ReferencesList";
import ReferencesGallery from "@/components/references/ReferencesGallery";
import ReferencesCTA from "@/components/references/ReferencesCTA";

export const metadata: Metadata = {
  title: "Referencje i Realizacje | Błysk - Sprzątanie B2B Kraków",
  description:
    "Zobacz referencje od naszych klientów (Tauron Arena, biurowce, kancelarie) i galerię realizacji. Zaufany partner w sprzątaniu obiektów w Krakowie.",
  alternates: {
    canonical: "https://sprzataniekrakow.pl/referencje",
  },
};

export default function References() {
  return (
    <main className="bg-white">
      <ReferencesHero />
      <ReferencesList />
      <ReferencesGallery />
      <ReferencesCTA />
    </main>
  );
}
