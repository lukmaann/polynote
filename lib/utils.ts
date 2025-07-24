import { Camera, Color } from "@/types/canvas";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const colors = [
  "#FFB3BA",
  "#FFDFBA",
  "#FFFFBA",
  "#BAFFC9",
  "#BAE1FF",
  "#FFD1DC",
  "#C4FAF8",
  "#B5EAD7",
  "#E2F0CB",
  "#FFDAC1",
  "#FF9AA2",
  "#FFB7B2",
  "#FFDAC1",
  "#C7CEEA",
  "#FFEC94",
  "#F3FFBD",
  "#D4A5A5",
  "#FFE4E1",
  "#E6E6FA",
  "#F0E68C",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdtoColor(connectionId: number): string {
  return colors[connectionId % colors.length];
}

export function pointerEventToCanvasPoint(
  e: React.PointerEvent,
  camera: Camera
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  };
}

export function colorToCss(color:Color){
  return `#${color.r.toString(16).padStart(2, "0")}${color.g.toString(16).padStart(2, "0")}${color.b.toString(16).padStart(2, "0")}`
}
