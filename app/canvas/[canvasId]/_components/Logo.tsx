"use client"


import Link from "next/link";
import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton"




const Logo = () => {
    

  

    return (
        <div className="absolute max-sm:hidden  top-4 left-2  p-3 h-12 rounded-md flex items-center "> 
            <Link href={"/home"}>
            <Image src="/logo.png" alt="logo" height={60} width={60}/>
            </Link>
           
           
        </div>
    )
}

export const InfoSkeleton=()=> {
    return (
        <Skeleton className="absolute w-[80px] max-sm:hidden  top-2 left-2 px-1.5 h-12 rounded-md flex items-center shadow-md">
            {/* <Skeleton className="bg-white"/> */}

        </Skeleton>

    )
}


export default Logo;