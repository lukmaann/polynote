"use client";
import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/types/canvas";
import { memo } from "react";
import Reactangle from "./Reactangle";
import Circle from "./Circle";


interface LayerPreivewProps {
    id: string,
    selectionColour?: string,
    onLayerPointerDown: (e: React.PointerEvent, LayerId: string) => void;

}

const LayerPreview = memo((
    { id, selectionColour, onLayerPointerDown }: LayerPreivewProps
) => {


    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) {
        return null;
    }
    switch (layer.type) {
        case LayerType.Rectangle: return(
            <Reactangle id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColour}/>
        );
        case LayerType.Ellipse:return(
            <Circle id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColour}/>
        )
        default: return null;

    }
},)


LayerPreview.displayName = "LayerPreivew"


export default LayerPreview;