import type { Metadata } from "next";
import Header from "@/components/main/layout/Header";
import Footer from "@/components/main/layout/Footer";

export const metadata: Metadata = {
  title: "Home | Artistly",
  description: "Connect Event Planners with Performing Artists",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] px-4">{children}</main>
      <Footer />
    </>
  );
}
