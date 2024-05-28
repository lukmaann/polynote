"use client";

import { query } from "@/convex/_generated/server";
import EmptySearch from "./empty-search";
import EmptyFav from "./empty-fav";
import EmptyCanvas from "./empty-canvas";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useAPiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
import { CircleFadingPlus } from "lucide-react";
import CanvasCard from "./CanvasCard";
import NewCanvasButton from "./newCanvasButton";

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
    const data = useQuery(api.canvases.get, { orgId });



    if ( data === undefined) {
        return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mt-5 pb-10 gap-5">
            <NewCanvasButton orgId={orgId}/>
            <CanvasCard.Skeleton/>
            <CanvasCard.Skeleton/>
            <CanvasCard.Skeleton/>
            <CanvasCard.Skeleton/>

        </div>
    }

    if (!data.length && query.search) {
        return <div>
            <EmptySearch />
        </div>

    }

    if (!data.length && query.favorite) {
        return (
            <div>
                <EmptyFav />
            </div>
        )
    }

    if (!data.length) {
        return <div>
            <EmptyCanvas orgId={orgId} />
        </div>
    }






    return (
        <div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mt-5 pb-10 gap-5">
                <NewCanvasButton orgId={orgId} />


                {
                    data.map((canvas, index) => {
                        return <CanvasCard key={canvas._id} title={canvas.title} isFavorite={false} imageUrl={canvas.imageUrl} authorid={canvas.authorId} authorName={canvas.authorName} time={canvas._creationTime} id={canvas._id} orgId={canvas.orgId} />

                    })
                }


            </div>
        </div>
    )
}

export default CanvasList;