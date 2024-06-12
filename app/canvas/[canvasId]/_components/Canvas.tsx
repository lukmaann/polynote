"use client"

import React, { useCallback, useState } from "react";
import { Camera, CanvasMode, CanvasState } from "@/types/canvas";
import Info from "./Info";
import Logo from "./Logo";
import Participants from "./Participants";
import ToolBar from "./ToolBar";
import { useHistory, useSelf, useCanRedo, useCanUndo, useMutation } from "@/liveblocks.config";
import UndoBar from "./undoBar";
import CursorsPresence from "./cursor-presence";
import { pointerEventToCanvasPoint } from "@/lib/utils";


interface CanvasProps {
    canvasId: string;
}

const Canvas = ({ canvasId }: CanvasProps) => {
    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None
    })

    const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });


    const onWheel = useCallback((e: React.WheelEvent) => {
        setCamera((camera) => ({
            x: camera.x - e.deltaX,
            y: camera.y - e.deltaY,
        }))
    }, [])

    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();

    const onPointerMove = useMutation(({ setMyPresence }, e: React.PointerEvent) => {
        e.preventDefault()
        const current = pointerEventToCanvasPoint(e, camera);
        setMyPresence({ cursor: current })
    }, [])

    const onPointerLeave = useMutation(({ setMyPresence }, e: React.PointerEvent) => {
        e.preventDefault()
        setMyPresence({ cursor: null })
    }, [])


    const info = useSelf((me) => me.info);


    return <main className="h-[100vh] w-full bg-[#FDF8F6] flex justify-center items-center touch-none">

        <Info canvasId={canvasId} />
        <Logo />
        <Participants />
        <ToolBar canvasId={canvasId}
            canvasState={canvasState}
            setCanvasState={setCanvasState}

        />
        <UndoBar canvasId={canvasId} canRedo={canRedo}
            canUndo={canUndo}
            redo={history.redo}
            undo={history.undo} />

        <svg
            onWheel={onWheel}
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
            className="w-[100vw] h-[100vh] ">
            <g>
                <CursorsPresence />
            </g>
        </svg>

    </main>
}

export default Canvas;