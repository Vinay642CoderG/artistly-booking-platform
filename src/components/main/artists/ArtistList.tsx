"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import artistsData from "@/data/data.json";
import ArtistFilter, { IArtistFilters } from "./ArtistFilter";
import ArtistCard from "./ArtistCard";

// Utility to get unique values from an array
const unique = (arr: string[]) => Array.from(new Set(arr));

// Utility to parse price range strings like "₹10,000 - ₹25,000"
function parsePriceRange(priceRange: string): [number, number] {
  const match = priceRange.match(/\d{1,3}(,\d{3})*/g);
  if (!match || match.length < 2) return [0, 0];
  const [min, max] = match.map((val) => Number(val.replace(/,/g, "")));
  return [min, max];
}

export default function ArtistList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Initialize filters from searchParams or default to empty string (will be treated as "all")
  const [filters, setFilters] = useState<IArtistFilters>({
    category:
      searchParams.get("category") === "all"
        ? ""
        : searchParams.get("category") || "",
    location:
      searchParams.get("location") === "all"
        ? ""
        : searchParams.get("location") || "",
    priceMin: searchParams.get("priceMin") || "",
    priceMax: searchParams.get("priceMax") || "",
  });

  // Update the URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    params.set("category", filters.category || "all");
    params.set("location", filters.location || "all");
    if (filters.priceMin) params.set("priceMin", filters.priceMin);
    if (filters.priceMax) params.set("priceMax", filters.priceMax);

    router.replace(`${pathname}?${params.toString()}`);
  }, [filters, pathname, router]);

  // Unique category and location values for filter dropdowns
  const categories = useMemo(
    () => unique(artistsData.artists.map((a) => a.category.toLowerCase())),
    []
  );

  const locations = useMemo(
    () => unique(artistsData.artists.map((a) => a.location.toLowerCase())),
    []
  );

  // Filtered artist data based on selected filters
  const filtered = useMemo(() => {
    return artistsData.artists.filter((artist) => {
      const [minPrice, maxPrice] = parsePriceRange(artist.price_range);
      const priceMinVal = filters.priceMin ? parseInt(filters.priceMin) : 0;
      const priceMaxVal = filters.priceMax
        ? parseInt(filters.priceMax)
        : Infinity;

      const priceMatch = minPrice >= priceMinVal && maxPrice <= priceMaxVal;

      return (
        (!filters.category ||
          artist.category.toLowerCase() === filters.category.toLowerCase()) &&
        (!filters.location ||
          artist.location.toLowerCase() === filters.location.toLowerCase()) &&
        priceMatch
      );
    });
  }, [filters]);

  return (
    <div className="px-4 md:px-8 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Browse Performing Artists
      </h1>

      {/* Filter component with categories and locations */}
      <ArtistFilter
        filters={filters}
        setFilters={setFilters}
        categories={categories}
        locations={locations}
      />

      {/* Render filtered artist cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((artist) => (
            <ArtistCard
              key={artist.id}
              category={artist.category}
              imageUrl={artist.imageUrl}
              location={artist.location}
              name={artist.name}
              price_range={artist.price_range}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-muted-foreground">
            No artists found with selected filters.
          </p>
        )}
      </div>
    </div>
  );
}
