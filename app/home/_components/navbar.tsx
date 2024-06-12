"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import SearchBar from "./search-input";
import PrimimumButton from "@/components/ui/custom/PrimimumButton";


const Navbar = () => {
    return (
        <nav className="w-full h-[80px]  gap-x-4 flex items-center p-5 ">
            <div className="lg:hidden flex flex-1">
                <OrganizationSwitcher />
            </div>
            <div className="hidden lg:flex lg:flex-1">
                <SearchBar />

            </div>



            <div className="flex gap-x-6">
            
               
            
                <PrimimumButton />
                <div className="rounded-full p-1 hover:border-gray-400 border-2   ">
                    <UserButton />
                </div>
            </div>




        </nav>
    )
}

export default Navbar;