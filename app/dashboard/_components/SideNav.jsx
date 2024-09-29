'use client'
import { Shield } from "lucide-react";
import { FileVideo } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SideNav() {
    const path = usePathname();
  const MenuOptions = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: PanelsTopLeft,
    },
    {
      id: 2,
      name: "Create New",
      path: "/create-new",
      icon: PanelsTopLeft,
    },
    {
      id: 3,
      name: "Account",
      path: "/account",
      icon: FileVideo,
    },
    {
      id: 4,
      name: "Upgrade",
      path: "/upgrade",
      icon: Shield,
    },
  ];
  return (
    <div className="shadow-md w-64 h-screen p-5">
      <div className="grid gap-2">
        {MenuOptions.map((item, index) => (
            <Link href={item.path}>
             <div key={index} className={`flex gap-3 p-3 items-center hover:bg-violet-700 hover:text-white cursor-pointer rounded-md ${path === item.path && 'bg-violet-700 text-white' }`}>
            <item.icon />
            <h3>{item.name}</h3>
          </div>
            </Link>
         
        ))}
      </div>
    </div>
  );
}

export default SideNav;
