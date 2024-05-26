"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { CircleFadingPlus } from "lucide-react";


const EmptyCanvas = () => {
    const create = useMutation(api.canvas.create);
    const { organization } = useOrganization();

    const onClick = () => {
        if (!organization) return;
        create({
            title: "Untitled",
            orgId: organization.id,
        })
    }
    return (
        <div className="flex flex-col justify-center items-start">
            <div className=" w-[180px]  h-[180px] border-dashed border-2 rounded-lg flex-col gap-4 text-gray-400  flex justify-center items-center">
                <CircleFadingPlus size={40}/>
                <Button onClick={onClick} variant="ghost" className="bg-black rounded-lg w-[80%] text-white">
                    Create Canvas

                </Button>
            </div>

        </div>

    )
}

export default EmptyCanvas;