// Product type definition
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  features: string[];
  price: number;
  fabricType: "Nomex" | "GTC" | null;
}

// Available brands
export const BRANDS = [
  "3M",
  "Delta Plus",
  "Starline",
  "YDS",
  "Dräger",
  "BBU",
  "Uvex",
] as const;

export type Brand = (typeof BRANDS)[number];

// Available categories
export const CATEGORIES = [
  "Tüm Ürünler",
  "Genel İş Elbiseleri",
  "Sektörel İş Elbiseleri",
  "Koruyucu Teknik Giysiler & Aksesuarlar",
  "İş Güvenliği Ekipmanları",
  "Ayakkabılar",
  "Trafik Güvenliği",
  "Gaz Ölçüm Cihazları",
  "Yangın Söndürme Ekipmanları",
  "Etiketleme Ve Kilitleme",
] as const;

// Mock products data
export const products: Product[] = [
  // Coveralls (Tulum) - Nomex
  {
    id: "1",
    name: "Nomex Tulum Pro",
    brand: "Delta Plus",
    category: "Koruyucu Teknik Giysiler & Aksesuarlar",
    features: ["FR kumaş", "CE sertifikalı", "Çoklu cepler"],
    price: 3500,
    fabricType: "Nomex",
  },
  {
    id: "2",
    name: "GTC İş Tulumu",
    brand: "Starline",
    category: "Genel İş Elbiseleri",
    features: ["Dayanıklı kumaş", "Rahat kesim", "Pratik cepler"],
    price: 1200,
    fabricType: "GTC",
  },
  // Coats (Kaban)
  {
    id: "3",
    name: "Nomex İş Kabanı",
    brand: "Delta Plus",
    category: "Koruyucu Teknik Giysiler & Aksesuarlar",
    features: ["Yanmaz kumaş", "Su geçirmez", "Reflektör bantlar"],
    price: 2800,
    fabricType: "Nomex",
  },
  {
    id: "4",
    name: "GTC İş Kabanı",
    brand: "Starline",
    category: "Genel İş Elbiseleri",
    features: ["Isı yalıtımı", "Dayanıklı fermuar", "Çok cepli"],
    price: 950,
    fabricType: "GTC",
  },
  // Shirts & Pants
  {
    id: "5",
    name: "Nomex İş Gömleği",
    brand: "Delta Plus",
    category: "Koruyucu Teknik Giysiler & Aksesuarlar",
    features: ["FR özellikli", "Nefes alabilir", "CE onaylı"],
    price: 850,
    fabricType: "Nomex",
  },
  {
    id: "6",
    name: "GTC İş Pantolonu",
    brand: "Starline",
    category: "Genel İş Elbiseleri",
    features: ["Dayanıklı", "Rahat kesim", "Çok cepli"],
    price: 650,
    fabricType: "GTC",
  },
  // Raincoats
  {
    id: "7",
    name: "Su Geçirmez Yağmurluk",
    brand: "Starline",
    category: "Genel İş Elbiseleri",
    features: ["100% su geçirmez", "Hafif", "Katlanabilir"],
    price: 450,
    fabricType: "GTC",
  },
  // Glasses (Gözlükler) - 3M ve Uvex
  {
    id: "8",
    name: "3M Virtua Güvenlik Gözlüğü",
    brand: "3M",
    category: "İş Güvenliği Ekipmanları",
    features: ["UV koruması", "Anti-buğu", "Çizilmeye dayanıklı"],
    price: 150,
    fabricType: null,
  },
  {
    id: "9",
    name: "Uvex Pheos Güvenlik Gözlüğü",
    brand: "Uvex",
    category: "İş Güvenliği Ekipmanları",
    features: ["Polikarbonat cam", "Yan koruma", "Hafif"],
    price: 180,
    fabricType: null,
  },
  {
    id: "10",
    name: "3M SecureFit Güvenlik Gözlüğü",
    brand: "3M",
    category: "İş Güvenliği Ekipmanları",
    features: ["Ergonomik tasarım", "Çizilmeye dayanıklı", "CE sertifikalı"],
    price: 220,
    fabricType: null,
  },
  // Gloves
  {
    id: "11",
    name: "BBU Deri İş Eldiveni",
    brand: "BBU",
    category: "İş Güvenliği Ekipmanları",
    features: ["Deri malzeme", "Dayanıklı", "Rahat"],
    price: 120,
    fabricType: null,
  },
  {
    id: "12",
    name: "Delta Plus Kesilmeye Dayanıklı Eldiven",
    brand: "Delta Plus",
    category: "İş Güvenliği Ekipmanları",
    features: ["Kevlar iplik", "EN 388 sertifikalı", "Yüksek koruma"],
    price: 280,
    fabricType: null,
  },
  // Shoes (Ayakkabılar) - YDS
  {
    id: "13",
    name: "YDS Çelik Burunlu İş Ayakkabısı",
    brand: "YDS",
    category: "Ayakkabılar",
    features: ["SB sertifikalı", "Kaymaz taban", "Nefes alabilir"],
    price: 850,
    fabricType: null,
  },
  {
    id: "14",
    name: "YDS İzole İş Ayakkabısı",
    brand: "YDS",
    category: "Ayakkabılar",
    features: ["Elektrik yalıtımı", "SB sertifikalı", "Dayanıklı"],
    price: 950,
    fabricType: null,
  },
  {
    id: "15",
    name: "YDS Anti-Statik İş Ayakkabısı",
    brand: "YDS",
    category: "Ayakkabılar",
    features: ["Anti-statik özellik", "Rahat", "Pratik"],
    price: 780,
    fabricType: null,
  },
  // Gas Detection Device - Dräger
  {
    id: "16",
    name: "Dräger X-am 2500 Gaz Ölçüm Cihazı",
    brand: "Dräger",
    category: "Gaz Ölçüm Cihazları",
    features: ["1-4 gaz dedektörü", "Ex-Zone 0 onayı", "Suya dayanıklı", "Dayanıklı sensörler"],
    price: 25000,
    fabricType: null,
  },
];

// Helper function to get unique brands from products
export function getUniqueBrands(): string[] {
  return Array.from(new Set(products.map((p) => p.brand))).sort();
}

// Helper function to filter products
export function filterProducts(
  products: Product[],
  selectedCategories: string[],
  selectedBrands: string[]
): Product[] {
  return products.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes("Tüm Ürünler") ||
      selectedCategories.includes(product.category);
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return matchesCategory && matchesBrand;
  });
}

