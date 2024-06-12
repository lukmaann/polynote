import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Library } from "lucide-react"
import Hint from "../hint";
import { cn } from "@/lib/utils";




interface MyCanvasButtonProps {
    collapsed: boolean;
    favorite: string;
    mycanvas: string
}

const MyCanvasButton = ({ collapsed, favorite, mycanvas }: MyCanvasButtonProps) => {

    if (collapsed) {
        return (
            <Hint label="My canvas" side="right" sideOffset={10}>
                <Button asChild size={"lg"} variant={mycanvas ? "secondary" : "ghost"} className={cn("w-full flex justify-start px-2 border-none",collapsed && "justify-center")}>
                        <Link href={{
                            pathname: "/home",
                            query: { mycanvas: true }
                        }}>
                              <Library className="h-5 w-5" />
                        </Link>
                    </Button>
            </Hint>
        )
    }

    return (
        <Button asChild size={"lg"} variant={mycanvas ? "secondary" : "ghost"} className={cn("w-full flex justify-start px-2 border-none",collapsed && "justify-center")}>
                        <Link href={{
                            pathname: "/home",
                            query: { mycanvas: true }
                        }}>
                              <Library className="h-5 w-5" />
                            <span className="ml-2">My Canvases</span>
                        </Link>
                    </Button>
    )

}


export default MyCanvasButton;











