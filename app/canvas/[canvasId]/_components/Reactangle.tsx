import { colorToCss } from "@/lib/utils";
import { RectangleLayer } from "@/types/canvas";

interface RectangleProps {
    id: string;
    layer: RectangleLayer;
    onPointerDown: (e: React.PointerEvent, id: string) => void;
    selectionColor?: string;
}

const Rectangle = ({ id, layer, selectionColor, onPointerDown }: RectangleProps) => {
    const { x, y, fill, width, height } = layer;

    return (
        <rect
            className="drop-shadow-md"
            onPointerDown={(e) => onPointerDown(e, id)}
            style={{
                transform: `translate(${x}px, ${y}px)`,
          
            }}
            x={0}
            y={0}
            width={width}
            height={height}
            strokeWidth={2}
            fill={fill?colorToCss(fill):"#000"}
            stroke={selectionColor ||  "transparent"}
        />
    );
};

export default Rectangle;
