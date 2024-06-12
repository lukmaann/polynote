import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star } from "lucide-react"
import Hint from "../hint";
import { cn } from "@/lib/utils";




interface FavoriteButtonProps {
    collapsed: boolean;
    favorite: string;
    mycanvas: string
}

const FavoriteButton = ({ collapsed, favorite, mycanvas }: FavoriteButtonProps) => {

    if (collapsed) {
        return (
            <Hint label="Favorite canvas" side="right" sideOffset={10}>
                <Button asChild size={"lg"} variant={favorite ? "secondary" : "ghost"} className={cn("w-full flex justify-start px-2 border-none",collapsed && "justify-center")}>
                        <Link href={{
                            pathname: "/home",
                            query: { favorite: true }
                        }}>
                            <Star className="h-5  w-5" />
                        </Link>
                    </Button>
            </Hint>
        )
    }

    return (
        <Button asChild size={"lg"} variant={favorite ? "secondary" : "ghost"} className={cn("w-full flex justify-start px-2 border-none",collapsed && "justify-center")}>
                        <Link href={{
                            pathname: "/home",
                            query: { favorite: true }
                        }}>
                            <Star className="h-5  w-5" />
                            <span className="ml-2">Favorite Canvases</span>
                        </Link>
                    </Button>
    )

}


export default FavoriteButton;











