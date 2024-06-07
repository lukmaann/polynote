"use client";

import { Dialog,DialogClose,DialogContent,DialogDescription,DialogHeader,DialogFooter,DialogTitle } from "../ui/dialog";
import { useRenameModal } from "@/store/use-rename-modal";
import { useEffect, useState,FormEventHandler } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAPiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
export const RenameModal=()=>{

    const {onClose,onOpen,isOpen,initialValues}=useRenameModal();
    const [title,setTitle]=useState(initialValues.title);

    const {mutate,pending}=useAPiMutation(api.canvas.update);
    
    const onSubmit:FormEventHandler<HTMLFormElement>=(e)=>{
        e.preventDefault();

        mutate({
            id:initialValues.id,
            title
        }).then(()=>{
            toast.success("Canvas name Updated");
            onClose();
        }).catch(()=>{
            toast.error("Failed to rename canvas")
        })
        

    }


 

    useEffect(()=>{
        setTitle(initialValues.title);
    },[initialValues.title])

    return <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Edit canvas Title
                </DialogTitle>
            </DialogHeader>
            <DialogDescription>
                You can rename the canvas from here
            </DialogDescription>
            <form onSubmit={onSubmit} className="space-y-4" >
                <Input disabled={pending} required value={title} placeholder="New Name" maxLength={60} onChange={(e)=>{setTitle(e.target.value)}}/>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="outline">
                            Cancle
                        </Button>
                    </DialogClose>
                    <Button type="submit" disabled={pending}>
                        Save
                    </Button>
                </DialogFooter>

            </form>
        </DialogContent>
    </Dialog>
}