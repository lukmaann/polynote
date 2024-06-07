"use client"

import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import ToolButton from "./tool-button";
import { ArrowBigRight, Circle, Minus, MousePointer2, MoveRight, Pencil, Square, Type } from "lucide-react";

interface ToolBarProps {
    canvasId: string
}

const ToolBar = ({ canvasId }: ToolBarProps) => {

    const data = useQuery(api.canvas.get, {
        id: canvasId as Id<"canvas">
    })

    if (!data) {
        return <ToolBarSkeleton />
    }
    return (
        <div className="absolute top-4 p-1 h-11  flex gap-x-4  max-sm:w-[90%] shadow-md right-1/2 translate-x-1/2 transform bg-white rounded-lg border ">
            <div className="flex gap-x-1 justify-center rounded-md p-1.5 text-white items-center   p-1.5">
                <div className="text-black ">
                    <ToolButton label="select" isActive={false} icon={MousePointer2} onClick={() => { }} />
                    <ToolButton label="Text" isActive={false} icon={Type} onClick={() => { }} />
                    <ToolButton label="Rectangle" isActive={false} icon={Square} onClick={() => { }} />
                    <ToolButton label="Ellipse" isActive={false} icon={Circle} onClick={() => { }} />
                    <ToolButton label="Pen" isActive={false} icon={Pencil} onClick={() => { }} />
                    <ToolButton label="Arrow" isActive={false} icon={MoveRight} onClick={() => { }} />

                </div>

            </div>
        </div>
    )
}

export const ToolBarSkeleton = () => {
    return (
        <Skeleton className="absolute top-4 p-1 h-10  flex gap-x-4 w-[250px] max-sm:w-[90%] shadow-lg right-1/2 translate-x-1/2 transform bg-white rounded-lg border " />
    )
}


export default ToolBar;