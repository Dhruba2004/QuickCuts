import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import ThemeTogglebutton from "@/components/ui/ThemeToggle";

function Header() {
  return (
    <div className="p-3 px-5 flex items-center justify-between shadow-md">
      <div className="flex gap-3 items-center">
        <Image src={"/logo.svg"} alt="logo" height={30} width={30} />
        <Link href={'/'}><h2 className="font-bold text-xl">QuickCuts</h2></Link>
      </div>
      <div className="flex gap-3 items-center">
      <ThemeTogglebutton className="absolute top-2 right-6" />
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
