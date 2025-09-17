"use client";
import { useState, useRef } from "react";

interface Props {
  onSelect: (rect: { x: number; y: number; width: number; height: number }) => void;
  onCancel: () => void;
}

export default function CanvasSelectionOverlay({ onSelect, onCancel }: Props) {
  const [start, setStart] = useState<{ x: number; y: number } | null>(null);
  const [end, setEnd] = useState<{ x: number; y: number } | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setStart({ x: e.clientX, y: e.clientY });
    setEnd(null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!start) return;
    setEnd({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    if (start && end) {
      const rect = {
        x: Math.min(start.x, end.x),
        y: Math.min(start.y, end.y),
        width: Math.abs(start.x - end.x),
        height: Math.abs(start.y - end.y),
      };
      onSelect(rect);
    } else {
      onCancel();
    }
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[1000] bg-black/30 cursor-crosshair"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {start && end && (
        <div
          className="absolute border-2 border-purple-500 bg-purple-500/20"
          style={{
            left: Math.min(start.x, end.x),
            top: Math.min(start.y, end.y),
            width: Math.abs(start.x - end.x),
            height: Math.abs(start.y - end.y),
          }}
        />
      )}
    </div>
  );
}
