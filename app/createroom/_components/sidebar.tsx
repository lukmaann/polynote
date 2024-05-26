import { OrganizationSwitcher } from "@clerk/nextjs";

import List from "@/app/home/_components/sidebar/list";
import Image from "next/image";
import Link from "next/link";


const SideBar=()=>{
    return (
        <aside className="flex text-white p-3 absolute z-[1] left-0 h-full  bg-black w-[60px]  flex-col gap-y-4">

            
         <Link href={'/home'}><List/></Link>
            

        </aside>
    )
}

export default SideBar;