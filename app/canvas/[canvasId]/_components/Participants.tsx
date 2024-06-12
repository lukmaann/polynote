"use client";

import { useEffect, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useOthers, useSelf } from "@/liveblocks.config";
import UserAvatar from "./user-avatar";
import { toast } from "sonner";
import { connectionIdtoColor } from "@/lib/utils";

const MAX_USERS = 1;

const Participants = () => {
    const myself = useSelf();
    const others = useOthers();
    const previousOthersLength = useRef(others.length);
    const audioRef = useRef(new Audio('/sounds/newMember.mp3'));

   
        // Load the audio file
        audioRef.current = new Audio('/sounds/newMember.mp3');
    

    useEffect(() => {
        if (others.length>0 && others.length > previousOthersLength.current) {
            audioRef.current.play();
            toast.success(`${others[others.length-1]?.info?.name} joined the canvas` );
            
        }
        previousOthersLength.current = others.length;
    }, [others.length]);

    const hasMoreUsers = others.length > MAX_USERS;

    return (
        <div className="bg-white rounded-md p-4 h-11 items-center shadow-md absolute bottom-2 right-2 flex">
            <div className="flex gap-2 ">
                {myself && (
                    <UserAvatar
                    borderColor={connectionIdtoColor(myself.connectionId)}
                        src={myself?.info?.picture}
                        name={myself?.info?.name}
                        fallback={myself?.info?.name?.[0]}
                    />
                )}
                {others.slice(0, MAX_USERS).map(({ connectionId, info }) => (
                    <UserAvatar
                    borderColor={connectionIdtoColor(connectionId)}

                        key={connectionId}
                        name={info?.name}
                        src={info?.picture}
                        fallback={info?.name?.[0] || "T"}
                    />
                ))}
                {others.length > MAX_USERS && (
                    <UserAvatar
                        name={`${others.length - MAX_USERS} More`}
                        fallback={`+${others.length - MAX_USERS}`}
                    />
                )}
            </div>
        </div>
    );
};

export const ParticipantsSkeleton = () => {
    return (
        <Skeleton className="bg-white w-[100px] h-10 rounded-md p-3 items-center shadow-md absolute bottom-2 right-2 flex" />
    );
};

export default Participants;
