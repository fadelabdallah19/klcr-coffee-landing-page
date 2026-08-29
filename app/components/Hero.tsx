"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { siteConfig } from "../lib/data";

const FALLBACK_IMAGE = "/images/gallery/foto.jpg";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section
      id="beranda"
      className="relative min-h-screen overflow-hidden bg-brand-dark text-white"
    >
      <Image
        src={FALLBACK_IMAGE}
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover"
        aria-hidden="true"
      />

      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/hero/hero-vid.mp4"
        poster={FALLBACK_IMAGE}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        onError={() => setVideoFailed(true)}
        onPlaying={() => setVideoFailed(false)}
        style={videoFailed ? { display: "none" } : undefined}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-4 py-24 sm:px-6 lg:py-28">
        <div className="max-w-2xl space-y-6">
          <h1 className="font-sans text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/85">
            {siteConfig.description}
          </p>
        </div>
      </div>
    </section>
  );
}
