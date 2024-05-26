"use client";
import { Plus } from "lucide-react";

import { CreateOrganization } from "@clerk/nextjs";
import Hint from "../hint";
import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { dark, neobrutalism } from "@clerk/themes";

const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <Hint label="create organization" side="right" align="start" sideOffset={15} >
                        <button className="w-full h-full flex items-center justify-center rounded-md bg-gray-900">
                            <Plus />
                        </button>

                    </Hint>
                </div>

            </DialogTrigger>
            <DialogContent className="bg-transparent p-0 border-none max-w-[480px]">
                <CreateOrganization afterCreateOrganizationUrl={"/home"}  appearance={{
                    
                    // baseTheme:neobrutalism,
                    variables: {
                        colorPrimary: "black"
                    },
                    
                    elements: {
                       
                        card: "border-none shadow-none ",
                        formButtonPrimary: "shadow-none hover:bg-white hover:text-black",
                        button: "m-0"
                    }
                    ,
                
                }} />
            </DialogContent>
        </Dialog>
    )
}
export default NewButton;