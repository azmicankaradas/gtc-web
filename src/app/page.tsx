import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="flex h-12 w-12 items-center justify-center rounded bg-blue-600 text-xl font-bold text-white shadow-lg">
                  G
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded bg-blue-600 text-xl font-bold text-white shadow-lg">
                  T
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded bg-blue-600 text-xl font-bold text-white shadow-lg">
                  C
                </div>
              </div>
              <span className="hidden text-2xl font-bold text-blue-500 sm:block">
                Endüstriyel
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              <Link
                href="/urunler"
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                Ürünler
              </Link>
              <Link
                href="/kurumsal"
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                Kurumsal
              </Link>
              <Link
                href="/iletisim"
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                İletişim
              </Link>
              <Button className="bg-orange-600 text-white hover:bg-orange-700">
                Teklif İste
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-slate-300 hover:text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Industrial Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzM3NDE1MSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Zorlu Şartlar İçin
              <br />
              <span className="text-orange-500">Üstün Koruma</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Nomex ve GTC kumaş teknolojileriyle üretilen yanmaz iş kıyafetleri
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-orange-600 text-white hover:bg-orange-700"
              >
                Ürünleri İncele
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800"
              >
                Teklif İste
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
      </section>

      {/* Product Categories Section */}
      <section className="bg-slate-800/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-white">
              Ürün Kategorileri
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
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
              ].map((category, index) => (
                <Link
                  key={index}
                  href={`/urunler/${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900/50 p-4 transition-all hover:border-orange-500/50 hover:bg-slate-900"
                >
                  <span className="text-slate-300 group-hover:text-white">
                    {category}
                  </span>
                  <ChevronRight className="h-5 w-5 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-orange-500" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-slate-400">
            <p>© 2024 GTC Endüstriyel. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}