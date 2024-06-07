"use client"

import Info from "./Info";
import Logo from "./Logo";
import Participants from "./Participants";
import ToolBar from "./ToolBar";
import { useSelf } from "@/liveblocks.config";
import UndoBar from "./undoBar";


interface CanvasProps{
    canvasId:string;
}

const Canvas = ({canvasId}:CanvasProps) => {
    const info=useSelf((me)=>me.info);
    
  
    return <main className="h-[100vh] w-full bg-[#FDF8F6] flex justify-center items-center touch-none">

        <Info canvasId={canvasId} />
        <Logo/>
        <Participants />
        <ToolBar canvasId={canvasId} />
        <UndoBar canvasId={canvasId}/>

    </main>
}

export default Canvas;