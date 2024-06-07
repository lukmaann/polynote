import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent,DialogHeader } from "@/components/ui/dialog";
import { Plus, } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import { Settings } from "lucide-react";
import InviteMember from "./inviteForm";
const InviteButton = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="outline" className="w-full flex justify-start px-2 border"><Plus className="h-4 w-4 mr-2" /> Invite members</Button>
            </DialogTrigger>
            <DialogContent className="bg-transparent p-2 bg-white max-w-[400px] flex flex-col justify-center items-center">
                
                <InviteMember/>

            </DialogContent>
        </Dialog>
    )
}

export default InviteButton;