"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { CircleFadingPlus } from "lucide-react";
import { useAPiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
import NewCanvasButton from "./newCanvasButton";
import { useRouter } from "next/navigation";


interface EmptyCanvasProps{
    orgId:string;
}


const EmptyCanvas = ({orgId}:EmptyCanvasProps) => {
    const {mutate,pending} = useAPiMutation(api.canvas.create);
    const { organization } = useOrganization();

    const router=useRouter();

    const onClick = () => {
        if (!organization) return;
        mutate({
            title: "Untitled",
            orgId: organization.id,
        }).then((id)=>{
            toast.success("New Canvas Created");
           router.push(`canvas/${id}`);
        }).catch((err)=>{
            toast.error("Failed to create the canvas");
        })
       
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mt-5 pb-10 gap-5">
            <NewCanvasButton orgId={orgId}/>
           

        </div>

    )
}

export default EmptyCanvas;