"use client"

import React, {
    useCallback,
    useState
} from "react";
import {
    Camera,
    CanvasMode,
    CanvasState,
    Color,
    Layer,
    LayerType,
    Point
} from "@/types/canvas";
import Info from "./Info";
import Logo from "./Logo";
import Participants from "./Participants";
import ToolBar from "./ToolBar";
import {
    useHistory,
    useSelf,
    useCanRedo,
    useCanUndo,
    useMutation,
    useStorage
} from "@/liveblocks.config";
import UndoBar from "./undoBar";
import CursorsPresence from "./cursor-presence";
import { pointerEventToCanvasPoint } from "@/lib/utils";
import { nanoid } from "nanoid"
import { LiveObject } from "@liveblocks/client";
import LayerPreview from "./LayerPreivew";




interface CanvasProps {
    canvasId: string;
}

const MAX_LAYERS = 100;

const Canvas = ({ canvasId }: CanvasProps) => {
    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None
    })

    const layerIds = useStorage((root) => root.layerIds);

    const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });
    const [lastUsedColor, setLastUsedColor] = useState<Color>({
        r: 0,
        g: 0,
        b: 0
    }) 


    const onWheel = useCallback((e: React.WheelEvent) => {
        setCamera((camera) => ({
            x: camera.x - e.deltaX,
            y: camera.y - e.deltaY,
        }))
    }, [])

    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();

    const insertLayer = useMutation(({ setMyPresence, storage },
        layerType: LayerType.Ellipse | LayerType.Rectangle | LayerType.Note | LayerType.Text,
        position: Point) => {
        const liveLayers = storage.get("layers");
        if (liveLayers.size >= MAX_LAYERS) {
            return
        }

        const liveLayersIDs = storage.get("layerIds");
        const layerId = nanoid();

        const layer = new LiveObject({
            type: layerType,
            x: position.x,
            y: position.y,
            height: 100,
            width: 100,
            fill: lastUsedColor

        })

        liveLayersIDs.push(layerId);
        liveLayers.set(layerId, layer);

        setMyPresence({ selection: [layerId] }, { addToHistory: true });
        setCanvasState({ mode: CanvasMode.None });
    }, [lastUsedColor])



    const onPointerMove = useMutation(({ setMyPresence }, e: React.PointerEvent) => {
        e.preventDefault()
        const current = pointerEventToCanvasPoint(e, camera);
        setMyPresence({ cursor: current })
    }, [])

    const onPointerLeave = useMutation(({ setMyPresence }, e: React.PointerEvent) => {
        e.preventDefault()
        setMyPresence({ cursor: null })
    }, [])


    const onPointerUp=useMutation(({},e)=>{
       
        const point=pointerEventToCanvasPoint(e,camera);
        console.log({
            point,
            mode:canvasState.mode
        })
        if(canvasState.mode===CanvasMode.Inserting){
            insertLayer(canvasState.layerType,point);
        }else{
           setCanvasState({
            mode:CanvasMode.None,
           })
        }

        history.resume();
    },[camera,canvasState,history,insertLayer])


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
            onPointerUp={onPointerUp}
            className="w-[100vw] h-[100vh] ">
            <g
                style={{ transform: `translate(${camera.x}px, ${camera.y}px) ` }}
            >
                {
                    layerIds.map((layerId)=>(
                       <LayerPreview key={layerId} id={layerId} onLayerPointerDown={()=>{}} selectionColour="#000"/>
                    ))
                }
                <CursorsPresence />

            </g>
        </svg>

    </main>
}

export default Canvas;