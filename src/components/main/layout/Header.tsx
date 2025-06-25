"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuthData } from "@/context/hooks/UseAuthData";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { user, logout, isLoading } = useAuthData();

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);
  const handleLogout = () => {
    logout();
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/artists", label: "Artists" },
    { href: "/artists/onboarding", label: "Become an Artist" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          Artistly<span className="text-muted-foreground">.com</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            if (link.href == "/dashboard" && !user) {
              return;
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-primary transition"
              >
                {link.label}
              </Link>
            );
          })}
          {user ? (
            <Button
              variant="outline"
              className="bg-red-500 hover:bg-red-600 hover:text-white text-white"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </nav>

        <button onClick={toggleMenu} className="md:hidden">
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="md:hidden px-4 py-4 pb-4 space-y-3 bg-white border-t">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block text-sm">
              {link.label}
            </Link>
          ))}
          {user ? (
            <Button
              variant="outline"
              className="bg-red-500 hover:bg-red-600 hover:text-white text-white"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Link href="/login">
              <Button className="w-full">Login</Button>
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
