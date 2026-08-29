"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { menu, type MenuCategory } from "../lib/data";

const categories: { id: MenuCategory | "semua"; label: string }[] = [
  { id: "semua", label: "Semua" },
  { id: "kopi", label: "Kopi" },
  { id: "non-kopi", label: "Non-Kopi" },
  { id: "Signature Beverages", label: "Signature Beverages" },
  { id: "Ice Blended", label: "Ice Blended" },
  { id: "Tea Series", label: "Tea Series" },
  { id: "Snacks", label: "Snacks" },
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      className={`h-5 w-5 ${direction === "left" ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

function PagerButton({
  direction,
  onClick,
  disabled,
  label,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
  label: string;
}) {
  const base =
    "flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-700 transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={base}
    >
      <ArrowIcon direction={direction} />
    </button>
  );
}

export default function Menu() {
  const [active, setActive] = useState<MenuCategory | "semua">("semua");
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const filtered =
    active === "semua"
      ? menu
      : menu.filter((item) => item.category === active);

  const cols = isMobile ? 2 : 4;
  const rows = isMobile ? 2 : 2;
  const perPage = cols * rows;
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const currentPage = Math.min(page, totalPages - 1);
  const visible = filtered.slice(
    currentPage * perPage,
    currentPage * perPage + perPage
  );

  const handleCategory = (category: MenuCategory | "semua") => {
    setActive(category);
    setPage(0);
  };

  const prev = useCallback(() => {
    setPage((p) => Math.max(0, p - 1));
  }, []);

  const next = useCallback(() => {
    setPage((p) => Math.min(totalPages - 1, p + 1));
  }, [totalPages]);

  const canPrev = currentPage > 0;
  const canNext = currentPage < totalPages - 1;

  return (
    <section id="menu" className="bg-brand-light/50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-sans text-3xl font-bold leading-tight sm:text-4xl">
            Menu
          </h2>
          <p className="mt-3 leading-relaxed text-stone-600">
            Semua diracik dari bahan yang ada di dapur kami. Harga-harganya
            sederhana, rasanya dijamin.
          </p>
        </Reveal>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => handleCategory(category.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                active === category.id
                  ? "bg-brand text-white"
                  : "bg-white text-stone-600 hover:bg-stone-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {visible.map((item, index) => (
              <Reveal
                as="article"
                key={item.name}
                delay={Math.min(index % perPage, 7) * 60}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-transform hover:shadow-md"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={600}
                    height={400}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.popular && (
                    <span className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                      Paling Laris
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-1 p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="min-w-0 flex-1 font-sans text-base font-semibold leading-snug sm:text-lg">
                      {item.name}
                    </h3>
                    <span className="shrink-0 pt-0.5 whitespace-nowrap text-sm font-semibold text-brand sm:text-base">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-600">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <PagerButton
                direction="left"
                onClick={prev}
                disabled={!canPrev}
                label="Sebelumnya"
              />
              <span className="text-sm font-medium text-stone-600">
                {currentPage + 1} / {totalPages}
              </span>
              <PagerButton
                direction="right"
                onClick={next}
                disabled={!canNext}
                label="Berikutnya"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
