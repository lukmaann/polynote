"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void; // with canvas
  onSkip: () => void;    // without canvas
}

export default function OpenEditorDialog({ open, onCancel, onConfirm, onSkip }: Props) {
  return (
    <Dialog open={open} onOpenChange={onCancel}>
      <DialogContent className="sm:max-w-md rounded-xl bg-white p-6 shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-900">
            Open Editor
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500 mt-1">
            Do you want to take part of the canvas into the editor?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex flex-col-reverse sm:flex-row justify-end gap-2 mt-4">
          {/* <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button> */}
          <Button
            variant="secondary"
            className="bg-gray-100 text-gray-700 hover:bg-gray-200"
            onClick={onSkip}
          >
            No, Go to Editor
          </Button>
          <Button
            className="bg-purple-600 text-white hover:bg-purple-700"
            onClick={onConfirm}
          >
            Yes, Select 
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
