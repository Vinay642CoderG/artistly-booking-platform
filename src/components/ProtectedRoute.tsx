"use client";
import { useAuthData } from "@/context/hooks/UseAuthData";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useAuthData();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>isLoading...</p>
      </div>
    );
  }

  if (!user) return null; // Prevent render before redirect

  return <>{children}</>;
}
