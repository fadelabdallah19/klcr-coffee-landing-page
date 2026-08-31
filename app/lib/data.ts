export const siteConfig = {
  name: "KLCR Coffee",
  url: "https://klcr-coffee.vercel.app",
  tagline: "Setiap cangkir bercerita",
  description:
    "Setiap cangkir kopi adalah media bercerita tentang tempat asalnya, orang yang menanamnya, dan nilai yang menyertainya",
  address:
    "Jl. Luar Batang V No.42A, RT.10/RW.3, Penjaringan, Kecamatan Penjaringan, Jkt Utara, Daerah Khusus Ibukota Jakarta 14440",
  phone: "+62 812-3456-7890",
  email: "klcrcoffee@gmail.com",
  geo: {
    latitude: -6.1239059,
    longitude: 106.805745,
  },
  hours: [{ days: "Setiap Hari", time: "12.00 - 24.00" }],
  social: {
    instagram: "https://www.instagram.com/klcr.coffee",
    tiktok: "https://www.tiktok.com/@kopiklcr",
  },

  maps:
    "https://www.google.com/maps/place/KLCR+Coffee/@-6.1239059,106.805745,16z/data=!4m15!1m8!3m7!1s0x2e6a1d0037c82b4b:0x39e53cc1cfc0c715!2sKLCR+Coffee!8m2!3d-6.1239059!4d106.805745!10e1!16s%2Fg%2F11mdknf5d7",

  mapsEmbed:
    "https://www.google.com/maps?q=KLCR%20Coffee%20-6.1239059%2C106.805745&z=16&output=embed",
};

export type MenuCategory = "kopi" | "non-kopi" | "Signature Beverages" | "Ice Blended" | "Tea Series" | "Snacks";

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
  popular?: boolean;
}

export const menu: MenuItem[] = [
  // Kopi
  {
    name: "Vanilla Latte",
    description: "Espresso dengan susu, manis vanilla pas di tenggorokan.",
    price: "Rp 20.000",
    category: "kopi",
    image: "/images/menu/kopi/vanilla-latte.png",
  },

  {
    name: "Caramel Latte",
    description: "Latte dengan saus karamel, cocok buat yang suka agak manis.",
    price: "Rp 20.000",
    category: "kopi",
    image: "/images/menu/kopi/caramel-latte.png",
  },

  {
    name: "Hazelnut Latte",
    description: "Kombinasi hazelnut dan susu, creamy dengan aroma kacang.",
    price: "Rp 20.000",
    category: "kopi",
    image: "/images/menu/kopi/hazelnut-latte.png",
  },

  {
    name: "Mochachino",
    description: "Espresso, susu, dan cokelat cair dalam satu cangkir hangat.",
    price: "Rp 22.000",
    category: "kopi",
    image: "/images/menu/kopi/mochachino.png",
  },

  {
    name: "Americano",
    description: "Espresso dicampur air panas. Pahitnya bersih, minim rasa lain.",
    price: "Rp 17.000",
    category: "kopi",
    image: "/images/menu/kopi/americano.png",
    popular: true,
  },

  {
    name: "Espresso",
    description: "Shot pekat asli, buat yang mau kafeinnya langsung nampak.",
    price: "Rp 22.000",
    category: "kopi",
    image: "/images/menu/kopi/espresso.png",
  },

  {
    name: "Affogato",
    description: "Satu scoop es krim vanilla disiram espresso panas. Manis-pahit.",
    price: "Rp 17.000",
    category: "kopi",
    image: "/images/menu/kopi/affogato.png",
  },

  {
    name: "Caffe Latte",
    description: "Susu lebih dominan, pahitnya halus. Enak buat mulai hari.",
    price: "Rp 18.000",
    category: "kopi",
    image: "/images/menu/kopi/caffe-latte.png",
  },

  {
    name: "Cappuccino",
    description: "Espresso, susu, dan busa tebal di atas. Aromanya kuat.",
    price: "Rp 18.000",
    category: "kopi",
    image: "/images/menu/kopi/cappuccino.png",
    popular: true,
  },

  // Non-kopi
  {
    name: "Aren Klepon",
    description: "Mix susu dengan gula aren dan aroma pandan khas klepon.",
    price: "Rp 20.000",
    category: "non-kopi",
    image: "/images/menu/non-kopi/aren-klepon.png",
  },

  {
    name: "Matcha Latte",
    description: "Matcha dicampur susu, creamy dengan rasa teh yang lembut.",
    price: "Rp 20.000",
    category: "non-kopi",
    image: "/images/menu/non-kopi/matcha-latte.png",
    popular: true,
  },

  {
    name: "Pandan Banana",
    description: "Pandan dan pisang di-blend dengan susu, manisnya ringan.",
    price: "Rp 20.000",
    category: "non-kopi",
    image: "/images/menu/non-kopi/pandan-banana.png",
  },

  {
    name: "Choco Yummy",
    description: "Cokelat penuh dicampur susu. Buat yang lagi butuh mood balik.",
    price: "Rp 20.000",
    category: "non-kopi",
    image: "/images/menu/non-kopi/choco-yummy.png",
  },

  // Signature Beverages
  {
    name: "Kopi Aren Latte",
    description: "Signature kami. Kopi susu dengan gula aren murni.",
    price: "Rp 20.000",
    category: "Signature Beverages",
    image: "/images/menu/signature-beverages/kopi-aren-latte.png",
    popular: true,
  },

  {
    name: "KLCR Kopi",
    description: "Racikan andalan khas KLCR yang gak ada di tempat lain.",
    price: "Rp 22.000",
    category: "Signature Beverages",
    image: "/images/menu/signature-beverages/klcr-kopi.png",
  },

  {
    name: "Kopi Pandan Latte",
    description: "Kopi susu dengan aroma pandan, segar dan beda dari yang lain.",
    price: "Rp 23.000",
    category: "Signature Beverages",
    image: "/images/menu/signature-beverages/kopi-pandan-latte.png",
  },

  {
    name: "Choco Cheese",
    description: "Perpaduan cokelat dan keju, manis-gurih yang bikin ketagihan.",
    price: "Rp 23.000",
    category: "Signature Beverages",
    image: "/images/menu/signature-beverages/choco-cheese.png",
    popular: true,
  },

  {
    name: "Matcha Berry",
    description: "Matcha dicampur buah beri, asam-manisnya seimbang.",
    price: "Rp 23.000",
    category: "Signature Beverages",
    image: "/images/menu/signature-beverages/matcha-berry.png",
  },

  // Ice Blended
  {
    name: "Strawberry Yogurt",
    description: "Blend stroberi dan yogurt, dingin dan sedikit asam segar.",
    price: "Rp 23.000",
    category: "Ice Blended",
    image: "/images/menu/ice-blended/strawberry-yogurt.png",
  },

  {
    name: "Banana Oreo",
    description: "Pisang dan oreo di-blend dengan susu. Enak, gak overthinking.",
    price: "Rp 23.000",
    category: "Ice Blended",
    image: "/images/menu/ice-blended/banana-oreo.png",
  },

  // Tea Series
  {
    name: "Earl Grey MilkTea",
    description: "Teh hitam Earl Grey, wangi bergamot, manisnya pas.",
    price: "Rp 23.000",
    category: "Tea Series",
    image: "/images/menu/tea-series/earl-grey-milk-tea.png",
    popular: true,
  },

  {
    name: "Strawberry Tea",
    description: "Teh dengan siraman stroberi. Manis asam, cocok sore hari.",
    price: "Rp 17.000",
    category: "Tea Series",
    image: "/images/menu/tea-series/strawberry-tea.png",
  },

  {
    name: "Lychee Tea",
    description: "Teh rasa leci yang ringan dan menyegarkan.",
    price: "Rp 17.000",
    category: "Tea Series",
    image: "/images/menu/tea-series/lychee-tea.png",
    popular: true,
  },

  // Snacks
  {
    name: "French Fries",
    description: "Kentang goreng renyah dengan pilihan saus.",
    price: "Rp 15.000",
    category: "Snacks",
    image: "/images/menu/snacks/french-fries.png",
    popular: true,
  },

  {
    name: "Cireng",
    description: "Aci goreng khas Sunda, kenyal di dalam dan kriuk di luar.",
    price: "Rp 15.000",
    category: "Snacks",
    image: "/images/menu/snacks/cireng.png",
  },

  {
    name: "Bakpao Mini",
    description: "Bakpao kukus mini, empuk, cocok teman ngopi.",
    price: "Rp 15.000",
    category: "Snacks",
    image: "/images/menu/snacks/bakpao-mini.jpg",
  },

  {
    name: "Mix Platter",
    description: "Campuran camilan untuk dibagi-bagi. Porsinya cukup untuk rame-rame.",
    price: "Rp 20.000",
    category: "Snacks",
    image: "/images/menu/snacks/mix-platter.png",
    popular: true,
  },

];

export interface GalleryItem {
  src: string;
  alt: string;
}

export const gallery: GalleryItem[] = [
  { src: "/images/gallery/foto.jpg", alt: "Menu Kopi" },
  { src: "/images/gallery/klcr.jpg", alt: "Menu Refreshing" },
  { src: "/images/gallery/promo.jpg", alt: "Promo Spesial" }
  
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ebot",
    role: "Rumah nya depan KLCR Coffee",
    quote:
      "Kopi arennya juara, dan tempatnya enak buat kerja sambil dengerin playlist sendiri. Sering balik, gak tahu kenapa.",
    rating: 5,
  },

  {
    name: "Rizky",
    role: "Pelanggan tetap",
    quote:
      "Buka sampai tengah malam, itu yang paling gue suka. Nongkrong bareng temen di sini tuh adem, pelayanannya ramah.",
    rating: 5,
  },

  {
    name: "Fadel",
    role: "Langganan menu Cappuccino",
    quote:
      "Cappuccino nya enak, pas sama selera. Sekali nyoba langsung jadi langganan deh.",
    rating: 5,
  },
];
