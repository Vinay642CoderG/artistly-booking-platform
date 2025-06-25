import ArtistList from "@/components/main/artists/ArtistList";
import React, { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artist Listing",
  description: "Connect Event Planners with Performing Artists",
};

export default async function ArtistListPage() {
  return (
    <div>
      <Suspense>
        <ArtistList />
      </Suspense>
    </div>
  );
}
