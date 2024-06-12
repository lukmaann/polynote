import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Plus, } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import { Settings } from "lucide-react";
import SettingButtonTrigger from "./SettingButtonTrigger";




interface SettingButtonProps {
    collapsed: boolean;
  
}

const SettingsButton = ({ collapsed }: SettingButtonProps) => {
    return (
        <Dialog>
            <DialogTrigger>
                <SettingButtonTrigger collapsed={collapsed} />
            </DialogTrigger>
            <DialogContent className="bg-transparent p-0 max-w-[880px] border-none">
                <OrganizationProfile appearance={{
                   
                    elements: {

                        card: "border-none shadow-none ",
                        navbarButton:"border-none shadow-none",
                        profileSectionPrimaryButton:"border-none shadow-none"
                    },
                    variables: {
                        colorPrimary: "black",

                    }
                }} />

            </DialogContent>
        </Dialog>
    )
}

export default SettingsButton;