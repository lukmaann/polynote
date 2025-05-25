
gc"use client"

import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import ToolButton from "./tool-button";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";
import { Circle, MousePointer2, MoveRight, Pencil, Square, StickyNote, Type } from "lucide-react";

interface ToolBarProps {
    canvasId: string
    canvasState: CanvasState;
    setCanvasState: (newState: CanvasState) => void;

}

const ToolBar = ({ canvasId, canvasState, setCanvasState }: ToolBarProps) => {

    const data = useQuery(api.canvas.get, {
        id: canvasId as Id<"canvas">
    })

    if (!data) {
        return <ToolBarSkeleton />
    }
    return (
        <div className="absolute top-4 p-1 h-11  flex gap-x-4   shadow-md right-1/2 translate-x-1/2 transform bg-white rounded-lg border max-sm:w-max ">
            <div className="flex gap-x-1 justify-center rounded-md p-1.5 text-white items-center   ">
                <div className="text-black ">

                    <ToolButton label="select"
                        isActive={canvasState.mode == CanvasMode.None || canvasState.mode == CanvasMode.SelectionNet ||
                            canvasState.mode == CanvasMode.Translating ||
                            canvasState.mode == CanvasMode.Resizing ||
                            canvasState.mode == CanvasMode.Pressing}
                        icon={MousePointer2}
                        onClick={() => { setCanvasState({ mode: CanvasMode.None }) }}

                    />

                    <ToolButton label="Text"
                        isActive={
                            canvasState.mode == CanvasMode.Inserting &&
                            canvasState.layerType == LayerType.Text
                        }
                        icon={Type}
                        onClick={() => {
                            setCanvasState({
                                mode: CanvasMode.Inserting,
                                layerType: LayerType.Text
                            })
                        }} />



                    <ToolButton
                        label="Rectangle"
                        isActive={
                            canvasState.mode==CanvasMode.Inserting &&
                            canvasState.layerType==LayerType.Rectangle
                        }
                        icon={Square}
                        onClick={() => {
                            setCanvasState({
                                mode:CanvasMode.Inserting,
                                layerType:LayerType.Rectangle
                            })
                         }} /> 

                    <ToolButton
                        label="Ellipse"
                        isActive={
                            canvasState.mode==CanvasMode.Inserting &&
                            canvasState.layerType==LayerType.Ellipse
                        }
                        icon={Circle}
                        onClick={() => {
                            setCanvasState({
                                mode:CanvasMode.Inserting,
                                layerType:LayerType.Ellipse
                            })
                         }} />

                    <ToolButton
                        label="Pen"
                        isActive={
                            canvasState.mode==CanvasMode.Pencil
                        }
                        icon={Pencil}
                        onClick={() => {
                            setCanvasState({
                                mode:CanvasMode.Pencil
                            })
                         }} />

                    <ToolButton
                        label="Sticky Note"
                        isActive={
                            canvasState.mode==CanvasMode.Inserting &&
                            canvasState.layerType==LayerType.Note
                            

                        }
                        icon={StickyNote}
                        onClick={() => {setCanvasState({
                            mode:CanvasMode.Inserting ,
                            layerType:LayerType.Note
                        })}} />

                    {/* <ToolButton
                        label="Arrow"
                        isActive={false}
                        icon={MoveRight}
                        onClick={() => { }} /> */}

                </div>

            </div>
        </div>
    )
}

export const ToolBarSkeleton = () => {
    return (
        <Skeleton className="absolute top-4 p-1 h-11  flex gap-x-4 w-[250px] max-sm:w-[90%] shadow-lg right-1/2 translate-x-1/2 transform bg-white rounded-lg border " />
    )
}


export default ToolBar;