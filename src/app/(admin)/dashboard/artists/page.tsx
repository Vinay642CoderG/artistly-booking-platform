import ArtistTable from "@/components/admin/artists/ArtistTable";
import data from "@/data/data.json";

export default function ArtistListPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Artists</h1>
      <ArtistTable data={data.artists} />
    </main>
  );
}
