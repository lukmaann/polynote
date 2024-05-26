"use client";

import { query } from "@/convex/_generated/server";
import EmptySearch from "./empty-search";
import EmptyFav from "./empty-fav";
import EmptyCanvas from "./empty-canvas";

interface CanvasListProps {
    orgId: string;
    query: {
        search?: string;
        favorite?: string;
    }
}
const CanvasList = ({
    orgId, query
}: CanvasListProps) => {
    const data=[] ; //todo api calls

    if(!data.length && query.search){
        return <div>
            <EmptySearch/>
        </div>

    }

    if(!data.length && query.favorite){
        return (
            <div>
                <EmptyFav/>
            </div>
        )
    }

    if(!data.length){
        return <div>
            <EmptyCanvas/>
        </div>
    }






    return (
        <div>
            {JSON.stringify(query)}
        </div>
    )
}

export default CanvasList;