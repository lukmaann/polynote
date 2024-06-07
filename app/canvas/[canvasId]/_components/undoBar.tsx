"use client"

import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import ToolButton from "./tool-button";
import { ArrowBigRight, Circle, Minus, MousePointer2, MoveRight, Pencil, Redo, Square, Type, Undo } from "lucide-react";

interface ToolBarProps {
    canvasId: string
}

const UndoBar = ({ canvasId }: ToolBarProps) => {

    const data = useQuery(api.canvas.get, {
        id: canvasId as Id<"canvas">
    })

    if (!data) {
        return <UndoBarSkeleton />
    }
    return (
        <div className="absolute bottom-4 p-1 h-11  flex gap-x-4  max-sm:w-[90%] shadow-md left-4 bg-white rounded-lg border ">
            <div className="flex gap-x-1 justify-center rounded-md p-1.5 text-white items-center   p-1.5">
                <div className="text-black ">
                    <ToolButton label="Undo" isActive={false} icon={Undo} onClick={()=>{}}/>
                    <ToolButton label="Redo" isActive={false} icon={Redo} onClick={()=>{}}/>

                </div>
              
            </div>
        </div>
    )
}

export const UndoBarSkeleton = () => {
    return (
        <Skeleton className="absolute top-2 p-1 h-10  flex gap-x-4 w-[45%] max-sm:w-[90%] shadow-lg right-1/2 translate-x-1/2 transform bg-white rounded-lg border " />
    )
}


export default UndoBar;