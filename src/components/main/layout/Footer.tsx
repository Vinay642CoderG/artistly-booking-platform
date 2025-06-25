import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted py-8 mt-12 text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Artistly.com
          </h2>
          <p className="text-sm">Connecting Events with Artists since 2025.</p>
        </div>

        <div className="flex gap-4 text-sm">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms</Link>
        </div>

        <div className="flex gap-4">
          <a href="mailto:support@artistly.com" aria-label="Email">
            <Mail className="w-5 h-5 hover:text-primary" />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter className="w-5 h-5 hover:text-primary" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="w-5 h-5 hover:text-primary" />
          </a>
          <a href="#" aria-label="Facebook">
            <Facebook className="w-5 h-5 hover:text-primary" />
          </a>
        </div>
      </div>

      <div className="text-center text-xs mt-6 text-muted-foreground">
        © {new Date().getFullYear()} Artistly.com. All rights reserved.
      </div>
    </footer>
  );
}
