import Image from "next/image";
import Reveal from "./Reveal";
import { gallery } from "../lib/data";

export default function Gallery() {
  return (
    <section id="galeri" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-sans text-3xl font-bold leading-tight sm:text-4xl">
            Galeri
          </h2>
          <p className="mt-3 leading-relaxed text-stone-600">
              Berbagai momen yang terekam di KLCR Coffee, dari suasana hangat kedai hingga sajian kopi yang menggugah selera. Nikmati visualisasi pengalaman kami melalui galeri ini.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, index) => (
            <Reveal
              key={image.src}
              delay={index * 70}
              as="figure"
              className="group overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1170}
                height={1463}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
