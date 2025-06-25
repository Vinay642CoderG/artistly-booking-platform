"use client";

import { useState } from "react";
import { Home, Users, PlusCircle, MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Manage Artists", href: "/dashboard/artists", icon: Users },
  ];

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-60"
      } transition-all duration-300 bg-gray-100 border-r h-screen p-4 flex flex-col`}
    >
      <div>
        <Button
          variant="outline"
          size="icon"
          className="mb-2 cursor-pointer [&_svg:not([class*='size-'])]:size-5"
          onClick={() => setCollapsed(!collapsed)}
        >
          <MenuIcon className="w-7 h-7" />
        </Button>
      </div>
      <nav className="space-y-2">
        {navItems.map(({ name, href, icon: Icon }) => (
          <Link
            href={href}
            key={name}
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 transition text-sm"
          >
            <Icon className="w-6 h-6" />
            {!collapsed && <span>{name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
