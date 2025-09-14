import { create } from "zustand";

type Mode = "canvas" | "editor";

interface ModeState {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export const useModeStore = create<ModeState>((set) => ({
  mode: "editor", // default
  setMode: (mode) => set({ mode }),
}));
