"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="relative h-10 w-auto sm:h-12">
              <Image
                src="/logo.png"
                alt="GTC Endüstriyel"
                width={120}
                height={48}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/urunler"
              className={`relative text-sm font-medium transition-colors ${
                isActive("/urunler")
                  ? "text-orange-500"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Ürünler
              <span
                className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 transition-transform origin-left ${
                  isActive("/urunler")
                    ? "scale-x-100"
                    : "scale-x-0 hover:scale-x-100"
                }`}
              />
            </Link>
            <Link
              href="/kurumsal"
              className={`relative text-sm font-medium transition-colors ${
                isActive("/kurumsal")
                  ? "text-orange-500"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Kurumsal
              <span
                className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 transition-transform origin-left ${
                  isActive("/kurumsal")
                    ? "scale-x-100"
                    : "scale-x-0 hover:scale-x-100"
                }`}
              />
            </Link>
            <Link
              href="/iletisim"
              className={`relative text-sm font-medium transition-colors ${
                isActive("/iletisim")
                  ? "text-orange-500"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              İletişim
              <span
                className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 transition-transform origin-left ${
                  isActive("/iletisim")
                    ? "scale-x-100"
                    : "scale-x-0 hover:scale-x-100"
                }`}
              />
            </Link>
            <Button className="bg-orange-600 text-white hover:bg-orange-700">
              Teklif İste
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors"
            title="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-700/50 py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/urunler"
                className={`text-sm font-medium transition-colors ${
                  isActive("/urunler")
                    ? "text-orange-500"
                    : "text-slate-300 hover:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Ürünler
              </Link>
              <Link
                href="/kurumsal"
                className={`text-sm font-medium transition-colors ${
                  isActive("/kurumsal")
                    ? "text-orange-500"
                    : "text-slate-300 hover:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Kurumsal
              </Link>
              <Link
                href="/iletisim"
                className={`text-sm font-medium transition-colors ${
                  isActive("/iletisim")
                    ? "text-orange-500"
                    : "text-slate-300 hover:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                İletişim
              </Link>
              <Button
                className="bg-orange-600 text-white hover:bg-orange-700 w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Teklif İste
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

