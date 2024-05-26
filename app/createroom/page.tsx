"use client";
import { Poppins, Roboto } from "next/font/google";
import { useOrganizationList } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import NewButton from "./_components/newButton";
import Navbar from "./_components/Navbar";
import SideBar from "./_components/sidebar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useOrganization } from "@clerk/nextjs";

const poppins = Poppins({ weight: '600', subsets: ["latin"] });
const roboto = Roboto({ weight: '400', subsets: ["latin"] });

const Page = () => {
    
    const [hide, setHide] = useState(false);
    const { userMemberships } = useOrganizationList({
        userMemberships: {
            infinite: true
        }
    });
    const organizationLength = userMemberships.data?.length || 0;
    const { user } = useUser();

    return (
        <div className="flex bg-gray-950 h-[calc(90%)] items-center justify-center flex-col w-full p-5 max-sm:p-2">
            <div className="h-[90%] max-sm:h-full max-sm:w-full relative overflow-hidden w-[90%] flex flex-col justify-center items-center bg-white rounded-3xl max-sm:rounded-none shadow-md border border-black">
                <h1 className={`${poppins.className} text-3xl max-sm:text-xl p-5 py-2 text-black`}>
                    Welcome <span className="bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent">{user?.fullName}!</span>
                </h1>
                {hide && <SideBar />}

                <h2 className={`${roboto.className} mb-5 w-[50%] text-center max-sm:w-[90%] text-gray-700`}>
                    Create new WorkSpace or manage existing ones effortlessly
                </h2>

                <div className="flex gap-5 max-sm:flex-col">
                    <NewButton />
                    {organizationLength > 0 && (
                        <Button 
                            variant="outline" 
                            className="rounded-full border    transition-colors" 
                            onClick={() => setHide(!hide)}
                        >
                            Open WorkSpace
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Page;
