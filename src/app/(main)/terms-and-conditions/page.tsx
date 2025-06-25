import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms And Conditions",
  description: "Connect Event Planners with Performing Artists",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="mb-4 text-muted-foreground">
        These Terms govern your use of Artistly.com. By accessing or using our
        platform, you agree to be bound by them.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Users must provide accurate and complete information during
          registration.
        </li>
        <li>
          Bookings made through the platform are subject to artist availability
          and manager confirmation.
        </li>
        <li>
          We reserve the right to suspend or terminate accounts for violating
          platform rules.
        </li>
        <li>
          Disputes must be reported through the contact form or official support
          email.
        </li>
      </ul>
    </div>
  );
}
