import RootContextProvider from "@/context/RootContextProvider";
import "./globals.css"; // or tailwind.css
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// app/layout.tsx
export const metadata: Metadata = {
  title: "Home | Artistly",
  description:
    "Artistly is a platform to discover and book performing artists online.",
  keywords: [
    "artists",
    "event booking",
    "music",
    "performance",
    "magician",
    "comedian",
  ],
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootContextProvider>{children}</RootContextProvider>
      </body>
    </html>
  );
}
