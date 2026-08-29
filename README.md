# KLCR Coffee — Landing Page

Landing page satu halaman untuk kedai kopi KLCR Coffee (Penjaringan, Jakarta Utara).

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4

## Menjalankan

```bash
npm install
npm run dev      # development
npm run build    # production build
npm run start    # jalankan hasil build
npm run lint     # lint
```

## Struktur

```
app/
  components/     komponen UI (Hero, Menu, Galeri, dll.)
  lib/data.ts     konten: konfigurasi, menu, galeri, testimoni
  layout.tsx      metadata & SEO (JSON-LD LocalBusiness)
public/
  images/
    gallery/      foto asli kedai
    hero/         video hero
    logo/         logo KLCR
    menu/         foto menu per kategori
```