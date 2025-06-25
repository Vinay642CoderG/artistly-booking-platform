"use client";
import { DataTable } from "@/components/ui";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

export type Artist = {
  id: number;
  name: string;
  category: string;
  location: string;
  price_range: string;
  bio: string;
  imageUrl: string;
  ratings: number;
  availability: string[];
  manager_id: number;
};

const columns: ColumnDef<Artist>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "price_range",
    header: "Price Range",
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const artist = row.original;
      return (
        <Button
          variant="outline"
          size="sm"
          onClick={() => alert(`Viewing profile of ${artist.name}`)}
        >
          View
        </Button>
      );
    },
  },
];

export default function ArtistTable({ data }: { data: Artist[] }) {
  return <DataTable columns={columns} data={data} />;
}
