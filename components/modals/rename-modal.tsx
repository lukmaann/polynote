"use client";

import { Dialog,DialogClose,DialogContent,DialogDescription,DialogHeader,DialogFooter,DialogTitle } from "../ui/dialog";
import { useRenameModal } from "@/store/use-rename-modal";



export const RenameModal=()=>{
    const {onClose,onOpen,isOpen,initialValues}=useRenameModal();


    return <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Edit canvas Title
                </DialogTitle>
            </DialogHeader>
            <DialogDescription>
                Enter the new Name
            </DialogDescription>
        </DialogContent>
    </Dialog>
}