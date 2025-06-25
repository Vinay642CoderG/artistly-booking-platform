import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Connect Event Planners with Performing Artists",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-muted-foreground mb-4">
        Artistly.com is a performing artist booking platform that connects
        talented artists with event planners across India. Whether it's a
        corporate event, wedding, or private party, we make discovering and
        booking the right artist easy and seamless.
      </p>
      <p>
        Our mission is to empower artists and simplify the planning process for
        event organizers by providing a reliable, transparent, and curated
        platform.
      </p>
    </div>
  );
}
