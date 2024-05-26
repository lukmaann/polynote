import Image from "next/image";
import {
    Dialog,DialogContent,DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreateOrganization } from "@clerk/nextjs";



const EmptyOrg=()=>{

    return <div className="flex flex-col justify-center items-center flex-1 h-full">
        <Image src={"/createorg.gif"} alt="empty" height={300} width={300}/>
        <h1 className="text-lg text-center max-sm:text-sm capitalize text-gray-500 p-5">There is No active Workspace</h1>
        <Dialog>
            <DialogTrigger>
                <Button variant="outline" className="rounded-full bg-black text-white hover:text-black">Create Workspace</Button>
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
       
    </div>
}

export default EmptyOrg;