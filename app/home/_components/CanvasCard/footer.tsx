
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MouseEvent, MouseEventHandler } from "react"


interface FooterProps {
    authorLabel: string,
    time: string,
    disabled: boolean,
    isFavorite: boolean,
    title: string
    onclick: () => void
}

const Footer = ({ title, authorLabel, time, isFavorite, onclick, disabled }: FooterProps) => {

    const handleClick = (e:  MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.stopPropagation();
        e.preventDefault();
        onclick();
    }


    return (
        <div className="p-3 bg-white relative">
            <p className="text-[13px] truncate  max-w-[100%-20px]">
                {title}
            </p>
            <p className="group opacity-100 text-[10px]  text-muted-foreground transition-opacity">
                {authorLabel}, {time}

            </p>
            <button disabled={disabled} 
                onClick={handleClick}
                className={cn("opacity-0 group-hover:opacity-100  hover:text-purple-400 transition absolute text-muted-foreground top-3 right-3", disabled && "cursor-not-allowed ")}
            >
                <Star className={cn(isFavorite && "fill-purple-400 text-purple-400")} />
            </button>
        </div>
    )
}

export default Footer;