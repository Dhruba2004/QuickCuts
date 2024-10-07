import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import ThemeTogglebutton from "@/components/ui/ThemeToggle";
import ShinyButton from "@/components/ui/shiny-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section>
      <div className="p-3 px-5 flex items-center justify-between shadow-md">
        <div className="flex gap-3 items-center">
          <Image src={"/logo.svg"} alt="logo" height={30} width={30} />
          <Link href={"/"}>
            <h2 className="font-bold text-xl">QuickCuts</h2>
          </Link>
        </div>
        <div className="flex gap-3 items-center">
        <Link href={'/dashboard'}><Button>Go to dashboard</Button></Link>
          <ThemeTogglebutton className="absolute top-2 right-6" />
          <UserButton />
        </div>
      </div>
      <div className="mt-[7rem] p-4">
      <h2 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Build Your Short Video <span className="text-violet-700">With AI</span>
      </h2>
      <p className="mt-5 text-gray-500 text-2xl text-center">Effortlessly Build AI-Generated Short Videos in Minutes</p>
      <div className="flex justify-center items-center mt-5 gap-5">
        <ShinyButton>Get Started</ShinyButton>
        <Button className="p-4">Watch Video</Button>
        </div>
        
      </div>
    </section>
  );
}
