import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Plus, } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import { Settings } from "lucide-react";
const SettingsButton = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="outline" className="w-full flex justify-start px-2 border"><Settings className="h-4 w-4 mr-2" /> Workspace settings</Button>
            </DialogTrigger>
            <DialogContent className="bg-transparent p-0 max-w-[880px] border-none">
                <OrganizationProfile appearance={{
                    baseTheme: neobrutalism,
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