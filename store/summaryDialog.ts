// store/summaryDialog.ts
import { create } from "zustand";

interface SummaryDialogState {
  open: boolean;
  summary: string | null;
  openDialog: (summary: string) => void;
  closeDialog: () => void;
}

export const useSummaryDialog = create<SummaryDialogState>((set) => ({
  open: false,
  summary: null,
  openDialog: (summary) => set({ open: true, summary }),
  closeDialog: () => set({ open: false, summary: null }),
}));
