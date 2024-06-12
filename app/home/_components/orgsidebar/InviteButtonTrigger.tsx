import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus, Settings } from "lucide-react"
import Hint from "../hint";
import { cn } from "@/lib/utils";




interface InviteButtonProps {
    collapsed: boolean;

}

const InviteButton = ({ collapsed }: InviteButtonProps) => {

    if (collapsed) {
        return (
            <Hint label="Invite Members" side="right" sideOffset={10}>
                <Button variant="outline" className="w-full flex justify-center px-2 border-none">
                    <Plus className="h-4 w-4 " />


                </Button>
            </Hint>
        )
    }

    return (
        <Button asChild size={"lg"} variant="ghost" className={cn("w-full flex  justify-start px-2 border-none", collapsed && "justify-center")}>
            <Link href={"/home"}>
                <Plus className="h-5 w-5" />
                <span className="ml-2">Invite Members</span>
            </Link>
        </Button>
    )

}


export default InviteButton;











