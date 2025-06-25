"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut, User, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuthData } from "@/context/hooks/UseAuthData";
import { useRouter } from "next/navigation";

export default function DashboardHeader() {
  const { logout } = useAuthData();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.replace("/login"); // redirect
  };
  return (
    <header className="flex items-center justify-between p-4 border-b shadow-sm bg-white">
      <h1 className="text-xl font-semibold">Manager Dashboard</h1>
      <div className="flex">
        <Link href={"/"} className="text-sm flex items-center gap-1">
          <Globe size={16} />
          View Site
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>Profile</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
