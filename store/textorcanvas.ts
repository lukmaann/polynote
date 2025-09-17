// store/textorcanvas.ts
import { create } from "zustand";

interface ModeStore {
  mode: "canvas" | "editor";
  screenshot: string | null;
  setMode: (mode: "canvas" | "editor") => void;
  setScreenshot: (image: string | null) => void;
}

export const useModeStore = create<ModeStore>((set) => ({
  mode: "editor",
  screenshot: null,
  setMode: (mode) => set({ mode }),
  setScreenshot: (image) => set({ screenshot: image }),
}));
