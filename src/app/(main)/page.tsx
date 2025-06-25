import HeroSection from "@/components/main/HeroSection";
import type { Metadata } from "next";
import ArtistCategoryList from "@/components/main/artists/ArtistCategoryList";

export const metadata: Metadata = {
  title: "Home | Artistly",
  description: "Connect Event Planners with Performing Artists",
};

export default function HomePage() {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <HeroSection />
      <ArtistCategoryList />
    </div>
  );
}
