import LoginFormWrapper from "@/components/login/LoginFormWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Artistly",
  description: "Login Form",
};

export default function LoginPage() {
  return (
    <div>
      <LoginFormWrapper />
    </div>
  );
}
