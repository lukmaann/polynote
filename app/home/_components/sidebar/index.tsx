import { OrganizationSwitcher } from "@clerk/nextjs";
import NewButton from "./new-button";
import List from "./list";
import Image from "next/image";


const SideBar=()=>{
    return (
        <aside className="flex text-white p-3 fixed z-[1] left-0 h-full  bg-black w-[60px] flex-col gap-y-4">

            <List/>
            <NewButton/>
        </aside>
    )
}

export default SideBar;