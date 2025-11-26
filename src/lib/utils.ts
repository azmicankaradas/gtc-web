import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert Turkish text to URL-friendly slug
export function createSlug(text: string): string {
  const turkishToEnglish: { [key: string]: string } = {
    ç: "c",
    Ç: "C",
    ğ: "g",
    Ğ: "G",
    ı: "i",
    İ: "I",
    ö: "o",
    Ö: "O",
    ş: "s",
    Ş: "S",
    ü: "u",
    Ü: "U",
  };

  return text
    .toLowerCase()
    .split("")
    .map((char) => turkishToEnglish[char] || char)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Convert slug back to category name (for reverse lookup)
export function slugToCategory(slug: string, categories: readonly string[]): string | null {
  const normalizedSlug = slug.toLowerCase();
  return (
    categories.find((cat) => createSlug(cat) === normalizedSlug) || null
  );
}
