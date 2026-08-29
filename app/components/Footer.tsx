import Link from "next/link";
import Reveal from "./Reveal";
import { siteConfig } from "../lib/data";

const footerLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Menu", href: "#menu" },
  { label: "Galeri", href: "#galeri" },
  { label: "Testimoni", href: "#testimoni" },
];

export default function Footer() {
  return (
    <footer id="kontak" className="bg-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal className="grid gap-10 lg:grid-cols-[1.15fr_0.75fr_1fr_1.25fr]">
          <div className="space-y-4">
            <p className="font-sans text-2xl font-bold leading-none">
              KLCR Coffee
            </p>
            <p className="max-w-xs leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white hover:text-brand-dark"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white hover:text-brand-dark"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16.7 3c.3 2.4 1.7 4 4.1 4.2v3.3a7.7 7.7 0 0 1-4.1-1.2v6.1c0 3.1-2.1 5.6-5.7 5.6-3.1 0-5.8-2-5.8-5.2 0-3.5 2.8-5.4 6.1-5.4.4 0 .8 0 1.1.1v3.4a4 4 0 0 0-1.3-.2c-1.4 0-2.4.7-2.4 2 0 1.2 1 1.9 2.2 1.9 1.5 0 2.2-.9 2.2-2.4V3h3.6z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-base font-semibold">
              Navigasi
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-base font-semibold">
              Kontak
            </h3>
            <address className="space-y-3 text-sm not-italic leading-relaxed text-white/70">
              <p>{siteConfig.address}</p>
              <div className="space-y-1.5">
                <a
                  href={`tel:${siteConfig.phone.replaceAll(/[\s-]/g, "")}`}
                  className="block transition-colors hover:text-white"
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </div>
            </address>
            <div className="mt-5 border-t border-white/10 pt-4">
              <h4 className="font-sans text-sm font-semibold">Jam Buka</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-white/70">
                {siteConfig.hours.map((hour) => (
                  <li key={hour.days} className="flex justify-between gap-4">
                    <span>{hour.days}</span>
                    <span className="font-medium text-white">{hour.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-base font-semibold">
              Lokasi
            </h3>
            <div className="overflow-hidden rounded-lg border border-white/15 bg-white/10">
              <iframe
                title="KLCR Coffee Location"
                src={siteConfig.mapsEmbed}
                width="100%"
                height="240"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <p className="sr-only">
                Alamat: {siteConfig.address}
              </p>
            </div>
            <a
              href={siteConfig.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center text-sm font-semibold text-white transition-colors hover:text-white/70"
            >
              Buka di Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
