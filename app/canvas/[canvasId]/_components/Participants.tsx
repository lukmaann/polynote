import { Skeleton } from "@/components/ui/skeleton"

const Participants=()=>{
    return <div className="bg-white rounded-md p-3 items-center shadow-md absolute bottom-2 right-2 flex">
        Participants
    </div>
}

Participants.Skeleton=function participantsSkeleton(){
    return (
        <Skeleton className="bg-white w-[100px] h-10 rounded-md p-3 items-center shadow-md absolute bottom-2 right-2 flex"/>
    )
}

export default Participants