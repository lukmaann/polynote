

import { Skeleton } from "@/components/ui/skeleton";
import { Loader } from "lucide-react";
import Info, { InfoSkeleton } from "./Info";
import Participants from "./Participants";
import ToolBar, { ToolBarSkeleton } from "./ToolBar";
import { ParticipantsSkeleton } from "./Participants";
import Logo from "./Logo";
import { UndoBarSkeleton } from "./undoBar";


const Loading=()=>{
    return (
        <main className="h-[100vh] w-full bg-[#FDF8F6] flex justify-center items-center touch-none">

            <Loader className="h-6 w-6 text-muted-foreground animate-spin"/>
            <h1 className="mx-3 text-xs text-muted-foreground"> Loading the interface</h1>
            {/* <Logo/> */}
            <InfoSkeleton/>
            <ParticipantsSkeleton/>
            <ToolBarSkeleton/>
            <UndoBarSkeleton/>

        </main>
    )
}

export default Loading;