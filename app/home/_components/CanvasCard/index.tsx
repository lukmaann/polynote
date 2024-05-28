"use client";
import { link } from "fs";
import Link from "next/link";
import Image from "next/image";
import Overlay from "./overlay";
import Footer from "./footer";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import {Skeleton} from "@/components/ui/skeleton"

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
    const {userId}=useAuth();

    const authorLabel=authorid===userId?"You":authorName;
    const createdAtLabel=formatDistanceToNow(time,{addSuffix:true});
    return (
        <Link href={`/canvas/${id}`}>
            <div className="group aspect-[100/127] border border-2 rounded-lg flex flex-col justify-between overflow-hidden">
                <div className="relative flex-1 bg-purple-200">
                    <Image src={imageUrl} alt="doddle" fill className="object-contain" />
                    <Overlay />
                </div>
                <Footer
                    isFavorite={isFavorite}
                    title={title}
                    onclick={()=>{}}

                    disabled={false}

                    authorLabel={authorLabel}
                    time={createdAtLabel}
                />


            </div>
        </Link>
    )
}

CanvasCard.Skeleton=function CanvasSkeleton(){

    return <div className=" aspect-[100/127] rounded-lg ">
        <Skeleton className="w-full h-full"/>


    </div>
}
export default CanvasCard;