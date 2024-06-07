"use client"

import { LucideIcon } from "lucide-react";

import Hint from "@/app/home/_components/hint";
import { Button } from "@/components/ui/button";


interface ToolButtonProps {

    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
    isDisabled?: boolean

}


const ToolButton = ({ label, icon :Icon, onClick, isActive, isDisabled }: ToolButtonProps) => {

    return (
       <Hint label={label} side="bottom" sideOffset={5}>
        <Button disabled={isDisabled} size="icon" className="p-1" onClick={onClick} variant={isActive?"canvasActive":"canvas"}>
            <Icon size={15}/>

        </Button>

       </Hint>
    )

}


export default ToolButton;