"use client"
import Loader from "@/components/ui/auth/loading";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs"
import { useConvexAuth } from "convex/react";
import Image from "next/image";
import EmptyOrg from "./_components/empty-org";
import { useOrganization } from "@clerk/nextjs";
import CanvasList from "./_components/canvas-list";




interface HomePageProps {
  searchParams:{
    search?:string;
    favorites?:string;
  }
}
const Page = ({ searchParams }: HomePageProps) => {
    const { organization } = useOrganization();
    const { isLoading } = useConvexAuth();
    if (isLoading) {
      return <Loader />; 
    }
   
   return(
        <div className=" flex-1 h-[calc(100%-80px)] p-6 m-0 overflow-x-hidden">
            {organization ? <CanvasList orgId={organization.id} query={searchParams}/> : <EmptyOrg />}
        </div>
    )
}

export default Page;