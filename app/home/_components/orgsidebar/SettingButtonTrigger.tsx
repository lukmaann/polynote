import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Settings } from "lucide-react"
import Hint from "../hint";
import { cn } from "@/lib/utils";




interface SettingsButtonTriggerProps {
    collapsed: boolean;

}

const SettingsButtonTrigger = ({ collapsed }: SettingsButtonTriggerProps) => {

    if (collapsed) {
        return (
            <Hint label="Workspace Settings" side="right" sideOffset={10}>
                <Button variant="outline" className="w-full  bottom-5 flex justify-center px-2 border-none">
                    <Settings className="h-4 w-4 " />


                </Button>
            </Hint>
        )
    }

    return (
        <Button asChild size={"lg"} variant="ghost" className={cn("w-full flex justify-start px-2 border-none", collapsed && "justify-center")}>
            <Link href={"/home"}>
                <Settings className="h-5 w-5" />
                <span className="ml-2">Workspace settings</span>
            </Link>
        </Button>
    )

}


export default SettingsButtonTrigger;











