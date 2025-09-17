
import { memo } from "react";
import { connectionIdToColor } from "@/lib/utils";
import { MousePointer2 } from "lucide-react";
import { useOther } from "@/liveblocks.config";



interface CursorProps {
    connectionId: number
}

const Cursor = memo(({
    connectionId
}: CursorProps) => {

    const info = useOther(connectionId, (user) => user?.info);
    const cursor = useOther(connectionId, (user) => user.presence.cursor);

    const name = info?.name || "Team mate";
    if (!cursor) {
        return null;
    }
    const { x, y } = cursor

    return (
        <foreignObject style={{
            transform: `translateX(${x}px) translatey(${y}px)`
        }}
            height={50}
            width={name.length * 10 + 24}
            className="realtive drop-shadow-md">
            <MousePointer2 className="h-5 w-5 " style={{ fill: connectionIdToColor(connectionId), color: connectionIdToColor(connectionId) }} />
            <div className="absolute left-5 px-2  rounded-md font-mono top-5 text-xs " style={{ backgroundColor: connectionIdToColor(connectionId) }}>
                {name}
            </div>
        </foreignObject>
    )
})

Cursor.displayName = "Cursor"

export default Cursor;