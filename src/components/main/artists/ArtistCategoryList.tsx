import data from "@/data/data.json";
import ArtistCategoryCard from "@/components/main/artists/ArtistCategoryCard";

export default function ArtistCategoryList() {
  return (
    <section className="mt-5">
      <h2 className="text-2xl font-semibold mb-6">Artist Categories</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {data.categories.map((category) => (
          <ArtistCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
