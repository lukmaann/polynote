import { Skeleton } from "@/components/ui/skeleton";

const ToolBar = () => {
    return (
        <div className="absolute top-3 p-1  flex gap-x-4 w-[45%] max-sm:w-[90%] shadow-lg right-1/2 translate-x-1/2 transform bg-white rounded-lg border ">
            <div className="flex gap-x-1 justify-center rounded-md p-1.5 text-white shadow-md bg-black p-1.5">
                <div className=" ">
                    lock
                </div>
            </div>
        </div>
    )
}

ToolBar.Skeleton=function ToolBarSkeleton(){
    return (
        <Skeleton className="absolute top-2 p-1 h-12  flex gap-x-4 w-[45%] max-sm:w-[90%] shadow-lg right-1/2 translate-x-1/2 transform bg-white rounded-lg border "/>
    )
}


export default ToolBar;