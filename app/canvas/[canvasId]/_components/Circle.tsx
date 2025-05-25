import { EllipseLayer } from "@/types/canvas";

interface CircleProps {
    id: string;
    layer: EllipseLayer;
    onPointerDown: (e: React.PointerEvent, id: string) => void;
    selectionColor?: string;
}

const Circle = ({ id, layer, selectionColor, onPointerDown }: CircleProps) => {
    const { x, y, fill, width, height } = layer;

    // Calculate the radius based on width and height
    const radius = Math.min(width, height) / 2;

    return (
        <circle
            className="drop-shadow-md"
            onPointerDown={(e) => onPointerDown(e, id)}
            style={{
                transform: `translate(${x}px, ${y}px)`,
            }}
            cx={radius}  // Circle center x
            cy={radius}  // Circle center y
            r={radius}   // Circle radius
            strokeWidth={1}
            // fill={selectionColor || fill || "#000"}
            stroke="transparent"
        />
    );
};

export default Circle;
