"use client";
import { link } from "fs";
import Link from "next/link";
import Image from "next/image";
import Overlay from "./overlay";
import Footer from "./footer";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton"
import Actions from "@/components/actions";
import { Button } from "@/components/ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { useAPiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
interface CanvasCardProps {
    id: string,
    orgId: string,
    title: string,
    authorName: string,
    authorid: string,
    time: number,
    imageUrl: string
    isFavorite: boolean,

}


const CanvasCard = ({ id, orgId, title, authorName, authorid, time, imageUrl, isFavorite }: CanvasCardProps) => {
    const { userId } = useAuth();

    const { mutate: onFavorite, pending: pendingFavorite } = useAPiMutation(api.canvas.favorite);
    const { mutate: onUnFavorite, pending: pendingUnfavorite } = useAPiMutation(api.canvas.unfavorite);

    const toggleFavorite = () => {
        if (isFavorite) {
            onUnFavorite({ id }).catch((err) => {
                toast.error("Failed to Unfavorite")
            });
        } else {
            onFavorite({ id, orgId }).catch((err) => {
                toast.error("Failed to Favorite")
            });
        }
    }



    const authorLabel = authorid === userId ? "You" : authorName;
    const createdAtLabel = formatDistanceToNow(time, { addSuffix: true });
    return (
        <Link href={`/canvas/${id}`}>
            <div className="group aspect-[100/127] border border-2 rounded-lg flex flex-col justify-between overflow-hidden">
                <div className="relative flex-1 bg-purple-200">
                    <Image src={imageUrl} alt="doddle" fill className="object-contain" />
                    <Overlay />
                    <Actions id={id} title={title} side="right" authorId={authorid} >
                        <button className="z-10 opacity-0 px-3 max-sm:opacity-100 py-2 outline-none group-hover:opacity-100 absolute right-1 top-1 p-3 ">
                            <MoreHorizontalIcon className="text-white opacity-75 hover:opacity-100 transition-opacity" />
                        </button>
                    </Actions>
                </div>
                <Footer
                    isFavorite={isFavorite}
                    title={title}
                    onclick={toggleFavorite}
                    disabled={pendingFavorite || pendingUnfavorite}
                    authorLabel={authorLabel}
                    time={createdAtLabel}
                />


            </div>
        </Link>
    )
}

CanvasCard.Skeleton = function CanvasSkeleton() {

    return <div className=" aspect-[100/127] rounded-lg ">
        <Skeleton className="w-full h-full" />
    </div>
}
export default CanvasCard;