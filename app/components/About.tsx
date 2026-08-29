import Image from "next/image";
import Reveal from "./Reveal";
import { siteConfig } from "../lib/data";

export default function About() {
  return (
    <section id="tentang" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/about/about.png"
                  alt="Suasana di dalam kedai"
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5">
              <h2 className="font-sans text-3xl font-bold leading-tight sm:text-4xl">
                Tentang {siteConfig.name}
              </h2>
              <p className="leading-relaxed text-stone-600">
                Kami buka pada 2025 dengan satu keinginan: menyajikan kopi
                Nusantara yang jujur dan sederhana. Tidak banyak, karena kami
                percaya yang penting itu rasa, suasana, dan orang-orangnya.
              </p>
              <p className="leading-relaxed text-stone-600">
                “KLCR bukan hanya tentang kopi enak, tapi tentang bagaimana kita bisa menjaga rasa, ruang, dan nilai-nilai yang mulai terlupakan,”
              </p>
              <p className="font-medium text-foreground">
                — Reza Fadhillah, Co-Founder KLCR Coffee.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
