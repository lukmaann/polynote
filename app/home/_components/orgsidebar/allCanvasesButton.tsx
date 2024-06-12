import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LayoutDashboard } from "lucide-react"
import Hint from "../hint";
import { cn } from "@/lib/utils";




interface AllCanvasesButtonProps {
    collapsed: boolean;
    favorite: string;
    mycanvas: string
}

const AllCanvasesButton = ({ collapsed, favorite, mycanvas }: AllCanvasesButtonProps) => {

    if (collapsed) {
        return (
            <Hint label="All canvas" side="right" sideOffset={10}>
                <Button asChild size={"lg"} variant={favorite || mycanvas ? "ghost" : "secondary"} className={cn("w-full flex justify-center px-2 border-none")}>
                    <Link href={"/home"}>
                        <LayoutDashboard className="h-5 w-5" />

                    </Link>
                </Button>
            </Hint>
        )
    }

    return (
        <Button asChild size={"lg"} variant={favorite || mycanvas ? "ghost" : "secondary"} className={cn("w-full flex justify-start px-2 border-none transition-all duration-500 border", collapsed && "justify-center")}>
            <Link href={"/home"}>
                <LayoutDashboard className="h-5 w-5" />
                 <span className="ml-2 ">All Canvases</span>
            </Link>
        </Button>
    )

}


export default AllCanvasesButton;











