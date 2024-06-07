import { Skeleton } from "@/components/ui/skeleton";
import { Loader } from "lucide-react";
import Info from "./Info";
import Participants from "./Participants";
import ToolBar from "./ToolBar";


const Loading=()=>{
    return (
        <main className="h-[100vh] w-full bg-[#FDF8F6] flex justify-center items-center touch-none">

            <Loader className="h-6 w-6 text-muted-foreground animate-spin"/>
            <Info.Skeleton/>
            <Participants.Skeleton/>
            <ToolBar.Skeleton/>

        </main>
    )
}

export default Loading;