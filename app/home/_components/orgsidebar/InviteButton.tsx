import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent,DialogHeader } from "@/components/ui/dialog";
import { Plus, } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import { Settings } from "lucide-react";
import InviteMember from "./inviteForm";
import InviteButtonTrigger from "./InviteButtonTrigger";



interface inviteButtonProps{
    collapsed:boolean;
}

const InviteButton = ({collapsed}:inviteButtonProps) => {
    return (
        <Dialog>
            <DialogTrigger>
               <InviteButtonTrigger collapsed={collapsed}/>
                
                
              
            </DialogTrigger>
            <DialogContent className="bg-transparent p-2 bg-white max-w-[400px] flex flex-col justify-center items-center">
                
                <InviteMember/>

            </DialogContent>
        </Dialog>
    )
}

export default InviteButton;