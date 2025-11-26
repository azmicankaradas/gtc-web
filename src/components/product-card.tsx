"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { type Product } from "@/lib/mock-data";

// Format price to Turkish Lira
function formatPrice(price: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

interface ProductCardProps {
  product: Product;
  imagePath?: string;
}

export default function ProductCard({ product, imagePath }: ProductCardProps) {
  // Get image path - use provided path or default based on product
  const getImagePath = () => {
    if (imagePath) return imagePath;
    
    // Special case for Nomex Tulum (first product)
    if (product.id === "1" || product.name.toLowerCase().includes("nomex tulum")) {
      return "/nomextulum.png";
    }
    
    // Default path for other products
    return `/products/${product.id}.png`;
  };
  
  const defaultImagePath = getImagePath();
  const formattedPrice = formatPrice(product.price);

  return (
    <Link href={`/urunler/${product.id}`} className="group h-full">
      <Card className="h-full overflow-hidden border-slate-200 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        {/* GÖRSEL ALANI - VİTRİN KISMI */}
        <div className="relative aspect-square overflow-hidden bg-slate-50 p-6">
          {/* Nomex / GTC Etiketi (Varsa) */}
          {product.fabricType && (product.fabricType === "Nomex" || product.fabricType === "GTC") && (
            <div className="absolute top-3 left-3 z-10">
              <Badge 
                variant={product.fabricType === "Nomex" ? "destructive" : "default"}
                className={product.fabricType === "GTC" ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {product.fabricType}
              </Badge>
            </div>
          )}
          {/* Görselin Kendisi */}
          <div className="relative h-full w-full">
            <Image
              src={defaultImagePath}
              alt={product.name}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        {/* BİLGİ ALANI */}
        <CardContent className="p-4">
          {/* Marka (Küçük gri yazı) */}
          {product.brand && (
            <p className="mb-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {product.brand}
            </p>
          )}
          
          {/* Ürün Adı */}
          <h3 className="line-clamp-2 text-sm font-bold text-slate-900 group-hover:text-orange-600 sm:text-base">
            {product.name}
          </h3>
        </CardContent>
        {/* FİYAT VE BUTON ALANI */}
        <CardFooter className="flex items-center justify-between p-4 pt-0">
          <span className="text-lg font-bold text-slate-900">
            {formattedPrice}
          </span>
          <Button size="sm" variant="outline" className="border-slate-300 hover:border-orange-500 hover:text-orange-600">
            İncele
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

