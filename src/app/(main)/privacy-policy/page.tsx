import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Connect Event Planners with Performing Artists",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4 text-muted-foreground">
        At Artistly.com, your privacy is important to us. This policy explains
        how we collect, use, and protect your personal data.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          We collect data such as your name, email, and preferences during
          registration and booking.
        </li>
        <li>
          Your data is used to improve our services and personalize your
          experience.
        </li>
        <li>We do not sell your data to third parties.</li>
        <li>All information is securely stored with limited access.</li>
      </ul>
    </div>
  );
}
