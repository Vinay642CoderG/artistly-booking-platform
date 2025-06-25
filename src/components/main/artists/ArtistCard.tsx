import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export interface IArtistCard {
  imageUrl: string;
  name: string;
  category: string;
  location: string;
  price_range: string;
}

export default function ArtistCard({
  imageUrl,
  name,
  category,
  location,
  price_range,
}: IArtistCard) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-1">{name}</h2>
        <p className="text-muted-foreground text-sm mb-1">{category}</p>
        <p className="text-sm">📍 {location}</p>
        <p className="text-sm mb-2">💰 {price_range}</p>
        <Button className="w-full">Ask for Quote</Button>
      </CardContent>
    </Card>
  );
}
