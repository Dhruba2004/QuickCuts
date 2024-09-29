import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Image className="w-full object-contain" src={"/login.jpg"} alt="login" width={500} height={500}/>
      </div>
      <div className="flex justify-center items-center h-screen">
        <SignUp />
      </div>
    </div>
  );
}
