import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { siteConfig } from "./lib/data";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const metadataBase = new URL("https://klcrcoffee.id");

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    locale: "id_ID",
    url: metadataBase,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://klcrcoffee.id/images/gallery/promo.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      "https://klcrcoffee.id/images/gallery/promo.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function LocalBusinessJsonLd() {
  const toTime = (h: string) => {
    const time = h.trim().replace(".", ":");
    return `${time === "24:00" ? "00:00" : time}:00`;
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteConfig.name,
    description: siteConfig.description,
    url: metadataBase.toString(),
    image: "https://klcrcoffee.id/images/gallery/promo.jpg",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: siteConfig.hours.map((h) => {
      const [opens, closes] = h.time.split(" - ");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: toTime(opens),
        closes: toTime(closes),
      };
    }),
    sameAs: [siteConfig.social.instagram, siteConfig.social.tiktok],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocalBusinessJsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
