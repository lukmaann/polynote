import Hint from "@/app/home/_components/hint";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


interface userAvatarProps {
    name?: string;
    fallback?: string;
    src?: string;
    borderColor?: string;
}


const UserAvatar = ({ name, fallback, src, borderColor }: userAvatarProps) => {
    return (
        <Hint label={name || "TeamMate"} side="top" sideOffset={10}>
            <Avatar className="h-8 w-8 border-2 rounded-full" style={{ borderColor }}>
                <AvatarImage src={src} />
                <AvatarFallback className="text-xs font-semibold">
                    {fallback}
                </AvatarFallback>

            </Avatar>

        </Hint>
    )

}

export default UserAvatar;