"use client";

import Image from "next/image";
import Link from "next/link";

export interface IArtistCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export default function ArtistCategoryCard({
  category,
}: {
  category: IArtistCategory;
}) {
  return (
    <Link href={`/artists?category=${category.id}`}>
      <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border bg-white">
        <div className="relative h-52 w-full">
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{category.name}</h3>
          <p className="text-muted-foreground text-sm">
            {category.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
