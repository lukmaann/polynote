import { Skeleton } from "@/components/ui/skeleton"

const Info=()=>{
    return (
        <div className="absolute max-sm:hidden bg-white top-2 left-2 px-1.5 h-12 rounded-md flex items-center shadow-md">
            under construction🏗️
        </div>
    )
}

 Info.Skeleton=function InfoSkeleton(){
    return(
        <Skeleton className="absolute w-[200px] max-sm:hidden bg-white top-2 left-2 px-1.5 h-12 rounded-md flex items-center shadow-md">
            {/* <Skeleton className="bg-white"/> */}
        
    </Skeleton>

    )
 }


export default Info;