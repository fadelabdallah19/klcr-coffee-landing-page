"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig } from "../lib/data";

const navLinks = [
  { label: "Home", href: "#beranda" },
  { label: "About", href: "#tentang" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#galeri" },
  { label: "Testimonials", href: "#testimoni" },
];

function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 128" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <path d="M36 27C95 23 226 24 284 27" strokeWidth="10" />
        <path d="M42 101C107 104 216 98 279 101" strokeWidth="10" />
      </g>
      <text
        x="160"
        y="83"
        fill="currentColor"
        fontFamily="Arial Black, Impact, sans-serif"
        fontSize="74"
        fontWeight="900"
        textAnchor="middle"
        letterSpacing="-4"
      >
        KLCR
      </text>
    </svg>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("beranda");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const listRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);

        let current = "beranda";
        for (const { href } of navLinks) {
          const section = document.getElementById(href.slice(1));
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
              current = href.slice(1);
            }
          }
        }
        setActiveId(current);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const update = () => {
      const list = listRef.current;
      const link = linkRefs.current[activeId];
      if (!list || !link) return;

      const listRect = list.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      setIndicator({
        left: linkRect.left - listRect.left,
        width: linkRect.width,
      });
    };

    update();
    const settle = window.setTimeout(update, 450);
    window.addEventListener("resize", update);
    return () => {
      window.clearTimeout(settle);
      window.removeEventListener("resize", update);
    };
  }, [activeId, isScrolled]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      const toggle = document.getElementById("menu-toggle");
      if (
        menu &&
        !menu.contains(e.target as Node) &&
        toggle &&
        !toggle.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [isMenuOpen]);

  const handleNav = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      event.preventDefault();
      setIsMenuOpen(false);
      document
        .getElementById(href.slice(1))
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    []
  );

  const inactiveLinkColor = isScrolled
    ? "text-stone-700 hover:text-brand"
    : "text-white hover:text-white/70";

  return (
    <>
      <nav
        aria-label="Navigasi utama"
        className={`animate-nav-drop fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 rounded-full transition-all duration-300 md:block ${
          isScrolled
            ? "w-[90%] max-w-4xl border border-white/20 bg-white/70 shadow-lg backdrop-blur-md"
            : "w-[95%] max-w-5xl bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          <Link
            href="#beranda"
            onClick={(e) => handleNav(e, "#beranda")}
            aria-label={`${siteConfig.name} beranda`}
            className={`flex items-center transition-colors duration-300 ${
              isScrolled ? "text-brand-dark" : "text-white"
            }`}
          >
            <Logo className="h-9 w-[90px]" />
            <span className="sr-only">{siteConfig.name}</span>
          </Link>

          <ul ref={listRef} className="relative flex items-center gap-1 lg:gap-2">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-brand shadow-sm transition-all duration-300 ease-out"
              style={{ left: indicator.left, width: indicator.width, height: 36 }}
            />
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    ref={(node) => {
                      linkRefs.current[link.href.slice(1)] = node;
                    }}
                    onClick={(e) => handleNav(e, link.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative z-10 block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-white" : inactiveLinkColor
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 md:hidden">
        <div className="pointer-events-auto flex items-center justify-between p-4">
          <Link
            href="#beranda"
            onClick={(e) => handleNav(e, "#beranda")}
            aria-label={`${siteConfig.name} beranda`}
            className="flex items-center rounded-full border border-stone-200/70 bg-white/80 px-4 py-2 text-brand-dark shadow-sm backdrop-blur-sm transition-colors"
          >
            <Logo className="h-6 w-15" />
            <span className="sr-only">{siteConfig.name}</span>
          </Link>

          <button
            id="menu-toggle"
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full border border-stone-200 bg-white/90 shadow-lg backdrop-blur-md transition-colors active:bg-white"
          >
            <span
              className={`h-0.5 w-6 origin-center rounded-full bg-brand-dark transition-all duration-300 ease-in-out ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 origin-center rounded-full bg-brand-dark transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 origin-center rounded-full bg-brand-dark transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`pointer-events-auto absolute right-4 top-20 w-56 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-stone-200 bg-white/95 shadow-2xl backdrop-blur-lg transition-all duration-300 ease-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={`block px-6 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-brand-light text-brand"
                        : "text-stone-600 active:bg-stone-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}