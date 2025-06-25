"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-muted min-h-[80vh] flex items-center justify-center px-4 py-16 sm:px-6 sm:py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
          alt="Artist performing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" /> {/* Dark overlay */}
      </div>

      {/* Text Content */}
      <div className="relative text-center max-w-xl sm:max-w-2xl px-4 sm:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-snug">
          Discover & Book Talented Performing Artists
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6">
          Artistly connects Event Planners with Singers, Dancers, DJs, and
          Speakers in just a few clicks.
        </p>
        <Link href="/artists">
          <Button
            size="lg"
            className="text-base sm:text-lg font-medium px-6 sm:px-8"
          >
            Explore Artists
          </Button>
        </Link>
      </div>
    </section>
  );
}
