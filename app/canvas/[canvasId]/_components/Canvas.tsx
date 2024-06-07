"use client"

import Info from "./Info";
import Participants from "./Participants";
import ToolBar from "./ToolBar";
import { useSelf } from "@/liveblocks.config";


interface CanvasProps{
    canvasId:string;
}

const Canvas = ({canvasId}:CanvasProps) => {
    const info=useSelf((me)=>me.info);
    console.log(info);
    
  
    return <main className="h-[100vh] w-full bg-[#FDF8F6] flex justify-center items-center touch-none">

        <Info />
        <Participants />
        <ToolBar />

    </main>
}

export default Canvas;