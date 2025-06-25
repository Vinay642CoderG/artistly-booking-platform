"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/login/LoginForm";
import { useAuthData } from "@/context/hooks/UseAuthData";

export default function LoginFormWrapper() {
  const { user, isLoading } = useAuthData();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      router.replace("/dashboard"); // go to dashboard
    }
  }, [isLoading, user, router]);

  if (isLoading) return null; // wait until auth check is complete
  if (user) return null; // prevent showing login page at all

  return (
    <div>
      <h1 className="text-center text-xl font-medium my-4">
        Welcom to Login Page
      </h1>
      <LoginForm />
    </div>
  );
}
