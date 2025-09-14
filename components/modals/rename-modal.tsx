"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "../ui/dialog";
import { useRenameModal } from "@/store/use-rename-modal";
import { useEffect, useState, FormEventHandler } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAPiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export const RenameModal = () => {
  const { onClose, isOpen, initialValues } = useRenameModal();
  const [title, setTitle] = useState(initialValues.title);

  const { mutate, pending } = useAPiMutation(api.canvas.update);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    mutate({
      id: initialValues.id,
      title,
    })
      .then(() => {
        toast.success("Canvas name updated");
        onClose();
      })
      .catch(() => {
        toast.error("Failed to rename canvas");
      });
  };

  useEffect(() => {
    setTitle(initialValues.title);
  }, [initialValues.title]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="bg-white text-black border border-gray-200 shadow-lg rounded-lg sm:max-w-md"
      >
        <DialogHeader>
          <DialogTitle>Edit canvas title</DialogTitle>
          <DialogDescription className="text-gray-600">
            You can rename the canvas from here.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            disabled={pending}
            required
            value={title}
            placeholder="New name"
            maxLength={60}
            onChange={(e) => setTitle(e.target.value)}
          />
          <DialogFooter className="flex justify-end gap-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={pending}>
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
