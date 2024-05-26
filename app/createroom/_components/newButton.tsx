"use client";
import { ArrowRight, Ghost, Lock, MoveRight, MoveUpRight, Unlock } from "lucide-react";


import { CreateOrganization } from "@clerk/nextjs";


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
                
                        <Button variant="ghost" className=" flex  text-white  items-center gap-2   justify-center rounded-full bg-black p-5">
                            Create Workspace 
                        </Button>

                
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