"use client"

import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "convex/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton"
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { FolderEdit, Menu } from "lucide-react";
import Hint from "@/app/home/_components/hint";

import { useRenameModal } from "@/store/use-rename-modal";
import Actions from "@/components/actions";

interface InfoProps {
    canvasId: string
}

const font = Poppins({
    subsets: ["latin"],
    weight: ["400"]
})

const Info = ({ canvasId }: InfoProps) => {

    const { onOpen } = useRenameModal();
    const data = useQuery(api.canvas.get, {
        id: canvasId as Id<"canvas">
    })
    // const data=null;

    if (!data) {
        return <InfoSkeleton />
    }

    const canvasTitle = data?.title;



    return (
        <div className="absolute max-sm:hidden max-w-[150px]  top-4  flex gap-2 rounded-lg capitaliz   h-10 border-black right-2  p-0 pl-2 rounded-md justify-start items-center ">
            



           <Hint label="canvas name" side="bottom">
           <Button variant="ghost" className="text-xs rounded-none text-start overflow-hidden hover:bg-transparent h-full w-[calc(100%-10%)] p-1 " >
                <span className="w-full overflow-x-clip ">
                    {data.title}
                </span>
            </Button>
           </Hint>
            
                <Actions title="" side="bottom" id={data._id} authorId={data.authorId}>
                    <Button  size="icon" className="rounded-none hove bg-transparent px-2 hover:bg-transparent text-black ">
                        <Menu size={15}/>
                       

                    </Button>
                </Actions>
            




        </div>
    )
}

export const InfoSkeleton = () => {
    return (
        <Skeleton className="absolute w-[150px] max-sm:hidden bg-white top-3 right-2 px-1.5 h-10 rounded-md flex items-center shadow-md">
            {/* <Skeleton className="bg-white"/> */}

        </Skeleton>

    )
}


export default Info;