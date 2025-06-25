import ArtistOnboardingForm from "@/components/main/artists/ArtistOnboardingForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artist Onboarding",
  description: "Connect Event Planners with Performing Artists",
};

const ArtistOnboardingpage = () => {
  return (
    <div className="mx-5 py-5">
      <div className="max-w-4xl mx-auto">
        <ArtistOnboardingForm />
      </div>
    </div>
  );
};

export default ArtistOnboardingpage;
