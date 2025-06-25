import ContactForm from "@/components/main/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Connect Event Planners with Performing Artists",
};

export default function ContactUs() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
