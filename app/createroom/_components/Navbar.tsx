import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Navbar=()=>{
    return <nav className=" gap-x-4 flex justify-between items-center bg-black p-5  w-full h-[calc(10%)] ">
        <div className="flex">
        <Image src={'/logo1.png'} width={50} height={50} alt="logo" className="cursor-pointer" />
        </div>
        
        <div className="rounded-full p-1 border-white border-dashed border border-2">
        <UserButton/>
        </div>
        

    </nav>
}

export default Navbar;