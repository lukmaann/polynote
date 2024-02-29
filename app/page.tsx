import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { Milestone } from "lucide-react";


export default function Home() {
  return (
    <main className="flex h-[100vh]  flex-col bg-black  ">
      <nav className="p-2 h-[10%] flex items-center text-white px-5">
        <img src="/logo1.png" alt="" className="w-[4%]  object-contain hover:cursor-pointer" />
        <div className="flex-1 flex justify-end">
          <Link href="/sign-up">
          <Button variant="ghost" className="rounded-3xl border-2 border-dashed  bg-black text-white px-4  group">Sign Up Free <span className="ml-2 transition-opacity text-xl  group-hover:rotate-45">↗</span></Button>

          </Link>
        </div>

      </nav>
      <div className="h-[calc(90%)] flex justify-between ">
        <div className="h-full w-[50%] bg-black text-white flex flex-col items-center justify-center">
          <h1 className="text-xl m-4"> Unlock 🔓 creativity and collaboration with <span className="bg-gradient-to-r from-purple-400 to-purple-600  font-bold transform   text-black px-2">WeDraw</span> </h1>
          <h2 className="text-sm text-gray-400 ">Colaborate & Create with WeDraw - The visual workspace</h2>
          <Link href="/home" className="m-10">
            <Button variant="ghost" className="bg-white rounded-full text-black w-[200px] font-bold ">Continue </Button>
          </Link>


        </div>
        <div className="h-full bg-white border-t-4  relative  border-purple-900 w-[48%]   items-center rounded-tl-[70px]">
          <img src="/work.jpg" alt="" className="w-full  h-[90%] object-contain rounded-tl-lg" />
          <Link href="" className=" text-gray-600 transform  text-sm hover:bg-black px-2 rounded-lg hover:text-white  absolute right-0  top-1/2 -translate-y-1/2 -rotate-90">Lukn </Link>

        </div>

      </div>





    </main>
  );
}
