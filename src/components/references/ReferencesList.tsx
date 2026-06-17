"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn, X, FileText } from "lucide-react";

interface ReferenceImage {
  id: number;
  src: string;
  title: string;
  desc: string;
}

const ReferencesList = () => {
  const [selectedImage, setSelectedImage] = useState<ReferenceImage | null>(
    null
  );

  const references: ReferenceImage[] = [
    {
      id: 1,
      src: "/listy_referencyjne/ref1.webp",
      title: "Referencja 1",
      desc: "Potwierdzenie jakości usług sprzątania",
    },
    {
      id: 2,
      src: "/listy_referencyjne/ref2.webp",
      title: "Referencja 2",
      desc: "Rekomendacja partnera biznesowego",
    },
    {
      id: 3,
      src: "/listy_referencyjne/ref3.webp",
      title: "Referencja 3",
      desc: "Opinia po realizacji zlecenia",
    },
    {
      id: 4,
      src: "/listy_referencyjne/ref4.webp",
      title: "Referencja 4",
      desc: "List referencyjny od klienta korporacyjnego",
    },
    {
      id: 5,
      src: "/listy_referencyjne/ref5.webp",
      title: "Referencja 5",
      desc: "Potwierdzenie terminowości i jakości",
    },
    {
      id: 6,
      src: "/listy_referencyjne/ref6.webp",
      title: "Referencja 6",
      desc: "Dokument potwierdzający współpracę",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl font-medium tracking-tight text-zinc-900">
            Oryginały listów referencyjnych
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Kliknij w dokument, aby zobaczyć go w pełnej rozdzielczości.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((ref, index) => (
            <div
              key={ref.id}
              onClick={() => setSelectedImage(ref)}
              className="group cursor-pointer flex flex-col gap-4"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-zinc-200 transition-all duration-300 group-hover:shadow-xl group-hover:ring-zinc-300 group-hover:-translate-y-1">
                <Image
                  src={ref.src}
                  alt={ref.title}
                  fill
                  priority={true}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top opacity-90 transition-opacity group-hover:opacity-100"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/0 transition-all duration-300 group-hover:bg-zinc-900/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-zinc-900 opacity-0 shadow-lg transform scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </div>

              <div className="px-2">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
                  <FileText size={16} className="text-zinc-400" />
                  {ref.title}
                </h3>
                <p className="mt-1 text-xs text-zinc-500 pl-6">{ref.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="cursor-pointer fixed inset-0 z-[100] flex items-center justify-center bg-zinc-900/95 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="cursor-pointer absolute top-6 right-6 p-2 text-zinc-400 hover:text-white transition-colors bg-white/10 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          <div
            className="relative h-full w-full max-w-4xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              className="object-contain rounded-md shadow-2xl"
              quality={100}
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-400 text-sm bg-black/50 px-4 py-2 rounded-full pointer-events-none">
            {selectedImage.title}
          </div>
        </div>
      )}
    </section>
  );
};

export default ReferencesList;
