"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products, CATEGORIES, BRANDS, filterProducts, type Product } from "@/lib/mock-data";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { slugToCategory } from "@/lib/utils";

// Format price to Turkish Lira
function formatPrice(price: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Product Card Component
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group rounded-lg border border-slate-700 bg-slate-900/50 p-6 transition-all hover:border-orange-500/50 hover:bg-slate-900">
      {/* Brand - Small gray text above product name */}
      <p className="mb-1 text-xs text-slate-500">{product.brand}</p>

      {/* Product Name */}
      <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-orange-500 transition-colors">
        {product.name}
      </h3>

      {/* Category */}
      <p className="mb-3 text-sm text-slate-400">{product.category}</p>

      {/* Fabric Type Badge (if applicable) */}
      {product.fabricType && (
        <div className="mb-3">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
              product.fabricType === "Nomex"
                ? "bg-red-600/20 text-red-400"
                : "bg-blue-600/20 text-blue-400"
            }`}
          >
            {product.fabricType}
          </span>
        </div>
      )}

      {/* Features */}
      <ul className="mb-4 space-y-1">
        {product.features.slice(0, 3).map((feature, index) => (
          <li key={index} className="text-sm text-slate-300">
            • {feature}
          </li>
        ))}
        {product.features.length > 3 && (
          <li className="text-sm text-slate-400">
            +{product.features.length - 3} özellik daha
          </li>
        )}
      </ul>

      {/* Price */}
      <div className="mt-auto pt-4 border-t border-slate-700">
        <p className="text-xl font-bold text-orange-500">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
}

export default function UrunlerPage() {
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Read category from URL params on mount and when params change
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const category = slugToCategory(categoryParam, CATEGORIES);
      if (category && category !== "Tüm Ürünler") {
        setSelectedCategories([category]);
      } else if (category === "Tüm Ürünler") {
        setSelectedCategories([]);
      }
    } else {
      // If no category param, clear selection
      setSelectedCategories([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.toString()]);

  // Filter products based on selected categories and brands
  const filteredProducts = filterProducts(
    products,
    selectedCategories.length === 0 ? ["Tüm Ürünler"] : selectedCategories,
    selectedBrands
  );

  // Handle category checkbox change
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (category === "Tüm Ürünler") {
      setSelectedCategories(checked ? ["Tüm Ürünler"] : []);
    } else {
      setSelectedCategories((prev) => {
        const filtered = prev.filter((c) => c !== "Tüm Ürünler");
        if (checked) {
          return [...filtered, category];
        } else {
          return filtered.filter((c) => c !== category);
        }
      });
    }
  };

  // Handle brand checkbox change
  const handleBrandChange = (brand: string, checked: boolean) => {
    setSelectedBrands((prev) => {
      if (checked) {
        return [...prev, brand];
      } else {
        return prev.filter((b) => b !== brand);
      }
    });
  };

  // Check if category is selected
  const isCategorySelected = (category: string): boolean => {
    if (category === "Tüm Ürünler") {
      return selectedCategories.length === 0 || selectedCategories.includes("Tüm Ürünler");
    }
    return selectedCategories.includes(category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Filters */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories Filter */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-white">Kategoriler</h3>
                <div className="space-y-3">
                  {CATEGORIES.map((category) => (
                    <Checkbox
                      key={category}
                      id={`category-${category}`}
                      label={category}
                      checked={isCategorySelected(category)}
                      onChange={(e) => handleCategoryChange(category, e.target.checked)}
                    />
                  ))}
                </div>
              </div>

              {/* Brands Filter */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-white">Markalar</h3>
                <div className="space-y-3">
                  {BRANDS.map((brand) => (
                    <Checkbox
                      key={brand}
                      id={`brand-${brand}`}
                      label={brand}
                      checked={selectedBrands.includes(brand)}
                      onChange={(e) => handleBrandChange(brand, e.target.checked)}
                    />
                  ))}
                </div>
              </div>

              {/* Clear Filters Button */}
              {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedBrands([]);
                  }}
                >
                  Filtreleri Temizle
                </Button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-white mb-2">Ürünler</h1>
              <p className="text-slate-400">
                {filteredProducts.length} ürün bulundu
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-slate-400 text-lg">
                  Seçtiğiniz kriterlere uygun ürün bulunamadı.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

