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
          <Link href="/" className="group flex items-center">
            <div className="relative h-16 w-auto sm:h-20 transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <Image
                src="/logo.png"
                alt="GTC Endüstriyel"
                width={180}
                height={80}
                className="h-full w-auto object-contain drop-shadow-lg brightness-110 contrast-110 group-hover:brightness-125 transition-all duration-300"
                priority
                quality={95}
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

