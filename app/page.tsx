import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google"; // Importing another font
import Link from "next/link";
import { MoveRight, MoveUpRight, Unlock,CircleUserRound } from "lucide-react";

import Hint from "./home/_components/hint";

const poppinsFont = Poppins({ weight: '600', subsets: ["latin"] });
const robotoFont = Roboto({ weight: '400', subsets: ["latin"] }); // Applying Roboto font

export default function Home() {
  return (
    <main className={`flex h-screen flex-col bg-black ${poppinsFont.className} ${robotoFont.className}`}>
      <nav className="p-2 h-[10%] flex items-center text-white bg-black px-5 z-10">
        <Image src="/logo1.png" alt="Logo" className="w-[4%] object-contain hover:cursor-pointer max-sm:w-[20%]" width={100} height={100} />
        <div className="flex-1 flex justify-end">
          <Link href="/sign-up" className="flex items-center gap-3">
             <CircleUserRound/> Sign up
            
          </Link>
        </div>
      </nav>
      <div className="flex-grow flex justify-between max-sm:flex-wrap max-sm:text-center">
        <div className="w-[55%] max-sm:w-full max-sm:h-[50%] text-white flex rounded-br-[80px] flex-col items-center justify-center p-5">
          <h1 className="text-3xl text-center font-semibold m-4 mb-9 max-sm:mb-4 max-sm:w-[80%] z-10">
            Unlock <Unlock size={20} className="inline" /> creativity and collaboration with <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 inline-block text-transparent bg-clip-text font-bold font-sans px-2">WeDraw</span>
          </h1>
          <h2 className="text-[15px] tracking-wide text-gray-400 max-sm:w-[80%]">
            Collaborate & Create with WeDraw - Your visual workspace
          </h2>
          <Link href="/createroom" className="m-10 w-[200px] group">
            <Button variant="ghost" className="bg-white rounded-xl text-black w-full tracking-tight shadow-md shadow-gray-500">
              Continue <span className="mx-2 group-hover:translate-x-2 transition-transform"><MoveRight size={20} /></span>
            </Button>
          </Link>
        </div>
        <div className="h-[90vh] relative w-[48%] items-center max-sm:w-full max-sm:h-[50%] flex flex-col">
          <Image src="/circle.gif" alt="Workspace" className="w-full h-[100%] object-cover rounded-tl-[80px]" width={1000} height={200} />
          <Hint label="Lukmaan Nadaf" side="left">
            <Link href="#" className="text-gray-600 transform text-sm hover:bg-black px-2 rounded-lg hover:text-white absolute right-0 top-1/2 -translate-y-1/2 -rotate-90">
              Lukn
            </Link>
          </Hint>
        </div>
      </div>
    </main>
  );
}
