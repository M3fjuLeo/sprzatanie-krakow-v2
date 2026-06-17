import Image from "next/image";

const ReferencesGallery = () => {
  const images = [
    {
      src: "/gallery/hotel.webp",
      alt: "Lobby hotelowe i recepcja",
      className: "md:col-span-1",
    },
    {
      src: "/gallery/basen.webp",
      alt: "Strefa mokra i baseny",
      className: "md:col-span-1",
    },
    {
      src: "/gallery/korytarz.webp",
      alt: "Ciągi komunikacyjne",
      className: "md:col-span-1",
    },
    {
      src: "/gallery/szkola-2.webp",
      alt: "Placówki edukacyjne",
      className: "md:col-span-1",
    },
    {
      src: "/gallery/kuchnia.webp",
      alt: "Kuchnie biurowe",
      className: "md:col-span-1",
    },
    {
      src: "/gallery/lazienka.webp",
      alt: "Toalety i sanitariaty",
      className: "md:col-span-1",
    },
    {
      src: "/gallery/hotel2.webp",
      alt: "Pokoje i apartamenty",
      className: "md:col-span-1",
    },
    {
      src: "/gallery/kuchnia3-2.webp",
      alt: "Szczegółowe czyszczenie powierzchni",
      className: "md:col-span-1",
    },
    {
      src: "/gallery/lazienka2.webp",
      alt: "Dezynfekcja armatury",
      className: "md:col-span-1",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-medium tracking-tight text-zinc-900">
            Galeria realizacji
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Wybrane zdjęcia z obsługiwanych przez nas obiektów komercyjnych i
            instytucjonalnych.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-zinc-100 ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-zinc-900/10 transition-colors group-hover:bg-zinc-900/0 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesGallery;
