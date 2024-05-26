import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider

} from "@/components/ui/tooltip"


interface HintProps {
    label: string,
    children: React.ReactNode,
    align?: "start" | "center" | "end",
    side?: "top" | "bottom" | "left" | "right",
    sideOffset?: number;
    alignOffset?: number
}

const Hint = (
    { label, children, align, side, sideOffset, alignOffset }: HintProps
) => {

    return (
       <TooltipProvider>
         <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent  className="text-white capitalize border-black bg-black " side={side} alignOffset={alignOffset} align={align} sideOffset={sideOffset}>
                <p className="">
                    {label}
                </p>
            </TooltipContent>
        </Tooltip>
       </TooltipProvider>
    )

}

export default Hint;