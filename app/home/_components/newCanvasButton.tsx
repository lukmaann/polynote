
import { Button } from "@/components/ui/button";
import { CircleFadingPlus } from "lucide-react";
import { useAPiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
interface newCanvasButtonProps{
    orgId:string;
}


const NewCanvasButton=({orgId}:newCanvasButtonProps)=>{
    const { mutate, pending } = useAPiMutation(api.canvas.create);

    const onClick = () => {
        mutate({
            orgId, title: "Untitled"
        }).then(() => toast.success("new canvas created")).catch((err) => toast.error("cannot create canvas right now"))
    }
    return    <div className=" aspect-[100/127] max-sm:aspect-[100/50] border-dashed border-2 rounded-lg flex-col gap-4 text-gray-400  flex justify-center items-center">
    <CircleFadingPlus size={40} />
    <Button onClick={onClick} disabled={pending} variant="ghost" className="bg-black rounded-lg w-[80%] text-white">
        Create Canvas
    </Button>
</div>
}

export default NewCanvasButton;