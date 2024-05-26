"use client";

import { Button } from "@/components/ui/button";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";


const OrgSidebar = () => {
    const searchParams = useSearchParams();
    const favorite = searchParams.get("favorite");
    return (
        <div className={cn(" hidden lg:flex h-full flex-col space-y-6 w-[206px] pl-5 pt-3  transition-all delay-1000 ")}>
            <div className="flex items-center gap-x-2 relative ">
                <Image src={'/logo.png'} width={60} height={60} alt="logo" className="cursor-pointer" />
            </div>
            <OrganizationSwitcher hidePersonal  appearance={
                {
                    elements: {
                        

                        rootBox: "flex justify-between items-center p-[6px]  w-full",
                        organizationSwitcherTrigger: {
                            border:"1px solid black",
                            width:"100%",
                            padding:"6px",
                            justifyContent:"space-between",
                        }
                    }
                }
            } />
          
            <div className="space-y-1 w-full flex flex-1 flex-col">
                <Button asChild size={"lg"} variant={favorite ? "ghost" : "secondary"} className="w-full flex justify-start px-2 border">
                    <Link href={"/home"}>
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        All Canvas
                    </Link>

                </Button>
                <Button asChild size={"lg"} variant={favorite ? "secondary" : "ghost"} className="w-full flex justify-start px-2 border">
                    <Link href={{
                        pathname: "/home",
                        query: { favorite:true }
                    }}>
                        <Star className="h-4 w-4 mr-2" />
                        Favorite Canvas
                    </Link>
                </Button>

            </div>
            
          
        </div>
    )
}


export default OrgSidebar;