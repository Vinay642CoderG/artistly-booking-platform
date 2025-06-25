"use client";

import { Input, Button } from "@/components/ui";
import { XCircle } from "lucide-react";

export interface IArtistFilters {
  category: string;
  location: string;
  priceMin: string;
  priceMax: string;
}

export interface IArtistFilterProps {
  filters: IArtistFilters;
  setFilters: (filters: IArtistFilters) => void;
  categories: string[];
  locations: string[];
}

export default function ArtistFilter({
  filters,
  setFilters,
  categories,
  locations,
}: IArtistFilterProps) {
  const { category, location, priceMin, priceMax } = filters;

  const updateField = (field: keyof IArtistFilters, value: string) => {
    setFilters({ ...filters, [field]: value });
  };

  const clearFilters = () => {
    setFilters({
      category: "",
      location: "",
      priceMin: "",
      priceMax: "",
    });
  };

  const filtersApplied = category || location || priceMin || priceMax;

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
      <select
        value={category}
        onChange={(e) => updateField("category", e.target.value)}
        className="p-2 border rounded-md w-full"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      <select
        value={location}
        onChange={(e) => updateField("location", e.target.value)}
        className="p-2 border rounded-md w-full"
      >
        <option value="">All Locations</option>
        {locations.map((loc) => (
          <option key={loc}>{loc}</option>
        ))}
      </select>

      <Input
        type="number"
        placeholder="Min Price"
        value={priceMin}
        onChange={(e) => updateField("priceMin", e.target.value)}
      />

      <Input
        type="number"
        placeholder="Max Price"
        value={priceMax}
        onChange={(e) => updateField("priceMax", e.target.value)}
      />

      {filtersApplied && (
        <Button
          variant="outline"
          className="w-full flex items-center bg-red-500 hover:bg-red-400 hover:text-white text-white justify-center gap-2"
          onClick={clearFilters}
        >
          <XCircle className="w-4 h-4" />
          Clear Filters
        </Button>
      )}
    </div>
  );
}
